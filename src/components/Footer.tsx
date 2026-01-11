import { Mail, Phone, MapPin, Facebook, Instagram, Twitter, ExternalLink } from 'lucide-react';

const LOGO_URL = 'https://mctzomkzqzywhophhpdr.supabase.co/storage/v1/object/public/Magical%20Park%20Vacations/ABT%20White.png';
const QUOTE_URL = 'https://tinyurl.com/advbytom';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Destinations', href: '#destinations' },
    { name: 'About', href: '#about' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'Contact', href: '#contact' },
    { name: 'Get a Quote', href: QUOTE_URL, external: true },
  ];

  const destinations = [
    'Walt Disney World',
    'Disneyland Resort',
    'Disney Cruise Line',
    'Adventures by Disney',
    'Aulani Resort',
  ];

  return (
    <footer className="bg-ocean text-white">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Column */}
          <div className="space-y-6">
            <a href="#home" className="block hover:opacity-80 transition-opacity">
              <img
                src={LOGO_URL}
                alt="Adventures by Tom"
                className="h-14 w-auto"
              />
            </a>
            <p className="text-sky text-sm leading-relaxed">
              Your boutique travel advisor specializing in Disney destinations and cruise vacations.
              Making every client feel like they are the only client.
            </p>
            <div className="flex items-center gap-4">
              <a
                href="#"
                className="hover:text-yellow transition-all duration-300"
                aria-label="Facebook"
              >
                <Facebook className="w-6 h-6" />
              </a>
              <a
                href="#"
                className="hover:text-yellow transition-all duration-300"
                aria-label="Instagram"
              >
                <Instagram className="w-6 h-6" />
              </a>
              <a
                href="#"
                className="hover:text-yellow transition-all duration-300"
                aria-label="Twitter"
              >
                <Twitter className="w-6 h-6" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif text-lg font-semibold mb-6" style={{ color: '#FFD60A' }}>Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    {...(link.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                    className="hover:text-yellow transition-colors text-sm inline-flex items-center gap-1"
                    style={{ color: '#FFFFFF' }}
                  >
                    {link.name}
                    {link.external && <ExternalLink className="w-3 h-3" />}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Destinations */}
          <div>
            <h4 className="font-serif text-lg font-semibold mb-6" style={{ color: '#FFD60A' }}>Destinations</h4>
            <ul className="space-y-3">
              {destinations.map((destination) => (
                <li key={destination}>
                  <span className="text-sm" style={{ color: '#FFFFFF' }}>{destination}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-serif text-lg font-semibold mb-6" style={{ color: '#FFD60A' }}>Get in Touch</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-yellow mt-0.5" />
                <a
                  href="mailto:tom@magicalparkvacations.com"
                  className="hover:text-yellow transition-colors text-sm"
                  style={{ color: '#FFFFFF' }}
                >
                  tom@magicalparkvacations.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-yellow mt-0.5" />
                <a
                  href="tel:+15857545434"
                  className="hover:text-yellow transition-colors text-sm"
                  style={{ color: '#FFFFFF' }}
                >
                  (585) 754-5434
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-yellow mt-0.5" />
                <span className="text-sm" style={{ color: '#FFFFFF' }}>
                  Available Nationwide
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="container mx-auto px-4 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sky/70 text-sm">
              &copy; {currentYear} Adventures by Tom. All rights reserved.
            </p>
            <div className="flex items-center gap-6 text-sm text-sky/70">
              <a href="#" className="hover:text-yellow transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-yellow transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
