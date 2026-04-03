import { Facebook, Instagram } from 'lucide-react';

export function Footer() {
  return (
    <footer className="px-6 lg:px-12 py-12" style={{ backgroundColor: '#1A1A1A' }}>
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <img src="/logo%20without%20background.png" alt="Ayushi Nail Tail Logo" className="h-10 w-auto scale-[1.8] origin-left" />
              <span className="text-xl text-white ml-6">Ayushi Nail Tail</span>
            </div>
            <p className="text-sm ml-2" style={{ color: '#A0A0A0' }}>
              Time to treat yourself.<br />Book a Session.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#home" className="hover:opacity-70 transition-opacity" style={{ color: '#A0A0A0' }}>Home</a></li>
              <li><a href="#about" className="hover:opacity-70 transition-opacity" style={{ color: '#A0A0A0' }}>About</a></li>
              <li><a href="#services" className="hover:opacity-70 transition-opacity" style={{ color: '#A0A0A0' }}>Services</a></li>
              <li><a href="#contact" className="hover:opacity-70 transition-opacity" style={{ color: '#A0A0A0' }}>Contact</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white mb-4">Services</h3>
            <ul className="space-y-2 text-sm">
              <li><span style={{ color: '#A0A0A0' }}>Classic Manicure</span></li>
              <li><span style={{ color: '#A0A0A0' }}>Gel Nails</span></li>
              <li><span style={{ color: '#A0A0A0' }}>Acrylic Extensions</span></li>
              <li><span style={{ color: '#A0A0A0' }}>Nail Art Design</span></li>
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h3 className="text-white mb-4">Connect With Us</h3>
            <div className="flex gap-3">
              <a
                href="https://www.facebook.com/profile.php?id=61584798159820"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full flex items-center justify-center hover:opacity-70 transition-opacity"
                style={{ backgroundColor: '#7A2E2E' }}
              >
                <Facebook className="w-5 h-5 text-white" />
              </a>
              <a
                href="https://www.instagram.com/ayushisnailtale/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full flex items-center justify-center hover:opacity-70 transition-opacity"
                style={{ backgroundColor: '#7A2E2E' }}
              >
                <Instagram className="w-5 h-5 text-white" />
              </a>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t text-center" style={{ borderColor: '#333' }}>
          <p className="text-sm" style={{ color: '#A0A0A0' }}>
            © 2026 Ayushi Nail Tail. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
