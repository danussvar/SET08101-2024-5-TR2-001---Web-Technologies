// scenario.js

const scenarios = [
  {
    question: "Riddle 1: You see two paths in a dark forest—left or right?",
    choices: ["Left", "Right"],
    correct: 0,
    deathReasons: [
      "",  
      "You turned right and were ambushed by a pack of hungry wolves."
    ]
  },
  {
    question: "Riddle 2: A river blocks your way. Build a bridge or swim?",
    choices: ["Build", "Swim"],
    correct: 1,
    deathReasons: [
      "The makeshift bridge collapsed under your weight, and you were swept away by the freezing current.",
      ""  
    ]
  },
  {
    question: "Riddle 3: A troll asks you his age. Lie or tell the truth?",
    choices: ["Lie", "Truth"],
    correct: 1,
    deathReasons: [
      "The troll saw through your lie and crushed you.",
      ""  
    ]
  },
  {
    question: "Riddle 4: A swamp blocks your way. Use the vines to swing or swim?",
    choices: ["Swing", "Swim"],
    correct: 0,
    deathReasons: [
      "",  
      "The swamp swallowed you."
    ]
  },
  {
    question: "Riddle 5: A dragon sleeps on gold. Sneak by or try to steal?",
    choices: ["Sneak", "Steal"],
    correct: 0,
    deathReasons: [
      "",  
      "The dragon awoke and spewed flame, incinerating you instantly."
    ]
  },
  {
    question: "Riddle 6: You meet a wizard offering wisdom or power. Which do you choose?",
    choices: ["Wisdom", "Power"],
    correct: 0,
    deathReasons: [
      "",  
      "The dark power corrupted your mind and consumed you from within."
    ]
  },
  {
    question: "Riddle 7: The map shows two X’s. Which X is the treasure?",
    choices: ["First X", "Second X"],
    correct: 1,
    deathReasons: [
      "You dug at the wrong X, unleashing a swarm of venomous snakes that bit you fatally.",
      ""  
    ]
  },
  {
    question: "Riddle 8: A final door asks a password. Shout it or whisper it?",
    choices: ["Shout", "Whisper"],
    correct: 1,
    deathReasons: [
      "The door’s wards reacted to your shout and unleashed a bolt of lightning, striking you dead.",
      ""  
    ]
  }
];

window.onload = () => {

  //Alens code
  initialiseLives();    
  setupMusicToggle(); 
  //Alens code

  let lives = parseInt(sessionStorage.getItem('lives') || '3', 10);
  let params = new URLSearchParams(location.search);
  let idx = parseInt(params.get('s') || '1', 10);

  
  document.body.style.backgroundImage    = `url('images/scenario${idx}.png')`;
  document.body.style.backgroundSize     = 'auto 100%';
  document.body.style.backgroundPosition = 'center';
  document.body.style.backgroundRepeat = 'no-repeat';

  
  if (lives <= 0) {
    return location.replace(`died.html?prev=${idx}`);
  }
  
  if (idx > scenarios.length) {
    return location.href = 'end.html';
  }



  
  const { question, choices, correct, deathReasons } = scenarios[idx - 1];
  document.getElementById('riddle').textContent = question;
  document.getElementById('choice1').textContent = choices[0];
  document.getElementById('choice2').textContent = choices[1];

 
  document.getElementById('choice1').onclick = () => handleAnswer(0);
  document.getElementById('choice2').onclick = () => handleAnswer(1);

  function handleAnswer(chosen) {
    if (chosen === correct) {
      
      location.href = `scenario.html?s=${idx + 1}`;
    } else {
      
      const reason = encodeURIComponent(deathReasons[chosen]);
      location.href = `wrong.html?prev=${idx}&reason=${reason}`;
    }
  }
};
