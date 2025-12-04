(() => {
  const stepElements = Array.from(document.querySelectorAll('.step'));
  const backBtn = document.getElementById('backBtn');
  const nextBtn = document.getElementById('nextBtn');
  const summaryEl = document.getElementById('summary');

  const nameInput = document.getElementById('nameInput');
  const emailInput = document.getElementById('emailInput');
  const pwdInput = document.getElementById('pwdInput');

  const nameError = document.getElementById('nameError');
  const emailError = document.getElementById('emailError');
  const pwdError = document.getElementById('pwdError');

  let currentStep = 0;

  function showStep(index) {
    stepElements.forEach((el, i) => el.classList.toggle('active', i === index));
    currentStep = index;
    backBtn.disabled = index === 0;
    nextBtn.textContent = index === stepElements.length - 1 ? 'Finish' : 'Next';
  }

  function validateStep() {
    nameError.textContent = '';
    emailError.textContent = '';
    pwdError.textContent = '';

    if (currentStep === 0) {
      if (!nameInput.value.trim()) {
        nameError.textContent = 'Name is required.';
        return false;
      }
    }
    if (currentStep === 1) {
      if (!emailInput.value.includes('@')) {
        emailError.textContent = 'Enter a valid email.';
        return false;
      }
    }
    if (currentStep === 2) {
      if (pwdInput.value.length < 6) {
        pwdError.textContent = 'Password must be at least 6 characters.';
        return false;
      }
    }
    return true;
  }

  nextBtn.addEventListener('click', () => {
    if (!validateStep()) return;
    if (currentStep < stepElements.length - 1) {
      showStep(currentStep + 1);
      return;
    }
    summaryEl.textContent = `Summary: Name=${nameInput.value}, Email=${emailInput.value}`;
  });

  backBtn.addEventListener('click', () => {
    if (currentStep > 0) showStep(currentStep - 1);
  });

  showStep(0);
})();
