export function initScrollReveal() {
  const elements = document.querySelectorAll('.reveal');
  window.addEventListener('scroll', () => {
    elements.forEach((el) => {
      if (el.getBoundingClientRect().top < window.innerHeight) {
        el.classList.add('ativo');
      }
    });
  });
}