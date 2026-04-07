import { useOutletContext } from 'react-router';
import { Sparkles } from 'lucide-react';
import { Button } from '../components/ui/button';

interface OutletContext {
  handleBookingClick: (serviceName?: string) => void;
}

export function Services() {
  const { handleBookingClick } = useOutletContext<OutletContext>();

  const services = [
    {
      category: 'Natural Nail Basic Care',
      services: [
        {
          name: 'Nail Shaping + Basic Polish',
          price: '₹200',
          description: 'Nail cutting & shaping (square/round/oval as per choice), Cuticle cleaning (basic), Nail surface cleaning, Application of regular nail polish.',
        },
        {
          name: 'Basic Manicure',
          price: '₹300',
          description: 'Nail trimming & shaping, Cuticle cleaning, Hand soaking, Light scrub, Moisturizing massage (5 mins), Regular nail polish.',
        },
        {
          name: 'Spa Manicure',
          price: '₹500',
          description: 'Nail shaping & cuticle care, Hand soak (warm water + cleanser), Exfoliating scrub, Hand mask application, Relaxing hand massage (10–15 mins), Regular nail polish.',
        },
        {
          name: 'Basic Pedicure',
          price: '₹400',
          description: 'Foot soaking (warm water + cleanser), Nail cutting & shaping, Cuticle cleaning, Basic heel cleaning (dead skin removal), Light scrub, Foot massage (5–10 mins), Regular nail polish.',
        },
        {
          name: 'Spa Pedicure',
          price: '₹600',
          description: 'Foot soak (warm water + cleanser), Nail cutting & shaping, Cuticle cleaning, Deep heel cleaning (better than basic), Exfoliating scrub, Foot mask (for softness & glow), Relaxing foot massage (15–20 mins), Regular nail polish.',
        },
      ],
    },
    {
      category: 'Gel Extention & Natural Nail Build',
      services: [
        {
          name: 'Gel Polish (Feet)',
          price: '₹700',
          description: 'Nail cleaning & shaping, Extention (if needed), Cuticle care, UV Gel polish application (single solid colour), Glossy long lasting finish (2-3 weeks).',
        },
        {
          name: 'Gel Polish (Hands)',
          price: '₹500',
          description: 'Nail prep (cleaning + shaping), Extentions (if needed), Cuticle care, UV Gel polish application (single solid colour), Glossy long-lasting finish (2-3 weeks).',
        },
      ],
    },
    {
      category: 'Acrylic Extention',
      services: [
        {
          name: 'Acrylic Nails (Hand)',
          price: '₹800',
          description: 'Nail cleaning & shaping, Extention, Cuticle care, UV Gel polish application (single solid colour), Glossy long lasting finish (3-4 weeks).',
        },
        {
          name: 'Acrylic Nails (Feet)',
          price: '₹1200',
          description: 'Nail cleaning & shaping, Extention (if needed), Cuticle care, UV Gel polish application (single solid colour), Glossy long lasting finish (3-4 weeks).',
        },
      ],
    },
    {
      category: 'Extention Removal',
      services: [
        {
          name: 'Hands Extension Removal',
          price: '₹500',
          description: 'Professional removal for hand gel/acrylic extensions.',
        },
        {
          name: 'Feet Extension Removal',
          price: '₹700',
          description: 'Professional removal for feet gel/acrylic extensions.',
        },
      ],
    },
    {
      category: 'Nail Art',
      services: [
        {
          name: 'French Art',
          price: '₹1000+',
          description: '₹1000 with Gel Extention, ₹1200 with acrylic.',
        },
        {
          name: 'Chrome / Cat eye / Ombre',
          price: 'Starting from ₹200+',
          description: 'Custom art techniques and premium finishes applied to your nails.',
        },
        {
          name: 'Rhinestones / 3D elements',
          price: '₹10–₹300',
          description: 'Pricing varies based on elements added.',
        },
      ],
    },
    {
      category: 'Glitter & Pigments',
      services: [
        {
          name: 'Glitter Options',
          price: '₹50-₹150/nail',
          description: 'Light glitter: ₹50/nail. Medium: ₹80–₹100/nail. Heavy / ombre: ₹100–₹150/nail.',
        },
        {
          name: 'Neon Pigment',
          price: '₹100-₹800',
          description: '1–2 accent nails: ₹100 each. Half set: ₹300–₹500. Full set: ₹500–₹800.',
        },
      ],
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="px-6 lg:px-12 py-20 lg:py-32" style={{ backgroundColor: '#D9B8B0' }}>
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex justify-center mb-6">
            <div 
              className="w-20 h-20 rounded-full flex items-center justify-center"
              style={{ backgroundColor: '#7A2E2E' }}
            >
              <Sparkles className="w-10 h-10 text-white" />
            </div>
          </div>
          <h1 className="text-4xl lg:text-6xl mb-6" style={{ color: '#1A1A1A' }}>
            Our Services
          </h1>
          <p className="text-lg lg:text-xl" style={{ color: '#6B6B6B' }}>
            Comprehensive nail care and beauty treatments tailored to your needs
          </p>
        </div>
      </section>

      {/* Services List */}
      {services.map((category, categoryIndex) => (
        <section 
          key={categoryIndex}
          className="px-6 lg:px-12 py-12 lg:py-16"
          style={{ backgroundColor: categoryIndex % 2 === 0 ? 'white' : '#F7F5F4' }}
        >
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl lg:text-4xl mb-8" style={{ color: '#1A1A1A' }}>
              {category.category}
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {category.services.map((service, serviceIndex) => (
                <div 
                  key={serviceIndex}
                  className="p-6 rounded-xl border"
                  style={{ 
                    backgroundColor: categoryIndex % 2 === 0 ? '#F7F5F4' : 'white',
                    borderColor: '#E5E5E5'
                  }}
                >
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="text-xl" style={{ color: '#1A1A1A' }}>
                      {service.name}
                    </h3>
                    <span className="text-xl font-medium" style={{ color: '#7A2E2E' }}>
                      {service.price}
                    </span>
                  </div>
                  
                  <p className="text-sm mb-4" style={{ color: '#6B6B6B' }}>
                    {service.description}
                  </p>
                  
                  <Button
                    onClick={() => handleBookingClick(service.name)}
                    className="w-full text-white"
                    style={{ backgroundColor: '#7A2E2E' }}
                  >
                    Book Now
                  </Button>
                </div>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* Information Section */}
      <section className="px-6 lg:px-12 py-16 lg:py-24" style={{ backgroundColor: '#EAD7D3' }}>
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl lg:text-4xl mb-8 text-center" style={{ color: '#1A1A1A' }}>
            Service Information
          </h2>
          <div className="space-y-6 text-lg" style={{ color: '#6B6B6B' }}>
            <div className="p-6 rounded-xl" style={{ backgroundColor: 'white' }}>
              <h3 className="text-xl mb-3" style={{ color: '#1A1A1A' }}>
                What to Expect
              </h3>
              <p>
                Every nail service begins with a personalized consultation to understand your style and preferences. We use premium-quality products and follow strict hygiene standards to ensure a safe, flawless, and long-lasting nail experience.
              </p>
            </div>
            
            <div className="p-6 rounded-xl" style={{ backgroundColor: 'white' }}>
              <h3 className="text-xl mb-3" style={{ color: '#1A1A1A' }}>
                Booking & Cancellation
              </h3>
              <p>
                Advance booking is recommended to secure your preferred time slot. Cancellations should be made at least 24 hours prior to avoid any inconvenience and ensure smooth scheduling of nail services.
              </p>
            </div>
            
            <div className="p-6 rounded-xl" style={{ backgroundColor: 'white' }}>
              <h3 className="text-xl mb-3" style={{ color: '#1A1A1A' }}>
                Gift & Referral Benefits
              </h3>
              <p>
                Gift your loved ones a premium nail experience with our services. Refer a friend and enjoy 10% off on your next booking when they book with us.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-6 lg:px-12 py-16 lg:py-24" style={{ backgroundColor: 'white' }}>
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl lg:text-5xl mb-6" style={{ color: '#1A1A1A' }}>
            Ready to Get Started?
          </h2>
          <p className="text-lg mb-8" style={{ color: '#6B6B6B' }}>
            Book your appointment today and experience luxury nail care at its finest.
          </p>
          <Button
            onClick={() => handleBookingClick()}
            className="text-white text-lg px-8 py-6"
            style={{ backgroundColor: '#7A2E2E' }}
          >
            Book Your Appointment
          </Button>
        </div>
      </section>
    </div>
  );
}