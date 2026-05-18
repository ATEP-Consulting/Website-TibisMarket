import React, { useState } from "react";
import { useLanguage } from "../../context/LanguageContext";
import { T } from "../../data/nutricionStrings";
import StorageNote from "./StorageNote";

const CookIcon = ({ type, active }) => {
  const color = active ? "#fffaf0" : "#353a40";
  const style = { width: 22, height: 22 };
  if (type === "sarten") {
    return (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke={color}
        strokeWidth="1.5"
        style={style}
        aria-hidden
      >
        <ellipse cx="10" cy="13" rx="7" ry="2.5" />
        <line x1="17" y1="12" x2="22" y2="9" />
        <line x1="17" y1="14" x2="22" y2="11" />
      </svg>
    );
  }
  if (type === "horno") {
    return (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke={color}
        strokeWidth="1.5"
        style={style}
        aria-hidden
      >
        <rect x="4" y="4" width="16" height="16" rx="1" />
        <line x1="4" y1="9" x2="20" y2="9" />
        <circle cx="8" cy="6.5" r="0.5" fill={color} />
        <circle cx="12" cy="6.5" r="0.5" fill={color} />
        <rect x="7" y="12" width="10" height="5" rx="0.5" />
      </svg>
    );
  }
  if (type === "micro") {
    return (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke={color}
        strokeWidth="1.5"
        style={style}
        aria-hidden
      >
        <rect x="3" y="5" width="18" height="14" rx="1" />
        <rect x="5" y="7" width="10" height="10" rx="0.5" />
        <line x1="17" y1="9" x2="17" y2="11" />
        <line x1="17" y1="13" x2="17" y2="15" />
      </svg>
    );
  }
  if (type === "air") {
    return (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke={color}
        strokeWidth="1.5"
        style={style}
        aria-hidden
      >
        <path d="M7 4h10l-1 3h-8z" />
        <rect x="6" y="7" width="12" height="13" rx="1.5" />
        <circle cx="12" cy="13" r="2.5" />
        <line x1="9" y1="17" x2="15" y2="17" />
      </svg>
    );
  }
  return null;
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
  const [metodo, setMetodo] = useState("sarten");
  const metodos = Object.entries(producto.preparacion);
  const metodoActual = producto.preparacion[metodo];

  return (
    <section
      style={{ padding: "28px 24px" }}
      aria-labelledby="prep-heading"
    >
      <h2
        id="prep-heading"
        style={{
          fontFamily: "var(--font-display)",
          fontSize: 11,
          textTransform: "uppercase",
          letterSpacing: "0.25em",
          fontWeight: 600,
          color: "#ff914d",
          margin: "0 0 14px",
        }}
      >
        ◆ {t(T.comoPreparar)}
      </h2>

      <div
        role="tablist"
        aria-label={t(T.comoPreparar)}
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
                letterSpacing: "0.05em",
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
