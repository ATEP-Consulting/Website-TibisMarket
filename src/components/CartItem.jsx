import React from "react";
import { FaPlus, FaMinus, FaTrash } from "react-icons/fa";
import { useCart } from "../context/CartContext";
import { useLanguage } from "../context/LanguageContext";

const CartItem = ({ item }) => {
  const { updateQuantity, removeFromCart } = useCart();
  const { t } = useLanguage();

  const getImageUrl = (imageName) => {
    try {
      return new URL(`../assets/images/${imageName}`, import.meta.url).href;
    } catch {
      return "";
    }
  };

  const subtotal = item.price * item.quantity;

  return (
    <div className="bg-white rounded-lg shadow-md p-4 mb-4 animate-fade-in">
      <div className="flex flex-col sm:flex-row sm:items-center gap-4">
        {/* Product Image */}
        <img
          src={getImageUrl(item.image)}
          alt={item.name}
          className="w-24 h-24 object-cover rounded-lg mx-auto sm:mx-0"
        />

        {/* Product Info */}
        <div className="flex-1 text-center sm:text-left">
          <h3 className="text-lg font-bold text-dark">{item.name}</h3>
          <p className="text-gray-600 text-sm">${item.price.toFixed(2)} c/u</p>

          {/* Weight Info */}
          <div className="text-xs text-gray-500 mt-1">
            {item.units ? (
              <span>
                {item.units} units · {item.totalWeight}
                {item.weightUnit}
              </span>
            ) : (
              <span>
                {item.totalWeight}
                {item.weightUnit}
              </span>
            )}
          </div>
        </div>

        {/* Quantity Controls */}
        <div className="flex items-center justify-center space-x-3">
          <button
            onClick={() => updateQuantity(item.id, item.quantity - 1)}
            className="bg-secondary text-dark p-2 rounded-lg hover:bg-gray-300 transition-colors"
          >
            <FaMinus />
          </button>

          <span className="text-xl font-bold text-dark w-12 text-center">
            {item.quantity}
          </span>

          <button
            onClick={() => updateQuantity(item.id, item.quantity + 1)}
            className="bg-primary text-white p-2 rounded-lg hover:bg-orange-500 transition-colors"
          >
            <FaPlus />
          </button>
        </div>

        {/* Subtotal & Remove */}
        <div className="flex items-center justify-between sm:justify-end gap-4">
          <div className="text-center sm:text-right">
            <p className="text-sm text-gray-600">{t.cart.subtotal}</p>
            <p className="text-xl font-bold text-primary">
              ${subtotal.toFixed(2)}
            </p>
          </div>

          <button
            onClick={() => removeFromCart(item.id)}
            className="text-error hover:text-red-600 transition-colors p-2"
          >
            <FaTrash className="text-xl" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
