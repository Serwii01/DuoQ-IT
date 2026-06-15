import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import {
  getPostBySlug,
  getRelatedPosts,
  topicsByKey,
  readingMinutes,
  formatDate,
} from "../data/blog.js";

export default function BlogPost() {
  const { slug } = useParams();
  const post = getPostBySlug(slug);

  // Volver arriba al cambiar de artículo.
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!post) {
    return (
      <main className="construction">
        <div className="construction__inner">
          <span className="eyebrow is-centered">Error 404</span>
          <h1>
            Artículo <span className="gradient-text">no encontrado</span>
          </h1>
          <p>El artículo que buscas no existe o ha cambiado de dirección.</p>
          <Link to="/blog" className="link-arrow">
            ← Ver todos los artículos
          </Link>
        </div>
      </main>
    );
  }

  const topic = topicsByKey[post.topic];
  const related = getRelatedPosts(post);

  return (
    <main className="article">
      <article>
        <header className="article__header">
          <div className="container article__header-inner">
            <nav className="article__breadcrumb" aria-label="Migas de pan">
              <Link to="/blog">Blog</Link>
              <span aria-hidden="true">/</span>
              <Link to={`/blog?tema=${post.topic}`}>{topic?.label}</Link>
            </nav>
            <h1>{post.title}</h1>
            <div className="article__meta">
              <span>{post.author}</span>
              <span aria-hidden="true">·</span>
              <span>{formatDate(post.date)}</span>
              <span aria-hidden="true">·</span>
              <span>{readingMinutes(post.body)} min de lectura</span>
            </div>
          </div>
        </header>

        <div className="container article__body-wrap">
          <div
            className="article__body"
            dangerouslySetInnerHTML={{ __html: post.body }}
          />
        </div>
      </article>

      {related.length > 0 && (
        <section className="article__related bg-secondary">
          <div className="container">
            <h2 className="article__related-title">
              Más sobre <span className="gradient-text">{topic?.label}</span>
            </h2>
            <div className="blog__grid">
              {related.map((p) => (
                <Link key={p.slug} to={`/blog/${p.slug}`} className="post-card">
                  <span className="post-card__topic">{topic?.label}</span>
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
              <Link to="/blog" className="link-arrow">
                ← Ver todos los artículos
              </Link>
            </div>
          </div>
        </section>
      )}
    </main>
  );
}
