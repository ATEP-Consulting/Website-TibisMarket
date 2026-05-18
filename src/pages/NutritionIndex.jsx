import React from "react";
import { Link } from "react-router-dom";
import { useLanguage } from "../context/LanguageContext";
import { PRODUCTOS } from "../data/productos";
import { T } from "../data/nutricionStrings";

const SITE_URL = "https://www.tibismarket.com";

const NutritionIndex = () => {
  const { language } = useLanguage();
  const t = (obj) => obj[language];

  const title =
    language === "es"
      ? "Información nutricional · Tibi's Market"
      : "Nutrition information · Tibi's Market";
  const description =
    language === "es"
      ? "Información nutricional, ingredientes y preparación de las arepas artesanales Tibi's Market. Desde 1943."
      : "Nutrition facts, ingredients and preparation for Tibi's Market artisan arepas. Since 1943.";
  const url = `${SITE_URL}/nutricion`;

  return (
    <>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={`${SITE_URL}/og-image.jpg`} />

      <section style={{ padding: "8px 24px 12px", textAlign: "center" }}>
        <h1
          style={{
            fontFamily: "var(--font-display)",
            fontSize: 30,
            fontWeight: 500,
            margin: "20px 0 8px",
            letterSpacing: "-0.02em",
            color: "#353a40",
          }}
        >
          {t(T.indiceTitulo)}
        </h1>
        <p
          style={{
            fontSize: 13,
            color: "#8a7560",
            margin: "0 0 28px",
            fontStyle: "italic",
          }}
        >
          {t(T.indiceSubtitulo)}
        </p>
      </section>

      <section
        style={{
          padding: "0 24px 40px",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: 16,
        }}
      >
        {PRODUCTOS.map((p) => {
          const hasImage = Boolean(p.imagen);
          const thumbSrc =
            hasImage && p.imagen
              ? `${p.imagen.slice(0, p.imagen.lastIndexOf("."))}-360.webp`
              : p.imagen;
          return (
            <Link
              key={p.slug}
              to={`/n/${p.slug}`}
              style={{
                textDecoration: "none",
                color: "inherit",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                padding: "18px 12px",
                background: "#fffaf0",
                border: "1px solid rgba(53,58,64,0.12)",
                borderRadius: 6,
              }}
            >
              <div
                style={{
                  width: 100,
                  height: 100,
                  borderRadius: "50%",
                  marginBottom: 12,
                  background: hasImage ? "#fffaf0" : p.gradient,
                  overflow: "hidden",
                  boxShadow:
                    "inset -4px -6px 16px rgba(74,35,10,0.22), 0 8px 18px rgba(53,58,64,0.12)",
                }}
              >
                {hasImage && (
                  <img
                    src={thumbSrc}
                    alt={t(p.nombre)}
                    width="200"
                    height="200"
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
                  fontSize: 15,
                  fontWeight: 600,
                  textAlign: "center",
                  lineHeight: 1.2,
                  color: "#353a40",
                }}
              >
                {t(p.nombre)}
              </div>
              <div
                style={{
                  fontSize: 11,
                  color: "#5a5248",
                  marginTop: 4,
                  textAlign: "center",
                }}
              >
                {t(p.tagline)}
              </div>
            </Link>
          );
        })}
      </section>
    </>
  );
};

export default NutritionIndex;
