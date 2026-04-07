import { useState } from 'react';
import { motion } from 'motion/react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from './ui/button';
import { Link } from 'react-router';

interface ServicesSectionProps {
  onBookService: (serviceName: string) => void;
}

export function ServicesSection({ onBookService }: ServicesSectionProps) {
  const [startIndex, setStartIndex] = useState(0);

  const services = [
    {
      name: 'Nail Shaping + Basic Polish',
      description: 'Nail cutting & shaping, cuticle cleaning, and application of regular nail polish.',
      image: '/IMG-20260309-WA0002.jpg.jpeg',
    },
    {
      name: 'Basic Manicure',
      description: 'Includes nail trimming, light scrub, moisturizing massage, and regular polish.',
      image: '/IMG20260226083628.jpg.jpeg',
    },
    {
      name: 'Spa Manicure',
      description: 'Relaxing hand soak, exfoliating scrub, hand mask, and relaxing massage.',
      image: '/IMG_20251223_213326_329.jpg.jpeg',
    },
    {
      name: 'Basic Pedicure',
      description: 'Foot soaking, basic heel cleaning, light scrub, foot massage, and polish.',
      image: '/InShot_20260209_082508877.jpg.jpeg',
    },
    {
      name: 'Spa Pedicure',
      description: 'Foot soak, deep heel cleaning, foot mask, and exfoliating scrub for softness.',
      image: '/file_000000006d8872089b1a4764196c7520.png',
    },
  ];

  const visibleServices = services.slice(startIndex, startIndex + 3);

  const handlePrev = () => {
    setStartIndex((prev) => Math.max(0, prev - 1));
  };

  const handleNext = () => {
    setStartIndex((prev) => Math.min(services.length - 3, prev + 1));
  };

  return (
    <section id="services" className="px-6 lg:px-12 py-16 lg:py-24" style={{ backgroundColor: '#F7F5F4' }}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-3xl lg:text-5xl mb-4" 
            style={{ color: '#1A1A1A' }}
          >
            Discover Our Services
          </motion.h2>
        </div>

        {/* Service Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
          {visibleServices.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95, y: 30 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.15, ease: "easeOut" }}
              whileHover={{ y: -8 }}
              className="group rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300"
              style={{ backgroundColor: 'white' }}
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={service.image}
                  alt={service.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-in-out"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl mb-2" style={{ color: '#1A1A1A' }}>
                  {service.name}
                </h3>
                <p className="text-sm mb-4" style={{ color: '#6B6B6B' }}>
                  {service.description}
                </p>
                <Button
                  onClick={() => onBookService(service.name)}
                  className="w-full text-white shadow-md hover:shadow-lg transition-all active:scale-95"
                  style={{ backgroundColor: '#7A2E2E' }}
                >
                  Book it now
                </Button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Navigation Buttons */}
        <div className="flex items-center justify-center gap-4 mb-8">
          <button
            onClick={handlePrev}
            disabled={startIndex === 0}
            className="w-10 h-10 rounded-full flex items-center justify-center disabled:opacity-30 disabled:cursor-not-allowed transition-all"
            style={{ backgroundColor: '#D9B8B0', color: '#7A2E2E' }}
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <span className="text-sm" style={{ color: '#6B6B6B' }}>
            {startIndex + 1}-{Math.min(startIndex + 3, services.length)} of {services.length}
          </span>
          <button
            onClick={handleNext}
            disabled={startIndex >= services.length - 3}
            className="w-10 h-10 rounded-full flex items-center justify-center disabled:opacity-30 disabled:cursor-not-allowed transition-all"
            style={{ backgroundColor: '#D9B8B0', color: '#7A2E2E' }}
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        {/* Explore All Button */}
        <div className="text-center">
          <Link to="/services">
            <Button
              variant="outline"
              className="px-8 py-6 text-base"
              style={{ 
                borderColor: '#7A2E2E',
                color: '#7A2E2E'
              }}
            >
              Explore All Services
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}