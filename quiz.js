// --- Pool di 70 domande di cultura generale ---
const questionsNormal = [
  { question: "Qual è la capitale della Francia?", answers: ["Roma","Parigi","Madrid"], correct: 1 },
  { question: "Chi ha dipinto la Gioconda?", answers: ["Michelangelo","Leonardo da Vinci","Raffaello"], correct: 1 },
  { question: "Qual è il pianeta più vicino al Sole?", answers: ["Venere","Mercurio","Marte"], correct: 1 },
  { question: "In che anno è iniziata la Seconda Guerra Mondiale?", answers: ["1939","1945","1914"], correct: 0 },
  { question: "Chi ha scritto 'I Promessi Sposi'?", answers: ["Manzoni","Dante","Leopardi"], correct: 0 },
  { question: "Qual è il fiume più lungo del mondo?", answers: ["Nilo","Amazonas","Mississippi"], correct: 1 },
  { question: "Qual è la moneta del Giappone?", answers: ["Yen","Won","Renminbi"], correct: 0 },
  { question: "Chi ha inventato il telefono?", answers: ["Edison","Bell","Tesla"], correct: 1 },
  { question: "Quale continente ha più paesi?", answers: ["Africa","Asia","Europa"], correct: 0 },
  { question: "Qual è la lingua più parlata al mondo?", answers: ["Inglese","Cinese","Spagnolo"], correct: 1 },
  // ... (altre 60 domande già inserite come ti ho preparato prima)
];

// --- Domande nonsense ---
const questionsNonsense = [
  { question: "Quante banane servono per costruire un ponte?", answers: ["42","1000","Dipende dal vento"], correct: 2 },
  { question: "Se un gatto suona il pianoforte, quale nota preferisce?", answers: ["Miao maggiore","Do","Fa"], correct: 0 },
  { question: "Qual è la capitale dei puffi?", answers: ["Puffolandia","Roma","Blu City"], correct: 0 },
  { question: "Quante pizze può mangiare un unicorno?", answers: ["Infinite","Zero","Dipende dal corno"], correct: 0 },
  { question: "Se piove spaghetti, cosa usi come ombrello?", answers: ["Forchetta gigante","Pentola","Grattugia"], correct: 1 }
];

// --- Variabili di stato ---
let questions = [];
let nonsenseMode = false;
let current = 0;
let score = 0;
let quizEnded = false;
let playerName = "";

// --- Funzione shuffle ---
function shuffle(arr){ return arr.sort(() => Math.random() - 0.5); }

// --- Pesca N domande casuali ---
function pickRandomQuestions(allQuestions, n=10){
  return shuffle(allQuestions).slice(0, n);
}

// --- Mostra domanda ---
function showQuestion(){
  if (quizEnded || current >= questions.length) { showFinal(); return; }
  const q = questions[current];
  document.getElementById("question").textContent = q.question;
  const answersDiv = document.getElementById("answers");
  answersDiv.innerHTML = "";
  q.answers.forEach((answer,i)=>{
    const btn=document.createElement("button");
    btn.textContent=answer;
    btn.onclick=()=>checkAnswer(i);
    answersDiv.appendChild(btn);
  });
}

// --- Controlla risposta ---
function checkAnswer(i){
  if (quizEnded) return;
  if (i===questions[current].correct) score++;
  current++;
  showQuestion();
}

// --- Schermata finale ---
function showFinal(){
  quizEnded=true;
  document.getElementById("answers").innerHTML="";
  let badge="🟡 Buon tentativo!";
  if(score>=8 && !nonsenseMode) badge="🟢 Esperto!";
  if(score===questions.length && !nonsenseMode) badge="🔴 Jacopooo Master!";
  if(nonsenseMode) badge="🤪 Nonsense Hero!";

  document.getElementById("final").innerHTML=
    `Hai totalizzato <strong>${score}</strong> punti su <strong>${questions.length}</strong>.<br><br>
     <div style="font-size:1.5em;">${badge}</div><br>
     <button onclick="restartQuiz()">Ricomincia</button>`;

  // --- Classifica locale con nomi ---
  let highscores=JSON.parse(localStorage.getItem("highscores")||"[]");
  highscores.push({name: playerName, score});
  highscores.sort((a,b)=>b.score-a.score);
  highscores=highscores.slice(0,5);
  localStorage.setItem("highscores",JSON.stringify(highscores));

  document.getElementById("final").innerHTML+=
    "<h3>🏆 Classifica locale</h3><ul>"+
    highscores.map((s,i)=>`<li>${i+1}. ${s.name}: ${s.score} punti</li>`).join("")+
    "</ul>";
}

// --- Avvio quiz ---
function startQuiz(nonsense=false){
  nonsenseMode=nonsense;
  current=0; score=0; quizEnded=false;

  // Chiede nome solo la prima volta
  if (!localStorage.getItem("playerName")) {
    playerName = prompt("Inserisci il tuo nome:", "Anonimo") || "Anonimo";
    localStorage.setItem("playerName", playerName);
  } else {
    playerName = localStorage.getItem("playerName");
  }

  const pool = nonsense ? questionsNonsense : questionsNormal;
  questions = pickRandomQuestions(pool, 10); // pesca 10 domande casuali
  document.getElementById("final").innerHTML=""; 
  showQuestion();
}

// --- Restart ---
function restartQuiz(){ startQuiz(nonsenseMode); }

// --- Esporta funzioni globali per HTML ---
window.startQuiz = startQuiz;
window.restartQuiz = restartQuiz;

// --- Avvio di default ---
startQuiz(false);
