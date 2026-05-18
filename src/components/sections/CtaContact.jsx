import React from "react";
import { useLanguage } from "../../context/LanguageContext";
import Reveal from "../Reveal";

const ICONS = {
  phone: (
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
  ),
  mail: (
    <>
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
      <polyline points="22,6 12,13 2,6" />
    </>
  ),
  pin: (
    <>
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
      <circle cx="12" cy="10" r="3" />
    </>
  ),
  ig: (
    <>
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </>
  ),
};

function ContactRow({ icon, label, value, href }) {
  const Wrap = href ? "a" : "div";
  return (
    <Wrap
      href={href}
      target={href && href.startsWith("http") ? "_blank" : undefined}
      rel={href && href.startsWith("http") ? "noopener noreferrer" : undefined}
      className="contact-row"
      style={{
        display: "flex",
        alignItems: "center",
        gap: 20,
        padding: "22px 24px",
        background: "#fff",
        borderRadius: 4,
        border: "1px solid rgba(53,58,64,.08)",
        textDecoration: "none",
        transition: "all .3s ease",
        cursor: href ? "pointer" : "default",
      }}
    >
      <span
        style={{
          width: 44,
          height: 44,
          borderRadius: "50%",
          background: "rgba(255,145,77,.12)",
          color: "#ff914d",
          display: "grid",
          placeItems: "center",
          flexShrink: 0,
        }}
      >
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          {ICONS[icon]}
        </svg>
      </span>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <span
          style={{
            fontFamily: "var(--font-sans)",
            fontSize: 10,
            letterSpacing: 2,
            textTransform: "uppercase",
            color: "#8a7560",
          }}
        >
          {label}
        </span>
        <span
          style={{
            fontFamily: "var(--font-display)",
            fontSize: 22,
            color: "#353a40",
            fontWeight: 500,
            marginTop: 2,
          }}
        >
          {value}
        </span>
      </div>
    </Wrap>
  );
}

const CtaContact = () => {
  const { t } = useLanguage();
  return (
    <section
      id="contact"
      className="page-pad relative overflow-hidden"
      style={{ background: "#faf6f0", padding: "140px 28px" }}
    >
      <div
        aria-hidden
        style={{
          position: "absolute",
          inset: 0,
          opacity: 0.04,
          pointerEvents: "none",
          backgroundImage:
            "linear-gradient(to right, #353a40 1px, transparent 1px), linear-gradient(to bottom, #353a40 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />
      <div style={{ maxWidth: 1200, margin: "0 auto", position: "relative" }}>
        <div
          className="cta-grid"
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
                  gap: 12,
                  marginBottom: 18,
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
                  {t.cta.kicker}
                </span>
              </div>
              <h2
                style={{
                  fontFamily: "var(--font-display)",
                  fontWeight: 500,
                  fontSize: "clamp(40px, 5vw, 64px)",
                  lineHeight: 1.05,
                  color: "#353a40",
                  letterSpacing: "-1.5px",
                  margin: 0,
                }}
              >
                {t.cta.title}
              </h2>
              <p
                style={{
                  fontFamily: "var(--font-sans)",
                  fontSize: 17,
                  lineHeight: 1.7,
                  color: "#5a5248",
                  marginTop: 18,
                  maxWidth: 460,
                }}
              >
                {t.cta.subtitle}
              </p>
              <div
                style={{
                  marginTop: 32,
                  display: "flex",
                  flexWrap: "wrap",
                  gap: 14,
                }}
              >
                <a
                  href="https://wa.me/13058983610"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 12,
                    background: "#25D366",
                    color: "#fff",
                    padding: "16px 24px",
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
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "translateY(0)";
                  }}
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.464 3.488" />
                  </svg>
                  {t.cta.whatsapp}
                </a>
                <a
                  href="mailto:tibismarket@gmail.com"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 12,
                    background: "transparent",
                    color: "#353a40",
                    padding: "16px 24px",
                    borderRadius: 999,
                    border: "1px solid rgba(53,58,64,.25)",
                    fontFamily: "var(--font-sans)",
                    fontSize: 14,
                    fontWeight: 500,
                    letterSpacing: 0.3,
                    textDecoration: "none",
                    transition: "all .3s ease",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = "#353a40";
                    e.currentTarget.style.color = "#faf6f0";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = "transparent";
                    e.currentTarget.style.color = "#353a40";
                  }}
                >
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                    <polyline points="22,6 12,13 2,6" />
                  </svg>
                  {t.cta.email}
                </a>
              </div>
            </div>
          </Reveal>

          <Reveal delay={150}>
            <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: 18 }}>
              <ContactRow
                icon="phone"
                label={t.contact.phone}
                value={t.contact.phoneNumber}
                href="tel:+13058983610"
              />
              <ContactRow
                icon="mail"
                label={t.contact.email}
                value={t.contact.emailAddress}
                href="mailto:tibismarket@gmail.com"
              />
              <ContactRow
                icon="pin"
                label={t.contact.location}
                value={`${t.contact.city} · USA`}
              />
              <ContactRow
                icon="ig"
                label="Instagram"
                value="@tibismarket"
                href="https://instagram.com/tibismarket"
              />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default CtaContact;
