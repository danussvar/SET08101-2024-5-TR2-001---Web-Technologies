function handleAnswer(choice) {
    if (choice === 'correct') {
      // Load next scenario
      window.location.href = 'scenario2.html'; 
    } else {
      window.location.href = 'wrong.html';
    }
  }
  