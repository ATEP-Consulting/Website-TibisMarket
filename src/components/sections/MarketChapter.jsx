import React, { useRef } from "react";
import { Link } from "react-router-dom";
import { useLanguage } from "../../context/LanguageContext";
import { useParallax } from "../../hooks/useParallax";
import Reveal from "../Reveal";

const MarketChapter = ({ ctaTo = "/products" }) => {
  const { t } = useLanguage();
  const imgRef = useRef(null);
  const offset = useParallax(imgRef, 0.1);

  return (
    <section
      id="about"
      className="page-pad relative overflow-hidden"
      style={{
        background: "#353a40",
        color: "#faf6f0",
        padding: "140px 28px",
      }}
    >
      <div
        aria-hidden
        style={{
          position: "absolute",
          top: -200,
          right: -200,
          width: 600,
          height: 600,
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(255,145,77,.18), transparent 65%)",
        }}
      />
      <div
        aria-hidden
        style={{
          position: "absolute",
          bottom: -200,
          left: -200,
          width: 600,
          height: 600,
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(255,145,77,.1), transparent 65%)",
        }}
      />

      <div style={{ maxWidth: 1280, margin: "0 auto", position: "relative" }}>
        <div
          className="story-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "1.1fr 1fr",
            gap: 80,
            alignItems: "center",
          }}
        >
          <Reveal y={40}>
            <div
              ref={imgRef}
              style={{
                position: "relative",
                aspectRatio: "4/5",
                overflow: "hidden",
                borderRadius: 4,
              }}
            >
              <img
                src="/images/market-stand.webp"
                alt="Puesto de Tibi's Market en una feria local de Miami"
                width="640"
                height="800"
                loading="lazy"
                decoding="async"
                style={{
                  position: "absolute",
                  top: -40,
                  left: 0,
                  width: "100%",
                  height: "calc(100% + 80px)",
                  objectFit: "cover",
                  transform: `translateY(${offset}px)`,
                }}
              />
              <div
                style={{
                  position: "absolute",
                  top: 20,
                  left: 20,
                  background: "rgba(53,58,64,.85)",
                  color: "#ff914d",
                  padding: "6px 12px",
                  fontFamily: "var(--font-sans)",
                  fontSize: 10,
                  letterSpacing: 2,
                  textTransform: "uppercase",
                }}
              >
                {t.market.label}
              </div>
            </div>
          </Reveal>

          <Reveal delay={150}>
            <div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 16,
                  marginBottom: 28,
                }}
              >
                <span
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: 80,
                    fontStyle: "italic",
                    color: "#ff914d",
                    lineHeight: 1,
                  }}
                >
                  IV
                </span>
                <span
                  style={{
                    fontFamily: "var(--font-sans)",
                    fontSize: 11,
                    letterSpacing: 4,
                    textTransform: "uppercase",
                    color: "rgba(250,246,240,.6)",
                  }}
                >
                  {t.market.kicker}
                </span>
              </div>
              <h2
                style={{
                  fontFamily: "var(--font-display)",
                  fontWeight: 500,
                  fontSize: "clamp(42px, 5vw, 64px)",
                  lineHeight: 1.05,
                  color: "#faf6f0",
                  letterSpacing: "-1px",
                  margin: 0,
                }}
              >
                {t.market.title}
              </h2>
              <p
                style={{
                  fontFamily: "var(--font-display)",
                  fontStyle: "italic",
                  fontSize: 24,
                  color: "#ff914d",
                  marginTop: 14,
                }}
              >
                {t.market.subtitle}
              </p>
              <div
                style={{
                  marginTop: 28,
                  display: "flex",
                  flexDirection: "column",
                  gap: 18,
                }}
              >
                {[t.market.p1, t.market.p2, t.market.p3].map((p, i) => (
                  <p
                    key={i}
                    style={{
                      fontFamily: "var(--font-sans)",
                      fontSize: 15,
                      lineHeight: 1.75,
                      color: "rgba(250,246,240,.82)",
                      margin: 0,
                    }}
                  >
                    {p}
                  </p>
                ))}
              </div>
              <Link
                to={ctaTo}
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 12,
                  marginTop: 36,
                  background: "#ff914d",
                  color: "#fff",
                  padding: "15px 26px",
                  borderRadius: 999,
                  fontFamily: "var(--font-sans)",
                  fontSize: 14,
                  fontWeight: 500,
                  letterSpacing: 0.3,
                  textDecoration: "none",
                  transition: "all .3s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-2px)";
                  e.currentTarget.style.boxShadow =
                    "0 12px 24px -8px rgba(255,145,77,.5)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow = "none";
                }}
              >
                {t.market.cta}
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
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default MarketChapter;
