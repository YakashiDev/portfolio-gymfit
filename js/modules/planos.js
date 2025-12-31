import { fetchJSON } from '../core/api.js';
import { formatCurrency } from '../utils/format.js';

export async function initPlanos() {
  const container = document.querySelector('.planos-container');
  if (!container) return;

  const planos = await fetchJSON('data/planos.json');
  if (!planos) {
    container.innerHTML = '<p>Erro ao carregar os planos.</p>';
    return;
  }

  planos.forEach((plano) => {
    const card = document.createElement('div');
    card.className = 'plano';

    card.innerHTML = `
      <h3>${plano.nome}</h3>
      <div class="plano-footer2">
        <p class="preco">${formatCurrency(plano.preco)}/mês</p>
        <ul>
          ${plano.beneficios.map(b => `<li>${b}</li>`).join('')}
        </ul>
      </div>
      <div class="plano-footer">
        <button class="btn-assinar">Assinar agora</button>
      </div>
    `;

    card.querySelector('.btn-assinar').addEventListener('click', () => {
      const numero = '5599999999999';
      const mensagem = `
Olá! Estou interessado no plano *${plano.nome}* da Gym Fit.
Vi os benefícios no site e gostaria de saber mais sobre como assinar.
Valor: ${formatCurrency(plano.preco)}/mês. Obrigado!
      `.trim();

      const url = `https://wa.me/${numero}?text=${encodeURIComponent(mensagem)}`;
      window.open(url, '_blank');
      
      const confirm = document.createElement('div');
      confirm.className = 'msg-sucesso';
      confirm.textContent = `Plano ${plano.nome} selecionado!`;
      card.appendChild(confirm);

      setTimeout(() => {
        confirm.style.transition = 'opacity 1s ease';
        confirm.style.opacity = '0';
        setTimeout(() => confirm.remove(), 1000);
      }, 2000);
    });

    container.appendChild(card);
  });
}