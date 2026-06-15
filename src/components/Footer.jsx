import { Link } from "react-router-dom";
import { useSectionNav } from "../hooks/useSectionNav";

const LINKS = [
  { id: "inicio", label: "Inicio" },
  { id: "nosotros", label: "Nosotros" },
  { id: "servicios", label: "Servicios" },
  { id: "contacto", label: "Contacto" },
];

export default function Footer() {
  const goToSection = useSectionNav();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__top">
          <Link to="/" className="logo">
            Duo<span className="q">Q</span>IT
          </Link>
          <nav className="footer__links" aria-label="Enlaces de pie de página">
            {LINKS.map((l) => (
              <a
                key={l.id}
                href={"/#" + l.id}
                onClick={(e) => {
                  e.preventDefault();
                  goToSection(l.id);
                }}
              >
                {l.label}
              </a>
            ))}
            <Link to="/blog">Blog</Link>
          </nav>
        </div>
        <div className="footer__bottom">
          <span>© {new Date().getFullYear()} DuoQIT. Tecnología con alma humana.</span>
          <a
            href="/#contacto"
            onClick={(e) => {
              e.preventDefault();
              goToSection("contacto");
            }}
          >
            Contacto
          </a>
        </div>
      </div>
    </footer>
  );
}
