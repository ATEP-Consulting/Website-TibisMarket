import React from "react";
import { useLanguage } from "../../context/LanguageContext";
import { T } from "../../data/nutricionStrings";

const StorageNote = ({ conservacion }) => {
  const { language } = useLanguage();
  const t = (obj) => obj[language];

  return (
    <div
      style={{
        marginTop: 24,
        padding: "14px 16px",
        background: "rgba(255,145,77,0.08)",
        borderLeft: "3px solid #ff914d",
        borderRadius: "0 4px 4px 0",
      }}
    >
      <div
        style={{
          fontSize: 10,
          textTransform: "uppercase",
          letterSpacing: "0.2em",
          fontWeight: 700,
          color: "#b94a2a",
          marginBottom: 6,
        }}
      >
        {t(T.conservacion)}
      </div>
      <p
        style={{
          margin: 0,
          fontSize: 13,
          lineHeight: 1.5,
          color: "#5a5248",
        }}
      >
        {t(conservacion)}
      </p>
    </div>
  );
};

export default StorageNote;
