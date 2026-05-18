import React from "react";
import { Link } from "react-router-dom";
import { useLanguage } from "../context/LanguageContext";

const Footer = () => {
  const { t } = useLanguage();
  const year = new Date().getFullYear();

  const socials = [
    {
      href: "https://instagram.com/tibismarket",
      label: "Instagram",
      svg: (
        <>
          <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
          <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
        </>
      ),
    },
    {
      href: "https://www.facebook.com/share/17dRWkPRFC/?mibextid=wwXIfr",
      label: "Facebook",
      svg: (
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
      ),
    },
    {
      href: "https://wa.me/13058983610",
      label: "WhatsApp",
      svg: (
        <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
      ),
    },
  ];

  const links = [
    { to: "/", label: t.nav.home },
    { to: "/products", label: t.nav.products },
    { to: "/about", label: t.nav.about },
    { to: "/contact", label: t.nav.contact },
  ];

  const legalLinkStyle = {
    fontFamily: "var(--font-sans)",
    fontSize: 12,
    color: "rgba(250,246,240,.5)",
    textDecoration: "none",
    transition: "color .25s ease",
  };

  const onLegalEnter = (e) => {
    e.currentTarget.style.color = "#ff914d";
  };
  const onLegalLeave = (e) => {
    e.currentTarget.style.color = "rgba(250,246,240,.5)";
  };

  return (
    <footer
      className="page-pad relative overflow-hidden"
      style={{
        background: "#2a2e33",
        color: "#faf6f0",
        padding: "80px 28px 32px",
      }}
    >
      <div
        aria-hidden
        style={{
          position: "absolute",
          top: -120,
          left: "50%",
          transform: "translateX(-50%)",
          fontFamily: "var(--font-display)",
          fontStyle: "italic",
          fontSize: 360,
          color: "rgba(255,145,77,.04)",
          lineHeight: 1,
          pointerEvents: "none",
          whiteSpace: "nowrap",
        }}
      >
        Tibi's Market
      </div>

      <div className="relative mx-auto" style={{ maxWidth: 1400 }}>
        <div
          className="footer-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "1.4fr 1fr 1fr 1.2fr",
            gap: 56,
            paddingBottom: 56,
            borderBottom: "1px solid rgba(250,246,240,.1)",
          }}
        >
          <div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 12,
                marginBottom: 18,
              }}
            >
              <img
                src="/images/logo.jpeg"
                alt="Logo de Tibi's Market"
                width="48"
                height="48"
                loading="lazy"
                decoding="async"
                style={{
                  width: 48,
                  height: 48,
                  borderRadius: "50%",
                  objectFit: "cover",
                  border: "2px solid rgba(255,145,77,.4)",
                }}
              />
              <div style={{ display: "flex", flexDirection: "column" }}>
                <span
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: 26,
                    fontWeight: 500,
                    letterSpacing: "-0.5px",
                  }}
                >
                  Tibi's Market
                </span>
                <span
                  style={{
                    fontFamily: "var(--font-sans)",
                    fontSize: 10,
                    letterSpacing: 3,
                    textTransform: "uppercase",
                    color: "rgba(250,246,240,.55)",
                  }}
                >
                  {t.common.since}
                </span>
              </div>
            </div>
            <p
              style={{
                fontFamily: "var(--font-sans)",
                fontSize: 14,
                lineHeight: 1.7,
                color: "rgba(250,246,240,.7)",
                maxWidth: 320,
                margin: 0,
              }}
            >
              {t.footer.tagline}
            </p>
            <div style={{ display: "flex", gap: 10, marginTop: 22 }}>
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  style={{
                    width: 38,
                    height: 38,
                    borderRadius: "50%",
                    border: "1px solid rgba(250,246,240,.18)",
                    display: "grid",
                    placeItems: "center",
                    color: "#faf6f0",
                    transition: "all .3s ease",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = "#ff914d";
                    e.currentTarget.style.borderColor = "#ff914d";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = "transparent";
                    e.currentTarget.style.borderColor =
                      "rgba(250,246,240,.18)";
                  }}
                >
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
                    {s.svg}
                  </svg>
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4
              style={{
                fontFamily: "var(--font-sans)",
                fontSize: 11,
                letterSpacing: 3,
                textTransform: "uppercase",
                color: "#ff914d",
                margin: "0 0 18px",
              }}
            >
              {t.footer.explore}
            </h4>
            <ul
              style={{
                listStyle: "none",
                padding: 0,
                margin: 0,
                display: "flex",
                flexDirection: "column",
                gap: 12,
              }}
            >
              {links.map((l) => (
                <li key={l.to}>
                  <Link
                    to={l.to}
                    style={{
                      fontFamily: "var(--font-sans)",
                      fontSize: 14,
                      color: "rgba(250,246,240,.7)",
                      textDecoration: "none",
                      transition: "color .25s ease",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.color = "#ff914d";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.color = "rgba(250,246,240,.7)";
                    }}
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4
              style={{
                fontFamily: "var(--font-sans)",
                fontSize: 11,
                letterSpacing: 3,
                textTransform: "uppercase",
                color: "#ff914d",
                margin: "0 0 18px",
              }}
            >
              {t.footer.contact}
            </h4>
            <ul
              style={{
                listStyle: "none",
                padding: 0,
                margin: 0,
                display: "flex",
                flexDirection: "column",
                gap: 12,
                fontFamily: "var(--font-sans)",
                fontSize: 14,
                color: "rgba(250,246,240,.7)",
              }}
            >
              <li>
                <a
                  href="tel:+13058983610"
                  style={{ color: "inherit", textDecoration: "none" }}
                >
                  +1 (305) 898-3610
                </a>
              </li>
              <li>
                <a
                  href="mailto:tibismarket@gmail.com"
                  style={{ color: "inherit", textDecoration: "none" }}
                >
                  tibismarket@gmail.com
                </a>
              </li>
              <li>{t.footer.city}</li>
            </ul>
          </div>

          <div>
            <h4
              style={{
                fontFamily: "var(--font-sans)",
                fontSize: 11,
                letterSpacing: 3,
                textTransform: "uppercase",
                color: "#ff914d",
                margin: "0 0 18px",
              }}
            >
              {t.footer.newsletter}
            </h4>
            <form
              onSubmit={(e) => e.preventDefault()}
              style={{
                display: "flex",
                borderRadius: 999,
                overflow: "hidden",
                border: "1px solid rgba(250,246,240,.2)",
                background: "rgba(250,246,240,.05)",
              }}
            >
              <input
                type="email"
                placeholder={t.footer.placeholder}
                aria-label={t.footer.newsletter}
                style={{
                  flex: 1,
                  background: "transparent",
                  border: "none",
                  outline: "none",
                  padding: "12px 18px",
                  fontFamily: "var(--font-sans)",
                  fontSize: 14,
                  color: "#faf6f0",
                  minWidth: 0,
                }}
              />
              <button
                type="submit"
                aria-label={t.footer.subscribe}
                style={{
                  background: "#ff914d",
                  color: "#fff",
                  border: "none",
                  padding: "12px 18px",
                  fontFamily: "var(--font-sans)",
                  fontSize: 13,
                  fontWeight: 500,
                  cursor: "pointer",
                  letterSpacing: 0.3,
                }}
              >
                →
              </button>
            </form>
            <p
              style={{
                fontFamily: "var(--font-sans)",
                fontSize: 12,
                color: "rgba(250,246,240,.5)",
                marginTop: 14,
                lineHeight: 1.6,
              }}
            >
              {t.footer.tagline.split(".")[0]}.
            </p>
          </div>
        </div>

        <div
          style={{
            marginTop: 32,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: 16,
          }}
        >
          <div
            style={{
              fontFamily: "var(--font-sans)",
              fontSize: 12,
              color: "rgba(250,246,240,.5)",
            }}
          >
            © {year} Tibi's Market. {t.footer.rights} · {t.footer.madeBy}{" "}
            <a
              href="https://www.atepconsulting.com"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                color: "#ff914d",
                textDecoration: "none",
                fontWeight: 500,
              }}
            >
              ATEP Consulting
            </a>
          </div>
          <div style={{ display: "flex", gap: 24 }}>
            <Link
              to="/privacy"
              style={legalLinkStyle}
              onMouseEnter={onLegalEnter}
              onMouseLeave={onLegalLeave}
            >
              {t.footer.privacy}
            </Link>
            <Link
              to="/cookies"
              style={legalLinkStyle}
              onMouseEnter={onLegalEnter}
              onMouseLeave={onLegalLeave}
            >
              {t.footer.cookies}
            </Link>
            <Link
              to="/terms"
              style={legalLinkStyle}
              onMouseEnter={onLegalEnter}
              onMouseLeave={onLegalLeave}
            >
              {t.footer.terms}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
