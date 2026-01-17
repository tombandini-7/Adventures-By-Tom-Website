import { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X, ChevronDown, Facebook, Instagram } from 'lucide-react';
import { useLogoAnimation } from '../hooks/useScrollAnimation';
import { ASSETS, QUOTE_URL, SOCIAL_LINKS } from '../constants';
import { trackQuoteClick, trackNavClick } from '../utils/analytics';

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
const BANNER_HEIGHT = 44; // Height of the promo banner in pixels

interface HeaderProps {
  hasBanner?: boolean;
}

interface NavItem {
  name: string;
  href: string;
  type: 'route' | 'hash' | 'dropdown';
  items?: { name: string; href: string; type: 'route' | 'hash' | 'external'; icon?: React.ReactNode }[];
}

const Header = ({ hasBanner = false }: HeaderProps) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [mobileExpandedDropdown, setMobileExpandedDropdown] = useState<string | null>(null);
  const { scale } = useLogoAnimation();
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = () => setOpenDropdown(null);
    if (openDropdown) {
      document.addEventListener('click', handleClickOutside);
      return () => document.removeEventListener('click', handleClickOutside);
    }
  }, [openDropdown]);

  // When mobile menu is open, keep logo at normal size
  const logoScale = isMobileMenuOpen ? 1 : scale;

  const navLinks: NavItem[] = [
    { name: 'Home', href: '/', type: 'route' },
    { name: 'Promotions', href: '/#promotions', type: 'hash' },
    {
      name: 'Destinations',
      href: '#',
      type: 'dropdown',
      items: [
        { name: 'Walt Disney World', href: '/walt-disney-world', type: 'route' },
        { name: 'Disneyland Resort', href: '/disneyland', type: 'route' },
        { name: 'Disney Cruise Line', href: '/disney-cruise-line', type: 'route' },
        { name: 'Royal Caribbean', href: '/royal-caribbean', type: 'route' },
        { name: 'All Destinations', href: '/#destinations', type: 'hash' },
      ],
    },
    { name: 'About', href: '/#about', type: 'hash' },
    { name: 'Testimonials', href: '/#testimonials', type: 'hash' },
    {
      name: 'Socials',
      href: '#',
      type: 'dropdown',
      items: [
        { name: SOCIAL_LINKS.instagram.name, href: SOCIAL_LINKS.instagram.url, type: 'external', icon: <Instagram className="w-4 h-4" /> },
        { name: SOCIAL_LINKS.facebook.name, href: SOCIAL_LINKS.facebook.url, type: 'external', icon: <Facebook className="w-4 h-4" /> },
        { name: SOCIAL_LINKS.tiktok.name, href: SOCIAL_LINKS.tiktok.url, type: 'external', icon: <TikTokIcon className="w-4 h-4" /> },
      ],
    },
  ];

  const handleNavClick = (item: { href: string; type: 'route' | 'hash'; name?: string }) => {
    setIsMobileMenuOpen(false);
    setOpenDropdown(null);

    // Track navigation click
    if (item.name) {
      trackNavClick(item.name);
    }

    if (item.type === 'hash') {
      // Check if we're on the homepage
      if (location.pathname === '/') {
        // Already on homepage, just scroll to section
        const sectionId = item.href.replace('/#', '');
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      } else {
        // Navigate to homepage first, then scroll
        navigate('/');
        setTimeout(() => {
          const sectionId = item.href.replace('/#', '');
          const element = document.getElementById(sectionId);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
          }
        }, 100);
      }
    }
  };

  const handleLogoClick = (e: React.MouseEvent) => {
    if (location.pathname === '/') {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

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
          <div
            className="relative h-10 sm:h-12 md:h-14 w-[100px] sm:w-[130px] md:w-[150px]"
            style={{
              width: logoScale < 1 ? `${150 * logoScale}px` : undefined
            }}
          >
            <Link
              to="/"
              onClick={handleLogoClick}
              className="absolute top-0 left-0 flex items-center hover:opacity-80 transition-opacity origin-top-left logo-animated"
              style={{
                transform: `scale(${logoScale})`,
              }}
            >
              <img
                src={ASSETS.logos.white}
                alt="Adventures by Tom"
                className="h-10 sm:h-12 md:h-14 w-auto"
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => {
              if (link.type === 'dropdown') {
                return (
                  <div key={link.name} className="relative">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        setOpenDropdown(openDropdown === link.name ? null : link.name);
                      }}
                      className="flex items-center gap-1 text-white hover:text-yellow transition-colors text-sm font-medium tracking-wide uppercase"
                    >
                      {link.name}
                      <ChevronDown
                        className={`w-4 h-4 transition-transform ${
                          openDropdown === link.name ? 'rotate-180' : ''
                        }`}
                      />
                    </button>
                    {openDropdown === link.name && link.items && (
                      <div
                        className="absolute top-full left-0 mt-2 w-56 bg-ocean/95 backdrop-blur-md rounded-lg shadow-xl py-2 animate-fade-in-down"
                        onClick={(e) => e.stopPropagation()}
                      >
                        {link.items.map((subItem) =>
                          subItem.type === 'route' ? (
                            <Link
                              key={subItem.name}
                              to={subItem.href}
                              onClick={() => setOpenDropdown(null)}
                              className="block px-4 py-2.5 text-white hover:text-yellow hover:bg-white/10 transition-colors text-sm"
                            >
                              {subItem.name}
                            </Link>
                          ) : subItem.type === 'external' ? (
                            <a
                              key={subItem.name}
                              href={subItem.href}
                              target="_blank"
                              rel="noopener noreferrer"
                              onClick={() => setOpenDropdown(null)}
                              className="flex items-center gap-2 px-4 py-2.5 text-white hover:text-yellow hover:bg-white/10 transition-colors text-sm"
                            >
                              {subItem.icon}
                              {subItem.name}
                            </a>
                          ) : (
                            <button
                              key={subItem.name}
                              onClick={() => handleNavClick(subItem as { href: string; type: 'route' | 'hash' })}
                              className="block w-full text-left px-4 py-2.5 text-white hover:text-yellow hover:bg-white/10 transition-colors text-sm"
                            >
                              {subItem.name}
                            </button>
                          )
                        )}
                      </div>
                    )}
                  </div>
                );
              }

              if (link.type === 'route') {
                return (
                  <Link
                    key={link.name}
                    to={link.href}
                    className="text-white hover:text-yellow transition-colors text-sm font-medium tracking-wide uppercase"
                  >
                    {link.name}
                  </Link>
                );
              }

              return (
                <button
                  key={link.name}
                  onClick={() => handleNavClick(link as { href: string; type: 'route' | 'hash' })}
                  className="text-white hover:text-yellow transition-colors text-sm font-medium tracking-wide uppercase"
                >
                  {link.name}
                </button>
              );
            })}
            <a
              href={QUOTE_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackQuoteClick('header')}
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
            isMobileMenuOpen ? 'max-h-[500px] opacity-100 mt-4' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="bg-ocean/95 backdrop-blur-md rounded-2xl p-6 space-y-2">
            {navLinks.map((link) => {
              if (link.type === 'dropdown') {
                return (
                  <div key={link.name}>
                    <button
                      onClick={() =>
                        setMobileExpandedDropdown(
                          mobileExpandedDropdown === link.name ? null : link.name
                        )
                      }
                      className="flex items-center justify-between w-full text-white hover:text-yellow transition-colors text-base font-medium tracking-wide py-2"
                    >
                      {link.name}
                      <ChevronDown
                        className={`w-4 h-4 transition-transform ${
                          mobileExpandedDropdown === link.name ? 'rotate-180' : ''
                        }`}
                      />
                    </button>
                    {mobileExpandedDropdown === link.name && link.items && (
                      <div className="pl-4 space-y-1 mt-1 mb-2">
                        {link.items.map((subItem) =>
                          subItem.type === 'route' ? (
                            <Link
                              key={subItem.name}
                              to={subItem.href}
                              onClick={() => setIsMobileMenuOpen(false)}
                              className="block text-white/80 hover:text-yellow transition-colors text-sm py-2"
                            >
                              {subItem.name}
                            </Link>
                          ) : subItem.type === 'external' ? (
                            <a
                              key={subItem.name}
                              href={subItem.href}
                              target="_blank"
                              rel="noopener noreferrer"
                              onClick={() => setIsMobileMenuOpen(false)}
                              className="flex items-center gap-2 text-white/80 hover:text-yellow transition-colors text-sm py-2"
                            >
                              {subItem.icon}
                              {subItem.name}
                            </a>
                          ) : (
                            <button
                              key={subItem.name}
                              onClick={() => handleNavClick(subItem as { href: string; type: 'route' | 'hash' })}
                              className="block w-full text-left text-white/80 hover:text-yellow transition-colors text-sm py-2"
                            >
                              {subItem.name}
                            </button>
                          )
                        )}
                      </div>
                    )}
                  </div>
                );
              }

              if (link.type === 'route') {
                return (
                  <Link
                    key={link.name}
                    to={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block text-white hover:text-yellow transition-colors text-base font-medium tracking-wide py-2"
                  >
                    {link.name}
                  </Link>
                );
              }

              return (
                <button
                  key={link.name}
                  onClick={() => handleNavClick(link as { href: string; type: 'route' | 'hash' })}
                  className="block w-full text-left text-white hover:text-yellow transition-colors text-base font-medium tracking-wide py-2"
                >
                  {link.name}
                </button>
              );
            })}
            <a
              href={QUOTE_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => {
                trackQuoteClick('mobile-menu');
                setIsMobileMenuOpen(false);
              }}
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
