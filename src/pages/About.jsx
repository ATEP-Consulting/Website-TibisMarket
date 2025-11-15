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

const About = () => {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="elative py-32 px-6 overflow-hidden bg-gradient-to-br from-dark/95 via-dark/90 to-primary/20">
        <div className="absolute top-20 right-20 w-72 h-72 bg-primary/20 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />

        <div className="max-w-5xl mx-auto text-center relative z-10">
          <div className="inline-block mb-6">
            <span className="bg-primary/20 text-primary px-6 py-3 rounded-full text-sm font-semibold border border-primary/30">
              {t.about.badge}
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
            {t.about.hero.title}
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 font-light italic">
            {t.about.hero.subtitle}
          </p>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-20 md:py-32 px-6 bg-gradient-to-b from-white to-secondary/20">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-2xl md:text-3xl text-gray-700 font-light italic leading-relaxed">
            {t.about.intro.text}
          </p>
        </div>
      </section>

      {/* Section 1 */}
      <section className="py-20 md:py-32 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="space-y-6">
              <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
                {t.about.section1.text}
              </p>
            </div>

            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-primary/30 to-primary/10 rounded-3xl blur-2xl" />
              <img
                src={importImage("WhatsApp_Image_20251115_at_12_45_08.jpeg")}
                alt="María Tibisay Gómez"
                className="relative rounded-2xl shadow-2xl w-full aspect-square object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Section 2 - Quote & Birth of Tibi's */}
      <section className="py-20 md:py-32 px-6 bg-gradient-to-br from-primary/5 to-secondary/30">
        <div className="max-w-5xl mx-auto space-y-12">
          <div className="bg-white/80 backdrop-blur-sm p-10 md:p-16 rounded-3xl shadow-2xl border border-primary/10">
            <blockquote className="text-2xl md:text-3xl italic text-dark text-center leading-relaxed mb-6">
              "{t.about.section2.quote}"
            </blockquote>
            <p className="text-center text-gray-600 font-semibold">— Mi hija</p>
          </div>

          <div className="text-center space-y-4">
            <p className="text-2xl md:text-3xl font-bold text-dark">
              {t.about.section2.text}
            </p>
          </div>
        </div>
      </section>

      {/* Section 3 */}
      <section className="py-20 md:py-32 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="order-2 md:order-1 relative">
              <div className="absolute -inset-4 bg-gradient-to-l from-primary/30 to-primary/10 rounded-3xl blur-2xl" />
              <img
                src={importImage("WhatsApp_Image_20251115_at_11_37_24_2.jpeg")}
                alt="Arepas Tradicionales"
                className="relative rounded-2xl shadow-2xl w-full aspect-square object-cover"
              />
            </div>

            <div className="order-1 md:order-2 space-y-6">
              <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
                {t.about.section3.text}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4 */}
      <section className="py-20 md:py-32 px-6 bg-gradient-to-b from-secondary/20 to-white">
        <div className="max-w-5xl mx-auto">
          <p className="text-lg md:text-xl text-gray-700 leading-relaxed text-center">
            {t.about.section4.text}
          </p>
        </div>
      </section>

      {/* Section 5 - Customer Testimonial */}
      <section className="py-20 md:py-32 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="space-y-8">
              <h3 className="text-3xl md:text-4xl font-bold text-dark leading-tight">
                {t.about.section5.title}
              </h3>

              <div className="bg-gradient-to-br from-primary/10 to-secondary/30 p-8 rounded-2xl">
                <blockquote className="text-xl md:text-2xl italic text-dark mb-4">
                  "{t.about.section5.quote}"
                </blockquote>
                <p className="text-gray-600">— Un cliente</p>
              </div>

              <p className="text-2xl md:text-3xl font-bold text-primary">
                {t.about.section5.text}
              </p>
            </div>

            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-primary/30 to-primary/10 rounded-3xl blur-2xl" />
              <img
                src={importImage("WhatsApp_Image_20251115_at_11_37_23_3.jpeg")}
                alt="Proceso Artesanal"
                className="relative rounded-2xl shadow-2xl w-full aspect-square object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-20 md:py-32 px-6 bg-gradient-to-br from-secondary/30 to-primary/5">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-3xl md:text-4xl font-bold text-dark text-center mb-12">
            {t.about.products.title}
          </h3>

          <div className="grid md:grid-cols-2 gap-6">
            {t.about.products.list.map((product, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
              >
                <h4 className="text-xl font-bold text-primary mb-3">
                  {product.name}
                </h4>
                <p className="text-gray-700 leading-relaxed">
                  {product.description}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed max-w-4xl mx-auto">
              {t.about.section6.text}
            </p>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-16 md:py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {[
              "WhatsApp_Image_20251115_at_11_37_23_7.jpeg",
              "WhatsApp_Image_20251115_at_11_37_23_6.jpeg",
              "WhatsApp_Image_20251115_at_11_37_23_5.jpeg",
              "WhatsApp_Image_20251115_at_11_37_22_1.jpeg",
            ].map((img, idx) => (
              <div
                key={idx}
                className="relative overflow-hidden rounded-2xl shadow-lg group"
              >
                <img
                  src={importImage(img)}
                  alt={`Galería ${idx + 1}`}
                  className="w-full aspect-square object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Closing Section - CTA */}
      <section className="py-20 md:py-32 px-6 bg-gradient-to-br from-dark via-dark/98 to-primary/20 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />

        <div className="max-w-5xl mx-auto relative text-center space-y-10">
          <p className="text-2xl md:text-3xl font-bold text-white">
            {t.about.closing.text1}
          </p>

          <div className="bg-white/10 backdrop-blur-sm p-10 md:p-16 rounded-3xl border border-white/20">
            <blockquote className="text-2xl md:text-3xl italic text-gray-200 leading-relaxed">
              "{t.about.closing.quote}"
            </blockquote>
          </div>

          <div className="pt-8">
            <Link
              to="/products"
              className="inline-flex items-center justify-center px-10 py-5 text-lg font-semibold text-white bg-primary rounded-xl shadow-2xl hover:shadow-primary/50 transition-all duration-300 hover:scale-105"
            >
              <span className="flex items-center gap-2">
                {t.about.closing.button}
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
};

export default About;
