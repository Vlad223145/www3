import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, Package, MapPin } from "lucide-react";
import { useCart } from "../context/CartContext";

const Checkout: React.FC = () => {
  const { items } = useCart();
  const [formData, setFormData] = useState({
    email: "",
    fullName: "",
    country: "United States",
    address: "",
    city: "",
    postalCode: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Sample collection details
  const sampleCount = items.length > 0 ? items.length : 6;
  const totalValue = sampleCount * 25; // Estimated retail value

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    // Here you would normally send the address to your backend
    console.log('Sample request submitted:', formData);
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="bg-white p-8 rounded-lg shadow-lg text-center max-w-md">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <Package className="w-8 h-8 text-green-600" />
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Request Received!</h2>
          <p className="text-gray-600 mb-4">
            Your free sample collection will be shipped to {formData.fullName} within 3-7 business days.
          </p>
          <p className="text-sm text-gray-500">
            No payment required. Completely free with tracking included.
          </p>
          <Link
            to="/"
            className="inline-block mt-6 bg-black text-white px-6 py-2 rounded-lg hover:bg-gray-800 transition-colors"
          >
            Back to Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <Link
            to="/"
            className="flex items-center text-gray-600 hover:text-black"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back to store
          </Link>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          {/* Sample Collection Summary */}
          <div className="bg-white p-8 rounded-lg shadow-sm border mb-8">
            <div className="text-center mb-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">Your Free Sample Collection</h2>
              <p className="text-gray-600">Complete your address to receive all {sampleCount} premium fragrance samples</p>
            </div>

            {/* Sample Items */}
            <div className="space-y-3 mb-6">
              {items.length > 0 ? (
                items.map((item, index) => (
                  <div key={index} className="flex items-center gap-4 py-2">
                    <div className="w-10 h-10 bg-gray-100 rounded-md flex items-center justify-center">
                      <Package className="w-5 h-5 text-gray-600" />
                    </div>
                    <div className="flex-1">
                      <p className="font-medium text-gray-900">{item.title}</p>
                      <p className="text-sm text-gray-500">2ml Premium Sample</p>
                    </div>
                    <span className="text-green-600 font-medium">FREE</span>
                  </div>
                ))
              ) : (
                <div className="text-center py-8">
                  <Package className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                  <p className="text-gray-500">Complete 6-piece sample collection</p>
                  <p className="text-sm text-gray-400">Estimated retail value: ${totalValue}</p>
                </div>
              )}
            </div>

            {/* Benefits */}
            <div className="bg-gray-50 p-4 rounded-lg mb-6">
              <h3 className="font-medium text-gray-900 mb-3">What's Included:</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  6 premium niche fragrance samples (2ml each)
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  Free worldwide shipping with tracking
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  Elegant packaging with fragrance notes
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  No payment required, no hidden costs
                </li>
              </ul>
            </div>

            {/* Total */}
            <div className="border-t pt-4">
              <div className="flex justify-between items-center">
                <span className="text-lg font-semibold text-gray-900">Total Cost</span>
                <span className="text-2xl font-bold text-green-600">FREE</span>
              </div>
              <p className="text-sm text-gray-500 mt-1">No payment required • Completely free</p>
            </div>
          </div>

          {/* Address Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Shipping Information */}
            <div className="bg-white p-6 rounded-lg shadow-sm border">
              <div className="flex items-center gap-3 mb-4">
                <MapPin className="w-5 h-5 text-gray-600" />
                <h2 className="text-lg font-semibold text-gray-900">
                  Shipping Address
                </h2>
              </div>
              <p className="text-gray-600 mb-6 text-sm">
                Provide your address to receive your free sample collection. No payment required.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="your@email.com"
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-transparent"
                  />
                </div>

                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Full Name
                  </label>
                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleInputChange}
                    placeholder="John Doe"
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-transparent"
                  />
                </div>

                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Country
                  </label>
                  <select
                    name="country"
                    value={formData.country}
                    onChange={handleInputChange}
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-transparent"
                  >
                    <option value="United States">United States</option>
                    <option value="Canada">Canada</option>
                    <option value="United Kingdom">United Kingdom</option>
                    <option value="Germany">Germany</option>
                    <option value="France">France</option>
                    <option value="Australia">Australia</option>
                    <option value="Poland">Poland</option>
                    <option value="Other">Other</option>
                  </select>
                </div>

                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Street Address
                  </label>
                  <input
                    type="text"
                    name="address"
                    value={formData.address}
                    onChange={handleInputChange}
                    placeholder="123 Main Street, Apt 4B"
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-transparent"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    City
                  </label>
                  <input
                    type="text"
                    name="city"
                    value={formData.city}
                    onChange={handleInputChange}
                    placeholder="New York"
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-transparent"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Postal Code
                  </label>
                  <input
                    type="text"
                    name="postalCode"
                    value={formData.postalCode}
                    onChange={handleInputChange}
                    placeholder="10001"
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-transparent"
                  />
                </div>
              </div>
            </div>

            {/* Trust Signals */}
            <div className="bg-gray-50 p-6 rounded-lg border">
              <h3 className="font-medium text-gray-900 mb-4">What happens next?</h3>
              <div className="space-y-3 text-sm text-gray-600">
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                  </div>
                  <span>We process your address (no payment required)</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                  </div>
                  <span>Your samples ship within 24 hours with tracking</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                  </div>
                  <span>Receive your premium sample collection in 3-7 days</span>
                </div>
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-black text-white py-4 rounded-lg font-medium hover:bg-gray-800 transition-colors text-lg flex items-center justify-center gap-2"
            >
              <Package className="w-5 h-5" />
              Request Free Samples
            </button>

            <div className="text-center">
              <p className="text-sm text-gray-500 mb-2">
                Completely free with worldwide shipping included
              </p>
              <p className="text-xs text-gray-400">
                No payment required • No hidden costs • Delivered in 3-7 days
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
