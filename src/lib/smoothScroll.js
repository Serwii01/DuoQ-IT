/* Smooth scroll con Lenis, integrado con el ticker de GSAP.
   Singleton: cualquier componente puede llamar scrollTo() sin tener
   acceso directo a la instancia. */
import Lenis from "lenis";
import { gsap, ScrollTrigger, prefersReducedMotion } from "./gsap";

let lenis = null;

export function initLenis() {
  if (lenis || prefersReducedMotion) return lenis;

  lenis = new Lenis({
    duration: 1.2,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    smoothWheel: true,
  });

  // Mantener ScrollTrigger sincronizado con Lenis
  lenis.on("scroll", ScrollTrigger.update);
  gsap.ticker.add((time) => lenis.raf(time * 1000));
  gsap.ticker.lagSmoothing(0);

  return lenis;
}

/** Scroll suave a un selector o elemento. Devuelve true si encontró destino. */
export function scrollTo(target) {
  const el = typeof target === "string" ? document.querySelector(target) : target;
  if (!el) return false;
  if (lenis) lenis.scrollTo(el, { offset: -70 });
  else el.scrollIntoView({ behavior: "smooth", block: "start" });
  return true;
}
