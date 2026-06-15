import { useRef, useEffect } from "react";
import { gsap, prefersReducedMotion } from "../lib/gsap";

const PILLARS = [
  {
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <polygon points="13 2 4 14 11 14 10 22 20 10 13 10 13 2" />
      </svg>
    ),
    title: "Rapidez sin sacrificar calidad",
    text: "Entregamos proyectos en días, no meses. Sin reuniones innecesarias ni burocracia.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.6A8.38 8.38 0 0 1 4 11.5a8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
        <path d="M8 11h.01M12 11h.01M16 11h.01" />
      </svg>
    ),
    title: "Trato directo, siempre",
    text: "Hablas con quien desarrolla. Sin cuentas, sin project managers de intermediario.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M3 3v18h18" />
        <rect x="7" y="12" width="3" height="5" rx="0.5" />
        <rect x="12.5" y="8" width="3" height="9" rx="0.5" />
        <rect x="18" y="5" width="3" height="12" rx="0.5" />
      </svg>
    ),
    title: "Resultados medibles",
    text: "Cada proyecto tiene un objetivo claro. No vendemos webs: vendemos más clientes para tu negocio.",
  },
];

// Statement dividido en palabras; las marcadas con strong:true van en gradiente.
const STATEMENT = [
  "No", "somos", "una", "agencia.",
  "No", "somos", "un", "freelancer.",
  { t: "Somos", strong: true },
  { t: "tu", strong: true },
  { t: "equipo", strong: true },
  { t: "técnico.", strong: true },
];

export default function About() {
  const root = useRef(null);

  useEffect(() => {
    if (prefersReducedMotion) {
      gsap.set(".reveal", { opacity: 1 });
      return;
    }

    const ctx = gsap.context(() => {
      gsap.set(".reveal", { opacity: 1 });

      gsap.from(".about__statement .word", {
        y: 30,
        opacity: 0,
        duration: 0.6,
        ease: "power3.out",
        stagger: 0.06,
        scrollTrigger: { trigger: ".about__statement", start: "top 80%" },
      });

      gsap.from(".about__top p", {
        y: 30,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: { trigger: ".about__top p", start: "top 85%" },
      });

      gsap.from(".pillar", {
        y: 50,
        opacity: 0,
        duration: 0.7,
        ease: "power3.out",
        stagger: 0.15,
        scrollTrigger: { trigger: ".pillars", start: "top 80%" },
      });
    }, root);

    return () => ctx.revert();
  }, []);

  return (
    <section className="bg-secondary" id="nosotros" ref={root}>
      <div className="container">
        <div className="about__top">
          <h2 className="about__statement reveal">
            {STATEMENT.map((w, i) => {
              const isObj = typeof w === "object";
              const text = isObj ? w.t : w;
              return (
                <span className="word" key={i}>
                  {isObj && w.strong ? <strong>{text}</strong> : text}{" "}
                </span>
              );
            })}
          </h2>

          <p className="reveal">
            DuoQIT nació de la convicción de que la tecnología solo tiene valor
            cuando resuelve problemas reales. Combinamos inteligencia artificial
            con desarrollo a medida para que los negocios locales y las pymes
            compitan con las mismas herramientas que las grandes empresas. Sin
            intermediarios. Con trato directo.
          </p>
        </div>

        <div className="pillars">
          {PILLARS.map((p) => (
            <article className="pillar reveal" key={p.title}>
              <div className="pillar__icon" aria-hidden="true">{p.icon}</div>
              <h3>{p.title}</h3>
              <p>{p.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
