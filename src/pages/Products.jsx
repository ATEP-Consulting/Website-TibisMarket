import React from "react";
import { Link } from "react-router-dom";
import { useLanguage } from "../context/LanguageContext";
import Seo from "../components/Seo";
import ProductsSection from "../components/sections/ProductsSection";
import Reveal from "../components/Reveal";

const Products = () => {
  const { t } = useLanguage();

  const productSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: t.products.productsList.map((p, i) => {
      const price = p.hasVariants ? p.variants[0].price : p.price;
      return {
        "@type": "ListItem",
        position: i + 1,
        item: {
          "@type": "Product",
          name: p.name,
          description: p.description,
          image: `https://www.tibismarket.com/images/${p.image}`,
          brand: { "@type": "Brand", name: "Tibi's Market" },
          offers: {
            "@type": "Offer",
            priceCurrency: "USD",
            price: String(price),
            availability: "https://schema.org/InStock",
            url: "https://www.tibismarket.com/products",
          },
        },
      };
    }),
  };

  return (
    <>
      <Seo page="products" path="/products" />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
      />
      <section
        className="page-pad relative overflow-hidden"
        style={{
          background: "linear-gradient(180deg, #faf6f0 0%, #f3ece1 100%)",
          padding: "180px 28px 100px",
        }}
      >
        <div
          aria-hidden
          style={{
            position: "absolute",
            top: -120,
            right: -120,
            width: 480,
            height: 480,
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(255,145,77,.18), transparent 70%)",
          }}
        />
        <div
          style={{
            maxWidth: 1280,
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
                {t.products.kicker}
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
              {t.products.title}
            </h1>
          </Reveal>
          <Reveal delay={300}>
            <p
              style={{
                fontFamily: "var(--font-display)",
                fontStyle: "italic",
                fontSize: "clamp(20px, 1.8vw, 26px)",
                color: "#5a5248",
                marginTop: 22,
              }}
            >
              {t.products.subtitle}
            </p>
            <p
              style={{
                fontFamily: "var(--font-sans)",
                fontSize: 16,
                lineHeight: 1.7,
                color: "#5a5248",
                margin: "20px auto 0",
                maxWidth: 640,
              }}
            >
              {t.products.intro}
            </p>
          </Reveal>
        </div>
      </section>

      <ProductsSection background="#faf6f0" showHeader={false} />

      <section
        className="page-pad relative overflow-hidden"
        style={{
          background: "#353a40",
          color: "#faf6f0",
          padding: "120px 28px",
        }}
      >
        <div
          aria-hidden
          style={{
            position: "absolute",
            top: -200,
            right: -200,
            width: 600,
            height: 600,
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(255,145,77,.18), transparent 65%)",
          }}
        />
        <div
          style={{
            maxWidth: 880,
            margin: "0 auto",
            position: "relative",
            textAlign: "center",
          }}
        >
          <Reveal>
            <h2
              style={{
                fontFamily: "var(--font-display)",
                fontWeight: 500,
                fontSize: "clamp(36px, 4.5vw, 56px)",
                lineHeight: 1.1,
                color: "#faf6f0",
                letterSpacing: "-1px",
                margin: 0,
              }}
            >
              {t.products.cta.title}
            </h2>
            <p
              style={{
                fontFamily: "var(--font-sans)",
                fontSize: 17,
                lineHeight: 1.7,
                color: "rgba(250,246,240,.78)",
                marginTop: 18,
              }}
            >
              {t.products.cta.subtitle}
            </p>
            <Link
              to="/contact"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 12,
                marginTop: 32,
                background: "#ff914d",
                color: "#fff",
                padding: "16px 28px",
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
                e.currentTarget.style.boxShadow =
                  "0 12px 24px -8px rgba(255,145,77,.5)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "none";
              }}
            >
              {t.products.cta.button}
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
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
};

export default Products;
