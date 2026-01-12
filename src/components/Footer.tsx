import { Mail, Phone, MapPin, Facebook, Instagram, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';
import { ASSETS, QUOTE_URL, SOCIAL_LINKS } from '../constants';

// TikTok icon (not available in lucide-react)
const TikTokIcon = ({ className }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
  >
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
  </svg>
);

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Promotions', href: '#promotions' },
    { name: 'Destinations', href: '#destinations' },
    { name: 'About', href: '#about' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'Contact', href: '#contact' },
    { name: 'Get a Quote', href: QUOTE_URL, external: true },
  ];

  const destinations = [
    { name: 'Walt Disney World', href: '/walt-disney-world' },
    { name: 'Disneyland Resort' },
    { name: 'Disney Cruise Line' },
    { name: 'Adventures by Disney' },
    { name: 'Aulani Resort' },
  ];

  return (
    <footer className="bg-ocean text-white">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 lg:px-8 py-12 lg:py-16">

        {/* Mobile Layout: Centered, stacked sections */}
        <div className="lg:hidden">
          {/* Logo & Tagline - Centered */}
          <div className="text-center mb-10">
            <a href="#home" className="inline-block hover:opacity-80 transition-opacity mb-4">
              <img
                src={ASSETS.logos.white}
                alt="Adventures by Tom"
                className="h-50 w-auto mx-auto"
              />
            </a>
            <p className="text-sky text-sm leading-relaxed max-w-xs mx-auto">
              Let's plan something magical together!
            </p>
          </div>

          {/* Contact Info - Centered */}
          <div className="text-center mb-10">
            <h4 className="font-serif text-lg font-semibold mb-4 text-yellow">Get in Touch</h4>
            <div className="space-y-3">
              <a
                href="mailto:tom@magicalparkvacations.com"
                className="flex items-center justify-center gap-2 text-white hover:text-yellow transition-colors text-sm"
              >
                <Mail className="w-4 h-4 text-yellow" />
                tom@magicalparkvacations.com
              </a>
              <a
                href="tel:+15857545434"
                className="flex items-center justify-center gap-2 text-white hover:text-yellow transition-colors text-sm"
              >
                <Phone className="w-4 h-4 text-yellow" />
                (585) 754-5434
              </a>
              <div className="flex items-center justify-center gap-2 text-sm text-white">
                <MapPin className="w-4 h-4 text-yellow" />
                Available Nationwide
              </div>
            </div>
          </div>

          {/* Links - Two columns */}
          <div className="grid grid-cols-2 gap-8 mb-10">
            <div>
              <h4 className="font-serif text-base font-semibold mb-3 text-yellow">Quick Links</h4>
              <ul className="space-y-2">
                {quickLinks.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      {...(link.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                      className="text-white hover:text-yellow transition-colors text-sm inline-flex items-center gap-1"
                    >
                      {link.name}
                      {link.external && <ExternalLink className="w-3 h-3" />}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="font-serif text-base font-semibold mb-3 text-yellow">Destinations</h4>
              <ul className="space-y-2">
                {destinations.map((destination) => (
                  <li key={destination.name}>
                    {destination.href ? (
                      <Link
                        to={destination.href}
                        className="text-sm text-white hover:text-yellow transition-colors"
                      >
                        {destination.name}
                      </Link>
                    ) : (
                      <span className="text-sm text-white">{destination.name}</span>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Social Icons - Centered */}
          <div className="flex items-center justify-center gap-6">
            <a
              href={SOCIAL_LINKS.facebook.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-yellow transition-all duration-300"
              aria-label="Facebook"
            >
              <Facebook className="w-6 h-6" />
            </a>
            <a
              href={SOCIAL_LINKS.instagram.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-yellow transition-all duration-300"
              aria-label="Instagram"
            >
              <Instagram className="w-6 h-6" />
            </a>
            <a
              href={SOCIAL_LINKS.tiktok.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-yellow transition-all duration-300"
              aria-label="TikTok"
            >
              <TikTokIcon className="w-6 h-6" />
            </a>
          </div>
        </div>

        {/* Desktop Layout: 4-column grid */}
        <div className="hidden lg:grid lg:grid-cols-4 gap-12">
          {/* Brand Column */}
          <div className="space-y-6">
            <a href="#home" className="block hover:opacity-80 transition-opacity">
              <img
                src={ASSETS.logos.white}
                alt="Adventures by Tom"
                className="h-50 w-auto"
              />
            </a>
            <p className="text-sky text-sm leading-relaxed">
              Let's plan something magical together!
            </p>
            <div className="flex items-center gap-4">
              <a
                href={SOCIAL_LINKS.facebook.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-yellow transition-all duration-300"
                aria-label="Facebook"
              >
                <Facebook className="w-6 h-6" />
              </a>
              <a
                href={SOCIAL_LINKS.instagram.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-yellow transition-all duration-300"
                aria-label="Instagram"
              >
                <Instagram className="w-6 h-6" />
              </a>
              <a
                href={SOCIAL_LINKS.tiktok.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-yellow transition-all duration-300"
                aria-label="TikTok"
              >
                <TikTokIcon className="w-6 h-6" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif text-lg font-semibold mb-6 text-yellow">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    {...(link.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                    className="text-white hover:text-yellow transition-colors text-sm inline-flex items-center gap-1"
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
            <h4 className="font-serif text-lg font-semibold mb-6 text-yellow">Destinations</h4>
            <ul className="space-y-3">
              {destinations.map((destination) => (
                <li key={destination.name}>
                  {destination.href ? (
                    <Link
                      to={destination.href}
                      className="text-sm text-white hover:text-yellow transition-colors"
                    >
                      {destination.name}
                    </Link>
                  ) : (
                    <span className="text-sm text-white">{destination.name}</span>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-serif text-lg font-semibold mb-6 text-yellow">Get in Touch</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-yellow mt-0.5" />
                <a
                  href="mailto:tom@magicalparkvacations.com"
                  className="text-white hover:text-yellow transition-colors text-sm"
                >
                  tom@magicalparkvacations.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-yellow mt-0.5" />
                <a
                  href="tel:+15857545434"
                  className="text-white hover:text-yellow transition-colors text-sm"
                >
                  (585) 754-5434
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-yellow mt-0.5" />
                <span className="text-sm text-white">
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
            <p className="text-sky/70 text-sm text-center md:text-left">
              &copy; {currentYear} Adventures by Tom. All rights reserved.
            </p>
            <div className="flex items-center gap-6 text-sm">
              <a
                href="#"
                className="text-sky/70 hover:text-yellow transition-colors"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="text-sky/70 hover:text-yellow transition-colors"
              >
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
