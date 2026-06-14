import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { scrollTo } from "../lib/smoothScroll";

import Hero from "../components/Hero.jsx";
import About from "../components/About.jsx";
import Services from "../components/Services.jsx";
import Process from "../components/Process.jsx";
import Contact from "../components/Contact.jsx";
import PrivacyModal from "../components/PrivacyModal.jsx";

export default function Home() {
  // Servicio elegido desde una card -> rellena el select del formulario
  const [selectedService, setSelectedService] = useState("");
  const [privacyOpen, setPrivacyOpen] = useState(false);
  const location = useLocation();

  // Si llegamos desde otra ruta pidiendo una sección concreta, hacemos scroll
  useEffect(() => {
    const target = location.state?.scrollTo;
    if (target) {
      // pequeño retardo para asegurar que las secciones están montadas
      const id = setTimeout(() => scrollTo("#" + target), 80);
      return () => clearTimeout(id);
    }
  }, [location.state]);

  return (
    <main>
      <Hero />
      <About />
      <Services onSelectService={setSelectedService} />
      <Process />
      <Contact
        selectedService={selectedService}
        setSelectedService={setSelectedService}
        onOpenPrivacy={() => setPrivacyOpen(true)}
      />
      <PrivacyModal isOpen={privacyOpen} onClose={() => setPrivacyOpen(false)} />
    </main>
  );
}
