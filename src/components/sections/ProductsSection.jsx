import React from "react";
import { useLanguage } from "../../context/LanguageContext";
import ProductCard from "../ProductCard";
import Reveal from "../Reveal";

const ProductsSection = ({
  background = "#f3ece1",
  showHeader = true,
  topPadding,
}) => {
  const { t } = useLanguage();
  const paddingTop = topPadding ?? (showHeader ? 140 : 80);
  return (
    <section
      id="products"
      className="page-pad relative"
      style={{ background, padding: `${paddingTop}px 28px 140px` }}
    >
      <div style={{ maxWidth: 1400, margin: "0 auto" }}>
        {showHeader && (
          <Reveal>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                marginBottom: 64,
              }}
            >
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
                  {t.products.kicker}
                </span>
                <span style={{ width: 32, height: 1, background: "#ff914d" }} />
              </div>
              <h2
                style={{
                  fontFamily: "var(--font-display)",
                  fontWeight: 500,
                  fontSize: "clamp(48px, 6vw, 88px)",
                  lineHeight: 1,
                  color: "#353a40",
                  letterSpacing: "-2px",
                  margin: 0,
                  textAlign: "center",
                }}
              >
                {t.products.title}
              </h2>
              <p
                style={{
                  fontFamily: "var(--font-sans)",
                  fontSize: 16,
                  lineHeight: 1.7,
                  color: "#5a5248",
                  marginTop: 24,
                  maxWidth: 640,
                  textAlign: "center",
                }}
              >
                {t.products.intro}
              </p>
            </div>
          </Reveal>
        )}

        <div
          className="products-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: 32,
          }}
        >
          {t.products.productsList.map((p, i) => (
            <ProductCard key={p.id} product={p} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
