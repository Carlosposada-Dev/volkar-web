# wilkar-web

Landing page de **WILKAR** (antes VOLKAR): movimiento de tierras y acarreo de material en Urabá (Antioquia, Colombia).
Una volqueta con conductor para contratistas de obra civil y los proyectos portuarios. Contacto por WhatsApp.

> El nombre comercial está en verificación (RUES, SIC, redes). El sitio debe aguantar un cambio de nombre:
> el nombre vive en un solo lugar de la configuración.

## Estado

Dirección **A · Valla de vía** elegida e implementada en `src/` (Astro 5 + Tailwind 4), incluido el mapa
de Urabá dibujado con el scroll. Faltan los datos reales (entre corchetes), las fotos y el video de la tolva.
La exploración visual (3 direcciones, artboards móvil y escritorio) está en
[Claude Design](https://claude.ai/artifact/9URXSMbjwR2HfApJQJSYWp) y su fuente en `design/canvas/`.
El brief, las paletas, las fuentes y las propuestas de animación están en [`docs/diseno.md`](docs/diseno.md).

## Dónde vive cada cosa

| Qué | Dónde |
|---|---|
| Nombre de marca, contacto, copy y datos pendientes | `src/config/marca.ts` |
| Tokens de color, tipografía y escala fluida | `src/styles/global.css` (`@theme`) |
| Secciones de la landing | `src/components/*.astro`, en orden en `src/pages/index.astro` |
| Animaciones con JS (odómetro, barra de WhatsApp, franjas, mapa) | `src/scripts/animaciones.ts` |
| Mapa de Urabá (geometría SVG) | `src/components/MapaUraba.astro` |

## Stack (decidido)

- **Astro 5** + **Tailwind**, sitio estático.
- **Cloudflare Pages** con integración Git: cada push a `main` despliega.
- Sin frameworks de UI ni librerías de animación: CSS y JavaScript vanilla.
- Node 22, npm.

## Reglas

- Español de Colombia, directo, de obra.
- Nada inventado: sin clientes, testimonios, flota ni cifras que no existan. Los datos pendientes van entre corchetes `[así]`.
- Fotos y video reales de la volqueta y la operación. Cero stock.
- Contraste mínimo 4.5:1 en texto. Una sola coreografía de entrada; `prefers-reduced-motion` respetado.

## Desarrollo

```bash
npm install
npm run dev
```
