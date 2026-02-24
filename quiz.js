// ============================================================
// CYBER HEROJI — Quiz Engine  (ISPRAVLJENA VERZIJA)
// Repo: https://mujmej.github.io/quizzes/
// ============================================================

const TOPIC_ICONS = ["🌳","👣","🔐","🛡️","🎭","🧠","💬","🔍","🤖","🚨"];

// ----------------------------------------------------------
// HELPERS
// ----------------------------------------------------------
function safeKey(str) {
  return (str || "").replace(/[^a-zA-Z0-9_]/g, "_");
}

function genCode(len) {
  const chars = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";
  let code = "";
  for (let i = 0; i < len; i++)
    code += chars.charAt(Math.floor(Math.random() * chars.length));
  return code;
}

function getPersistentCode(topicId, part) {
  const k = `qr_code_${topicId}_${part}`;
  let code = localStorage.getItem(k);
  if (!code) { code = genCode(4); localStorage.setItem(k, code); }
  return code;
}

function buildQrUrl(code) {
  // FIX: ispravna URL adresa verify.html
  return "https://mujmej.github.io/quizzes/verify.html?code=" + encodeURIComponent(code);
}

function getAllResults() {
  const out = [];
  for (let i = 0; i < localStorage.length; i++) {
    const k = localStorage.key(i);
    if (k && k.startsWith("quiz_result_")) {
      try { out.push(JSON.parse(localStorage.getItem(k))); } catch(e) {}
    }
  }
  return out;
}

function checkCertification(studentName, groupName) {
  const keys = new Set();
  getAllResults()
    .filter(r => r.studentName === studentName && r.groupName === groupName && r.passed && r.key)
    .forEach(r => keys.add(r.key));
  const arr = Array.from(keys);
  return { eligible: arr.length >= 10, keys: arr, total: arr.length };
}

// FIX: Dohvati pitanja - data.js koristi topic.quizzes.A / topic.quizzes.B
function getQuestions(topic, part) {
  // Novi format: topic.quizzes.A ili topic.quizzes.B
  if (topic.quizzes && topic.quizzes[part]) return topic.quizzes[part];
  // Stari formati kao fallback
  if (part === "A") {
    return topic.questionsA || topic.questions_a || topic.questionsGroup_A || null;
  } else {
    return topic.questionsB || topic.questions_b || topic.questionsGroup_B || null;
  }
}

// FIX: Vrati tekst opcije (data.js ima {id,text} objekte ILI plain string)
function getOptionText(opt) {
  if (typeof opt === "string") return opt;
  if (opt && typeof opt === "object" && opt.text) return opt.text;
  return String(opt);
}

// FIX: Pretvori slova u indekse  "A"->0, "B"->1, itd.
function letterToIndex(letter) {
  return letter.charCodeAt(0) - 65; // "A"=65
}

// FIX: Dohvati tačne indekse odgovora iz pitanja (podržava i stari i novi format)
function getCorrectIndices(q) {
  // Novi format: q.answer = "B" ili q.answers = ["A","B"]
  if (q.answers && Array.isArray(q.answers)) {
    return q.answers.map(a => typeof a === "string" && a.length === 1 && isNaN(a)
      ? letterToIndex(a) : parseInt(a));
  }
  if (q.answer !== undefined) {
    const a = q.answer;
    if (typeof a === "string" && a.length === 1 && isNaN(a)) return [letterToIndex(a)];
    return [parseInt(a)];
  }
  // Stari format: q.correctAnswer
  if (q.correctAnswer !== undefined) {
    const ca = q.correctAnswer;
    if (Array.isArray(ca)) return ca.map(x => parseInt(x));
    if (typeof ca === "string" && ca.length === 1 && isNaN(ca)) return [letterToIndex(ca)];
    return [parseInt(ca)];
  }
  return [0];
}

// ----------------------------------------------------------
// THEME
// ----------------------------------------------------------
function initTheme() {
  const toggle = document.getElementById("themeToggle");
  if (!toggle) return;
  const saved = localStorage.getItem("theme") || "light";
  document.documentElement.setAttribute("data-theme", saved);
  toggle.textContent = saved === "dark" ? "Light mode" : "Dark mode";
  toggle.addEventListener("click", () => {
    const curr = document.documentElement.getAttribute("data-theme");
    const next = curr === "dark" ? "light" : "dark";
    document.documentElement.setAttribute("data-theme", next);
    localStorage.setItem("theme", next);
    toggle.textContent = next === "dark" ? "Light mode" : "Dark mode";
  });
}

// ----------------------------------------------------------
// INDEX PAGE
// ----------------------------------------------------------
function initIndex() {
  if (!document.getElementById("topicsList")) return;

  const nameInput = document.getElementById("studentName");
  const grpSelect = document.getElementById("ageGroup");
  const resetBtn  = document.getElementById("resetLocal");

  if (nameInput) nameInput.value = localStorage.getItem("currentStudent") || "";
  if (grpSelect)  grpSelect.value = localStorage.getItem("currentGroup")  || "A";

  renderTopics();

  if (nameInput) nameInput.addEventListener("input", () => {
    localStorage.setItem("currentStudent", nameInput.value.trim());
    renderTopics();
  });
  if (grpSelect) grpSelect.addEventListener("change", () => {
    localStorage.setItem("currentGroup", grpSelect.value);
    renderTopics();
  });

  if (resetBtn) {
    resetBtn.addEventListener("click", () => {
      if (!confirm("Obrisati sve lokalne rezultate?")) return;
      const toDelete = [];
      for (let i = 0; i < localStorage.length; i++) {
        const k = localStorage.key(i);
        if (k && k.startsWith("quiz_result_")) toDelete.push(k);
      }
      toDelete.forEach(k => localStorage.removeItem(k));
      renderTopics();
      alert("✅ Rezultati obrisani.");
    });
  }
}

function renderTopics() {
  const container = document.getElementById("topicsList");
  if (!container) return;

  if (typeof QUIZ_DATA === "undefined") {
    container.innerHTML = `<p style="color:red;padding:1rem;">⚠️ data.js nije učitan! Provjeri da li je fajl u repou.</p>`;
    return;
  }

  const studentName = (document.getElementById("studentName")?.value || "").trim();
  const groupName   = document.getElementById("ageGroup")?.value || "A";
  const cert = studentName
    ? checkCertification(studentName, groupName)
    : { total: 0, keys: [], eligible: false };

  let progressHtml = "";
  if (studentName) {
    progressHtml = `
      <div style="margin-bottom:16px;padding:14px 18px;background:var(--surface,#f0fdf4);
           border-radius:12px;border-left:4px solid var(--primary,#10b981);">
        <div style="font-weight:700;margin-bottom:4px;">
          📊 Napredak: <strong>${cert.total}/10</strong> ključeva
        </div>
        ${cert.keys.length ? `<div style="font-size:.85rem;color:#6b7280;margin-top:3px;">🔑 ${cert.keys.join(" · ")}</div>` : ""}
        ${cert.eligible ? `
          <div style="margin-top:10px;">
            <button onclick="location.href='certificate.html'" class="btn btn-primary">🏆 Preuzmi sertifikat!</button>
          </div>` : ""}
      </div>`;
  }

  const rows = QUIZ_DATA.topics.map((topic, idx) => {
    const icon = topic.icon || TOPIC_ICONS[idx] || "📚";

    let pA = false, pB = false, sA = null, sB = null;
    if (studentName) {
      const rA = localStorage.getItem(`quiz_result_${safeKey(studentName)}_A_${topic.id}`);
      const rB = localStorage.getItem(`quiz_result_${safeKey(studentName)}_B_${topic.id}`);
      if (rA) { try { const d = JSON.parse(rA); pA = d.passed; sA = d.score; } catch(e){} }
      if (rB) { try { const d = JSON.parse(rB); pB = d.passed; sB = d.score; } catch(e){} }
    }

    const tagA = sA !== null
      ? `<span style="font-size:.78rem;font-weight:700;color:${pA?"#059669":"#dc2626"};">${pA?"✅":"❌"} ${sA}pts</span>` : "";
    const tagB = sB !== null
      ? `<span style="font-size:.78rem;font-weight:700;color:${pB?"#059669":"#dc2626"};">${pB?"✅":"❌"} ${sB}pts</span>` : "";

    return `
      <div style="display:flex;align-items:center;justify-content:space-between;
           padding:14px 18px;background:var(--surface,#f9fafb);
           border-radius:12px;border:1px solid var(--border,#e5e7eb);
           flex-wrap:wrap;gap:10px;">
        <div style="display:flex;align-items:center;gap:14px;min-width:180px;">
          <div style="font-size:2rem;line-height:1;">${icon}</div>
          <div>
            <div style="font-weight:700;font-size:.97rem;">${topic.title}</div>
            <div style="font-size:.78rem;color:#6b7280;margin-top:2px;">🔑 ${topic.key || topic.unlockKey || ""}</div>
          </div>
        </div>
        <div style="display:flex;gap:8px;align-items:center;flex-wrap:wrap;">
          ${tagA} ${tagB}
          <button class="btn btn-primary" onclick="launchQuiz('${topic.id}','A')">
            🎯 Quiz A${pA ? " 🔑" : ""}
          </button>
          <button class="btn btn-outline" onclick="launchQuiz('${topic.id}','B')">
            🎯 Quiz B${pB ? " 🔑" : ""}
          </button>
        </div>
      </div>`;
  }).join("");

  container.innerHTML = progressHtml + rows;
}

window.launchQuiz = function(topicId, part) {
  const name = (document.getElementById("studentName")?.value || "").trim();
  if (!name) {
    alert("⚠️ Unesi ime i prezime prije pokretanja kviza!");
    document.getElementById("studentName")?.focus();
    return;
  }
  localStorage.setItem("currentStudent", name);
  localStorage.setItem("currentGroup", document.getElementById("ageGroup")?.value || part);
  location.href = `quiz.html?topic=${topicId}&part=${part}&student=${encodeURIComponent(name)}`;
};

// ----------------------------------------------------------
// QUIZ PAGE
// ----------------------------------------------------------
let quizState = null;

function initQuiz() {
  const gateCard = document.getElementById("gateCard");
  if (!gateCard) return;

  const params      = new URLSearchParams(location.search);
  const topicId     = params.get("topic");
  const part        = params.get("part");
  const studentName = decodeURIComponent(params.get("student") || "")
                      || localStorage.getItem("currentStudent")
                      || "Učenik";

  if (typeof QUIZ_DATA === "undefined") {
    gateCard.innerHTML = `<p style="color:red">⚠️ data.js nije učitan! <a href="index.html">Nazad</a></p>`;
    return;
  }

  if (!topicId || !part) {
    gateCard.innerHTML = `<p style="color:red">⚠️ Nedostaju parametri. <a href="index.html">Nazad</a></p>`;
    return;
  }

  const topic = QUIZ_DATA.topics.find(t => t.id === topicId);
  if (!topic) {
    gateCard.innerHTML = `<p style="color:red">⚠️ Tema "${topicId}" nije pronađena. <a href="index.html">Nazad</a></p>`;
    return;
  }

  // FIX: Koristimo ispravljenu getQuestions() koja podržava topic.quizzes.A
  const testQuestions = getQuestions(topic, part);
  if (!testQuestions || testQuestions.length === 0) {
    gateCard.innerHTML = `
      <div style="padding:1.5rem;">
        <p style="color:red;font-weight:700;">⚠️ Pitanja za "${topic.title}" (Grupa ${part}) nisu pronađena.</p>
        <p style="color:#6b7280;margin-top:8px;font-size:.9rem;">
          data.js treba imati strukturu:<br>
          <code>topic.quizzes.A = [...]</code><br>
          <code>topic.quizzes.B = [...]</code>
        </p>
        <a href="index.html" class="btn btn-primary" style="margin-top:14px;display:inline-block;">← Nazad</a>
      </div>`;
    return;
  }

  // Nav title
  const navTitle = document.getElementById("navTitle");
  const topicIdx = QUIZ_DATA.topics.indexOf(topic);
  const icon = topic.icon || TOPIC_ICONS[topicIdx] || "📚";
  if (navTitle) navTitle.textContent = `${icon} ${topic.title}`;

  // QR setup
  const code      = getPersistentCode(topicId, part);
  const qrDataUrl = buildQrUrl(code);
  const qrApiUrl  = `https://api.qrserver.com/v1/create-qr-code/?size=220x220&data=${encodeURIComponent(qrDataUrl)}`;

  const qrImg = document.getElementById("qrImg");
  if (qrImg) qrImg.src = qrApiUrl;

  const gateCode  = document.getElementById("gateCode");
  const unlockBtn = document.getElementById("unlockBtn");
  const regenBtn  = document.getElementById("regenBtn");
  const gateMsg   = document.getElementById("gateMsg");

  function showGateError(msg) {
    if (!gateMsg) return;
    gateMsg.style.cssText = "display:block;background:#fee2e2;color:#991b1b;padding:10px 14px;border-radius:8px;margin-top:10px;font-weight:600;";
    gateMsg.textContent = msg;
  }

  if (gateCode) {
    setTimeout(() => gateCode.focus(), 100);
    gateCode.addEventListener("input",    e => { e.target.value = e.target.value.toUpperCase(); });
    gateCode.addEventListener("keypress", e => { if (e.key === "Enter") unlockBtn?.click(); });
  }

  if (unlockBtn) {
    unlockBtn.addEventListener("click", () => {
      const entered = (gateCode?.value || "").trim().toUpperCase();
      if (!entered) { showGateError("⚠️ Unesi kod!"); return; }
      if (entered === code) {
        gateCard.style.display = "none";
        startQuizSession(topicId, part, studentName, topic);
      } else {
        showGateError("❌ Pogrešan kod! Učenik treba skenirati QR.");
        if (gateCode) { gateCode.value = ""; gateCode.focus(); }
      }
    });
  }

  if (regenBtn) {
    regenBtn.addEventListener("click", () => {
      if (!confirm("Generisati novi QR kod za ovu temu?")) return;
      localStorage.removeItem(`qr_code_${topicId}_${part}`);
      location.reload();
    });
  }

  document.getElementById("prevBtn")?.addEventListener("click", () => {
    if (!quizState || quizState.currentIndex === 0) return;
    quizState.currentIndex--;
    renderQuizQuestion();
  });

  document.getElementById("nextBtn")?.addEventListener("click", handleAnswer);
}

function startQuizSession(topicId, part, studentName, topic) {
  const quizCard = document.getElementById("quizCard");
  if (!quizCard) { console.error("quizCard not found!"); return; }

  const questions = getQuestions(topic, part);
  if (!questions || questions.length === 0) {
    alert("⚠️ Pitanja nisu pronađena!");
    location.href = "index.html";
    return;
  }

  const topicIdx = QUIZ_DATA.topics.indexOf(topic);
  const icon = topic.icon || TOPIC_ICONS[topicIdx] || "📚";

  quizState = {
    studentName, part,
    topicId,
    topicTitle:  topic.title,
    topicIcon:   icon,
    topicKey:    topic.key || topic.unlockKey || "",
    questions,
    currentIndex: 0,
    score:        0,
    answers:      [],
    maxScore:     questions.length * 20,
    timeLeft:     (QUIZ_DATA.meta?.minutesPerQuiz || QUIZ_DATA.minutesPerQuiz || 10) * 60,
    timerInterval: null
  };

  const whoBadge = document.getElementById("whoBadge");
  if (whoBadge) whoBadge.textContent = `👤 ${studentName} | Grupa ${part}`;

  const metaLine = document.getElementById("metaLine");
  if (metaLine) metaLine.textContent = `${icon} ${topic.title}`;

  quizCard.style.display = "block";
  quizCard.scrollIntoView({ behavior: "smooth" });

  const fsBtn = document.getElementById("fullscreenBtn");
  if (fsBtn) {
    fsBtn.addEventListener("click", () => {
      if (!document.fullscreenElement) {
        document.documentElement.requestFullscreen?.();
        fsBtn.textContent = "✕ Exit FS";
      } else {
        document.exitFullscreen?.();
        fsBtn.textContent = "⛶ Full screen";
      }
    });
  }

  renderQuizQuestion();
  startQuizTimer();
}

function startQuizTimer() {
  const el = document.getElementById("timeLeft");
  if (!el || !quizState) return;

  quizState.timerInterval = setInterval(() => {
    quizState.timeLeft--;
    const m = Math.floor(quizState.timeLeft / 60);
    const s = quizState.timeLeft % 60;
    el.textContent = `${m}:${s.toString().padStart(2, "0")}`;
    if (quizState.timeLeft === 60) {
      el.style.color = "#f59e0b";
      alert("⏰ Preostala je 1 minuta!");
    }
    if (quizState.timeLeft <= 0) {
      clearInterval(quizState.timerInterval);
      alert("⏰ Vrijeme je isteklo!");
      finishQuizSession();
    }
  }, 1000);
}

function renderQuizQuestion() {
  if (!quizState) return;
  const { questions, currentIndex, score } = quizState;
  const q     = questions[currentIndex];
  const total = questions.length;

  const pb = document.getElementById("progressBar");
  if (pb) pb.style.width = `${(currentIndex / total) * 100}%`;

  const ls = document.getElementById("liveScore");
  if (ls) ls.textContent = score;

  // FIX: podržava i q.prompt (data.js) i q.question (stari format)
  const qTitle = document.getElementById("qTitle");
  if (qTitle) qTitle.textContent = `(${currentIndex + 1}/${total})  ${q.prompt || q.question || ""}`;

  const optsDiv = document.getElementById("options");
  if (optsDiv) {
    // FIX: dohvati tačne indekse (iz slova ili direktno)
    const correctIndices = getCorrectIndices(q);
    const isMulti        = correctIndices.length > 1;
    const inputType      = isMulti ? "checkbox" : "radio";

    // FIX: opcije mogu biti {id,text} objekti ili plain stringovi
    optsDiv.innerHTML = q.options.map((opt, i) => {
      const text = getOptionText(opt);
      return `
        <label style="display:flex;align-items:flex-start;gap:10px;padding:12px 14px;margin:6px 0;
               border-radius:8px;border:1px solid var(--border,#e5e7eb);cursor:pointer;
               background:var(--surface,#f9fafb);"
               onmouseover="this.style.borderColor='#10b981'"
               onmouseout="this.style.borderColor='var(--border,#e5e7eb)'">
          <input type="${inputType}" name="opt" value="${i}"
                 style="width:18px;height:18px;margin-top:2px;cursor:pointer;accent-color:#10b981;flex-shrink:0;" />
          <span style="font-size:.95rem;line-height:1.5;">${text}</span>
        </label>`;
    }).join("");
  }

  const helper = document.getElementById("helperNote");
  if (helper) {
    const correctIndices = getCorrectIndices(q);
    helper.textContent = correctIndices.length > 1
      ? "✏️ Može biti više tačnih odgovora — označi sve tačne."
      : "✏️ Izaberi jedan tačan odgovor.";
  }

  const prevBtn = document.getElementById("prevBtn");
  const nextBtn = document.getElementById("nextBtn");
  if (prevBtn) {
    prevBtn.disabled      = currentIndex === 0;
    prevBtn.style.opacity = currentIndex === 0 ? "0.4" : "1";
  }
  if (nextBtn) nextBtn.textContent = currentIndex === total - 1 ? "🏁 Završi" : "Dalje →";
}

function handleAnswer() {
  if (!quizState) return;
  const q = quizState.questions[quizState.currentIndex];

  // FIX: koristi ispravljenu getCorrectIndices()
  const correctIndices = getCorrectIndices(q);
  const isMulti        = correctIndices.length > 1;

  let selected = [];
  if (isMulti) {
    document.querySelectorAll('input[type="checkbox"]:checked').forEach(el => selected.push(parseInt(el.value)));
  } else {
    const el = document.querySelector('input[type="radio"]:checked');
    if (el) selected.push(parseInt(el.value));
  }

  if (!selected.length) { alert("⚠️ Izaberi odgovor!"); return; }

  // Provjera tačnosti
  const isCorrect = selected.length === correctIndices.length
    && selected.every(a => correctIndices.includes(a));

  // Parcijalni bodovi za multiple-choice (ako data.js ima scoring.partial)
  let points = 0;
  if (isCorrect) {
    points = 20;
  } else if (isMulti && q.scoring?.partial) {
    const correctSelected = selected.filter(a => correctIndices.includes(a));
    if (correctSelected.length > 0 && selected.length <= correctIndices.length) {
      points = q.scoring.partial;
    }
  }
  quizState.score += points;

  quizState.answers.push({
    question: q.prompt || q.question,
    selected,
    correctIndices,
    isCorrect,
    points,
    explain: q.explain || ""
  });

  if (quizState.currentIndex < quizState.questions.length - 1) {
    quizState.currentIndex++;
    renderQuizQuestion();
  } else {
    finishQuizSession();
  }
}

function finishQuizSession() {
  if (!quizState) return;
  clearInterval(quizState.timerInterval);

  const passed     = quizState.score >= (QUIZ_DATA.meta?.passScore || QUIZ_DATA.passingScore || 60);
  const percentage = Math.round((quizState.score / quizState.maxScore) * 100);
  let rank = "🔄 Pokušaj ponovo";
  if (quizState.score >= 90)      rank = "🏆 Cyber Pro";
  else if (quizState.score >= 75) rank = "⭐ Cyber Smart";
  else if (quizState.score >= 60) rank = "✅ Položio/la";

  const result = {
    studentName: quizState.studentName,
    groupName:   quizState.part,
    topicId:     quizState.topicId,
    topicTitle:  quizState.topicTitle,
    topicIcon:   quizState.topicIcon,
    score:       quizState.score,
    maxScore:    quizState.maxScore,
    percentage, passed,
    key:         passed ? quizState.topicKey : null,
    rank,
    timestamp:   new Date().toISOString(),
    answers:     quizState.answers
  };

  const rKey = `quiz_result_${safeKey(quizState.studentName)}_${quizState.part}_${quizState.topicId}`;
  localStorage.setItem(rKey, JSON.stringify(result));
  location.href = `result.html?result=${encodeURIComponent(rKey)}`;
}

// ----------------------------------------------------------
// RESULT PAGE
// ----------------------------------------------------------
function initResult() {
  // FIX: result.html koristi id="resultCard", ne "resultContainer"
  const container = document.getElementById("resultCard") || document.getElementById("resultContainer");
  if (!container) return;

  const rKey = new URLSearchParams(location.search).get("result");
  if (!rKey) { location.href = "index.html"; return; }

  const raw = localStorage.getItem(rKey);
  if (!raw) {
    container.innerHTML = `
      <div style="text-align:center;padding:2rem;">
        <div style="font-size:3rem;">😕</div>
        <p style="margin:1rem 0;font-weight:700;">Rezultat nije pronađen.</p>
        <p style="color:#6b7280;font-size:.9rem;">Možda su podaci obrisani ili je ovo nova sesija.</p>
        <a href="index.html" class="btn btn-primary" style="display:inline-block;margin-top:1rem;">← Nazad na teme</a>
      </div>`;
    return;
  }

  const r    = JSON.parse(raw);
  const cert = checkCertification(r.studentName, r.groupName);

  container.innerHTML = `
    <div style="max-width:560px;margin:0 auto;text-align:center;padding:1.5rem;">
      <div style="font-size:4rem;margin-bottom:.75rem;">${r.passed ? "🎉" : "😞"}</div>
      <h2 style="font-size:1.75rem;font-weight:900;margin-bottom:.5rem;">${r.passed ? "Čestitamo!" : "Pokušaj ponovo"}</h2>
      <div style="font-size:1.1rem;font-weight:700;margin:.25rem 0;">
        ${r.topicIcon || ""} ${r.topicTitle}
      </div>
      <div style="font-size:.9rem;color:#6b7280;margin-bottom:1.25rem;">
        👤 ${r.studentName} &nbsp;·&nbsp; Grupa ${r.groupName}
      </div>

      <div style="font-size:3.5rem;font-weight:900;color:#10b981;margin:1rem 0 .25rem;">
        ${r.score}<span style="font-size:1.4rem;font-weight:400;color:#9ca3af;">/${r.maxScore}</span>
      </div>
      <div style="font-size:1rem;color:#6b7280;margin-bottom:.25rem;">${r.percentage}%</div>
      <div style="font-size:1.2rem;font-weight:700;margin-bottom:1.5rem;">${r.rank}</div>

      ${r.passed ? `
        <div style="background:linear-gradient(135deg,#10b981,#f59e0b);color:#fff;
             padding:1.5rem;border-radius:12px;margin-bottom:1.5rem;">
          <div style="font-size:.85rem;opacity:.9;margin-bottom:.4rem;">🔑 Tvoj ključ</div>
          <div style="font-size:2.5rem;font-weight:900;letter-spacing:.5rem;font-family:monospace;">${r.key}</div>
          <div style="font-size:.82rem;opacity:.85;margin-top:.5rem;">Zapamti! 10 ključeva = sertifikat 🏆</div>
        </div>` : `
        <div style="background:#fee2e2;color:#991b1b;padding:1.25rem;border-radius:12px;margin-bottom:1.5rem;">
          💪 Minimum je ${r.maxScore * 0.6} bodova za prolaz. Pokušaj ponovo!
        </div>`}

      <div style="background:#f0fdf4;padding:1.25rem;border-radius:10px;margin-bottom:1.5rem;text-align:left;">
        <div style="font-weight:700;margin-bottom:.5rem;">📊 Ukupan napredak</div>
        <div>Ključevi: <strong>${cert.total}/10</strong></div>
        ${cert.keys.length ? `<div style="font-size:.85rem;color:#6b7280;margin-top:3px;">🔑 ${cert.keys.join(" · ")}</div>` : ""}
        ${cert.eligible ? `
          <div style="margin-top:1rem;text-align:center;">
            <div style="font-weight:700;color:#10b981;margin-bottom:8px;">🏆 Imaš svih 10 ključeva!</div>
            <button onclick="location.href='certificate.html'" class="btn btn-primary">📜 Preuzmi sertifikat</button>
          </div>` : ""}
      </div>

      <div style="display:flex;gap:12px;justify-content:center;flex-wrap:wrap;">
        <button onclick="location.href='index.html'" class="btn btn-primary">🏠 Teme</button>
        <button onclick="location.href='quiz.html?topic=${r.topicId}&part=${r.groupName}&student=${encodeURIComponent(r.studentName)}'"
                class="btn btn-outline">🔄 Ponovi</button>
      </div>
    </div>`;
}

// ----------------------------------------------------------
// BOOTSTRAP
// ----------------------------------------------------------
document.addEventListener("DOMContentLoaded", () => {
  initTheme();
  const p = location.pathname;
  if      (p.includes("quiz.html"))   initQuiz();
  else if (p.includes("result.html")) initResult();
  else                                initIndex();
});
