const menuToggle = document.querySelector('.menu-toggle');
const mainNav = document.querySelector('#main-nav');
const signupForm = document.querySelector('.signup-form');
const formMessage = document.querySelector('.form-message');
const yearElement = document.querySelector('#year');

if (yearElement) {
  yearElement.textContent = new Date().getFullYear();
}

if (menuToggle && mainNav) {
  menuToggle.addEventListener('click', () => {
    const isOpen = mainNav.classList.toggle('is-open');
    menuToggle.setAttribute('aria-expanded', String(isOpen));
    menuToggle.textContent = isOpen ? 'Close' : 'Menu';
  });

  document.querySelectorAll('#main-nav a').forEach((link) => {
    link.addEventListener('click', () => {
      mainNav.classList.remove('is-open');
      menuToggle.setAttribute('aria-expanded', 'false');
      menuToggle.textContent = 'Menu';
    });
  });
}

if (signupForm && formMessage) {
  signupForm.addEventListener('submit', (event) => {
    event.preventDefault();
    formMessage.textContent = 'You are on the list. See you courtside.';
    signupForm.reset();
  });
}
