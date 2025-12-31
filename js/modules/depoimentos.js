export function initDepoimentos() {
  const wrapper = document.querySelector('.depoimentos-wrapper');
  const btnPrev = document.querySelector('.btn-prev');
  const btnNext = document.querySelector('.btn-next');
  if (!wrapper) return;

  const depoimentos = [
    { texto: 'Comecei na musculação para ganhar força e hoje me sinto muito mais saudável e confiante.', autor: 'Ana', detalhe: 'Aluna há 1 ano' },
    { texto: 'Os treinos de musculação da Gym Fit são bem estruturados e me ajudaram a evoluir rápido.', autor: 'João', detalhe: 'Aluno de musculação' },
    { texto: 'A musculação aqui me trouxe disciplina e resultados reais. Nunca me senti tão motivada.', autor: 'Carla', detalhe: 'Aluna dedicada' },
    { texto: 'Com a musculação na Gym Fit ganhei massa muscular e melhorei minha postura no dia a dia.', autor: 'Marcos', detalhe: 'Aluno há 6 meses' }
  ];

  let index = 0;
  const items = [];


  depoimentos.forEach(dep => {
    const div = document.createElement('div');
    div.className = 'depoimento';
    div.innerHTML = `
      <blockquote>“${dep.texto}”</blockquote>
      <p><strong>${dep.autor}</strong> – ${dep.detalhe}</p>
    `;
    wrapper.appendChild(div);
    items.push(div);
  });

  function applyClasses() {
    const len = items.length;
    items.forEach((el, i) => {
      el.classList.remove('active', 'prev', 'next');
      if (i === index) {
        el.classList.add('active');
      } else if (i === (index - 1 + len) % len) {
        el.classList.add('prev');
      } else if (i === (index + 1) % len) {
        el.classList.add('next');
      }
    });
  }

  applyClasses();
  requestAnimationFrame(() => applyClasses());


  function goPrev() {
    index = (index - 1 + items.length) % items.length;
    applyClasses();
  }

  function goNext() {
    index = (index + 1) % items.length;
    applyClasses();
  }

  btnPrev?.addEventListener('click', goPrev);
  btnNext?.addEventListener('click', goNext);


  let timer = setInterval(goNext, 6000);
  wrapper.addEventListener('mouseenter', () => clearInterval(timer));
  wrapper.addEventListener('mouseleave', () => {
    clearInterval(timer);
    timer = setInterval(goNext, 6000);
  });
}