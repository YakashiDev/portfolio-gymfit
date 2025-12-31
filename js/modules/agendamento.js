export function initAgendamento() {
  const btn = document.getElementById('btn-agendar');
  if (!btn) return;

  btn.addEventListener('click', () => {
    if (document.querySelector('.form-nome')) return;

    const form = document.createElement('div');
    form.className = 'form-nome';

    form.innerHTML = `
      <label for="nome-agendamento">Digite seu nome:</label>
      <input type="text" id="nome-agendamento" placeholder="Seu nome" />
      <button class="btn-confirmar">Confirmar</button>
    `;

    btn.parentElement.appendChild(form);
    
    requestAnimationFrame(() => {
      form.classList.add('ativo');
    });

    const confirmar = form.querySelector('.btn-confirmar');
    confirmar.addEventListener('click', () => {
      const nome = form.querySelector('#nome-agendamento').value.trim();
      if (nome) {
        const numero = '5599999999999';
        const mensagem = `Olá, meu nome é ${nome} e vim pelo site. Gostaria de agendar minha aula experimental.`;
        const url = `https://wa.me/${numero}?text=${encodeURIComponent(mensagem)}`;
        window.open(url, '_blank');
      } else {
        form.querySelector('#nome-agendamento').focus();
        form.querySelector('#nome-agendamento').style.border = '1px solid red';
      }
    });
  });
}