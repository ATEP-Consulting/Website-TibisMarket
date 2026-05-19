import React, { useState } from "react";
import { useLanguage } from "../../context/LanguageContext";
import { T } from "../../data/nutricionStrings";
import StorageNote from "./StorageNote";
import SectionHeading from "./SectionHeading";

const ICON_STYLE = { width: 22, height: 22 };

/**
 * Inline SVG iconset for preparation/serving methods. Add new ids here when
 * a product references one (the `icon` field in productos.js).
 */
const CookIcon = ({ type, active }) => {
  const color = active ? "#fffaf0" : "#353a40";
  const sw = 1.5;
  switch (type) {
    case "sarten":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={sw} style={ICON_STYLE} aria-hidden>
          <ellipse cx="10" cy="13" rx="7" ry="2.5" />
          <line x1="17" y1="12" x2="22" y2="9" />
          <line x1="17" y1="14" x2="22" y2="11" />
        </svg>
      );
    case "horno":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={sw} style={ICON_STYLE} aria-hidden>
          <rect x="4" y="4" width="16" height="16" rx="1" />
          <line x1="4" y1="9" x2="20" y2="9" />
          <circle cx="8" cy="6.5" r="0.5" fill={color} />
          <circle cx="12" cy="6.5" r="0.5" fill={color} />
          <rect x="7" y="12" width="10" height="5" rx="0.5" />
        </svg>
      );
    case "micro":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={sw} style={ICON_STYLE} aria-hidden>
          <rect x="3" y="5" width="18" height="14" rx="1" />
          <rect x="5" y="7" width="10" height="10" rx="0.5" />
          <line x1="17" y1="9" x2="17" y2="11" />
          <line x1="17" y1="13" x2="17" y2="15" />
        </svg>
      );
    case "air":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={sw} style={ICON_STYLE} aria-hidden>
          <path d="M7 4h10l-1 3h-8z" />
          <rect x="6" y="7" width="12" height="13" rx="1.5" />
          <circle cx="12" cy="13" r="2.5" />
          <line x1="9" y1="17" x2="15" y2="17" />
        </svg>
      );
    case "fridge":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={sw} style={ICON_STYLE} aria-hidden>
          <rect x="6" y="3" width="12" height="18" rx="1.5" />
          <line x1="6" y1="10" x2="18" y2="10" />
          <line x1="9" y1="6.5" x2="9" y2="8" />
          <line x1="9" y1="12.5" x2="9" y2="14" />
        </svg>
      );
    case "pot":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={sw} style={ICON_STYLE} aria-hidden>
          <path d="M4 10h16l-1 9a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2L4 10z" />
          <line x1="3" y1="10" x2="2" y2="9" />
          <line x1="21" y1="10" x2="22" y2="9" />
          <path d="M9 7c0-1.5 1.5-1.5 1.5-3" />
          <path d="M13.5 7c0-1.5 1.5-1.5 1.5-3" />
        </svg>
      );
    case "snow":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={sw} style={ICON_STYLE} aria-hidden>
          <line x1="12" y1="3" x2="12" y2="21" />
          <line x1="3" y1="12" x2="21" y2="12" />
          <line x1="6" y1="6" x2="18" y2="18" />
          <line x1="18" y1="6" x2="6" y2="18" />
        </svg>
      );
    case "spread":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={sw} style={ICON_STYLE} aria-hidden>
          <path d="M3 21 L18 6" />
          <path d="M14 3 L21 3 L21 10" />
          <path d="M4 16 L8 20" />
        </svg>
      );
    case "bowl":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={sw} style={ICON_STYLE} aria-hidden>
          <path d="M3 12 a9 4 0 0 0 18 0" />
          <line x1="3" y1="12" x2="21" y2="12" />
          <path d="M9 7 q1 -2 3 -2 q2 0 3 2" />
        </svg>
      );
    default:
      return null;
  }
};

const ClockIcon = () => (
  <svg
    width="14"
    height="14"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden
  >
    <circle cx="12" cy="12" r="9" />
    <polyline points="12 7 12 12 15 14" />
  </svg>
);

const PreparationTabs = ({ producto }) => {
  const { language } = useLanguage();
  const t = (obj) => obj[language];
  const metodos = Object.entries(producto.preparacion);
  const firstKey = metodos[0]?.[0];
  const [metodo, setMetodo] = useState(firstKey);
  const metodoActual = producto.preparacion[metodo] || producto.preparacion[firstKey];

  // Arepas → "Cómo preparar". Rellenos → "Cómo servir".
  const heading = producto.tipo === "relleno" ? T.comoServir : T.comoPreparar;

  return (
    <section style={{ padding: "28px 24px" }} aria-labelledby="prep-heading">
      <SectionHeading id="prep-heading">{t(heading)}</SectionHeading>

      <div
        role="tablist"
        aria-label={t(heading)}
        style={{ display: "flex", marginBottom: 20 }}
      >
        {metodos.map(([key, m], idx) => {
          const isActive = metodo === key;
          const isFirst = idx === 0;
          const isLast = idx === metodos.length - 1;
          return (
            <button
              key={key}
              role="tab"
              type="button"
              aria-selected={isActive}
              aria-controls={`tabpanel-${key}`}
              id={`tab-${key}`}
              onClick={() => setMetodo(key)}
              style={{
                flex: 1,
                padding: "12px 6px",
                background: isActive ? "#353a40" : "transparent",
                color: isActive ? "#fffaf0" : "#353a40",
                border: "1px solid rgba(53,58,64,0.18)",
                borderRight: isLast ? "1px solid rgba(53,58,64,0.18)" : "none",
                borderRadius: isFirst
                  ? "4px 0 0 4px"
                  : isLast
                    ? "0 4px 4px 0"
                    : 0,
                cursor: "pointer",
                fontFamily: "var(--font-sans)",
                fontSize: 11,
                fontWeight: 600,
                letterSpacing: "0.03em",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: 4,
                transition: "background .2s ease, color .2s ease",
              }}
            >
              <CookIcon type={m.icon} active={isActive} />
              <span>{t(m.label)}</span>
            </button>
          );
        })}
      </div>

      <div
        role="tabpanel"
        id={`tabpanel-${metodo}`}
        aria-labelledby={`tab-${metodo}`}
      >
        <div style={{ marginBottom: 16 }}>
          <span
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 6,
              background: "#fff1e8",
              color: "#b94a2a",
              padding: "6px 14px",
              borderRadius: 100,
              fontSize: 13,
              fontWeight: 600,
            }}
          >
            <ClockIcon />
            {t(T.tiempo)}:{" "}
            <strong style={{ fontWeight: 700 }}>{t(metodoActual.tiempo)}</strong>
          </span>
        </div>

        <ol
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 14,
            margin: 0,
            padding: 0,
            listStyle: "none",
          }}
        >
          {metodoActual.pasos[language].map((paso, i) => (
            <li
              key={i}
              style={{
                display: "flex",
                gap: 14,
                alignItems: "flex-start",
              }}
            >
              <span
                aria-hidden
                style={{
                  background: "#ff914d",
                  color: "#fffaf0",
                  width: 26,
                  height: 26,
                  borderRadius: "50%",
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: 13,
                  fontWeight: 700,
                  flexShrink: 0,
                  fontFamily: "var(--font-display)",
                  lineHeight: 1,
                }}
              >
                {i + 1}
              </span>
              <p
                style={{
                  margin: 0,
                  fontSize: 15,
                  lineHeight: 1.5,
                  flex: 1,
                  paddingTop: 3,
                  color: "#353a40",
                }}
              >
                {paso}
              </p>
            </li>
          ))}
        </ol>
      </div>

      <StorageNote conservacion={producto.conservacion} />
    </section>
  );
};

export default PreparationTabs;
