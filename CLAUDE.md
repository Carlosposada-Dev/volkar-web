# CLAUDE.md — wilkar-web

Landing page de WILKAR (movimiento de tierras y acarreo en Urabá, Colombia). Una volqueta, dos socios,
contacto por WhatsApp. Si este repo está dentro de la carpeta `empresa-transporte`, el CLAUDE.md de
la carpeta padre tiene el contexto completo del negocio; si no, lo esencial está aquí.

## Antes de tocar código

1. Leer `docs/diseno.md`: dirección elegida, tokens, fuentes, copy y propuestas de animación.
2. La fuente de los artboards está en `design/canvas/*.dc.html`. Los tokens CSS y el copy salen de ahí.
3. El canvas vivo: https://claude.ai/artifact/9URXSMbjwR2HfApJQJSYWp

## Stack

Astro 5 + Tailwind, estático, Cloudflare Pages (integración Git, sin GitHub Actions). Node 22, npm.
Mismo stack y estructura que el repo `carlosposada.dev` del fundador.

## Reglas de trabajo

- **Nada inventado** en contenido público. Datos pendientes entre corchetes `[así]`; nunca reemplazarlos
  con valores supuestos. Capacidad, modelo, año, teléfono, horario y base de la volqueta están pendientes.
- **Nombre de marca en un solo lugar** (`src/config/marca.ts` o similar): WILKAR aún no está confirmado (se cambió de VOLKAR el 2026-10-01).
- **Fotos y video**: sólo reales. Mientras no existan, placeholders marcados "FOTO REAL: …".
- **Tipografía**: nada de Inter, Roboto, Arial, Space Grotesk ni fuentes del sistema. Las fuentes se
  autohospedan (`@fontsource`), no se cargan desde Google Fonts.
- **Movimiento**: una sola entrada orquestada + los efectos elegidos en `docs/diseno.md`. Nada de hover
  en cada tarjeta ni parallax en todo. `prefers-reduced-motion` desactiva todo y muestra el estado final.
- **Contraste** mínimo 4.5:1 en texto. Botones y enlaces reales (`<a>`, `<button>`), foco visible.
- **Mobile-first**: los contratistas cotizan desde el celular en la obra.
- Idioma del sitio y del código visible: español de Colombia. `lang="es-CO"`.
- Presupuesto ajustado: siempre la opción gratuita o más barata que cumpla.
