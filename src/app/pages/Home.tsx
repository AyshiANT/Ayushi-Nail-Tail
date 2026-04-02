import { useNavigate, useOutletContext } from 'react-router';
import { HeroSection } from '../components/HeroSection';
import { ServicesSection } from '../components/ServicesSection';
import { WhyChooseUsSection } from '../components/WhyChooseUsSection';
import { ReviewsSection } from '../components/ReviewsSection';
import { ContactSection } from '../components/ContactSection';

interface OutletContext {
  handleBookingClick: (serviceName?: string) => void;
}

export function Home() {
  const navigate = useNavigate();
  const { handleBookingClick } = useOutletContext<OutletContext>();

  const handleDiscoverClick = () => {
    navigate('/services');
  };

  return (
    <>
      <HeroSection 
        onBookingClick={() => handleBookingClick()}
        onDiscoverClick={handleDiscoverClick}
      />
      
      <ServicesSection 
        onBookService={(serviceName) => handleBookingClick(serviceName)}
      />
      
      <WhyChooseUsSection 
        onBookingClick={() => handleBookingClick()}
      />
      
      <ReviewsSection />
      
      <ContactSection />
    </>
  );
}
