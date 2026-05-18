import React from "react";
import { useLanguage } from "../context/LanguageContext";
import Seo from "../components/Seo";

const h2Style = {
  fontFamily: "var(--font-display)",
  fontWeight: 500,
  fontSize: 28,
  color: "#353a40",
  margin: 0,
  letterSpacing: "-0.3px",
};

const pStyle = {
  fontFamily: "var(--font-sans)",
  fontSize: 16,
  lineHeight: 1.8,
  color: "#5a5248",
  marginTop: 14,
};

const strongStyle = { color: "#353a40", fontWeight: 600 };

const Terms = () => {
  const { t } = useLanguage();
  const simpleSections = [
    t.terms.sections.usage,
    t.terms.sections.products,
    t.terms.sections.orders,
    t.terms.sections.intellectual,
    t.terms.sections.liability,
    t.terms.sections.contact,
  ];

  return (
    <section
      className="page-pad"
      style={{
        background: "#faf6f0",
        padding: "180px 28px 100px",
        minHeight: "100vh",
      }}
    >
      <Seo page="terms" path="/terms" />
      <div style={{ maxWidth: 880, margin: "0 auto" }}>
        <h1
          style={{
            fontFamily: "var(--font-display)",
            fontWeight: 500,
            fontSize: "clamp(40px, 5.5vw, 72px)",
            lineHeight: 1.05,
            color: "#353a40",
            letterSpacing: "-1.5px",
            margin: 0,
          }}
        >
          {t.terms.title}
        </h1>
        <p
          style={{
            fontFamily: "var(--font-sans)",
            fontSize: 17,
            lineHeight: 1.8,
            color: "#5a5248",
            marginTop: 32,
          }}
        >
          {t.terms.intro}
        </p>

        <div style={{ marginTop: 48 }}>
          <h2 style={h2Style}>{t.terms.sections.company.title}</h2>
          <p style={pStyle}>
            <strong style={strongStyle}>{t.terms.sections.company.name}</strong>{" "}
            {t.terms.sections.company.nameValue}
          </p>
          <p style={pStyle}>
            <strong style={strongStyle}>
              {t.terms.sections.company.email}
            </strong>{" "}
            {t.terms.sections.company.emailValue}
          </p>
          <p style={pStyle}>
            <strong style={strongStyle}>
              {t.terms.sections.company.phone}
            </strong>{" "}
            {t.terms.sections.company.phoneValue}
          </p>
        </div>

        {simpleSections.map((s, i) => (
          <div key={i} style={{ marginTop: 48 }}>
            <h2 style={h2Style}>{s.title}</h2>
            <p style={pStyle}>{s.content}</p>
          </div>
        ))}

        <p
          style={{
            fontFamily: "var(--font-sans)",
            fontSize: 12,
            letterSpacing: 2,
            textTransform: "uppercase",
            color: "#8a7560",
            marginTop: 64,
            paddingTop: 32,
            borderTop: "1px solid rgba(53,58,64,.12)",
          }}
        >
          {t.terms.lastUpdate}
        </p>
      </div>
    </section>
  );
};

export default Terms;
