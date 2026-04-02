import { useState } from 'react';
import { Outlet, useNavigate } from 'react-router';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { BookingModal } from '../components/BookingModal';

export function Root() {
  const navigate = useNavigate();
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<string>();

  const handleBookingClick = (serviceName?: string) => {
    setSelectedService(serviceName);
    setIsBookingModalOpen(true);
  };

  const handleContactClick = () => {
    navigate('/');
    setTimeout(() => {
      const contactSection = document.getElementById('contact');
      contactSection?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  return (
    <div className="min-h-screen">
      <Navbar 
        onBookingClick={() => handleBookingClick()}
        onContactClick={handleContactClick}
      />
      
      <main>
        <Outlet context={{ handleBookingClick }} />
      </main>
      
      <Footer />
      
      <BookingModal 
        isOpen={isBookingModalOpen}
        onClose={() => setIsBookingModalOpen(false)}
        selectedService={selectedService}
      />
    </div>
  );
}
