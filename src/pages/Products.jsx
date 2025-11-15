import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import ProductCard from '../components/ProductCard';

const Products = () => {
  const { t } = useLanguage();
  
  return (
    <div className="min-h-screen bg-secondary py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="section-title">{t.products.title}</h1>
          <p className="text-xl text-gray-600">{t.products.subtitle}</p>
        </div>
        
        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {t.products.productsList.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
