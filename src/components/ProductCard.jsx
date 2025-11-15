import React, { useState } from "react";
import { FaShoppingCart, FaCheck, FaPlus, FaMinus } from "react-icons/fa";
import { useCart } from "../context/CartContext";
import { useLanguage } from "../context/LanguageContext";

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();
  const { t } = useLanguage();
  const [added, setAdded] = useState(false);
  const [quantity, setQuantity] = useState(1);

  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) {
      addToCart(product);
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
      {/* Image Container - ARREGLADO */}
      <div className="relative overflow-hidden bg-gradient-to-br from-secondary/30 to-white p-4 rounded-t-xl">
        <div className="aspect-square w-full flex items-center justify-center">
          <img
            src={`/images/${product.image}`}
            alt={product.name}
            className="w-full h-full object-contain transform group-hover:scale-105 transition-transform duration-500"
          />
        </div>
      </div>

      <div className="p-6">
        <h3 className="text-xl font-bold text-dark mb-2">{product.name}</h3>
        <p className="text-gray-600 mb-4 line-clamp-2">{product.description}</p>

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

        <div className="flex items-center justify-between mb-4">
          <span className="text-3xl font-bold text-primary">
            ${product.price.toFixed(2)}
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
