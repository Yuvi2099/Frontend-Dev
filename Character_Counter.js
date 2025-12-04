(() => {
  const textarea = document.getElementById('message');
  const counterEl = document.getElementById('counter');
  const resetBtn = document.getElementById('resetBtn');
  const MAX_CHARS = 100;

  function updateCounter() {
    const length = textarea.value.length;
    const remaining = MAX_CHARS - length;
    counterEl.textContent = remaining;
    counterEl.className = '';
    if (remaining <= 20 && remaining > 0) counterEl.classList.add('yellow');
    if (remaining <= 0) counterEl.classList.add('red');
  }


  textarea.addEventListener('keydown', (ev) => {
    const navigationalKeys = [
      'Backspace', 'Delete', 'ArrowLeft', 'ArrowRight', 'ArrowUp', 'ArrowDown', 'Home', 'End', 'Tab'
    ];
    if (textarea.value.length >= MAX_CHARS && !navigationalKeys.includes(ev.key)) {
      ev.preventDefault();
    }
  });

  textarea.addEventListener('input', updateCounter);

  resetBtn.addEventListener('click', () => {
    textarea.value = '';
    updateCounter();
    textarea.focus();
  });

  updateCounter();
})();
