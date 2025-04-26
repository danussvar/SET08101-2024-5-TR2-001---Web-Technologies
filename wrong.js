window.onload = () => {

    //Alens code
    initialiseLives();    
    setupMusicToggle(); 
    //Alens code

    const params = new URLSearchParams(location.search);
    const prev   = parseInt(params.get('prev') || '1', 10);
    const reason = params.get('reason') || "You met an untimely end.";

    // Death background for this wrong answer:
    document.body.style.backgroundImage    = `url('images/death${prev}.png')`;
    document.body.style.backgroundSize     = 'auto 100%';
    document.body.style.backgroundPosition = 'center';
    document.body.style.backgroundRepeat = 'no-repeat';
  
    // Show the custom reason
    document.getElementById('reason').textContent = reason;
  
    // Decrement lives
    let lives = Math.max(0, parseInt(sessionStorage.getItem('lives') || '3', 10) - 1);
    sessionStorage.setItem('lives', lives);
    document.getElementById('livesLeft').textContent = lives;
  
    document.getElementById('retry').onclick = () => {
      if (lives > 0) {
        location.href = `scenario.html?s=${prev}`;
      } else {
        // Pass the same reason on to died.html:
        location.href = `died.html?prev=${prev}&reason=${encodeURIComponent(reason)}`;
      }
    };
  };
  