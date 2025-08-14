import React from 'react';
import { ShoppingBag } from 'lucide-react';
import { useCart } from '../context/CartContext';

const FloatingCartButton: React.FC = () => {
  const { getTotalItems, toggleCart } = useCart();

  return (
    <button
      onClick={toggleCart}
      className="fixed bottom-6 right-6 z-50 bg-black text-white p-4 rounded-full shadow-2xl hover:bg-gray-800 transition-all duration-200 hover:scale-110"
      aria-label="Open shopping cart"
    >
      <ShoppingBag className="w-6 h-6" />
      {getTotalItems() > 0 && (
        <span className="absolute -top-2 -right-2 bg-white text-black text-sm font-bold rounded-full w-6 h-6 flex items-center justify-center">
          {getTotalItems()}
        </span>
      )}
    </button>
  );
};

export default FloatingCartButton;
