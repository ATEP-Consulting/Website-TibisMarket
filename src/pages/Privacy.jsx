import React from "react";
import { useLanguage } from "../context/LanguageContext";
import Seo from "../components/Seo";

const Privacy = () => {
  const { t } = useLanguage();
  const sections = [
    t.privacy.sections.collection,
    t.privacy.sections.usage,
    t.privacy.sections.security,
    t.privacy.sections.rights,
    t.privacy.sections.contact,
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
      <Seo page="privacy" path="/privacy" />
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
          {t.privacy.title}
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
          {t.privacy.intro}
        </p>

        {sections.map((s, i) => (
          <div key={i} style={{ marginTop: 48 }}>
            <h2
              style={{
                fontFamily: "var(--font-display)",
                fontWeight: 500,
                fontSize: 28,
                color: "#353a40",
                margin: 0,
                letterSpacing: "-0.3px",
              }}
            >
              {s.title}
            </h2>
            <p
              style={{
                fontFamily: "var(--font-sans)",
                fontSize: 16,
                lineHeight: 1.8,
                color: "#5a5248",
                marginTop: 14,
              }}
            >
              {s.content}
            </p>
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
          {t.privacy.lastUpdate}
        </p>
      </div>
    </section>
  );
};

export default Privacy;
