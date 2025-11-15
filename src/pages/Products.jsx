import React from "react";
import { Link } from "react-router-dom";
import { useLanguage } from "../context/LanguageContext";
import ProductCard from "../components/ProductCard";

const Products = () => {
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
              {t.products.badge}
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
            {t.products.title}
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 font-light italic">
            {t.products.subtitle}
          </p>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-20 md:py-32 px-6 bg-gradient-to-b from-white via-secondary/10 to-white">
        <div className="max-w-7xl mx-auto">
          {/* Intro Text */}
          <div className="max-w-3xl mx-auto text-center mb-16">
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
              {t.products.intro}
            </p>
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-8">
            {t.products.productsList.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-32 px-6 bg-gradient-to-br from-dark via-dark/98 to-primary/20 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />

        <div className="max-w-4xl mx-auto text-center relative z-10 space-y-8">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white">
            {t.products.cta.title}
          </h2>
          <p className="text-xl text-gray-300">{t.products.cta.subtitle}</p>

          <div className="pt-4">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-10 py-5 text-lg font-semibold text-white bg-primary rounded-xl shadow-2xl hover:shadow-primary/50 transition-all duration-300 hover:scale-105"
            >
              <span className="flex items-center gap-2">
                {t.products.cta.button}
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

export default Products;
