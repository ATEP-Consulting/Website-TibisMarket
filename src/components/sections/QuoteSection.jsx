import React from "react";
import { useLanguage } from "../../context/LanguageContext";
import Reveal from "../Reveal";

const QuoteSection = () => {
  const { t } = useLanguage();
  return (
    <section
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
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: 900,
          height: 900,
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(255,145,77,.18), transparent 60%)",
          pointerEvents: "none",
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
          <span
            style={{
              fontFamily: "var(--font-display)",
              fontSize: 200,
              lineHeight: 0.8,
              color: "#ff914d",
              fontStyle: "italic",
              display: "block",
              marginBottom: -60,
            }}
          >
            “
          </span>
        </Reveal>
        <Reveal delay={150}>
          <blockquote
            style={{
              fontFamily: "var(--font-display)",
              fontStyle: "italic",
              fontSize: "clamp(32px, 4.4vw, 60px)",
              lineHeight: 1.25,
              fontWeight: 400,
              color: "#faf6f0",
              margin: 0,
              letterSpacing: "-0.5px",
            }}
          >
            {t.quote.text}
          </blockquote>
        </Reveal>
        <Reveal delay={400}>
          <div
            style={{
              marginTop: 48,
              display: "inline-flex",
              alignItems: "center",
              gap: 18,
            }}
          >
            <span style={{ width: 48, height: 1, background: "#ff914d" }} />
            <span
              style={{
                fontFamily: "var(--font-sans)",
                fontSize: 13,
                letterSpacing: 3,
                textTransform: "uppercase",
                color: "#ff914d",
                fontWeight: 500,
              }}
            >
              {t.quote.author}
            </span>
            <span style={{ width: 48, height: 1, background: "#ff914d" }} />
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default QuoteSection;
