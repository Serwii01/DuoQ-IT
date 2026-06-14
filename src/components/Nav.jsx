import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { useSectionNav } from "../hooks/useSectionNav";

const SECTIONS = [
  { id: "inicio", label: "Inicio" },
  { id: "servicios", label: "Servicios" },
  { id: "nosotros", label: "Nosotros" },
  { id: "contacto", label: "Contacto" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const goToSection = useSectionNav();

  // En la home, el nav se "compacta" al hacer scroll. En /blog va siempre compacto.
  const isBlog = location.pathname !== "/";

  useEffect(() => {
    if (isBlog) return;
    const onScroll = () => setScrolled(window.scrollY > 50);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [isBlog]);

  const handleSection = (id) => {
    setMenuOpen(false);
    goToSection(id);
  };

  return (
    <header className={"nav" + (scrolled || isBlog ? " scrolled" : "")}>
      <div className="container nav__inner">
        <Link to="/" className="logo" aria-label="DuoQIT, ir al inicio">
          Duo<span className="q">Q</span>IT
        </Link>

        <nav
          className={"nav__links" + (menuOpen ? " is-open" : "")}
          aria-label="Navegación principal"
        >
          {SECTIONS.map((s) => (
            <a
              key={s.id}
              href={"/#" + s.id}
              onClick={(e) => {
                e.preventDefault();
                handleSection(s.id);
              }}
            >
              {s.label}
            </a>
          ))}
          <Link to="/blog" className="nav__blog" onClick={() => setMenuOpen(false)}>
            Blog
          </Link>
        </nav>

        <button
          className={"nav__toggle" + (menuOpen ? " is-open" : "")}
          aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((v) => !v)}
        >
          <span></span><span></span><span></span>
        </button>
      </div>
    </header>
  );
}
