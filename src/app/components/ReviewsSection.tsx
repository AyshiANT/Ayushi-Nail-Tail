import { useState } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';
import { Button } from './ui/button';
import { IntegrationAnnotation } from './IntegrationAnnotation';
import { ReviewModal } from './ReviewModal';

export function ReviewsSection() {
  const [currentReview, setCurrentReview] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const hardcodedReviews = [
    {
      name: 'Riya Sharma',
      service: 'Gel Extensions with French Tips 💅',
      rating: 5,
      text: 'Absolutely loved the gel extensions! The French tips look super clean and classy ✨ Very hygienic setup and precise work. Looks like a high-end salon finish but at a budget-friendly price.',
    },
    {
      name: 'Sohini Banerjee',
      service: 'Custom Nail Art with Glitter & Stones 💖',
      rating: 5,
      text: 'Got custom nail art with glitter and stones 💖 The detailing is amazing and done with patience. Booking in advance is a must, but totally worth it!',
    },
    {
      name: 'Anindita Roy',
      service: 'Gel Polish with Ombre Effect ✨',
      rating: 4,
      text: 'Went for basic gel polish with ombre effect. Looks really pretty and natural ✨ Slight delay in timing but the final result made up for it.',
    },
    {
      name: 'Moumita Paul',
      service: 'Basic Gel Manicure 💅',
      rating: 4,
      text: 'Blunt review: went for basic gel manicure — nothing too fancy but clean, neat, and worth the money 💯',
    },
  ];

  const allReviews = hardcodedReviews;

  const handlePrev = () => {
    setCurrentReview((prev) => (prev - 1 + allReviews.length) % allReviews.length);
  };

  const handleNext = () => {
    setCurrentReview((prev) => (prev + 1) % allReviews.length);
  };

  const review = allReviews[currentReview];

  return (
    <section className="px-6 lg:px-12 py-16 lg:py-24" style={{ backgroundColor: '#F7F5F4' }}>
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-5xl mb-4 tracking-wide" style={{ color: '#1A1A1A' }}>
            REVIEWS
          </h2>
        </div>

        {/* Review Card */}
        <div 
          className="relative rounded-2xl p-8 lg:p-12 shadow-lg mb-8"
          style={{ backgroundColor: 'white' }}
        >
          {/* Stars */}
          <div className="flex justify-center gap-1 mb-6">
            {[...Array(review.rating)].map((_, i) => (
              <Star
                key={i}
                className="w-5 h-5 fill-current"
                style={{ color: '#7A2E2E' }}
              />
            ))}
          </div>

          {/* Review Text */}
          <p className="text-lg text-center mb-8 leading-relaxed" style={{ color: '#1A1A1A' }}>
            "{review.text}"
          </p>

          {/* Reviewer Info */}
          <div className="text-center">
            <p className="text-lg mb-1" style={{ color: '#1A1A1A' }}>
              {review.name}
            </p>
            <p className="text-sm" style={{ color: '#6B6B6B' }}>
              {review.service}
            </p>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={handlePrev}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full flex items-center justify-center hover:opacity-70 transition-opacity"
            style={{ backgroundColor: '#EAD7D3', color: '#7A2E2E' }}
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={handleNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full flex items-center justify-center hover:opacity-70 transition-opacity"
            style={{ backgroundColor: '#EAD7D3', color: '#7A2E2E' }}
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        {/* Indicators */}
        <div className="flex justify-center gap-2 mb-8">
          {allReviews.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentReview(index)}
              className={`w-2 h-2 rounded-full transition-all ${
                index === currentReview ? 'w-8' : ''
              }`}
              style={{ 
                backgroundColor: index === currentReview ? '#7A2E2E' : '#D9B8B0'
              }}
            />
          ))}
        </div>

        {/* Leave Review Button */}
        <div className="text-center flex justify-center gap-4">
          <Button
            onClick={() => setIsModalOpen(true)}
            className="px-8 py-6 text-base text-white"
            style={{ backgroundColor: '#7A2E2E' }}
          >
            Leave a Review
          </Button>
        </div>
        <ReviewModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      </div>
    </section>
  );
}