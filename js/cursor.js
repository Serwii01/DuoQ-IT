/* ==========================================================================
   cursor.js — Cursor personalizado de DuoQIT
   - Punto pequeño (8px) que sigue el ratón casi sin retraso.
   - Anillo grande (40px) con inercia (lerp).
   - Reacciona a hover de links/botones, texto y cards de servicio.
   - Se desactiva por completo en dispositivos táctiles.
   ========================================================================== */

(function () {
  "use strict";

  // No mostramos cursor personalizado en dispositivos sin puntero fino (táctiles)
  const finePointer = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
  if (!finePointer) return;

  const dot = document.querySelector(".cursor-dot");
  const ring = document.querySelector(".cursor-ring");
  if (!dot || !ring) return;

  document.body.classList.add("custom-cursor-active");

  // Posiciones objetivo (ratón) y posiciones renderizadas (con lerp)
  let mouseX = window.innerWidth / 2;
  let mouseY = window.innerHeight / 2;
  let ringX = mouseX;
  let ringY = mouseY;

  const LERP = 0.18; // inercia del anillo (más bajo = más "perezoso")

  window.addEventListener("mousemove", (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    // El punto sigue al instante
    dot.style.transform = `translate(${mouseX}px, ${mouseY}px) translate(-50%, -50%)`;
  });

  // Bucle de animación para el anillo (interpolación suave)
  function render() {
    ringX += (mouseX - ringX) * LERP;
    ringY += (mouseY - ringY) * LERP;
    ring.style.transform = `translate(${ringX}px, ${ringY}px) translate(-50%, -50%)`;
    requestAnimationFrame(render);
  }
  render();

  // ---- Cambios de estado según el elemento bajo el cursor ----
  const interactive = "a, button, .btn, input, select, textarea, label, .nav__toggle";

  document.querySelectorAll(interactive).forEach((el) => {
    el.addEventListener("mouseenter", () => ring.classList.add("is-hover"));
    el.addEventListener("mouseleave", () => ring.classList.remove("is-hover"));
  });

  // Cursor "de texto" sobre párrafos y titulares largos
  document.querySelectorAll("p, h1, h2, h3, .lead, li").forEach((el) => {
    el.addEventListener("mouseenter", () => ring.classList.add("is-text"));
    el.addEventListener("mouseleave", () => ring.classList.remove("is-text"));
  });

  // Cards de servicio: el anillo crece y muestra "Ver más"
  document.querySelectorAll(".service-card").forEach((card) => {
    card.addEventListener("mouseenter", () => {
      ring.classList.add("is-card");
      ring.classList.remove("is-hover", "is-text");
    });
    card.addEventListener("mouseleave", () => ring.classList.remove("is-card"));
  });

  // Ocultar el cursor cuando el ratón sale de la ventana
  document.addEventListener("mouseleave", () => {
    dot.style.opacity = "0";
    ring.style.opacity = "0";
  });
  document.addEventListener("mouseenter", () => {
    dot.style.opacity = "1";
    ring.style.opacity = "1";
  });
})();
