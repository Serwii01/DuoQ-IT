/* Índice del blog: metadatos de tópicos + utilidades sobre los artículos.
   Los artículos viven en src/data/posts/<topico>.js */

import { iaPosts } from "./posts/ia.js";
import { infraestructuraPosts } from "./posts/infraestructura.js";
import { desarrolloPosts } from "./posts/desarrollo.js";
import { automatizacionesPosts } from "./posts/automatizaciones.js";

// Metadatos de cada tópico (orden = orden de los filtros).
export const topics = [
  {
    key: "ia",
    label: "IA",
    title: "Inteligencia Artificial",
    description:
      "Modelos de lenguaje, asistentes como Claude y cómo aplicar la IA generativa a tu negocio con criterio.",
  },
  {
    key: "infraestructura",
    label: "Infraestructura",
    title: "Infraestructura",
    description:
      "Hosting, servidores, contenedores y copias de seguridad: los cimientos sobre los que vive tu presencia digital.",
  },
  {
    key: "desarrollo",
    label: "Desarrollo",
    title: "Desarrollo",
    description:
      "Cómo se construye software moderno: React, APIs, rendimiento y el camino de la idea a producción.",
  },
  {
    key: "automatizaciones",
    label: "Automatizaciones",
    title: "Automatizaciones",
    description:
      "Bots, asistentes como Clawbot y flujos automáticos que liberan a tu equipo del trabajo repetitivo.",
  },
];

// Todos los artículos, ordenados del más reciente al más antiguo.
export const posts = [
  ...iaPosts,
  ...infraestructuraPosts,
  ...desarrolloPosts,
  ...automatizacionesPosts,
].sort((a, b) => new Date(b.date) - new Date(a.date));

// Mapa rápido key -> metadatos del tópico.
export const topicsByKey = Object.fromEntries(topics.map((t) => [t.key, t]));

// Estima el tiempo de lectura (~200 palabras/min) a partir del HTML del cuerpo.
export function readingMinutes(html) {
  const text = String(html).replace(/<[^>]+>/g, " ");
  const words = text.trim().split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.round(words / 200));
}

// Formatea una fecha ISO a "12 de junio de 2026".
export function formatDate(iso) {
  try {
    return new Date(iso).toLocaleDateString("es-ES", {
      day: "numeric",
      month: "long",
      year: "numeric",
    });
  } catch {
    return iso;
  }
}

export function getPostBySlug(slug) {
  return posts.find((p) => p.slug === slug) || null;
}

export function getPostsByTopic(key) {
  return posts.filter((p) => p.topic === key);
}

// Artículos relacionados: mismo tópico, excluyendo el actual.
export function getRelatedPosts(post, limit = 3) {
  return posts
    .filter((p) => p.topic === post.topic && p.slug !== post.slug)
    .slice(0, limit);
}
