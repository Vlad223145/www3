import React from "react";
import { ShoppingBag } from "lucide-react";
import { useCart } from "../context/CartContext";

const FloatingCartButton: React.FC = () => {
  const { getTotalItems, toggleCart } = useCart();

  return (
    <button
      onClick={toggleCart}
      className="fixed bottom-6 right-6 z-[9999] bg-black text-white p-5 rounded-full shadow-2xl hover:bg-gray-700 transition-all duration-200 hover:scale-110 border-2 border-white"
      aria-label="Open shopping cart"
      style={{ minWidth: "64px", minHeight: "64px" }}
    >
      <ShoppingBag className="w-7 h-7" />
      {getTotalItems() > 0 && (
        <span className="absolute -top-3 -right-3 bg-red-500 text-white text-sm font-bold rounded-full w-7 h-7 flex items-center justify-center border-2 border-white">
          {getTotalItems()}
        </span>
      )}
    </button>
  );
};

export default FloatingCartButton;
