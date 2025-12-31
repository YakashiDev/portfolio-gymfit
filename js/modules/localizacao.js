export function initLocalizacao() {
  const container = document.querySelector('#localizacao');
  if (!container) return;

  container.innerHTML = `
    <div class="localizacao-wrapper">
      <h2>NOSSA LOCALIZAÇÃO</h2>
      <p>Dubai - Emirados Árabes Unidos<br>
      Burj Khalifa - Downtown Dubai</p>
      <iframe 
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3610.178510207644!2d55.27180147513823!3d25.197201831700927!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f43348a67e24b%3A0xff45e502e1ceb7e2!2sBurj%20Khalifa!5e0!3m2!1spt-BR!2sbr!4v1767161919829!5m2!1spt-BR!2sbr"
        width="100%" 
        height="600" 
        style="border:0; border-radius:12px; box-shadow:0 8px 24px rgba(0,0,0,0.4);" 
        allowfullscreen 
        loading="lazy" 
        referrerpolicy="no-referrer-when-downgrade">
      </iframe>
    </div>
  `;
}