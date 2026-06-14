import { useNavigate, useLocation } from "react-router-dom";
import { scrollTo } from "../lib/smoothScroll";

/* Devuelve una función para navegar a una sección (#id) de la home.
   Si estamos en otra ruta (ej. /blog), primero navega a "/" y deja
   la instrucción de scroll en el state para que Home la ejecute. */
export function useSectionNav() {
  const navigate = useNavigate();
  const location = useLocation();

  return function goToSection(id) {
    if (location.pathname !== "/") {
      navigate("/", { state: { scrollTo: id } });
    } else {
      scrollTo("#" + id);
    }
  };
}
