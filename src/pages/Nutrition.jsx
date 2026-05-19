import React, { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { useLanguage } from "../context/LanguageContext";
import { getProductoBySlug } from "../data/productos";
import { T } from "../data/nutricionStrings";
import NutritionSeo from "../components/nutricion/NutritionSeo";
import ProductHero from "../components/nutricion/ProductHero";
import PreparationTabs from "../components/nutricion/PreparationTabs";
import FillingPills from "../components/nutricion/FillingPills";
import IngredientsBlock from "../components/nutricion/IngredientsBlock";
import NutritionFacts from "../components/nutricion/NutritionFacts";
import RelatedProducts from "../components/nutricion/RelatedProducts";
import ConversionCTAs from "../components/nutricion/ConversionCTAs";

const DecoLine = () => (
  <div
    aria-hidden
    style={{
      height: 1,
      margin: "0 24px",
      background:
        "linear-gradient(90deg, transparent, rgba(53,58,64,0.2), transparent)",
    }}
  />
);

const Nutrition = () => {
  const { slug } = useParams();
  const { language } = useLanguage();
  const producto = getProductoBySlug(slug);
  const t = (obj) => obj[language];

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.scrollTo({ top: 0, behavior: "instant" });
    }
  }, [slug]);

  if (!producto) {
    return (
      <section style={{ padding: "60px 24px", textAlign: "center" }}>
        <h1
          style={{
            fontFamily: "var(--font-display)",
            fontSize: 28,
            margin: "0 0 12px",
            color: "#353a40",
          }}
        >
          {t(T.productoNoEncontrado)}
        </h1>
        <Link
          to="/"
          style={{
            display: "inline-block",
            marginTop: 16,
            padding: "12px 22px",
            background: "#353a40",
            color: "#faf6f0",
            textDecoration: "none",
            borderRadius: 4,
            fontSize: 14,
            fontWeight: 600,
          }}
        >
          {t(T.volverInicio)}
        </Link>
      </section>
    );
  }

  return (
    <>
      <NutritionSeo producto={producto} />
      <ProductHero producto={producto} />
      <DecoLine />
      <NutritionFacts porcion={producto.porcion} filas={producto.nutricion} />
      <DecoLine />
      <PreparationTabs producto={producto} />
      <DecoLine />
      <FillingPills producto={producto} />
      <DecoLine />
      <IngredientsBlock
        ingredientes={producto.ingredientes}
        alergenos={producto.alergenos}
      />
      <DecoLine />
      <RelatedProducts slugActual={producto.slug} />
      <ConversionCTAs producto={producto} />
    </>
  );
};

export default Nutrition;
