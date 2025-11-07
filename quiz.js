// Domande del quiz
const questions = [
  {
    question: "Qual è la capitale dell’Italia?",
    answers: ["Milano", "Roma", "Napoli"],
    correct: 1
  },
  {
    question: "Quanto fa 7 × 6?",
    answers: ["42", "36", "48"],
    correct: 0
  },
  {
    question: "Chi ha scritto 'La Divina Commedia'?",
    answers: ["Dante", "Manzoni", "Leopardi"],
    correct: 0
  },
  {
    question: "Quale pianeta è il più vicino al Sole?",
    answers: ["Venere", "Mercurio", "Marte"],
    correct: 1
  }
];

// Stato del quiz
let current = 0;

// Mostra la domanda corrente
function showQuestion() {
  const q = questions[current];
  document.getElementById("question").textContent = q.question;

  const answersDiv = document.getElementById("answers");
  answersDiv.innerHTML = "";

  q.answers.forEach((answer, i) => {
    const btn = document.createElement("button");
    btn.textContent = answer;
    btn.onclick = () => checkAnswer(i);
    answersDiv.appendChild(btn);
  });
}

// Controlla la risposta
function checkAnswer(i) {
  const q = questions[current];
  if (i === q.correct) {
    alert("✅ Corretto!");
  } else {
    alert("❌ Sbagliato!");
  }

  // Passa alla prossima domanda
  current = (current + 1) % questions.length;
  showQuestion();
}

// Avvia il quiz
showQuestion();
