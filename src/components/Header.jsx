import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { HiMenu, HiX } from "react-icons/hi";
import { FaShoppingCart } from "react-icons/fa";
import { useLanguage } from "../context/LanguageContext";
import { useCart } from "../context/CartContext";
import logo from "/public/images/WhatsApp_Image_20251115_at_11_37_24_1.jpeg";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const { language, t, toggleLanguage } = useLanguage();
  const { totalItems } = useCart();
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  // Control de scroll para mostrar/ocultar header
  useEffect(() => {
    const controlNavbar = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY < lastScrollY || currentScrollY < 10) {
        // Scrolling up o en el top
        setIsVisible(true);
      } else if (currentScrollY > lastScrollY && currentScrollY > 80) {
        // Scrolling down y pasó de 80px
        setIsVisible(false);
        setIsMenuOpen(false); // Cerrar menu mobile si está abierto
      }

      setLastScrollY(currentScrollY);
    };

    // Solo aplicar el comportamiento de scroll si el menú NO está abierto
    if (!isMenuOpen) {
      window.addEventListener("scroll", controlNavbar);
    }

    return () => {
      window.removeEventListener("scroll", controlNavbar);
    };
  }, [lastScrollY, isMenuOpen]); // ← AÑADIDO isMenuOpen como dependencia

  return (
    <header
      className={`bg-white shadow-lg fixed top-0 left-0 right-0 z-50 transition-transform duration-300 ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <img
              src={logo}
              alt="Tibi's Market"
              className="h-16 w-16 rounded-full"
            />
            <span className="text-2xl font-semibold text-primary">
              Tibi's Market
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              to="/"
              className={`text-lg font-semibold transition-colors ${
                isActive("/") ? "text-primary" : "text-dark hover:text-primary"
              }`}
            >
              {t.nav.home}
            </Link>
            <Link
              to="/products"
              className={`text-lg font-semibold transition-colors ${
                isActive("/products")
                  ? "text-primary"
                  : "text-dark hover:text-primary"
              }`}
            >
              {t.nav.products}
            </Link>
            <Link
              to="/about"
              className={`text-lg font-semibold transition-colors ${
                isActive("/about")
                  ? "text-primary"
                  : "text-dark hover:text-primary"
              }`}
            >
              {t.nav.about}
            </Link>
            <Link
              to="/contact"
              className={`text-lg font-semibold transition-colors ${
                isActive("/contact")
                  ? "text-primary"
                  : "text-dark hover:text-primary"
              }`}
            >
              {t.nav.contact}
            </Link>

            {/* Cart Icon with Badge */}
            <Link
              to="/cart"
              className="relative text-primary hover:text-orange-500 transition-colors"
            >
              <FaShoppingCart className="text-2xl" />
              {totalItems > 0 && (
                <span className="absolute -top-2 -right-2 bg-error text-white text-xs font-bold rounded-full h-6 w-6 flex items-center justify-center animate-scale-in">
                  {totalItems}
                </span>
              )}
            </Link>

            {/* Language Switcher */}
            <button
              onClick={toggleLanguage}
              className="px-4 py-2 bg-secondary text-dark rounded-lg font-semibold hover:bg-gray-300 transition-all"
            >
              {language === "es" ? "EN" : "ES"}
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-4">
            <Link
              to="/cart"
              className="relative text-primary"
              aria-label="Ver carrito de compras"
            >
              <FaShoppingCart className="text-2xl" />
              {totalItems > 0 && (
                <span className="absolute -top-2 -right-2 bg-error text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                  {totalItems}
                </span>
              )}
            </Link>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-primary text-3xl"
              aria-label={isMenuOpen ? "Cerrar menú" : "Abrir menú"}
              aria-expanded={isMenuOpen}
            >
              {isMenuOpen ? <HiX /> : <HiMenu />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 animate-slide-up">
            <div className="flex flex-col space-y-4">
              <Link
                to="/"
                onClick={() => setIsMenuOpen(false)}
                className={`text-lg font-semibold ${
                  isActive("/") ? "text-primary" : "text-dark"
                }`}
              >
                {t.nav.home}
              </Link>
              <Link
                to="/products"
                onClick={() => setIsMenuOpen(false)}
                className={`text-lg font-semibold ${
                  isActive("/products") ? "text-primary" : "text-dark"
                }`}
              >
                {t.nav.products}
              </Link>
              <Link
                to="/about"
                onClick={() => setIsMenuOpen(false)}
                className={`text-lg font-semibold ${
                  isActive("/about") ? "text-primary" : "text-dark"
                }`}
              >
                {t.nav.about}
              </Link>
              <Link
                to="/contact"
                onClick={() => setIsMenuOpen(false)}
                className={`text-lg font-semibold ${
                  isActive("/contact") ? "text-primary" : "text-dark"
                }`}
              >
                {t.nav.contact}
              </Link>
              <button
                onClick={toggleLanguage}
                className="px-4 py-2 bg-secondary text-dark rounded-lg font-semibold text-left"
              >
                {language === "es" ? "English" : "Español"}
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
