import { useState } from "react";
import { FORMSPREE_ENDPOINT } from "../config";

/* Formulario mínimo de notificación del blog (Formspree + fetch). */
export default function NotifyForm() {
  const [status, setStatus] = useState({ type: null, message: "" });
  const [sending, setSending] = useState(false);

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
        setStatus({ type: "success", message: "¡Hecho! Te avisaremos cuando publiquemos." });
        form.reset();
      } else {
        setStatus({ type: "error", message: "No se pudo enviar. Inténtalo de nuevo." });
      }
    } catch {
      setStatus({ type: "error", message: "Error de conexión. Inténtalo de nuevo." });
    } finally {
      setSending(false);
    }
  };

  return (
    <form className="notify-form" action={FORMSPREE_ENDPOINT} method="POST" onSubmit={handleSubmit} noValidate>
      <input className="field" type="email" name="email" placeholder="tu@email.com" aria-label="Tu email" required />
      <button type="submit" className="btn btn-primary" aria-busy={sending}>
        <span className="btn__label">{sending ? "Enviando..." : "Avisarme"}</span>{" "}
        <span className="arrow">→</span>
      </button>
      {status.type && (
        <div className={`form__status is-visible is-${status.type}`} style={{ flexBasis: "100%" }} role="status" aria-live="polite">
          {status.message}
        </div>
      )}
    </form>
  );
}
