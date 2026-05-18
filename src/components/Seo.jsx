import React from "react";
import { useLanguage } from "../context/LanguageContext";

const SITE_URL = "https://www.tibismarket.com";

/**
 * Per-route metadata. React 19 hoists <title>, <meta>, <link> to <head> automatically.
 * Pass `page` key matching `t.seo.<page>` in locales (home, products, about, etc.).
 */
const Seo = ({ page, path = "/", image }) => {
  const { language, t } = useLanguage();
  const meta = t.seo?.[page];
  if (!meta) return null;

  const url = `${SITE_URL}${path}`;
  const ogImage = image
    ? `${SITE_URL}${image}`
    : `${SITE_URL}/og-image.jpg`;
  const ogLocale = language === "es" ? "es_ES" : "en_US";
  const alternateLocale = language === "es" ? "en_US" : "es_ES";

  return (
    <>
      <title>{meta.title}</title>
      <meta name="description" content={meta.description} />
      <link rel="canonical" href={url} />

      {/* Open Graph */}
      <meta property="og:type" content={page === "home" ? "website" : "article"} />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={meta.title} />
      <meta property="og:description" content={meta.description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:locale" content={ogLocale} />
      <meta property="og:locale:alternate" content={alternateLocale} />
      <meta property="og:site_name" content="Tibi's Market" />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={url} />
      <meta name="twitter:title" content={meta.title} />
      <meta name="twitter:description" content={meta.description} />
      <meta name="twitter:image" content={ogImage} />
    </>
  );
};

export default Seo;
