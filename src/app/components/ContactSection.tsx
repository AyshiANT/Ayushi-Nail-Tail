import { MapPin, Phone, Clock } from 'lucide-react';

export function ContactSection() {
  const contactInfo = [
    {
      icon: MapPin,
      title: 'Visit Us',
      details: 'Salt Lake, Kolkata',
      subDetails: '',
    },
    {
      icon: Phone,
      title: 'Contact Us',
      details: '+91 9635780557',
      subDetails: 'Chat with us on WhatsApp',
      link: 'https://wa.me/919635780557'
    },
    {
      icon: Clock,
      title: 'Opening Hours',
      details: 'Available all week',
      subDetails: 'Bookings accepted until 6 PM only',
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
              {info.link ? (
                <a href={info.link} target="_blank" rel="noopener noreferrer" className="text-sm mb-1 hover:underline block" style={{ color: '#6B6B6B' }}>
                  {info.details}
                </a>
              ) : (
                <p className="text-sm mb-1" style={{ color: '#6B6B6B' }}>
                  {info.details}
                </p>
              )}
              <p className="text-xs mt-1" style={{ color: '#A06A6A' }}>
                {info.subDetails}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}