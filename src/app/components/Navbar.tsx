import { useState } from 'react';
import { Menu, X, Calendar } from 'lucide-react';
import { Button } from './ui/button';
import { Link } from 'react-router';

interface NavbarProps {
  onBookingClick: () => void;
  onContactClick: () => void;
}

export function Navbar({ onBookingClick, onContactClick }: NavbarProps) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <>
      <nav className="sticky top-0 z-40 px-6 lg:px-12 py-4" style={{ backgroundColor: '#F7F5F4', borderBottom: '1px solid #E5E5E5' }}>
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <img src="/logo%20without%20background.png" alt="Ayushi Nail Tail Logo" className="h-10 w-auto scale-[1.8] origin-left" />
            <span className="text-xl font-medium ml-6" style={{ color: '#1A1A1A' }}>Ayushi Nail Tail</span>
          </div>

          {/* Center Navigation - Desktop */}
          <div className="hidden md:flex items-center gap-8">
            <Link to="/" className="hover:opacity-70 transition-opacity" style={{ color: '#1A1A1A' }}>Home</Link>
            <Link to="/about" className="hover:opacity-70 transition-opacity" style={{ color: '#1A1A1A' }}>About</Link>
            <Link to="/services" className="hover:opacity-70 transition-opacity" style={{ color: '#1A1A1A' }}>Services</Link>
          </div>

          {/* Right Side */}
          <div className="flex items-center gap-4">
            <Button
              onClick={onContactClick}
              className="hidden md:inline-flex text-white"
              style={{ backgroundColor: '#7A2E2E' }}
            >
              Contact
            </Button>

            <button
              onClick={() => setIsSidebarOpen(true)}
              className="p-2 rounded-md hover:bg-black/5 transition-colors"
              style={{ color: '#7A2E2E' }}
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </nav>

      {/* Hamburger Sidebar */}
      {isSidebarOpen && (
        <div className="fixed inset-0 z-50">
          <div
            className="absolute inset-0 bg-black/50"
            onClick={() => setIsSidebarOpen(false)}
          />
          <div
            className="absolute top-0 right-0 h-full w-80 shadow-xl flex flex-col"
            style={{ backgroundColor: '#F7F5F4' }}
          >
            <div className="p-6 flex items-center justify-between" style={{ borderBottom: '1px solid #E5E5E5' }}>
              <h2 className="text-xl" style={{ color: '#1A1A1A' }}>Menu</h2>
              <button onClick={() => setIsSidebarOpen(false)}>
                <X className="w-6 h-6" style={{ color: '#7A2E2E' }} />
              </button>
            </div>

            <div className="flex-1 p-6 space-y-4">
              <button
                onClick={() => {
                  setIsSidebarOpen(false);
                  onBookingClick();
                }}
                className="w-full flex items-center gap-3 p-3 rounded-lg hover:bg-black/5 transition-colors"
              >
                <Calendar className="w-5 h-5" style={{ color: '#7A2E2E' }} />
                <span style={{ color: '#1A1A1A' }}>Book Appointment</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}