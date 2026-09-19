document.querySelectorAll('[data-current-year]').forEach((element) => {
  element.textContent = new Date().getFullYear().toString();
});

const roleInput = document.querySelector('#role');
if (roleInput instanceof HTMLInputElement) {
  const role = new URLSearchParams(window.location.search).get('role');
  if (role) {
    roleInput.value = role;
  }
}

const contactForm = document.querySelector('#contact-form');
const formStatus = document.querySelector('#form-status');

contactForm?.addEventListener('submit', (event) => {
  event.preventDefault();

  if (!(contactForm instanceof HTMLFormElement) || !contactForm.reportValidity()) {
    return;
  }

  if (formStatus) {
    formStatus.textContent = 'Demo submitted locally. No information was sent or stored.';
  }
  contactForm.reset();
});

