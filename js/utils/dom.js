export function markAsDone(id) {
  const el = document.getElementById(id);
  if (el) {
    el.classList.add('concluido');
  }
}