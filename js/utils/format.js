export function formatDate(date) {
  return new Date(date).toLocaleDateString('pt-BR');
}

export function formatCurrency(value) {
  return `R$ ${value.toFixed(2).replace('.', ',')}`;
}