import React, { useState } from "react";
import { FaShoppingCart, FaCheck, FaPlus, FaMinus } from "react-icons/fa";
import { useCart } from "../context/CartContext";
import { useLanguage } from "../context/LanguageContext";

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();
  const { t } = useLanguage();
  const [added, setAdded] = useState(false);
  const [quantity, setQuantity] = useState(1);
  const [selectedVariant, setSelectedVariant] = useState(0);

  // Determinar precio actual (variante o precio fijo)
  const currentPrice = product.hasVariants
    ? product.variants[selectedVariant].price
    : product.price;

  // Crear objeto para añadir al carrito
  const getCartItem = () => {
    if (product.hasVariants) {
      const variant = product.variants[selectedVariant];
      return {
        ...product,
        id: `${product.id}-${selectedVariant}`, // ID único por variante
        variantSize: variant.size,
        variantServings: variant.servings,
        price: variant.price,
      };
    }
    return product;
  };

  const handleAddToCart = () => {
    const cartItem = getCartItem();
    for (let i = 0; i < quantity; i++) {
      addToCart(cartItem);
    }
    setAdded(true);
    setTimeout(() => {
      setAdded(false);
      setQuantity(1);
    }, 2000);
  };

  const incrementQuantity = () => {
    setQuantity((prev) => prev + 1);
  };

  const decrementQuantity = () => {
    setQuantity((prev) => (prev > 1 ? prev - 1 : 1));
  };

  return (
    <div className="card group animate-fade-in">
      {/* Image Container */}
      <div className="relative overflow-hidden bg-gradient-to-br from-secondary/30 to-white p-4 rounded-t-xl">
        <div className="aspect-square w-full flex items-center justify-center">
          <img
            src={`/images/${product.image}`}
            alt={product.name}
            className="w-full h-full object-contain transform group-hover:scale-105 transition-transform duration-500"
            loading="lazy"
          />
        </div>
      </div>

      <div className="p-6">
        <h3 className="text-xl font-bold text-dark mb-2">{product.name}</h3>
        <p className="text-gray-600 mb-4 line-clamp-2">{product.description}</p>

        {/* Info de peso/unidades para productos SIN variantes */}
        {!product.hasVariants && (
          <div className="text-sm text-gray-500 mb-4">
            {product.units ? (
              <>
                <p>
                  {product.units} units ({product.weightPerUnit}
                  {product.weightUnit} each)
                </p>
                <p className="font-semibold">
                  Total: {product.totalWeight}
                  {product.weightUnit}
                </p>
              </>
            ) : (
              <p className="font-semibold">
                {product.totalWeight}
                {product.weightUnit} Pack
              </p>
            )}
          </div>
        )}

        {/* Selector de variantes para productos CON variantes */}
        {product.hasVariants && (
          <div className="mb-4">
            <p className="text-sm text-gray-500 mb-2 font-medium">
              {t.products.selectSize}:
            </p>
            <div className="grid grid-cols-3 gap-2">
              {product.variants.map((variant, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedVariant(index)}
                  disabled={added}
                  className={`p-2 rounded-lg border-2 transition-all duration-200 text-center ${
                    selectedVariant === index
                      ? "border-primary bg-primary/10 text-primary"
                      : "border-gray-200 hover:border-primary/50 text-gray-600"
                  } ${added ? "opacity-50 cursor-not-allowed" : ""}`}
                >
                  <span className="block text-sm font-bold">
                    {variant.size}
                  </span>
                  <span className="block text-xs text-gray-500">
                    {variant.servings}
                  </span>
                  <span className="block text-sm font-bold text-primary mt-1">
                    ${variant.price}
                  </span>
                </button>
              ))}
            </div>
          </div>
        )}

        <div className="flex items-center justify-between mb-4">
          <span className="text-3xl font-bold text-primary">
            ${currentPrice.toFixed(2)}
          </span>

          {/* Quantity Selector */}
          <div className="flex items-center bg-gray-100 rounded-lg">
            <button
              onClick={decrementQuantity}
              className="p-2 text-gray-600 hover:text-primary transition-colors"
              disabled={added}
            >
              <FaMinus />
            </button>
            <span className="px-4 font-bold text-lg text-dark">{quantity}</span>
            <button
              onClick={incrementQuantity}
              className="p-2 text-gray-600 hover:text-primary transition-colors"
              disabled={added}
            >
              <FaPlus />
            </button>
          </div>
        </div>

        <button
          onClick={handleAddToCart}
          disabled={added}
          className={`w-full ${
            added ? "bg-success" : "bg-primary hover:bg-orange-600"
          } text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center space-x-2 transform hover:scale-105 active:scale-95 disabled:transform-none disabled:cursor-not-allowed`}
        >
          {added ? (
            <>
              <FaCheck />
              <span>¡Añadido!</span>
            </>
          ) : (
            <>
              <FaShoppingCart />
              <span>{t.products.addToCart}</span>
            </>
          )}
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
