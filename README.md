# DuoQIT — Web Corporativa

Sitio web estático (HTML + CSS + JS vanilla) para **DuoQIT**, listo para publicar
en **GitHub Pages** y vincular un dominio personalizado.

## Stack

- HTML5 semántico, sin frameworks de componentes.
- CSS3 puro con variables CSS (sin Tailwind/Bootstrap).
- JavaScript Vanilla ES6+.
- CDN externas: **GSAP 3** + **ScrollTrigger** (animaciones), **Lenis** (smooth scroll), **Formspree** (formulario sin backend).
- Google Fonts: Space Grotesk, Inter, JetBrains Mono, Playfair Display.

## Estructura

```
duoqit/
├── index.html          ← Página principal (one-page)
├── blog.html           ← Blog (en construcción)
├── css/
│   ├── reset.css
│   ├── variables.css
│   └── main.css
├── js/
│   ├── main.js         ← GSAP, ScrollTrigger, Lenis, formulario, red neuronal
│   └── cursor.js       ← Cursor personalizado
├── assets/
│   └── favicon.svg
├── CNAME               ← Vacío hasta vincular dominio
└── README.md
```

La web es completamente funcional abriendo `index.html` en local (sin servidor);
solo el envío del formulario requiere conexión a Formspree.

## Despliegue en GitHub Pages

1. Subir este repositorio a GitHub.
2. En **Settings → Pages → Source**: seleccionar "Deploy from a branch".
3. Branch: `main`, folder: `/ (root)`.
4. GitHub Pages generará la URL: `https://[usuario].github.io/[repo]`

## Vincular dominio personalizado

1. Editar el archivo `CNAME` con tu dominio: `duoqit.com`
2. En tu proveedor de dominio (IONOS, Namecheap, etc.):
   - Añadir registro A: `185.199.108.153`
   - Añadir registro A: `185.199.109.153`
   - Añadir registro A: `185.199.110.153`
   - Añadir registro A: `185.199.111.153`
   - Añadir registro CNAME: `www` → `[usuario].github.io`
3. En GitHub Pages Settings: introducir el dominio personalizado.
4. Activar **"Enforce HTTPS"** (disponible tras propagación DNS, ~24h).

## Configurar Formspree

1. Registrarse en [formspree.io](https://formspree.io) (plan gratuito: 50 envíos/mes).
2. Crear un nuevo form y copiar el ID (formato: `xxxxxyzw`).
3. Reemplazar `XXXXXXXX` por tu ID en:
   - `index.html` → atributo `action` del `<form id="contact-form">`
   - `blog.html` → atributo `action` del `<form id="notify-form">`
   - `js/main.js` → constante `FORMSPREE_ENDPOINT` (fallback usado por el envío AJAX)

> El formulario se envía vía `fetch` sin recargar la página y muestra estados
> *idle / enviando / éxito / error* en el DOM.

## Personalizar

- **Email de contacto**: buscar `hola@duoqit.com` y reemplazar.
- **WhatsApp**: buscar `wa.me/XXXXXXXXX` y añadir el número con prefijo de país (ej. `wa.me/34600000000`).
- **Google Analytics**: añadir el snippet de GA4 justo antes de `</head>` en ambas páginas.

## Notas de diseño

- Dark mode exclusivo, glassmorphism sutil, textura de ruido y glows azules.
- Cursor personalizado (se desactiva en dispositivos táctiles).
- Red neuronal del hero generada dinámicamente en `js/main.js`.
- Respeta `prefers-reduced-motion`: desactiva animaciones y smooth scroll.
