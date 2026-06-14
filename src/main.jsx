import React from "react";
import ReactDOM from "react-dom/client";
import { HashRouter } from "react-router-dom";
import App from "./App.jsx";

// Hojas de estilo globales (reutilizadas del proyecto original)
import "./styles/reset.css";
import "./styles/variables.css";
import "./styles/main.css";

// Marca de que el JS está activo (controla el estado inicial de .reveal)
document.documentElement.classList.add("js-ready");

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* HashRouter: sin configuración de servidor, perfecto para GitHub Pages */}
    <HashRouter>
      <App />
    </HashRouter>
  </React.StrictMode>
);
