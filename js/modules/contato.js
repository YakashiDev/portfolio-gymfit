import { validateForm } from '../utils/validator.js';

export function initContato() {
  const form = document.querySelector('#form-contato');
  if (!form) return;

 if (validateForm([nome, email, telefone, dade])) {
  const msg = document.createElement('div');
  msg.className = 'msg-sucesso';
  msg.textContent = 'Aula experimental agendada com sucesso!';
  form.appendChild(msg);
  setTimeout(() => msg.remove(), 3000);
  form.reset();
} else {
  const erro = document.createElement('div');
  erro.className = 'msg-erro';
  erro.textContent = 'Preencha todos os campos corretamente.';
  form.appendChild(erro);
  setTimeout(() => erro.remove(), 3000);
  };
}