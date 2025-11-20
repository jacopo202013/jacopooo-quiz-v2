// --- Pool di 60 domande di cultura generale ---
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
  { question: "Qual è il metallo più leggero?", answers: ["Alluminio","Litio","Ferro"], correct: 1 },
  { question: "Chi ha scritto 'La Divina Commedia'?", answers: ["Dante","Manzoni","Boccaccio"], correct: 0 },
  { question: "Qual è il mare che bagna l’Italia a est?", answers: ["Adriatico","Tirreno","Ionio"], correct: 0 },
  { question: "Quale animale è il più veloce sulla terra?", answers: ["Leopardo","Cavallo","Ghepardo"], correct: 2 },
  { question: "Qual è la capitale della Spagna?", answers: ["Barcellona","Madrid","Valencia"], correct: 1 },
  { question: "Chi ha scoperto l’America?", answers: ["Cristoforo Colombo","Amerigo Vespucci","Magellano"], correct: 0 },
  { question: "Qual è il gas che respiriamo per vivere?", answers: ["Azoto","Ossigeno","Anidride carbonica"], correct: 1 },
  { question: "Qual è il continente più grande?", answers: ["Asia","Africa","America"], correct: 0 },
  { question: "Chi ha scritto 'Il piccolo principe'?", answers: ["Saint-Exupéry","Hugo","Baudelaire"], correct: 0 },
  { question: "Qual è la capitale della Germania?", answers: ["Berlino","Monaco","Amburgo"], correct: 0 },
  { question: "Qual è il simbolo chimico dell’oro?", answers: ["Ag","Au","Fe"], correct: 1 },
  { question: "Qual è il deserto più grande del mondo?", answers: ["Sahara","Gobi","Antartide"], correct: 2 },
  { question: "Chi ha scritto 'Romeo e Giulietta'?", answers: ["Shakespeare","Goethe","Dickens"], correct: 0 },
  { question: "Qual è il monte più alto del mondo?", answers: ["K2","Everest","Kilimangiaro"], correct: 1 },
  { question: "Qual è la capitale del Canada?", answers: ["Toronto","Ottawa","Vancouver"], correct: 1 },
  { question: "Chi ha dipinto la Cappella Sistina?", answers: ["Michelangelo","Leonardo","Raffaello"], correct: 0 },
  { question: "Qual è il mare che bagna la Grecia?", answers: ["Egeo","Tirreno","Ionio"], correct: 0 },
  { question: "Qual è la capitale dell’Australia?", answers: ["Sydney","Canberra","Melbourne"], correct: 1 },
  { question: "Chi ha scritto 'Odissea'?", answers: ["Omero","Virgilio","Platone"], correct: 0 },
  { question: "Qual è il pianeta più grande del sistema solare?", answers: ["Saturno","Giove","Urano"], correct: 1 },
  { question: "Qual è la capitale del Brasile?", answers: ["Rio de Janeiro","Brasilia","San Paolo"], correct: 1 },
  { question: "Chi ha inventato la lampadina?", answers: ["Edison","Tesla","Bell"], correct: 0 },
  { question: "Qual è il lago più grande d’Italia?", answers: ["Garda","Como","Maggiore"], correct: 0 },
  { question: "Qual è la capitale della Russia?", answers: ["Mosca","San Pietroburgo","Kiev"], correct: 0 },
  { question: "Chi ha scritto 'La coscienza di Zeno'?", answers: ["Svevo","Pirandello","Verga"], correct: 0 },
  { question: "Qual è il continente con più popolazione?", answers: ["Asia","Africa","Europa"], correct: 0 },
  { question: "Qual è la capitale dell’Egitto?", answers: ["Il Cairo","Alessandria","Luxor"], correct: 0 },
  { question: "Chi ha scritto 'Il nome della rosa'?", answers: ["Eco","Calvino","Moravia"], correct: 0 },
  { question: "Quali mari bagnano la Sicilia?", answers: ["Tirreno","Ionio","Entrambi"], correct: 2 },
  { question: "Qual è la capitale della Cina?", answers: ["Shanghai","Pechino","Hong Kong"], correct: 1 },
  { question: "Chi ha scritto 'Orgoglio e pregiudizio'?", answers: ["Jane Austen","Charlotte Brontë","Dickens"], correct: 0 },
  { question: "Qual è il continente più piccolo?", answers: ["Australia","Europa","Antartide"], correct: 0 },
  { question: "Qual è la capitale del Messico?", answers: ["Guadalajara","Città del Messico","Cancun"], correct: 1 },
  { question: "Chi ha scritto 'Il Gattopardo'?", answers: ["Tomasi di Lampedusa","Moravia","Svevo"], correct: 0 },
  { question: "Quale mare bagna la Liguria?", answers: ["Tirreno","Adriatico","Ionio"], correct: 0 },
  { question: "Qual è la capitale della Turchia?", answers: ["Istanbul","Ankara","Smirne"], correct: 1 },
  { question: "Chi ha scritto 'La metamorfosi'?", answers: ["Kafka","Nietzsche","Freud"], correct: 0 },
  { question: "Dove si trova il deserto del Sahara?", answers: ["Asia","Africa","America"], correct: 1 },
  { question: "Qual è la capitale della Corea del Sud?", answers: ["Seoul","Busan","Tokyo"], correct: 0 },
  { question: "Chi ha scritto 'Il fu Mattia Pascal'?", answers: ["Pirandello","Svevo","Verga"], correct: 0 },
  { question: "Qual è la capitale della Norvegia?", answers: ["Oslo","Stoccolma","Copenaghen"], correct: 0 },
  { question: "Chi ha scritto 'Il barone rampante'?", answers: ["Calvino","Eco","Moravia"], correct: 0 },
  { question: "Qual è la capitale dell’India?", answers: ["Mumbai","Nuova Delhi","Calcutta"], correct: 1 },
  { question: "Chi ha scoperto la penicillina?", answers: ["Pasteur","Fleming","Curie"], correct: 1 },
  { question: "Qual è la capitale del Portogallo?", answers: ["Porto","Lisbona","Madrid"], correct: 1 },
  { question: "Chi ha scritto 'Il deserto dei Tartari'?", answers: ["Buzzati","Svevo","Pirandello"], correct: 0 },
  { question: "Qual è la capitale della Polonia?", answers: ["Varsavia","Cracovia","Danzica"], correct: 0 },
  { question: "Chi ha scritto 'Se questo è un uomo'?", answers: ["Primo Levi","Moravia","Calvino"], correct: 0 },
  { question: "Qual è la capitale della Grecia?", answers: ["Atene","Salonicco","Creta"], correct: 0 },
  { question: "Chi ha scritto 'Il visconte dimezzato'?", answers: ["Calvino","Eco","Manzoni"], correct: 0 },
  { question: "Qual è la capitale della Svizzera?", answers: ["Zurigo","Berna","Ginevra"], correct: 1 },
  { question: "Chi ha scritto 'La fattoria degli animali'?", answers: ["Orwell","Huxley","Dickens"], correct: 0 },
  { question: "Qual è la capitale dell’Irlanda?", answers: ["Dublino","Cork","Belfast"], correct: 0 },
  { question: "Chi ha scritto 'Il giovane Holden'?", answers: ["Salinger","Hemingway","Fitzgerald"], correct: 0 },
  { question: "Qual è la capitale della Svezia?", answers: ["Oslo","Stoccolma","Helsinki"], correct: 1 },
  { question: "Chi ha scritto 'Cent’anni di solitudine'?", answers: ["Garcia Marquez","Borges","Neruda"], correct: 0 },
  { question: "Qual è la capitale della Finlandia?", answers: ["Tallinn","Helsinki","Reykjavik"], correct: 1 },
  { question: "Chi ha scritto 'Il processo'?", answers: ["Kafka","Goethe","Nietzsche"], correct: 0 },
  { question: "Qual è la capitale dei Paesi Bassi?", answers: ["Amsterdam","Rotterdam","L’Aia"], correct: 0 },
  { question: "Qual è il simbolo chimico dell’argento?", answers: ["Ag","Au","Pt"], correct: 0 },
  { question: "Qual è il fiume più lungo d’Europa?", answers: ["Volga","Danubio","Reno"], correct: 0 },
  { question: "Qual è l’oceano più grande?", answers: ["Atlantico","Pacifico","Indiano"], correct: 1 },
  { question: "Chi ha scritto 'Moby Dick'?", answers: ["Melville","Twain","London"], correct: 0 }
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
let isAdmin = false;

// --- Utility ---
function shuffle(arr){ return arr.sort(() => Math.random() - 0.5); }
function pickRandomQuestions(allQuestions, n=10){ return shuffle(allQuestions).slice(0, n); }

// --- UI domanda/risposte ---
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

// --- Schermata finale + classifica ---
function showFinal(){
  quizEnded=true;
  document.getElementById("answers").innerHTML="";
  let badge="🟡 Buon tentativo!";
  if(score>=8 && !nonsenseMode) badge="🟢 Esperto!";
  if(score===questions.length && !nonsenseMode) badge="🔴 Jacopooo Master!";
  if(nonsenseMode) badge="🤪 Nonsense Hero!";

  // Punteggio
  document.getElementById("final").innerHTML=
    `Hai totalizzato <strong>${score}</strong> punti su <strong>${questions.length}</strong>.<br><br>
     <div style="font-size:1.5em;">${badge}</div><br>
     <button onclick="restartQuiz()">Ricomincia</button>`;

  // Classifica locale
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

// --- Avvio quiz + gestione nome/admin ---
function startQuiz(nonsense=false){
  nonsenseMode=nonsense;
  current=0; score=0; quizEnded=false;

  // Chiede nome solo la prima volta
  if (!localStorage.getItem("playerName")) {
    let chosenName = prompt("Inserisci il tuo nome:", "Anonimo") || "Anonimo";

    // Admin riservato
    if (chosenName.toLowerCase() === "jacopo(admin)") {
      playerName = "jacopo(admin)";
      isAdmin = true;
      alert("👑 Benvenuto Admin Jacopo!");
    } else {
      // Blocca tentativi di finta-admin
      if (chosenName.toLowerCase().includes("admin")) {
        alert("Questo nome è riservato all'admin. Scegli un altro nome!");
        chosenName = "Anonimo";
      }
      playerName = chosenName;
      isAdmin = false;
    }

    localStorage.setItem("playerName", playerName);
  } else {
    playerName = localStorage.getItem("playerName");
    isAdmin = (playerName.toLowerCase() === "jacopo(admin)");
  }

  // Mostra/nasconde controlli admin
  const adminPanel = document.getElementById("adminControls");
  if (adminPanel) adminPanel.style.display = isAdmin ? "block" : "none";

  // Pesca domande
  const pool = nonsense ? questionsNonsense : questionsNormal;
  questions = pickRandomQuestions(pool, 10);
  document.getElementById("final").innerHTML="";
  showQuestion();
}

// --- Restart ---
function restartQuiz(){ startQuiz(nonsenseMode); }

// --- Cancella classifica (solo admin) ---
function clearHighscores(){
  if (!isAdmin) {
    alert("Solo l'admin può cancellare la classifica!");
    return;
  }
  localStorage.removeItem("highscores");
  alert("Classifica cancellata!");
}
// Espone funzioni per HTML
window.startQuiz = startQuiz;
window.restartQuiz = restartQuiz;
window.clearHighscores = clearHighscores;

// --- Reset iniziale della classifica (su tua richiesta) ---
localStorage.removeItem("highscores");

// --- Avvio di default ---
startQuiz(false);

