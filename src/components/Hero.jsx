import { useRef, useEffect } from "react";
import { gsap, ScrollTrigger, prefersReducedMotion } from "../lib/gsap";
import { scrollTo } from "../lib/smoothScroll";
import NeuralNetwork from "./NeuralNetwork.jsx";

export default function Hero() {
  const root = useRef(null);

  useEffect(() => {
    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      // Timeline de entrada del hero
      const tl = gsap.timeline({ defaults: { ease: "power3.out", duration: 0.8 } });
      tl.from(".hero__eyebrow", { y: 30, opacity: 0 })
        .from(".hero__title .line", { y: 50, opacity: 0, stagger: 0.15 }, "-=0.4")
        .from(".hero__subtitle", { y: 40, opacity: 0 }, "-=0.4")
        .from(".hero__ctas .btn", { y: 30, opacity: 0, stagger: 0.12 }, "-=0.4")
        .from(".hero__visual", { scale: 0.8, opacity: 0, duration: 1 }, "-=0.9");

      // Parallax sutil del visual al hacer scroll
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
    }, root);

    return () => ctx.revert();
  }, []);

  return (
    <section className="hero" id="inicio" ref={root}>
      <div className="container hero__grid">
        <div className="hero__copy">
          <span className="eyebrow hero__eyebrow">Tecnología · Automatización · IA</span>

          <h1 className="hero__title">
            <span className="line">Donde la IA</span>
            <span className="line">trabaja para</span>
            <span className="line gradient-text">tu negocio.</span>
          </h1>

          <p className="hero__subtitle">
            Desarrollo web, automatizaciones inteligentes y bots que liberan a tu
            equipo de las tareas repetitivas. Sin complicaciones técnicas. Con
            resultados medibles.
          </p>

          <div className="hero__ctas">
            <a
              href="#servicios"
              className="btn btn-primary"
              onClick={(e) => {
                e.preventDefault();
                scrollTo("#servicios");
              }}
            >
              Conoce nuestros servicios <span className="arrow">→</span>
            </a>
            <a
              href="#contacto"
              className="btn btn-secondary"
              onClick={(e) => {
                e.preventDefault();
                scrollTo("#contacto");
              }}
            >
              Hablemos
            </a>
          </div>
        </div>

        <div className="hero__visual">
          <NeuralNetwork />
        </div>
      </div>
    </section>
  );
}
