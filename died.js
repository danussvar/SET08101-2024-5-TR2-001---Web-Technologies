window.onload = () => {
    const params = new URLSearchParams(location.search);
    const prev = parseInt(params.get('prev') || '1', 10);
    const lives = parseInt(sessionStorage.getItem('lives') || '0', 10);
    const msg = document.getElementById('message');
    const btn = document.getElementById('action');
  
    if (lives > 0) {
      msg.textContent = `You have ${lives} lives left—press Continue to try again.`;
      btn.textContent = 'Continue';
      btn.onclick = () => location.href = `scenario.html?s=${prev}`;
    } else {
      msg.textContent = `You have no lives left—game over!`;
      btn.textContent = 'Restart Game';
      btn.onclick = () => {
        sessionStorage.setItem('lives', 3);
        location.href = 'scenario.html?s=1';
      };
    }
  };
  