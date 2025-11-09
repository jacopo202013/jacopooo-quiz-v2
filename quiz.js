const questions = [
  { question: "Qual è la capitale dell’Italia?", answers: ["Milano", "Roma", "Napoli"], correct: 1 },
  { question: "Quanto fa 7 × 6?", answers: ["42", "36", "48"], correct: 0 },
  { question: "Chi ha scritto 'La Divina Commedia'?", answers: ["Dante", "Manzoni", "Leopardi"], correct: 0 },
  { question: "Quale pianeta è il più vicino al Sole?", answers: ["Venere", "Mercurio", "Marte"], correct: 1 },
  { question: "In che anno è iniziata la Seconda Guerra Mondiale?", answers: ["1939", "1945", "1914"], correct: 0 },
  { question: "Qual è l’elemento chimico con simbolo O?", answers: ["Oro", "Ossigeno", "Osmio"], correct: 1 },
  { question: "Quale animale è simbolo della saggezza?", answers: ["Gufo", "Leone", "Cane"], correct: 0 },
  { question: "Qual è il colore complementare del rosso?", answers: ["Verde", "Blu", "Giallo"], correct: 0 },
  { question: "Chi ha inventato il telefono?", answers: ["Edison", "Bell", "Tesla"], correct: 1 },
  { question: "Quale continente ha più paesi?", answers: ["Africa", "Asia", "Europa"], correct: 0 },
  { question: "Qual è la lingua più parlata al mondo?", answers: ["Inglese", "Cinese", "Spagnolo"], correct: 1 },
  { question: "Qual è il metallo più leggero?", answers: ["Alluminio", "Litio", "Ferro"], correct: 1 },
  { question: "Chi ha dipinto la Gioconda?", answers: ["Michelangelo", "Leonardo", "Raffaello"], correct: 1 },
  { question: "Qual è il fiume più lungo del mondo?", answers: ["Nilo", "Amazonas", "Mississippi"], correct: 1 },
  { question: "Quale strumento ha 88 tasti?", answers: ["Violino", "Pianoforte", "Chitarra"], correct: 1 },
  { question: "Qual è il numero primo più piccolo?", answers: ["1", "2", "3"], correct: 1 },
  { question: "Quale città è famosa per la Torre Eiffel?", answers: ["Roma", "Parigi", "Londra"], correct: 1 },
  { question: "Quale gas respiriamo per vivere?", answers: ["Azoto", "Ossigeno", "Anidride carbonica"], correct: 1 },
  { question: "Quale animale è il più veloce sulla terra?", answers: ["Leopardo", "Cavallo", "Ghepardo"], correct: 2 },
  { question: "Qual è la moneta del Giappone?", answers: ["Yen", "Won", "Renminbi"], correct: 0 }
];

let current = 0;
let score = 0;
let quizEnded = false;

function showQuestion() {
  if (quizEnded || current >= questions.length) {
    showFinal();
    return;
  }

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

function checkAnswer(i) {
  if (quizEnded) return;

  const q = questions[current];
  if (i === q.correct) {
    score++;
    alert("✅ Corretto!");
  } else {
    alert("❌ Sbagliato!");
  }

  current++;
  showQuestion();
}

function showFinal() {
  quizEnded = true;
  let badge = "🟡 Buon tentativo!";
  if (score >= 15) badge = "🟢 Esperto!";
  if (score === questions.length) badge = "🔴 Jacopooo Master!";

  document.getElementById("question").textContent = "🎉 Quiz completato!";
  document.getElementById("answers").innerHTML = `
    Hai totalizzato <strong>${score}</strong> punti su <strong>${questions.length}</strong>.<br><br>
    <div style="font-size:1.5em;">${badge}</div><br>
    <button onclick="restartQuiz()">Ricomincia</button>
  `;
}

function restartQuiz() {
  current = 0;
  score = 0;
  quizEnded = false;
  showQuestion();
}

showQuestion();
