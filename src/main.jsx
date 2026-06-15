import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";

// Hojas de estilo globales (reutilizadas del proyecto original)
import "./styles/reset.css";
import "./styles/variables.css";
import "./styles/main.css";

// Marca de que el JS está activo (controla el estado inicial de .reveal)
document.documentElement.classList.add("js-ready");

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* BrowserRouter: URLs limpias (/blog). En GitHub Pages, el 404.html
        (copia del index generado) sirve la SPA en rutas directas. */}
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
