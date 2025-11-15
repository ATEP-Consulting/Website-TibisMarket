import React from 'react';
import { FaPlus, FaMinus, FaTrash } from 'react-icons/fa';
import { useCart } from '../context/CartContext';
import { useLanguage } from '../context/LanguageContext';

const CartItem = ({ item }) => {
  const { updateQuantity, removeFromCart } = useCart();
  const { t } = useLanguage();
  
  const getImageUrl = (imageName) => {
    try {
      return new URL(`../assets/images/${imageName}`, import.meta.url).href;
    } catch {
      return '';
    }
  };
  
  const subtotal = item.price * item.quantity;
  
  return (
    <div className="flex items-center bg-white rounded-lg shadow-md p-4 mb-4 animate-fade-in">
      {/* Product Image */}
      <img
        src={getImageUrl(item.image)}
        alt={item.name}
        className="w-24 h-24 object-cover rounded-lg"
      />
      
      {/* Product Info */}
      <div className="flex-1 ml-4">
        <h3 className="text-lg font-bold text-dark">{item.name}</h3>
        <p className="text-gray-600 text-sm">${item.price.toFixed(2)} c/u</p>
      </div>
      
      {/* Quantity Controls */}
      <div className="flex items-center space-x-3">
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
          className="bg-primary text-white p-2 rounded-lg hover:bg-orange-600 transition-colors"
        >
          <FaPlus />
        </button>
      </div>
      
      {/* Subtotal */}
      <div className="ml-6 text-right">
        <p className="text-sm text-gray-600">{t.cart.subtotal}</p>
        <p className="text-xl font-bold text-primary">${subtotal.toFixed(2)}</p>
      </div>
      
      {/* Remove Button */}
      <button
        onClick={() => removeFromCart(item.id)}
        className="ml-4 text-error hover:text-red-600 transition-colors p-2"
      >
        <FaTrash className="text-xl" />
      </button>
    </div>
  );
};

export default CartItem;
