import { ArrowRight } from 'lucide-react';
import { useParallax } from '../../hooks/useScrollAnimation';
import { QUOTE_URL } from '../../constants';

const HERO_IMAGE = 'https://mctzomkzqzywhophhpdr.supabase.co/storage/v1/object/public/Magical%20Park%20Vacations/Destinations/Walt%20Disney%20World%20Family.jpg';

const WDWHero = () => {
  const scrollOffset = useParallax();

  return (
    <section id="wdw-hero" className="relative h-[75vh] min-h-[450px] md:h-screen md:min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background Image with Parallax */}
      <div
        className="absolute inset-0 bg-cover bg-top md:bg-center"
        style={{
          backgroundImage: `url(${HERO_IMAGE})`,
          transform: `translateY(${scrollOffset * 0.3}px)`,
        }}
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-ocean-dark/75 via-ocean/65 to-ocean-dark/75" />

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <p className="text-yellow uppercase tracking-[0.3em] text-sm md:text-base font-medium mb-4 animate-fade-in-down">
          Your Magical Adventure Awaits
        </p>
        <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-white mb-6 animate-fade-in">
          Walt Disney World
        </h1>
        <p className="text-white/90 text-lg md:text-xl lg:text-2xl mb-8 max-w-2xl mx-auto leading-relaxed animate-fade-in-up">
          Where dreams come true across four incredible theme parks, two water parks, and endless magical experiences
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
          <a
            href={QUOTE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-lg bg-magenta text-white font-semibold uppercase tracking-wide text-sm hover:bg-magenta-light transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1"
          >
            Plan Your Trip
            <ArrowRight className="w-5 h-5" />
          </a>
          <a
            href="#first-time-guide"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-lg border-2 border-white text-white font-semibold uppercase tracking-wide text-sm hover:bg-white hover:text-ocean transition-all duration-300"
          >
            First Time Guide
          </a>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-white/50 flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-white/70 rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default WDWHero;
