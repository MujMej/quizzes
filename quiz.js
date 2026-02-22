// quiz.js

/* ---------------------------
   Theme toggle (same logic)
---------------------------- */
function setTheme(isDark){
  if(isDark) document.body.classList.add("dark-mode");
  else document.body.classList.remove("dark-mode");
  localStorage.setItem("darkMode", String(isDark));
  const t = document.getElementById("themeToggle");
  if(t) t.innerText = isDark ? "Light mode" : "Dark mode";
}

function initTheme(){
  const saved = localStorage.getItem("darkMode");
  const isDark = saved === "true";
  setTheme(isDark);
  const t = document.getElementById("themeToggle");
  if(t){
    t.addEventListener("click", ()=> setTheme(!document.body.classList.contains("dark-mode")));
  }
}

/* ---------------------------
   Helpers / Storage
---------------------------- */
function qs(sel){ return document.querySelector(sel); }
function qsa(sel){ return Array.from(document.querySelectorAll(sel)); }

function safeKey(...parts){
  return parts.map(p => String(p || "").trim().toLowerCase().replace(/\s+/g,"_")).join("__");
}

function getProgressKey(student, group, topicId, part){
  return "cyberedu_result__" + safeKey(student, group, topicId, part);
}

function saveResult(student, group, topicId, part, payload){
  localStorage.setItem(getProgressKey(student, group, topicId, part), JSON.stringify(payload));
}

function loadResult(student, group, topicId, part){
  const raw = localStorage.getItem(getProgressKey(student, group, topicId, part));
  if(!raw) return null;
  try{ return JSON.parse(raw); }catch{ return null; }
}

function resetAll(){
  const keys = Object.keys(localStorage);
  keys.forEach(k=>{
    if(k.startsWith("cyberedu_result__")) localStorage.removeItem(k);
  });
}

/* ---------------------------
   QR gate (soft verification)
   - generate code -> QR links to verify.html?code=XXXX
---------------------------- */
function genCode(len=4){
  const chars = "ABCDEFGHJKMNPQRSTUVWXYZ23456789";
  let out = "";
  for(let i=0;i<len;i++){
    out += chars[Math.floor(Math.random()*chars.length)];
  }
  return out;
}

function buildQrUrl(code){
  const base = location.origin + location.pathname.replace(/\/quiz\.html$/, "/verify.html");
  return base + "?code=" + encodeURIComponent(code);
}

// Uses an external QR image generator (simple). If offline, QR won’t render but code still works.
function setQrImage(imgEl, qrUrl){
  const url = "https://api.qrserver.com/v1/create-qr-code/?size=220x220&data=" + encodeURIComponent(qrUrl);
  imgEl.src = url;
}

/* ---------------------------
   INDEX PAGE: render topics
---------------------------- */
function initIndex(){
  const list = qs("#topicsList");
  if(!list) return;

  const studentName = qs("#studentName");
  const ageGroup = qs("#ageGroup");
  const resetBtn = qs("#resetLocal");

  // restore form
  studentName.value = localStorage.getItem("cyberedu_student") || "";
  ageGroup.value = localStorage.getItem("cyberedu_group") || "A";

  function persistForm(){
    localStorage.setItem("cyberedu_student", studentName.value.trim());
    localStorage.setItem("cyberedu_group", ageGroup.value);
  }

  studentName.addEventListener("input", persistForm);
  ageGroup.addEventListener("change", ()=>{ persistForm(); render(); });

  resetBtn.addEventListener("click", ()=>{
    if(confirm("Resetovati sve rezultate za ovaj browser?")){
      resetAll();
      render();
    }
  });

  function render(){
    list.innerHTML = "";

    const s = studentName.value.trim();
    const g = ageGroup.value;

    QUIZ_DATA.topics.forEach(topic=>{
      const aRes = s ? loadResult(s,g,topic.id,"A") : null;
      const bRes = s ? loadResult(s,g,topic.id,"B") : null;

      const aPassed = aRes && aRes.passed;
      const bPassed = bRes && bRes.passed;

      const wrap = document.createElement("div");
      wrap.className = "topic";

      const left = document.createElement("div");
      left.style.flex = "1";

      left.innerHTML = `
        <h3>${topic.title}</h3>
        <p><b>Soba:</b> ${topic.room} • ${topic.description}</p>
        <div style="margin-top:10px; display:flex; gap:10px; flex-wrap:wrap;">
          <span class="badge">Quiz A: ${aRes ? (aRes.score + "/100") : "—"}</span>
          <span class="badge">Quiz B: ${bRes ? (bRes.score + "/100") : "—"}</span>
          <span class="badge">Ključ: ${topic.keys[g]}</span>
        </div>
      `;

      const actions = document.createElement("div");
      actions.className = "topic-actions";

      const btnA = document.createElement("button");
      btnA.className = "btn btn-primary";
      btnA.textContent = aPassed ? "Quiz A ✔ (ponovo)" : "Pokreni Quiz A";
      btnA.disabled = !s;
      btnA.onclick = ()=> startQuiz(topic.id,"A");

      const btnB = document.createElement("button");
      btnB.className = "btn btn-outline";
      btnB.textContent = bPassed ? "Quiz B ✔ (ponovo)" : "Pokreni Quiz B";
      btnB.disabled = !s || !aPassed; // locked until A passed
      btnB.onclick = ()=> startQuiz(topic.id,"B");

      const small = document.createElement("div");
      small.className = "small";
      small.innerHTML = !s ? "Unesi ime da otključaš kvizove." : (!aPassed ? "Quiz B je zaključan dok se Quiz A ne položi." : "Quiz B otključan ✅");

      actions.appendChild(btnA);
      actions.appendChild(btnB);
      actions.appendChild(small);

      wrap.appendChild(left);
      wrap.appendChild(actions);
      list.appendChild(wrap);
    });
  }

  function startQuiz(topicId, part){
    persistForm();
    const s = studentName.value.trim();
    const g = ageGroup.value;
    const url = `quiz.html?topic=${encodeURIComponent(topicId)}&part=${encodeURIComponent(part)}&group=${encodeURIComponent(g)}&student=${encodeURIComponent(s)}`;
    location.href = url;
  }

  render();
}

/* ---------------------------
   QUIZ PAGE
---------------------------- */
function initQuiz(){
  const gateCard = qs("#gateCard");
  const quizCard = qs("#quizCard");
  if(!gateCard || !quizCard) return;

  const params = new URLSearchParams(location.search);
  const topicId = params.get("topic");
  const part = params.get("part"); // "A" or "B"
  const group = params.get("group"); // "A" or "B"
  const student = params.get("student");

  const topic = QUIZ_DATA.topics.find(t=>t.id===topicId);
  if(!topic){
    gateCard.innerHTML = `<div class="alert">Tema nije pronađena.</div>`;
    return;
  }

  // choose dataset by group & part
  const data = topic.quizzes?.[part]?.[group === "A" ? "groupA" : "groupB"] || [];
  if(!data.length){
    gateCard.innerHTML = `
      <div class="h1">${topic.title}</div>
      <div class="sub">Ovaj kviz još nije unesen za odabranu grupu/part.</div>
      <div class="alert">Dodaj pitanja u <b>data.js</b> za topic <b>${topicId}</b>, part <b>${part}</b>, grupa <b>${group}</b>.</div>
      <div style="height:12px;"></div>
      <a class="btn btn-primary" href="./">Nazad</a>
    `;
    return;
  }

  // NAV title
  qs("#navTitle").textContent = `${topic.room} • ${topic.title} • Quiz ${part}`;

  // QR gate setup
  const qrImg = qs("#qrImg");
  const gateCode = qs("#gateCode");
  const unlockBtn = qs("#unlockBtn");
  const regenBtn = qs("#regenBtn");
  const gateMsg = qs("#gateMsg");

  let currentCode = genCode(4);
  function refreshQR(){
    currentCode = genCode(4);
    const url = buildQrUrl(currentCode);
    setQrImage(qrImg, url);
    gateCode.value = "";
    gateMsg.style.display = "none";
  }
  refreshQR();

  regenBtn.addEventListener("click", refreshQR);

  unlockBtn.addEventListener("click", ()=>{
    const typed = (gateCode.value || "").toUpperCase().trim();
    if(typed !== currentCode){
      gateMsg.style.display = "block";
      gateMsg.textContent = "Kod nije tačan. Neka učenik ponovo skenira QR ili klikni 'Novi QR'.";
      return;
    }
    gateCard.style.display = "none";
    quizCard.style.display = "block";
    startRun();
  });

  // full screen (nice for projector)
  qs("#fullscreenBtn").addEventListener("click", async ()=>{
    try{
      if(!document.fullscreenElement) await document.documentElement.requestFullscreen();
      else await document.exitFullscreen();
    }catch(e){}
  });

  function startRun(){
    const minutes = QUIZ_DATA.meta.minutesPerQuiz ?? 10;
    const totalSeconds = minutes * 60;
    let remaining = totalSeconds;
    let timer = null;

    const timeLeft = qs("#timeLeft");
    const liveScore = qs("#liveScore");
    const whoBadge = qs("#whoBadge");
    const metaLine = qs("#metaLine");
    const progressBar = qs("#progressBar");
    const qTitle = qs("#qTitle");
    const optionsBox = qs("#options");
    const helperNote = qs("#helperNote");
    const prevBtn = qs("#prevBtn");
    const nextBtn = qs("#nextBtn");

    whoBadge.textContent = `👤 ${student} • Grupa ${group}`;
    metaLine.textContent = `Soba: ${topic.room} • Quiz ${part} • 5 pitanja • prolaz ${QUIZ_DATA.meta.passScore}/100`;

    const state = {
      index: 0,
      answers: {}, // qid -> selected
      score: 0
    };

    function fmt(sec){
      const m = Math.floor(sec/60);
      const s = sec%60;
      return String(m).padStart(2,"0")+":"+String(s).padStart(2,"0");
    }

    function computeScore(){
      let total = 0;
      const per = QUIZ_DATA.meta.pointsPerQuestion ?? 20;

      data.forEach(q=>{
        const sel = state.answers[q.id];
        if(q.type === "single"){
          if(sel === q.answer) total += per;
        }else if(q.type === "multiple"){
          const correct = new Set(q.answers || []);
          const chosen = new Set(Array.isArray(sel) ? sel : []);
          let correctChosen = 0;
          let wrongChosen = 0;

          chosen.forEach(x=>{
            if(correct.has(x)) correctChosen++;
            else wrongChosen++;
          });

          const maxCorrect = correct.size || 1;

          // scoring modes
          if(q.scoring?.partialScale){
            // scaled by correctness, penalize wrong picks lightly
            let ratio = (correctChosen / maxCorrect);
            ratio = Math.max(0, ratio - (wrongChosen * 0.15));
            total += Math.round(per * Math.max(0, Math.min(1, ratio)));
          }else{
            // full/partial (classic)
            if(correctChosen === maxCorrect && wrongChosen === 0) total += (q.scoring?.full ?? per);
            else if(correctChosen >= 1 && wrongChosen === 0) total += (q.scoring?.partial ?? Math.round(per/2));
            else total += 0;
          }
        }
      });

      state.score = Math.max(0, Math.min(100, total));
      liveScore.textContent = state.score;
    }

    function renderQuestion(){
      const q = data[state.index];
      if(!q) return;

      // progress
      const pct = Math.round(((state.index) / data.length) * 100);
      progressBar.style.width = pct + "%";

      qTitle.textContent = `Pitanje ${state.index+1}/${data.length}: ${q.prompt}`;
      optionsBox.innerHTML = "";
      helperNote.textContent = "";

      if(q.type === "single"){
        const current = state.answers[q.id] || "";
        q.options.forEach(opt=>{
          const row = document.createElement("label");
          row.className = "opt";
          row.innerHTML = `
            <input type="radio" name="q_${q.id}" value="${opt.id}" ${current===opt.id ? "checked":""} />
            <div><b>${opt.id})</b> ${opt.text}</div>
          `;
          row.addEventListener("click", (e)=>{
            const input = row.querySelector("input");
            input.checked = true;
            state.answers[q.id] = opt.id;
            computeScore();
          });
          optionsBox.appendChild(row);
        });
      }else if(q.type === "multiple"){
        const current = new Set(Array.isArray(state.answers[q.id]) ? state.answers[q.id] : []);
        q.options.forEach(opt=>{
          const row = document.createElement("label");
          row.className = "opt";
          row.innerHTML = `
            <input type="checkbox" value="${opt.id}" ${current.has(opt.id) ? "checked":""} />
            <div><b>${opt.id})</b> ${opt.text}</div>
          `;
          row.addEventListener("click", (e)=>{
            const input = row.querySelector("input");
            input.checked = !input.checked; // label click toggles
            const now = new Set(Array.isArray(state.answers[q.id]) ? state.answers[q.id] : []);
            if(input.checked) now.add(opt.id);
            else now.delete(opt.id);
            state.answers[q.id] = Array.from(now);
            computeScore();
          });
          optionsBox.appendChild(row);
        });
        helperNote.textContent = "Izaberi više odgovora (ako treba).";
      }

      prevBtn.disabled = state.index === 0;
      nextBtn.textContent = (state.index === data.length-1) ? "Završi ✅" : "Dalje →";
    }

    function finish(auto=false){
      clearInterval(timer);

      // compute final
      computeScore();
      const pass = state.score >= (QUIZ_DATA.meta.passScore ?? 60);
      const keyWord = topic.keys[group];

      const payload = {
        student,
        group,
        topicId,
        topicTitle: topic.title,
        room: topic.room,
        part,
        score: state.score,
        passed: pass,
        key: pass ? keyWord : null,
        when: new Date().toISOString(),
        autoFinish: auto
      };

      saveResult(student, group, topicId, part, payload);

      const url = `result.html?topic=${encodeURIComponent(topicId)}&part=${encodeURIComponent(part)}&group=${encodeURIComponent(group)}&student=${encodeURIComponent(student)}`;
      location.href = url;
    }

    prevBtn.addEventListener("click", ()=>{
      if(state.index>0){
        state.index--;
        renderQuestion();
      }
    });

    nextBtn.addEventListener("click", ()=>{
      if(state.index === data.length-1){
        finish(false);
      }else{
        state.index++;
        renderQuestion();
      }
    });

    // timer
    timeLeft.textContent = fmt(remaining);
    timer = setInterval(()=>{
      remaining--;
      timeLeft.textContent = fmt(Math.max(0,remaining));
      if(remaining <= 0){
        finish(true);
      }
    }, 1000);

    // start
    computeScore();
    renderQuestion();
  }
}

/* ---------------------------
   RESULT PAGE
---------------------------- */
function initResult(){
  const box = qs("#resultCard");
  if(!box) return;

  const params = new URLSearchParams(location.search);
  const topicId = params.get("topic");
  const part = params.get("part");
  const group = params.get("group");
  const student = params.get("student");

  const topic = QUIZ_DATA.topics.find(t=>t.id===topicId);
  const res = loadResult(student, group, topicId, part);

  if(!topic || !res){
    box.innerHTML = `
      <div class="alert">Rezultat nije pronađen. Vrati se na teme i pokreni kviz.</div>
      <div style="height:12px;"></div>
      <a class="btn btn-primary" href="./">Nazad</a>
    `;
    return;
  }

  const pass = !!res.passed;
  const title = `${topic.title} • Quiz ${part}`;
  const status = pass ? "✅ PASSED" : "🔄 RETRY";
  const cls = pass ? "ok" : "alert";

  const keyLine = pass
    ? `<div class="card" style="margin-top:14px;">
         <div class="label">🔑 Ključ riječi (za certifikaciju)</div>
         <div style="font-size:1.6rem; font-weight:900; color:var(--primary); letter-spacing:1px;">${res.key}</div>
         <div class="note">Sačuvaj ključ za ovu temu. Kad sakupiš svih 10, dobijaš završni certifikat.</div>
       </div>`
    : `<div class="note" style="margin-top:10px;">Položi (≥ 60) da dobiješ ključ.</div>`;

  box.innerHTML = `
    <div class="h1">${title}</div>
    <div class="sub">Učenik: <b>${student}</b> • Grupa <b>${group}</b> • Soba: <b>${topic.room}</b></div>

    <div class="${cls}" style="margin-top:10px;">
      <div style="display:flex; justify-content:space-between; gap:12px; flex-wrap:wrap;">
        <div><b>Status:</b> ${status}</div>
        <div><b>Score:</b> ${res.score}/100</div>
      </div>
    </div>

    ${keyLine}

    <div class="row" style="justify-content:space-between; margin-top:16px;">
      <a class="btn btn-outline" href="./">↩ Nazad na teme</a>
      <a class="btn btn-primary" href="quiz.html?topic=${encodeURIComponent(topicId)}&part=${encodeURIComponent(part)}&group=${encodeURIComponent(group)}&student=${encodeURIComponent(student)}">
        Ponovi kviz
      </a>
    </div>

    <div class="note" style="margin-top:12px;">
      Napomena: rezultat je spremljen lokalno u browseru. Ako promijeniš uređaj/browser — neće ga vidjeti.
    </div>
  `;
}

/* ---------------------------
   Boot
---------------------------- */
document.addEventListener("DOMContentLoaded", ()=>{
  initTheme();
  initIndex();
  initQuiz();
  initResult();
});
