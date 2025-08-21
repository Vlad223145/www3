import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, Check } from "lucide-react";
import { useCart } from "../context/CartContext";

const Checkout: React.FC = () => {
  const { items } = useCart();
  const [currency, setCurrency] = useState("PLN");
  const [selectedPayment, setSelectedPayment] = useState("card");
  const [formData, setFormData] = useState({
    email: "",
    fullName: "",
    country: "Poland",
    address: "",
    cardNumber: "",
    expiryDate: "",
    cvc: "",
    phoneNumber: "",
    billingInfo: true,
    savePayment: false,
  });

  // Calculate totals
  const subtotal = items.reduce(
    (sum, item) => sum + (item.price || 250) * item.quantity,
    0,
  );
  const savings = 12.02;
  const vat = subtotal * 0.19; // 19% VAT
  const total = subtotal - savings + vat;

  // Convert to selected currency
  const exchangeRates = { PLN: 1, USD: 0.25 };
  const rate = exchangeRates[currency as keyof typeof exchangeRates] || 1;
  const convertedTotal = total * rate;
  const convertedSubtotal = subtotal * rate;
  const convertedSavings = savings * rate;
  const convertedVat = vat * rate;

  const currencySymbol = currency === "PLN" ? "PLN" : "$";

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    const { name, value, type } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]:
        type === "checkbox" ? (e.target as HTMLInputElement).checked : value,
    }));
  };

  const sampleProduct = items[0] || {
    image:
      "https://cdn.builder.io/api/v1/image/assets%2Faa57fa3495ed440bb8d5e43633a5eae3%2F09c22b740e214b7981d48c0f2157e2a9",
    title: "Pure Glow Cream",
    subtitle: "Luxury Skincare",
    price: 250,
  };

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
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Column - Order Summary */}
          <div className="bg-white p-8 rounded-lg shadow-sm border">
            {/* Currency Selection */}
            <div className="mb-6">
              <h3 className="text-sm font-medium text-gray-700 mb-3">
                Choose a currency:
              </h3>
              <div className="flex gap-2">
                <button
                  onClick={() => setCurrency("USD")}
                  className={`px-4 py-2 border rounded-md text-sm font-medium ${
                    currency === "USD"
                      ? "bg-gray-100 border-gray-300"
                      : "bg-white border-gray-200 hover:bg-gray-50"
                  }`}
                >
                  🇺🇸 ${(total * 0.25).toFixed(2)}
                </button>
              </div>
              <p className="text-xs text-gray-500 mt-2">1 USD = 3.7546 PLN</p>
            </div>

            {/* Product */}
            <div className="flex items-center gap-4 py-4 border-b">
              <div className="w-12 h-12 bg-blue-100 rounded-md flex items-center justify-center">
                <img
                  src={sampleProduct.image}
                  alt={sampleProduct.title}
                  className="w-8 h-8 object-cover rounded"
                />
              </div>
              <div className="flex-1">
                <p className="font-medium text-gray-900">
                  {sampleProduct.title}
                </p>
              </div>
              <p className="font-medium">
                {currencySymbol} {(sampleProduct.price * rate).toFixed(2)}
              </p>
            </div>

            {/* Pricing Breakdown */}
            <div className="space-y-3 py-4 border-b">
              <div className="flex justify-between">
                <span className="text-gray-600">Subtotal</span>
                <span>
                  {currencySymbol} {convertedSubtotal.toFixed(2)}
                </span>
              </div>
              <div className="flex justify-between text-green-600">
                <span className="flex items-center gap-1">
                  <span className="bg-green-100 text-green-800 px-2 py-0.5 rounded text-xs font-medium">
                    SAVE10
                  </span>
                  10% off
                </span>
                <span>
                  -{currencySymbol} {convertedSavings.toFixed(2)}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">VAT (19%)</span>
                <span>
                  {currencySymbol} {convertedVat.toFixed(2)}
                </span>
              </div>
            </div>

            {/* Total */}
            <div className="flex justify-between py-4">
              <span className="text-lg font-semibold">Total due</span>
              <span className="text-lg font-semibold">
                {currencySymbol} {convertedTotal.toFixed(2)}
              </span>
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
                        <img src="/visa.png" alt="Visa" className="w-8 h-5" style={{ marginTop: "-32px" }} />
                        <img
                          src="/mastercard.png"
                          alt="Mastercard"
                          className="w-8 h-5"
                          style={{ marginTop: "-32px" }}
                        />
                        <img src="/amex.png" alt="Amex" className="w-8 h-5" style={{ marginTop: "-32px" }} />
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
                <p>Powered by STRIPE</p>
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
