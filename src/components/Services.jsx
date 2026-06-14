import { useRef, useEffect } from "react";
import { gsap, prefersReducedMotion } from "../lib/gsap";
import { services } from "../data/services.jsx";
import ServiceCard from "./ServiceCard.jsx";

export default function Services({ onSelectService }) {
  const root = useRef(null);

  useEffect(() => {
    if (prefersReducedMotion) {
      gsap.set(".service-card", { opacity: 1 });
      return;
    }
    const ctx = gsap.context(() => {
      gsap.set(".service-card", { opacity: 1 });
      gsap.from(".service-card", {
        y: 60,
        opacity: 0,
        duration: 0.7,
        ease: "power3.out",
        stagger: 0.1,
        scrollTrigger: { trigger: ".services__grid", start: "top 78%" },
      });
    }, root);
    return () => ctx.revert();
  }, []);

  return (
    <section id="servicios" ref={root}>
      <div className="container">
        <div className="section-head is-centered">
          <span className="eyebrow is-centered">Lo que hacemos</span>
          <h2>
            Servicios que <span className="gradient-text">impulsan</span> tu negocio
          </h2>
          <p>Seis formas de poner la tecnología a trabajar para ti. Elige por dónde empezar.</p>
        </div>

        <div className="services__grid">
          {services.map((s) => (
            <ServiceCard key={s.num} service={s} onSelect={onSelectService} />
          ))}
        </div>
      </div>
    </section>
  );
}
