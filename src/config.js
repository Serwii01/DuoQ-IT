/* Configuración editable del sitio.
   Reemplaza estos valores antes de publicar. */

// ID de Formspree: crea un form en formspree.io y pega aquí tu endpoint.
export const FORMSPREE_ENDPOINT = "https://formspree.io/f/xdavbjky";

// Números de WhatsApp con prefijo de país, sin signos ni espacios.
export const WHATSAPP_NUMBERS = [
  { label: "+34 653 384 282", number: "34653384282" },
  { label: "+34 611 489 365", number: "34611489365" },
];

// Compatibilidad: enlace al primer número (usado en algunos sitios).
export const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBERS[0].number}`;

// Email de contacto.
export const CONTACT_EMAIL = "contacto@duoq.es";
