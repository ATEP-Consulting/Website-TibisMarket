import React, { useRef } from "react";
import { useLanguage } from "../../context/LanguageContext";
import { useParallax } from "../../hooks/useParallax";
import { useReveal } from "../../hooks/useReveal";
import Reveal from "../Reveal";

const items = [
  {
    src: "/images/gallery-01.webp",
    mt: 0,
    alt: "Detalle de arepas artesanales recién doradas",
  },
  {
    src: "/images/gallery-02.webp",
    mt: 80,
    alt: "Manos amasando harina de trigo sobre tabla de madera",
  },
  {
    src: "/images/gallery-03.webp",
    mt: 20,
    alt: "Arepas tradicionales servidas sobre tela de lino",
  },
  {
    src: "/images/gallery-04.webp",
    mt: 120,
    alt: "Selección de arepas de trigo recién hechas",
  },
];

function GalleryItem({ item, idx }) {
  const ref = useRef(null);
  const offset = useParallax(ref, 0.04);
  const shown = useReveal(ref);

  return (
    <div
      ref={ref}
      className="gallery-item-offset"
      style={{
        marginTop: item.mt,
        opacity: shown ? 1 : 0,
        transform: shown ? "translateY(0)" : "translateY(40px)",
        transition: `opacity 1s ease ${idx * 100}ms, transform 1s cubic-bezier(.22,.61,.36,1) ${idx * 100}ms`,
      }}
    >
      <div
        className="gallery-card"
        style={{
          position: "relative",
          overflow: "hidden",
          borderRadius: 4,
          aspectRatio: idx % 2 === 0 ? "4/5" : "3/4",
          cursor: "pointer",
        }}
      >
        <img
          src={item.src}
          alt={item.alt}
          width="600"
          height={idx % 2 === 0 ? 750 : 800}
          loading="lazy"
          decoding="async"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            transform: `scale(1.08) translateY(${offset}px)`,
            transition: "transform .8s cubic-bezier(.22,.61,.36,1)",
          }}
        />
        <div
          className="gallery-overlay"
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(180deg, transparent 50%, rgba(53,58,64,.6))",
            opacity: 0,
            transition: "opacity .35s ease",
          }}
        />
      </div>
    </div>
  );
}

const Gallery = () => {
  const { t } = useLanguage();
  return (
    <section
      className="page-pad relative overflow-hidden"
      style={{ background: "#faf6f0", padding: "60px 28px 140px" }}
    >
      <div style={{ maxWidth: 1400, margin: "0 auto" }}>
        <Reveal>
          <div
            style={{
              display: "flex",
              alignItems: "baseline",
              justifyContent: "space-between",
              marginBottom: 56,
              flexWrap: "wrap",
              gap: 20,
            }}
          >
            <div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 12,
                  marginBottom: 14,
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
                  {t.gallery.kicker}
                </span>
              </div>
              <h2
                style={{
                  fontFamily: "var(--font-display)",
                  fontWeight: 500,
                  fontSize: "clamp(38px, 4.5vw, 64px)",
                  lineHeight: 1,
                  color: "#353a40",
                  letterSpacing: "-1px",
                  margin: 0,
                  fontStyle: "italic",
                }}
              >
                {t.gallery.title}
              </h2>
            </div>
          </div>
        </Reveal>

        <div
          className="gallery-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: 24,
            alignItems: "start",
          }}
        >
          {items.map((g, i) => (
            <GalleryItem key={i} item={g} idx={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
