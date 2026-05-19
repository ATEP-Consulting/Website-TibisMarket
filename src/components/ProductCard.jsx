import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { useLanguage } from "../context/LanguageContext";
import { useReveal } from "../hooks/useReveal";

const ProductCard = ({ product, index = 0 }) => {
  const { addToCart, openDrawer } = useCart();
  const { t } = useLanguage();
  const ref = useRef(null);
  const shown = useReveal(ref);

  const [variantIdx, setVariantIdx] = useState(0);
  const [qty, setQty] = useState(1);
  const [adding, setAdding] = useState(false);

  const hasVariants = !!product.hasVariants;
  const currentPrice = hasVariants
    ? product.variants[variantIdx].price
    : product.price;

  const buildMeta = () => {
    if (hasVariants) {
      const v = product.variants[variantIdx];
      return `${v.size} · ${v.servings}`;
    }
    if (product.units && product.weightPerUnit) {
      return `${product.units} ${t.products.units} · ${product.totalWeight} ${product.weightUnit}`;
    }
    if (product.totalWeight) {
      return `${product.totalWeight} ${product.weightUnit}`;
    }
    return "";
  };

  const totalDisplay = (currentPrice * qty).toFixed(2);

  const handleAdd = () => {
    if (adding) return;
    const item = hasVariants
      ? {
          key: `${product.id}-${product.variants[variantIdx].size}`,
          name: product.name,
          image: product.image,
          price: product.variants[variantIdx].price,
          variantSize: product.variants[variantIdx].size,
          variantServings: product.variants[variantIdx].servings,
        }
      : {
          key: `${product.id}`,
          name: product.name,
          image: product.image,
          price: product.price,
        };

    addToCart(item, qty);
    setAdding(true);
    setTimeout(() => {
      setAdding(false);
      setQty(1);
      openDrawer();
    }, 900);
  };

  return (
    <div
      ref={ref}
      className="product-card"
      style={{
        background: "#faf6f0",
        borderRadius: 6,
        overflow: "hidden",
        boxShadow: "0 1px 0 rgba(53,58,64,.04)",
        opacity: shown ? 1 : 0,
        transform: shown ? "translateY(0)" : "translateY(30px)",
        transition: `opacity .9s ease ${index * 80}ms, transform .9s cubic-bezier(.22,.61,.36,1) ${index * 80}ms, box-shadow .35s ease`,
        display: "flex",
        flexDirection: "column",
      }}
    >
      <div
        style={{
          position: "relative",
          aspectRatio: "1/1",
          overflow: "hidden",
        }}
      >
        <img
          src={`/images/${product.image}`}
          alt={`${product.name} — ${product.description}`}
          className="product-image"
          width="600"
          height="600"
          loading="lazy"
          decoding="async"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            transition: "transform .9s cubic-bezier(.22,.61,.36,1)",
          }}
        />
        <div
          style={{
            position: "absolute",
            top: 14,
            left: 14,
            background: "#faf6f0",
            padding: "6px 12px",
            fontFamily: "var(--font-sans)",
            fontSize: 10,
            letterSpacing: 2,
            textTransform: "uppercase",
            color: "#353a40",
            borderRadius: 2,
          }}
        >
          {String(index + 1).padStart(2, "0")}
        </div>
        <div
          style={{
            position: "absolute",
            top: 14,
            right: 14,
            background: "#ff914d",
            color: "#fff",
            padding: "8px 14px",
            fontFamily: "var(--font-display)",
            fontSize: 22,
            fontWeight: 500,
            borderRadius: 2,
            transition: "all .3s ease",
          }}
        >
          ${currentPrice}
        </div>
      </div>

      <div
        style={{
          padding: "26px 24px 28px",
          display: "flex",
          flexDirection: "column",
          flexGrow: 1,
        }}
      >
        <h3
          style={{
            fontFamily: "var(--font-display)",
            fontSize: 28,
            fontWeight: 500,
            color: "#353a40",
            margin: 0,
            letterSpacing: "-0.5px",
            lineHeight: 1.15,
          }}
        >
          {product.name}
        </h3>
        <p
          style={{
            fontFamily: "var(--font-sans)",
            fontSize: 14,
            lineHeight: 1.6,
            color: "#5a5248",
            margin: "10px 0 0",
          }}
        >
          {product.description}
        </p>
        <div
          style={{
            fontFamily: "var(--font-sans)",
            fontSize: 11,
            letterSpacing: 2,
            textTransform: "uppercase",
            color: "#8a7560",
            marginTop: 16,
            minHeight: 14,
          }}
        >
          {buildMeta()}
        </div>

        {product.slug && (
          <Link
            to={`/n/${product.slug}`}
            aria-label={`${t.products.moreInfo} — ${product.name}`}
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 6,
              marginTop: 14,
              fontFamily: "var(--font-sans)",
              fontSize: 13,
              fontWeight: 500,
              color: "#353a40",
              textDecoration: "none",
              letterSpacing: 0.2,
              borderBottom: "1px solid rgba(53,58,64,0.2)",
              paddingBottom: 2,
              width: "fit-content",
              transition: "color .2s ease, border-color .2s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = "#ff914d";
              e.currentTarget.style.borderColor = "#ff914d";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = "#353a40";
              e.currentTarget.style.borderColor = "rgba(53,58,64,0.2)";
            }}
          >
            {t.products.moreInfo}
            <span
              aria-hidden
              style={{
                fontSize: 14,
                lineHeight: 1,
                transform: "translateY(-1px)",
              }}
            >
              →
            </span>
          </Link>
        )}

        {hasVariants && (
          <div style={{ marginTop: 18 }}>
            <div
              style={{
                fontFamily: "var(--font-sans)",
                fontSize: 10,
                letterSpacing: 2,
                textTransform: "uppercase",
                color: "#8a7560",
                marginBottom: 8,
              }}
            >
              {t.products.size}
            </div>
            <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
              {product.variants.map((v, i) => (
                <button
                  key={i}
                  onClick={() => setVariantIdx(i)}
                  style={{
                    padding: "8px 12px",
                    background: variantIdx === i ? "#353a40" : "transparent",
                    color: variantIdx === i ? "#faf6f0" : "#353a40",
                    border: `1px solid ${variantIdx === i ? "#353a40" : "rgba(53,58,64,.2)"}`,
                    borderRadius: 2,
                    cursor: "pointer",
                    fontFamily: "var(--font-sans)",
                    fontSize: 12,
                    fontWeight: 500,
                    letterSpacing: 0.3,
                    transition: "all .2s ease",
                  }}
                >
                  {v.size}
                </button>
              ))}
            </div>
          </div>
        )}

        <div style={{ flexGrow: 1, minHeight: 8 }} />

        <div
          className="product-action-row"
          style={{
            marginTop: 18,
            display: "flex",
            gap: 10,
            alignItems: "stretch",
          }}
        >
          <div
            className="qty-stepper"
            style={{
              display: "flex",
              alignItems: "center",
              border: "1px solid rgba(53,58,64,.18)",
              borderRadius: 2,
              overflow: "hidden",
              background: "#fff",
            }}
          >
            <button
              onClick={() => setQty(Math.max(1, qty - 1))}
              aria-label="−"
              style={{
                width: 36,
                height: "100%",
                background: "transparent",
                border: "none",
                cursor: "pointer",
                color: "#353a40",
                fontSize: 18,
                lineHeight: 1,
                padding: 0,
                transition: "background .2s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "rgba(53,58,64,.06)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "transparent";
              }}
            >
              −
            </button>
            <span
              style={{
                minWidth: 32,
                textAlign: "center",
                fontFamily: "var(--font-sans)",
                fontSize: 14,
                fontWeight: 600,
                color: "#353a40",
                padding: "0 4px",
              }}
            >
              {qty}
            </span>
            <button
              onClick={() => setQty(Math.min(99, qty + 1))}
              aria-label="+"
              style={{
                width: 36,
                height: "100%",
                background: "transparent",
                border: "none",
                cursor: "pointer",
                color: "#353a40",
                fontSize: 18,
                lineHeight: 1,
                padding: 0,
                transition: "background .2s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "rgba(53,58,64,.06)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "transparent";
              }}
            >
              +
            </button>
          </div>

          <button
            onClick={handleAdd}
            style={{
              flex: 1,
              padding: "13px 18px",
              background: adding ? "#10b981" : "#353a40",
              color: "#faf6f0",
              border: "none",
              borderRadius: 2,
              fontFamily: "var(--font-sans)",
              fontSize: 13,
              fontWeight: 500,
              letterSpacing: 0.5,
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              gap: 12,
              transition: "all .3s ease",
            }}
            onMouseEnter={(e) => {
              if (!adding) e.currentTarget.style.background = "#ff914d";
            }}
            onMouseLeave={(e) => {
              if (!adding) e.currentTarget.style.background = "#353a40";
            }}
          >
            <span style={{ display: "flex", alignItems: "center", gap: 8 }}>
              {adding ? (
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              ) : (
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
                  <line x1="12" y1="5" x2="12" y2="19" />
                  <line x1="5" y1="12" x2="19" y2="12" />
                </svg>
              )}
              {adding ? t.common.addedToCart : t.products.addToCart}
            </span>
            <span
              style={{
                fontFamily: "var(--font-display)",
                fontSize: 18,
                fontStyle: "italic",
              }}
            >
              ${totalDisplay}
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
