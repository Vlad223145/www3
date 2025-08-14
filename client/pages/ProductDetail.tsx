import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, ShoppingBag } from 'lucide-react';
import { useCart } from '../context/CartContext';

// Mock product data - in a real app this would come from an API
const getProductById = (id: string) => {
  const products = [
    {
      id: '1',
      title: 'TOM FORD',
      subtitle: 'Private Blend Collection',
      image: 'https://cdn.builder.io/api/v1/image/assets%2Faa57fa3495ed440bb8d5e43633a5eae3%2F09c22b740e214b7981d48c0f2157e2a9',
      price: 250,
      description: 'An exquisite fragrance that captures the essence of luxury and sophistication. This Private Blend Collection represents the pinnacle of niche perfumery, featuring rare and precious ingredients sourced from around the world.',
      notes: ['Oud', 'Rose', 'Saffron', 'Amber'],
      details: 'This exceptional fragrance opens with an intoxicating blend of rare oud and delicate rose petals, creating an immediate sense of opulence. The heart reveals warm saffron and aromatic spices, while the base settles into a rich, creamy amber that lingers beautifully on the skin.'
    },
    {
      id: '2',
      title: 'CREED',
      subtitle: 'Royal Exclusives',
      image: 'https://cdn.builder.io/api/v1/image/assets%2Faa57fa3495ed440bb8d5e43633a5eae3%2Fffbcf90b86bd4e4f904b924886e9a09a',
      price: 300,
      description: 'A masterpiece from the legendary House of Creed, representing centuries of perfumery expertise and royal heritage. This exclusive fragrance embodies timeless elegance and uncompromising quality.',
      notes: ['Bergamot', 'Blackcurrant', 'Oak', 'Musk'],
      details: 'Crafted with the finest ingredients and traditional techniques passed down through generations, this fragrance opens with vibrant bergamot and blackcurrant, leading to a heart of noble oak and finishing with a sophisticated musk base.'
    },
    {
      id: '3',
      title: 'MAISON RARE',
      subtitle: 'Artisan Series',
      image: '/api/placeholder/500/600',
      price: 180,
      description: 'An artisanal creation that celebrates the art of independent perfumery. Each bottle represents hours of careful craftsmanship and attention to detail, resulting in a truly unique olfactory experience.',
      notes: ['Vanilla', 'Tobacco', 'Leather', 'Benzoin'],
      details: 'This sophisticated composition begins with warm vanilla and rich tobacco leaves, developing into luxurious leather accords before settling into a comforting benzoin base that provides depth and longevity.'
    },
    {
      id: '4',
      title: 'BY KILIAN',
      subtitle: 'Sacred Wood',
      image: '/api/placeholder/500/600',
      price: 220,
      description: 'A spiritual journey through sacred woods and exotic spices. This fragrance represents the mystical side of perfumery, where each note tells a story of ancient rituals and sacred ceremonies.',
      notes: ['Sandalwood', 'Spices', 'Milk', 'Rose'],
      details: 'Opening with creamy sandalwood and exotic spices, this fragrance evolves to reveal tender milk accords and delicate rose petals, creating a harmonious blend that is both comforting and intriguing.'
    },
    {
      id: '5',
      title: 'AMOUAGE',
      subtitle: 'Jubilation XXV',
      image: '/api/placeholder/500/600',
      price: 280,
      description: 'A celebration of 25 years of Amouage excellence. This anniversary fragrance represents the epitome of luxury and craftsmanship, featuring the finest ingredients in perfect harmony.',
      notes: ['Frankincense', 'Myrrh', 'Rose', 'Oud'],
      details: 'This ceremonial fragrance opens with sacred frankincense and myrrh, developing into a heart of precious rose and exotic spices, before revealing a base of rare oud that speaks to the soul.'
    },
    {
      id: '6',
      title: 'AMOUAGE',
      subtitle: 'Jubilation XXV',
      image: '/api/placeholder/500/600',
      price: 280,
      description: 'A celebration of 25 years of Amouage excellence. This anniversary fragrance represents the epitome of luxury and craftsmanship, featuring the finest ingredients in perfect harmony.',
      notes: ['Frankincense', 'Myrrh', 'Rose', 'Oud'],
      details: 'This ceremonial fragrance opens with sacred frankincense and myrrh, developing into a heart of precious rose and exotic spices, before revealing a base of rare oud that speaks to the soul.'
    }
  ];
  
  return products.find(p => p.id === id);
};

const ProductDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { addToCart } = useCart();
  
  const product = id ? getProductById(id) : null;

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Product not found</h1>
          <Link to="/" className="text-blue-600 hover:underline">
            Return to homepage
          </Link>
        </div>
      </div>
    );
  }

  const handleAddToCart = () => {
    addToCart({
      id: product.id,
      title: product.title,
      subtitle: product.subtitle,
      image: product.image,
      price: product.price
    });
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-white border-b border-gray-200 sticky top-0 z-40">
        <div className="container py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center text-gray-600 hover:text-black">
              <ArrowLeft className="w-5 h-5 mr-2" />
              Back to Products
            </Link>
            <Link to="/" className="font-serif text-2xl font-bold text-black">
              NICHE
            </Link>
            <div className="w-24"></div>
          </div>
        </div>
      </nav>

      {/* Product Detail */}
      <div className="container py-12">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Column - Image */}
          <div className="space-y-4">
            <div className="aspect-[3/4] bg-gray-100 rounded-xl overflow-hidden">
              <img
                src={product.image}
                alt={`${product.title} ${product.subtitle}`}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Right Column - Product Info */}
          <div className="space-y-6">
            <div>
              <h1 className="font-serif text-4xl font-bold text-black mb-2">
                {product.title}
              </h1>
              <h2 className="text-2xl text-gray-600 mb-4">
                {product.subtitle}
              </h2>
              <p className="text-3xl font-bold text-black">
                ${product.price}
              </p>
            </div>

            <div>
              <h3 className="font-bold text-lg mb-3">Description</h3>
              <p className="text-gray-700 leading-relaxed">
                {product.description}
              </p>
            </div>

            <div>
              <h3 className="font-bold text-lg mb-3">Fragrance Notes</h3>
              <div className="flex flex-wrap gap-2">
                {product.notes.map((note, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
                  >
                    {note}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <h3 className="font-bold text-lg mb-3">Details</h3>
              <p className="text-gray-700 leading-relaxed">
                {product.details}
              </p>
            </div>

            <div className="space-y-4 pt-6">
              <button
                onClick={handleAddToCart}
                className="w-full bg-black text-white py-4 rounded-lg hover:bg-gray-800 transition-colors flex items-center justify-center space-x-2"
              >
                <ShoppingBag className="w-5 h-5" />
                <span>Add to Cart</span>
              </button>
              
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-medium mb-2">Free Sample Available</h4>
                <p className="text-sm text-gray-600">
                  Try a 2ml sample before purchasing the full size bottle. 
                  Free worldwide shipping on all samples.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
