const body = document.body;
const header = document.querySelector('.site-header');
const reveals = document.querySelectorAll('.reveal');

if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  reveals.forEach((element) => observer.observe(element));
} else {
  reveals.forEach((element) => element.classList.add('visible'));
}

window.addEventListener('scroll', () => {
  header?.classList.toggle('scrolled', window.scrollY > 10);
}, { passive: true });

window.addEventListener('load', () => {
  requestAnimationFrame(() => body.classList.add('loaded'));
});

const form = document.querySelector('.contact-form');
form?.addEventListener('submit', (event) => {
  event.preventDefault();
  const button = form.querySelector('button');
  if (button) {
    button.textContent = 'Message queued';
    button.disabled = true;
  }
  window.setTimeout(() => {
    form.reset();
    if (button) {
      button.textContent = 'Send message';
      button.disabled = false;
    }
  }, 1200);
});
