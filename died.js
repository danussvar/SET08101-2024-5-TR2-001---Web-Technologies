window.onload = () => {
    const params = new URLSearchParams(location.search);
    const reason = params.get('reason') || "You have no more lives.";
    const lives  = parseInt(sessionStorage.getItem('lives') || '0', 10);
    const prev   = parseInt(params.get('prev') || '1', 10);
 
    document.getElementById('reason').textContent = reason;
 
    const msg = document.getElementById('message');
    const btn = document.getElementById('action');
 
    if (lives > 0) {
      msg.textContent  = `You have ${lives} lives left—press Continue to try again.`;
      btn.textContent  = 'Continue';
      btn.onclick      = () => location.href = `scenario.html?s=${prev}`; //back to start
    } else {
      msg.textContent  = `You have no lives left—game over!`;
      btn.textContent  = 'Restart Game'; 
      btn.onclick      = () => {
        sessionStorage.setItem('lives', 3); //keeps lives through game
        location.href = 'scenario.html?s=1';
      };
    }
  };