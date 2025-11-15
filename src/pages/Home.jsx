import React from "react";
import { Link } from "react-router-dom";
import { useLanguage } from "../context/LanguageContext";

// Importar imágenes
const importImage = (imageName) => {
  try {
    return new URL(`../assets/images/${imageName}`, import.meta.url).href;
  } catch {
    return "";
  }
};

const Home = () => {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="hero-section animate-fade-in">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(${importImage(
              "WhatsApp_Image_20251115_at_12_45_08.jpeg"
            )})`,
          }}
        />
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 animate-slide-up">
            {t.home.hero.title}
          </h1>
          <p className="text-2xl md:text-3xl text-white/90 mb-8 animate-slide-up italic">
            {t.home.hero.subtitle}
          </p>
          <Link
            to="/products"
            className="btn-primary inline-block text-xl animate-scale-in"
          >
            {t.nav.products}
          </Link>
        </div>
      </section>

      {/* Section 1 - Una Historia de Tradición */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h2 className="text-4xl font-bold text-dark mb-6">
                {t.home.section1.title}
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                {t.home.section1.text}
              </p>
            </div>
            <div className="animate-scale-in">
              <img
                src={importImage("WhatsApp_Image_20251115_at_11_37_24_2.jpeg")}
                alt="Arepas Tradicionales"
                className="rounded-2xl shadow-2xl w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Image Gallery */}
      <section className="py-12 px-4 bg-secondary">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              "WhatsApp_Image_20251115_at_11_37_23_3.jpeg",
              "WhatsApp_Image_20251115_at_11_37_24.jpeg",
              "WhatsApp_Image_20251115_at_11_37_22_1.jpeg",
              "WhatsApp_Image_20251115_at_11_37_23_5.jpeg",
            ].map((img, idx) => (
              <div
                key={idx}
                className="animate-fade-in overflow-hidden rounded-xl shadow-lg"
              >
                <img
                  src={importImage(img)}
                  alt={`Producto ${idx + 1}`}
                  className="w-full h-64 object-cover hover:scale-110 transition-transform duration-500"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 2 - Un Legado Familiar */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1 animate-scale-in">
              <img
                src={importImage("WhatsApp_Image_20251115_at_11_37_22.jpeg")}
                alt="Mini Arepas"
                className="rounded-2xl shadow-2xl w-full"
              />
            </div>
            <div className="order-1 md:order-2 animate-fade-in">
              <h2 className="text-4xl font-bold text-dark mb-6">
                {t.home.section2.title}
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                {t.home.section2.text}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3 - El Arte de Amasar */}
      <section className="py-20 px-4 bg-gradient-to-br from-primary/10 to-secondary">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h2 className="text-4xl font-bold text-dark mb-6">
                {t.home.section3.title}
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                {t.home.section3.text}
              </p>
            </div>
            <div className="animate-scale-in">
              <img
                src={importImage("WhatsApp_Image_20251115_at_11_37_24_3.jpeg")}
                alt="Pack Familiar"
                className="rounded-2xl shadow-2xl w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Section 4 - Sabiduría Ancestral */}
      <section className="py-20 px-4">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-dark mb-8 animate-fade-in">
            {t.home.section4.title}
          </h2>
          <blockquote className="text-2xl italic text-gray-700 leading-relaxed mb-12 animate-slide-up">
            "{t.home.section4.text}"
          </blockquote>
          <div className="animate-scale-in">
            <img
              src={importImage("WhatsApp_Image_20251115_at_11_37_23_7.jpeg")}
              alt="Arepas Artesanales"
              className="rounded-2xl shadow-2xl w-full max-w-2xl mx-auto"
            />
          </div>
        </div>
      </section>

      {/* Section 5 - Más que Comida */}
      <section className="py-20 px-4 bg-dark text-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-scale-in">
              <img
                src={importImage("WhatsApp_Image_20251115_at_11_37_23_6.jpeg")}
                alt="Are-Chips"
                className="rounded-2xl shadow-2xl w-full"
              />
            </div>
            <div className="animate-fade-in">
              <h2 className="text-4xl font-bold text-primary mb-6">
                {t.home.section5.title}
              </h2>
              <p className="text-lg text-gray-300 leading-relaxed mb-8">
                {t.home.section5.text}
              </p>
              <Link to="/products" className="btn-primary inline-block">
                {t.nav.products}
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
