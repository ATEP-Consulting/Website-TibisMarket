import React from "react";
import { useLanguage } from "../context/LanguageContext";

const Terms = () => {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-white py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-dark mb-8 animate-fade-in">
          {t.terms.title}
        </h1>

        <div className="prose prose-lg max-w-none animate-slide-up">
          <p className="text-gray-700 leading-relaxed mb-6">{t.terms.intro}</p>

          <h2 className="text-2xl font-bold text-dark mt-8 mb-4">
            {t.terms.sections.company.title}
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            <strong>{t.terms.sections.company.name}</strong>{" "}
            {t.terms.sections.company.nameValue}
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            <strong>{t.terms.sections.company.email}</strong>{" "}
            {t.terms.sections.company.emailValue}
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">
            <strong>{t.terms.sections.company.phone}</strong>{" "}
            {t.terms.sections.company.phoneValue}
          </p>

          <h2 className="text-2xl font-bold text-dark mt-8 mb-4">
            {t.terms.sections.usage.title}
          </h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            {t.terms.sections.usage.content}
          </p>

          <h2 className="text-2xl font-bold text-dark mt-8 mb-4">
            {t.terms.sections.products.title}
          </h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            {t.terms.sections.products.content}
          </p>

          <h2 className="text-2xl font-bold text-dark mt-8 mb-4">
            {t.terms.sections.orders.title}
          </h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            {t.terms.sections.orders.content}
          </p>

          <h2 className="text-2xl font-bold text-dark mt-8 mb-4">
            {t.terms.sections.intellectual.title}
          </h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            {t.terms.sections.intellectual.content}
          </p>

          <h2 className="text-2xl font-bold text-dark mt-8 mb-4">
            {t.terms.sections.liability.title}
          </h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            {t.terms.sections.liability.content}
          </p>

          <h2 className="text-2xl font-bold text-dark mt-8 mb-4">
            {t.terms.sections.contact.title}
          </h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            {t.terms.sections.contact.content}
          </p>

          <p className="text-gray-600 text-sm mt-8">{t.terms.lastUpdate}</p>
        </div>
      </div>
    </div>
  );
};

export default Terms;
