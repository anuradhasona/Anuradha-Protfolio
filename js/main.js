const body = document.body;
const header = document.querySelector('.site-header');
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.16 });

document.querySelectorAll('.reveal').forEach((element) => observer.observe(element));

window.addEventListener('scroll', () => {
  header?.classList.toggle('scrolled', window.scrollY > 12);
});

window.addEventListener('load', () => {
  setTimeout(() => body.classList.add('loaded'), 300);
});

const form = document.querySelector('.contact-form');
form?.addEventListener('submit', (event) => {
  event.preventDefault();
  const button = form.querySelector('button');
  if (button) {
    button.textContent = 'Message queued';
    button.disabled = true;
  }
  setTimeout(() => {
    form.reset();
    if (button) {
      button.textContent = 'Send message';
      button.disabled = false;
    }
  }, 1400);
});
