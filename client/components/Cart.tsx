import React from "react";
import { X, Trash2, Package } from "lucide-react";
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

  const handleRequestSamples = () => {
    toggleCart(); // Close cart
    navigate("/checkout"); // Navigate to address form
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex justify-end">
      <div className="bg-white h-full w-full max-w-md shadow-xl overflow-y-auto">
        <div className="p-6 border-b">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Package className="w-6 h-6 text-gray-700" />
              <h2 className="text-xl font-bold">Sample Collection</h2>
            </div>
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
              <Package className="w-12 h-12 text-gray-300 mx-auto mb-4" />
              <p className="text-gray-500 mb-2">No samples selected</p>
              <p className="text-sm text-gray-400">Add samples to request your free collection</p>
            </div>
          ) : (
            <div className="space-y-4">
              <div className="mb-4">
                <h3 className="font-medium text-gray-900 mb-2">Your Free Sample Collection</h3>
                <p className="text-sm text-gray-600 mb-4">Each sample contains 2ml (30-40 applications)</p>
              </div>
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
                    <p className="text-green-600 text-sm font-medium">2ml Sample - FREE</p>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-sm">1x</span>
                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="text-red-500 hover:text-red-700"
                      title="Remove sample"
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
            <div className="bg-gray-50 p-4 rounded-lg mb-4">
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm text-gray-600">Sample Collection:</span>
                <span className="font-medium">{items.length} items</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-lg font-bold text-gray-900">Total Cost:</span>
                <span className="text-lg font-bold text-green-600">FREE</span>
              </div>
              <p className="text-xs text-gray-500 mt-1">No payment required • Free worldwide shipping</p>
            </div>

            <div className="flex gap-2 mb-4">
              <button
                onClick={clearCart}
                className="text-red-500 hover:text-red-700 text-sm underline"
              >
                Clear All
              </button>
            </div>

            <button
              onClick={handleRequestSamples}
              className="w-full bg-black text-white py-3 rounded-lg hover:bg-gray-800 transition-colors flex items-center justify-center gap-2"
            >
              <Package className="w-4 h-4" />
              Request Free Samples
            </button>

            <p className="text-center text-xs text-gray-500 mt-2">
              Complete your address to receive samples
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
