import { scrollTo } from "../lib/smoothScroll";

/* Tarjeta de un servicio. Al pulsar el CTA, comunica el servicio
   seleccionado al formulario (onSelect) y hace scroll a #contacto. */
export default function ServiceCard({ service, onSelect }) {
  const handleCta = (e) => {
    e.preventDefault();
    onSelect(service.value);
    scrollTo("#contacto");
  };

  return (
    <article className="service-card reveal">
      <span className="service-card__num">{service.num}</span>
      <div className="service-card__icon">{service.icon}</div>
      <h3>{service.title}</h3>
      <p className="service-card__desc">{service.desc}</p>
      <ul className="service-card__points">
        {service.points.map((pt, i) => (
          <li key={i}>{pt}</li>
        ))}
      </ul>
      <a href="#contacto" className="link-arrow" onClick={handleCta}>
        {service.cta} →
      </a>
    </article>
  );
}
