import React, { useState } from "react";
import { useLanguage } from "../../context/LanguageContext";
import { T } from "../../data/nutricionStrings";

const ChevronIcon = ({ open }) => (
  <svg
    width="14"
    height="14"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    style={{
      transition: "transform .2s ease",
      transform: open ? "rotate(180deg)" : "none",
    }}
    aria-hidden
  >
    <polyline points="6 9 12 15 18 9" />
  </svg>
);

const NutritionFacts = ({ porcion, filas }) => {
  const { language } = useLanguage();
  const t = (obj) => obj[language];
  const [open, setOpen] = useState(true);

  return (
    <section style={{ padding: "0 24px 28px" }}>
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-controls="nutrition-panel"
        style={{
          width: "100%",
          padding: "14px 16px",
          background: "transparent",
          border: "1px solid rgba(53,58,64,0.2)",
          borderRadius: 4,
          fontFamily: "var(--font-sans)",
          fontSize: 13,
          fontWeight: 600,
          color: "#353a40",
          cursor: "pointer",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          letterSpacing: "0.02em",
        }}
      >
        <span>{open ? t(T.ocultarNutricion) : t(T.verNutricion)}</span>
        <ChevronIcon open={open} />
      </button>

      {open && (
        <div
          id="nutrition-panel"
          style={{
            background: "#fffaf0",
            border: "1px solid rgba(53,58,64,0.12)",
            borderRadius: 6,
            padding: "20px 18px",
            marginTop: 12,
          }}
        >
          <h3
            style={{
              fontFamily: "var(--font-display)",
              fontSize: 22,
              fontWeight: 600,
              margin: "0 0 4px",
              color: "#353a40",
            }}
          >
            {t(T.nutricion)}
          </h3>
          <div
            style={{ fontSize: 13, color: "#8a7560", marginBottom: 14 }}
          >
            {t(T.porcion)}:{" "}
            <strong style={{ color: "#353a40" }}>{porcion}</strong>
          </div>

          <div
            aria-hidden
            style={{ borderTop: "6px solid #353a40", marginBottom: 8 }}
          />
          <div
            style={{
              display: "flex",
              justifyContent: "flex-end",
              fontSize: 11,
              textTransform: "uppercase",
              letterSpacing: "0.1em",
              fontWeight: 700,
              paddingBottom: 6,
              borderBottom: "1px solid rgba(53,58,64,0.5)",
              color: "#353a40",
            }}
          >
            {t(T.vd)}
          </div>

          <dl style={{ margin: 0 }}>
            {filas.map((n, i) => (
              <div
                key={`${n.es}-${i}`}
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  padding: "8px 0",
                  borderBottom: "1px solid rgba(53,58,64,0.12)",
                  fontSize: n.bold ? 16 : 14,
                  fontWeight: n.bold ? 700 : 500,
                  paddingLeft: n.indent ? 14 : 0,
                  color: "#353a40",
                }}
              >
                <dt style={{ margin: 0, fontWeight: "inherit" }}>
                  {n[language]}{" "}
                  <span style={{ fontWeight: n.bold ? 700 : 600 }}>{n.val}</span>
                </dt>
                <dd style={{ margin: 0, fontWeight: 700 }}>{n.dv || ""}</dd>
              </div>
            ))}
          </dl>

          <p
            style={{
              fontSize: 10,
              color: "#8a7560",
              marginTop: 12,
              marginBottom: 0,
              lineHeight: 1.4,
            }}
          >
            {t(T.vdNota)}
          </p>
        </div>
      )}
    </section>
  );
};

export default NutritionFacts;
