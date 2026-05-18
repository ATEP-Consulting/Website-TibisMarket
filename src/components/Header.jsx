import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useLanguage } from "../context/LanguageContext";
import { useCart } from "../context/CartContext";
import { useScrollY } from "../hooks/useScrollY";

const Header = () => {
  const { language, t, toggleLanguage } = useLanguage();
  const { totalItems, openDrawer } = useCart();
  const location = useLocation();
  const navigate = useNavigate();
  const y = useScrollY();
  const solid = y > 40;

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  const isActive = (path) => location.pathname === path;

  const handleStoryClick = (e) => {
    e.preventDefault();
    setIsMenuOpen(false);
    if (location.pathname === "/") {
      const el = document.getElementById("story");
      if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    } else {
      navigate("/#story");
      setTimeout(() => {
        const el = document.getElementById("story");
        if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 100);
    }
  };

  const navItems = [
    { type: "route", to: "/", label: t.nav.home },
    { type: "route", to: "/products", label: t.nav.products },
    { type: "route", to: "/about", label: t.nav.about },
    { type: "route", to: "/contact", label: t.nav.contact },
  ];

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        background: solid ? "rgba(250,246,240,.92)" : "rgba(250,246,240,0)",
        backdropFilter: solid ? "saturate(140%) blur(14px)" : "none",
        WebkitBackdropFilter: solid ? "saturate(140%) blur(14px)" : "none",
        borderBottom: solid
          ? "1px solid rgba(53,58,64,.08)"
          : "1px solid transparent",
      }}
    >
      <div
        className="header-pad mx-auto flex items-center justify-between gap-6"
        style={{
          maxWidth: 1400,
          padding: "16px 28px",
          position: "relative",
          zIndex: 50,
        }}
      >
        <Link
          to="/"
          className="flex items-center gap-3 no-underline"
          aria-label="Tibi's Market"
        >
          <img
            src="/images/logo.jpeg"
            alt="Logo de Tibi's Market"
            width="48"
            height="48"
            fetchPriority="high"
            decoding="async"
            className="rounded-full object-cover"
            style={{
              width: 48,
              height: 48,
              boxShadow: "0 4px 16px rgba(255,145,77,.25)",
              border: "2px solid rgba(255,145,77,.3)",
            }}
          />
          <div className="flex flex-col leading-none">
            <span
              style={{
                fontFamily: "var(--font-display)",
                fontSize: 24,
                color: "#353a40",
                fontWeight: 600,
                letterSpacing: "-0.5px",
              }}
            >
              Tibi's Market
            </span>
            <span
              className="header-brand-tagline"
              style={{
                fontFamily: "var(--font-sans)",
                fontSize: 10,
                color: "#8a8478",
                letterSpacing: 3,
                textTransform: "uppercase",
                marginTop: 3,
              }}
            >
              {t.common.since}
            </span>
          </div>
        </Link>

        <nav className="nav-desktop flex items-center" style={{ gap: 32 }}>
          {navItems.map((item) =>
            item.type === "story" ? (
              <a
                key={item.label}
                href={item.to}
                onClick={handleStoryClick}
                className="navlink"
                style={{
                  fontFamily: "var(--font-sans)",
                  fontSize: 14,
                  color: "#353a40",
                  textDecoration: "none",
                  fontWeight: 500,
                  letterSpacing: 0.2,
                }}
              >
                {item.label}
              </a>
            ) : (
              <Link
                key={item.label}
                to={item.to}
                className={`navlink${isActive(item.to) ? " is-active" : ""}`}
                style={{
                  fontFamily: "var(--font-sans)",
                  fontSize: 14,
                  color: "#353a40",
                  textDecoration: "none",
                  fontWeight: 500,
                  letterSpacing: 0.2,
                }}
              >
                {item.label}
              </Link>
            ),
          )}
        </nav>

        <div className="flex items-center" style={{ gap: 14 }}>
          <button
            onClick={toggleLanguage}
            aria-label="Language"
            style={{
              fontFamily: "var(--font-sans)",
              fontSize: 12,
              fontWeight: 600,
              color: "#353a40",
              background: "transparent",
              border: "1px solid rgba(53,58,64,.18)",
              borderRadius: 999,
              padding: "8px 14px",
              cursor: "pointer",
              letterSpacing: 1.5,
              transition: "all .25s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "#353a40";
              e.currentTarget.style.color = "#faf6f0";
              e.currentTarget.style.borderColor = "#353a40";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "transparent";
              e.currentTarget.style.color = "#353a40";
              e.currentTarget.style.borderColor = "rgba(53,58,64,.18)";
            }}
          >
            {language === "es" ? "EN" : "ES"}
          </button>

          <button
            onClick={openDrawer}
            aria-label={t.nav.cart}
            style={{
              position: "relative",
              background: "#353a40",
              color: "#faf6f0",
              border: "none",
              borderRadius: 999,
              padding: "9px 18px 9px 14px",
              fontFamily: "var(--font-sans)",
              fontSize: 13,
              fontWeight: 500,
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              cursor: "pointer",
              transition: "background .25s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "#ff914d";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "#353a40";
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
              <circle cx="9" cy="21" r="1" />
              <circle cx="20" cy="21" r="1" />
              <path d="M1 1h4l2.7 13.4a2 2 0 0 0 2 1.6h9.7a2 2 0 0 0 2-1.6L23 6H6" />
            </svg>
            <span>{totalItems}</span>
          </button>

          <button
            onClick={() => setIsMenuOpen((v) => !v)}
            className="nav-burger"
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMenuOpen}
            style={{
              display: "none",
              background: "transparent",
              border: "none",
              cursor: "pointer",
              color: "#353a40",
              padding: 4,
            }}
          >
            <svg
              width="28"
              height="28"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            >
              {isMenuOpen ? (
                <>
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </>
              ) : (
                <>
                  <line x1="3" y1="7" x2="21" y2="7" />
                  <line x1="3" y1="17" x2="21" y2="17" />
                </>
              )}
            </svg>
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div
          role="dialog"
          aria-modal="true"
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            zIndex: 40,
            background: "#faf6f0",
            display: "flex",
            flexDirection: "column",
            paddingTop: 100,
            paddingLeft: 28,
            paddingRight: 28,
            paddingBottom: 32,
            animation: "fadeIn .25s ease",
          }}
        >
          <nav
            style={{
              display: "flex",
              flexDirection: "column",
              flex: 1,
              paddingTop: 16,
            }}
          >
            {navItems
              .filter((item) => item.to !== "/contact")
              .map((item, idx, arr) =>
                item.type === "story" ? (
                  <a
                    key={item.label}
                    href={item.to}
                    onClick={handleStoryClick}
                    style={{
                      fontFamily: "var(--font-display)",
                      fontSize: 36,
                      fontWeight: 500,
                      color: "#353a40",
                      textDecoration: "none",
                      letterSpacing: "-0.5px",
                      padding: "20px 0",
                      borderBottom:
                        idx < arr.length - 1
                          ? "1px solid rgba(53,58,64,.1)"
                          : "none",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                    }}
                  >
                    <span>{item.label}</span>
                    <span
                      style={{
                        fontFamily: "var(--font-sans)",
                        fontSize: 14,
                        color: "#8a7560",
                      }}
                    >
                      →
                    </span>
                  </a>
                ) : (
                  <Link
                    key={item.label}
                    to={item.to}
                    onClick={() => setIsMenuOpen(false)}
                    style={{
                      fontFamily: "var(--font-display)",
                      fontSize: 36,
                      fontWeight: 500,
                      color: isActive(item.to) ? "#ff914d" : "#353a40",
                      textDecoration: "none",
                      letterSpacing: "-0.5px",
                      padding: "20px 0",
                      borderBottom:
                        idx < arr.length - 1
                          ? "1px solid rgba(53,58,64,.1)"
                          : "none",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                    }}
                  >
                    <span>{item.label}</span>
                    <span
                      style={{
                        fontFamily: "var(--font-sans)",
                        fontSize: 14,
                        color: "#8a7560",
                      }}
                    >
                      →
                    </span>
                  </Link>
                ),
              )}
          </nav>

          <Link
            to="/contact"
            onClick={() => setIsMenuOpen(false)}
            style={{
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              gap: 12,
              background: "#353a40",
              color: "#faf6f0",
              padding: "20px 28px",
              borderRadius: 999,
              fontFamily: "var(--font-sans)",
              fontSize: 15,
              fontWeight: 500,
              letterSpacing: 0.3,
              textDecoration: "none",
              marginTop: 32,
              boxShadow: "0 12px 30px -10px rgba(53,58,64,.4)",
            }}
          >
            {t.nav.contact}
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
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </Link>
        </div>
      )}
    </header>
  );
};

export default Header;
