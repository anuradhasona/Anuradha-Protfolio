const tiltCards = document.querySelectorAll('.parallax-card');

if (tiltCards.length && window.matchMedia('(hover: hover) and (pointer: fine)').matches) {
  tiltCards.forEach((card) => {
    card.addEventListener('pointermove', (event) => {
      const rect = card.getBoundingClientRect();
      const x = ((event.clientX - rect.left) / rect.width - 0.5) * 8;
      const y = ((event.clientY - rect.top) / rect.height - 0.5) * 8;
      card.style.transform = `perspective(900px) rotateY(${x}deg) rotateX(${-y}deg) translateY(-2px)`;
    });

    card.addEventListener('pointerleave', () => {
      card.style.transform = '';
    });
  });
}
