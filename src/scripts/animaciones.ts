/**
 * Movimiento con JavaScript vanilla. Sin librerías.
 * - Odómetro (base 3): rueda los dígitos cuando la cifra entra en pantalla.
 * - Barra de WhatsApp (base 4): aparece cuando el hero sale y se esconde en contacto.
 * - Franjas (propio de A): fallback para navegadores sin scroll-driven animations.
 * Con prefers-reduced-motion: reduce no se hace nada; el CSS ya muestra el estado final.
 */

const reducido = matchMedia('(prefers-reduced-motion: reduce)').matches;

function odometro() {
  const tiras = document.querySelectorAll<HTMLElement>('.odo-tira');
  if (!tiras.length) return;
  if (reducido || !('IntersectionObserver' in window)) {
    tiras.forEach((t) => t.classList.add('rodando'));
    return;
  }
  const io = new IntersectionObserver(
    (entradas) => {
      entradas.forEach((e) => {
        if (!e.isIntersecting) return;
        e.target.querySelectorAll<HTMLElement>('.odo-tira').forEach((t) => t.classList.add('rodando'));
        io.unobserve(e.target);
      });
    },
    { threshold: 0.4 },
  );
  document.querySelectorAll('.odometro').forEach((o) => io.observe(o));
}

function barraWhatsApp() {
  const barra = document.getElementById('barra-wa');
  const heroe = document.getElementById('inicio');
  const contacto = document.getElementById('contacto');
  if (!barra || !heroe || !contacto || !('IntersectionObserver' in window)) return;

  let heroeVisible = true;
  let contactoVisible = false;
  let pulsada = false;

  const actualizar = () => {
    const mostrar = !heroeVisible && !contactoVisible;
    barra.classList.toggle('visible', mostrar);
    if (mostrar && !pulsada && !reducido) {
      barra.classList.add('pulso');
      pulsada = true; // un solo pulso, la primera vez que entra
    }
  };

  new IntersectionObserver(
    ([e]) => {
      heroeVisible = e.isIntersecting;
      actualizar();
    },
    { threshold: 0.1 },
  ).observe(heroe);

  new IntersectionObserver(
    ([e]) => {
      contactoVisible = e.isIntersecting;
      actualizar();
    },
    { threshold: 0.25 },
  ).observe(contacto);
}

function franjas() {
  if (reducido || CSS.supports('animation-timeline: view()')) return;
  const bandas = Array.from(document.querySelectorAll<HTMLElement>('.franjas'));
  if (!bandas.length) return;

  let pendiente = false;
  const pintar = () => {
    pendiente = false;
    const alto = window.innerHeight;
    for (const b of bandas) {
      const r = b.getBoundingClientRect();
      // progreso 0 → 1 mientras la banda cruza la ventana, igual que view() en CSS
      const p = Math.min(1, Math.max(0, (alto - r.top) / (alto + r.height)));
      b.style.setProperty('--corrida', `${(p * 320).toFixed(1)}px`);
    }
  };
  const alScroll = () => {
    if (pendiente) return;
    pendiente = true;
    requestAnimationFrame(pintar);
  };
  addEventListener('scroll', alScroll, { passive: true });
  addEventListener('resize', alScroll, { passive: true });
  pintar();
}

function mapa() {
  const svg = document.getElementById('mapa-uraba');
  if (!svg) return;
  const municipios = Array.from(svg.querySelectorAll<SVGGElement>('.municipio'));

  // Selección: toque, hover o foco resaltan el municipio. Un toque repetido lo suelta.
  const activar = (m: SVGGElement, si: boolean) => {
    m.classList.toggle('activo', si);
    m.setAttribute('aria-pressed', String(si));
  };
  municipios.forEach((m) => {
    m.addEventListener('pointerenter', () => activar(m, true));
    m.addEventListener('pointerleave', () => activar(m, false));
    m.addEventListener('click', () => {
      const ya = m.classList.contains('activo');
      municipios.forEach((o) => activar(o, false));
      if (!ya) activar(m, true);
    });
    m.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        m.click();
      }
    });
  });

  if (reducido) {
    svg.style.setProperty('--progreso', '0');
    municipios.forEach((m) => m.classList.add('encendido'));
    return;
  }

  // La vía se dibuja mientras el mapa cruza la ventana; cada municipio se enciende cuando la vía llega.
  let pendiente = false;
  const pintar = () => {
    pendiente = false;
    const r = svg.getBoundingClientRect();
    const alto = window.innerHeight;
    // 0 cuando el mapa asoma por abajo (90 % de la ventana), 1 cuando su borde inferior llega al 95 %.
    const p = Math.min(1, Math.max(0, (alto * 0.9 - r.top) / Math.max(1, r.height - alto * 0.05)));
    svg.style.setProperty('--progreso', (1 - p).toFixed(3));
    municipios.forEach((m) => m.classList.toggle('encendido', p >= Number(m.dataset.en) + 0.03));
  };
  const alScroll = () => {
    if (pendiente) return;
    pendiente = true;
    requestAnimationFrame(pintar);
  };
  addEventListener('scroll', alScroll, { passive: true });
  addEventListener('resize', alScroll, { passive: true });
  pintar();
}

odometro();
barraWhatsApp();
franjas();
mapa();
