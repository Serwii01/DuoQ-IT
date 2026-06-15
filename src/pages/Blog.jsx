import { useEffect, useMemo, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import {
  posts,
  topics,
  topicsByKey,
  readingMinutes,
  formatDate,
} from "../data/blog.js";

export default function Blog() {
  const [params, setParams] = useSearchParams();
  const activeTopic = params.get("tema") || "todos";

  // Al entrar en /blog, aseguramos arrancar arriba.
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const filtered = useMemo(() => {
    if (activeTopic === "todos") return posts;
    return posts.filter((p) => p.topic === activeTopic);
  }, [activeTopic]);

  const setTopic = (key) => {
    if (key === "todos") setParams({});
    else setParams({ tema: key });
  };

  const [featured, ...rest] = filtered;

  return (
    <main className="blog">
      <section className="blog__hero">
        <div className="container">
          <span className="eyebrow">Blog DuoQIT</span>
          <h1>
            Ideas claras sobre <span className="gradient-text">tecnología</span>
          </h1>
          <p className="lead blog__hero-lead">
            Inteligencia artificial, infraestructura, desarrollo y
            automatizaciones, explicado sin humo y pensado para negocios reales.
          </p>

          <div className="blog__filters" role="tablist" aria-label="Filtrar por tema">
            <button
              role="tab"
              aria-selected={activeTopic === "todos"}
              className={"chip" + (activeTopic === "todos" ? " is-active" : "")}
              onClick={() => setTopic("todos")}
            >
              Todos
            </button>
            {topics.map((t) => (
              <button
                key={t.key}
                role="tab"
                aria-selected={activeTopic === t.key}
                className={"chip" + (activeTopic === t.key ? " is-active" : "")}
                onClick={() => setTopic(t.key)}
              >
                {t.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="blog__list-section bg-secondary">
        <div className="container">
          {activeTopic !== "todos" && (
            <p className="blog__topic-desc">{topicsByKey[activeTopic]?.description}</p>
          )}

          {/* Artículo destacado (el más reciente del filtro) */}
          {featured && (
            <Link to={`/blog/${featured.slug}`} className="post-card post-card--featured">
              <span className="post-card__topic">
                {topicsByKey[featured.topic]?.label}
              </span>
              <h2 className="post-card__title">{featured.title}</h2>
              <p className="post-card__excerpt">{featured.excerpt}</p>
              <div className="post-card__meta">
                <span>{formatDate(featured.date)}</span>
                <span aria-hidden="true">·</span>
                <span>{readingMinutes(featured.body)} min de lectura</span>
              </div>
              <span className="link-arrow post-card__cta">
                Leer artículo <span aria-hidden="true">→</span>
              </span>
            </Link>
          )}

          {/* Resto de artículos en cuadrícula */}
          <div className="blog__grid">
            {rest.map((p) => (
              <Link key={p.slug} to={`/blog/${p.slug}`} className="post-card">
                <span className="post-card__topic">
                  {topicsByKey[p.topic]?.label}
                </span>
                <h3 className="post-card__title">{p.title}</h3>
                <p className="post-card__excerpt">{p.excerpt}</p>
                <div className="post-card__meta">
                  <span>{formatDate(p.date)}</span>
                  <span aria-hidden="true">·</span>
                  <span>{readingMinutes(p.body)} min</span>
                </div>
              </Link>
            ))}
          </div>

          <div className="blog__back">
            <Link to="/" className="link-arrow">
              ← Volver al inicio
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
