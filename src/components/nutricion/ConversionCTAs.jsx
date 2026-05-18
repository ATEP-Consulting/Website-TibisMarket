import React from "react";
import { Link } from "react-router-dom";
import { useLanguage } from "../../context/LanguageContext";
import { T } from "../../data/nutricionStrings";
import { CONTACT } from "../../data/productos";

const InstagramIcon = () => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden
  >
    <rect x="3" y="3" width="18" height="18" rx="5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17.5" cy="6.5" r="0.6" fill="currentColor" />
  </svg>
);

const BagIcon = () => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden
  >
    <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
    <line x1="3" y1="6" x2="21" y2="6" />
    <path d="M16 10a4 4 0 0 1-8 0" />
  </svg>
);

const WhatsAppIcon = () => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="currentColor"
    aria-hidden
  >
    <path d="M17.5 14.4c-.3-.1-1.6-.8-1.9-.9-.3-.1-.4-.1-.6.1-.2.3-.7.9-.8 1-.1.2-.3.2-.6.1-.3-.1-1.2-.4-2.3-1.4-.8-.7-1.4-1.7-1.6-2-.2-.3 0-.5.1-.6.1-.1.3-.3.4-.5.1-.2.2-.3.3-.5.1-.2 0-.4 0-.5-.1-.1-.6-1.5-.9-2-.2-.5-.4-.4-.6-.4h-.5c-.2 0-.5.1-.7.4-.2.3-.9.9-.9 2.2 0 1.3.9 2.5 1.1 2.7.1.2 1.8 2.7 4.3 3.8.6.3 1.1.4 1.4.5.6.2 1.1.2 1.6.1.5-.1 1.6-.6 1.8-1.3.2-.6.2-1.2.2-1.3-.1-.1-.3-.2-.5-.3z" />
    <path d="M20.5 3.5C18.3 1.3 15.2 0 12 0 5.4 0 0 5.4 0 12c0 2.1.5 4.2 1.6 6L0 24l6.2-1.6c1.7.9 3.7 1.5 5.8 1.5 6.6 0 12-5.4 12-12 0-3.2-1.3-6.2-3.5-8.4zM12 21.8c-1.9 0-3.7-.5-5.3-1.4l-.4-.2-3.7 1 1-3.6-.2-.4c-1-1.6-1.5-3.4-1.5-5.3 0-5.5 4.5-10 10-10s10 4.5 10 10-4.5 10-10 10z" />
  </svg>
);

const ConversionCTAs = ({ producto }) => {
  const { language } = useLanguage();
  const t = (obj) => obj[language];

  const waMessage =
    language === "es"
      ? `¡Hola Tibi's! Me encantó la ${producto.nombre.es}. Quisiera información sobre pedidos.`
      : `Hi Tibi's! I loved the ${producto.nombre.en}. I'd like info on ordering.`;
  const waUrl = `https://wa.me/${CONTACT.whatsappE164}?text=${encodeURIComponent(waMessage)}`;
  const igUrl = `https://instagram.com/${CONTACT.instagram}`;

  return (
    <section style={{ padding: "0 24px 24px" }}>
      {/* PRIMARY: web order — direct path to /products with cart. */}
      <Link
        to="/products"
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          padding: 18,
          borderRadius: 4,
          textDecoration: "none",
          marginBottom: 10,
          background: "#353a40",
          color: "#faf6f0",
          transition: "background .25s ease, transform .15s ease",
          boxShadow: "0 12px 30px -10px rgba(53,58,64,0.45)",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.background = "#ff914d";
          e.currentTarget.style.transform = "translateY(-1px)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.background = "#353a40";
          e.currentTarget.style.transform = "translateY(0)";
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 10,
            fontSize: 16,
            fontWeight: 600,
            letterSpacing: 0.2,
          }}
        >
          <BagIcon />
          {t(T.pedirOnline)}
        </div>
        <div
          style={{
            fontSize: 11,
            opacity: 0.78,
            marginTop: 6,
            letterSpacing: "0.03em",
          }}
        >
          {t(T.pedirOnlineSub)}
        </div>
      </Link>

      {/* SECONDARY: WhatsApp — still visible for special orders / wholesale. */}
      <a
        href={waUrl}
        target="_blank"
        rel="noopener noreferrer"
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          padding: 14,
          borderRadius: 4,
          textDecoration: "none",
          marginBottom: 10,
          background: "transparent",
          color: "#353a40",
          border: "1.5px solid #353a40",
          transition: "background .2s ease, color .2s ease",
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
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 10,
            fontSize: 14,
            fontWeight: 600,
            letterSpacing: 0.2,
          }}
        >
          <WhatsAppIcon />
          {t(T.pediWa)}
        </div>
        <div
          style={{
            fontSize: 10.5,
            marginTop: 4,
            letterSpacing: "0.03em",
            opacity: 0.75,
          }}
        >
          {t(T.pediWaSub)}
        </div>
      </a>

      {/* TERTIARY: Instagram — top-of-mind / community. */}
      <a
        href={igUrl}
        target="_blank"
        rel="noopener noreferrer"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: 10,
          padding: 11,
          borderRadius: 4,
          textDecoration: "none",
          fontSize: 12.5,
          fontWeight: 600,
          letterSpacing: 0.2,
          background: "transparent",
          color: "#5a5248",
          border: "1px solid rgba(53,58,64,0.25)",
          transition: "color .2s ease, border-color .2s ease",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.color = "#353a40";
          e.currentTarget.style.borderColor = "#353a40";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.color = "#5a5248";
          e.currentTarget.style.borderColor = "rgba(53,58,64,0.25)";
        }}
      >
        <InstagramIcon />
        {t(T.seguir)}
      </a>
    </section>
  );
};

export default ConversionCTAs;
