import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// base: "./" => rutas de assets relativas. Funciona tanto en GitHub Pages
// de proyecto (serwii01.github.io/DuoQ-IT/) como con dominio propio (duoqit.com).
export default defineConfig({
  base: "./",
  plugins: [react()],
});
