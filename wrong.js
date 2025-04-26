window.onload = () => {
  const params = new URLSearchParams(location.search);
  const prev   = parseInt(params.get('prev') || '1', 10);
  const reason = params.get('reason') || "You met an untimely end.";

  
  document.body.style.backgroundImage    = `url('images/death${prev}.png')`;
  document.body.style.backgroundSize     = 'auto 100%';
  document.body.style.backgroundPosition = 'center';
  document.body.style.backgroundRepeat = 'no-repeat';

  
  document.getElementById('reason').textContent = reason;

 
  let lives = Math.max(0, parseInt(sessionStorage.getItem('lives') || '3', 10) - 1);
  sessionStorage.setItem('lives', lives);

  const livesLeftEl = document.getElementById('livesLeft');
  if (livesLeftEl) 
    {
      livesLeftEl.textContent = lives;
    }

  document.getElementById('retry').onclick = () => {
    if (lives > 0) {
      location.href = `scenario.html?s=${prev}`;
    } else {
      
      location.href = `died.html?prev=${prev}&reason=${encodeURIComponent(reason)}`;
    }
  };
};
  