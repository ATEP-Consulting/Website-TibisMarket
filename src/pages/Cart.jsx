import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaWhatsapp, FaTrash } from "react-icons/fa";
import { MdEmail, MdPerson, MdPhone, MdLocationOn } from "react-icons/md";
import { useCart } from "../context/CartContext";
import { useLanguage } from "../context/LanguageContext";
import CartItem from "../components/CartItem";

const Cart = () => {
  const { cart, totalPrice, clearCart } = useCart();
  const { t } = useLanguage();

  const [customerData, setCustomerData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    address: "",
  });

  const [errors, setErrors] = useState({});
  const [showSuccess, setShowSuccess] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCustomerData((prev) => ({
      ...prev,
      [name]: value,
    }));
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!customerData.firstName.trim()) {
      newErrors.firstName = t.cart.fillAllFields;
    }

    if (!customerData.lastName.trim()) {
      newErrors.lastName = t.cart.fillAllFields;
    }

    if (!customerData.phone.trim()) {
      newErrors.phone = t.cart.fillAllFields;
    } else if (!/^[\d\s\-+()]+$/.test(customerData.phone)) {
      newErrors.phone = t.cart.invalidPhone;
    }

    if (!customerData.email.trim()) {
      newErrors.email = t.cart.fillAllFields;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(customerData.email)) {
      newErrors.email = t.cart.invalidEmail;
    }

    if (!customerData.address.trim()) {
      newErrors.address = t.cart.fillAllFields;
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const formatOrderMessage = () => {
    let message = "¡Hola! Me gustaría hacer el siguiente pedido:\n\n";
    message += "PRODUCTOS:\n";

    cart.forEach((item) => {
      const subtotal = item.price * item.quantity;
      message += `- ${item.quantity}x ${item.name} ($${item.price.toFixed(
        2
      )} c/u) = $${subtotal.toFixed(2)}\n`;
    });

    message += `\nTOTAL DEL PEDIDO: $${totalPrice.toFixed(2)}\n\n`;
    message += "DATOS DEL CLIENTE:\n";
    message += `Nombre: ${customerData.firstName} ${customerData.lastName}\n`;
    message += `Teléfono: ${customerData.phone}\n`;
    message += `Email: ${customerData.email}\n`;
    message += `Dirección de Envío: ${customerData.address}\n\n`;
    message += "¡Gracias!";

    return message;
  };

  const handleSendViaWhatsApp = () => {
    if (cart.length === 0) {
      alert(t.cart.emptyCart);
      return;
    }

    if (!validateForm()) {
      return;
    }

    const message = formatOrderMessage();
    const phoneNumber = "13058983610";
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

    window.open(whatsappUrl, "_blank");
    setShowSuccess(true);
    setTimeout(() => setShowSuccess(false), 3000);
  };

  const handleSendViaEmail = () => {
    if (cart.length === 0) {
      alert(t.cart.emptyCart);
      return;
    }

    if (!validateForm()) {
      return;
    }

    const message = formatOrderMessage();
    const subject = encodeURIComponent("Nuevo Pedido - Tibi's Market");
    const body = encodeURIComponent(message);
    const mailtoUrl = `mailto:tibismarket@gmail.com?subject=${subject}&body=${body}`;

    window.location.href = mailtoUrl;
    setShowSuccess(true);
    setTimeout(() => setShowSuccess(false), 3000);
  };

  // Empty Cart State - ARREGLADO
  if (cart.length === 0) {
    return (
      <div className="min-h-screen bg-white">
        {/* Hero vacío */}
        <section className="relative py-32 px-6 overflow-hidden bg-gradient-to-br from-dark/95 via-dark/90 to-primary/20">
          <div className="absolute top-20 right-20 w-72 h-72 bg-primary/20 rounded-full blur-3xl" />
          <div className="absolute bottom-20 left-20 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />

          <div className="max-w-5xl mx-auto text-center relative z-10">
            <div className="inline-block mb-6">
              <span className="bg-primary/20 text-primary px-6 py-3 rounded-full text-sm font-semibold border border-primary/30">
                {t.cart.hero.tagline}
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
              {t.cart.title}
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 font-light italic">
              {t.cart.subtitle}
            </p>
          </div>
        </section>

        {/* Empty state content */}
        <section className="py-20 px-6">
          <div className="max-w-2xl mx-auto text-center">
            <div className="bg-secondary/30 rounded-3xl p-12 mb-8">
              <svg
                className="w-24 h-24 mx-auto text-gray-400 mb-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                />
              </svg>
              <h2 className="text-3xl font-bold text-dark mb-4">
                {t.cart.empty}
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Explora nuestros productos artesanales y añade tus favoritos
              </p>
              <Link
                to="/products"
                className="inline-flex items-center justify-center px-10 py-5 text-lg font-semibold text-white bg-primary rounded-xl shadow-2xl hover:shadow-primary/50 transition-all duration-300 hover:scale-105"
              >
                <span className="flex items-center gap-2">
                  {t.cart.continueShopping}
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </span>
              </Link>
            </div>
          </div>
        </section>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-32 px-6 overflow-hidden bg-gradient-to-br from-dark/60 via-dark/40 to-primary/20">
        <div className="absolute top-20 right-20 w-72 h-72 bg-primary/20 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />

        <div className="max-w-5xl mx-auto text-center relative z-10">
          <div className="inline-block mb-6">
            <span className="bg-primary/20 text-primary px-6 py-3 rounded-full text-sm font-semibold border border-primary/30">
              Tu Pedido
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
            {t.cart.title}
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 font-light">
            Revisa tu pedido y completa tus datos
          </p>
        </div>
      </section>

      {/* Cart Content */}
      <section className="py-20 md:py-32 px-6 bg-gradient-to-b from-white via-secondary/10 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 items-start">
            {/* Order Summary - Left Column */}
            <div className="lg:col-span-2 order-2 lg:order-1">
              <div className="bg-white rounded-3xl shadow-xl p-6 md:p-8 border border-gray-100">
                <div className="flex justify-between items-center mb-8 pb-6 border-b border-gray-200">
                  <h2 className="text-2xl md:text-3xl font-bold text-dark">
                    {t.cart.orderSummary}
                  </h2>
                  <button
                    onClick={clearCart}
                    className="flex items-center gap-2 text-error hover:text-red-600 transition-colors px-4 py-2 rounded-lg hover:bg-red-50"
                  >
                    <FaTrash />
                    <span className="hidden sm:inline">{t.cart.clearCart}</span>
                  </button>
                </div>

                {/* Cart Items */}
                <div className="space-y-4 mb-8">
                  {cart.map((item) => (
                    <CartItem key={item.id} item={item} />
                  ))}
                </div>

                {/* Total */}
                <div className="mt-8 pt-8 border-t-2 border-gray-200">
                  <div className="flex justify-between items-center">
                    <span className="text-2xl md:text-3xl font-bold text-dark">
                      {t.cart.total}:
                    </span>
                    <span className="text-3xl md:text-4xl font-bold text-primary">
                      ${totalPrice.toFixed(2)}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Customer Data & Send Options - Right Column */}
            <div className="lg:col-span-1 order-1 lg:order-2 space-y-6">
              {/* Customer Data Form */}
              <div className="bg-white rounded-3xl shadow-xl p-6 md:p-8 border border-gray-100 sticky top-24">
                <h2 className="text-2xl font-bold text-dark mb-6">
                  {t.cart.customerData}
                </h2>

                <div className="space-y-5">
                  {/* First Name */}
                  <div>
                    <label className="block text-sm font-semibold text-dark mb-2">
                      <MdPerson className="inline mr-2 text-primary" />
                      {t.cart.firstName}
                    </label>
                    <input
                      type="text"
                      name="firstName"
                      value={customerData.firstName}
                      onChange={handleInputChange}
                      className={`input-field ${
                        errors.firstName ? "border-error" : ""
                      }`}
                      placeholder={t.cart.firstName}
                    />
                    {errors.firstName && (
                      <p className="text-error text-sm mt-1">
                        {errors.firstName}
                      </p>
                    )}
                  </div>

                  {/* Last Name */}
                  <div>
                    <label className="block text-sm font-semibold text-dark mb-2">
                      <MdPerson className="inline mr-2 text-primary" />
                      {t.cart.lastName}
                    </label>
                    <input
                      type="text"
                      name="lastName"
                      value={customerData.lastName}
                      onChange={handleInputChange}
                      className={`input-field ${
                        errors.lastName ? "border-error" : ""
                      }`}
                      placeholder={t.cart.lastName}
                    />
                    {errors.lastName && (
                      <p className="text-error text-sm mt-1">
                        {errors.lastName}
                      </p>
                    )}
                  </div>

                  {/* Phone */}
                  <div>
                    <label className="block text-sm font-semibold text-dark mb-2">
                      <MdPhone className="inline mr-2 text-primary" />
                      {t.cart.phone}
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={customerData.phone}
                      onChange={handleInputChange}
                      className={`input-field ${
                        errors.phone ? "border-error" : ""
                      }`}
                      placeholder="+1 (305) 898-3610"
                    />
                    {errors.phone && (
                      <p className="text-error text-sm mt-1">{errors.phone}</p>
                    )}
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-sm font-semibold text-dark mb-2">
                      <MdEmail className="inline mr-2 text-primary" />
                      {t.cart.email}
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={customerData.email}
                      onChange={handleInputChange}
                      className={`input-field ${
                        errors.email ? "border-error" : ""
                      }`}
                      placeholder="tibismarket@gmail.com"
                    />
                    {errors.email && (
                      <p className="text-error text-sm mt-1">{errors.email}</p>
                    )}
                  </div>

                  {/* Address */}
                  <div>
                    <label className="block text-sm font-semibold text-dark mb-2">
                      <MdLocationOn className="inline mr-2 text-primary" />
                      {t.cart.address}
                    </label>
                    <textarea
                      name="address"
                      value={customerData.address}
                      onChange={handleInputChange}
                      className={`input-field ${
                        errors.address ? "border-error" : ""
                      }`}
                      placeholder={t.cart.addressPlaceholder}
                      rows="3"
                    />
                    {errors.address && (
                      <p className="text-error text-sm mt-1">
                        {errors.address}
                      </p>
                    )}
                  </div>
                </div>

                {/* Send Order Buttons */}
                <div className="mt-8 pt-6 border-t border-gray-200 space-y-4">
                  <button
                    onClick={handleSendViaWhatsApp}
                    className="w-full bg-success hover:bg-green-600 text-white px-6 py-4 rounded-xl font-bold text-lg transition-all duration-300 transform hover:scale-105 active:scale-95 flex items-center justify-center gap-3 shadow-lg"
                  >
                    <FaWhatsapp className="text-2xl" />
                    <span>{t.cart.sendViaWhatsApp}</span>
                  </button>

                  <button
                    onClick={handleSendViaEmail}
                    className="w-full bg-primary hover:bg-orange-600 text-white px-6 py-4 rounded-xl font-bold text-lg transition-all duration-300 transform hover:scale-105 active:scale-95 flex items-center justify-center gap-3 shadow-lg"
                  >
                    <MdEmail className="text-2xl" />
                    <span>{t.cart.sendViaEmail}</span>
                  </button>
                </div>

                {/* Success Message */}
                {showSuccess && (
                  <div className="mt-4 bg-success/10 border border-success text-success px-4 py-3 rounded-xl animate-fade-in">
                    <p className="font-semibold text-center">
                      {t.cart.orderSent}
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Cart;
