import React from "react";
import { useLanguage } from "../../context/LanguageContext";

const SITE_URL = "https://www.tibismarket.com";

/**
 * SEO + JSON-LD para una página de producto.
 * React 19 hoista <title>, <meta>, <link>, <script type="application/ld+json"> a <head>.
 */
const NutritionSeo = ({ producto }) => {
  const { language } = useLanguage();
  const nombre = producto.nombre[language];
  const tagline = producto.tagline[language];
  const desde = producto.desde;
  const path = `/n/${producto.slug}`;
  const url = `${SITE_URL}${path}`;
  const ogImage = producto.imagen
    ? `${SITE_URL}${producto.imagen}`
    : `${SITE_URL}/og-image.jpg`;

  const sinceLabel = language === "es" ? "Desde" : "Since";
  const titleSuffix =
    language === "es"
      ? "Información nutricional · Tibi's Market"
      : "Nutrition information · Tibi's Market";
  const title = `${nombre} · ${titleSuffix}`;
  const description = `${tagline}. ${sinceLabel} ${desde}.`;
  const ogLocale = language === "es" ? "es_ES" : "en_US";
  const altLocale = language === "es" ? "en_US" : "es_ES";

  // NutritionInformation schema requires camelCase props in JSON-LD; Schema.org spec
  // uses calories, carbohydrateContent, etc., all expressed as strings with units.
  const nutritionMap = {};
  for (const fila of producto.nutricion) {
    const key = fila.en.toLowerCase();
    if (key === "calories") nutritionMap.calories = fila.val;
    else if (key === "total fat") nutritionMap.fatContent = fila.val;
    else if (key === "saturated fat") nutritionMap.saturatedFatContent = fila.val;
    else if (key === "trans fat") nutritionMap.transFatContent = fila.val;
    else if (key === "cholesterol") nutritionMap.cholesterolContent = fila.val;
    else if (key === "sodium") nutritionMap.sodiumContent = fila.val;
    else if (key === "total carbohydrate")
      nutritionMap.carbohydrateContent = fila.val;
    else if (key === "dietary fiber") nutritionMap.fiberContent = fila.val;
    else if (key === "total sugars") nutritionMap.sugarContent = fila.val;
    else if (key === "protein") nutritionMap.proteinContent = fila.val;
  }

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: nombre,
    description,
    image: ogImage,
    url,
    brand: { "@type": "Brand", name: "Tibi's Market" },
    category: language === "es" ? "Arepas artesanales" : "Artisan arepas",
    additionalType: "https://schema.org/MenuItem",
    nutrition: {
      "@type": "NutritionInformation",
      servingSize: producto.porcion,
      ...nutritionMap,
    },
    suitableForDiet: undefined,
  };

  return (
    <>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />

      <link rel="alternate" hrefLang="es" href={url} />
      <link rel="alternate" hrefLang="en" href={url} />
      <link rel="alternate" hrefLang="x-default" href={url} />

      <meta property="og:type" content="product" />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:locale" content={ogLocale} />
      <meta property="og:locale:alternate" content={altLocale} />
      <meta property="og:site_name" content="Tibi's Market" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={url} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />

      <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
    </>
  );
};

export default NutritionSeo;
