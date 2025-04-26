document.addEventListener('DOMContentLoaded', () => {
    const startBtn = document.getElementById('start-button');
    startBtn.addEventListener('click', () => {
      window.location.href = 'scenario.html?s=1';
    });
  });