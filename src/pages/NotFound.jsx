import React from "react";
import { Link } from "react-router-dom";
import { FaHome, FaShoppingBag } from "react-icons/fa";
import { useLanguage } from "../context/LanguageContext";

const NotFound = () => {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-secondary/20 to-primary/10 flex items-center justify-center px-6">
      <div className="max-w-2xl mx-auto text-center">
        {/* 404 Number */}
        <div className="relative mb-8">
          <h1 className="text-[150px] md:text-[200px] font-bold text-primary/20 leading-none">
            404
          </h1>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="bg-white/80 backdrop-blur-sm rounded-full p-8">
              <svg
                className="w-24 h-24 md:w-32 md:h-32 text-primary"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
          </div>
        </div>

        {/* Message */}
        <div className="space-y-6 mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-dark">
            {t.notFound.title}
          </h2>
          <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
            {t.notFound.message}
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/"
            className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-primary text-white rounded-xl font-semibold shadow-lg hover:shadow-xl hover:bg-orange-600 transition-all duration-300 transform hover:scale-105"
          >
            <FaHome className="text-xl" />
            {t.notFound.homeButton}
          </Link>

          <Link
            to="/products"
            className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-white text-primary rounded-xl font-semibold shadow-lg hover:shadow-xl border-2 border-primary/20 hover:border-primary/40 transition-all duration-300 transform hover:scale-105"
          >
            <FaShoppingBag className="text-xl" />
            {t.notFound.productsButton}
          </Link>
        </div>

        {/* Decorative Elements */}
        <div className="mt-16 flex justify-center gap-4 text-primary/30">
          <div className="w-3 h-3 bg-primary/30 rounded-full animate-pulse"></div>
          <div
            className="w-3 h-3 bg-primary/30 rounded-full animate-pulse"
            style={{ animationDelay: "0.2s" }}
          ></div>
          <div
            className="w-3 h-3 bg-primary/30 rounded-full animate-pulse"
            style={{ animationDelay: "0.4s" }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
