// List your 8 riddles here. Each object has:
//  - question: string
//  - choices: [string, string]
//  - correct: index 0 or 1
const scenarios = [
  { question: "Riddle 1: You see two paths in a dark forest—left or right?", choices: ["Left", "Right"], correct: 0 },
  { question: "Riddle 2: A river blocks your way. Build a bridge or swim?", choices: ["Build", "Swim"], correct: 1 },
  { question: "Riddle 3: A troll asks you his age. Lie or tell the truth?", choices: ["Lie", "Truth"], correct: 1 },
  { question: "Riddle 4: You find a locked chest. Use the key or force it open?", choices: ["Use Key", "Force Open"], correct: 0 },
  { question: "Riddle 5: A dragon sleeps on gold. Sneak by or try to steal?", choices: ["Sneak", "Steal"], correct: 0 },
  { question: "Riddle 6: You meet a wizard offering wisdom or power. Which do you choose?", choices: ["Wisdom", "Power"], correct: 0 },
  { question: "Riddle 7: The map shows two X’s. Which X is the treasure?", choices: ["First X", "Second X"], correct: 1 },
  { question: "Riddle 8: A final door asks a password. Shout it or whisper it?", choices: ["Shout", "Whisper"], correct: 1 }
];

window.onload = () => {
  // Initialise lives and scenario number
  let lives = parseInt(sessionStorage.getItem('lives') || '3', 10);
  let params = new URLSearchParams(location.search);
  let idx = parseInt(params.get('s') || '1', 10);

  // Redirect if out of lives
  if (lives <= 0) {
    return location.replace(`died.html?prev=${idx}`);
  }
  // If finished all 8, go to treasure
  if (idx > scenarios.length) {
    return location.href = 'treasure.html';
  }

  // Update lives display
  document.getElementById('lives').textContent = `Lives: ${lives}`;

  // Populate the riddle and the two buttons
  let { question, choices, correct } = scenarios[idx - 1];
  document.getElementById('riddle').textContent = question;
  document.getElementById('choice1').textContent = choices[0];
  document.getElementById('choice2').textContent = choices[1];

  // Attach events
  document.getElementById('choice1').onclick = () => handleAnswer(0);
  document.getElementById('choice2').onclick = () => handleAnswer(1);

  function handleAnswer(chosen) {
    if (chosen === correct) {
      // correct → next scenario
      location.href = `scenario.html?s=${idx + 1}`;
    } else {
      // wrong → wrong answer page
      location.href = `wrong.html?prev=${idx}`;
    }
  }
};
