import React from "react";
import { useLanguage } from "../../context/LanguageContext";
import { T } from "../../data/nutricionStrings";

const IngredientsBlock = ({ ingredientes, alergenos }) => {
  const { language } = useLanguage();
  const t = (obj) => obj[language];
  const tags = alergenos[language] || [];

  return (
    <section
      style={{ padding: "28px 24px" }}
      aria-labelledby="ingredients-heading"
    >
      <h2
        id="ingredients-heading"
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
        ◆ {t(T.ingredientes)}
      </h2>
      <p
        style={{
          fontSize: 15,
          lineHeight: 1.6,
          margin: 0,
          color: "#353a40",
        }}
      >
        {t(ingredientes)}
      </p>
      {tags.length > 0 && (
        <div
          style={{
            marginTop: 16,
            display: "flex",
            flexWrap: "wrap",
            gap: 8,
            alignItems: "center",
          }}
        >
          <span
            style={{
              fontSize: 11,
              textTransform: "uppercase",
              letterSpacing: "0.15em",
              color: "#8a7560",
              fontWeight: 600,
              marginRight: 4,
            }}
          >
            {t(T.alergenos)}:
          </span>
          {tags.map((a) => (
            <span
              key={a}
              style={{
                background: "#fff1e8",
                color: "#b94a2a",
                border: "1px solid #f4c7a8",
                fontWeight: 500,
                fontSize: 12,
                padding: "4px 10px",
                borderRadius: 2,
              }}
            >
              {a}
            </span>
          ))}
        </div>
      )}
    </section>
  );
};

export default IngredientsBlock;
