window.onload = () => {
    const params = new URLSearchParams(location.search);
    const prev = parseInt(params.get('prev') || '1', 10);
  
    // Decrement lives
    let lives = parseInt(sessionStorage.getItem('lives') || '3', 10);
    lives = Math.max(0, lives - 1);
    
    sessionStorage.setItem('lives', lives);
    document.getElementById('livesLeft').textContent = lives;
  
    document.getElementById('retry').onclick = () => {
      if (lives > 0) {
        // back to the same scenario
        location.href = `scenario.html?s=${prev}`;
      } else {
        // no lives → you died page
        location.href = `died.html?prev=${prev}`;
      }
    };
  };
  