import React from "react";
import { Link } from "react-router-dom";
import { useLanguage } from "../context/LanguageContext";

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
      {/* Hero Section - Profesional y Moderno */}
      <section className="relative min-h-screen w-full overflow-hidden">
        {/* Background con overlay mejorado */}
        <div className="absolute inset-0 bg-gradient-to-br from-dark via-dark/95 to-primary/20">
          <div className="absolute inset-0 opacity-20"></div>
        </div>

        {/* Decorative elements */}
        <div className="absolute top-20 right-20 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-pulse" />
        <div
          className="absolute bottom-20 left-20 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "1s" }}
        />

        {/* Content Grid */}
        <div className="relative z-10 min-h-screen flex items-center">
          <div className="max-w-7xl mx-auto px-6 py-20 w-full">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left Content */}
              <div className="space-y-8 animate-fade-in">
                <div className="inline-block">
                  <span className="bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold border border-primary/20">
                    Desde 1943
                  </span>
                </div>

                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
                  {t.home.hero.title}
                </h1>

                <p className="text-xl md:text-2xl text-gray-300 leading-relaxed italic font-light">
                  {t.home.hero.subtitle}
                </p>

                <p className="text-lg text-gray-400 leading-relaxed max-w-2xl">
                  Arepas artesanales de trigo, hechas a mano en Miami con
                  ingredientes nobles y el alma de tres generaciones.
                </p>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                  <Link
                    to="/products"
                    className="group relative inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-primary rounded-xl overflow-hidden shadow-2xl hover:shadow-primary/50 transition-all duration-300 hover:scale-105"
                  >
                    <span className="relative z-10 flex items-center gap-2">
                      Ver Productos
                      <svg
                        className="w-5 h-5 group-hover:translate-x-1 transition-transform"
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

                  <Link
                    to="/contact"
                    className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-white/10 backdrop-blur-sm rounded-xl border-2 border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105"
                  >
                    Contáctanos
                  </Link>
                </div>

                {/* Trust badges */}
                <div className="flex flex-wrap items-center gap-6 pt-8 border-t border-white/10">
                  <div className="flex items-center gap-2 text-gray-300">
                    <svg
                      className="w-5 h-5 text-primary"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <span className="text-sm">Hecho a Mano</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-300">
                    <svg
                      className="w-5 h-5 text-primary"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="text-sm">100% Artesanal</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-300">
                    <svg
                      className="w-5 h-5 text-primary"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M8 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM15 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
                      <path d="M3 4a1 1 0 00-1 1v10a1 1 0 001 1h1.05a2.5 2.5 0 014.9 0H10a1 1 0 001-1V5a1 1 0 00-1-1H3zM14 7a1 1 0 00-1 1v6.05A2.5 2.5 0 0115.95 16H17a1 1 0 001-1v-5a1 1 0 00-.293-.707l-2-2A1 1 0 0015 7h-1z" />
                    </svg>
                    <span className="text-sm">Envíos a todo USA</span>
                  </div>
                </div>
              </div>

              {/* Right Image */}
              <div className="relative lg:block animate-scale-in">
                <div className="relative">
                  {/* Glow effect */}
                  <div className="absolute -inset-8 bg-gradient-to-r from-primary/30 via-primary/20 to-transparent rounded-3xl blur-3xl" />

                  {/* Image container */}
                  <div className="relative bg-white/5 backdrop-blur-sm rounded-3xl p-2 border border-white/10">
                    <img
                      src={importImage("tibisay-nilyan.png")}
                      alt="María Tibisay Gómez"
                      className="w-full h-auto rounded-2xl shadow-2xl"
                    />
                  </div>

                  {/* Floating card */}
                  <div
                    className="absolute -bottom-6 -left-6 bg-white rounded-2xl p-6 shadow-2xl max-w-xs animate-fade-in"
                    style={{ animationDelay: "0.5s" }}
                  >
                    <div className="flex items-center gap-4">
                      <div className="bg-primary/10 p-3 rounded-xl">
                        <svg
                          className="w-8 h-8 text-primary"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      </div>
                      <div>
                        <p className="text-dark font-bold text-lg">81 años</p>
                        <p className="text-gray-600 text-sm">
                          de tradición familiar
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <svg
            className="w-6 h-6 text-white/60"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-20 md:py-32 px-6 bg-gradient-to-b from-white via-secondary/20 to-white">
        <div className="max-w-5xl mx-auto text-center">
          <p className="text-xl md:text-2xl text-gray-700 leading-relaxed">
            {t.home.intro.text}
          </p>
        </div>
      </section>

      {/* Identity Section with Image */}
      <section className="py-20 md:py-32 px-6 bg-gradient-to-br from-primary/5 to-secondary/30">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-dark leading-tight">
                María Tibisay Gómez
              </h2>
              <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
                {t.home.identity.text}
              </p>
            </div>

            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-primary/30 to-primary/10 rounded-3xl blur-2xl" />
              <img
                src={importImage("WhatsApp_Image_20251115_at_11_37_24_2.jpeg")}
                alt="Arepas Tradicionales"
                className="relative rounded-2xl shadow-2xl w-full aspect-square object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Learning Section */}
      <section className="py-20 md:py-32 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="order-2 md:order-1 relative">
              <div className="absolute -inset-4 bg-gradient-to-l from-primary/30 to-primary/10 rounded-3xl blur-2xl" />
              <img
                src={importImage("WhatsApp_Image_20251115_at_11_37_22.jpeg")}
                alt="Mini Arepas"
                className="relative rounded-2xl shadow-2xl w-full aspect-square object-cover"
              />
            </div>

            <div className="order-1 md:order-2 space-y-6">
              <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
                {t.home.learning.text}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="py-20 md:py-32 px-6 bg-gradient-to-br from-secondary/40 via-primary/5 to-secondary/40">
        <div className="max-w-5xl mx-auto">
          <div className="bg-gradient-to-br from-white/80 to-white/60 backdrop-blur-sm p-10 md:p-16 rounded-xl shadow-xl border border-primary/10">
            <blockquote className="text-2xl md:text-3xl lg:text-4xl italic text-dark leading-relaxed text-center font-light mb-8">
              "{t.home.quote.text}"
            </blockquote>
            <p className="text-primary font-bold text-xl md:text-2xl text-center">
              — Abuela Cantalicia
            </p>
          </div>
        </div>
      </section>

      {/* Legacy Section */}
      <section className="py-20 md:py-32 px-6 bg-white">
        <div className="max-w-5xl mx-auto space-y-8">
          <p className="text-xl md:text-2xl text-gray-700 leading-relaxed text-center">
            {t.home.legacy.text}
          </p>
          <p className="text-xl md:text-2xl text-gray-700 leading-relaxed text-center font-medium">
            {t.home.meaning.text}
          </p>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-16 md:py-24 px-6 bg-gradient-to-b from-secondary/20 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {[
              "WhatsApp_Image_20251115_at_11_37_23_3.jpeg",
              "WhatsApp_Image_20251115_at_11_37_24.jpeg",
              "WhatsApp_Image_20251115_at_11_37_22_1.jpeg",
              "WhatsApp_Image_20251115_at_11_37_23_5.jpeg",
            ].map((img, idx) => (
              <div
                key={idx}
                className="relative overflow-hidden rounded-2xl shadow-lg group"
              >
                <img
                  src={importImage(img)}
                  alt={`Producto ${idx + 1}`}
                  className="w-full aspect-square object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tibi's Market Section */}
      <section className="py-20 md:py-32 px-6 bg-gradient-to-br from-dark via-dark/98 to-primary/20 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />

        <div className="max-w-7xl mx-auto relative">
          <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="relative">
              <div className="absolute -inset-4 bg-primary/30 rounded-3xl blur-2xl" />
              <img
                src={importImage("WhatsApp_Image_20251115_at_11_37_24_3.jpeg")}
                alt="Tibi's Market"
                className="relative rounded-2xl shadow-2xl w-full aspect-square object-cover"
              />
            </div>

            <div className="space-y-8">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary leading-tight">
                {t.home.tibisMarket.title}
              </h2>
              <p className="text-lg md:text-xl text-gray-200 leading-relaxed">
                {t.home.tibisMarket.text1}
              </p>
              <p className="text-lg md:text-xl text-gray-200 leading-relaxed">
                {t.home.tibisMarket.text2}
              </p>
              <p className="text-lg md:text-xl text-gray-200 leading-relaxed">
                {t.home.tibisMarket.text3}
              </p>
              <Link
                to="/products"
                className="btn-primary inline-block shadow-2xl hover:shadow-primary/50 transition-all text-lg"
              >
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
