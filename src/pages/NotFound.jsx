import React from "react";
import { Link } from "react-router-dom";
import { useLanguage } from "../context/LanguageContext";
import Seo from "../components/Seo";
import Reveal from "../components/Reveal";

const NotFound = () => {
  const { t } = useLanguage();

  return (
    <section
      className="page-pad relative overflow-hidden"
      style={{
        background: "linear-gradient(180deg, #faf6f0 0%, #f3ece1 100%)",
        padding: "180px 28px 100px",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Seo page="notFound" path="/" />
      <div
        aria-hidden
        style={{
          position: "absolute",
          top: -120,
          right: -120,
          width: 480,
          height: 480,
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(255,145,77,.18), transparent 70%)",
        }}
      />
      <div
        aria-hidden
        style={{
          position: "absolute",
          bottom: -160,
          left: -100,
          width: 420,
          height: 420,
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(53,58,64,.08), transparent 70%)",
        }}
      />

      <div
        style={{
          maxWidth: 720,
          margin: "0 auto",
          position: "relative",
          textAlign: "center",
        }}
      >
        <Reveal>
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 12,
              marginBottom: 24,
            }}
          >
            <span style={{ width: 32, height: 1, background: "#ff914d" }} />
            <span
              style={{
                fontFamily: "var(--font-sans)",
                fontSize: 11,
                letterSpacing: 3,
                textTransform: "uppercase",
                color: "#8a7560",
              }}
            >
              Error 404
            </span>
            <span style={{ width: 32, height: 1, background: "#ff914d" }} />
          </div>
        </Reveal>

        <Reveal delay={120}>
          <h1
            style={{
              fontFamily: "var(--font-display)",
              fontWeight: 500,
              fontStyle: "italic",
              fontSize: "clamp(120px, 22vw, 240px)",
              lineHeight: 0.9,
              color: "#ff914d",
              letterSpacing: "-6px",
              margin: 0,
            }}
          >
            404
          </h1>
        </Reveal>

        <Reveal delay={280}>
          <h2
            style={{
              fontFamily: "var(--font-display)",
              fontWeight: 500,
              fontSize: "clamp(32px, 4vw, 52px)",
              lineHeight: 1.1,
              color: "#353a40",
              letterSpacing: "-1px",
              margin: "16px 0 0",
            }}
          >
            {t.notFound.title}
          </h2>
        </Reveal>

        <Reveal delay={420}>
          <p
            style={{
              fontFamily: "var(--font-sans)",
              fontSize: 17,
              lineHeight: 1.7,
              color: "#5a5248",
              maxWidth: 520,
              margin: "24px auto 0",
            }}
          >
            {t.notFound.message}
          </p>
        </Reveal>

        <Reveal delay={560}>
          <div
            style={{
              marginTop: 40,
              display: "flex",
              gap: 14,
              flexWrap: "wrap",
              justifyContent: "center",
            }}
          >
            <Link
              to="/"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 12,
                background: "#353a40",
                color: "#faf6f0",
                padding: "16px 28px",
                borderRadius: 999,
                fontFamily: "var(--font-sans)",
                fontSize: 14,
                fontWeight: 500,
                letterSpacing: 0.3,
                textDecoration: "none",
                transition: "all .3s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "#ff914d";
                e.currentTarget.style.transform = "translateY(-2px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "#353a40";
                e.currentTarget.style.transform = "translateY(0)";
              }}
            >
              {t.notFound.homeButton}
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </Link>
            <Link
              to="/products"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 10,
                background: "transparent",
                color: "#353a40",
                padding: "16px 24px",
                borderRadius: 999,
                border: "1px solid rgba(53,58,64,.25)",
                fontFamily: "var(--font-sans)",
                fontSize: 14,
                fontWeight: 500,
                letterSpacing: 0.3,
                textDecoration: "none",
                transition: "all .25s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "rgba(53,58,64,.06)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "transparent";
              }}
            >
              {t.notFound.productsButton}
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default NotFound;
