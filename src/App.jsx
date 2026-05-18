import React, { lazy, Suspense } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Outlet,
} from "react-router-dom";
import { LanguageProvider } from "./context/LanguageContext";
import { CartProvider } from "./context/CartContext";
import ScrollToTop from "./components/ScrollToTop";
import { Analytics } from "@vercel/analytics/react";

// Lazy-load the main-site shell (Header/Footer/CartDrawer) and Home so the
// /n/:slug route — which QR scanners land on — pays only for the nutrition bundle.
const Header = lazy(() => import("./components/Header"));
const Footer = lazy(() => import("./components/Footer"));
const CartDrawer = lazy(() => import("./components/CartDrawer"));
const Home = lazy(() => import("./pages/Home"));
const Products = lazy(() => import("./pages/Products"));
const About = lazy(() => import("./pages/About"));
const Contact = lazy(() => import("./pages/Contact"));
const Privacy = lazy(() => import("./pages/Privacy"));
const Cookies = lazy(() => import("./pages/Cookies"));
const Terms = lazy(() => import("./pages/Terms"));
const NotFound = lazy(() => import("./pages/NotFound"));
const Nutrition = lazy(() => import("./pages/Nutrition"));
const NutritionIndex = lazy(() => import("./pages/NutritionIndex"));
const NutritionLayoutShell = lazy(
  () => import("./components/nutricion/NutritionLayout"),
);

const RouteFallback = () => (
  <div
    aria-hidden
    style={{
      minHeight: "100vh",
      background: "linear-gradient(180deg, #faf6f0 0%, #f3ece1 100%)",
    }}
  />
);

const MainLayout = () => (
  <Suspense fallback={<RouteFallback />}>
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
    </div>
    <CartDrawer />
  </Suspense>
);

const NutritionRoute = () => (
  <Suspense fallback={<RouteFallback />}>
    <NutritionLayoutShell />
  </Suspense>
);

function App() {
  return (
    <LanguageProvider>
      <CartProvider>
        <Router>
          <Analytics />
          <ScrollToTop />
          <Routes>
            <Route element={<MainLayout />}>
              <Route path="/" element={<Home />} />
              <Route path="/products" element={<Products />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/privacy" element={<Privacy />} />
              <Route path="/cookies" element={<Cookies />} />
              <Route path="/terms" element={<Terms />} />
              <Route path="*" element={<NotFound />} />
            </Route>
            <Route element={<NutritionRoute />}>
              <Route path="/n/:slug" element={<Nutrition />} />
              <Route path="/nutricion" element={<NutritionIndex />} />
            </Route>
          </Routes>
        </Router>
      </CartProvider>
    </LanguageProvider>
  );
}

export default App;
