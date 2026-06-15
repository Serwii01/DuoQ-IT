import { useRef, useEffect, useState } from "react";
import { gsap, prefersReducedMotion } from "../lib/gsap";
import { FORMSPREE_ENDPOINT, WHATSAPP_NUMBERS, CONTACT_EMAIL } from "../config";

const SERVICE_OPTIONS = [
  "Desarrollo Web",
  "Automatizaciones con IA",
  "Bot WhatsApp / Telegram",
  "SEO y Visibilidad en Google",
  "Hosting Gestionado",
  "Desarrollo de Software",
  "No sé, necesito consejo",
];

export default function Contact({ selectedService, setSelectedService, onOpenPrivacy }) {
  const root = useRef(null);
  const [status, setStatus] = useState({ type: null, message: "" }); // success | error
  const [sending, setSending] = useState(false);

  // Animaciones de entrada
  useEffect(() => {
    if (prefersReducedMotion) return;
    const ctx = gsap.context(() => {
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
    }, root);
    return () => ctx.revert();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    let action = form.getAttribute("action") || FORMSPREE_ENDPOINT;
    if (action.includes("XXXXXXXX")) action = FORMSPREE_ENDPOINT;

    setSending(true);
    setStatus({ type: null, message: "" });

    try {
      const res = await fetch(action, {
        method: "POST",
        body: new FormData(form),
        headers: { Accept: "application/json" },
      });
      if (res.ok) {
        setStatus({
          type: "success",
          message: "¡Mensaje enviado! Te responderemos en menos de 24 horas.",
        });
        form.reset();
        setSelectedService("");
      } else {
        const data = await res.json().catch(() => ({}));
        const msg = data?.errors
          ? data.errors.map((er) => er.message).join(" ")
          : "No se pudo enviar el formulario. Inténtalo de nuevo.";
        setStatus({ type: "error", message: msg });
      }
    } catch {
      setStatus({
        type: "error",
        message: "Error de conexión. Revisa tu red e inténtalo de nuevo.",
      });
    } finally {
      setSending(false);
    }
  };

  return (
    <section id="contacto" ref={root}>
      <div className="container contact__grid">
        <div className="contact__copy">
          <span className="eyebrow">Hablemos</span>
          <h2>
            ¿Listo para <span className="gradient-text">empezar?</span>
          </h2>
          <p className="lead">
            Cuéntanos qué necesitas. Sin compromisos, sin ventas agresivas. Solo
            una conversación para ver si podemos ayudarte.
          </p>
          <p className="contact__note">Respuesta en menos de 24 horas.</p>

          <ul className="contact__info">
            <li>
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <rect x="3" y="5" width="18" height="14" rx="2" />
                <path d="M3 7l9 6 9-6" />
              </svg>
              <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>
            </li>
            {WHATSAPP_NUMBERS.map((w) => (
              <li key={w.number}>
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M21 11.5a8.38 8.38 0 0 1-8.5 8.5 8.5 8.5 0 0 1-3.9-.9L3 21l1.9-5.6A8.5 8.5 0 0 1 12.5 3 8.38 8.38 0 0 1 21 11.5z" />
                </svg>
                <a
                  href={`https://wa.me/${w.number}`}
                  target="_blank"
                  rel="noopener"
                >
                  WhatsApp {w.label}
                </a>
              </li>
            ))}
            <li>
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M21 10c0 6-9 12-9 12s-9-6-9-12a9 9 0 0 1 18 0z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
              <span>Sevilla · Trabajo remoto en toda España</span>
            </li>
          </ul>
        </div>

        <form className="form" action={FORMSPREE_ENDPOINT} method="POST" onSubmit={handleSubmit} noValidate>
          <div className="form__row">
            <label htmlFor="name">Nombre completo <span className="req">*</span></label>
            <input className="field" type="text" id="name" name="name" placeholder="Tu nombre" required />
          </div>

          <div className="form__row">
            <label htmlFor="email">Email <span className="req">*</span></label>
            <input className="field" type="email" id="email" name="email" placeholder="tu@email.com" required />
          </div>

          <div className="form__row">
            <label htmlFor="phone">Teléfono (opcional)</label>
            <input className="field" type="tel" id="phone" name="phone" placeholder="+34 000 000 000" />
          </div>

          <div className="form__row">
            <label htmlFor="service">¿En qué podemos ayudarte?</label>
            <select
              className="field"
              id="service"
              name="service"
              value={selectedService}
              onChange={(e) => setSelectedService(e.target.value)}
            >
              <option value="" disabled>Selecciona un servicio...</option>
              {SERVICE_OPTIONS.map((opt) => (
                <option key={opt} value={opt}>{opt}</option>
              ))}
            </select>
          </div>

          <div className="form__row">
            <label htmlFor="message">Cuéntanos más <span className="req">*</span></label>
            <textarea
              className="field"
              id="message"
              name="message"
              rows="4"
              placeholder="Describe brevemente tu proyecto o lo que necesitas. Cuanta más info, mejor podremos ayudarte."
              required
            ></textarea>
          </div>

          <label className="form__check">
            <input type="checkbox" name="privacy" required />
            <span>
              He leído y acepto la{" "}
              <a href="#" onClick={(e) => { e.preventDefault(); onOpenPrivacy(); }}>
                política de privacidad
              </a>.
            </span>
          </label>

          <button type="submit" className="btn btn-primary btn-block" aria-busy={sending}>
            <span className="btn__label">{sending ? "Enviando..." : "Enviar mensaje"}</span>{" "}
            <span className="arrow">→</span>
          </button>

          {status.type && (
            <div className={`form__status is-visible is-${status.type}`} role="status" aria-live="polite">
              {status.message}
            </div>
          )}
        </form>
      </div>
    </section>
  );
}
