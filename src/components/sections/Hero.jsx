import React, { useRef } from "react";
import { useLanguage } from "../../context/LanguageContext";
import { useScrollY } from "../../hooks/useScrollY";
import Reveal from "../Reveal";
import SplitReveal from "../SplitReveal";

const Hero = () => {
  const { t } = useLanguage();
  const heroRef = useRef(null);
  const y = useScrollY();
  const heroOffset = Math.min(y * 0.3, 200);

  return (
    <section
      id="top"
      ref={heroRef}
      className="relative overflow-hidden"
      style={{
        minHeight: "100vh",
        background: "linear-gradient(180deg, #faf6f0 0%, #f3ece1 100%)",
        paddingTop: 120,
        paddingBottom: 140,
      }}
    >
      <div
        aria-hidden
        style={{
          position: "absolute",
          inset: 0,
          opacity: 0.35,
          pointerEvents: "none",
          mixBlendMode: "multiply",
          background:
            "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='200' height='200'><filter id='n'><feTurbulence baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/></filter><rect width='100%25' height='100%25' filter='url(%23n)' opacity='0.35'/></svg>\")",
        }}
      />

      <div
        aria-hidden
        style={{
          position: "absolute",
          top: -120,
          right: -120,
          width: 560,
          height: 560,
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(255,145,77,.22), transparent 70%)",
          transform: `translateY(${heroOffset * 0.4}px)`,
        }}
      />
      <div
        aria-hidden
        style={{
          position: "absolute",
          bottom: -160,
          left: -100,
          width: 480,
          height: 480,
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(53,58,64,.08), transparent 70%)",
          transform: `translateY(${-heroOffset * 0.3}px)`,
        }}
      />

      <div
        className="page-pad relative mx-auto"
        style={{ maxWidth: 1400, padding: "0 28px" }}
      >
        <div
          className="hero-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "1.05fr .95fr",
            gap: 56,
            alignItems: "center",
          }}
        >
          <div>
            <Reveal delay={50}>
              <div
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 10,
                  marginBottom: 28,
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
                    fontWeight: 500,
                  }}
                >
                  {t.hero.eyebrow}
                </span>
              </div>
            </Reveal>

            <h1
              style={{
                fontFamily: "var(--font-display)",
                fontWeight: 500,
                fontSize: "clamp(56px, 8vw, 124px)",
                lineHeight: 0.95,
                color: "#353a40",
                letterSpacing: "-0.03em",
                margin: 0,
              }}
            >
              <div>
                <SplitReveal text={t.hero.title1} delay={150} />
              </div>
              <div
                style={{
                  fontStyle: "italic",
                  color: "#ff914d",
                  marginTop: 4,
                }}
              >
                <SplitReveal text={t.hero.title2} delay={400} />
              </div>
              <div style={{ marginTop: 4 }}>
                <SplitReveal text={t.hero.title3} delay={700} />
              </div>
            </h1>

            <Reveal delay={1100}>
              <p
                style={{
                  fontFamily: "var(--font-display)",
                  fontStyle: "italic",
                  fontSize: "clamp(20px, 1.8vw, 26px)",
                  color: "#5a5248",
                  marginTop: 32,
                  maxWidth: 480,
                  lineHeight: 1.4,
                }}
              >
                {t.hero.subtitle}
              </p>
            </Reveal>

            <Reveal delay={1250}>
              <p
                style={{
                  fontFamily: "var(--font-sans)",
                  fontSize: 16,
                  lineHeight: 1.7,
                  color: "#5a5248",
                  maxWidth: 460,
                  marginTop: 18,
                }}
              >
                {t.hero.description}
              </p>
            </Reveal>

            <Reveal delay={1400}>
              <div
                className="hero-cta-row"
                style={{
                  display: "flex",
                  gap: 14,
                  marginTop: 38,
                  flexWrap: "wrap",
                }}
              >
                <a
                  href="#products"
                  className="btn-hero-primary"
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
                    textDecoration: "none",
                    letterSpacing: 0.3,
                    position: "relative",
                    overflow: "hidden",
                    transition: "all .35s cubic-bezier(.22,.61,.36,1)",
                  }}
                >
                  <span>{t.hero.ctaProducts}</span>
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  >
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="12 5 19 12 12 19" />
                  </svg>
                </a>
                <a
                  href="#story"
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
                    textDecoration: "none",
                    letterSpacing: 0.3,
                    transition: "all .25s ease",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = "rgba(53,58,64,.06)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = "transparent";
                  }}
                >
                  {t.hero.ctaStory}
                </a>
              </div>
            </Reveal>
          </div>

          <div style={{ position: "relative" }}>
            <Reveal delay={400} y={40}>
              <div style={{ position: "relative" }}>
                <div
                  className="vertical-label"
                  style={{
                    position: "absolute",
                    left: -56,
                    top: 20,
                    fontFamily: "var(--font-sans)",
                    fontSize: 11,
                    letterSpacing: 5,
                    textTransform: "uppercase",
                    color: "#8a7560",
                  }}
                >
                  {t.hero.portraitLabel}
                </div>

                <div
                  style={{
                    position: "relative",
                    borderRadius: 4,
                    overflow: "hidden",
                    aspectRatio: "4/5",
                    boxShadow: "0 40px 80px -20px rgba(53,58,64,.35)",
                    transform: `translateY(${-heroOffset * 0.15}px)`,
                  }}
                >
                  <img
                    src="/images/tibisay.webp"
                    alt="Retrato de María Tibisay Gómez, fundadora de Tibi's Market"
                    width="640"
                    height="800"
                    fetchPriority="high"
                    loading="eager"
                    decoding="async"
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      filter: "saturate(.95) contrast(1.02)",
                    }}
                  />
                  <div
                    style={{
                      position: "absolute",
                      inset: 0,
                      background:
                        "linear-gradient(180deg, transparent 50%, rgba(53,58,64,.25))",
                    }}
                  />
                </div>

                <div
                  className="badge-1943"
                  style={{
                    position: "absolute",
                    bottom: -28,
                    left: -28,
                    width: 140,
                    height: 140,
                    borderRadius: "50%",
                    background: "#ff914d",
                    color: "#fff",
                    display: "grid",
                    placeItems: "center",
                    boxShadow: "0 20px 40px -10px rgba(255,145,77,.5)",
                    animation: "spinSlow 30s linear infinite",
                  }}
                >
                  <svg
                    viewBox="0 0 140 140"
                    width="140"
                    height="140"
                    style={{ position: "absolute", inset: 0 }}
                  >
                    <defs>
                      <path
                        id="circlePath"
                        d="M 70, 70 m -52, 0 a 52,52 0 1,1 104,0 a 52,52 0 1,1 -104,0"
                      />
                    </defs>
                    <text
                      fill="#faf6f0"
                      style={{
                        fontFamily: "var(--font-sans)",
                        fontSize: 9,
                        textTransform: "uppercase",
                        fontWeight: 500,
                      }}
                    >
                      <textPath
                        href="#circlePath"
                        startOffset="0"
                        textLength="318"
                        lengthAdjust="spacing"
                      >
                        HANDMADE · ARTISAN · MIAMI · +200 YEARS ·
                      </textPath>
                    </text>
                  </svg>
                  <span
                    className="badge-1943-year"
                    style={{
                      fontFamily: "var(--font-display)",
                      fontSize: 36,
                      fontStyle: "italic",
                      lineHeight: 1,
                      position: "relative",
                      zIndex: 1,
                    }}
                  >
                    Tibi's
                  </span>
                </div>

                <div
                  className="floating-tag"
                  style={{
                    position: "absolute",
                    top: 24,
                    right: -24,
                    background: "#faf6f0",
                    padding: "12px 18px",
                    borderRadius: 4,
                    boxShadow: "0 12px 24px -6px rgba(53,58,64,.25)",
                    fontFamily: "var(--font-sans)",
                    fontSize: 11,
                    display: "flex",
                    alignItems: "center",
                    gap: 10,
                  }}
                >
                  <span
                    style={{
                      width: 8,
                      height: 8,
                      borderRadius: "50%",
                      background: "#10b981",
                    }}
                  />
                  <span style={{ color: "#353a40", fontWeight: 500 }}>
                    {t.hero.shippingTag}
                  </span>
                </div>

                <div
                  className="heritage-card"
                  style={{
                    position: "absolute",
                    bottom: 80,
                    right: -32,
                    background: "#faf6f0",
                    padding: "14px 20px",
                    borderRadius: 4,
                    boxShadow: "0 16px 32px -8px rgba(53,58,64,.28)",
                    display: "flex",
                    alignItems: "center",
                    gap: 14,
                    maxWidth: 220,
                  }}
                >
                  <span
                    style={{
                      fontFamily: "var(--font-display)",
                      fontStyle: "italic",
                      fontSize: 36,
                      fontWeight: 500,
                      color: "#ff914d",
                      lineHeight: 1,
                      letterSpacing: "-1px",
                    }}
                  >
                    {t.hero.heritage.num}
                  </span>
                  <span
                    aria-hidden
                    style={{
                      width: 1,
                      height: 32,
                      background: "rgba(53,58,64,.18)",
                    }}
                  />
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      lineHeight: 1.25,
                    }}
                  >
                    <span
                      style={{
                        fontFamily: "var(--font-sans)",
                        fontSize: 12,
                        fontWeight: 600,
                        color: "#353a40",
                      }}
                    >
                      {t.hero.heritage.label}
                    </span>
                    <span
                      style={{
                        fontFamily: "var(--font-sans)",
                        fontSize: 9,
                        letterSpacing: 2,
                        textTransform: "uppercase",
                        color: "#8a7560",
                        marginTop: 3,
                      }}
                    >
                      {t.hero.heritage.sublabel}
                    </span>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>

        <Reveal delay={1500}>
          <div
            className="hero-stats"
            style={{
              marginTop: 80,
              paddingTop: 32,
              borderTop: "1px solid rgba(53,58,64,.12)",
              display: "grid",
              gridTemplateColumns: "repeat(4, 1fr)",
              gap: 24,
            }}
          >
            {[t.hero.stat1, t.hero.stat2, t.hero.stat3, t.hero.stat4].map(
              (s, i) => (
                <div
                  key={i}
                  style={{ display: "flex", flexDirection: "column" }}
                >
                  <span
                    className="hero-stat-num"
                    style={{
                      fontFamily: "var(--font-display)",
                      fontSize: 44,
                      fontWeight: 500,
                      color: "#353a40",
                      lineHeight: 1,
                      letterSpacing: "-1px",
                    }}
                  >
                    {s.num}
                  </span>
                  <span
                    style={{
                      fontFamily: "var(--font-sans)",
                      fontSize: 11,
                      letterSpacing: 2,
                      textTransform: "uppercase",
                      color: "#8a7560",
                      marginTop: 10,
                    }}
                  >
                    {s.label}
                  </span>
                </div>
              ),
            )}
          </div>
        </Reveal>
      </div>

      <div
        className="scroll-cue"
        style={{
          position: "absolute",
          bottom: 32,
          left: "50%",
          transform: "translateX(-50%)",
          fontFamily: "var(--font-sans)",
          fontSize: 10,
          letterSpacing: 4,
          textTransform: "uppercase",
          color: "#8a7560",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 12,
          pointerEvents: "none",
        }}
      >
        {t.hero.scrollLabel}
        <span
          style={{
            width: 1,
            height: 32,
            background: "#8a7560",
            animation: "scrollLine 2s ease-in-out infinite",
          }}
        />
      </div>
    </section>
  );
};

export default Hero;
