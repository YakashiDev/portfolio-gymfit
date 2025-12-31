export function initGaleria() {
  const galeria = document.querySelector('#galeria');
  if (!galeria) return;

  const wrapper = document.createElement('div');
  wrapper.className = 'carrossel-wrapper';

  const track = document.createElement('div');
  track.className = 'galeria-container';

  wrapper.appendChild(track);
  galeria.appendChild(wrapper);

  const total = 6;
  const originals = [];
  for (let i = 1; i <= total; i++) {
    const img = document.createElement('img');
    img.src = `assets/images/gym${i}.jpg`;
    img.alt = `Foto ${i}`;
    img.className = 'galeria-img';
    img.draggable = false;
    track.appendChild(img);
    originals.push(img);
  }

  originals.forEach(img => track.appendChild(img.cloneNode(true)));

  Promise.all(
    Array.from(track.querySelectorAll('img')).map(img => new Promise(res => {
      if (img.complete) res();
      else {
        img.addEventListener('load', res, { once: true });
        img.addEventListener('error', res, { once: true });
      }
    }))
  ).then(() => {
    let speed = 0.5;
    let isPaused = false;

    const loopMax = () => track.scrollWidth / 2;

    function step() {
      if (!isPaused) {
        const max = loopMax();
        track.scrollLeft += speed;
        if (track.scrollLeft >= max) track.scrollLeft = 0;
      }
      requestAnimationFrame(step);
    }

    requestAnimationFrame(step);

    let isDragging = false;
    let startX = 0;
    let startScrollLeft = 0;
    let lastX = 0;
    let velocity = 0;

    const getX = e => (e.touches ? e.touches[0].pageX : e.pageX);

    const startDrag = e => {
      isDragging = true;
      isPaused = true; 
      startX = getX(e);
      startScrollLeft = track.scrollLeft;
      lastX = startX;
      velocity = 0;
    };

    const moveDrag = e => {
      if (!isDragging) return;
      if (e.cancelable) e.preventDefault();
      const x = getX(e);
      const delta = startX - x;
      track.scrollLeft = startScrollLeft + delta;

      velocity = x - lastX;
      lastX = x;

      const max = loopMax();
      if (track.scrollLeft >= max) track.scrollLeft = 0;
      if (track.scrollLeft < 0) track.scrollLeft = max + track.scrollLeft;
    };

    const endDrag = () => {
      if (!isDragging) return;
      isDragging = false;

   
      let momentum = velocity * -1;
      const momentumStep = () => {
        if (Math.abs(momentum) > 0.1) {
          track.scrollLeft += momentum;
          momentum *= 0.95; 
          const max = loopMax();
          if (track.scrollLeft >= max) track.scrollLeft = 0;
          if (track.scrollLeft < 0) track.scrollLeft = max + track.scrollLeft;
          requestAnimationFrame(momentumStep);
        } else {
          isPaused = false;
        }
      };
      requestAnimationFrame(momentumStep);
    };

    track.addEventListener('mousedown', startDrag);
    track.addEventListener('mousemove', moveDrag);
    track.addEventListener('mouseup', endDrag);
    track.addEventListener('mouseleave', endDrag);

    track.addEventListener('touchstart', startDrag, { passive: false });
    track.addEventListener('touchmove', moveDrag, { passive: false });
    track.addEventListener('touchend', endDrag);
  });
}