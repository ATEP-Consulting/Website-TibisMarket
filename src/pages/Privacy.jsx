import React from "react";
import { useLanguage } from "../context/LanguageContext";

const Privacy = () => {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-white py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-dark mb-8 animate-fade-in">
          {t.privacy.title}
        </h1>

        <div className="prose prose-lg max-w-none animate-slide-up">
          <p className="text-gray-700 leading-relaxed mb-6">
            {t.privacy.intro}
          </p>

          <h2 className="text-2xl font-bold text-dark mt-8 mb-4">
            {t.privacy.sections.collection.title}
          </h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            {t.privacy.sections.collection.content}
          </p>

          <h2 className="text-2xl font-bold text-dark mt-8 mb-4">
            {t.privacy.sections.usage.title}
          </h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            {t.privacy.sections.usage.content}
          </p>

          <h2 className="text-2xl font-bold text-dark mt-8 mb-4">
            {t.privacy.sections.security.title}
          </h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            {t.privacy.sections.security.content}
          </p>

          <h2 className="text-2xl font-bold text-dark mt-8 mb-4">
            {t.privacy.sections.rights.title}
          </h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            {t.privacy.sections.rights.content}
          </p>

          <h2 className="text-2xl font-bold text-dark mt-8 mb-4">
            {t.privacy.sections.contact.title}
          </h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            {t.privacy.sections.contact.content}
          </p>

          <p className="text-gray-600 text-sm mt-8">{t.privacy.lastUpdate}</p>
        </div>
      </div>
    </div>
  );
};

export default Privacy;
