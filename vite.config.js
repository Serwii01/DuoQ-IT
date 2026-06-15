import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import fs from "node:fs";
import path from "node:path";

// Genera un 404.html idéntico al index.html compilado. GitHub Pages sirve ese
// 404.html cuando se entra directo a una ruta de la SPA (p. ej. /blog), de modo
// que React Router carga y muestra la página correcta con la URL limpia (sin #).
function spaFallback() {
  return {
    name: "spa-404-fallback",
    apply: "build",
    writeBundle(options) {
      const outDir = options.dir || "dist";
      const index = path.join(outDir, "index.html");
      const notFound = path.join(outDir, "404.html");
      if (fs.existsSync(index)) {
        fs.copyFileSync(index, notFound);
      }
    },
  };
}

// base: "/" => dominio propio en la raíz (duoq.es). Rutas de assets absolutas,
// necesarias para que las rutas anidadas (/blog/:slug) carguen los assets.
export default defineConfig({
  base: "/",
  plugins: [react(), spaFallback()],
});
