import React, { createContext, useState, useContext, useEffect } from "react";
import { es } from "../locales/es";
import { en } from "../locales/en";

const LanguageContext = createContext();
const STORAGE_KEY = "tibis_lang";

const detectBrowserLang = () => {
  if (typeof navigator === "undefined") return "es";
  const candidates = [
    ...(Array.isArray(navigator.languages) ? navigator.languages : []),
    navigator.language,
  ].filter(Boolean);
  for (const tag of candidates) {
    if (typeof tag === "string" && tag.toLowerCase().startsWith("es")) {
      return "es";
    }
  }
  return "en";
};

const readStoredLang = () => {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored === "en" || stored === "es") return stored;
  } catch {
    // fall through
  }
  return detectBrowserLang();
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState(readStoredLang);

  const translations = { es, en };
  const t = translations[language];

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, language);
    } catch {
      // ignore
    }
    if (typeof document !== "undefined") {
      document.documentElement.lang = language;
    }
  }, [language]);

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === "es" ? "en" : "es"));
  };

  return (
    <LanguageContext.Provider value={{ language, t, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};
