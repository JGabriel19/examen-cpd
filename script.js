let warningCount = 0;
let timer;
let timeLeft = 40 * 60; // 40 minutos

document.addEventListener("contextmenu", (e) => e.preventDefault()); // bloquea click derecho
document.addEventListener("copy", (e) => e.preventDefault()); // bloquea copiar texto
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

function loadQuestions() {
  questionsContainer.innerHTML = "";
  questions.forEach((q, i) => {
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

  // === Calcular la nota (puedes ajustar este cálculo) ===
  let correctas = 0;
  questions.forEach((q, i) => {
    const selected = document.querySelector(`input[name="q${i}"]:checked`);
    if (selected && parseInt(selected.value) === q.answer) {
      correctas++;
    }
  });

  const nota = ((correctas / questions.length) * 20).toFixed(2);

  // === ENVIAR DATOS A GOOGLE SHEET ===
  const data = { dni, nombre, nota };

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

// let warningCount = 0;
// let timer;
// let timeLeft = 40 * 60; // 40 minutos

// document.addEventListener("contextmenu", (e) => e.preventDefault()); // bloquea click derecho
// document.addEventListener("copy", (e) => e.preventDefault()); // bloquea copiar texto
// document.addEventListener("cut", (e) => e.preventDefault());
// document.addEventListener("keydown", (e) => {
//   if (
//     e.key === "Escape" ||
//     e.key === "F11" ||
//     (e.ctrlKey && (e.key === "c" || e.key === "u"))
//   ) {
//     e.preventDefault();
//     return false;
//   }
// });

// const startBtn = document.getElementById("start-btn");
// const startScreen = document.getElementById("start-screen");
// const examScreen = document.getElementById("exam-screen");
// const warningMsg = document.getElementById("warning-message");
// const questionsContainer = document.getElementById("questions-container");
// const timerDisplay = document.getElementById("timer");
// const submitBtn = document.getElementById("submit-btn");

// startBtn.addEventListener("click", async () => {
//   const dni = document.getElementById("dni").value.trim();
//   const name = document.getElementById("name").value.trim();

//   if (dni.length !== 8 || name === "") {
//     alert("Por favor, ingrese un DNI válido y su nombre completo.");
//     return;
//   }

//   await document.documentElement.requestFullscreen();
//   startScreen.classList.add("hidden");
//   examScreen.classList.remove("hidden");
//   loadQuestions();
//   startTimer();
// });

// function loadQuestions() {
//   questionsContainer.innerHTML = "";
//   questions.forEach((q, i) => {
//     const card = document.createElement("div");
//     card.classList.add("question-card");
//     card.innerHTML = `
//       <h3>${i + 1}. ${q.question}</h3>
//       ${q.options
//         .map(
//           (opt, j) => `
//         <label class="option">
//           <input type="radio" name="q${i}" value="${j}">
//           ${opt}
//         </label>
//       `
//         )
//         .join("")}
//     `;
//     questionsContainer.appendChild(card);
//   });
// }

// function startTimer() {
//   timer = setInterval(() => {
//     if (timeLeft <= 0) {
//       clearInterval(timer);
//       finishExam();
//     } else {
//       timeLeft--;
//       const minutes = Math.floor(timeLeft / 60);
//       const seconds = timeLeft % 60;
//       timerDisplay.textContent = `${minutes}:${
//         seconds < 10 ? "0" : ""
//       }${seconds}`;
//     }
//   }, 1000);
// }

// document.addEventListener("visibilitychange", () => {
//   if (document.hidden) showWarning();
// });

// function showWarning() {
//   warningCount++;
//   warningMsg.textContent = `⚠️ No cambies de pantalla. Intento ${warningCount}/3`;
//   warningMsg.classList.remove("hidden");

//   setTimeout(() => warningMsg.classList.add("hidden"), 3000);

//   if (warningCount >= 3) {
//     alert("Examen finalizado por incumplimiento de normas.");
//     finishExam();
//   }
// }

// submitBtn.addEventListener("click", finishExam);

// function finishExam() {
//   clearInterval(timer);
//   document.exitFullscreen();
//   alert("Examen finalizado. Tus respuestas han sido enviadas.");
// }

////OPCION 2 --------------------------------------------------------
// let warnings = 0;
// let examEnded = false;
// let dni, nombre;
// const totalWarnings = 3;
// const examTime = 40 * 60;
// let remainingTime = examTime;
// let timerInterval;

// document.addEventListener("contextmenu", (e) => e.preventDefault());
// document.addEventListener("copy", (e) => e.preventDefault());
// document.addEventListener("keydown", (e) => {
//   if (examEnded) return;
//   if (e.key === "Escape" || e.key === "F11") e.preventDefault();
// });

// window.onblur = () => {
//   if (!examEnded) showWarning("Cambia nuevamente a la pantalla del examen");
// };

// document.addEventListener("fullscreenchange", () => {
//   if (!document.fullscreenElement && !examEnded)
//     showWarning("Saliste del modo pantalla completa");
// });

// function showWarning(msg) {
//   warnings++;
//   const box = document.getElementById("warning");
//   box.textContent = `${msg} (${warnings}/${totalWarnings})`;
//   box.style.display = "block";
//   setTimeout(() => (box.style.display = "none"), 3000);

//   if (warnings >= totalWarnings)
//     endExam("Examen finalizado por múltiples advertencias");
// }

// function saveStudent() {
//   dni = document.getElementById("dni").value.trim();
//   nombre = document.getElementById("nombre").value.trim();

//   if (!dni || !nombre) {
//     alert("Por favor, completa todos los campos");
//     return;
//   }

//   document.getElementById("fullscreenBtn").style.display = "inline-block";
// }

// function enterFullscreen() {
//   const elem = document.documentElement;
//   if (elem.requestFullscreen) elem.requestFullscreen();

//   document.getElementById("startSection").style.display = "none";
//   document.getElementById("examSection").style.display = "block";
//   startExam();
// }

// function startExam() {
//   renderQuestions();
//   startTimer();
// }

// function renderQuestions() {
//   const container = document.getElementById("questionContainer");
//   container.innerHTML = questions
//     .map(
//       (q, index) => `
//       <div class="question-block">
//         <h3>${index + 1}. ${q.question}</h3>
//         ${q.options
//           .map(
//             (opt, i) => `
//           <label>
//             <input type="radio" name="q${index}" value="${i}">
//             ${opt}
//           </label><br>
//         `
//           )
//           .join("")}
//       </div>
//     `
//     )
//     .join("");

//   container.innerHTML += `<button onclick="submitExam()">Enviar examen</button>`;
// }

// function startTimer() {
//   timerInterval = setInterval(() => {
//     remainingTime--;
//     const minutes = Math.floor(remainingTime / 60);
//     const seconds = remainingTime % 60;
//     document.getElementById("timer").textContent = `⏱️ ${minutes}:${seconds
//       .toString()
//       .padStart(2, "0")}`;
//     if (remainingTime <= 0) endExam("Tiempo finalizado");
//   }, 1000);
// }

// function submitExam() {
//   let score = 0;
//   questions.forEach((q, i) => {
//     const selected = document.querySelector(`input[name="q${i}"]:checked`);
//     if (selected && parseInt(selected.value) === q.answer) score++;
//   });
//   endExam("Examen completado", score);
// }

// function endExam(reason, score = 0) {
//   examEnded = true;
//   clearInterval(timerInterval);
//   document.exitFullscreen?.();

//   const nota = Math.round((score / questions.length) * 20);
//   document.getElementById("examSection").innerHTML = `
//     <h2>Examen terminado</h2>
//     <p>${reason}</p>
//     <p><b>Tu nota final:</b> ${nota}/20</p>
//   `;

//   fetch(
//     "https://script.google.com/macros/s/AKfycbxdRLTU1Q8VuiOo0XLCPI1pgljOsf_HoKgUR6yIrdSbIqFB9XmRrAwCO7Wsp0fZJfQ6/exec",
//     {
//       method: "POST",
//       body: JSON.stringify({ dni, nombre, nota }),
//     }
//   );
// }
