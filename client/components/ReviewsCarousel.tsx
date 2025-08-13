import { useState } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';

interface Review {
  id: number;
  name: string;
  avatar: string;
  rating: number;
  text: string;
  product: string;
  date: string;
  verified: boolean;
}

const reviews: Review[] = [
  {
    id: 1,
    name: 'Anna K.',
    avatar: '/api/placeholder/60/60',
    rating: 5,
    text: 'Incredible fragrance! First ordered Tom Ford Oud Venetian sample, now buying the full-size bottle. Quality is outstanding.',
    product: 'Tom Ford Oud Venetian',
    date: '2024-01-15',
    verified: true
  },
  {
    id: 2,
    name: 'Michael P.',
    avatar: '/api/placeholder/60/60',
    rating: 5,
    text: 'Excellent service! Samples arrive quickly and free. Aventus from Creed exceeded all expectations.',
    product: 'Creed Aventus',
    date: '2024-01-12',
    verified: true
  },
  {
    id: 3,
    name: 'Elena M.',
    avatar: '/api/placeholder/60/60',
    rating: 4,
    text: 'Love trying new fragrances. Found many interesting niche brands here. Maison Rare was especially impressive.',
    product: 'Maison Rare Noir Intense',
    date: '2024-01-10',
    verified: true
  },
  {
    id: 4,
    name: 'Dmitry S.',
    avatar: '/api/placeholder/60/60',
    rating: 5,
    text: 'Perfect way to choose a fragrance! Used to be afraid of buying expensive perfumes blindly, now I always try first.',
    product: 'By Kilian Black Phantom',
    date: '2024-01-08',
    verified: true
  },
  {
    id: 5,
    name: 'Olga V.',
    avatar: '/api/placeholder/60/60',
    rating: 5,
    text: 'Amazing fragrance collection! Delivery is really free and fast. Recommend to all niche perfume lovers.',
    product: 'Amouage Jubilation XXV',
    date: '2024-01-05',
    verified: true
  }
];

export default function ReviewsCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`w-4 h-4 ${
          i < rating 
            ? 'fill-yellow-400 text-yellow-400' 
            : 'text-gray-300'
        }`}
      />
    ));
  };

  const nextReview = () => {
    setCurrentIndex((prev) => (prev + 1) % reviews.length);
  };

  const prevReview = () => {
    setCurrentIndex((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  const goToReview = (index: number) => {
    setCurrentIndex(index);
  };

  const getVisibleReviews = () => {
    const result = [];
    for (let i = 0; i < 3; i++) {
      const index = (currentIndex + i) % reviews.length;
      result.push(reviews[index]);
    }
    return result;
  };

  return (
    <section className="py-16 bg-white">
      <div className="container">
        <div className="text-center mb-12 pb-4 font-serif text-h2 font-normal">
          Customer Reviews
        </div>

        <div className="relative max-w-6xl mx-auto">
          {/* Navigation Buttons */}
          <button
            onClick={prevReview}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 w-10 h-10 bg-white border border-border rounded-full flex items-center justify-center shadow-lg hover:bg-gray-50 transition-colors"
            aria-label="Previous review"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          <button
            onClick={nextReview}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 w-10 h-10 bg-white border border-border rounded-full flex items-center justify-center shadow-lg hover:bg-gray-50 transition-colors"
            aria-label="Next review"
          >
            <ChevronRight className="w-5 h-5" />
          </button>

          {/* Reviews Grid */}
          <div className="grid md:grid-cols-3 gap-6">
            {getVisibleReviews().map((review, index) => (
              <article
                key={`${review.id}-${currentIndex}-${index}`}
                className={`bg-white border border-border rounded-xl p-6 transition-all duration-med ${
                  index === 0 ? 'transform scale-105 shadow-lg' : 'opacity-80'
                }`}
              >
                {/* Quote Icon */}
                <div className="mb-4">
                  <Quote className="w-8 h-8 text-gray-300" />
                </div>

                {/* Rating */}
                <div className="flex items-center mb-4">
                  {renderStars(review.rating)}
                  <span className="ml-2 text-sm font-medium">{review.rating}/5</span>
                </div>

                {/* Review Text */}
                <p className="text-text mb-6 leading-relaxed">
                  "{review.text}"
                </p>

                {/* Product */}
                <p className="text-sm text-black font-medium mb-4">
                  {review.product}
                </p>

                {/* Author Info */}
                <div className="flex items-center">
                  <div>
                    <div className="flex items-center">
                      <h4 className="font-semibold text-sm">{review.name}</h4>
                      {review.verified && (
                        <span className="ml-2 text-xs bg-gray-100 text-black px-2 py-0.5 rounded">
                          Verified
                        </span>
                      )}
                    </div>
                    <p className="text-xs text-muted">
                      {new Date(review.date).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric'
                      })}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-8 space-x-2">
            {reviews.map((_, index) => (
              <button
                key={index}
                onClick={() => goToReview(index)}
                className={`w-2 h-2 rounded-full transition-colors ${
                  index === currentIndex 
                    ? 'bg-black' 
                    : 'bg-border hover:bg-gray-400'
                }`}
                aria-label={`Go to review ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
