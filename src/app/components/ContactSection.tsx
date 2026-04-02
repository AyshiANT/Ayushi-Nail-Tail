import { MapPin, Mail, Clock } from 'lucide-react';

export function ContactSection() {
  const contactInfo = [
    {
      icon: MapPin,
      title: 'Visit Us',
      details: '123 Beauty Lane, Fashion District',
      subDetails: 'New York, NY 10001',
    },
    {
      icon: Mail,
      title: 'Email Us',
      details: 'hello@nailstudio.com',
      subDetails: 'We reply within 24 hours',
    },
    {
      icon: Clock,
      title: 'Opening Hours',
      details: 'Monday - Saturday',
      subDetails: '9:00 AM - 8:00 PM',
    },
  ];

  return (
    <section id="contact" className="px-6 lg:px-12 py-16 lg:py-24" style={{ backgroundColor: 'white' }}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-5xl mb-4" style={{ color: '#1A1A1A' }}>
            Contact Us
          </h2>
          <p className="text-lg" style={{ color: '#6B6B6B' }}>
            We'd love to hear from you. Visit us or get in touch!
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {contactInfo.map((info, index) => (
            <div key={index} className="text-center p-6 rounded-xl" style={{ backgroundColor: '#F7F5F4' }}>
              <div 
                className="w-14 h-14 mx-auto mb-4 rounded-full flex items-center justify-center"
                style={{ backgroundColor: '#7A2E2E' }}
              >
                <info.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg mb-2" style={{ color: '#1A1A1A' }}>
                {info.title}
              </h3>
              <p className="text-sm mb-1" style={{ color: '#6B6B6B' }}>
                {info.details}
              </p>
              <p className="text-xs" style={{ color: '#A06A6A' }}>
                {info.subDetails}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}