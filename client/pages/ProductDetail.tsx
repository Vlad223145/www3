import React from "react";
import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Package } from "lucide-react";
import { useCart } from "../context/CartContext";

// Comprehensive product data with detailed descriptions
const getProductById = (id: string) => {
  const products = [
    {
      id: "1",
      title: "TOM FORD",
      subtitle: "Private Blend Collection",
      image:
        "https://cdn.builder.io/api/v1/image/assets%2Faa57fa3495ed440bb8d5e43633a5eae3%2F09c22b740e214b7981d48c0f2157e2a9",
      price: 250,
      description:
        "An exquisite fragrance that captures the essence of luxury and sophistication. This Private Blend Collection represents the pinnacle of niche perfumery, featuring rare and precious ingredients sourced from around the world.",
      notes: ["Oud", "Rose", "Saffron", "Amber", "Cardamom", "Sandalwood"],
      details:
        "This exceptional fragrance opens with an intoxicating blend of rare oud and delicate rose petals, creating an immediate sense of opulence. The heart reveals warm saffron and aromatic spices, while the base settles into a rich, creamy amber that lingers beautifully on the skin.",
      forWhom: "Sophisticated individuals who appreciate luxury and exclusivity. Perfect for those who desire to make a statement without saying a word.",
      occasion: "Evening wear, special occasions, formal events, and intimate gatherings. Best suited for cooler weather and autumn/winter seasons.",
      composition: "Crafted with authentic Cambodian oud, Bulgarian rose otto, Spanish saffron, and Indian sandalwood. No synthetic substitutes used.",
      similarTo: "Reminiscent of Maison Francis Kurkdjian Oud Mood but with greater complexity. Shares DNA with By Kilian Sacred Wood but more floral.",
      longevity: "Exceptional 12-16 hours on skin with heavy sillage for first 4 hours, then moderate projection. Nuclear performance on clothing.",
      character: "Opulent, mysterious, and sophisticated. A fragrance that commands respect and admiration.",
    },
    {
      id: "2",
      title: "CREED",
      subtitle: "Royal Exclusives",
      image:
        "https://cdn.builder.io/api/v1/image/assets%2Faa57fa3495ed440bb8d5e43633a5eae3%2Fffbcf90b86bd4e4f904b924886e9a09a",
      price: 300,
      description:
        "A masterpiece from the legendary House of Creed, representing centuries of perfumery expertise and royal heritage. This exclusive fragrance embodies timeless elegance and uncompromising quality.",
      notes: ["Bergamot", "Blackcurrant", "Oak", "Musk", "Iris", "Leather"],
      details:
        "Crafted with the finest ingredients and traditional techniques passed down through generations, this fragrance opens with vibrant bergamot and blackcurrant, leading to a heart of noble oak and finishing with a sophisticated musk base.",
      forWhom: "Confident leaders and connoisseurs of fine luxury. Ideal for executives, collectors, and those with refined taste who value heritage and craftsmanship.",
      occasion: "Business meetings, formal dinners, cultural events, and prestigious gatherings. Suitable for all seasons but particularly elegant in spring and autumn.",
      composition: "Features Italian bergamot, French blackcurrant, aged oak from American barrels, Tibetan musk, and Florentine iris. Hand-blended using traditional millésime techniques.",
      similarTo: "Echoes of Aventus DNA but more refined. Comparable to Green Irish Tweed in sophistication but with darker, more authoritative presence.",
      longevity: "Outstanding 10-14 hours with moderate to strong projection. Develops beautifully over time, revealing new facets throughout wear.",
      character: "Regal, authoritative, and timelessly elegant. A fragrance that speaks of heritage, power, and refined masculinity.",
    },
    {
      id: "3",
      title: "MAISON RARE",
      subtitle: "Artisan Series",
      image:
        "https://cdn.builder.io/api/v1/image/assets%2Faa57fa3495ed440bb8d5e43633a5eae3%2Fc15455e55ad746e6ab33902343d55991?format=webp",
      price: 180,
      description:
        "An artisanal creation that celebrates the art of independent perfumery. Each bottle represents hours of careful craftsmanship and attention to detail, resulting in a truly unique olfactory experience.",
      notes: ["Vanilla", "Tobacco", "Leather", "Benzoin", "Rum", "Honey"],
      details:
        "This sophisticated composition begins with warm vanilla and rich tobacco leaves, developing into luxurious leather accords before settling into a comforting benzoin base that provides depth and longevity.",
      forWhom: "Creative souls and independent thinkers. Perfect for artists, writers, musicians, and anyone who values authenticity over mainstream appeal.",
      occasion: "Casual elegance, creative spaces, evening relaxation, and intimate social gatherings. Ideal for autumn and winter, particularly cozy indoor settings.",
      composition: "Madagascar vanilla absolute, Cuban tobacco leaves, Spanish leather accord, Laotian benzoin resin, aged rum extract, and wildflower honey.",
      similarTo: "Reminiscent of Tom Ford Tobacco Vanille but more leather-forward. Shares characteristics with Maison Margiela Jazz Club but warmer and more enveloping.",
      longevity: "Excellent 8-12 hours with moderate projection. Creates an intimate scent bubble that draws people closer without overwhelming.",
      character: "Warm, comforting, and sophisticated. A fragrance that feels like a luxury leather jacket in scent form.",
    },
    {
      id: "4",
      title: "BY KILIAN",
      subtitle: "Sacred Wood",
      image:
        "https://cdn.builder.io/api/v1/image/assets%2Faa57fa3495ed440bb8d5e43633a5eae3%2Feaab8a4a14ea43a8ad0aec2a8bfbc9ab",
      price: 220,
      description:
        "A spiritual journey through sacred woods and exotic spices. This fragrance represents the mystical side of perfumery, where each note tells a story of ancient rituals and sacred ceremonies.",
      notes: ["Sandalwood", "Spices", "Milk", "Rose", "Cardamom", "Coconut"],
      details:
        "Opening with creamy sandalwood and exotic spices, this fragrance evolves to reveal tender milk accords and delicate rose petals, creating a harmonious blend that is both comforting and intriguing.",
      forWhom: "Spiritual seekers and those who appreciate meditation and mindfulness. Suitable for both men and women who value inner peace and tranquility.",
      occasion: "Meditation, yoga practice, spiritual ceremonies, and quiet contemplation. Perfect for creating a sacred atmosphere in any space.",
      composition: "Australian sandalwood, Indian cardamom, organic coconut milk, Bulgarian rose petals, Ceylon cinnamon, and Himalayan white tea.",
      similarTo: "Evokes the serenity of Le Labo Santal 33 but creamier. Similar meditative quality to Diptyque Tam Dao but with added sweetness and warmth.",
      longevity: "Very good 6-10 hours with soft, intimate projection. Creates a personal aura of calm and serenity that stays close to skin.",
      character: "Peaceful, meditative, and pure. A fragrance that centers the soul and creates inner harmony.",
    },
    {
      id: "5",
      title: "AMOUAGE",
      subtitle: "Jubilation XXV",
      image:
        "https://cdn.builder.io/api/v1/image/assets%2Faa57fa3495ed440bb8d5e43633a5eae3%2F96ebf30ff02a4562a73e151c0fd85129",
      price: 280,
      description:
        "A celebration of 25 years of Amouage excellence. This anniversary fragrance represents the epitome of luxury and craftsmanship, featuring the finest ingredients in perfect harmony.",
      notes: ["Frankincense", "Myrrh", "Rose", "Oud", "Saffron", "Amber"],
      details:
        "This ceremonial fragrance opens with sacred frankincense and myrrh, developing into a heart of precious rose and exotic spices, before revealing a base of rare oud that speaks to the soul.",
      forWhom: "Collectors and connoisseurs of Middle Eastern perfumery. Ideal for those who appreciate complex, ceremonial fragrances with deep cultural significance.",
      occasion: "Special ceremonies, religious occasions, formal celebrations, and moments of reverence. Best experienced during evening hours and cooler months.",
      composition: "Omani frankincense, Ethiopian myrrh, Taif rose absolute, aged Cambodian oud, Persian saffron, and fossilized amber from the Baltic region.",
      similarTo: "Reminiscent of Creed Royal Oud but more incense-heavy. Shares ceremonial qualities with Maison Francis Kurkdjian Oud Mood but more traditional.",
      longevity: "Exceptional 14-18 hours with strong projection that gradually softens. One of the longest-lasting fragrances in existence with incredible depth.",
      character: "Ceremonial, profound, and transcendent. A fragrance that connects the wearer to ancient traditions and spiritual heritage.",
    },
    {
      id: "6",
      title: "AMOUAGE",
      subtitle: "Interlude Man",
      image:
        "https://cdn.builder.io/api/v1/image/assets%2Faa57fa3495ed440bb8d5e43633a5eae3%2Fa75d8ecbb19e428d8ed82b826fcce332?format=webp",
      price: 280,
      description:
        "A powerful and intoxicating fragrance that captures the essence of chaos and beauty. This bold composition challenges conventional perfumery with its daring blend of smoke, spices, and incense.",
      notes: ["Smoke", "Incense", "Opoponax", "Leather", "Amber", "Oregano"],
      details:
        "An explosive opening of smoke and oregano leads to a heart of burning incense and opoponax resin, settling into a base of rich leather and golden amber that creates an unforgettable olfactory experience.",
      forWhom: "Bold personalities who embrace intensity and complexity. Perfect for those who want to make a powerful statement and are not afraid of challenging fragrances.",
      occasion: "Evening events, nightlife, artistic performances, and moments when you want to command attention. Best suited for confident wear in cooler weather.",
      composition: "Birch tar smoke, Greek oregano, Somalian incense, sweet opoponax, Russian leather, and fossilized amber aged in oak barrels.",
      similarTo: "More intense than Tom Ford Oud Wood but with similar complexity. Comparable to Nasomatto Black Afgano in boldness but more refined.",
      longevity: "Outstanding 12-16 hours with massive projection for the first 6 hours. Creates a distinctive scent trail that announces your presence.",
      character: "Intense, provocative, and unforgettable. A fragrance for those who dare to be different and embrace their dark side.",
    },
  ];

  return products.find((p) => p.id === id);
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
      id: `sample-${product.id}`,
      title: `${product.title} Sample`,
      subtitle: product.subtitle,
      image: product.image,
      price: 0,
    });
  };

  return (
    <div className="min-h-screen bg-white text-black">
      {/* Navigation */}
      <nav className="bg-white border-b border-gray-200 sticky top-0 z-40">
        <div className="container py-4">
          <div className="flex items-center justify-between">
            <Link
              to="/"
              className="flex items-center text-gray-600 hover:text-black"
            >
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
      <div className="container py-12 max-w-7xl mx-auto">
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
          <div className="space-y-8">
            <div>
              <h1 className="font-serif text-4xl font-bold text-black mb-2">
                {product.title}
              </h1>
              <h2 className="text-2xl text-gray-600 mb-4">
                {product.subtitle}
              </h2>
            </div>

            <div>
              <h3 className="font-bold text-lg mb-3 text-black">Overview</h3>
              <p className="text-gray-700 leading-relaxed">
                {product.description}
              </p>
            </div>

            <div>
              <h3 className="font-bold text-lg mb-3 text-black">Fragrance Notes</h3>
              <div className="flex flex-wrap gap-2">
                {product.notes.map((note, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-gray-100 text-gray-800 text-sm border border-gray-200"
                  >
                    {note}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <h3 className="font-bold text-lg mb-3 text-black">Composition Details</h3>
              <p className="text-gray-700 leading-relaxed">{product.details}</p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-bold text-lg mb-3 text-black">Who Is This For</h3>
                <p className="text-gray-700 leading-relaxed text-sm">
                  {product.forWhom}
                </p>
              </div>

              <div>
                <h3 className="font-bold text-lg mb-3 text-black">Best Occasions</h3>
                <p className="text-gray-700 leading-relaxed text-sm">
                  {product.occasion}
                </p>
              </div>
            </div>

            <div>
              <h3 className="font-bold text-lg mb-3 text-black">Ingredient Composition</h3>
              <p className="text-gray-700 leading-relaxed text-sm">
                {product.composition}
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-bold text-lg mb-3 text-black">Similar Fragrances</h3>
                <p className="text-gray-700 leading-relaxed text-sm">
                  {product.similarTo}
                </p>
              </div>

              <div>
                <h3 className="font-bold text-lg mb-3 text-black">Performance</h3>
                <p className="text-gray-700 leading-relaxed text-sm">
                  {product.longevity}
                </p>
              </div>
            </div>

            <div>
              <h3 className="font-bold text-lg mb-3 text-black">Character</h3>
              <p className="text-gray-700 leading-relaxed">
                {product.character}
              </p>
            </div>

            <div className="border-t border-gray-200 pt-6 space-y-4">
              <button
                onClick={handleAddToCart}
                className="w-full bg-black text-white py-4 hover:bg-gray-800 transition-colors flex items-center justify-center space-x-2"
              >
                <Package className="w-5 h-5" />
                <span>Add Sample to Collection</span>
              </button>

              <div className="bg-gray-50 p-4 border border-gray-200">
                <h4 className="font-medium mb-2 text-black">Sample Program</h4>
                <p className="text-sm text-gray-600">
                  Get a 2ml sample of this fragrance as part of our complimentary sample collection.
                  No charges applied, worldwide shipping included.
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
