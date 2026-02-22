(function () {
  // ---------- helpers ----------
  const $ = (s) => document.querySelector(s);
  const params = new URLSearchParams(location.search);

  function save(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
  }
  function load(key, fallback = null) {
    try { return JSON.parse(localStorage.getItem(key)) ?? fallback; }
    catch { return fallback; }
  }

  function formatTime(sec) {
    const m = String(Math.floor(sec / 60)).padStart(2, "0");
    const s = String(sec % 60).padStart(2, "0");
    return `${m}:${s}`;
  }

  function rankFromScore(score) {
    if (score >= 90) return { label: "🏆 Cyber Pro", tier: "pro" };
    if (score >= 75) return { label: "⭐ Cyber Smart", tier: "smart" };
    if (score >= 60) return { label: "✅ Passed", tier: "pass" };
    return { label: "🔄 Retry", tier: "retry" };
  }

  function scoreQuestion(q, pickedIdxs) {
    if (q.type === "single") {
      return pickedIdxs.length === 1 && pickedIdxs[0] === q.answer[0] ? q.points : 0;
    }
    // multiple
    const correct = new Set(q.answer);
    const picked = new Set(pickedIdxs);

    let correctPicked = 0;
    picked.forEach(i => { if (correct.has(i)) correctPicked++; });

    const anyWrong = [...picked].some(i => !correct.has(i));
    const fullMatch = correctPicked === correct.size && picked.size === correct.size && !anyWrong;

    if (fullMatch) return q.points;
    if (correctPicked >= 1 && !anyWrong) return Math.floor(q.points / 2); // 10/20
    return 0;
  }

  // ---------- PAGE: quizzes/index.html ----------
  const topicList = $("#topicList");
  if (topicList) {
    // group picker
    let group = load("quiz_group", "A"); // default A
    const btnA = $("#groupA");
    const btnB = $("#groupB");

    function paintGroup() {
      save("quiz_group", group);
      btnA.className = `btn ${group === "A" ? "btn-color-1" : "btn-color-2"}`;
      btnB.className = `btn ${group === "B" ? "btn-color-1" : "btn-color-2"}`;
    }
    btnA.addEventListener("click", () => { group = "A"; paintGroup(); renderTopics(); });
    btnB.addEventListener("click", () => { group = "B"; paintGroup(); renderTopics(); });
    paintGroup();

    function renderTopics() {
      topicList.innerHTML = "";
      TOPICS.forEach(t => {
        const box = document.createElement("div");
        box.className = "topic-item";
        box.innerHTML = `
          <div class="topic-head">
            <div>
              <div class="topic-name">${t.title}</div>
              <div class="topic-room">Soba: ${t.room}</div>
            </div>
          </div>
          <div class="topic-actions">
            <a class="btn btn-color-1" href="./quiz.html?topic=${t.id}&group=${group}&part=A">Kviz A</a>
            <a class="btn btn-color-2" href="./quiz.html?topic=${t.id}&group=${group}&part=B">Kviz B</a>
          </div>
        `;
        topicList.appendChild(box);
      });
    }
    renderTopics();
    return;
  }

  // ---------- PAGE: quizzes/quiz.html ----------
  const quizCard = $("#quizCard");
  const qrGate = $("#qrGate");

  if (quizCard && qrGate) {
    const topicId = params.get("topic");
    const group = params.get("group"); // "A" | "B"
    const part = params.get("part");   // "A" | "B"

    const topic = TOPICS.find(t => t.id === topicId);
    const pack = QUIZZES?.[topicId]?.[group]?.[part];
    if (!topic || !pack) {
      $("#quizHeader").textContent = "Kviz — greška";
      $("#gateHint").textContent = "Nedostaju podaci za ovaj kviz (provjeri data.js).";
      return;
    }

    $("#quizHeader").textContent = `${topic.title} — Grupa ${group} — Kviz ${part}`;
    $("#roomChip").textContent = topic.room;
    $("#quizTitle").textContent = topic.title;
    $("#quizDesc").textContent = pack.desc || "";

    // --- QR soft gate ---
    // QR je samo convenience (otvara isti link); pravi gate je kod.
    const qrUrl = `${location.origin}${location.pathname}?topic=${topicId}&group=${group}&part=${part}`;
    drawSimpleQR($("#qrCanvas"), qrUrl);

    $("#unlockBtn").addEventListener("click", () => {
      const entered = ($("#gateCode").value || "").trim();
      if (entered !== QUIZ_GATE_CODE) {
        $("#gateHint").textContent = "Pogrešan kod. Probaj ponovo.";
        return;
      }
      qrGate.classList.add("hidden");
      quizCard.classList.remove("hidden");
      startQuiz(topicId, group, part, topic);
    });

    function startQuiz(topicId, group, part, topic) {
      const questions = pack.questions;
      const answers = new Array(questions.length).fill(null).map(() => []);

      let idx = 0;
      let remaining = 10 * 60; // 10 min
      const timerEl = $("#timer");

      const tick = setInterval(() => {
        remaining--;
        timerEl.textContent = formatTime(Math.max(0, remaining));
        if (remaining <= 0) {
          clearInterval(tick);
          finish();
        }
      }, 1000);

      const host = $("#questionHost");
      const prevBtn = $("#prevBtn");
      const nextBtn = $("#nextBtn");
      const bar = $("#progressBar");

      function render() {
        bar.style.width = `${Math.round(((idx + 1) / questions.length) * 100)}%`;
        const q = questions[idx];

        host.innerHTML = "";
        const card = document.createElement("div");
        card.className = "q-question";
        card.innerHTML = `
          <div class="q-qtext">${idx + 1}. ${q.q}</div>
          <div class="q-options" id="opts"></div>
          ${q.explain ? `<div class="q-note" style="margin-top:10px; display:none" id="explain"></div>` : ""}
        `;
        host.appendChild(card);

        const opts = card.querySelector("#opts");
        q.options.forEach((text, i) => {
          const row = document.createElement("label");
          row.className = "q-opt";
          const inputType = q.type === "multiple" ? "checkbox" : "radio";
          row.innerHTML = `
            <input type="${inputType}" name="q${idx}" value="${i}" />
            <div>${text}</div>
          `;
          const inp = row.querySelector("input");
          // restore
          if (answers[idx].includes(i)) inp.checked = true;

          inp.addEventListener("change", () => {
            if (q.type === "single") {
              answers[idx] = [i];
              // uncheck others handled by radio group
            } else {
              if (inp.checked) answers[idx] = [...new Set([...answers[idx], i])];
              else answers[idx] = answers[idx].filter(x => x !== i);
            }
          });

          opts.appendChild(row);
        });

        prevBtn.style.visibility = idx === 0 ? "hidden" : "visible";
        nextBtn.textContent = idx === questions.length - 1 ? "Završi" : "Dalje";
      }

      prevBtn.addEventListener("click", () => { if (idx > 0) { idx--; render(); } });
      nextBtn.addEventListener("click", () => {
        if (idx === questions.length - 1) finish();
        else { idx++; render(); }
      });

      function finish() {
        clearInterval(tick);

        // score
        let total = 0;
        const breakdown = questions.map((q, i) => {
          const pts = scoreQuestion(q, answers[i]);
          total += pts;
          return { id: q.id, pts, max: q.points };
        });

        const pass = total >= 60;
        const rank = rankFromScore(total);
        const key = group === "A" ? topic.keyA : topic.keyB;

        // persist progress
        const progress = load("quiz_progress", { keys: [], results: {} });
        const resultId = `${topicId}_${group}_${part}`;
        progress.results[resultId] = { total, pass, rank: rank.label, at: new Date().toISOString() };
        if (pass && !progress.keys.includes(key)) progress.keys.push(key);
        save("quiz_progress", progress);

        // redirect result page
        const payload = encodeURIComponent(JSON.stringify({
          topicId, group, part,
          title: topic.title,
          room: topic.room,
          total, pass, rank: rank.label,
          key: pass ? key : null,
          breakdown
        }));
        location.href = `./result.html?r=${payload}`;
      }

      render();
    }

    // super-simple “QR-like” placeholder (nije pravi QR standard)
    // Ako želiš pravi QR, ubacimo malu JS biblioteku kasnije.
    function drawSimpleQR(canvas, text) {
      const ctx = canvas.getContext("2d");
      ctx.clearRect(0,0,canvas.width,canvas.height);
      ctx.fillStyle = "#fff";
      ctx.fillRect(0,0,canvas.width,canvas.height);
      ctx.fillStyle = "#000";
      // vizuelni placeholder (da ne blokiramo rad): napišemo link + “scan”
      ctx.font = "12px sans-serif";
      wrapText(ctx, "SCAN LINK:", 10, 20, 200, 14);
      wrapText(ctx, text, 10, 40, 200, 14);
      ctx.strokeRect(6,6,canvas.width-12,canvas.height-12);
    }

    function wrapText(ctx, text, x, y, maxWidth, lineHeight) {
      const words = text.split(" ");
      let line = "";
      for (let n = 0; n < words.length; n++) {
        const testLine = line + words[n] + " ";
        const metrics = ctx.measureText(testLine);
        if (metrics.width > maxWidth && n > 0) {
          ctx.fillText(line, x, y);
          line = words[n] + " ";
          y += lineHeight;
        } else {
          line = testLine;
        }
      }
      ctx.fillText(line, x, y);
    }

    return;
  }

  // ---------- PAGE: quizzes/result.html ----------
  const resultCard = $("#resultCard");
  if (resultCard) {
    const raw = params.get("r");
    if (!raw) { resultCard.textContent = "Nema rezultata."; return; }
    const r = JSON.parse(decodeURIComponent(raw));

    resultCard.innerHTML = `
      <h1 class="q-title">${r.title}</h1>
      <p class="q-note">Soba: <strong>${r.room}</strong> • Grupa ${r.group} • Kviz ${r.part}</p>

      <div class="q-row" style="margin-top:18px">
        <div class="q-chip">Bodovi: <strong>${r.total}/100</strong></div>
        <div class="q-chip">${r.rank}</div>
        <div class="q-chip">${r.pass ? "✅ Prolaz" : "🔄 Ponovi"}</div>
      </div>

      ${r.pass && r.key ? `<p class="q-note" style="margin-top:14px">Ključ riječi: <strong>${r.key}</strong></p>` : ""}

      <div class="q-row" style="margin-top:18px">
        <a class="btn btn-color-1" href="./">Nazad na teme</a>
        <a class="btn btn-color-2" href="../">Početna</a>
      </div>
    `;
  }
})();
