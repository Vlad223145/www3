import React from "react";
import { X, Minus, Plus, Trash2 } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";

const Cart: React.FC = () => {
  const navigate = useNavigate();
  const {
    items,
    removeFromCart,
    updateQuantity,
    clearCart,
    isOpen,
    toggleCart,
  } = useCart();

  const handleCheckout = () => {
    toggleCart(); // Close cart
    navigate("/checkout"); // Navigate to checkout
  };

  if (!isOpen) return null;

  const total = items.reduce(
    (sum, item) => sum + (item.price || 0) * item.quantity,
    0,
  );

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex justify-end">
      <div className="bg-white h-full w-full max-w-md shadow-xl overflow-y-auto">
        <div className="p-6 border-b">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-bold">Shopping Cart</h2>
            <button
              onClick={toggleCart}
              className="text-gray-500 hover:text-gray-700"
            >
              <X className="w-6 h-6" />
            </button>
          </div>
        </div>

        <div className="flex-1 p-6">
          {items.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-gray-500">Your cart is empty</p>
            </div>
          ) : (
            <div className="space-y-4">
              {items.map((item) => (
                <div
                  key={item.id}
                  className="flex items-center space-x-4 border-b pb-4"
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-16 h-16 object-cover rounded"
                  />
                  <div className="flex-1">
                    <h3 className="font-medium">{item.title}</h3>
                    <p className="text-gray-500 text-sm">{item.subtitle}</p>
                    {item.price && (
                      <p className="font-bold">${item.price.toFixed(2)}</p>
                    )}
                  </div>
                  <div className="flex items-center space-x-2">
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      className="text-gray-500 hover:text-gray-700"
                    >
                      <Minus className="w-4 h-4" />
                    </button>
                    <span className="w-8 text-center">{item.quantity}</span>
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      className="text-gray-500 hover:text-gray-700"
                    >
                      <Plus className="w-4 h-4" />
                    </button>
                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="text-red-500 hover:text-red-700 ml-2"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {items.length > 0 && (
          <div className="border-t p-6">
            <div className="flex justify-between items-center mb-4">
              <span className="text-lg font-bold">
                Total: ${total.toFixed(2)}
              </span>
              <button
                onClick={clearCart}
                className="text-red-500 hover:text-red-700"
              >
                Clear Cart
              </button>
            </div>
            <button className="w-full bg-black text-white py-3 rounded-lg hover:bg-gray-800 transition-colors">
              Checkout
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
