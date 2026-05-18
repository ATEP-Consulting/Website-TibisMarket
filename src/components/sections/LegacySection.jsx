import React from "react";
import { useLanguage } from "../../context/LanguageContext";
import Reveal from "../Reveal";

const LegacySection = () => {
  const { t } = useLanguage();
  return (
    <section
      className="page-pad"
      style={{ background: "#faf6f0", padding: "140px 28px" }}
    >
      <div style={{ maxWidth: 980, margin: "0 auto", textAlign: "center" }}>
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
            {t.legacy.line1}
          </p>
        </Reveal>
        <Reveal delay={200}>
          <p
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(28px, 3vw, 44px)",
              lineHeight: 1.35,
              color: "#ff914d",
              margin: "16px 0 0",
              fontWeight: 500,
            }}
          >
            {t.legacy.line2}
          </p>
        </Reveal>
        <Reveal delay={400}>
          <div
            style={{
              marginTop: 48,
              paddingTop: 48,
              borderTop: "1px solid rgba(53,58,64,.15)",
            }}
          >
            <p
              style={{
                fontFamily: "var(--font-sans)",
                fontSize: 18,
                lineHeight: 1.75,
                color: "#5a5248",
                margin: 0,
                maxWidth: 760,
                marginLeft: "auto",
                marginRight: "auto",
              }}
            >
              {t.legacy.body}
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default LegacySection;
