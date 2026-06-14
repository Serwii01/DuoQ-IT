import { useEffect, useRef } from "react";

/* Cursor personalizado: punto que sigue al instante + anillo con inercia.
   Usa delegación de eventos sobre el documento para reaccionar a hover
   de links/botones, texto y cards (robusto frente a re-renders de React).
   Se desactiva por completo en dispositivos táctiles. */
export default function CustomCursor() {
  const dotRef = useRef(null);
  const ringRef = useRef(null);

  useEffect(() => {
    const finePointer = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    if (!finePointer) return;

    const dot = dotRef.current;
    const ring = ringRef.current;
    if (!dot || !ring) return;

    document.body.classList.add("custom-cursor-active");

    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;
    let ringX = mouseX;
    let ringY = mouseY;
    const LERP = 0.18;
    let rafId;

    const onMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      dot.style.transform = `translate(${mouseX}px, ${mouseY}px) translate(-50%, -50%)`;

      // Estado del anillo según el elemento bajo el cursor (delegación)
      const t = e.target;
      ring.classList.remove("is-hover", "is-text", "is-card");
      if (t.closest(".service-card")) {
        ring.classList.add("is-card");
      } else if (t.closest("a, button, .btn, input, select, textarea, label, .nav__toggle")) {
        ring.classList.add("is-hover");
      } else if (t.closest("p, h1, h2, h3, .lead, li")) {
        ring.classList.add("is-text");
      }
    };

    const render = () => {
      ringX += (mouseX - ringX) * LERP;
      ringY += (mouseY - ringY) * LERP;
      ring.style.transform = `translate(${ringX}px, ${ringY}px) translate(-50%, -50%)`;
      rafId = requestAnimationFrame(render);
    };

    const onLeave = () => {
      dot.style.opacity = "0";
      ring.style.opacity = "0";
    };
    const onEnter = () => {
      dot.style.opacity = "1";
      ring.style.opacity = "1";
    };

    window.addEventListener("mousemove", onMove);
    document.addEventListener("mouseleave", onLeave);
    document.addEventListener("mouseenter", onEnter);
    render();

    return () => {
      window.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseleave", onLeave);
      document.removeEventListener("mouseenter", onEnter);
      cancelAnimationFrame(rafId);
      document.body.classList.remove("custom-cursor-active");
    };
  }, []);

  return (
    <>
      <div className="cursor-dot" ref={dotRef} aria-hidden="true" />
      <div className="cursor-ring" ref={ringRef} aria-hidden="true">
        <span className="cursor-ring__label">Ver más</span>
      </div>
    </>
  );
}
