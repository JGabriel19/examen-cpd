let warningCount = 0;
let timer;
let timeLeft = 40 * 60;
let randomizedQuestions = []; // <-- variable global para guardar las preguntas mezcladas

document.addEventListener("contextmenu", (e) => e.preventDefault());
document.addEventListener("copy", (e) => e.preventDefault());
document.addEventListener("cut", (e) => e.preventDefault());
document.addEventListener("keydown", (e) => {
  if (
    e.key === "Escape" ||
    e.key === "F11" ||
    (e.ctrlKey && (e.key === "c" || e.key === "u"))
  ) {
    e.preventDefault();
    return false;
  }
});

const startBtn = document.getElementById("start-btn");
const startScreen = document.getElementById("start-screen");
const examScreen = document.getElementById("exam-screen");
const finalScreen = document.getElementById("final-screen"); // ⬅️ nueva pantalla final
const warningMsg = document.getElementById("warning-message");
const questionsContainer = document.getElementById("questions-container");
const timerDisplay = document.getElementById("timer");
const submitBtn = document.getElementById("submit-btn");

startBtn.addEventListener("click", async () => {
  const dni = document.getElementById("dni").value.trim();
  const name = document.getElementById("name").value.trim();

  if (dni.length !== 8 || name === "") {
    alert("Por favor, ingrese un DNI válido y su nombre completo.");
    return;
  }

  await document.documentElement.requestFullscreen();
  startScreen.classList.add("hidden");
  examScreen.classList.remove("hidden");
  loadQuestions();
  startTimer();
});

// Mezcla aleatoria
function shuffleArray(array) {
  return array.sort(() => Math.random() - 0.5);
}

function getRandomizedQuestions() {
  const shuffled = shuffleArray([...questions]);

  return shuffled.map((q) => {
    const options = shuffleArray([...q.options]);
    const correctAnswerText = q.options[q.answer];
    const newAnswerIndex = options.indexOf(correctAnswerText);

    return { ...q, options, answer: newAnswerIndex };
  });
}

function loadQuestions() {
  questionsContainer.innerHTML = "";
  randomizedQuestions = getRandomizedQuestions(); // ⬅️ Guardamos aquí
  randomizedQuestions.forEach((q, i) => {
    const card = document.createElement("div");
    card.classList.add("question-card");
    card.innerHTML = `
      <h3>${i + 1}. ${q.question}</h3>
      ${q.options
        .map(
          (opt, j) => `
        <label class="option">
          <input type="radio" name="q${i}" value="${j}">
          ${opt}
        </label>
      `
        )
        .join("")}
    `;
    questionsContainer.appendChild(card);
  });
}

function startTimer() {
  timer = setInterval(() => {
    if (timeLeft <= 0) {
      clearInterval(timer);
      finishExam();
    } else {
      timeLeft--;
      const minutes = Math.floor(timeLeft / 60);
      const seconds = timeLeft % 60;
      timerDisplay.textContent = `${minutes}:${
        seconds < 10 ? "0" : ""
      }${seconds}`;
    }
  }, 1000);
}

document.addEventListener("visibilitychange", () => {
  if (document.hidden) showWarning();
});

function showWarning() {
  warningCount++;
  warningMsg.textContent = `⚠️ No cambies de pantalla. Intento ${warningCount}/3`;
  warningMsg.classList.remove("hidden");
  setTimeout(() => warningMsg.classList.add("hidden"), 3000);

  if (warningCount >= 3) {
    alert("Examen finalizado por incumplimiento de normas.");
    finishExam();
  }
}

submitBtn.addEventListener("click", finishExam);

function finishExam() {
  clearInterval(timer);
  document.exitFullscreen();

  const dni = document.getElementById("dni").value.trim();
  const nombre = document.getElementById("name").value.trim();

  let correctas = 0;
  randomizedQuestions.forEach((q, i) => {
    // ⬅️ usamos las preguntas mezcladas
    const selected = document.querySelector(`input[name="q${i}"]:checked`);
    if (selected && parseInt(selected.value) === q.answer) {
      correctas++;
    }
  });

  const nota = ((correctas / randomizedQuestions.length) * 20).toFixed(2);

  const data = { dni, nombre, nota };

  // Ocultar el examen
  examScreen.classList.add("hidden");

  // Mostrar pantalla final
  finalScreen.classList.remove("hidden");
  finalScreen.innerHTML = `
    <div class="final-message">
      <h2>🎉 Examen finalizado</h2>
      <p><strong>${nombre}</strong>, tu examen ha sido enviado correctamente.</p>
      <p><b>Nota final:</b> ${nota}</p>
      <p>Gracias por tu participación.</p>
    </div>
  `;

  // Enviar a Google Sheets
  fetch(
    "https://script.google.com/macros/s/AKfycbxdRLTU1Q8VuiOo0XLCPI1pgljOsf_HoKgUR6yIrdSbIqFB9XmRrAwCO7Wsp0fZJfQ6/exec",
    {
      method: "POST",
      mode: "no-cors",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    }
  )
    .then(() => {
      alert(
        `Examen finalizado. Tus respuestas han sido enviadas.\nNota: ${nota}`
      );
    })
    .catch((err) => {
      console.error("Error al enviar datos:", err);
      alert("Examen finalizado, pero hubo un problema al enviar tus datos.");
    });
}
