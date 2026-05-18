import React, { useRef } from "react";
import { useLanguage } from "../../context/LanguageContext";
import { useParallax } from "../../hooks/useParallax";
import Reveal from "../Reveal";

export const ChapterIntro = () => {
  const { t } = useLanguage();
  const imgRef = useRef(null);
  const offset = useParallax(imgRef, 0.08);

  return (
    <section
      id="story"
      className="page-pad relative"
      style={{ background: "#faf6f0", padding: "140px 28px 100px" }}
    >
      <div style={{ maxWidth: 1280, margin: "0 auto" }}>
        <div
          className="story-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 80,
            alignItems: "center",
          }}
        >
          <Reveal>
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
                  I
                </span>
                <span
                  style={{
                    fontFamily: "var(--font-sans)",
                    fontSize: 11,
                    letterSpacing: 4,
                    textTransform: "uppercase",
                    color: "#8a7560",
                  }}
                >
                  {t.intro.kicker}
                </span>
              </div>
              <h2
                style={{
                  fontFamily: "var(--font-display)",
                  fontWeight: 500,
                  fontSize: "clamp(42px, 5vw, 72px)",
                  lineHeight: 1.02,
                  color: "#353a40",
                  letterSpacing: "-1px",
                  margin: 0,
                }}
              >
                {t.intro.title}
              </h2>
              <p
                style={{
                  fontFamily: "var(--font-sans)",
                  fontSize: 17,
                  lineHeight: 1.75,
                  color: "#5a5248",
                  marginTop: 32,
                }}
              >
                {t.intro.body}
              </p>
            </div>
          </Reveal>

          <Reveal delay={200} y={40}>
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
                src="/images/arepas-cooking.webp"
                alt="Arepas tradicionales artesanales recién hechas"
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
                  inset: 0,
                  border: "1px solid rgba(53,58,64,.08)",
                }}
              />
              <div
                style={{
                  position: "absolute",
                  bottom: 20,
                  left: 20,
                  fontFamily: "var(--font-sans)",
                  fontSize: 10,
                  letterSpacing: 3,
                  textTransform: "uppercase",
                  color: "#faf6f0",
                  textShadow: "0 1px 3px rgba(0,0,0,.4)",
                }}
              >
                {t.intro.plateLabel}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export const ChapterIdentity = () => {
  const { t } = useLanguage();
  const imgRef = useRef(null);
  const offset = useParallax(imgRef, 0.08);

  return (
    <section
      className="page-pad relative overflow-hidden"
      style={{ background: "#f3ece1", padding: "120px 28px" }}
    >
      <div style={{ maxWidth: 1280, margin: "0 auto" }}>
        <div
          className="story-grid story-grid-rev"
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1.1fr",
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
                src="/images/tibisay-nilyan.webp"
                alt="María Tibisay Gómez junto a su hija Nilyan en la cocina"
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
                  right: 20,
                  background: "rgba(250,246,240,.94)",
                  padding: "6px 12px",
                  fontFamily: "var(--font-sans)",
                  fontSize: 10,
                  letterSpacing: 2,
                  textTransform: "uppercase",
                  color: "#353a40",
                }}
              >
                {t.identity.label}
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
                  II
                </span>
                <span
                  style={{
                    fontFamily: "var(--font-sans)",
                    fontSize: 11,
                    letterSpacing: 4,
                    textTransform: "uppercase",
                    color: "#8a7560",
                  }}
                >
                  {t.identity.kicker}
                </span>
              </div>
              <h2
                style={{
                  fontFamily: "var(--font-display)",
                  fontWeight: 500,
                  fontSize: "clamp(42px, 5vw, 64px)",
                  lineHeight: 1.02,
                  color: "#353a40",
                  letterSpacing: "-1px",
                  margin: 0,
                }}
              >
                {t.identity.title}
              </h2>
              <p
                style={{
                  fontFamily: "var(--font-display)",
                  fontStyle: "italic",
                  fontSize: 22,
                  color: "#ff914d",
                  marginTop: 14,
                }}
              >
                {t.identity.subtitle}
              </p>
              <p
                style={{
                  fontFamily: "var(--font-sans)",
                  fontSize: 16,
                  lineHeight: 1.75,
                  color: "#5a5248",
                  marginTop: 24,
                }}
              >
                {t.identity.body}
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export const ChapterLearning = () => {
  const { t } = useLanguage();
  const imgRef = useRef(null);
  const offset = useParallax(imgRef, 0.08);

  return (
    <section
      className="page-pad relative"
      style={{ background: "#faf6f0", padding: "120px 28px" }}
    >
      <div style={{ maxWidth: 1280, margin: "0 auto" }}>
        <div
          className="story-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "1.1fr 1fr",
            gap: 80,
            alignItems: "center",
          }}
        >
          <Reveal>
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
                  III
                </span>
                <span
                  style={{
                    fontFamily: "var(--font-sans)",
                    fontSize: 11,
                    letterSpacing: 4,
                    textTransform: "uppercase",
                    color: "#8a7560",
                  }}
                >
                  {t.learning.kicker}
                </span>
              </div>
              <h2
                style={{
                  fontFamily: "var(--font-display)",
                  fontWeight: 500,
                  fontStyle: "italic",
                  fontSize: "clamp(42px, 5vw, 68px)",
                  lineHeight: 1.02,
                  color: "#353a40",
                  letterSpacing: "-1px",
                  margin: 0,
                }}
              >
                {t.learning.title}
              </h2>
              <p
                style={{
                  fontFamily: "var(--font-sans)",
                  fontSize: 17,
                  lineHeight: 1.75,
                  color: "#5a5248",
                  marginTop: 28,
                }}
              >
                {t.learning.body}
              </p>
            </div>
          </Reveal>

          <Reveal delay={200} y={40}>
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
                src="/images/arepas-handmade.webp"
                alt="Arepas de trigo amasadas a mano sobre la piedra"
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
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};
