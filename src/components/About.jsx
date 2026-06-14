import { useRef, useEffect } from "react";
import { gsap, prefersReducedMotion } from "../lib/gsap";

const PILLARS = [
  {
    icon: "⚡",
    title: "Rapidez sin sacrificar calidad",
    text: "Entregamos proyectos en días, no meses. Sin reuniones innecesarias ni burocracia.",
  },
  {
    icon: "🤝",
    title: "Trato directo, siempre",
    text: "Hablas con quien desarrolla. Sin cuentas, sin project managers de intermediario.",
  },
  {
    icon: "📊",
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
