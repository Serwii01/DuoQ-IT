/* Datos de las 6 tarjetas de servicio.
   `value` debe coincidir con las <option> del select de contacto. */

export const services = [
  {
    num: "01",
    title: "Desarrollo Web",
    value: "Desarrollo Web",
    cta: "Quiero mi web",
    desc: "Diseñamos y construimos sitios web que trabajan para ti: rápidos, seguros, bien posicionados en Google y optimizados para convertir visitantes en clientes. Desde la presencia online de un comercio local hasta la web corporativa de una empresa con múltiples servicios. Cada proyecto es único, nunca usamos plantillas genéricas.",
    points: [
      "Diseño responsive: perfecta en móvil, tablet y escritorio",
      "SEO técnico incluido desde el primer día",
      "Panel de gestión para que puedas actualizar tu contenido",
      "Velocidad optimizada (Core Web Vitals en verde)",
    ],
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <rect x="3" y="4" width="18" height="13" rx="2" />
        <path d="M3 8h18" /><path d="M8 21h8" /><path d="M12 17v4" />
        <path d="M9 12l1.5 1.5L9 15" /><path d="M14 15h2" />
      </svg>
    ),
  },
  {
    num: "02",
    title: "Automatizaciones Inteligentes",
    value: "Automatizaciones con IA",
    cta: "Automatizar mi negocio",
    desc: "¿Cuántas horas al mes dedica tu equipo a tareas repetitivas? Copiar datos de un sitio a otro, enviar los mismos emails, generar informes manualmente... Diseñamos flujos automáticos que hacen ese trabajo en segundos, sin errores y las 24 horas del día. Conectamos tus herramientas actuales y las hacemos trabajar juntas.",
    points: [
      "Integración con tus herramientas existentes (CRM, email, tienda)",
      "Notificaciones y alertas automáticas en tiempo real",
      "Informes y resúmenes generados sin intervención humana",
      "Sin conocimientos técnicos necesarios para usarlos",
    ],
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <circle cx="12" cy="12" r="3" />
        <path d="M12 2v3M12 19v3M2 12h3M19 12h3M5 5l2 2M17 17l2 2M19 5l-2 2M7 17l-2 2" />
      </svg>
    ),
  },
  {
    num: "03",
    title: "Bots para WhatsApp y Telegram",
    value: "Bot WhatsApp / Telegram",
    cta: "Quiero un bot",
    desc: "Tus clientes escriben fuera de horario y se van a la competencia porque nadie les responde. Nuestros bots inteligentes atienden consultas, toman reservas y recopilan información sin que tengas que estar pendiente. Entrenados con la información de tu negocio y con transferencia a agente humano cuando lo necesitan.",
    points: [
      "Respuesta inmediata en WhatsApp Business y Telegram",
      "Gestión de reservas y citas integrada con tu calendario",
      "Preguntas frecuentes respondidas automáticamente",
      "Traspaso a agente humano con historial completo",
    ],
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M21 11.5a8.38 8.38 0 0 1-8.5 8.5 8.5 8.5 0 0 1-3.9-.9L3 21l1.9-5.6A8.5 8.5 0 0 1 12.5 3 8.38 8.38 0 0 1 21 11.5z" />
        <path d="M8 11h.01M12 11h.01M16 11h.01" />
      </svg>
    ),
  },
  {
    num: "04",
    title: "SEO y Visibilidad en Google",
    value: "SEO y Visibilidad en Google",
    cta: "Mejorar mi visibilidad",
    desc: "Aparecer en Google cuando tus clientes te buscan no es magia: es técnica, contenido y consistencia. Auditamos tu presencia digital, identificamos qué palabras clave te van a traer clientes reales y ejecutamos una estrategia mes a mes que mejora tus posiciones de forma sostenida. También optimizamos tu ficha de Google Maps para negocios locales.",
    points: [
      "Auditoría técnica SEO completa con plan de acción",
      "Optimización de Google My Business para búsquedas locales",
      "Contenido optimizado que posiciona y convierte",
      "Informes mensuales de posiciones y tráfico",
    ],
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M3 3v18h18" />
        <path d="M7 14l3-4 3 3 4-6" />
        <circle cx="20" cy="7" r="2.4" />
        <path d="M21.7 8.7L23 10" />
      </svg>
    ),
  },
  {
    num: "05",
    title: "Hosting sin Preocupaciones",
    value: "Hosting Gestionado",
    cta: "Gestionar mi hosting",
    desc: "Tu web necesita un servidor fiable, rápido y seguro. Nos encargamos de contratar, configurar y mantener el hosting en tu nombre: actualizaciones de seguridad, backups automáticos, monitorización 24/7 y gestión de renovaciones. Si algo falla, lo sabemos antes que tú y lo resolvemos. Tú te olvidas y tu web funciona.",
    points: [
      "Backups automáticos diarios o semanales",
      "Monitorización de disponibilidad las 24 horas",
      "Actualizaciones de seguridad gestionadas",
      "Soporte ante caídas con tiempo de respuesta garantizado",
    ],
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <rect x="3" y="4" width="18" height="6" rx="1.5" />
        <rect x="3" y="14" width="18" height="6" rx="1.5" />
        <path d="M7 7h.01M7 17h.01" />
        <path d="M12 10v4" /><path d="M9.5 12l2.5 2 2.5-2" />
      </svg>
    ),
  },
  {
    num: "06",
    title: "Software a Medida",
    value: "Desarrollo de Software",
    cta: "Cuéntanos tu proyecto",
    desc: "Cuando las herramientas del mercado no encajan exactamente con cómo trabaja tu negocio, desarrollamos la solución. Paneles de gestión internos, integraciones entre sistemas, APIs personalizadas, aplicaciones web con lógica de negocio propia. Si puedes describir el problema, nosotros podemos construir la solución.",
    points: [
      "Análisis del proceso antes de escribir una sola línea de código",
      "Tecnología moderna, mantenible y documentada",
      "Integraciones con sistemas existentes (ERP, CRM, contabilidad)",
      "Formación y soporte en la entrega",
    ],
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M8 6l-5 6 5 6" /><path d="M16 6l5 6-5 6" />
        <path d="M13 4l-2 16" />
      </svg>
    ),
  },
];
