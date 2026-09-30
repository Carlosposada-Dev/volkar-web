/**
 * Único lugar donde vive el nombre de marca y los datos de la empresa.
 * VOLKAR aún no está confirmado (RUES, SIC, redes): cambiarlo aquí cambia todo el sitio.
 * Los datos pendientes van entre corchetes `[así]` y NUNCA se reemplazan con valores supuestos.
 */

export const marca = {
  nombre: 'VOLKAR',
  /** Iniciales para el avatar (WhatsApp, favicon). */
  siglas: 'VK',
  lema: 'Acarreo de material y movimiento de tierras en Urabá',
  descripcion:
    'Volqueta con conductor para contratistas de obra civil y los proyectos portuarios de Urabá. Cotice por WhatsApp y le respondemos desde la obra.',
  region: 'Urabá, Antioquia',
} as const;

export const contacto = {
  /** Número en formato internacional sin "+", tal como lo pide wa.me. Pendiente. */
  whatsapp: '57XXXXXXXXXX',
  whatsappVisible: '+57 [3XX XXX XXXX]',
  telefono: '+57XXXXXXXXXX',
  telefonoVisible: '+57 [3XX XXX XXXX]',
  horario: '[L–S · 6:00–18:00]',
  base: '[MUNICIPIO]',
  razonSocial: '[RAZÓN SOCIAL S.A.S.]',
  nit: '[___]',
  /** Texto con el que se abre el chat. Sin acentos raros para que wa.me no lo corte. */
  mensajeInicial:
    'Hola, necesito cotizar viajes de volqueta.\nMaterial: \nPunto de cargue: \nObra: ',
} as const;

export const enlaceWhatsApp = () =>
  `https://wa.me/${contacto.whatsapp}?text=${encodeURIComponent(contacto.mensajeInicial)}`;

export const hero = {
  /**
   * Clip real de la tolva descargando (6–8 s, mudo, en bucle) y su póster.
   * Mientras no exista, se muestra el placeholder "VIDEO REAL: tolva descargando".
   */
  video: null as null | { src: string; poster: string },
  placeholder: 'VIDEO REAL: tolva descargando',
} as const;

export const servicios = [
  {
    titulo: 'Acarreo de material',
    texto:
      'Arena, grava, balasto, tierra y escombro. Del punto de cargue a la obra, con el tiquete de cada viaje.',
  },
  {
    titulo: 'Movimiento de tierras',
    texto:
      'Retiro de excavación y rellenos. La máquina carga, nosotros ponemos la volqueta y los viajes que haga falta.',
  },
  {
    titulo: 'Alquiler de volqueta',
    texto: 'Con conductor. Usted decide cómo cobrar:',
    modalidades: ['POR VIAJE', 'POR HORA', 'POR DÍA'],
  },
] as const;

/** Cifras de la volqueta. `confirmado: false` las muestra entre corchetes. */
export const volqueta = {
  capacidadM3: { valor: 14, unidad: 'm³ DE TOLVA', confirmado: false },
  cargaT: { valor: 17, unidad: 't DE CARGA', unidadLarga: 't DE CARGA ÚTIL', confirmado: false },
  ficha: [
    { campo: 'MARCA · MODELO', valor: '[MARCA MODELO]' },
    { campo: 'AÑO', valor: '[____]' },
    { campo: 'TOLVA', valor: 'VOLTEO' },
    { campo: 'CONDUCTOR', valor: 'INCLUIDO' },
    { campo: 'DOCUMENTOS', valor: '[SOAT · RTM AL DÍA]' },
  ],
  nota: 'Los datos entre corchetes se confirman con la tarjeta de propiedad.',
} as const;

export const cobertura = {
  texto: `Todo el eje de Urabá. Base en ${contacto.base}; a los demás municipios se cotiza el desplazamiento.`,
  municipios: ['Apartadó', 'Turbo', 'Carepa', 'Chigorodó', 'Necoclí'],
  cierre: 'Y los proyectos portuarios de Urabá',
} as const;

export const socios = {
  intro:
    'Dos socios, una volqueta. Carlos cotiza y contrata, Wilmar maneja y entrega. Con cualquiera de los dos habla directo, sin intermediarios.',
  personas: [
    {
      nombre: 'Carlos Andrés Posada',
      rol: 'SOCIO · COTIZA Y CONTRATA',
      texto: 'Cotizaciones, contratos y facturación.',
      foto: null as null | string,
    },
    {
      nombre: 'Wilmar Nohava',
      rol: 'SOCIO · MANEJA Y ENTREGA',
      texto: 'Al volante de la volqueta, todos los días.',
      foto: null as null | string,
    },
  ],
} as const;

export const cierre = {
  titulo: '¿Cuántos viajes necesita?',
  texto: 'Mande el material, el punto de cargue y la obra. Le respondemos con precio el mismo día.',
  cta: 'Escribir por WhatsApp',
} as const;

export const navegacion = [
  { href: '#servicios', texto: 'Servicios' },
  { href: '#volqueta', texto: 'La volqueta' },
  { href: '#cobertura', texto: 'Cobertura' },
  { href: '#socios', texto: 'Quiénes somos' },
] as const;
