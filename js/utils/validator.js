export function validateForm(fields) {
  return fields.every(field => field && field.trim().length > 0);
}