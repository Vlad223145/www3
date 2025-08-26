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

          {/* Right Column - Checkout Form */}
          <div className="space-y-6">
            {/* Shipping Information */}
            <div className="bg-white p-6 rounded-lg shadow-sm border">
              <h2 className="text-lg font-semibold mb-4">
                Shipping information
              </h2>

              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="email@example.com"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Shipping address
                  </label>
                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleInputChange}
                    placeholder="Full name"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent mb-3"
                  />

                  <select
                    name="country"
                    value={formData.country}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent mb-3"
                  >
                    <option value="Poland">Poland</option>
                    <option value="USA">USA</option>
                    <option value="Germany">Germany</option>
                    <option value="UK">UK</option>
                  </select>

                  <input
                    type="text"
                    name="address"
                    value={formData.address}
                    onChange={handleInputChange}
                    placeholder="Address"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                  <p className="text-xs text-blue-600 mt-1 cursor-pointer hover:underline">
                    Enter address manually
                  </p>
                </div>
              </div>
            </div>

            {/* Payment Method */}
            <div className="bg-white p-6 rounded-lg shadow-sm border">
              <h2 className="text-lg font-semibold mb-4">Payment method</h2>

              <div className="space-y-4">
                <label className="flex items-center gap-3 cursor-pointer">
                  <input
                    type="radio"
                    name="payment"
                    value="card"
                    checked={selectedPayment === "card"}
                    onChange={() => setSelectedPayment("card")}
                    className="w-4 h-4"
                  />
                  <span className="flex items-center gap-2"><p>Card</p></span>
                </label>

                {/* Card Information */}
                <div className="ml-7 space-y-3">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Card information
                    </label>
                    <input
                      type="text"
                      name="cardNumber"
                      value={formData.cardNumber}
                      onChange={handleInputChange}
                      placeholder="1234 1234 1234 1234"
                      className="w-full px-3 py-2 border border-gray-300 rounded-t-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                    <div className="flex">
                      <input
                        type="text"
                        name="expiryDate"
                        value={formData.expiryDate}
                        onChange={handleInputChange}
                        placeholder="MM / YY"
                        className="w-1/2 px-3 py-2 border border-gray-300 border-t-0 border-r-0 rounded-bl-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                      <input
                        type="text"
                        name="cvc"
                        value={formData.cvc}
                        onChange={handleInputChange}
                        placeholder="CVC"
                        className="w-1/2 px-3 py-2 border border-gray-300 border-t-0 rounded-br-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    </div>
                    <div className="flex justify-end mt-1">
                      <div className="flex gap-1">
                        <img src="https://cdn.builder.io/api/v1/image/assets%2Faa57fa3495ed440bb8d5e43633a5eae3%2Fe457fa9036bf4fd3a93307c16ee65110" alt="Visa" className="w-8 h-8" style={{ margin: "-82px -4px 0 -6px" }} />
                        <img
                          src="https://cdn.builder.io/api/v1/image/assets%2Faa57fa3495ed440bb8d5e43633a5eae3%2Fb06545ee54ef4728b9c82a7890201872"
                          alt="Mastercard"
                          className="w-8 h-5"
                          style={{ margin: "-77px -5px 0 0" }}
                        />
                        <img src="https://cdn.builder.io/api/v1/image/assets%2Faa57fa3495ed440bb8d5e43633a5eae3%2Fe5bf55e2a0254ef7ae67630f47ff626e" alt="Amex" className="w-8 h-5" style={{ margin: "-76px 9px 0 1px" }} />
                      </div>
                    </div>
                  </div>

                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="checkbox"
                      name="savePayment"
                      checked={formData.savePayment}
                      onChange={handleInputChange}
                      className="w-4 h-4"
                    />
                    <span className="text-sm">
                      Save my payment information for future purchases
                    </span>
                  </label>

                  <p className="text-xs text-gray-500">
                    By providing my phone number, I agree to create a Link
                    account and save my payment info to Link, according to the{" "}
                    <a href="#" className="text-blue-600 hover:underline">
                      Link Terms
                    </a>{" "}
                    and{" "}
                    <a href="#" className="text-blue-600 hover:underline">
                      Privacy Policy
                    </a>
                    .
                  </p>

                </div>
              </div>
            </div>

            {/* Pay Button */}
            <button className="w-full bg-blue-600 text-white py-4 rounded-lg font-medium hover:bg-blue-700 transition-colors text-lg">
              Pay
            </button>

            <p className="text-center text-sm text-gray-500">
              <p>Free returns and exchanges</p>
            </p>

            {/* Footer */}
            <div className="text-center text-xs text-gray-400 space-x-4" style={{ marginTop: "13px" }}>
              <span style={{ marginTop: "-1px", padding: "23px 0 27px" }}>
                <div style={{ marginTop: "-11px" }}>
                  <p>Powered by Stripe</p>
                </div>
              </span>
              <a href="#" className="hover:underline">
                Legal
              </a>
              <a href="#" className="hover:underline">
                Returns
              </a>
              <a href="#" className="hover:underline">
                Contact
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
