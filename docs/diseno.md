# Diseño de la landing — brief, direcciones y animación

Canvas vivo: https://claude.ai/artifact/9URXSMbjwR2HfApJQJSYWp
Fuente de los artboards: `design/canvas/` (un `.dc.html` por artboard; los tokens van en `:root` dentro
de `<helmet><style>` y el copy está literal en el HTML).

## Dirección elegida

**A · Valla de vía.** Decidida por el fundador el 2026-09-30. Manda el contratista que llama desde la
obra: la página se lee desde lejos, en amarillo alta visibilidad y negro, con condensada gigante en
mayúsculas. Las direcciones B y C quedan documentadas abajo como referencia; no se implementan.

Implementación: `src/` (Astro 5 + Tailwind 4). Tokens en `src/styles/global.css` (`@theme`), copy y datos
pendientes en `src/config/marca.ts`. Animaciones implementadas: base 1–4, la propia de A (franjas que
corren con el scroll) y el mapa de Urabá (5, en `src/components/MapaUraba.astro`).

## Secciones (en este orden)

1. Hero: nombre, una frase, botón de WhatsApp, sitio para foto o video real de la volqueta.
2. Qué hacemos: acarreo de material (arena, grava, balasto, tierra, escombro), movimiento de tierras,
   alquiler de volqueta por viaje / hora / día.
3. La volqueta: ficha técnica en monoespaciada. Capacidad en m³ y t como piezas gráficas.
4. Dónde: Apartadó, Turbo, Carepa, Chigorodó, Necoclí y los proyectos portuarios de Urabá.
5. Somos dos: Carlos Andrés Posada (socio · cotiza y contrata) y Wilmar Nohava (socio · maneja y
   entrega). Mismo peso visual para los dos. Sin testimonios ni clientes.
6. Contacto: WhatsApp + teléfono + horario + base.

## Las tres direcciones

### A · Valla de vía

Se lee desde la carretera: amarillo alta visibilidad, negro, franjas diagonales, condensada gigante en
mayúsculas.

| Token | Hex | Uso |
|---|---|---|
| `--amarillo` | #F5C400 | dominante |
| `--negro` | #000000 | tinta y bloques |
| `--blanco` | #FFFFFF | texto sobre negro |
| `--tinta-suave` | #333333 | texto secundario sobre amarillo (7.7:1) |
| `--gris-claro` | #B3B3B3 | texto secundario sobre negro (10:1) |

Fuentes: Big Shoulders Display 900 (display) y 300 (contrapeso); Archivo 300/400 (texto); JetBrains
Mono (ficha). Logo: wordmark inclinado 8° con franja de obra; avatar "VK".
Elegirla si manda el contratista que llama desde la obra. La más memorable en la puerta; la menos corporativa.

### B · Fierro y tierra

La página se siente como el chasis: acero casi negro, ocre de la tierra de Urabá, naranja de seguridad
como única luz. Grano fino y líneas de chapa como textura.

| Token | Hex | Uso |
|---|---|---|
| `--acero` | #1C1A17 | dominante |
| `--acero-claro` | #2A2723 | superficie elevada |
| `--hueso` | #EDE6DA | texto (13.9:1) |
| `--ocre` | #C8783A | títulos y números (5.1:1) |
| `--oxido` | #6E3A1E | superficie de sección |
| `--naranja` | #FF6A13 | único acento: botones y un número (6.1:1) |

Fuentes: Barlow Condensed 900 contra Barlow 200/300 (misma familia, pesos extremos); IBM Plex Mono.
Logo: wordmark con un cuadro naranja como punto. Elegirla si la marca debe ser la máquina; sirve igual
para la tractomula después. Exige fotos reales buenas.

### C · Muelle

Bloques apilados como contenedores en patio: marino profundo, óxido de contenedor, concreto. Sobria,
para licitar con constructoras grandes.

| Token | Hex | Uso |
|---|---|---|
| `--marino` | #0F2740 | dominante |
| `--oxido` | #A3412B | acento, sólo superficie con texto blanco (6.3:1); sobre marino no sirve como texto |
| `--concreto` | #E9E7E2 | fondo claro |
| `--concreto-2` | #C9C6BF | bloques y placeholders |
| `--niebla` | #B7C4D1 | texto secundario sobre marino (8.5:1) |
| `--blanco` | #FFFFFF | texto sobre marino (15.2:1) |

Fuentes: Archivo variable, `wdth 125 / wght 900` para display y `wdth 100 / wght 300` para texto;
IBM Plex Mono. Logo: "VOL" y "KAR" apilados en dos bloques. Elegirla si pesa más la meta a 2 años
(puertos, licitar). La menos "de obra".

## Copy base (español de Colombia, de obra)

- Frase: "Acarreo de material y movimiento de tierras en Urabá."
- Apoyo: "Volqueta con conductor para contratistas de obra civil y los proyectos portuarios. Cotice por
  WhatsApp y le respondemos desde la obra."
- CTA: "Cotizar por WhatsApp" / "Escribir por WhatsApp".
- Movimiento de tierras se redacta como viajes con la máquina del contratista: hoy sólo hay volqueta.
- Cierre: "¿Cuántos viajes necesita? Mande el material, el punto de cargue y la obra. Le respondemos con
  precio el mismo día."
- Prohibido: "impulsamos", "soluciones integrales", "líderes", "logística inteligente".

## Datos pendientes (van entre corchetes hasta que existan)

Capacidad en m³ y t, marca y modelo, año, documentos, teléfono, horario, municipio base, razón social,
NIT, número de WhatsApp.

## Animación: propuestas aprobadas en concepto

El fundador quiere algo que deslumbre y se sienta premium. Todo con CSS (`@keyframes`, scroll-driven
animations donde haya soporte) y JavaScript vanilla (`IntersectionObserver`). Sin librerías. Con
`prefers-reduced-motion: reduce` no hay movimiento y se muestra el estado final.

Base para cualquier dirección:

1. **Hero con video real de la tolva descargando.** Clip de 6–8 s grabado con celular, mudo, en bucle,
   `<video autoplay muted loop playsinline>` con póster. El nombre encima; la frase aparece cuando cae el
   material. Hasta tener el clip: placeholder marcado "VIDEO REAL: tolva descargando".
2. **El wordmark se descarga.** Al cargar, las letras de VOLKAR caen desde arriba una por una con peso
   y asientan con un rebote mínimo. Una sola coreografía de ~1 s; después la página queda quieta.
3. **Números que cuentan como báscula.** m³ y t suben desde cero al entrar en pantalla, dígitos que
   ruedan como odómetro. Estado final = el número; con reduced-motion se muestra directo.
4. **Barra de WhatsApp fija en móvil.** Aparece abajo cuando el hero sale de pantalla, con un solo pulso
   al entrar. Conversión, no decoración.

Propio de cada dirección (sólo el de la elegida):

- **A**: las franjas diagonales corren con el scroll, como la franja lateral de un camión al pasar.
- **B**: un barrido de luz cruza la placa técnica una vez cuando se revela, como chapa bajo el sol.
- **C**: los bloques del hero y de servicios llegan de la derecha y se asientan uno sobre otro.

Segunda vuelta (más trabajo):

5. **Mapa de Urabá dibujado al hacer scroll.** La vía entre Chigorodó y Necoclí se traza con
   `stroke-dashoffset` mientras se baja y cada municipio se enciende al pasar. Reemplaza la lista.
   **Hecho (2026-09-30).** El fundador pidió relieve "como 3D"; se resolvió en el lenguaje de la valla y
   no con terreno real: el golfo en negro con trama, la tierra en amarillo como placa levantada (bordes
   apilados hacia el mar), la Serranía de Abibe con curvas de nivel. Un 3D real (WebGL + datos de
   elevación) exigiría una librería, pesaría en celular y se saldría de la dirección A. Tocar, pasar o
   enfocar un municipio lo resalta (nombre invertido). Geometría aproximada a coordenadas reales; es un
   mapa de valla, no cartografía. Sin JS o con reduced-motion: vía completa y todo encendido.

Lo que no se hace: hover en cada tarjeta, parallax en todo, degradados, partículas, íconos de camión.
