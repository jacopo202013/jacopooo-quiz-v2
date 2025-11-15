const questionsNormal = [
  { question: "Qual è la capitale dell’Italia?", answers: ["Milano","Roma","Napoli"], correct: 1 },
  { question: "Quanto fa 7 × 6?", answers: ["42","36","48"], correct: 0 },
  { question: "Chi ha scritto 'La Divina Commedia'?", answers: ["Dante","Manzoni","Leopardi"], correct: 0 },
  { question: "Quale pianeta è il più vicino al Sole?", answers: ["Venere","Mercurio","Marte"], correct: 1 },
  { question: "In che anno è iniziata la Seconda Guerra Mondiale?", answers: ["1939","1945","1914"], correct: 0 },
  { question: "Qual è l’elemento chimico con simbolo O?", answers: ["Oro","Ossigeno","Osmio"], correct: 1 },
  { question: "Quale animale è simbolo della saggezza?", answers: ["Gufo","Leone","Cane"], correct: 0 },
  { question: "Qual è il colore complementare del rosso?", answers: ["Verde","Blu","Giallo"], correct: 0 },
  { question: "Chi ha inventato il telefono?", answers: ["Edison","Bell","Tesla"], correct: 1 },
  { question: "Quale continente ha più paesi?", answers: ["Africa","Asia","Europa"], correct: 0 },
  { question: "Qual è la lingua più parlata al mondo?", answers: ["Inglese","Cinese","Spagnolo"], correct: 1 },
  { question: "Qual è il metallo più leggero?", answers: ["Alluminio","Litio","Ferro"], correct: 1 },
  { question: "Chi ha dipinto la Gioconda?", answers: ["Michelangelo","Leonardo","Raffaello"], correct: 1 },
  { question: "Qual è il fiume più lungo del mondo?", answers: ["Nilo","Amazonas","Mississippi"], correct: 1 },
  { question: "Quale strumento ha 88 tasti?", answers: ["Violino","Pianoforte","Chitarra"], correct: 1 },
  { question: "Qual è il numero primo più piccolo?", answers: ["1","2","3"], correct: 1 },
  { question: "Quale città è famosa per la Torre Eiffel?", answers: ["Roma","Parigi","Londra"], correct: 1 },
  { question: "Quale gas respiriamo per vivere?", answers: ["Azoto","Ossigeno","Anidride carbonica"], correct: 1 },
  { question: "Quale animale è il più veloce sulla terra?", answers: ["Leopardo","Cavallo","Ghepardo"], correct: 2 },
  { question: "Qual è la moneta del Giappone?", answers: ["Yen","Won","Renminbi"], correct: 0 }
];

const questionsNonsense = [
  { question: "Quante banane servono per costruire un ponte?", answers: ["42","1000","Dipende dal vento"], correct: 2 },
  { question: "Se un gatto suona il pianoforte, quale nota preferisce?", answers: ["Miao maggiore","Do","Fa"], correct: 0 },
  { question: "Qual è la capitale dei puffi?", answers: ["Puffolandia","Roma","Blu City"], correct: 0 },
  { question: "Quante pizze può mangiare un unicorno?", answers: ["Infinite","Zero","Dipende dal corno"], correct: 0 },
  { question: "Se piove spaghetti, cosa usi come ombrello?", answers: ["Forchetta gigante","Pentola","Grattugia"], correct: 1 }
];

let questions = [];
let nonsenseMode = false;
let current = 0;
let score = 0;
let quizEnded = false;

function shuffle(arr){ return arr.sort(() => Math.random() - 0.5); }

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

function checkAnswer(i){
  if (quizEnded) return;
  if (i===questions[current].correct) score++;
  current++;
  showQuestion();
}

function showFinal(){
  quizEnded=true;
  document.getElementById("answers").innerHTML="";
  let badge="🟡 Buon tentativo!";
  if(score>=15 && !nonsenseMode) badge="🟢 Esperto!";
  if(score===questions.length && !nonsenseMode) badge="🔴 Jacopooo Master!";
  if(nonsenseMode) badge="🤪 Nonsense Hero!";
  document.getElementById("final").innerHTML=
    `Hai totalizzato <strong>${score}</strong> punti su <strong>${questions.length}</strong>.<br><br>
     <div style="font-size:1.5em;">${badge}</div><br>
     <button onclick="restartQuiz()">Ricomincia</button>`;
  // Classifica locale
  let highscores=JSON.parse(localStorage.getItem("highscores")||"[]");
  highscores.push(score);
  highscores.sort((a,b)=>b-a);
  highscores=highscores.slice(0,5);
  localStorage.setItem("highscores",JSON.stringify(highscores));
  document.getElementById("final").innerHTML+=
    "<h3>🏆 Classifica locale</h3><ul>"+highscores.map
