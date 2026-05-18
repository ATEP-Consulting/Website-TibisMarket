import React from "react";
import { useLanguage } from "../../context/LanguageContext";

const LanguageToggle = () => {
  const { language, toggleLanguage } = useLanguage();
  const baseBtn = {
    background: "none",
    border: "none",
    cursor: "pointer",
    padding: 0,
    fontWeight: 600,
    letterSpacing: "0.08em",
    fontFamily: "var(--font-sans)",
    fontSize: 13,
    lineHeight: 1,
  };
  const active = { color: "#ff914d" };
  const inactive = { color: "#8a7560", opacity: 0.6 };

  const setLang = (next) => {
    if (next !== language) toggleLanguage();
  };

  return (
    <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
      <button
        type="button"
        onClick={() => setLang("es")}
        aria-pressed={language === "es"}
        aria-label="Cambiar a español"
        style={{ ...baseBtn, ...(language === "es" ? active : inactive) }}
      >
        ES
      </button>
      <span aria-hidden style={{ color: "#8a7560", opacity: 0.4 }}>
        |
      </span>
      <button
        type="button"
        onClick={() => setLang("en")}
        aria-pressed={language === "en"}
        aria-label="Switch to English"
        style={{ ...baseBtn, ...(language === "en" ? active : inactive) }}
      >
        EN
      </button>
    </div>
  );
};

export default LanguageToggle;
