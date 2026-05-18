import React from "react";
import { Link } from "react-router-dom";
import { useLanguage } from "../context/LanguageContext";
import Seo from "../components/Seo";
import Reveal from "../components/Reveal";

const About = () => {
  const { t } = useLanguage();

  return (
    <>
      <Seo page="about" path="/about" />
      <section
        className="page-pad relative overflow-hidden"
        style={{
          background: "linear-gradient(180deg, #faf6f0 0%, #f3ece1 100%)",
          padding: "180px 28px 100px",
        }}
      >
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
          style={{
            maxWidth: 1100,
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
                {t.about.kicker}
              </span>
              <span style={{ width: 32, height: 1, background: "#ff914d" }} />
            </div>
          </Reveal>
          <Reveal delay={150}>
            <h1
              style={{
                fontFamily: "var(--font-display)",
                fontWeight: 500,
                fontSize: "clamp(52px, 7vw, 104px)",
                lineHeight: 1,
                color: "#353a40",
                letterSpacing: "-2.5px",
                margin: 0,
              }}
            >
              {t.about.hero.title}
            </h1>
          </Reveal>
          <Reveal delay={300}>
            <p
              style={{
                fontFamily: "var(--font-display)",
                fontStyle: "italic",
                fontSize: "clamp(20px, 2vw, 28px)",
                color: "#5a5248",
                marginTop: 24,
              }}
            >
              {t.about.hero.subtitle}
            </p>
          </Reveal>
        </div>
      </section>

      <section
        className="page-pad"
        style={{ background: "#faf6f0", padding: "100px 28px" }}
      >
        <div style={{ maxWidth: 880, margin: "0 auto", textAlign: "center" }}>
          <Reveal>
            <p
              style={{
                fontFamily: "var(--font-display)",
                fontStyle: "italic",
                fontSize: "clamp(28px, 3vw, 44px)",
                lineHeight: 1.35,
                color: "#353a40",
                margin: 0,
              }}
            >
              {t.about.intro.text}
            </p>
          </Reveal>
        </div>
      </section>

      <section
        className="page-pad"
        style={{ background: "#f3ece1", padding: "100px 28px" }}
      >
        <div style={{ maxWidth: 880, margin: "0 auto" }}>
          <Reveal>
            <p
              style={{
                fontFamily: "var(--font-sans)",
                fontSize: 17,
                lineHeight: 1.85,
                color: "#5a5248",
                margin: 0,
              }}
            >
              {t.about.section1.text}
            </p>
          </Reveal>
        </div>
      </section>

      <section
        className="page-pad"
        style={{ background: "#faf6f0", padding: "100px 28px" }}
      >
        <div style={{ maxWidth: 880, margin: "0 auto", textAlign: "center" }}>
          <Reveal>
            <span
              style={{
                fontFamily: "var(--font-display)",
                fontSize: 120,
                lineHeight: 0.8,
                color: "#ff914d",
                fontStyle: "italic",
                display: "block",
                marginBottom: -30,
              }}
            >
              “
            </span>
          </Reveal>
          <Reveal delay={120}>
            <blockquote
              style={{
                fontFamily: "var(--font-display)",
                fontStyle: "italic",
                fontSize: "clamp(28px, 3.4vw, 44px)",
                lineHeight: 1.3,
                color: "#353a40",
                margin: 0,
                letterSpacing: "-0.5px",
              }}
            >
              {t.about.section2.quote}
            </blockquote>
          </Reveal>
          <Reveal delay={280}>
            <p
              style={{
                fontFamily: "var(--font-sans)",
                fontSize: 17,
                lineHeight: 1.7,
                color: "#5a5248",
                marginTop: 28,
              }}
            >
              {t.about.section2.text}
            </p>
          </Reveal>
        </div>
      </section>

      <section
        className="page-pad"
        style={{ background: "#f3ece1", padding: "100px 28px" }}
      >
        <div style={{ maxWidth: 880, margin: "0 auto" }}>
          <Reveal>
            <p
              style={{
                fontFamily: "var(--font-sans)",
                fontSize: 17,
                lineHeight: 1.85,
                color: "#5a5248",
                margin: 0,
              }}
            >
              {t.about.section3.text}
            </p>
          </Reveal>
          <Reveal delay={150}>
            <p
              style={{
                fontFamily: "var(--font-sans)",
                fontSize: 17,
                lineHeight: 1.85,
                color: "#5a5248",
                marginTop: 24,
              }}
            >
              {t.about.section4.text}
            </p>
          </Reveal>
        </div>
      </section>

      <section
        className="page-pad"
        style={{ background: "#faf6f0", padding: "100px 28px" }}
      >
        <div style={{ maxWidth: 980, margin: "0 auto", textAlign: "center" }}>
          <Reveal>
            <h3
              style={{
                fontFamily: "var(--font-display)",
                fontWeight: 500,
                fontSize: "clamp(32px, 3.6vw, 48px)",
                lineHeight: 1.15,
                color: "#353a40",
                letterSpacing: "-1px",
                margin: 0,
              }}
            >
              {t.about.section5.title}
            </h3>
          </Reveal>
          <Reveal delay={150}>
            <p
              style={{
                fontFamily: "var(--font-display)",
                fontStyle: "italic",
                fontSize: "clamp(22px, 2.4vw, 32px)",
                color: "#ff914d",
                marginTop: 32,
              }}
            >
              “{t.about.section5.quote}”
            </p>
          </Reveal>
          <Reveal delay={300}>
            <p
              style={{
                fontFamily: "var(--font-sans)",
                fontSize: 18,
                lineHeight: 1.7,
                color: "#5a5248",
                marginTop: 24,
                fontWeight: 500,
              }}
            >
              {t.about.section5.text}
            </p>
          </Reveal>
        </div>
      </section>

      <section
        className="page-pad"
        style={{ background: "#f3ece1", padding: "100px 28px" }}
      >
        <div style={{ maxWidth: 880, margin: "0 auto", textAlign: "center" }}>
          <Reveal>
            <p
              style={{
                fontFamily: "var(--font-sans)",
                fontSize: 17,
                lineHeight: 1.85,
                color: "#5a5248",
                margin: 0,
              }}
            >
              {t.about.section6.text}
            </p>
          </Reveal>
          <Reveal delay={150}>
            <p
              style={{
                fontFamily: "var(--font-display)",
                fontStyle: "italic",
                fontSize: "clamp(28px, 3vw, 40px)",
                lineHeight: 1.35,
                color: "#353a40",
                marginTop: 48,
              }}
            >
              {t.about.closing.text1}
            </p>
          </Reveal>
          <Reveal delay={300}>
            <blockquote
              style={{
                fontFamily: "var(--font-display)",
                fontStyle: "italic",
                fontSize: "clamp(22px, 2.4vw, 32px)",
                color: "#ff914d",
                margin: "24px auto 0",
                maxWidth: 720,
                lineHeight: 1.4,
              }}
            >
              “{t.about.closing.quote}”
            </blockquote>
          </Reveal>
          <Reveal delay={450}>
            <Link
              to="/products"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 12,
                marginTop: 40,
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
              {t.about.closing.button}
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
          </Reveal>
        </div>
      </section>
    </>
  );
};

export default About;
