// ============================================================================
// CYBER HEROJI QUIZ ENGINE v2.0
// ============================================================================

// ----------------------------------------------------------------------------
// 1. GLOBAL STATE & HELPERS
// ----------------------------------------------------------------------------

let currentState = {
  studentName: "",
  groupName: "",
  topicId: "",
  currentQuestionIndex: 0,
  score: 0,
  answers: [],
  timeLeft: 0,
  timerInterval: null
};

// Safe key generation for localStorage
function safeKey(str) {
  return str.replace(/[^a-zA-Z0-9_]/g, "_");
}

// Generate random code
function genCode(len) {
  const chars = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";
  let code = "";
  for (let i = 0; i < len; i++) {
    code += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return code;
}

// Get or create persistent QR code
function getPersistentCode(topicId, part) {
  const key = `qr_code_${topicId}_${part}`;
  let code = localStorage.getItem(key);
  if (!code) {
    code = genCode(4);
    localStorage.setItem(key, code);
  }
  return code;
}

// Build QR URL - FIXED to point to deployed verify.html
function buildQrUrl(code) {
  const base = "https://mujmej.github.io/cyber-heroji/quiz/verify.html";
  return base + "?code=" + encodeURIComponent(code);
}

// ----------------------------------------------------------------------------
// 2. THEME MANAGEMENT
// ----------------------------------------------------------------------------

function initTheme() {
  const toggle = document.getElementById("themeToggle");
  if (!toggle) return;

  const savedTheme = localStorage.getItem("theme") || "light";
  document.documentElement.setAttribute("data-theme", savedTheme);
  toggle.textContent = savedTheme === "dark" ? "☀️" : "🌙";

  toggle.addEventListener("click", () => {
    const current = document.documentElement.getAttribute("data-theme");
    const newTheme = current === "dark" ? "light" : "dark";
    document.documentElement.setAttribute("data-theme", newTheme);
    localStorage.setItem("theme", newTheme);
    toggle.textContent = newTheme === "dark" ? "☀️" : "🌙";
  });
}

// ----------------------------------------------------------------------------
// 3. CERTIFICATION CHECK
// ----------------------------------------------------------------------------

function checkCertification(studentName, groupName) {
  if (!studentName || !groupName) return { eligible: false, keys: [] };

  const results = getAllResults().filter(
    r => r.studentName === studentName && r.groupName === groupName
  );

  const uniqueKeys = new Set();
  results.forEach(r => {
    if (r.passed && r.key) {
      uniqueKeys.add(r.key);
    }
  });

  const collectedKeys = Array.from(uniqueKeys);
  const eligible = collectedKeys.length >= 10;

  return { eligible, keys: collectedKeys, total: collectedKeys.length };
}

function getAllResults() {
  const results = [];
  for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);
    if (key.startsWith("quiz_result_")) {
      try {
        const data = JSON.parse(localStorage.getItem(key));
        results.push(data);
      } catch (e) {
        console.warn("Invalid result data:", key);
      }
    }
  }
  return results;
}

// ----------------------------------------------------------------------------
// 4. INDEX PAGE (Topic Selection)
// ----------------------------------------------------------------------------

function initIndex() {
  const container = document.getElementById("topicsContainer");
  if (!container) return;

  // Get student info from URL hash or localStorage
  const hash = location.hash.slice(1);
  const params = new URLSearchParams(hash);
  
  let studentName = params.get("student") || localStorage.getItem("currentStudent") || "";
  let groupName = params.get("group") || localStorage.getItem("currentGroup") || "";

  // Student name input
  const nameInput = document.getElementById("studentName");
  const groupSelect = document.getElementById("groupSelect");
  const startBtn = document.getElementById("startBtn");
  const resetBtn = document.getElementById("resetAllBtn");
  const certBtn = document.getElementById("viewCertBtn");

  if (nameInput && groupSelect && startBtn) {
    nameInput.value = studentName;
    groupSelect.value = groupName;

    startBtn.addEventListener("click", () => {
      studentName = nameInput.value.trim();
      groupName = groupSelect.value;

      if (!studentName) {
        alert("⚠️ Molim te unesi svoje ime!");
        return;
      }
      if (!groupName) {
        alert("⚠️ Molim te izaberi svoju grupu!");
        return;
      }

      localStorage.setItem("currentStudent", studentName);
      localStorage.setItem("currentGroup", groupName);

      renderTopics(studentName, groupName);
      
      // Check certification
      const cert = checkCertification(studentName, groupName);
      if (certBtn) {
        certBtn.style.display = cert.eligible ? "inline-block" : "none";
      }

      // Show progress
      const progressDiv = document.getElementById("progressInfo");
      if (progressDiv) {
        progressDiv.innerHTML = `
          <p>🎯 Sakupljeno ključeva: <strong>${cert.total}/10</strong></p>
          ${cert.keys.length > 0 ? `<p>🔑 Tvoji ključevi: ${cert.keys.join(", ")}</p>` : ""}
          ${cert.eligible ? '<p class="cert-ready">🏆 Spreman/na za sertifikat!</p>' : ""}
        `;
        progressDiv.style.display = "block";
      }
    });
  }

  // Reset all data
  if (resetBtn) {
    resetBtn.addEventListener("click", () => {
      if (!confirm("⚠️ Da li sigurno želiš obrisati SVE rezultate? Ova akcija se ne može poništiti!")) {
        return;
      }
      
      const keys = [];
      for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);
        if (key.startsWith("quiz_result_")) {
          keys.push(key);
        }
      }
      
      keys.forEach(k => localStorage.removeItem(k));
      localStorage.removeItem("currentStudent");
      localStorage.removeItem("currentGroup");
      
      alert("✅ Svi rezultati su obrisani!");
      location.reload();
    });
  }

  // View certificate
  if (certBtn) {
    certBtn.addEventListener("click", () => {
      location.href = "certificate.html";
    });
  }

  // Auto-render if student data exists
  if (studentName && groupName) {
    renderTopics(studentName, groupName);
    const cert = checkCertification(studentName, groupName);
    if (certBtn) {
      certBtn.style.display = cert.eligible ? "inline-block" : "none";
    }
  }
}

function renderTopics(studentName, groupName) {
  const container = document.getElementById("topicsContainer");
  if (!container || !QUIZ_DATA) return;

  container.innerHTML = QUIZ_DATA.topics.map(topic => {
    const resultKey = `quiz_result_${safeKey(studentName)}_${safeKey(groupName)}_${topic.id}`;
    const result = localStorage.getItem(resultKey);
    
    let status = "";
    let statusClass = "";
    let keyBadge = "";
    
    if (result) {
      const data = JSON.parse(result);
      if (data.passed) {
        status = `✅ Prošao/la (${data.score}/${data.maxScore})`;
        statusClass = "status-passed";
        keyBadge = `<span class="key-badge">🔑 ${data.key}</span>`;
      } else {
        status = `❌ Ponoviti (${data.score}/${data.maxScore})`;
        statusClass = "status-failed";
      }
    }

    return `
      <div class="topic-card ${statusClass}">
        <div class="topic-icon">${topic.icon}</div>
        <h3>${topic.title}</h3>
        <p>${topic.description}</p>
        ${keyBadge}
        ${status ? `<p class="topic-status">${status}</p>` : ""}
        <button onclick="startQuiz('${topic.id}', '${groupName}')" class="btn btn-primary">
          🎮 ${status ? "Ponovi" : "Pokreni"} kviz
        </button>
      </div>
    `;
  }).join("");
}

// Global function for starting quiz
window.startQuiz = function(topicId, groupName) {
  // Store current state
  localStorage.setItem("pendingTopic", topicId);
  localStorage.setItem("pendingGroup", groupName);
  
  // Redirect to quiz page
  location.href = `quiz.html#topic=${topicId}&part=${groupName}`;
};

// ----------------------------------------------------------------------------
// 5. QR GATE (quiz.html entry point)
// ----------------------------------------------------------------------------

function initQrGate() {
  const gateDiv = document.getElementById("qrGate");
  if (!gateDiv) return;

  const hash = location.hash.slice(1);
  const params = new URLSearchParams(hash);
  
  const topicId = params.get("topic") || localStorage.getItem("pendingTopic");
  const part = params.get("part") || localStorage.getItem("pendingGroup");

  if (!topicId || !part) {
    alert("⚠️ Greška: Nedostaju podaci o temi!");
    location.href = "index.html";
    return;
  }

  const code = getPersistentCode(topicId, part);
  const qrUrl = buildQrUrl(code);
  const qrApiUrl = `https://api.qrserver.com/v1/create-qr-code/?size=220x220&data=${encodeURIComponent(qrUrl)}`;

  // Find topic data
  const topic = QUIZ_DATA.topics.find(t => t.id === topicId);
  if (!topic) {
    alert("⚠️ Tema nije pronađena!");
    location.href = "index.html";
    return;
  }

  // Display QR gate
  gateDiv.innerHTML = `
    <div class="qr-gate-card">
      <h2>🔐 Verifikacija pristupa</h2>
      <p>${topic.icon} <strong>${topic.title}</strong></p>
      <p>Grupa: <strong>${part === "A" ? "A (9-11 god)" : "B (12-15 god)"}</strong></p>
      
      <div class="qr-section">
        <h3>Za učenike - QR kod:</h3>
        <img src="${qrApiUrl}" alt="QR kod" class="qr-image" />
        <p class="qr-hint">Skeniraj kod mobilnim telefonom</p>
      </div>

      <div class="code-section">
        <h3>Unesi kod za pristup:</h3>
        <p class="code-hint">Učenici će vidjeti kod nakon skeniranja</p>
        <input type="text" id="codeInput" maxlength="4" placeholder="____" class="code-input" />
        <button id="verifyBtn" class="btn btn-primary">✅ Verifikuj i nastavi</button>
      </div>

      <button onclick="location.href='index.html'" class="btn btn-outline">◀️ Nazad</button>
    </div>
  `;

  // Verify button handler
  const verifyBtn = document.getElementById("verifyBtn");
  const codeInput = document.getElementById("codeInput");

  verifyBtn.addEventListener("click", () => {
    const entered = codeInput.value.trim().toUpperCase();
    if (entered === code) {
      gateDiv.style.display = "none";
      initQuiz(topicId, part);
    } else {
      alert("❌ Pogrešan kod! Pokušaj ponovo.");
      codeInput.value = "";
      codeInput.focus();
    }
  });

  // Auto-focus and uppercase
  codeInput.focus();
  codeInput.addEventListener("input", (e) => {
    e.target.value = e.target.value.toUpperCase();
  });

  // Enter key support
  codeInput.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
      verifyBtn.click();
    }
  });
}

// ----------------------------------------------------------------------------
// 6. QUIZ ENGINE
// ----------------------------------------------------------------------------

function initQuiz(topicId, part) {
  const quizDiv = document.getElementById("quizContainer");
  if (!quizDiv) return;

  const topic = QUIZ_DATA.topics.find(t => t.id === topicId);
  if (!topic) {
    alert("⚠️ Greška: Tema nije pronađena!");
    return;
  }

  const questions = part === "A" ? topic.questionsA : topic.questionsB;
  const studentName = localStorage.getItem("currentStudent") || "Učenik";

  // Initialize state
  currentState = {
    studentName: studentName,
    groupName: part,
    topicId: topicId,
    topicTitle: topic.title,
    topicIcon: topic.icon,
    topicKey: topic.key,
    currentQuestionIndex: 0,
    score: 0,
    answers: [],
    timeLeft: QUIZ_DATA.minutesPerQuiz * 60,
    timerInterval: null,
    questions: questions,
    maxScore: questions.length * 20
  };

  quizDiv.style.display = "block";
  renderQuestion();
  startTimer();
}

function startTimer() {
  const timerEl = document.getElementById("timeLeft");
  if (!timerEl) return;

  currentState.timerInterval = setInterval(() => {
    currentState.timeLeft--;
    
    const mins = Math.floor(currentState.timeLeft / 60);
    const secs = currentState.timeLeft % 60;
    timerEl.textContent = `${mins}:${secs.toString().padStart(2, "0")}`;

    // Warning at 1 minute
    if (currentState.timeLeft === 60) {
      timerEl.style.color = "#f59e0b";
      alert("⏰ Preostao je 1 minut!");
    }

    // Time's up
    if (currentState.timeLeft <= 0) {
      clearInterval(currentState.timerInterval);
      alert("⏰ Vrijeme je isteklo!");
      finishQuiz();
    }
  }, 1000);
}

function renderQuestion() {
  const q = currentState.questions[currentState.currentQuestionIndex];
  const container = document.getElementById("questionContainer");
  if (!container) return;

  // Update progress
  document.getElementById("currentQuestion").textContent = currentState.currentQuestionIndex + 1;
  document.getElementById("totalQuestions").textContent = currentState.questions.length;
  document.getElementById("currentScore").textContent = currentState.score;

  // Render question
  const optionsHtml = q.options.map((opt, idx) => {
    const inputType = q.correctAnswer.length > 1 ? "checkbox" : "radio";
    const inputName = inputType === "radio" ? "answer" : `answer_${idx}`;
    
    return `
      <label class="option-label">
        <input type="${inputType}" name="${inputName}" value="${idx}" />
        <span>${opt}</span>
      </label>
    `;
  }).join("");

  container.innerHTML = `
    <div class="question-card">
      <div class="question-header">
        <span class="question-number">Pitanje ${currentState.currentQuestionIndex + 1}</span>
        <span class="question-points">20 bodova</span>
      </div>
      <h3 class="question-text">${q.question}</h3>
      <div class="options-container">
        ${optionsHtml}
      </div>
      <div class="question-actions">
        <button onclick="submitAnswer()" class="btn btn-primary">
          ${currentState.currentQuestionIndex === currentState.questions.length - 1 ? "🏁 Završi" : "➡️ Dalje"}
        </button>
      </div>
    </div>
  `;
}

window.submitAnswer = function() {
  const q = currentState.questions[currentState.currentQuestionIndex];
  let selectedAnswers = [];

  if (q.correctAnswer.length > 1) {
    // Multiple choice
    document.querySelectorAll('input[type="checkbox"]:checked').forEach(input => {
      selectedAnswers.push(parseInt(input.value));
    });
  } else {
    // Single choice
    const selected = document.querySelector('input[type="radio"]:checked');
    if (selected) {
      selectedAnswers.push(parseInt(selected.value));
    }
  }

  if (selectedAnswers.length === 0) {
    alert("⚠️ Molim te izaberi odgovor!");
    return;
  }

  // Check if correct
  const isCorrect = 
    selectedAnswers.length === q.correctAnswer.length &&
    selectedAnswers.every(a => q.correctAnswer.includes(a));

  if (isCorrect) {
    currentState.score += 20;
  }

  currentState.answers.push({
    question: q.question,
    selected: selectedAnswers,
    correct: q.correctAnswer,
    isCorrect: isCorrect
  });

  // Next question or finish
  if (currentState.currentQuestionIndex < currentState.questions.length - 1) {
    currentState.currentQuestionIndex++;
    renderQuestion();
  } else {
    finishQuiz();
  }
};

function finishQuiz() {
  clearInterval(currentState.timerInterval);

  const passed = currentState.score >= QUIZ_DATA.passingScore;
  const percentage = Math.round((currentState.score / currentState.maxScore) * 100);

  let rank = "";
  if (currentState.score >= 90) rank = "🏆 Cyber Pro";
  else if (currentState.score >= 75) rank = "⭐ Cyber Smart";
  else if (currentState.score >= 60) rank = "✅ Položio/la";
  else rank = "🔄 Pokušaj ponovo";

  // Save result
  const result = {
    studentName: currentState.studentName,
    groupName: currentState.groupName,
    topicId: currentState.topicId,
    topicTitle: currentState.topicTitle,
    topicIcon: currentState.topicIcon,
    score: currentState.score,
    maxScore: currentState.maxScore,
    percentage: percentage,
    passed: passed,
    key: passed ? currentState.topicKey : null,
    rank: rank,
    timestamp: new Date().toISOString(),
    answers: currentState.answers
  };

  const resultKey = `quiz_result_${safeKey(currentState.studentName)}_${safeKey(currentState.groupName)}_${currentState.topicId}`;
  localStorage.setItem(resultKey, JSON.stringify(result));

  // Redirect to result page
  location.href = `result.html#result=${resultKey}`;
}

// ----------------------------------------------------------------------------
// 7. RESULT PAGE
// ----------------------------------------------------------------------------

function initResult() {
  const container = document.getElementById("resultContainer");
  if (!container) return;

  const hash = location.hash.slice(1);
  const params = new URLSearchParams(hash);
  const resultKey = params.get("result");

  if (!resultKey) {
    alert("⚠️ Greška: Rezultat nije pronađen!");
    location.href = "index.html";
    return;
  }

  const resultData = localStorage.getItem(resultKey);
  if (!resultData) {
    alert("⚠️ Greška: Rezultat nije pronađen u bazi!");
    location.href = "index.html";
    return;
  }

  const result = JSON.parse(resultData);

  // Check certification
  const cert = checkCertification(result.studentName, result.groupName);

  container.innerHTML = `
    <div class="result-card ${result.passed ? 'passed' : 'failed'}">
      <div class="result-icon">${result.passed ? '🎉' : '😞'}</div>
      <h1>${result.passed ? 'Čestitamo!' : 'Pokušaj ponovo'}</h1>
      
      <div class="result-info">
        <h2>${result.topicIcon} ${result.topicTitle}</h2>
        <p class="student-info">Učenik: <strong>${result.studentName}</strong> | Grupa: <strong>${result.groupName}</strong></p>
      </div>

      <div class="score-display">
        <div class="score-circle">
          <div class="score-value">${result.score}</div>
          <div class="score-max">/ ${result.maxScore}</div>
        </div>
        <div class="score-details">
          <p class="percentage">${result.percentage}%</p>
          <p class="rank">${result.rank}</p>
        </div>
      </div>

      ${result.passed ? `
        <div class="key-display">
          <h3>🔑 Tvoj ključ</h3>
          <div class="key-value">${result.key}</div>
          <p class="key-hint">Zapamti ovaj ključ! Nakon 10 ključeva dobijaš sertifikat.</p>
        </div>
      ` : `
        <div class="retry-message">
          <p>💪 Ne odustaj! Potrebno je minimum ${QUIZ_DATA.passingScore} bodova za prolaz.</p>
          <p>Prouči materijal još jednom i pokušaj ponovo!</p>
        </div>
      `}

      <div class="progress-info">
        <h3>📊 Tvoj napredak</h3>
        <p>Sakupljeno ključeva: <strong>${cert.total}/10</strong></p>
        ${cert.keys.length > 0 ? `<p>🔑 ${cert.keys.join(", ")}</p>` : ""}
        
        ${cert.eligible ? `
          <div class="cert-ready">
            <p>🏆 <strong>Čestitamo! Sakupio/la si svih 10 ključeva!</strong></p>
            <button onclick="location.href='certificate.html'" class="btn btn-primary">
              📜 Preuzmi sertifikat
            </button>
          </div>
        ` : ""}
      </div>

      <div class="result-actions">
        <button onclick="location.href='index.html'" class="btn btn-primary">🏠 Početna</button>
        <button onclick="location.href='quiz.html#topic=${result.topicId}&part=${result.groupName}'" class="btn btn-outline">
          🔄 Ponovi kviz
        </button>
      </div>
    </div>
  `;
}

// ----------------------------------------------------------------------------
// 8. BOOTSTRAP
// ----------------------------------------------------------------------------

document.addEventListener("DOMContentLoaded", () => {
  initTheme();

  const path = location.pathname;
  
  if (path.includes("index.html") || path.endsWith("/")) {
    initIndex();
  } else if (path.includes("quiz.html")) {
    initQrGate();
  } else if (path.includes("result.html")) {
    initResult();
  }
});
