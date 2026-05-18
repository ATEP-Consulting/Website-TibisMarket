import React from "react";
import { Link, Outlet } from "react-router-dom";
import LanguageToggle from "./LanguageToggle";
import { useLanguage } from "../../context/LanguageContext";
import { T } from "../../data/nutricionStrings";

const SUBTLE_GRAIN =
  "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='2' /%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.35'/%3E%3C/svg%3E\")";

const NutritionLayout = () => {
  const { language } = useLanguage();
  const t = (obj) => obj[language];

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#faf6f0",
        color: "#353a40",
        backgroundImage:
          "radial-gradient(circle at 20% 10%, rgba(255,145,77,0.07) 0%, transparent 40%), radial-gradient(circle at 80% 60%, rgba(53,58,64,0.05) 0%, transparent 50%)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div
        aria-hidden
        style={{
          position: "fixed",
          inset: 0,
          backgroundImage: SUBTLE_GRAIN,
          opacity: 0.12,
          pointerEvents: "none",
          mixBlendMode: "multiply",
          zIndex: 0,
        }}
      />

      <div
        style={{
          maxWidth: 440,
          margin: "0 auto",
          position: "relative",
          zIndex: 1,
        }}
      >
        <header
          style={{
            padding: "20px 24px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Link
            to="/"
            aria-label="Tibi's Market"
            style={{
              fontFamily: "var(--font-display)",
              fontSize: 24,
              fontWeight: 600,
              letterSpacing: "-0.02em",
              color: "#353a40",
              textDecoration: "none",
              lineHeight: 1,
            }}
          >
            Tibi's
            <span style={{ color: "#ff914d" }}>.</span>
          </Link>
          <LanguageToggle />
        </header>

        <main>
          <Outlet />
        </main>

        <footer style={{ padding: "24px 24px 40px", textAlign: "center" }}>
          <div
            aria-hidden
            style={{
              height: 1,
              background:
                "linear-gradient(90deg, transparent, rgba(53,58,64,0.2), transparent)",
              margin: "0 auto 20px",
              maxWidth: 160,
            }}
          />
          <p
            style={{
              fontFamily: "var(--font-display)",
              fontSize: 13,
              fontStyle: "italic",
              color: "#8a7560",
              margin: 0,
              lineHeight: 1.5,
            }}
          >
            {t(T.tradicion)}
          </p>
        </footer>
      </div>
    </div>
  );
};

export default NutritionLayout;
