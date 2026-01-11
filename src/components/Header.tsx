import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { useLogoAnimation } from '../hooks/useScrollAnimation';

const LOGO_URL = 'https://mctzomkzqzywhophhpdr.supabase.co/storage/v1/object/public/Magical%20Park%20Vacations/ABT%20White.png';
const QUOTE_URL = 'https://tinyurl.com/advbytom';
const BANNER_HEIGHT = 44; // Height of the promo banner in pixels

interface HeaderProps {
  hasBanner?: boolean;
}

const Header = ({ hasBanner = false }: HeaderProps) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { scale } = useLogoAnimation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // When mobile menu is open, keep logo at normal size
  const logoScale = isMobileMenuOpen ? 1 : scale;

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Promotions', href: '#promotions' },
    { name: 'Destinations', href: '#destinations' },
    { name: 'About', href: '#about' },
    { name: 'Testimonials', href: '#testimonials' },
  ];

  const headerTop = hasBanner ? BANNER_HEIGHT : 0;

  return (
    <header
      className={`fixed left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled || isMobileMenuOpen
          ? 'bg-ocean/95 backdrop-blur-md shadow-lg py-3'
          : 'bg-transparent py-3 lg:py-5'
      }`}
      style={{ top: `${headerTop}px` }}
    >
      <div className="container mx-auto px-4 lg:px-8">
        <nav className="flex items-center justify-between">
          {/* Logo container with fixed height to prevent layout shift */}
          <div className="relative h-12 md:h-14" style={{ width: `${150 * logoScale}px` }}>
            <a
              href="#home"
              className="absolute top-0 left-0 flex items-center hover:opacity-80 transition-opacity origin-top-left logo-animated"
              style={{
                transform: `scale(${logoScale})`,
              }}
            >
              <img
                src={LOGO_URL}
                alt="Adventures by Tom"
                className="h-12 md:h-14 w-auto"
              />
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-white hover:text-yellow transition-colors text-sm font-medium tracking-wide uppercase"
              >
                {link.name}
              </a>
            ))}
            <a
              href={QUOTE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2.5 rounded-lg bg-magenta text-white font-semibold text-sm uppercase tracking-wide hover:bg-magenta-light transition-all duration-300"
            >
              Get a Free Quote
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden text-white hover:text-yellow transition-colors p-2"
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </nav>

        {/* Mobile Navigation */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-300 ${
            isMobileMenuOpen ? 'max-h-96 opacity-100 mt-4' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="bg-ocean/95 backdrop-blur-md rounded-2xl p-6 space-y-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="block text-white hover:text-yellow transition-colors text-base font-medium tracking-wide py-2"
              >
                {link.name}
              </a>
            ))}
            <a
              href={QUOTE_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block px-6 py-3 rounded-lg bg-magenta text-white font-semibold text-sm uppercase tracking-wide text-center mt-4 hover:bg-magenta-light transition-all"
            >
              Get a Free Quote
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
