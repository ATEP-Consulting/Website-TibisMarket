import React from "react";
import { Link } from "react-router-dom";
import { useLanguage } from "../../context/LanguageContext";
import { T } from "../../data/nutricionStrings";

const BagIcon = () => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden
  >
    <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
    <line x1="3" y1="6" x2="21" y2="6" />
    <path d="M16 10a4 4 0 0 1-8 0" />
  </svg>
);

/**
 * Fixed bottom-right FAB so the order-online CTA stays in view at all times
 * without requiring the user to scroll to the bottom of the page.
 *
 * Positioning uses max() so on viewports wider than the centered content
 * (max-width 440px) the button hugs the right edge of the content column
 * instead of the far edge of the viewport.
 */
const FloatingOrderButton = () => {
  const { language } = useLanguage();
  const t = (obj) => obj[language];

  return (
    <Link
      to="/products"
      aria-label={t(T.fabAriaLabel)}
      style={{
        position: "fixed",
        bottom: 16,
        right: "max(16px, calc(50vw - 220px + 16px))",
        zIndex: 50,
        display: "inline-flex",
        alignItems: "center",
        gap: 8,
        padding: "12px 18px",
        borderRadius: 100,
        background: "#353a40",
        color: "#faf6f0",
        textDecoration: "none",
        fontFamily: "var(--font-sans)",
        fontSize: 14,
        fontWeight: 600,
        letterSpacing: 0.2,
        boxShadow:
          "0 14px 32px -8px rgba(53,58,64,0.55), 0 4px 10px -4px rgba(53,58,64,0.35)",
        transition: "transform .15s ease, background .25s ease",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.background = "#ff914d";
        e.currentTarget.style.transform = "translateY(-1px)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.background = "#353a40";
        e.currentTarget.style.transform = "translateY(0)";
      }}
    >
      <BagIcon />
      {t(T.fabPedir)}
    </Link>
  );
};

export default FloatingOrderButton;
