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
      title: 'Passion for Beauty',
      description: 'We believe in enhancing natural beauty with care and dedication to every detail.',
    },
    {
      icon: Award,
      title: 'Excellence',
      description: 'Our team is trained in the latest techniques and uses only premium products.',
    },
    {
      icon: Users,
      title: 'Client-Centered',
      description: 'Your satisfaction and comfort are our top priorities in every service we provide.',
    },
    {
      icon: Sparkles,
      title: 'Innovation',
      description: 'We stay ahead of trends to bring you the most modern and stunning nail designs.',
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

      {/* Story Section */}
      <section className="px-6 lg:px-12 py-16 lg:py-24" style={{ backgroundColor: 'white' }}>
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl lg:text-5xl mb-8 text-center" style={{ color: '#1A1A1A' }}>
            Our Story
          </h2>
          <div className="space-y-6 text-lg" style={{ color: '#6B6B6B' }}>
            <p>
              Founded in 2015, Ayushi Nail Tail began with a simple vision: to create a sanctuary where 
              beauty, relaxation, and artistry come together. What started as a small boutique salon 
              has grown into one of the most trusted names in luxury nail care.
            </p>
            <p>
              Our journey has been driven by passion for perfection and dedication to our clients. 
              Every nail design we create is a reflection of our commitment to excellence and our 
              belief that beautiful nails can transform how you feel about yourself.
            </p>
            <p>
              Today, we're proud to serve hundreds of satisfied clients who trust us with their 
              nail care needs. Our team of expert nail artists brings creativity, precision, and 
              warmth to every appointment, ensuring you leave feeling pampered and confident.
            </p>
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
