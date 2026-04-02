import { Outlet, useNavigate } from 'react-router';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';

export function Root() {
  const navigate = useNavigate();

  const handleBookingClick = (serviceName?: string) => {
    window.open('https://forms.gle/Nz8qPF6Sp8Ah7N648', '_blank');
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
    </div>
  );
}
