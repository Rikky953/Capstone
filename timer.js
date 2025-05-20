function startTimer() {
    let seconds = 0;
    const timer = document.createElement('div');
    timer.id = 'sessionTimer';
    timer.style.textAlign = 'center';
    timer.style.marginTop = '20px';
    document.body.appendChild(timer);
  
    const interval = setInterval(() => {
      seconds++;
      sessionStorage.setItem('timeOnPage', seconds.toString());
  
      const min = Math.floor(seconds / 60);
      const sec = seconds % 60;
      timer.textContent = `Time on page: ${min}m ${sec}s`;
  
      if (seconds === 300) {
        showMessage();
      }
    }, 1000);
  
    window.addEventListener('beforeunload', () => {
      clearInterval(interval);
    });
  }
  
  function showMessage() {
    if (document.getElementById('longSessionMessage')) return;
  
    const msg = document.createElement('div');
    msg.id = 'longSessionMessage';
    msg.innerHTML = `
      <p>You’ve been exploring for 5 minutes! Thanks for your interest!</p>
      <button id="dismissMessage">Dismiss</button>
    `;
    msg.style.padding = '10px';
    msg.style.background = '#ccc';
    msg.style.textAlign = 'center';
  
    const timer = document.getElementById('sessionTimer');
    document.body.insertBefore(msg, timer);
  
    document.getElementById('dismissMessage').addEventListener('click', () => {
      msg.remove();
    });
  }
  
  startTimer();
  