import React from "react";
import Seo from "../components/Seo";
import Hero from "../components/sections/Hero";
import Marquee from "../components/sections/Marquee";
import {
  ChapterIntro,
  ChapterIdentity,
  ChapterLearning,
} from "../components/sections/Chapters";
import QuoteSection from "../components/sections/QuoteSection";
import LegacySection from "../components/sections/LegacySection";
import Gallery from "../components/sections/Gallery";
import ProductsSection from "../components/sections/ProductsSection";
import MarketChapter from "../components/sections/MarketChapter";

const Home = () => {
  return (
    <>
      <Seo page="home" path="/" />
      <Hero />
      <Marquee />
      <ChapterIntro />
      <ChapterIdentity />
      <ChapterLearning />
      <QuoteSection />
      <LegacySection />
      <Gallery />
      <ProductsSection />
      <MarketChapter />
    </>
  );
};

export default Home;
