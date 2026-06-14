# DuoQIT — Web Corporativa

Web de **DuoQIT** construida con **Vite + React** (componentizada), reutilizando
CSS artesanal (sin Tailwind/Bootstrap). Animaciones con **GSAP + ScrollTrigger**,
smooth scroll con **Lenis** y formularios sin backend vía **Formspree**.

## Stack

- **Vite 5 + React 18** (componentes funcionales con hooks).
- **react-router-dom 6** (HashRouter: rutas `/` y `/blog`, sin config de servidor).
- CSS3 puro con variables CSS (`src/styles/`).
- **GSAP 3 + ScrollTrigger**, **Lenis** (importados como dependencias npm).
- Google Fonts: Space Grotesk, Inter, JetBrains Mono, Playfair Display.

## Requisitos

- Node.js 18+ (recomendado 20).

## Desarrollo local

```bash
npm install      # instala dependencias
npm run dev      # servidor de desarrollo (http://localhost:5173)
npm run build    # build de producción en /dist
npm run preview  # sirve el build para revisarlo
```

## Estructura

```
duoqit/
├── index.html                 ← entrada de Vite (monta <div id="root">)
├── vite.config.js             ← base "./" (sirve en subruta o dominio propio)
├── package.json
├── public/
│   └── favicon.svg            ← (crea aquí CNAME al vincular dominio propio)
├── src/
│   ├── main.jsx               ← entrypoint React + HashRouter
│   ├── App.jsx                ← layout: Cursor, Nav, Routes, Footer
│   ├── config.js              ← Formspree, WhatsApp y email (EDITAR)
│   ├── styles/                ← reset.css · variables.css · main.css
│   ├── lib/                   ← gsap.js · smoothScroll.js (Lenis)
│   ├── hooks/                 ← useSectionNav.js
│   ├── data/                  ← services.jsx · process.js
│   ├── components/            ← Nav, Hero, NeuralNetwork, About, Services,
│   │                            ServiceCard, Process, Contact, NotifyForm,
│   │                            Footer, CustomCursor, PrivacyModal
│   └── pages/                 ← Home.jsx · Blog.jsx
└── .github/workflows/deploy.yml  ← CI: build + deploy a GitHub Pages
```

## Despliegue en GitHub Pages (automático)

El repo incluye un workflow que construye y publica en cada push a `main`:

1. En el repo → **Settings → Pages → Source: "GitHub Actions"**.
2. Haz push a `main`. El workflow `deploy.yml` ejecuta `npm ci`, `npm run build`
   y publica `/dist`.
3. URL del sitio: `https://serwii01.github.io/DuoQ-IT/`
   (al usar `HashRouter`, el blog queda en `…/#/blog`).

> Como `vite.config.js` usa `base: "./"`, no hace falta tocar nada aunque el
> sitio se sirva desde una subruta.

## Vincular dominio personalizado

1. Crea el archivo `public/CNAME` con tu dominio en una sola línea: `duoqit.com`
   (no lo dejes vacío: un CNAME vacío hace fallar el deploy de Pages).
2. En tu proveedor de dominio (IONOS, Namecheap, etc.):
   - Registros A: `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`
   - Registro CNAME: `www` → `serwii01.github.io`
3. En **Settings → Pages**: introduce el dominio personalizado.
4. Activa **"Enforce HTTPS"** tras la propagación DNS (~24h).

## Configurar Formspree

1. Regístrate en [formspree.io](https://formspree.io) (plan gratuito: 50 envíos/mes).
2. Crea un form y copia tu endpoint (`https://formspree.io/f/xxxxxxxx`).
3. Pégalo en **`src/config.js`** → `FORMSPREE_ENDPOINT`.

> Lo usan tanto el formulario de contacto como el de aviso del blog (envío AJAX
> con `fetch`, sin recargar la página, con estados idle/enviando/éxito/error).

## Personalizar

Todo lo editable está centralizado en **`src/config.js`**:

- `FORMSPREE_ENDPOINT` — tu endpoint de Formspree.
- `WHATSAPP_URL` — `https://wa.me/34XXXXXXXXX` con prefijo de país.
- `CONTACT_EMAIL` — email de contacto.

Los textos de servicios y pasos del proceso están en `src/data/`.

## Notas de diseño

- Dark mode exclusivo, glassmorphism, textura de ruido y glows azules.
- Cursor personalizado (se desactiva en táctiles).
- Red neuronal del hero renderizada en React (`NeuralNetwork.jsx`).
- Respeta `prefers-reduced-motion`: desactiva animaciones y smooth scroll.
