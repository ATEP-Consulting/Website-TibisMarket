import React, { useEffect, useState } from "react";
import { useCart } from "../context/CartContext";
import { useLanguage } from "../context/LanguageContext";

const labelStyle = {
  display: "block",
  fontFamily: "var(--font-sans)",
  fontSize: 11,
  letterSpacing: 2,
  textTransform: "uppercase",
  color: "#8a7560",
  fontWeight: 500,
  marginBottom: 6,
};
const inputStyle = {
  width: "100%",
  padding: "12px 14px",
  background: "#fff",
  border: "1px solid rgba(53,58,64,.18)",
  borderRadius: 4,
  fontFamily: "var(--font-sans)",
  fontSize: 14,
  color: "#353a40",
  outline: "none",
  transition: "border-color .2s ease",
  boxSizing: "border-box",
};
const errStyle = {
  fontFamily: "var(--font-sans)",
  fontSize: 11,
  color: "#ef4444",
  margin: "4px 0 0",
};

const ICONS = {
  user: (
    <>
      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </>
  ),
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
};

function Field({ name, label, type, placeholder, iconKey, value, error, onChange }) {
  return (
    <div>
      <label style={labelStyle}>
        <svg
          width="14"
          height="14"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#ff914d"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          style={{ marginRight: 6, verticalAlign: -2 }}
        >
          {ICONS[iconKey]}
        </svg>
        {label}
      </label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder || label}
        style={{
          ...inputStyle,
          borderColor: error ? "#ef4444" : "rgba(53,58,64,.18)",
        }}
        onFocus={(e) => {
          if (!error) e.target.style.borderColor = "#ff914d";
        }}
        onBlur={(e) => {
          e.target.style.borderColor = error ? "#ef4444" : "rgba(53,58,64,.18)";
        }}
      />
      {error && <p style={errStyle}>{error}</p>}
    </div>
  );
}

function EmptyState({ t, onClose }) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "60px 20px",
        textAlign: "center",
      }}
    >
      <div
        style={{
          width: 100,
          height: 100,
          borderRadius: "50%",
          background: "rgba(255,145,77,.08)",
          display: "grid",
          placeItems: "center",
          marginBottom: 24,
        }}
      >
        <svg
          width="48"
          height="48"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#ff914d"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="9" cy="21" r="1" />
          <circle cx="20" cy="21" r="1" />
          <path d="M1 1h4l2.7 13.4a2 2 0 0 0 2 1.6h9.7a2 2 0 0 0 2-1.6L23 6H6" />
        </svg>
      </div>
      <h3
        style={{
          fontFamily: "var(--font-display)",
          fontSize: 32,
          fontWeight: 500,
          color: "#353a40",
          margin: 0,
          letterSpacing: "-0.5px",
        }}
      >
        {t.cart.empty}
      </h3>
      <p
        style={{
          fontFamily: "var(--font-sans)",
          fontSize: 14,
          color: "#8a7560",
          marginTop: 10,
          maxWidth: 280,
          lineHeight: 1.6,
        }}
      >
        {t.cart.emptyDesc}
      </p>
      <button
        onClick={onClose}
        style={{
          marginTop: 28,
          padding: "14px 28px",
          background: "#353a40",
          color: "#faf6f0",
          border: "none",
          borderRadius: 999,
          fontFamily: "var(--font-sans)",
          fontSize: 13,
          fontWeight: 500,
          letterSpacing: 0.5,
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
        {t.cart.continueShopping}
      </button>
    </div>
  );
}

function CartItems({ cart, updateQuantity, removeFromCart, t }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
      {cart.map((item) => (
        <div
          key={item.key}
          style={{
            display: "flex",
            gap: 14,
            padding: 14,
            background: "#fff",
            borderRadius: 4,
            border: "1px solid rgba(53,58,64,.08)",
            animation: "slideInRight .4s cubic-bezier(.22,.61,.36,1)",
          }}
        >
          <img
            src={`/images/${item.image}`}
            alt={item.name}
            width="84"
            height="84"
            loading="lazy"
            decoding="async"
            style={{
              width: 84,
              height: 84,
              objectFit: "cover",
              borderRadius: 4,
              flexShrink: 0,
            }}
          />
          <div
            style={{
              flex: 1,
              minWidth: 0,
              display: "flex",
              flexDirection: "column",
            }}
          >
            <div style={{ display: "flex", justifyContent: "space-between", gap: 8 }}>
              <h4
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: 20,
                  fontWeight: 500,
                  color: "#353a40",
                  margin: 0,
                  letterSpacing: "-0.3px",
                  lineHeight: 1.15,
                }}
              >
                {item.name}
              </h4>
              <button
                onClick={() => removeFromCart(item.key)}
                aria-label={t.cart.remove}
                style={{
                  background: "transparent",
                  border: "none",
                  cursor: "pointer",
                  color: "#8a7560",
                  padding: 0,
                  flexShrink: 0,
                  transition: "color .2s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = "#ef4444";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = "#8a7560";
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
                  <polyline points="3 6 5 6 21 6" />
                  <path d="M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6" />
                </svg>
              </button>
            </div>
            {item.variantSize && (
              <span
                style={{
                  fontFamily: "var(--font-sans)",
                  fontSize: 11,
                  letterSpacing: 1.5,
                  textTransform: "uppercase",
                  color: "#ff914d",
                  marginTop: 4,
                  fontWeight: 500,
                }}
              >
                {item.variantSize}
                {item.variantServings ? ` · ${item.variantServings}` : ""}
              </span>
            )}
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "flex-end",
                marginTop: "auto",
                paddingTop: 10,
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  border: "1px solid rgba(53,58,64,.18)",
                  borderRadius: 2,
                  background: "#faf6f0",
                }}
              >
                <button
                  onClick={() => updateQuantity(item.key, item.quantity - 1)}
                  aria-label="−"
                  style={{
                    width: 28,
                    height: 28,
                    background: "transparent",
                    border: "none",
                    cursor: "pointer",
                    color: "#353a40",
                    fontSize: 16,
                    padding: 0,
                  }}
                >
                  −
                </button>
                <span
                  style={{
                    minWidth: 26,
                    textAlign: "center",
                    fontFamily: "var(--font-sans)",
                    fontSize: 13,
                    fontWeight: 600,
                    color: "#353a40",
                  }}
                >
                  {item.quantity}
                </span>
                <button
                  onClick={() => updateQuantity(item.key, item.quantity + 1)}
                  aria-label="+"
                  style={{
                    width: 28,
                    height: 28,
                    background: "transparent",
                    border: "none",
                    cursor: "pointer",
                    color: "#353a40",
                    fontSize: 16,
                    padding: 0,
                  }}
                >
                  +
                </button>
              </div>
              <div style={{ textAlign: "right" }}>
                <div
                  style={{
                    fontFamily: "var(--font-sans)",
                    fontSize: 10,
                    letterSpacing: 1.5,
                    textTransform: "uppercase",
                    color: "#8a7560",
                  }}
                >
                  ${item.price.toFixed(2)} {t.cart.each}
                </div>
                <div
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: 22,
                    fontWeight: 500,
                    color: "#353a40",
                    letterSpacing: "-0.3px",
                  }}
                >
                  ${(item.price * item.quantity).toFixed(2)}
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

function CheckoutForm({ customer, errors, handleInput, t }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
      <div
        className="checkout-name-row"
        style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}
      >
        <Field
          name="firstName"
          label={t.cart.firstName}
          type="text"
          iconKey="user"
          value={customer.firstName}
          error={errors.firstName}
          onChange={handleInput}
        />
        <Field
          name="lastName"
          label={t.cart.lastName}
          type="text"
          iconKey="user"
          value={customer.lastName}
          error={errors.lastName}
          onChange={handleInput}
        />
      </div>
      <Field
        name="phone"
        label={t.cart.phone}
        type="tel"
        placeholder="+1 (305) 898-3610"
        iconKey="phone"
        value={customer.phone}
        error={errors.phone}
        onChange={handleInput}
      />
      <Field
        name="email"
        label={t.cart.email}
        type="email"
        placeholder="you@email.com"
        iconKey="mail"
        value={customer.email}
        error={errors.email}
        onChange={handleInput}
      />
      <div>
        <label style={labelStyle}>
          <svg
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#ff914d"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            style={{ marginRight: 6, verticalAlign: -2 }}
          >
            {ICONS.pin}
          </svg>
          {t.cart.address}
        </label>
        <textarea
          name="address"
          value={customer.address}
          onChange={handleInput}
          placeholder={t.cart.addressPlaceholder}
          rows="3"
          style={{
            ...inputStyle,
            borderColor: errors.address ? "#ef4444" : "rgba(53,58,64,.18)",
            resize: "vertical",
            minHeight: 80,
          }}
        />
        {errors.address && <p style={errStyle}>{errors.address}</p>}
      </div>
    </div>
  );
}

const CartDrawer = () => {
  const { t } = useLanguage();
  const {
    cart,
    updateQuantity,
    removeFromCart,
    clearCart,
    totalPrice,
    totalItems,
    isDrawerOpen,
    closeDrawer,
  } = useCart();

  const [customer, setCustomer] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    address: "",
  });
  const [errors, setErrors] = useState({});
  const [showSuccess, setShowSuccess] = useState(false);
  const [step, setStep] = useState("cart");

  useEffect(() => {
    if (isDrawerOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
      const timer = setTimeout(() => setStep("cart"), 300);
      return () => clearTimeout(timer);
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isDrawerOpen]);

  const handleInput = (e) => {
    const { name, value } = e.target;
    setCustomer((c) => ({ ...c, [name]: value }));
    if (errors[name]) setErrors((er) => ({ ...er, [name]: "" }));
  };

  const validate = () => {
    const e = {};
    if (!customer.firstName.trim()) e.firstName = t.cart.fillAllFields;
    if (!customer.lastName.trim()) e.lastName = t.cart.fillAllFields;
    if (!customer.phone.trim()) e.phone = t.cart.fillAllFields;
    else if (!/^[\d\s\-+()]+$/.test(customer.phone))
      e.phone = t.cart.invalidPhone;
    if (!customer.email.trim()) e.email = t.cart.fillAllFields;
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(customer.email))
      e.email = t.cart.invalidEmail;
    if (!customer.address.trim()) e.address = t.cart.fillAllFields;
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const formatMessage = () => {
    let msg = `${t.cart.orderGreeting}\n\n`;
    msg += `${t.cart.orderProducts}:\n`;
    cart.forEach((it) => {
      const sub = it.price * it.quantity;
      const variant = it.variantSize ? ` (${it.variantSize})` : "";
      msg += `- ${it.quantity}x ${it.name}${variant} ($${it.price.toFixed(2)} ${t.cart.each}) = $${sub.toFixed(2)}\n`;
    });
    msg += `\n${t.cart.orderTotal}: $${totalPrice.toFixed(2)}\n\n`;
    msg += `${t.cart.orderCustomer}:\n`;
    msg += `${t.cart.firstName}: ${customer.firstName} ${customer.lastName}\n`;
    msg += `${t.cart.phone}: ${customer.phone}\n`;
    msg += `${t.cart.email}: ${customer.email}\n`;
    msg += `${t.cart.address}: ${customer.address}\n\n`;
    msg += t.cart.thanks;
    return msg;
  };

  const sendWhatsApp = () => {
    if (cart.length === 0) return;
    if (!validate()) return;
    const url = `https://wa.me/13058983610?text=${encodeURIComponent(formatMessage())}`;
    window.open(url, "_blank");
    setShowSuccess(true);
    setTimeout(() => setShowSuccess(false), 3500);
  };

  const sendEmail = () => {
    if (cart.length === 0) return;
    if (!validate()) return;
    const subject = encodeURIComponent(t.cart.emailSubject);
    const body = encodeURIComponent(formatMessage());
    window.location.href = `mailto:tibismarket@gmail.com?subject=${subject}&body=${body}`;
    setShowSuccess(true);
    setTimeout(() => setShowSuccess(false), 3500);
  };

  return (
    <>
      <div
        onClick={closeDrawer}
        aria-hidden={!isDrawerOpen}
        style={{
          position: "fixed",
          inset: 0,
          zIndex: 80,
          background: "rgba(53,58,64,.6)",
          opacity: isDrawerOpen ? 1 : 0,
          pointerEvents: isDrawerOpen ? "auto" : "none",
          transition: "opacity .4s ease",
          backdropFilter: isDrawerOpen ? "blur(4px)" : "none",
          WebkitBackdropFilter: isDrawerOpen ? "blur(4px)" : "none",
        }}
      />
      <aside
        aria-hidden={!isDrawerOpen}
        aria-label={t.cart.title}
        style={{
          position: "fixed",
          top: 0,
          right: 0,
          bottom: 0,
          width: "min(560px, 100vw)",
          zIndex: 90,
          background: "#faf6f0",
          transform: isDrawerOpen ? "translateX(0)" : "translateX(100%)",
          transition: "transform .45s cubic-bezier(.22,.61,.36,1)",
          display: "flex",
          flexDirection: "column",
          boxShadow: "0 0 80px -20px rgba(0,0,0,.4)",
        }}
      >
        <div
          className="drawer-pad"
          style={{
            padding: "24px 28px",
            borderBottom: "1px solid rgba(53,58,64,.1)",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexShrink: 0,
          }}
        >
          <div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 10,
                marginBottom: 6,
              }}
            >
              <span style={{ width: 24, height: 1, background: "#ff914d" }} />
              <span
                style={{
                  fontFamily: "var(--font-sans)",
                  fontSize: 10,
                  letterSpacing: 3,
                  textTransform: "uppercase",
                  color: "#8a7560",
                }}
              >
                {step === "cart" ? t.cart.orderSummary : t.cart.customerData}
              </span>
            </div>
            <h2
              style={{
                fontFamily: "var(--font-display)",
                fontSize: 32,
                fontWeight: 500,
                color: "#353a40",
                margin: 0,
                letterSpacing: "-0.5px",
              }}
            >
              {t.cart.title}
              {totalItems > 0 && (
                <span
                  style={{
                    color: "#ff914d",
                    fontStyle: "italic",
                    fontSize: 22,
                    marginLeft: 10,
                  }}
                >
                  · {totalItems}
                </span>
              )}
            </h2>
          </div>
          <button
            onClick={closeDrawer}
            aria-label="Close"
            style={{
              width: 40,
              height: 40,
              borderRadius: "50%",
              background: "transparent",
              border: "1px solid rgba(53,58,64,.18)",
              display: "grid",
              placeItems: "center",
              cursor: "pointer",
              color: "#353a40",
              transition: "all .2s ease",
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
            >
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        </div>

        <div
          className="drawer-pad-body"
          style={{ flex: 1, overflowY: "auto", padding: "20px 28px" }}
        >
          {cart.length === 0 ? (
            <EmptyState t={t} onClose={closeDrawer} />
          ) : step === "cart" ? (
            <CartItems
              cart={cart}
              updateQuantity={updateQuantity}
              removeFromCart={removeFromCart}
              t={t}
            />
          ) : (
            <CheckoutForm
              customer={customer}
              errors={errors}
              handleInput={handleInput}
              t={t}
            />
          )}
        </div>

        {cart.length > 0 && (
          <div
            className="drawer-pad"
            style={{
              padding: "20px 28px 24px",
              borderTop: "1px solid rgba(53,58,64,.1)",
              background: "rgba(243,236,225,.7)",
              backdropFilter: "blur(8px)",
              WebkitBackdropFilter: "blur(8px)",
              flexShrink: 0,
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "baseline",
                marginBottom: 18,
              }}
            >
              <span
                style={{
                  fontFamily: "var(--font-sans)",
                  fontSize: 11,
                  letterSpacing: 3,
                  textTransform: "uppercase",
                  color: "#8a7560",
                }}
              >
                {t.cart.total}
              </span>
              <span
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: 40,
                  fontWeight: 500,
                  color: "#353a40",
                  letterSpacing: "-1px",
                }}
              >
                <span
                  style={{
                    color: "#ff914d",
                    fontSize: 26,
                    fontStyle: "italic",
                    marginRight: 4,
                  }}
                >
                  $
                </span>
                {totalPrice.toFixed(2)}
              </span>
            </div>

            {step === "cart" ? (
              <>
                <button
                  onClick={() => setStep("checkout")}
                  style={{
                    width: "100%",
                    padding: "16px 24px",
                    background: "#353a40",
                    color: "#faf6f0",
                    border: "none",
                    borderRadius: 4,
                    fontFamily: "var(--font-sans)",
                    fontSize: 14,
                    fontWeight: 500,
                    letterSpacing: 0.5,
                    cursor: "pointer",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: 10,
                    transition: "background .25s ease",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = "#ff914d";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = "#353a40";
                  }}
                >
                  {t.cart.customerData}
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
                </button>
                <button
                  onClick={clearCart}
                  style={{
                    width: "100%",
                    marginTop: 10,
                    padding: 10,
                    background: "transparent",
                    color: "#8a7560",
                    border: "none",
                    fontFamily: "var(--font-sans)",
                    fontSize: 12,
                    letterSpacing: 2,
                    textTransform: "uppercase",
                    cursor: "pointer",
                    transition: "color .25s ease",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = "#ef4444";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = "#8a7560";
                  }}
                >
                  {t.cart.clear}
                </button>
              </>
            ) : (
              <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                <button
                  onClick={sendWhatsApp}
                  style={{
                    width: "100%",
                    padding: "16px 24px",
                    background: "#25D366",
                    color: "#fff",
                    border: "none",
                    borderRadius: 4,
                    fontFamily: "var(--font-sans)",
                    fontSize: 14,
                    fontWeight: 600,
                    letterSpacing: 0.5,
                    cursor: "pointer",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: 12,
                    transition: "all .25s ease",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "translateY(-2px)";
                    e.currentTarget.style.boxShadow =
                      "0 12px 24px -8px rgba(37,211,102,.5)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "translateY(0)";
                    e.currentTarget.style.boxShadow = "none";
                  }}
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.464 3.488" />
                  </svg>
                  {t.cart.sendViaWhatsApp}
                </button>
                <button
                  onClick={sendEmail}
                  style={{
                    width: "100%",
                    padding: "16px 24px",
                    background: "#ff914d",
                    color: "#fff",
                    border: "none",
                    borderRadius: 4,
                    fontFamily: "var(--font-sans)",
                    fontSize: 14,
                    fontWeight: 600,
                    letterSpacing: 0.5,
                    cursor: "pointer",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: 12,
                    transition: "all .25s ease",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "translateY(-2px)";
                    e.currentTarget.style.boxShadow =
                      "0 12px 24px -8px rgba(255,145,77,.55)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "translateY(0)";
                    e.currentTarget.style.boxShadow = "none";
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
                  {t.cart.sendViaEmail}
                </button>
                <button
                  onClick={() => setStep("cart")}
                  style={{
                    width: "100%",
                    padding: 8,
                    background: "transparent",
                    color: "#8a7560",
                    border: "none",
                    fontFamily: "var(--font-sans)",
                    fontSize: 12,
                    letterSpacing: 2,
                    textTransform: "uppercase",
                    cursor: "pointer",
                    transition: "color .25s ease",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = "#353a40";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = "#8a7560";
                  }}
                >
                  ← {t.cart.orderSummary}
                </button>
                {showSuccess && (
                  <div
                    style={{
                      marginTop: 8,
                      padding: "12px 16px",
                      background: "rgba(16,185,129,.1)",
                      color: "#10b981",
                      border: "1px solid rgba(16,185,129,.3)",
                      borderRadius: 4,
                      fontFamily: "var(--font-sans)",
                      fontSize: 13,
                      fontWeight: 600,
                      textAlign: "center",
                    }}
                  >
                    ✓ {t.cart.orderSent}
                  </div>
                )}
              </div>
            )}
          </div>
        )}
      </aside>
    </>
  );
};

export default CartDrawer;
