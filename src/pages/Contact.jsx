import React from "react";
import { useLanguage } from "../context/LanguageContext";
import Seo from "../components/Seo";
import Reveal from "../components/Reveal";
import CtaContact from "../components/sections/CtaContact";

const Contact = () => {
  const { t } = useLanguage();

  return (
    <>
      <Seo page="contact" path="/contact" />
      <section
        className="page-pad relative overflow-hidden"
        style={{
          background: "linear-gradient(180deg, #faf6f0 0%, #f3ece1 100%)",
          padding: "180px 28px 80px",
        }}
      >
        <div
          aria-hidden
          style={{
            position: "absolute",
            top: -120,
            left: -120,
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
                {t.contact.badge}
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
              {t.contact.intro.title}
            </h1>
          </Reveal>
          <Reveal delay={300}>
            <p
              style={{
                fontFamily: "var(--font-sans)",
                fontSize: 17,
                lineHeight: 1.7,
                color: "#5a5248",
                margin: "24px auto 0",
                maxWidth: 640,
              }}
            >
              {t.contact.intro.text}
            </p>
          </Reveal>
        </div>
      </section>

      <CtaContact />
    </>
  );
};

export default Contact;
