// scenario.js

const scenarios = [
  {
    question: "Riddle 1: You see two paths in a dark forest—left or right?",
    choices: ["Left", "Right"],
    correct: 0,
    deathReasons: [
      "",  // left is correct, so no deathReason needed here
      "You turned right and were ambushed by a pack of hungry wolves."
    ]
  },
  {
    question: "Riddle 2: A river blocks your way. Build a bridge or swim?",
    choices: ["Build", "Swim"],
    correct: 1,
    deathReasons: [
      "The makeshift bridge collapsed under your weight, and you were swept away by the freezing current.",
      ""  // swim is correct
    ]
  },
  {
    question: "Riddle 3: A troll asks you his age. Lie or tell the truth?",
    choices: ["Lie", "Truth"],
    correct: 1,
    deathReasons: [
      "The troll saw through your lie and crushed you.",
      ""  // truth is correct
    ]
  },
  {
    question: "Riddle 4: A swamp blocks your way. Use the vines to swing or swim?",
    choices: ["Swing", "Swim"],
    correct: 0,
    deathReasons: [
      "",  // swim is correct
      "The swamp swallowed you."
    ]
  },
  {
    question: "Riddle 5: A dragon sleeps on gold. Sneak by or try to steal?",
    choices: ["Sneak", "Steal"],
    correct: 0,
    deathReasons: [
      "",  // sneak is correct
      "The dragon awoke and spewed flame, incinerating you instantly."
    ]
  },
  {
    question: "Riddle 6: You meet a wizard offering wisdom or power. Which do you choose?",
    choices: ["Wisdom", "Power"],
    correct: 0,
    deathReasons: [
      "",  // wisdom is correct
      "The dark power corrupted your mind and consumed you from within."
    ]
  },
  {
    question: "Riddle 7: The map shows two X’s. Which X is the treasure?",
    choices: ["First X", "Second X"],
    correct: 1,
    deathReasons: [
      "You dug at the wrong X, unleashing a swarm of venomous snakes that bit you fatally.",
      ""  // second X is correct
    ]
  },
  {
    question: "Riddle 8: A final door asks a password. Shout it or whisper it?",
    choices: ["Shout", "Whisper"],
    correct: 1,
    deathReasons: [
      "The door’s wards reacted to your shout and unleashed a bolt of lightning, striking you dead.",
      ""  // whisper is correct
    ]
  }
];

window.onload = () => {
  let lives = parseInt(sessionStorage.getItem('lives') || '3', 10);
  let params = new URLSearchParams(location.search);
  let idx = parseInt(params.get('s') || '1', 10);

  // Background image for this scenario:
  document.body.style.backgroundImage    = `url('images/scenario${idx}.png')`;
  document.body.style.backgroundSize     = 'auto 100%';
  document.body.style.backgroundPosition = 'center';
  document.body.style.backgroundAttachment = 'fixed';

  // If out of lives, go straight to the You Died page
  if (lives <= 0) {
    return location.replace(`died.html?prev=${idx}`);
  }
  // If past the last scenario, you’ve won
  if (idx > scenarios.length) {
    return location.href = 'treasure.html';
  }

  // Display remaining lives
  document.getElementById('lives').textContent = `Lives: ${lives}`;

  // Load current scenario
  const { question, choices, correct, deathReasons } = scenarios[idx - 1];
  document.getElementById('riddle').textContent = question;
  document.getElementById('choice1').textContent = choices[0];
  document.getElementById('choice2').textContent = choices[1];

  // Wire up buttons
  document.getElementById('choice1').onclick = () => handleAnswer(0);
  document.getElementById('choice2').onclick = () => handleAnswer(1);

  function handleAnswer(chosen) {
    if (chosen === correct) {
      // advance on correct
      location.href = `scenario.html?s=${idx + 1}`;
    } else {
      // pick up the matching deathReason, URL‑encode it, and pass it on
      const reason = encodeURIComponent(deathReasons[chosen]);
      location.href = `wrong.html?prev=${idx}&reason=${reason}`;
    }
  }
};
