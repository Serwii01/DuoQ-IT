import { useEffect } from "react";
import { Link } from "react-router-dom";
import NotifyForm from "../components/NotifyForm.jsx";

export default function Blog() {
  // Al entrar en /blog, aseguramos arrancar arriba
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="construction">
      <div className="construction__inner">
        {/* Reloj de arena animado */}
        <div className="hourglass" aria-hidden="true">
          <svg viewBox="0 0 48 48">
            <path d="M10 4h28M10 44h28" />
            <path d="M13 4c0 10 11 14 11 20s-11 10-11 20" />
            <path d="M35 4c0 10-11 14-11 20s11 10 11 20" />
            <path className="hourglass__sand" d="M18 12h12M24 22v8" />
            <path
              className="hourglass__sand"
              d="M19 40h10c0-6-5-8-5-8s-5 2-5 8z"
              fill="currentColor"
              stroke="none"
              opacity="0.5"
            />
          </svg>
        </div>

        <span className="eyebrow is-centered">Próximamente</span>

        <h1>
          El blog está
          <br />
          <span className="gradient-text">en construcción.</span>
        </h1>

        <p>
          Aquí compartiremos consejos sobre tecnología, automatizaciones,
          presencia digital y todo lo que necesita saber un negocio moderno.
          Vuelve pronto.
        </p>

        <NotifyForm />

        <Link to="/" className="link-arrow">
          ← Volver al inicio
        </Link>
      </div>
    </main>
  );
}
