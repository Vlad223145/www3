import { useState } from 'react';
import { Star, Heart, Share2, ChevronLeft, ChevronRight } from 'lucide-react';

interface ProductCardProps {
  product: {
    id: number;
    brand: string;
    name: string;
    price?: number;
    originalPrice?: number;
    images: string[];
    rating: number;
    reviews: number;
    notes: string[];
    description: string;
    sizes: Array<{
      id: string;
      name: string;
      price: number;
      available: boolean;
      isSample?: boolean;
    }>;
    available: boolean;
    slug: string;
  };
  variant?: 'compact' | 'detailed';
  className?: string;
}

export default function ProductCard({ product, variant = 'compact', className = '' }: ProductCardProps) {
  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedSize, setSelectedSize] = useState(product.sizes[0]?.id || '');
  const [isLoading, setIsLoading] = useState(false);

  const handleOrderSample = async () => {
    setIsLoading(true);
    // Simulate API call
    setTimeout(() => setIsLoading(false), 1500);
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`w-4 h-4 ${
          i < Math.floor(rating) 
            ? 'fill-yellow-400 text-yellow-400' 
            : 'text-gray-300'
        }`}
      />
    ));
  };

  if (variant === 'compact') {
    return (
      <article className={`group cursor-pointer ${className}`} aria-labelledby={`product-${product.id}`}>
        <div className="relative mb-4 overflow-hidden rounded-lg">
          <img
            src={product.images[0]}
            alt={`${product.brand} — ${product.name} — bottle shot`}
            className="w-full aspect-[3/4] object-cover group-hover:scale-105 transition-transform duration-med"
          />
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/12 transition-colors" />
          <button className="absolute top-3 right-3 w-8 h-8 bg-white/80 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
            <Heart className="w-4 h-4" />
          </button>
        </div>
        
        <div className="space-y-2">
          <p className="text-xs uppercase tracking-wider text-muted font-medium">
            {product.brand}
          </p>
          <h3 id={`product-${product.id}`} className="font-serif text-lg font-bold leading-tight">
            {product.name}
          </h3>
          
          <div className="flex items-center space-x-2">
            <div className="flex items-center">
              {renderStars(product.rating)}
              <span className="text-sm ml-1 font-medium">{product.rating}</span>
            </div>
            <span className="text-sm text-muted">• {product.reviews} отзывов</span>
          </div>
          
          <div className="flex flex-wrap gap-1">
            {product.notes.slice(0, 3).map((note, index) => (
              <span 
                key={index} 
                className="text-caption px-2 py-1 bg-white border border-border rounded-full"
              >
                {note}
              </span>
            ))}
          </div>
          
          <div className="flex items-center justify-between pt-2">
            <div>
              {product.price && (
                <>
                  <span className="font-bold text-lg">{product.price.toLocaleString()} ₽</span>
                  {product.originalPrice && (
                    <span className="text-sm text-muted line-through ml-2">
                      {product.originalPrice.toLocaleString()} ₽
                    </span>
                  )}
                </>
              )}
            </div>
            <span className="bg-accent text-white px-3 py-1 rounded-full text-xs font-bold">
              ПРОБНИК
            </span>
          </div>
        </div>
      </article>
    );
  }

  // Detailed variant for product page
  return (
    <article className={`product-card ${className}`} aria-labelledby={`product-title-${product.id}`}>
      {/* Left Column - Image Gallery (45%) */}
      <div className="pc-media w-full md:w-[45%]">
        <div className="relative">
          <img
            src={product.images[selectedImage]}
            alt={`${product.brand} — ${product.name} — bottle shot`}
            className="w-full aspect-[3/4] max-w-[420px] object-contain rounded-xl shadow-custom mx-auto"
          />
          
          {product.images.length > 1 && (
            <div className="absolute inset-y-0 left-0 flex items-center">
              <button
                onClick={() => setSelectedImage(Math.max(0, selectedImage - 1))}
                className="w-8 h-8 bg-white/80 rounded-full flex items-center justify-center shadow-lg"
                disabled={selectedImage === 0}
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
            </div>
          )}
          
          {product.images.length > 1 && (
            <div className="absolute inset-y-0 right-0 flex items-center">
              <button
                onClick={() => setSelectedImage(Math.min(product.images.length - 1, selectedImage + 1))}
                className="w-8 h-8 bg-white/80 rounded-full flex items-center justify-center shadow-lg"
                disabled={selectedImage === product.images.length - 1}
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          )}
        </div>
        
        {/* Thumbnails */}
        {product.images.length > 1 && (
          <div className="flex mt-4 gap-3 justify-center">
            {product.images.map((image, index) => (
              <button
                key={index}
                onClick={() => setSelectedImage(index)}
                className={`w-[72px] h-[96px] rounded-lg overflow-hidden border-2 transition-colors ${
                  selectedImage === index 
                    ? 'border-accent' 
                    : 'border-transparent hover:border-accent/50'
                }`}
              >
                <img
                  src={image}
                  alt={`${product.name} view ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Right Column - Product Info (55%) */}
      <div className="pc-body w-full md:w-[55%] space-y-6">
        <div className="pc-meta">
          <span className="brand text-xs uppercase tracking-[0.12em] text-muted font-semibold">
            {product.brand}
          </span>
          <h1 id={`product-title-${product.id}`} className="title font-serif text-h2 font-bold text-text mt-1">
            {product.name}
          </h1>
          
          <div className="flex items-center mt-3" aria-label={`Рейтинг ${product.rating} из 5`}>
            <div className="flex items-center">
              {renderStars(product.rating)}
              <span className="ml-2 font-medium">{product.rating}</span>
            </div>
            <span className="text-muted ml-2">• {product.reviews} отзывов</span>
          </div>
        </div>

        {/* Price Block */}
        <div className="space-y-2">
          {product.price ? (
            <div className="flex items-center gap-3">
              <span className="font-bold text-2xl">{product.price.toLocaleString()} ₽</span>
              {product.originalPrice && (
                <span className="text-muted line-through">{product.originalPrice.toLocaleString()} ₽</span>
              )}
            </div>
          ) : (
            <div className="inline-block bg-black text-white px-3 py-1 rounded-full text-sm font-bold">
            FREE SAMPLE
          </div>
          )}
        </div>

        {/* Description */}
        <p className="pc-desc font-serif text-muted leading-relaxed">
          {product.description}
        </p>

        {/* Scent Notes */}
        <div className="pc-notes">
          <h4 className="font-semibold mb-3">Fragrance Notes:</h4>
          <div className="flex flex-wrap gap-2">
            {product.notes.map((note, index) => (
              <span 
                key={index} 
                className="note text-caption px-3 py-1 bg-white border border-border rounded-full"
              >
                {note}
              </span>
            ))}
          </div>
        </div>

        {/* Size Selector */}
        <div>
          <h4 className="font-semibold mb-3">Size:</h4>
          <div className="flex gap-2">
            {product.sizes.map((size) => (
              <button
                key={size.id}
                onClick={() => setSelectedSize(size.id)}
                disabled={!size.available}
                className={`px-4 py-2 border rounded-lg text-sm font-medium transition-colors ${
                  selectedSize === size.id
                    ? 'border-black bg-black text-white'
                    : size.available
                    ? 'border-border hover:border-black'
                    : 'border-border text-muted cursor-not-allowed opacity-50'
                }`}
              >
                {size.name}
                {!size.isSample && (
                  <span className="block text-xs">
                    {size.price.toLocaleString()} ₽
                  </span>
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Actions */}
        <div className="pc-actions space-y-3">
          <button
            onClick={handleOrderSample}
            disabled={isLoading}
            className="btn btn-primary w-full md:w-auto"
            aria-describedby="sample-info"
          >
            {isLoading ? 'Sending...' : 'Order Free Sample'}
          </button>
          
          <button
            disabled={!product.available}
            className={`btn btn-outline w-full md:w-auto ml-0 md:ml-3 ${
              !product.available ? 'opacity-50 cursor-not-allowed' : ''
            }`}
          >
            Buy Full Size
          </button>
        </div>

        {/* Trust Information */}
        <div id="sample-info" className="pc-trust text-sm text-muted">
          Sample delivery — free. Limited to 1 sample per address.
        </div>

        <div className="flex items-center justify-between text-sm text-muted border-t pt-4">
          <span>Original fragrances • 14 day returns • Payment on delivery</span>
          <button className="flex items-center hover:text-black transition-colors">
            <Share2 className="w-4 h-4 mr-1" />
            Share
          </button>
        </div>
      </div>

      {/* JSON-LD structured data */}
      <script 
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org/",
            "@type": "Product",
            "name": `${product.name} — 2ml Sample`,
            "image": product.images,
            "description": product.description,
            "brand": {
              "@type": "Brand",
              "name": product.brand
            },
            "offers": {
              "@type": "Offer",
              "price": "0.00",
              "priceCurrency": "EUR",
              "availability": product.available ? "https://schema.org/InStock" : "https://schema.org/OutOfStock",
              "url": `https://example.com/product/${product.slug}/sample`
            },
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": product.rating,
              "reviewCount": product.reviews
            }
          })
        }}
      />
    </article>
  );
}
