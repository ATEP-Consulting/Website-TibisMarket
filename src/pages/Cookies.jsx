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

const Cookies = () => {
  const { t } = useLanguage();

  return (
    <section
      className="page-pad"
      style={{
        background: "#faf6f0",
        padding: "180px 28px 100px",
        minHeight: "100vh",
      }}
    >
      <Seo page="cookies" path="/cookies" />
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
          {t.cookies.title}
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
          {t.cookies.intro}
        </p>

        <div style={{ marginTop: 48 }}>
          <h2 style={h2Style}>{t.cookies.sections.what.title}</h2>
          <p style={pStyle}>{t.cookies.sections.what.content}</p>
        </div>

        <div style={{ marginTop: 48 }}>
          <h2 style={h2Style}>{t.cookies.sections.types.title}</h2>
          <p style={pStyle}>
            <strong style={{ color: "#353a40", fontWeight: 600 }}>
              {t.cookies.sections.types.essential.title}
            </strong>{" "}
            {t.cookies.sections.types.essential.content}
          </p>
          <p style={pStyle}>
            <strong style={{ color: "#353a40", fontWeight: 600 }}>
              {t.cookies.sections.types.functional.title}
            </strong>{" "}
            {t.cookies.sections.types.functional.content}
          </p>
        </div>

        <div style={{ marginTop: 48 }}>
          <h2 style={h2Style}>{t.cookies.sections.management.title}</h2>
          <p style={pStyle}>{t.cookies.sections.management.content}</p>
        </div>

        <div style={{ marginTop: 48 }}>
          <h2 style={h2Style}>{t.cookies.sections.moreInfo.title}</h2>
          <p style={pStyle}>{t.cookies.sections.moreInfo.content}</p>
        </div>

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
          {t.cookies.lastUpdate}
        </p>
      </div>
    </section>
  );
};

export default Cookies;
