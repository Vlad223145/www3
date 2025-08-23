import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, ChevronDown, ChevronUp } from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
  category: string;
}

const FAQ: React.FC = () => {
  const [openItems, setOpenItems] = useState<number[]>([]);

  const toggleItem = (index: number) => {
    setOpenItems(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  const faqData: FAQItem[] = [
    // General Questions
    {
      category: "General",
      question: "What is the niche fragrance sample program?",
      answer: "Our sample program allows you to experience premium niche fragrances before purchasing full-size bottles. We offer 2ml samples from the world's most exclusive fragrance houses, shipped free worldwide with no purchase obligation."
    },
    {
      category: "General", 
      question: "How is this different from regular perfume samples?",
      answer: "Unlike department store samples, we specialize exclusively in niche and artisanal fragrances that aren't available in mainstream retail. These are rare, often limited-production fragrances created by master perfumers using the finest ingredients."
    },
    {
      category: "General",
      question: "What brands do you carry?",
      answer: "We feature prestigious niche houses including Tom Ford Private Blend, Creed, Amouage, By Kilian, Maison Francis Kurkdjian, Le Labo, Diptyque, Byredo, and many other exclusive brands that you won't find in regular stores."
    },
    {
      category: "General",
      question: "Are the fragrances authentic?",
      answer: "Absolutely. We source all fragrances directly from authorized distributors and the brands themselves. Every sample comes with our authenticity guarantee, and we maintain proper storage conditions to preserve fragrance integrity."
    },
    {
      category: "General",
      question: "Do I have to buy anything?",
      answer: "No purchase is required. Our sample program is completely free with no strings attached. We believe in letting the fragrances speak for themselves and building long-term relationships with fragrance enthusiasts."
    },

    // Sample Details
    {
      category: "Samples",
      question: "How big are the sample sizes?",
      answer: "Each sample contains 2ml of fragrance, which provides approximately 30-40 applications. This is enough to wear the fragrance multiple times across different occasions and seasons to truly understand its character."
    },
    {
      category: "Samples",
      question: "How many samples can I request?",
      answer: "New customers can request up to 3 samples per order to start. After trying your initial samples, you can request additional samples from our extensive collection. We encourage exploring different fragrance families and houses."
    },
    {
      category: "Samples",
      question: "Can I choose specific fragrances?",
      answer: "Yes! You can browse our collection and select exactly which fragrances you'd like to sample. We also offer curated discovery sets if you'd prefer expert recommendations based on your preferences."
    },
    {
      category: "Samples",
      question: "What if I don't like a sample?",
      answer: "That's perfectly fine and expected! The whole point of sampling is to discover what you love without the risk of buying a full bottle. We encourage honest feedback as it helps us improve our recommendations."
    },
    {
      category: "Samples",
      question: "Can I get samples of the same fragrance multiple times?",
      answer: "Yes, if you need more time with a particular fragrance or want to share with someone, you can request the same sample again. We understand that complex niche fragrances often require multiple wearings to fully appreciate."
    },

    // Shipping & Delivery
    {
      category: "Shipping",
      question: "Is shipping really free worldwide?",
      answer: "Yes, we offer completely free shipping to over 200 countries worldwide. This includes tracking and insurance. Shipping typically takes 5-14 business days depending on your location."
    },
    {
      category: "Shipping",
      question: "How are samples packaged?",
      answer: "Samples are professionally packaged in premium glass atomizers with protective caps, placed in cushioned mailers to prevent breakage. Each sample is clearly labeled with the brand and fragrance name."
    },
    {
      category: "Shipping",
      question: "Can I track my shipment?",
      answer: "Yes, you'll receive a tracking number via email once your samples ship. You can monitor the progress of your package from our facility to your doorstep."
    },
    {
      category: "Shipping",
      question: "What if my samples arrive damaged?",
      answer: "We'll immediately send replacements at no cost. Simply contact us with photos of the damaged package, and we'll ship new samples right away. Customer satisfaction is our top priority."
    },
    {
      category: "Shipping",
      question: "Do you ship to P.O. boxes?",
      answer: "Yes, we ship to both residential addresses and P.O. boxes. However, for fastest delivery, we recommend using a street address as some courier services offer better tracking for physical addresses."
    },

    // Product Information
    {
      category: "Products",
      question: "What's the difference between niche and designer fragrances?",
      answer: "Niche fragrances are created by independent or smaller houses focused on artistry over mass appeal. They use higher concentrations of rare ingredients, have more complex compositions, and aren't bound by commercial constraints like designer brands."
    },
    {
      category: "Products",
      question: "Why are niche fragrances more expensive?",
      answer: "Niche fragrances use premium natural ingredients, employ traditional crafting methods, and are often produced in smaller batches. The focus is on quality and uniqueness rather than mass production, resulting in exceptional but more costly creations."
    },
    {
      category: "Products",
      question: "How long do the samples last once opened?",
      answer: "When stored properly (away from heat and light), fragrance samples maintain their quality for several years. We recommend using samples within 6-12 months of opening for the best experience, though they remain safe to use much longer."
    },
    {
      category: "Products",
      question: "Are there seasonal fragrances available?",
      answer: "Yes! Our collection includes fragrances perfect for every season - fresh citrus and aquatic scents for summer, cozy vanilla and amber for winter, plus versatile year-round options. We also feature limited seasonal releases."
    },
    {
      category: "Products",
      question: "Do you have unisex fragrances?",
      answer: "Absolutely! Many niche fragrances are specifically designed to be unisex, and we encourage anyone to try any fragrance regardless of traditional marketing. Scent is personal, and the best fragrance is the one that makes you feel confident."
    },

    // Purchase & Pricing
    {
      category: "Purchase",
      question: "If I love a sample, how can I buy the full bottle?",
      answer: "We can connect you with authorized retailers or help you purchase directly from the brand. We also offer exclusive discounts to our sample program members when purchasing full-size bottles."
    },
    {
      category: "Purchase",
      question: "Do you sell full-size bottles?",
      answer: "We focus primarily on samples to help you discover new fragrances. However, we can arrange full-bottle purchases for our members at competitive prices, often with special discounts not available elsewhere."
    },
    {
      category: "Purchase",
      question: "Are there any hidden fees?",
      answer: "None whatsoever. The sample program is completely free including shipping and handling. If you choose to purchase full bottles through us, all costs are clearly displayed upfront with no surprises."
    },
    {
      category: "Purchase",
      question: "Do you offer student or military discounts?",
      answer: "Yes! We offer special pricing for students, military personnel, and seniors on full-bottle purchases. Contact us with valid ID for discount codes that can be applied to future orders."
    },

    // Account & Privacy
    {
      category: "Account",
      question: "Do I need to create an account?",
      answer: "An account helps us track your sample history and preferences for better recommendations, but it's not required for your first sample order. Creating an account also unlocks exclusive offers and early access to new releases."
    },
    {
      category: "Account",
      question: "How do you use my personal information?",
      answer: "We only use your information to fulfill sample orders and send fragrance-related updates if you opt in. We never sell or share your data with third parties. You can unsubscribe from communications at any time."
    },
    {
      category: "Account",
      question: "Can I update my shipping address?",
      answer: "Yes, you can update your address anytime through your account dashboard. For pending orders, contact us immediately to ensure samples ship to the correct address."
    },

    // Special Programs
    {
      category: "Programs",
      question: "Do you have a loyalty program?",
      answer: "Yes! Our Fragrance Explorer program rewards active samplers with exclusive access to new releases, limited editions, and special member-only events. Benefits increase based on your engagement with the program."
    },
    {
      category: "Programs",
      question: "Can I share samples with friends?",
      answer: "Absolutely! We encourage sharing the discovery experience. You can refer friends to get their own samples, and we often have special promotions for group orders or fragrance parties."
    },
    {
      category: "Programs",
      question: "Do you offer gift options?",
      answer: "Yes! You can send sample sets as gifts to introduce others to niche fragrances. We offer special gift packaging and can include personalized notes. It's a perfect way to share your passion for exceptional scents."
    }
  ];

  const categories = [...new Set(faqData.map(item => item.category))];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <Link to="/" className="flex items-center text-gray-600 hover:text-black">
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back to store
          </Link>
        </div>
      </div>

      {/* FAQ Content */}
      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="font-serif text-4xl sm:text-5xl font-bold text-black mb-4">
            Frequently Asked Questions
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Everything you need to know about our premium niche fragrance sample program
          </p>
        </div>

        {/* Category Navigation */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              className="px-6 py-2 bg-white border border-gray-200 rounded-full text-gray-700 hover:bg-black hover:text-white transition-colors"
            >
              {category}
            </button>
          ))}
        </div>

        {/* FAQ Items */}
        <div className="space-y-6">
          {categories.map((category) => (
            <div key={category}>
              <h2 className="font-bold text-2xl text-black mb-6 border-b pb-2">
                {category} Questions
              </h2>
              <div className="space-y-4 mb-8">
                {faqData
                  .filter(item => item.category === category)
                  .map((item, index) => {
                    const globalIndex = faqData.indexOf(item);
                    const isOpen = openItems.includes(globalIndex);
                    
                    return (
                      <div
                        key={globalIndex}
                        className="bg-white rounded-lg border border-gray-200 overflow-hidden"
                      >
                        <button
                          onClick={() => toggleItem(globalIndex)}
                          className="w-full p-6 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                        >
                          <span className="font-semibold text-gray-900 pr-4">
                            {item.question}
                          </span>
                          {isOpen ? (
                            <ChevronUp className="w-5 h-5 text-gray-500 flex-shrink-0" />
                          ) : (
                            <ChevronDown className="w-5 h-5 text-gray-500 flex-shrink-0" />
                          )}
                        </button>
                        {isOpen && (
                          <div className="p-6 pt-0 border-t border-gray-100">
                            <p className="text-gray-700 leading-relaxed">
                              {item.answer}
                            </p>
                          </div>
                        )}
                      </div>
                    );
                  })}
              </div>
            </div>
          ))}
        </div>

        {/* Contact Section */}
        <div className="mt-16 p-8 bg-black text-white rounded-2xl text-center">
          <h3 className="font-bold text-2xl mb-4">Still Have Questions?</h3>
          <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
            Our fragrance experts are here to help you discover your perfect scent. 
            Contact us for personalized recommendations and assistance.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="mailto:samples@nichefragrances.com"
              className="px-6 py-3 bg-white text-black rounded-lg hover:bg-gray-100 transition-colors font-medium"
            >
              Email Support
            </a>
            <a
              href="#"
              className="px-6 py-3 border border-white text-white rounded-lg hover:bg-white hover:text-black transition-colors font-medium"
            >
              Live Chat
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
