import React from "react";
import { useLanguage } from "../../context/LanguageContext";
import { T } from "../../data/nutricionStrings";

const FillingPills = ({ sugerencias }) => {
  const { language } = useLanguage();
  const t = (obj) => obj[language];
  const items = sugerencias[language] || [];

  return (
    <section style={{ padding: "28px 24px" }} aria-labelledby="fillings-heading">
      <h2
        id="fillings-heading"
        style={{
          fontFamily: "var(--font-display)",
          fontSize: 11,
          textTransform: "uppercase",
          letterSpacing: "0.25em",
          fontWeight: 600,
          color: "#ff914d",
          margin: "0 0 12px",
        }}
      >
        ◆ {t(T.rellenosClasicos)}
      </h2>
      <p
        style={{
          fontSize: 13,
          color: "#8a7560",
          margin: "0 0 16px",
          fontStyle: "italic",
        }}
      >
        {t(T.rellenosNota)}
      </p>
      <ul
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: 8,
          listStyle: "none",
          padding: 0,
          margin: 0,
        }}
      >
        {items.map((s) => (
          <li
            key={s}
            style={{
              background: "#fffaf0",
              border: "1px solid rgba(53,58,64,0.15)",
              padding: "8px 14px",
              borderRadius: 100,
              fontSize: 13,
              fontWeight: 500,
              color: "#353a40",
            }}
          >
            {s}
          </li>
        ))}
      </ul>
    </section>
  );
};

export default FillingPills;
