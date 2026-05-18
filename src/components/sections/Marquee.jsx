import React from "react";
import { useLanguage } from "../../context/LanguageContext";

const Marquee = () => {
  const { t } = useLanguage();
  const items = t.hero.marquee.split(" · ");
  const loop = [...items, ...items, ...items];

  return (
    <div
      style={{
        background: "#353a40",
        color: "#faf6f0",
        padding: "22px 0",
        overflow: "hidden",
        whiteSpace: "nowrap",
        position: "relative",
      }}
    >
      <div
        style={{
          display: "inline-flex",
          animation: "marquee 38s linear infinite",
          gap: 48,
        }}
      >
        {loop.map((it, i) => (
          <span
            key={i}
            className="marquee-text"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 48,
              fontFamily: "var(--font-display)",
              fontSize: 28,
              fontStyle: "italic",
              letterSpacing: "-0.2px",
            }}
          >
            {it}
            <span style={{ color: "#ff914d", fontStyle: "normal" }}>✦</span>
          </span>
        ))}
      </div>
    </div>
  );
};

export default Marquee;
