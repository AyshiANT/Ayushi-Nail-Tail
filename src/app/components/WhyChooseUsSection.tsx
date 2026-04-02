import { Sparkles, Award, Clock, Heart } from 'lucide-react';
import { Button } from './ui/button';

interface WhyChooseUsSectionProps {
  onBookingClick: () => void;
}

export function WhyChooseUsSection({ onBookingClick }: WhyChooseUsSectionProps) {
  const reasons = [
    {
      icon: Sparkles,
      title: 'Premium Quality',
      description: 'We use only the finest products and latest techniques',
    },
    {
      icon: Award,
      title: 'Expert Stylists',
      description: 'Certified professionals with years of experience',
    },
    {
      icon: Clock,
      title: 'Flexible Timing',
      description: 'Convenient scheduling to fit your busy lifestyle',
    },
    {
      icon: Heart,
      title: 'Luxury Experience',
      description: 'Relaxing ambiance and exceptional customer care',
    },
  ];

  return (
    <section className="px-6 lg:px-12 py-16 lg:py-24" style={{ backgroundColor: 'white' }}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl mb-4 tracking-wide" style={{ color: '#1A1A1A' }}>
            WHY CHOOSE US
          </h2>
        </div>

        {/* Reasons Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {reasons.map((reason, index) => (
            <div key={index} className="text-center">
              <div 
                className="w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center"
                style={{ backgroundColor: '#EAD7D3' }}
              >
                <reason.icon className="w-8 h-8" style={{ color: '#7A2E2E' }} />
              </div>
              <h3 className="text-lg mb-2" style={{ color: '#1A1A1A' }}>
                {reason.title}
              </h3>
              <p className="text-sm" style={{ color: '#6B6B6B' }}>
                {reason.description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center py-12 px-6 rounded-2xl" style={{ backgroundColor: '#EAD7D3' }}>
          <h3 className="text-2xl lg:text-3xl mb-6 tracking-wide" style={{ color: '#1A1A1A' }}>
            WANT TO HAVE THE PERFECT NAILS?
          </h3>
          <Button
            onClick={onBookingClick}
            className="text-white px-10 py-6 text-base"
            style={{ backgroundColor: '#7A2E2E' }}
          >
            Book Appointment
          </Button>
        </div>
      </div>
    </section>
  );
}
