import { useState, useCallback, useMemo } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  Star,
  ShoppingBag,
  Search,
  Menu,
  ChevronRight,
  Check,
  Truck,
  Shield,
  Clock,
  ArrowRight,
  CreditCard,
  Gift,
  Package,
} from "lucide-react";
import ProductCard from "../components/ProductCard";
import ReviewsCarousel from "../components/ReviewsCarousel";
import CountdownTimer from "../components/CountdownTimer";
import { useCart } from "../context/CartContext";

export default function Index() {
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [selectedFragrance, setSelectedFragrance] = useState("");
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const { addToCart, getTotalItems, toggleCart } = useCart();
  const navigate = useNavigate();

  // Debounced navigation to prevent multiple clicks
  const handleProductClick = useCallback((productId: number) => {
    navigate(`/product/${productId}`);
  }, [navigate]);

  // Optimized add to cart handler
  const handleAddToCart = useCallback((e: React.MouseEvent, item: any) => {
    e.stopPropagation();
    addToCart({
      id: item.id.toString(),
      title: item.title,
      subtitle: item.subtitle,
      image: item.image,
      price: 250
    });
  }, [addToCart]);

  const handleSampleOrder = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !address) return;

    setIsFormSubmitted(true);
    setTimeout(() => setIsFormSubmitted(false), 3000);
  };

  const trustPoints = useMemo(() => [
    {
      icon: <Check className="w-6 h-6" />,
      title: "Free Samples",
      description: "Try any fragrance for free",
    },
    {
      icon: <Truck className="w-6 h-6" />,
      title: "Fast Delivery",
      description: "1-3 days worldwide",
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Original Fragrances",
      description: "100% authentic products",
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "14 Day Returns",
      description: "Full money back guarantee",
    },
  ], []);

  // Large showcase items for the gallery section - only 6 items - memoized
  const showcaseItems = useMemo(() => [
    {
      id: 1,
      image: "https://cdn.builder.io/api/v1/image/assets%2Faa57fa3495ed440bb8d5e43633a5eae3%2F09c22b740e214b7981d48c0f2157e2a9",
      title: "TOM FORD",
      subtitle: "Private Blend Collection",
      featured: true,
    },
    {
      id: 2,
      image: "https://cdn.builder.io/api/v1/image/assets%2Faa57fa3495ed440bb8d5e43633a5eae3%2Fffbcf90b86bd4e4f904b924886e9a09a",
      title: "CREED",
      subtitle: "Royal Exclusives",
      featured: false,
    },
    {
      id: 3,
      image: "https://cdn.builder.io/api/v1/image/assets%2Faa57fa3495ed440bb8d5e43633a5eae3%2Fc15455e55ad746e6ab33902343d55991?format=webp",
      title: "MAISON RARE",
      subtitle: "Artisan Series",
      featured: false,
    },
    {
      id: 4,
      image: "https://cdn.builder.io/api/v1/image/assets%2Faa57fa3495ed440bb8d5e43633a5eae3%2Feaab8a4a14ea43a8ad0aec2a8bfbc9ab",
      title: "BY KILIAN",
      subtitle: "Sacred Wood",
      featured: true,
    },
    {
      id: 5,
      image: "https://cdn.builder.io/api/v1/image/assets%2Faa57fa3495ed440bb8d5e43633a5eae3%2F96ebf30ff02a4562a73e151c0fd85129",
      title: "AMOUAGE",
      subtitle: "Jubilation XXV",
      featured: false,
    },
    {
      id: 6,
      image: "https://cdn.builder.io/api/v1/image/assets%2Faa57fa3495ed440bb8d5e43633a5eae3%2Fa75d8ecbb19e428d8ed82b826fcce332?format=webp",
      title: "AMOUAGE",
      subtitle: "Jubilation XXV",
      featured: false,
    },
  ], []);

  return (
    <div className="min-h-screen bg-bg pt-20">
      {/* Promo Bar */}
      <div className="bg-black text-white py-2 px-4 text-center text-sm">
        <div className="container flex items-center justify-center gap-4">
          <span>Free samples + free worldwide shipping</span>
          <button className="text-gray-300 hover:underline text-xs">
            How to get
          </button>
        </div>
      </div>

      {/* Navigation */}
      <nav className="bg-white border-b border-border fixed top-0 w-full z-50">
        <div className="container py-4">
          <div className="flex items-center justify-center">
            <Link to="/" className="font-serif text-2xl font-bold text-black">
              NICHE
            </Link>


            <div className="flex items-center space-x-4">
              <Search className="w-5 h-5 text-muted cursor-pointer hover:text-black transition-colors" />
              <button
                onClick={toggleCart}
                className="relative cursor-pointer hover:text-black transition-colors"
              >
                <ShoppingBag className="w-5 h-5 text-muted" />
                {getTotalItems() > 0 && (
                  <span className="absolute -top-2 -right-2 bg-black text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                    {getTotalItems()}
                  </span>
                )}
              </button>
              <button className="md:hidden">
                <Menu className="w-5 h-5 text-muted" />
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section with Background Video */}
      <section className="relative min-h-screen flex items-center">
        {/* Background Video */}
        <div className="absolute inset-0 z-0">
          <video
            autoPlay
            muted
            loop
            playsInline
            preload="none"
            className="w-full h-full object-cover"
            poster="/api/placeholder/1920/1080"
            style={{
              willChange: 'auto',
              transform: 'translateZ(0)',
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%'
            }}
          >
            <source
              src="https://cdn.builder.io/o/assets%2Faa57fa3495ed440bb8d5e43633a5eae3%2F8abd0a1430ec47cfa70b46a69d9a6475?alt=media&token=d7d6aa6e-f01a-47e6-a3c8-4c993330c75b&apiKey=aa57fa3495ed440bb8d5e43633a5eae3"
              type="video/mp4"
            />
          </video>
          {/* Fallback background image */}
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: "url(/api/placeholder/1920/1080)" }}
          ></div>
          <div className="absolute inset-0 bg-black/60"></div>
        </div>

        <div className="container relative z-10 py-20">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col lg:flex-row gap-12 items-center">
              {/* Left Column - Content & Form */}
              <div className="w-full lg:w-1/2 space-y-8">
                <div className="space-y-6">
                  <h1 className="font-serif font-bold text-white text-5xl lg:text-6xl leading-tight">
                    Niche Fragrances — Free Samples
                  </h1>
                  <p className="font-sans text-white/90 text-xl lg:text-2xl">
                    Discover rare scents. Free samples. Free shipping.
                  </p>
                  <p className="text-white/80 text-lg">
                    Try 2ml fragrance samples with free worldwide delivery.
                    Simply choose your gift set, link your card, and receive
                    premium samples at no cost.
                  </p>

                  {/* Countdown Timer - isolated component */}
                  <CountdownTimer />
                </div>
              </div>

              {/* Right Column - Steps Process */}
              <div className="w-full lg:w-1/2">
                <div className="bg-white/95 backdrop-blur rounded-xl p-8 shadow-2xl">
                  <h3 className="font-serif text-2xl font-bold mb-8 text-black text-center">
                    How To Get Free Samples
                  </h3>

                  <div className="space-y-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center flex-shrink-0">
                        <Gift className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h4 className="font-bold text-lg mb-2 text-black">
                          Choose Gift Set
                        </h4>
                        <p className="text-gray-600">
                          Select from our curated collection of 2ml premium
                          fragrance samples. Each sample provides 30-40
                          applications.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center flex-shrink-0">
                        <CreditCard className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h4 className="font-bold text-lg mb-2 text-black">
                          Link Your Card
                        </h4>
                        <p className="text-gray-600">
                          Secure your order with card details. No charge for
                          samples - only pay if you decide to purchase full-size
                          bottles.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center flex-shrink-0">
                        <Package className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h4 className="font-bold text-lg mb-2 text-black">
                          Receive Samples
                        </h4>
                        <p className="text-gray-600">
                          Free worldwide shipping. Your sample kit arrives
                          within 3-7 days in elegant packaging with detailed
                          fragrance notes.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-8 p-4 bg-black rounded-lg">
                    <p className="text-white text-center font-medium">
                      100% Free Samples • No Hidden Costs • Premium Quality
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Premium Collection Showcase - 5 Large Windows */}
      <section className="py-12 sm:py-16 lg:py-24 bg-white">
        <div className="container">
          <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-center mb-8 sm:mb-12 lg:mb-16">
            Premium Collection Showcase
          </h2>

          {/* Desktop: Very large and wide blocks, Mobile: Responsive stacking */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-12 max-w-8xl mx-auto">
            {showcaseItems.map((item, index) => (
              <div
                key={item.id}
                className="group relative overflow-hidden rounded-xl lg:rounded-3xl bg-black h-[350px] lg:h-[800px] xl:h-[900px] shadow-2xl cursor-pointer"
                onClick={() => handleProductClick(item.id)}
              >
                <img
                  src={item.image}
                  alt={`${item.title} ${item.subtitle}`}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300 ease-out"
                  loading="lazy"
                />

                {/* Overlay */}
                <div
                  className="absolute inset-0"
                  style={{
                    backgroundImage:
                      item.id === 1
                        ? "url(https://cdn.builder.io/api/v1/image/assets%2Faa57fa3495ed440bb8d5e43633a5eae3%2F09c22b740e214b7981d48c0f2157e2a9)"
                        : item.id === 2
                          ? "url(https://cdn.builder.io/api/v1/image/assets%2Faa57fa3495ed440bb8d5e43633a5eae3%2Fc50c8ec0c8aa44b9a20eb42b27c86139?format=webp)"
                          : item.id === 3
                            ? "url(https://cdn.builder.io/api/v1/image/assets%2Faa57fa3495ed440bb8d5e43633a5eae3%2Fc15455e55ad746e6ab33902343d55991?format=webp)"
                            : item.id === 4
                              ? "url(https://cdn.builder.io/api/v1/image/assets%2Faa57fa3495ed440bb8d5e43633a5eae3%2Feaab8a4a14ea43a8ad0aec2a8bfbc9ab)"
                              : item.id === 5
                                ? "url(https://cdn.builder.io/api/v1/image/assets%2Faa57fa3495ed440bb8d5e43633a5eae3%2F96ebf30ff02a4562a73e151c0fd85129)"
                                : item.id === 6
                                  ? "url(https://cdn.builder.io/api/v1/image/assets%2Faa57fa3495ed440bb8d5e43633a5eae3%2Fa75d8ecbb19e428d8ed82b826fcce332?format=webp)"
                                  : "linear-gradient(to top, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0))",
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: item.id === 5 ? "50% 50%" : "center",
                    backgroundSize: "cover",
                  }}
                />

                {/* Additional overlay for AMOUAGE */}
                {(item.id === 5 || item.id === 6) && (
                  <div
                    className="absolute"
                    style={{
                      backgroundImage:
                        "url(https://cdn.builder.io/api/v1/image/assets%2Faa57fa3495ed440bb8d5e43633a5eae3%2F96ebf30ff02a4562a73e151c0fd85129)",
                      backgroundPosition: "50% 50%",
                      backgroundRepeat: "no-repeat",
                      backgroundSize: "cover",
                      bottom: "0px",
                      left: "-1286px",
                      right: "0px",
                      top: "-475px",
                      marginLeft: "17px",
                      width: "336px",
                    }}
                  />
                )}

                {/* Add to Cart Button - always visible at bottom */}
                <div className="absolute bottom-4 left-4 right-4 z-10">
                  <button
                    onClick={(e) => handleAddToCart(e, item)}
                    className="w-full bg-black text-white py-3 px-6 rounded-lg hover:bg-gray-800 transition-colors flex items-center justify-center space-x-2 border border-white/20"
                  >
                    <ShoppingBag className="w-4 h-4" />
                    <span className="font-medium">Add to Cart</span>
                  </button>
                </div>

                {/* Content - only show for BY KILIAN (item.id === 4) */}
                {item.id === 4 && (
                  <div className="absolute bottom-16 left-4 right-4 p-2 lg:p-6">
                    <h3 className="font-serif text-white text-lg lg:text-2xl xl:text-3xl font-bold mb-1">
                      {item.title}
                    </h3>
                    <p className="text-white/80 text-sm lg:text-base xl:text-lg font-light">
                      {item.subtitle}
                    </p>
                  </div>
                )}

                {/* Featured badge */}
                {item.featured && (
                  <div className="absolute top-4 right-4 lg:top-8 lg:right-8">
                    <span className="bg-white text-black px-3 py-1 lg:px-6 lg:py-3 rounded-full text-xs lg:text-sm xl:text-base font-bold">
                      FEATURED
                    </span>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Points */}
      <section className="py-12 sm:py-16 bg-gray-50">
        <div className="container">
          <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-center mb-8 sm:mb-12">
            Why Choose Us
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {trustPoints.map((point, index) => (
              <div key={index} className="text-center">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4 text-black">
                  {point.icon}
                </div>
                <h3 className="font-bold text-lg sm:text-xl mb-2">
                  {point.title}
                </h3>
                <p className="text-gray-600 text-sm sm:text-base">
                  {point.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sample Process Details */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="container">
          <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-center mb-8 sm:mb-12 lg:mb-16 text-black">
            The Complete Sample Experience
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 sm:gap-10 lg:gap-12 max-w-6xl mx-auto">
            <div className="text-center">
              <div className="w-16 h-16 sm:w-20 sm:h-20 bg-black text-white rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
                <span className="text-xl sm:text-2xl font-bold">1</span>
              </div>
              <h3 className="font-bold text-lg sm:text-xl mb-3 sm:mb-4 text-black">
                Select Your Samples
              </h3>
              <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                Browse our premium collection and choose up to 3 samples from
                world-renowned niche fragrance houses. Each 2ml sample provides
                30-40 applications - enough to truly experience the fragrance.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 sm:w-20 sm:h-20 bg-black text-white rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
                <span className="text-xl sm:text-2xl font-bold">2</span>
              </div>
              <h3 className="font-bold text-lg sm:text-xl mb-3 sm:mb-4 text-black">
                Secure Checkout
              </h3>
              <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                Link your payment card for security. No charges apply to samples
                - you only pay if you decide to purchase full-size bottles.
                Complete transparency with no hidden fees.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 sm:w-20 sm:h-20 bg-black text-white rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
                <span className="text-xl sm:text-2xl font-bold">3</span>
              </div>
              <h3 className="font-bold text-lg sm:text-xl mb-3 sm:mb-4 text-black">
                Free Delivery Worldwide
              </h3>
              <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                Your samples arrive in premium packaging with detailed fragrance
                notes and application tips. Free shipping globally with tracking
                included. Delivery within 3-7 business days.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews Carousel */}
      <ReviewsCarousel />

      {/* CTA Before Footer */}
      <section className="py-16 bg-black text-white">
        <div className="container text-center">
          <h2 className="font-serif text-h2 font-bold mb-4">
            Only 47 Samples Left
          </h2>
          <p className="text-lg mb-8 opacity-90">
            Order your free sample today and discover the world of niche
            fragrances
          </p>
          <button className="btn bg-white text-black hover:bg-gray-100">
            Order Sample Now
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-16">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div>
              <h3 className="font-serif text-xl font-bold mb-4">NICHE</h3>
              <p className="text-gray-400 text-sm">
                Premium niche fragrances with free samples and worldwide
                shipping.
              </p>
            </div>

            <div className="ml-[120px]">
              <h4 className="font-bold mb-4">Newsletter</h4>
              <p className="text-gray-400 text-sm mb-4">
                Get notifications about new fragrances and special offers
              </p>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Your email"
                  className="flex-1 px-3 py-2 bg-gray-800 border border-gray-700 rounded-l text-sm"
                />
                <button className="px-4 py-2 bg-white text-black rounded-r hover:bg-gray-100">
                  →
                </button>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 text-center text-gray-400 text-sm">
            <p>&copy; 2024 NICHE. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
