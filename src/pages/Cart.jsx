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
    // Clear error when user starts typing
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
    } else if (!/^[\d\s\-\+\(\)]+$/.test(customerData.phone)) {
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
    const phoneNumber = "13051234567"; // WhatsApp number
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
    const mailtoUrl = `mailto:info@tibismarket.com?subject=${subject}&body=${body}`;

    window.location.href = mailtoUrl;
    setShowSuccess(true);
    setTimeout(() => setShowSuccess(false), 3000);
  };

  if (cart.length === 0) {
    return (
      <div className="min-h-screen bg-secondary flex items-center justify-center px-4">
        <div className="text-center animate-fade-in">
          <h2 className="text-4xl font-bold text-dark mb-4">{t.cart.empty}</h2>
          <Link to="/products" className="btn-primary inline-block">
            {t.cart.continueShopping}
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-secondary py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <h1 className="section-title mb-12 animate-fade-in">{t.cart.title}</h1>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Order Summary - Left Column */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-xl shadow-lg p-6 mb-6 animate-slide-up">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold text-dark">
                  {t.cart.orderSummary}
                </h2>
                <button
                  onClick={clearCart}
                  className="flex items-center space-x-2 text-error hover:text-red-600 transition-colors"
                >
                  <FaTrash />
                  <span>{t.cart.clearCart}</span>
                </button>
              </div>

              {/* Cart Items */}
              <div className="space-y-4">
                {cart.map((item) => (
                  <CartItem key={item.id} item={item} />
                ))}
              </div>

              {/* Total */}
              <div className="mt-8 pt-6 border-t-2 border-gray-200">
                <div className="flex justify-between items-center">
                  <span className="text-3xl font-bold text-dark">
                    {t.cart.total}:
                  </span>
                  <span className="text-4xl font-bold text-primary">
                    ${totalPrice.toFixed(2)}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Customer Data & Send Options - Right Column */}
          <div className="lg:col-span-1">
            {/* Customer Data Form */}
            <div className="bg-white rounded-xl shadow-lg p-6 mb-6 animate-scale-in">
              <h2 className="text-2xl font-bold text-dark mb-6">
                {t.cart.customerData}
              </h2>

              <div className="space-y-4">
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
                    <p className="text-error text-sm mt-1">{errors.lastName}</p>
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
                    placeholder="+1 (305) 123-4567"
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
                    placeholder="ejemplo@email.com"
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
                    <p className="text-error text-sm mt-1">{errors.address}</p>
                  )}
                </div>
              </div>
            </div>

            {/* Send Order Buttons */}
            <div className="bg-white rounded-xl shadow-lg p-6 animate-scale-in">
              <h2 className="text-xl font-bold text-dark mb-4">
                {t.cart.sendOrder}
              </h2>

              <div className="space-y-4">
                <button
                  onClick={handleSendViaWhatsApp}
                  className="w-full bg-success hover:bg-green-600 text-white px-6 py-4 rounded-lg font-bold text-lg transition-all duration-300 transform hover:scale-105 active:scale-95 flex items-center justify-center space-x-3 shadow-lg"
                >
                  <FaWhatsapp className="text-2xl" />
                  <span>{t.cart.sendViaWhatsApp}</span>
                </button>

                <button
                  onClick={handleSendViaEmail}
                  className="w-full bg-primary hover:bg-orange-600 text-white px-6 py-4 rounded-lg font-bold text-lg transition-all duration-300 transform hover:scale-105 active:scale-95 flex items-center justify-center space-x-3 shadow-lg"
                >
                  <MdEmail className="text-2xl" />
                  <span>{t.cart.sendViaEmail}</span>
                </button>
              </div>

              {/* Success Message */}
              {showSuccess && (
                <div className="mt-4 bg-success/10 border border-success text-success px-4 py-3 rounded-lg animate-fade-in">
                  <p className="font-semibold">{t.cart.orderSent}</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
