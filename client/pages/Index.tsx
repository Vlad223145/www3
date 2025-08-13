import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Star, ShoppingBag, Search, Menu, ChevronRight, Check, Truck, Shield, Clock, ArrowRight, CreditCard, Gift, Package } from 'lucide-react';
import ProductCard from '../components/ProductCard';
import ReviewsCarousel from '../components/ReviewsCarousel';

export default function Index() {
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [selectedFragrance, setSelectedFragrance] = useState('');
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [timeLeft, setTimeLeft] = useState({
    days: 7,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  // Countdown timer effect
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
        } else if (prev.days > 0) {
          return { ...prev, days: prev.days - 1, hours: 23, minutes: 59, seconds: 59 };
        }
        return prev;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const handleSampleOrder = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !address) return;
    
    setIsFormSubmitted(true);
    setTimeout(() => setIsFormSubmitted(false), 3000);
  };




  const trustPoints = [
    {
      icon: <Check className="w-6 h-6" />,
      title: 'Free Samples',
      description: 'Try any fragrance for free'
    },
    {
      icon: <Truck className="w-6 h-6" />,
      title: 'Fast Delivery',
      description: '1-3 days worldwide'
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: 'Original Fragrances',
      description: '100% authentic products'
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: '14 Day Returns',
      description: 'Full money back guarantee'
    }
  ];

  // Large showcase items for the gallery section - only 5 items
  const showcaseItems = [
    {
      id: 1,
      image: '/api/placeholder/500/600',
      title: 'TOM FORD',
      subtitle: 'Private Blend Collection',
      featured: true
    },
    {
      id: 2,
      image: '/api/placeholder/500/600',
      title: 'CREED',
      subtitle: 'Royal Exclusives',
      featured: false
    },
    {
      id: 3,
      image: '/api/placeholder/500/600',
      title: 'MAISON RARE',
      subtitle: 'Artisan Series',
      featured: false
    },
    {
      id: 4,
      image: '/api/placeholder/500/600',
      title: 'BY KILIAN',
      subtitle: 'Sacred Wood',
      featured: true
    },
    {
      id: 5,
      image: '/api/placeholder/500/600',
      title: 'AMOUAGE',
      subtitle: 'Jubilation XXV',
      featured: false
    }
  ];

  return (
    <div className="min-h-screen bg-bg">
      {/* Promo Bar */}
      <div className="bg-black text-white py-2 px-4 text-center text-sm">
        <div className="container flex items-center justify-center gap-4">
          <span>Free samples + free worldwide shipping</span>
          <button className="text-gray-300 hover:underline text-xs">How to get</button>
        </div>
      </div>

      {/* Navigation */}
      <nav className="bg-white border-b border-border sticky top-0 z-50">
        <div className="container py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="font-serif text-2xl font-bold text-black">
              NICHE
            </Link>
            
            <div className="hidden md:flex items-center space-x-8">
              <Link to="/catalog" className="text-text hover:text-black transition-colors">Catalog</Link>
              <Link to="/new" className="text-text hover:text-black transition-colors">New</Link>
              <Link to="/bestsellers" className="text-text hover:text-black transition-colors">Bestsellers</Link>
              <Link to="/brands" className="text-text hover:text-black transition-colors">Brands</Link>
            </div>

            <div className="flex items-center space-x-4">
              <Search className="w-5 h-5 text-muted cursor-pointer hover:text-black transition-colors" />
              <ShoppingBag className="w-5 h-5 text-muted cursor-pointer hover:text-black transition-colors" />
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
            className="w-full h-full object-cover"
            poster="/api/placeholder/1920/1080"
          >
            <source src="https://cdn.builder.io/o/assets%2Faa57fa3495ed440bb8d5e43633a5eae3%2F8abd0a1430ec47cfa70b46a69d9a6475?alt=media&token=d7d6aa6e-f01a-47e6-a3c8-4c993330c75b&apiKey=aa57fa3495ed440bb8d5e43633a5eae3" type="video/mp4" />
          </video>
          {/* Fallback background image */}
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: 'url(/api/placeholder/1920/1080)' }}
          ></div>
          <div className="absolute inset-0 bg-black/60"></div>
        </div>

        <div className="container relative z-10 py-20">
          <div className="max-w-6xl mx-auto">
            {/* Countdown Timer */}
            <div className="text-center mb-12">
              <p className="text-white/80 text-lg mb-4">Limited Time Offer Ends In:</p>
              <div className="flex justify-center gap-4 mb-8">
                <div className="bg-white/10 backdrop-blur rounded-lg p-4 min-w-[80px]">
                  <div className="text-3xl font-bold text-white">{timeLeft.days.toString().padStart(2, '0')}</div>
                  <div className="text-white/70 text-sm">DAYS</div>
                </div>
                <div className="bg-white/10 backdrop-blur rounded-lg p-4 min-w-[80px]">
                  <div className="text-3xl font-bold text-white">{timeLeft.hours.toString().padStart(2, '0')}</div>
                  <div className="text-white/70 text-sm">HOURS</div>
                </div>
                <div className="bg-white/10 backdrop-blur rounded-lg p-4 min-w-[80px]">
                  <div className="text-3xl font-bold text-white">{timeLeft.minutes.toString().padStart(2, '0')}</div>
                  <div className="text-white/70 text-sm">MINUTES</div>
                </div>
                <div className="bg-white/10 backdrop-blur rounded-lg p-4 min-w-[80px]">
                  <div className="text-3xl font-bold text-white">{timeLeft.seconds.toString().padStart(2, '0')}</div>
                  <div className="text-white/70 text-sm">SECONDS</div>
                </div>
              </div>
            </div>

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
                    Simply choose your gift set, link your card, and receive premium samples at no cost.
                  </p>
                </div>

                {/* Quick Sample Order Form */}
                <div className="bg-white/95 backdrop-blur border border-white/20 rounded-xl p-8 shadow-2xl">
                  <h3 className="font-serif text-2xl font-bold mb-6 text-black">Order Free Sample</h3>

                  {isFormSubmitted ? (
                    <div className="text-center py-8">
                      <div className="w-20 h-20 bg-black rounded-full flex items-center justify-center mx-auto mb-6">
                        <Check className="w-10 h-10 text-white" />
                      </div>
                      <h4 className="font-bold text-xl mb-3 text-black">Order Sent!</h4>
                      <p className="text-gray-600">We will contact you within 24 hours</p>
                    </div>
                  ) : (
                    <form onSubmit={handleSampleOrder} className="space-y-5">
                      <div>
                        <input
                          type="email"
                          placeholder="Your email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          className="w-full px-5 py-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent text-lg"
                          required
                        />
                      </div>

                      <div>
                        <input
                          type="text"
                          placeholder="Delivery address"
                          value={address}
                          onChange={(e) => setAddress(e.target.value)}
                          className="w-full px-5 py-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent text-lg"
                          required
                        />
                      </div>

                      <div>
                        <select
                          value={selectedFragrance}
                          onChange={(e) => setSelectedFragrance(e.target.value)}
                          className="w-full px-5 py-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent text-lg"
                        >
                          <option value="">Choose fragrance (optional)</option>
                          <option value="oud-venetian">Tom Ford - Oud Venetian</option>
                          <option value="aventus">Creed - Aventus</option>
                          <option value="noir-intense">Maison Rare - Noir Intense</option>
                        </select>
                      </div>

                      <div className="flex items-start space-x-3">
                        <input type="checkbox" id="newsletter" className="mt-1.5" />
                        <label htmlFor="newsletter" className="text-gray-600">
                          Subscribe to newsletter (10% discount on full size)
                        </label>
                      </div>

                      <button type="submit" className="btn btn-primary w-full text-lg py-4">
                        Order Free Sample
                        <ArrowRight className="w-5 h-5 ml-2" />
                      </button>

                      <p className="text-sm text-gray-500 text-center">
                        No hidden fees — only payment when buying full-size bottle
                      </p>
                    </form>
                  )}
                </div>
              </div>

              {/* Right Column - Steps Process */}
              <div className="w-full lg:w-1/2">
                <div className="bg-white/95 backdrop-blur rounded-xl p-8 shadow-2xl">
                  <h3 className="font-serif text-2xl font-bold mb-8 text-black text-center">How To Get Free Samples</h3>

                  <div className="space-y-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center flex-shrink-0">
                        <Gift className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h4 className="font-bold text-lg mb-2 text-black">Choose Gift Set</h4>
                        <p className="text-gray-600">Select from our curated collection of 2ml premium fragrance samples. Each sample provides 30-40 applications.</p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center flex-shrink-0">
                        <CreditCard className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h4 className="font-bold text-lg mb-2 text-black">Link Your Card</h4>
                        <p className="text-gray-600">Secure your order with card details. No charge for samples - only pay if you decide to purchase full-size bottles.</p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center flex-shrink-0">
                        <Package className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h4 className="font-bold text-lg mb-2 text-black">Receive Samples</h4>
                        <p className="text-gray-600">Free worldwide shipping. Your sample kit arrives within 3-7 days in elegant packaging with detailed fragrance notes.</p>
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
          <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-center mb-8 sm:mb-12 lg:mb-16">Premium Collection Showcase</h2>

          {/* Desktop: Very large and wide blocks, Mobile: Responsive stacking */}
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-12 max-w-8xl mx-auto">
            {showcaseItems.map((item, index) => (
              <div
                key={item.id}
                className="group relative overflow-hidden rounded-xl lg:rounded-3xl bg-black h-[350px] lg:h-[800px] xl:h-[900px] shadow-2xl"
              >
                <img
                  src={item.image}
                  alt={`${item.title} ${item.subtitle}`}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-6 lg:p-12 xl:p-16">
                  <h3 className="font-serif text-white text-xl lg:text-4xl xl:text-5xl font-bold mb-2 lg:mb-4">
                    {item.title}
                  </h3>
                  <p className="text-white/80 text-base lg:text-xl xl:text-2xl font-light">
                    {item.subtitle}
                  </p>

                  {/* Hover CTA */}
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 mt-4 lg:mt-8">
                    <button className="bg-white text-black px-6 py-3 lg:px-8 lg:py-4 xl:px-10 xl:py-5 rounded-lg text-sm lg:text-lg xl:text-xl font-medium hover:bg-gray-100 transition-colors">
                      View Collection
                    </button>
                  </div>
                </div>

                {/* Featured badge */}
                {item.featured && (
                  <div className="absolute top-2 right-2 sm:top-4 sm:right-4">
                    <span className="bg-white text-black px-2 py-0.5 sm:px-3 sm:py-1 rounded-full text-xs font-bold">
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
          <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-center mb-8 sm:mb-12">Why Choose Us</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {trustPoints.map((point, index) => (
              <div key={index} className="text-center">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4 text-black">
                  {point.icon}
                </div>
                <h3 className="font-bold text-lg sm:text-xl mb-2">{point.title}</h3>
                <p className="text-gray-600 text-sm sm:text-base">{point.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sample Process Details */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="container">
          <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-center mb-8 sm:mb-12 lg:mb-16 text-black">The Complete Sample Experience</h2>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 sm:gap-10 lg:gap-12 max-w-6xl mx-auto">
            <div className="text-center">
              <div className="w-16 h-16 sm:w-20 sm:h-20 bg-black text-white rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
                <span className="text-xl sm:text-2xl font-bold">1</span>
              </div>
              <h3 className="font-bold text-lg sm:text-xl mb-3 sm:mb-4 text-black">Select Your Samples</h3>
              <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                Browse our premium collection and choose up to 3 samples from world-renowned niche fragrance houses.
                Each 2ml sample provides 30-40 applications - enough to truly experience the fragrance.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 sm:w-20 sm:h-20 bg-black text-white rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
                <span className="text-xl sm:text-2xl font-bold">2</span>
              </div>
              <h3 className="font-bold text-lg sm:text-xl mb-3 sm:mb-4 text-black">Secure Checkout</h3>
              <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                Link your payment card for security. No charges apply to samples - you only pay if you decide
                to purchase full-size bottles. Complete transparency with no hidden fees.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 sm:w-20 sm:h-20 bg-black text-white rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
                <span className="text-xl sm:text-2xl font-bold">3</span>
              </div>
              <h3 className="font-bold text-lg sm:text-xl mb-3 sm:mb-4 text-black">Free Delivery Worldwide</h3>
              <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                Your samples arrive in premium packaging with detailed fragrance notes and application tips.
                Free shipping globally with tracking included. Delivery within 3-7 business days.
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
            Order your free sample today and discover the world of niche fragrances
          </p>
          <button className="btn bg-white text-black hover:bg-gray-100">
            Order Sample Now
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-16">
        <div className="container">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="font-serif text-xl font-bold mb-4">NICHE</h3>
              <p className="text-gray-400 text-sm">
                Premium niche fragrances with free samples and worldwide shipping.
              </p>
            </div>
            
            <div>
              <h4 className="font-bold mb-4">Catalog</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><Link to="/catalog" className="hover:text-white">All Fragrances</Link></li>
                <li><Link to="/new" className="hover:text-white">New Arrivals</Link></li>
                <li><Link to="/bestsellers" className="hover:text-white">Bestsellers</Link></li>
                <li><Link to="/brands" className="hover:text-white">Brands</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold mb-4">Help</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><Link to="/help" className="hover:text-white">How to Order</Link></li>
                <li><Link to="/delivery" className="hover:text-white">Delivery</Link></li>
                <li><Link to="/returns" className="hover:text-white">Returns</Link></li>
                <li><Link to="/contact" className="hover:text-white">Contact</Link></li>
              </ul>
            </div>
            
            <div>
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
