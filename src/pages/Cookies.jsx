import React from "react";
import { useLanguage } from "../context/LanguageContext";

const Cookies = () => {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-white py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-dark mb-8 animate-fade-in">
          {t.cookies.title}
        </h1>

        <div className="prose prose-lg max-w-none animate-slide-up">
          <p className="text-gray-700 leading-relaxed mb-6">
            {t.cookies.intro}
          </p>

          <h2 className="text-2xl font-bold text-dark mt-8 mb-4">
            {t.cookies.sections.what.title}
          </h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            {t.cookies.sections.what.content}
          </p>

          <h2 className="text-2xl font-bold text-dark mt-8 mb-4">
            {t.cookies.sections.types.title}
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            <strong>{t.cookies.sections.types.essential.title}</strong>{" "}
            {t.cookies.sections.types.essential.content}
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">
            <strong>{t.cookies.sections.types.functional.title}</strong>{" "}
            {t.cookies.sections.types.functional.content}
          </p>

          <h2 className="text-2xl font-bold text-dark mt-8 mb-4">
            {t.cookies.sections.management.title}
          </h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            {t.cookies.sections.management.content}
          </p>

          <h2 className="text-2xl font-bold text-dark mt-8 mb-4">
            {t.cookies.sections.moreInfo.title}
          </h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            {t.cookies.sections.moreInfo.content}
          </p>

          <p className="text-gray-600 text-sm mt-8">{t.cookies.lastUpdate}</p>
        </div>
      </div>
    </div>
  );
};

export default Cookies;
