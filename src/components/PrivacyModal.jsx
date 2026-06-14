import { useEffect } from "react";
import { CONTACT_EMAIL } from "../config";

export default function PrivacyModal({ isOpen, onClose }) {
  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [isOpen, onClose]);

  return (
    <div
      className={"modal" + (isOpen ? " is-open" : "")}
      role="dialog"
      aria-modal="true"
      aria-labelledby="privacy-title"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="modal__box">
        <h3 id="privacy-title">Política de privacidad</h3>
        <p>
          En DuoQIT tratamos los datos que nos facilitas a través de este
          formulario con una única finalidad: responder a tu consulta y, si
          procede, prepararte una propuesta. No los compartimos con terceros
          ajenos a la prestación del servicio ni los usamos para publicidad no
          solicitada.
        </p>
        <p>
          Los datos se conservan el tiempo necesario para atender tu solicitud.
          Puedes solicitar el acceso, la rectificación o la eliminación de tus
          datos en cualquier momento escribiendo a{" "}
          <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>.
        </p>
        <p>
          Al enviar el formulario confirmas que has leído y aceptas este
          tratamiento de tus datos conforme al Reglamento General de Protección
          de Datos (RGPD).
        </p>
        <button className="btn btn-secondary modal__close" onClick={onClose}>
          Entendido
        </button>
      </div>
    </div>
  );
}
