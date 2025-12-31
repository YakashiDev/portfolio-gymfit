export async function fetchJSON(path) {
  try {
    const response = await fetch(path);
    if (!response.ok) throw new Error('Erro ao carregar dados');
    return await response.json();
  } catch (error) {
    console.error(error);
    return null;
  }
}