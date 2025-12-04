(() => {
  const themeButtons = Array.from(document.querySelectorAll('.theme-btn'));
  const body = document.body;

  themeButtons.forEach((btn) => {
    btn.addEventListener('click', () => {
      const theme = btn.getAttribute('data-theme');
      body.setAttribute('data-theme', theme);
      body.setAttribute('data-theme-current', theme);
    });
  });
})();
