import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from './ui/button';
import { IntegrationAnnotation } from './IntegrationAnnotation';
import { motion } from 'motion/react';

interface HeroSectionProps {
  onBookingClick: () => void;
  onDiscoverClick: () => void;
}

export function HeroSection({ onBookingClick, onDiscoverClick }: HeroSectionProps) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const carouselImages = [
    '/IMG-20251113-WA0086.jpg.jpeg',
    '/IMG-20251227-WA0005.jpg.jpeg',
    '/IMG-20260109-WA0022.jpg.jpeg',
    '/IMG-20260308-WA0004.jpg.jpeg',
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % carouselImages.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [carouselImages.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % carouselImages.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + carouselImages.length) % carouselImages.length);
  };

  return (
    <section className="relative min-h-[600px] lg:min-h-[700px] px-6 lg:px-12 py-16 lg:py-24 overflow-hidden" style={{ backgroundColor: '#EAD7D3' }}>
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="space-y-6 lg:space-y-8 lg:-mt-24 relative z-10"
          >
            <div className="flex flex-col">
              <motion.img 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, ease: 'easeOut', delay: 0.2 }}
                src="/logo%20without%20background.png" 
                alt="Ayushi Nail Tail Logo" 
                className="w-72 md:w-[28rem] lg:w-[32rem] h-auto object-contain -ml-4 -mb-12 md:-mb-24 relative z-10" 
              />
              <h1 className="text-4xl lg:text-6xl leading-tight relative" style={{ color: '#1A1A1A' }}>
                Elegance at Your Fingertips
              </h1>
            </div>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-lg lg:text-xl leading-relaxed" 
              style={{ color: '#6B6B6B' }}
            >
              Experience the art of premium nail care with our expert stylists and luxurious treatments.
            </motion.p>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  onClick={onBookingClick}
                  className="w-full text-white text-base px-8 py-6 shadow-lg hover:shadow-xl transition-shadow"
                  style={{ backgroundColor: '#7A2E2E' }}
                >
                  Book Appointment
                </Button>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  onClick={onDiscoverClick}
                  variant="outline"
                  className="w-full text-base px-8 py-6 shadow-md hover:shadow-lg transition-shadow"
                  style={{ 
                    backgroundColor: '#F7F5F4',
                    color: '#1A1A1A',
                    borderColor: '#E5E5E5'
                  }}
                >
                  Discover Services
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Right Carousel */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            {carouselImages.map((image, index) => (
              <div
                key={index}
                className={`absolute inset-0 transition-opacity duration-700 ${
                  index === currentSlide ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
                }`}
                style={{ transitionProperty: 'opacity, transform' }}
              >
                <img
                  src={image}
                  alt={`Nail art ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}

            {/* Navigation Arrows */}
            {isHovered && (
              <>
                <button
                  onClick={prevSlide}
                  className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/90 flex items-center justify-center hover:bg-white transition-all shadow-lg hover:scale-110"
                  style={{ color: '#7A2E2E' }}
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={nextSlide}
                  className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/90 flex items-center justify-center hover:bg-white transition-all shadow-lg hover:scale-110"
                  style={{ color: '#7A2E2E' }}
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </>
            )}

            {/* Slide Indicators */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
              {carouselImages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    index === currentSlide ? 'w-8' : ''
                  }`}
                  style={{ 
                    backgroundColor: index === currentSlide ? '#7A2E2E' : 'rgba(255,255,255,0.5)'
                  }}
                />
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}