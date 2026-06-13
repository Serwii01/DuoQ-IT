/* ==========================================================================
   main.js — Lógica principal DuoQIT
   - Smooth scroll (Lenis) integrado con el ticker de GSAP.
   - Animaciones de entrada del hero (timeline GSAP).
   - Reveals de secciones, cards y timeline con ScrollTrigger.
   - Red neuronal animada del hero.
   - Navegación: scroll state + menú móvil + smooth scroll a anchors.
   - Formulario de contacto: estados idle / loading / success-error con fetch.
   - Auto-relleno del select de servicio vía sessionStorage.
   ========================================================================== */

(function () {
  "use strict";

  const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const hasGSAP = typeof window.gsap !== "undefined";

  /* ======================================================================
     0. CONFIG — reemplazar XXXXXXXX por el ID real de Formspree
     ====================================================================== */
  const FORMSPREE_ENDPOINT = "https://formspree.io/f/XXXXXXXX";

  document.documentElement.classList.add("js-ready");

  /* ======================================================================
     1. SMOOTH SCROLL (LENIS) + GSAP TICKER
     ====================================================================== */
  let lenis = null;
  if (typeof window.Lenis !== "undefined" && !prefersReduced) {
    lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });

    if (hasGSAP && window.ScrollTrigger) {
      // Mantener ScrollTrigger sincronizado con Lenis
      lenis.on("scroll", window.ScrollTrigger.update);
      window.gsap.ticker.add((time) => lenis.raf(time * 1000));
      window.gsap.ticker.lagSmoothing(0);
    } else {
      function raf(time) {
        lenis.raf(time);
        requestAnimationFrame(raf);
      }
      requestAnimationFrame(raf);
    }
  }

  // Helper de scroll que usa Lenis si está disponible
  function scrollToTarget(target) {
    const el = typeof target === "string" ? document.querySelector(target) : target;
    if (!el) return;
    if (lenis) {
      lenis.scrollTo(el, { offset: -70 });
    } else {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }

  /* ======================================================================
     2. NAVEGACIÓN
     ====================================================================== */
  const nav = document.querySelector(".nav");
  const navToggle = document.querySelector(".nav__toggle");
  const navLinks = document.querySelector(".nav__links");

  // Estado "scrolled" (glassmorphism compacto)
  function handleNavScroll() {
    if (!nav) return;
    nav.classList.toggle("scrolled", window.scrollY > 50);
  }
  handleNavScroll();
  window.addEventListener("scroll", handleNavScroll, { passive: true });

  // Menú hamburguesa
  if (navToggle && navLinks) {
    navToggle.addEventListener("click", () => {
      const open = navToggle.classList.toggle("is-open");
      navLinks.classList.toggle("is-open", open);
      navToggle.setAttribute("aria-expanded", String(open));
    });
  }

  // Smooth scroll para todos los anchors internos (#...)
  document.querySelectorAll('a[href^="#"]').forEach((link) => {
    link.addEventListener("click", (e) => {
      const href = link.getAttribute("href");
      if (!href || href === "#") return;
      const target = document.querySelector(href);
      if (!target) return;
      e.preventDefault();
      // Cerrar menú móvil si está abierto
      if (navToggle && navToggle.classList.contains("is-open")) {
        navToggle.classList.remove("is-open");
        navLinks.classList.remove("is-open");
        navToggle.setAttribute("aria-expanded", "false");
      }
      scrollToTarget(target);
    });
  });

  /* ======================================================================
     3. RED NEURONAL DEL HERO (generada en JS sobre un <svg>)
     ====================================================================== */
  function buildNeuralNetwork() {
    const svg = document.getElementById("neural");
    if (!svg) return;

    const W = 480;
    const H = 420;
    svg.setAttribute("viewBox", `0 0 ${W} ${H}`);

    // Nodos: uno central (core) y otros distribuidos alrededor
    const cx = W / 2;
    const cy = H / 2;
    const nodes = [
      { x: cx, y: cy, r: 9, core: true },          // núcleo
      { x: cx - 150, y: cy - 110, r: 6 },
      { x: cx + 140, y: cy - 130, r: 5 },
      { x: cx + 170, y: cy - 10, r: 6 },
      { x: cx + 120, y: cy + 120, r: 5 },
      { x: cx - 30, y: cy + 160, r: 6 },
      { x: cx - 160, y: cy + 90, r: 5 },
      { x: cx - 185, y: cy - 20, r: 6 },
      { x: cx - 70, y: cy - 60, r: 4 },
      { x: cx + 70, y: cy + 40, r: 4 },
      { x: cx + 40, y: cy - 90, r: 4 },
      { x: cx - 90, y: cy + 70, r: 4 },
    ];

    const svgNS = "http://www.w3.org/2000/svg";
    const frag = document.createDocumentFragment();

    // Halo difuso alrededor del núcleo
    const halo = document.createElementNS(svgNS, "circle");
    halo.setAttribute("cx", cx);
    halo.setAttribute("cy", cy);
    halo.setAttribute("r", 120);
    halo.setAttribute("class", "neural__halo");
    frag.appendChild(halo);

    // Conexiones: cada nodo periférico se une al núcleo + algunas cruzadas
    const links = [];
    for (let i = 1; i < nodes.length; i++) links.push([0, i]);
    links.push([1, 8], [2, 10], [3, 9], [4, 9], [5, 11], [6, 11], [7, 8], [8, 10]);

    links.forEach(([a, b]) => {
      const line = document.createElementNS(svgNS, "line");
      line.setAttribute("x1", nodes[a].x);
      line.setAttribute("y1", nodes[a].y);
      line.setAttribute("x2", nodes[b].x);
      line.setAttribute("y2", nodes[b].y);
      line.setAttribute("class", "neural__link");
      frag.appendChild(line);
    });

    // Nodos (círculos pulsantes vía CSS animation inline con delay aleatorio)
    nodes.forEach((n, i) => {
      const c = document.createElementNS(svgNS, "circle");
      c.setAttribute("cx", n.x);
      c.setAttribute("cy", n.y);
      c.setAttribute("r", n.r);
      c.setAttribute("class", "neural__node" + (n.core ? " neural__node--core" : ""));
      // Pulso suave: animación CSS por nodo
      const delay = (i * 0.35).toFixed(2);
      const dur = (2.4 + (i % 4) * 0.4).toFixed(2);
      c.style.animation = `nodePulse ${dur}s ease-in-out ${delay}s infinite`;
      frag.appendChild(c);
    });

    svg.appendChild(frag);

    // Inyectar keyframes del pulso una sola vez
    if (!document.getElementById("neural-kf")) {
      const style = document.createElement("style");
      style.id = "neural-kf";
      style.textContent =
        "@keyframes nodePulse{0%,100%{opacity:.55;transform:scale(1)}50%{opacity:1;transform:scale(1.35)}}";
      document.head.appendChild(style);
    }

    // Pulsos viajeros a lo largo de las conexiones principales (GSAP opcional)
    if (hasGSAP && !prefersReduced) {
      links.slice(0, 6).forEach(([a, b], idx) => {
        const pulse = document.createElementNS(svgNS, "circle");
        pulse.setAttribute("r", 2.5);
        pulse.setAttribute("class", "neural__node--core");
        svg.appendChild(pulse);
        window.gsap.fromTo(
          pulse,
          { attr: { cx: nodes[b].x, cy: nodes[b].y }, opacity: 0 },
          {
            attr: { cx: nodes[a].x, cy: nodes[a].y },
            opacity: 1,
            duration: 1.6,
            repeat: -1,
            delay: idx * 0.5,
            ease: "power1.inOut",
            yoyo: true,
          }
        );
      });
    }
  }
  buildNeuralNetwork();

  /* ======================================================================
     4. ANIMACIONES GSAP
     ====================================================================== */
  if (hasGSAP && !prefersReduced) {
    const { gsap } = window;
    if (window.ScrollTrigger) gsap.registerPlugin(window.ScrollTrigger);

    // Quitar el "ocultado anti-FOUC" para que GSAP controle la opacidad
    gsap.set(".reveal", { opacity: 1 });

    /* ---- 4.1 Hero: timeline de entrada ---- */
    const heroTl = gsap.timeline({ defaults: { ease: "power3.out", duration: 0.8 } });
    heroTl
      .from(".hero__eyebrow", { y: 30, opacity: 0 })
      .from(".hero__title .line", { y: 50, opacity: 0, stagger: 0.15 }, "-=0.4")
      .from(".hero__subtitle", { y: 40, opacity: 0 }, "-=0.4")
      .from(".hero__ctas .btn", { y: 30, opacity: 0, stagger: 0.12 }, "-=0.4")
      .from(".hero__visual", { scale: 0.8, opacity: 0, duration: 1 }, "-=0.9");

    /* ---- 4.2 Parallax sutil del visual del hero ---- */
    if (window.ScrollTrigger) {
      gsap.to(".hero__visual", {
        y: -50,
        ease: "none",
        scrollTrigger: {
          trigger: ".hero",
          start: "top top",
          end: "bottom top",
          scrub: 1,
        },
      });
    }

    /* ---- 4.3 Reveal genérico de cabeceras de sección ---- */
    if (window.ScrollTrigger) {
      gsap.utils.toArray(".section-head").forEach((head) => {
        gsap.from(head, {
          y: 40,
          opacity: 0,
          duration: 0.9,
          ease: "power3.out",
          scrollTrigger: { trigger: head, start: "top 85%" },
        });
      });

      /* ---- 4.4 Statement "Nosotros" palabra a palabra ---- */
      const words = gsap.utils.toArray(".about__statement .word");
      if (words.length) {
        gsap.from(words, {
          y: 30,
          opacity: 0,
          duration: 0.6,
          ease: "power3.out",
          stagger: 0.06,
          scrollTrigger: { trigger: ".about__statement", start: "top 80%" },
        });
      }
      gsap.from(".about__top p", {
        y: 30,
        opacity: 0,
        duration: 0.8,
        scrollTrigger: { trigger: ".about__top p", start: "top 85%" },
      });

      /* ---- 4.5 Pilares (stagger) ---- */
      gsap.from(".pillar", {
        y: 50,
        opacity: 0,
        duration: 0.7,
        ease: "power3.out",
        stagger: 0.15,
        scrollTrigger: { trigger: ".pillars", start: "top 80%" },
      });

      /* ---- 4.6 Cards de servicio (stagger) ---- */
      gsap.from(".service-card", {
        y: 60,
        opacity: 0,
        duration: 0.7,
        ease: "power3.out",
        stagger: 0.1,
        scrollTrigger: { trigger: ".services__grid", start: "top 78%" },
      });

      /* ---- 4.7 Timeline del proceso: dibujar la línea + pasos ---- */
      const lineFill = document.querySelector(".process__line-fill");
      if (lineFill) {
        gsap.to(lineFill, {
          scaleX: 1,
          scaleY: 1,
          ease: "none",
          scrollTrigger: {
            trigger: ".process__track",
            start: "top 70%",
            end: "bottom 70%",
            scrub: true,
          },
        });
      }
      gsap.from(".process-step", {
        y: 40,
        opacity: 0,
        duration: 0.6,
        ease: "power3.out",
        stagger: 0.15,
        scrollTrigger: { trigger: ".process__track", start: "top 75%" },
      });

      /* ---- 4.8 Contacto ---- */
      gsap.from(".contact__copy > *", {
        y: 30,
        opacity: 0,
        duration: 0.7,
        ease: "power3.out",
        stagger: 0.08,
        scrollTrigger: { trigger: ".contact__copy", start: "top 80%" },
      });
      gsap.from(".form", {
        y: 50,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: { trigger: ".form", start: "top 82%" },
      });
    }
  } else {
    // Sin GSAP o con movimiento reducido: aseguramos visibilidad total
    document.querySelectorAll(".reveal").forEach((el) => (el.style.opacity = "1"));
  }

  /* ======================================================================
     5. AUTO-RELLENO DEL SELECT DE SERVICIO
     ====================================================================== */
  const serviceSelect = document.getElementById("service");

  // Al pulsar el CTA de una card, guardamos el servicio y hacemos scroll
  document.querySelectorAll("[data-service]").forEach((cta) => {
    cta.addEventListener("click", (e) => {
      e.preventDefault();
      const value = cta.getAttribute("data-service");
      sessionStorage.setItem("duoqit-service", value);
      applyStoredService();
      scrollToTarget("#contacto");
    });
  });

  function applyStoredService() {
    if (!serviceSelect) return;
    const stored = sessionStorage.getItem("duoqit-service");
    if (!stored) return;
    const match = Array.from(serviceSelect.options).find((o) => o.value === stored);
    if (match) serviceSelect.value = stored;
  }
  applyStoredService();

  /* ======================================================================
     6. FORMULARIO DE CONTACTO (fetch a Formspree, sin recargar)
     ====================================================================== */
  function setupAjaxForm(form) {
    if (!form) return;
    const statusEl = form.querySelector(".form__status");
    const submitBtn = form.querySelector('[type="submit"]');
    const submitLabel = submitBtn ? submitBtn.querySelector(".btn__label") : null;
    const defaultText = submitLabel ? submitLabel.textContent : "";

    function showStatus(type, message) {
      if (!statusEl) return;
      statusEl.textContent = message;
      statusEl.className = "form__status is-visible is-" + type;
    }

    form.addEventListener("submit", async (e) => {
      e.preventDefault();

      // Endpoint: si el form trae un action real lo usamos, si no el global
      let action = form.getAttribute("action") || FORMSPREE_ENDPOINT;
      if (action.includes("XXXXXXXX")) action = FORMSPREE_ENDPOINT;

      // Estado: loading
      if (submitBtn) {
        submitBtn.setAttribute("aria-busy", "true");
        if (submitLabel) submitLabel.textContent = "Enviando...";
      }

      try {
        const res = await fetch(action, {
          method: "POST",
          body: new FormData(form),
          headers: { Accept: "application/json" },
        });

        if (res.ok) {
          showStatus("success", "¡Mensaje enviado! Te responderemos en menos de 24 horas.");
          form.reset();
          sessionStorage.removeItem("duoqit-service");
        } else {
          const data = await res.json().catch(() => ({}));
          const msg =
            data && data.errors
              ? data.errors.map((er) => er.message).join(" ")
              : "No se pudo enviar el formulario. Inténtalo de nuevo.";
          showStatus("error", msg);
        }
      } catch (err) {
        showStatus("error", "Error de conexión. Revisa tu red e inténtalo de nuevo.");
      } finally {
        // Estado: idle
        if (submitBtn) {
          submitBtn.removeAttribute("aria-busy");
          if (submitLabel) submitLabel.textContent = defaultText;
        }
      }
    });
  }

  setupAjaxForm(document.getElementById("contact-form"));
  setupAjaxForm(document.getElementById("notify-form"));

  /* ======================================================================
     7. MODAL DE POLÍTICA DE PRIVACIDAD
     ====================================================================== */
  const modal = document.getElementById("privacy-modal");
  if (modal) {
    const openers = document.querySelectorAll("[data-open-privacy]");
    const closers = modal.querySelectorAll("[data-close-privacy]");

    const open = () => modal.classList.add("is-open");
    const close = () => modal.classList.remove("is-open");

    openers.forEach((o) => o.addEventListener("click", (e) => { e.preventDefault(); open(); }));
    closers.forEach((c) => c.addEventListener("click", close));
    modal.addEventListener("click", (e) => { if (e.target === modal) close(); });
    document.addEventListener("keydown", (e) => { if (e.key === "Escape") close(); });
  }

  /* ======================================================================
     8. AÑO DINÁMICO EN EL FOOTER
     ====================================================================== */
  const yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();
})();
