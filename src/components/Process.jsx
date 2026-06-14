import { useRef, useEffect } from "react";
import { gsap, prefersReducedMotion } from "../lib/gsap";
import { processSteps } from "../data/process.js";

export default function Process() {
  const root = useRef(null);

  useEffect(() => {
    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      // Dibujar la línea del timeline (scaleX en desktop / scaleY en móvil via CSS)
      const fill = root.current.querySelector(".process__line-fill");
      if (fill) {
        gsap.to(fill, {
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
    }, root);

    return () => ctx.revert();
  }, []);

  return (
    <section className="bg-secondary" id="proceso" ref={root}>
      <div className="container">
        <div className="section-head is-centered">
          <span className="eyebrow is-centered">Cómo trabajamos</span>
          <h2>
            De la idea al resultado en <span className="gradient-text">5 pasos</span>
          </h2>
        </div>

        <div className="process__track">
          <div className="process__line" aria-hidden="true">
            <div className="process__line-fill"></div>
          </div>

          {processSteps.map((step) => (
            <div className="process-step" key={step.num}>
              <div className="process-step__dot">{step.num}</div>
              <h3>{step.title}</h3>
              <p>{step.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
