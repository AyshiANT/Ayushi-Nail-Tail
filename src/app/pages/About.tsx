import { useOutletContext } from 'react-router';
import { Award, Heart, Users, Sparkles } from 'lucide-react';
import { Button } from '../components/ui/button';

interface OutletContext {
  handleBookingClick: (serviceName?: string) => void;
}

export function About() {
  const { handleBookingClick } = useOutletContext<OutletContext>();

  const values = [
    {
      icon: Heart,
      title: 'Passion for Nail Art',
      description: 'Dedicated to enhancing natural beauty with precision, creativity, and attention to detail.',
    },
    {
      icon: Users,
      title: 'Client-Focused Experience',
      description: 'Personalized nail services designed for your comfort, style, and satisfaction.',
    },
    {
      icon: Sparkles,
      title: 'Hygienic & Safe',
      description: 'Strict hygiene practices and sanitized tools for a clean and safe experience.',
    },
    {
      icon: Award,
      title: 'Budget-Friendly Luxury',
      description: 'Affordable nail services that deliver a premium and elegant look.',
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="px-6 lg:px-12 py-20 lg:py-32" style={{ backgroundColor: '#EAD7D3' }}>
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl lg:text-6xl mb-6" style={{ color: '#1A1A1A' }}>
            About Ayushi Nail Tail
          </h1>
          <p className="text-lg lg:text-xl mb-8" style={{ color: '#6B6B6B' }}>
            Where artistry meets luxury in every nail design
          </p>
        </div>
      </section>

      {/* Service Information Section */}
      <section className="px-6 lg:px-12 py-16 lg:py-24" style={{ backgroundColor: 'white' }}>
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl lg:text-5xl mb-12 text-center" style={{ color: '#1A1A1A' }}>
            Service Information
          </h2>
          
          <div className="space-y-12">
            <div>
              <h3 className="text-2xl mb-4 font-medium" style={{ color: '#1A1A1A' }}>What to Expect</h3>
              <p className="text-lg leading-relaxed" style={{ color: '#6B6B6B' }}>
                Every nail service begins with a personalized consultation to understand your style and preferences. We use premium-quality products and follow strict hygiene standards to ensure a safe, flawless, and long-lasting nail experience.
              </p>
            </div>

            <div>
              <h3 className="text-2xl mb-4 font-medium" style={{ color: '#1A1A1A' }}>Booking & Cancellation</h3>
              <p className="text-lg leading-relaxed" style={{ color: '#6B6B6B' }}>
                Advance booking is recommended to secure your preferred time slot. Cancellations should be made at least 24 hours prior to avoid any inconvenience and ensure smooth scheduling of nail services.
              </p>
            </div>

            <div>
              <h3 className="text-2xl mb-4 font-medium" style={{ color: '#1A1A1A' }}>Gift & Referral Benefits</h3>
              <p className="text-lg leading-relaxed" style={{ color: '#6B6B6B' }}>
                Gift your loved ones a premium nail experience with our services. Refer a friend and enjoy 10% off on your next booking when they book with us.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="px-6 lg:px-12 py-16 lg:py-24" style={{ backgroundColor: '#F7F5F4' }}>
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl lg:text-5xl mb-12 text-center" style={{ color: '#1A1A1A' }}>
            Our Values
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center p-6 rounded-xl" style={{ backgroundColor: 'white' }}>
                <div 
                  className="w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center"
                  style={{ backgroundColor: '#7A2E2E' }}
                >
                  <value.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl mb-3" style={{ color: '#1A1A1A' }}>
                  {value.title}
                </h3>
                <p className="text-sm" style={{ color: '#6B6B6B' }}>
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-6 lg:px-12 py-16 lg:py-24" style={{ backgroundColor: '#EAD7D3' }}>
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl lg:text-5xl mb-6" style={{ color: '#1A1A1A' }}>
            Ready to Experience the Difference?
          </h2>
          <p className="text-lg mb-8" style={{ color: '#6B6B6B' }}>
            Book your appointment today and let our expert team pamper you with exceptional service.
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
