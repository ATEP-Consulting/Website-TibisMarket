import React from "react";
import { Link } from "react-router-dom";
import { useLanguage } from "../../context/LanguageContext";
import { T } from "../../data/nutricionStrings";
import { getOtrosProductos } from "../../data/productos";

function smallVariant(src) {
  if (!src) return null;
  const dot = src.lastIndexOf(".");
  if (dot < 0) return src;
  return `${src.slice(0, dot)}-360.webp`;
}

const RelatedProducts = ({ slugActual }) => {
  const { language } = useLanguage();
  const t = (obj) => obj[language];
  const otros = getOtrosProductos(slugActual, 3);

  return (
    <section
      style={{ padding: "32px 24px 28px" }}
      aria-labelledby="related-heading"
    >
      <h2
        id="related-heading"
        style={{
          fontFamily: "var(--font-display)",
          fontSize: 24,
          fontWeight: 500,
          margin: "0 0 4px",
          letterSpacing: "-0.02em",
          textAlign: "center",
          color: "#353a40",
        }}
      >
        {t(T.otrosSabores)}
      </h2>
      <p
        style={{
          fontSize: 12,
          color: "#8a7560",
          textAlign: "center",
          margin: "0 0 24px",
          fontStyle: "italic",
        }}
      >
        {t(T.otrosSaboresSub)}
      </p>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: 12,
        }}
      >
        {otros.map((p) => {
          const hasImage = Boolean(p.imagen);
          const thumbSrc = smallVariant(p.imagen) || p.imagen;
          return (
            <Link
              key={p.slug}
              to={`/n/${p.slug}`}
              style={{
                textAlign: "center",
                textDecoration: "none",
                color: "inherit",
              }}
            >
              <div
                style={{
                  width: 86,
                  height: 86,
                  borderRadius: "50%",
                  margin: "0 auto 10px",
                  background: hasImage ? "#fffaf0" : p.gradient,
                  overflow: "hidden",
                  boxShadow:
                    "inset -4px -6px 16px rgba(74,35,10,0.25), 0 8px 20px rgba(53,58,64,0.12)",
                }}
              >
                {hasImage && (
                  <img
                    src={thumbSrc}
                    alt={t(p.nombre)}
                    width="172"
                    height="172"
                    loading="lazy"
                    decoding="async"
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      display: "block",
                    }}
                  />
                )}
              </div>
              <div
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: 13,
                  fontWeight: 600,
                  marginBottom: 2,
                  lineHeight: 1.2,
                  color: "#353a40",
                }}
              >
                {t(p.nombre)}
              </div>
              <div
                style={{
                  fontSize: 10,
                  color: "#5a5248",
                  lineHeight: 1.3,
                }}
              >
                {t(p.tagline)}
              </div>
            </Link>
          );
        })}
      </div>
    </section>
  );
};

export default RelatedProducts;
