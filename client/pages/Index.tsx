import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Star, ShoppingBag, Search, Menu, ChevronRight, Check, Truck, Shield, Clock, ArrowRight } from 'lucide-react';
import ProductCard from '../components/ProductCard';
import ReviewsCarousel from '../components/ReviewsCarousel';

export default function Index() {
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [selectedFragrance, setSelectedFragrance] = useState('');
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);

  const handleSampleOrder = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !address) return;
    
    setIsFormSubmitted(true);
    setTimeout(() => setIsFormSubmitted(false), 3000);
  };

  const categories = [
    { name: 'Night', image: '/api/placeholder/400/300', count: 24 },
    { name: 'Day', image: '/api/placeholder/400/300', count: 31 },
    { name: 'Unisex', image: '/api/placeholder/400/300', count: 18 },
    { name: 'Woody', image: '/api/placeholder/400/300', count: 27 },
    { name: 'Floral', image: '/api/placeholder/400/300', count: 33 },
    { name: 'Oriental', image: '/api/placeholder/400/300', count: 21 }
  ];

  const featuredProducts = [
    {
      id: 1,
      brand: 'TOM FORD',
      name: 'Oud Venetian',
      price: 18500,
      originalPrice: 21000,
      images: ['/api/placeholder/300/400', '/api/placeholder/300/400'],
      rating: 4.8,
      reviews: 132,
      notes: ['Oud', 'Amber', 'Vanilla'],
      description: 'Woody-amber fragrance with notes of oud, tobacco and vanilla — perfect for evening.',
      sizes: [
        { id: 'sample', name: 'Sample 2ml', price: 0, available: true, isSample: true },
        { id: '50ml', name: '50ml', price: 18500, available: true },
        { id: '100ml', name: '100ml', price: 28500, available: true }
      ],
      available: true,
      slug: 'oud-venetian',
      isNew: true
    },
    {
      id: 2,
      brand: 'CREED',
      name: 'Aventus',
      price: 16200,
      originalPrice: 18500,
      images: ['/api/placeholder/300/400', '/api/placeholder/300/400'],
      rating: 4.9,
      reviews: 256,
      notes: ['Bergamot', 'Smoke', 'Musk'],
      description: 'Legendary fragrance for successful men with notes of bergamot and smoke.',
      sizes: [
        { id: 'sample', name: 'Sample 2ml', price: 0, available: true, isSample: true },
        { id: '50ml', name: '50ml', price: 16200, available: true },
        { id: '100ml', name: '100ml', price: 24500, available: false }
      ],
      available: true,
      slug: 'aventus',
      isBestseller: true
    },
    {
      id: 3,
      brand: 'MAISON RARE',
      name: 'Noir Intense',
      price: 12800,
      originalPrice: 14500,
      images: ['/api/placeholder/300/400', '/api/placeholder/300/400'],
      rating: 4.7,
      reviews: 89,
      notes: ['Rose', 'Wood', 'Tobacco'],
      description: 'Intense evening fragrance with rich notes of rose and tobacco.',
      sizes: [
        { id: 'sample', name: 'Sample 2ml', price: 0, available: true, isSample: true },
        { id: '50ml', name: '50ml', price: 12800, available: true }
      ],
      available: true,
      slug: 'noir-intense',
      isRare: true
    },
    {
      id: 4,
      brand: 'BY KILIAN',
      name: 'Black Phantom',
      price: 19500,
      originalPrice: 22000,
      images: ['/api/placeholder/300/400'],
      rating: 4.6,
      reviews: 76,
      notes: ['Coffee', 'Vanilla', 'Sandalwood'],
      description: 'Seductive fragrance with notes of coffee and vanilla.',
      sizes: [
        { id: 'sample', name: 'Sample 2ml', price: 0, available: true, isSample: true },
        { id: '50ml', name: '50ml', price: 19500, available: true }
      ],
      available: true,
      slug: 'black-phantom'
    }
  ];

  const brands = [
    'TOM FORD', 'CREED', 'MAISON RARE', 'BY KILIAN', 'AMOUAGE', 'XERJOFF'
  ];

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

  // Large showcase items for the gallery section
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
    },
    {
      id: 6,
      image: '/api/placeholder/500/600',
      title: 'XERJOFF',
      subtitle: 'Cruz del Sur II',
      featured: false
    },
    {
      id: 7,
      image: '/api/placeholder/500/600',
      title: 'PARFUMS DE MARLY',
      subtitle: 'Layton',
      featured: true
    },
    {
      id: 8,
      image: '/api/placeholder/500/600',
      title: 'NASOMATTO',
      subtitle: 'Black Afgano',
      featured: false
    },
    {
      id: 9,
      image: '/api/placeholder/500/600',
      title: 'FREDERIC MALLE',
      subtitle: 'Portrait of a Lady',
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

      {/* Hero Section */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            {/* Left Column - Content & Form (55%) */}
            <div className="w-full md:w-[55%] space-y-8 order-2 md:order-1">
              <div className="space-y-4">
                <h1 className="font-serif font-bold text-black" style={{ 
                  fontSize: 'var(--fs-h1)', 
                  lineHeight: '1.02' 
                }}>
                  Niche Fragrances — Free Samples
                </h1>
                <p className="font-sans text-muted" style={{ 
                  fontSize: 'var(--fs-h3)' 
                }}>
                  Discover rare scents. Free samples. Free shipping.
                </p>
              </div>

              {/* Quick Sample Order Form */}
              <div className="bg-white border border-border rounded-xl p-6 shadow-custom">
                <h3 className="font-serif text-xl font-bold mb-4">Order Free Sample</h3>
                
                {isFormSubmitted ? (
                  <div className="text-center py-8">
                    <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mx-auto mb-4">
                      <Check className="w-8 h-8 text-white" />
                    </div>
                    <h4 className="font-bold text-lg mb-2">Order Sent!</h4>
                    <p className="text-muted">We will contact you within 24 hours</p>
                  </div>
                ) : (
                  <form onSubmit={handleSampleOrder} className="space-y-4">
                    <div>
                      <input
                        type="email"
                        placeholder="Your email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full px-4 py-3 border border-input rounded-lg focus:ring-2 focus:ring-black focus:border-transparent"
                        required
                      />
                    </div>
                    
                    <div>
                      <input
                        type="text"
                        placeholder="Delivery address"
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                        className="w-full px-4 py-3 border border-input rounded-lg focus:ring-2 focus:ring-black focus:border-transparent"
                        required
                      />
                    </div>
                    
                    <div>
                      <select
                        value={selectedFragrance}
                        onChange={(e) => setSelectedFragrance(e.target.value)}
                        className="w-full px-4 py-3 border border-input rounded-lg focus:ring-2 focus:ring-black focus:border-transparent"
                      >
                        <option value="">Choose fragrance (optional)</option>
                        <option value="oud-venetian">Tom Ford - Oud Venetian</option>
                        <option value="aventus">Creed - Aventus</option>
                        <option value="noir-intense">Maison Rare - Noir Intense</option>
                      </select>
                    </div>
                    
                    <div className="flex items-start space-x-2">
                      <input type="checkbox" id="newsletter" className="mt-1" />
                      <label htmlFor="newsletter" className="text-sm text-muted">
                        Subscribe to newsletter (10% discount on full size)
                      </label>
                    </div>
                    
                    <button type="submit" className="btn btn-primary w-full">
                      Order Free Sample
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </button>
                    
                    <p className="text-xs text-muted text-center">
                      No hidden fees — only payment when buying full-size bottle
                    </p>
                  </form>
                )}
              </div>
            </div>

            {/* Right Column - Hero Image (45%) */}
            <div className="w-full md:w-[45%] relative order-1 md:order-2">
              <div className="aspect-[3/4] max-h-[560px] relative mx-auto">
                <img
                  src="/api/placeholder/600/800"
                  alt="Premium niche fragrance bottle shot"
                  className="w-full h-full object-contain rounded-xl drop-shadow-xl"
                  style={{ boxShadow: 'var(--shadow)' }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories/Mood Tiles */}
      <section className="py-16 bg-white">
        <div className="container">
          <h2 className="font-serif text-h2 font-bold text-center mb-12">Find Your Scent</h2>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {categories.map((category, index) => (
              <Link
                key={index}
                to={`/category/${category.name.toLowerCase()}`}
                className="group relative overflow-hidden rounded-lg aspect-[3/2] bg-gray-100"
              >
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-full h-full object-cover transition-transform group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors" />
                <div className="absolute inset-0 flex flex-col justify-end p-4">
                  <h3 className="text-white font-semibold">{category.name}</h3>
                  <p className="text-white/80 text-sm">{category.count} fragrances</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16">
        <div className="container">
          <div className="flex items-center justify-between mb-8">
            <h2 className="font-serif text-h2 font-bold">New Arrivals</h2>
            <Link to="/new" className="text-black hover:underline flex items-center">
              View All <ChevronRight className="w-4 h-4 ml-1" />
            </Link>
          </div>
          
          <div className="products-grid">
            {featuredProducts.map((product) => (
              <ProductCard 
                key={product.id} 
                product={product} 
                variant="compact"
              />
            ))}
          </div>
        </div>
      </section>

      {/* Trust Points */}
      <section className="py-16 bg-white">
        <div className="container">
          <h2 className="font-serif text-h2 font-bold text-center mb-12">Why Choose Us</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {trustPoints.map((point, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4 text-black">
                  {point.icon}
                </div>
                <h3 className="font-bold mb-2">{point.title}</h3>
                <p className="text-muted text-sm">{point.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it Works */}
      <section className="py-16">
        <div className="container">
          <h2 className="font-serif text-h2 font-bold text-center mb-12">How It Works</h2>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="w-12 h-12 bg-black text-white rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-xl">
                1
              </div>
              <h3 className="font-bold mb-2">Choose Sample</h3>
              <p className="text-muted text-sm">Find your desired fragrance in our catalog</p>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 bg-black text-white rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-xl">
                2
              </div>
              <h3 className="font-bold mb-2">Get It Free</h3>
              <p className="text-muted text-sm">Sample delivery is absolutely free</p>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 bg-black text-white rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-xl">
                3
              </div>
              <h3 className="font-bold mb-2">Buy Full Size</h3>
              <p className="text-muted text-sm">Order full bottle with discount if you like it</p>
            </div>
          </div>
        </div>
      </section>

      {/* Large Showcase Gallery - 9 Big Windows */}
      <section className="py-24 bg-white">
        <div className="container">
          <h2 className="font-serif text-h2 font-bold text-center mb-16">Premium Collection Showcase</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {showcaseItems.map((item, index) => (
              <div 
                key={item.id} 
                className={`group relative overflow-hidden rounded-2xl bg-black ${
                  item.featured ? 'md:row-span-2' : ''
                }`}
                style={{ 
                  height: item.featured ? '600px' : '400px',
                  minHeight: '400px'
                }}
              >
                <img
                  src={item.image}
                  alt={`${item.title} ${item.subtitle}`}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                
                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <h3 className="font-serif text-white text-2xl font-bold mb-2">
                    {item.title}
                  </h3>
                  <p className="text-white/80 text-lg font-light">
                    {item.subtitle}
                  </p>
                  
                  {/* Hover CTA */}
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 mt-4">
                    <button className="bg-white text-black px-6 py-2 rounded-lg font-medium hover:bg-gray-100 transition-colors">
                      View Collection
                    </button>
                  </div>
                </div>

                {/* Featured badge */}
                {item.featured && (
                  <div className="absolute top-4 right-4">
                    <span className="bg-white text-black px-3 py-1 rounded-full text-xs font-bold">
                      FEATURED
                    </span>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Brands */}
      <section className="py-16">
        <div className="container">
          <h2 className="font-serif text-h2 font-bold text-center mb-12">Premium Brands</h2>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {brands.map((brand, index) => (
              <div key={index} className="text-center p-4 border border-border rounded-lg hover:shadow-lg transition-shadow">
                <h3 className="font-bold text-sm">{brand}</h3>
              </div>
            ))}
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
