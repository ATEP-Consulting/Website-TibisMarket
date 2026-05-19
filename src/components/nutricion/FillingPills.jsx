import React from "react";
import { useLanguage } from "../../context/LanguageContext";
import { T } from "../../data/nutricionStrings";

/**
 * For arepas: shows "Rellenos clásicos" with filling suggestions.
 * For rellenos: shows "Marida con" with pairing arepas.
 */
const FillingPills = ({ producto }) => {
  const { language } = useLanguage();
  const t = (obj) => obj[language];
  const items = producto.sugerencias[language] || [];

  const heading = producto.tipo === "relleno" ? T.maridaCon : T.rellenosClasicos;
  const note = producto.tipo === "relleno" ? T.maridaConNota : T.rellenosNota;

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
        ◆ {t(heading)}
      </h2>
      <p
        style={{
          fontSize: 13,
          color: "#5a5248",
          margin: "0 0 16px",
          fontStyle: "italic",
        }}
      >
        {t(note)}
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
