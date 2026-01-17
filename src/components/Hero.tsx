import { useState } from 'react';
import { useParallax } from '../hooks/useScrollAnimation';
import { ChevronDown } from 'lucide-react';
import { QUOTE_URL } from '../constants';
import { trackQuoteClick } from '../utils/analytics';
import { ASSETS } from '../constants/assets';

// Hero variants to showcase diverse destinations
interface HeroVariant {
  backgroundImage: string;
  tagline: string;
  heading: string;
  headingAccent: string;
  subtitle: string;
}

const heroVariants: HeroVariant[] = [
  // Disney Cruise Line
  {
    backgroundImage: 'https://mctzomkzqzywhophhpdr.supabase.co/storage/v1/object/public/Magical%20Park%20Vacations/Castaway%20Cay%20-%20DCl%20-%20All%20Characters.webp',
    tagline: 'Where Your Story Begins',
    heading: 'Your Journey to',
    headingAccent: 'Magic',
    subtitle: 'Stress-free travel planning for Disney, Cruising, and beyond. Where every client feels like the only client.',
  },
  {
    backgroundImage: ASSETS.disneyCruiseLine.heroes[0],
    tagline: 'Set Sail with Disney',
    heading: 'Experience the',
    headingAccent: 'Magic at Sea',
    subtitle: 'Disney Cruise Line voyages where dreams come alive. Let me handle every detail of your perfect cruise vacation.',
  },
  {
    backgroundImage: ASSETS.disneyCruiseLine.heroes[2],
    tagline: 'Disney Treasure Awaits',
    heading: 'Discover Your Next',
    headingAccent: 'Adventure',
    subtitle: 'Sail aboard Disney\'s newest ships to breathtaking destinations. Expert planning for unforgettable cruising experiences.',
  },
  // Royal Caribbean
  {
    backgroundImage: ASSETS.royalCaribbean.heroes[0],
    tagline: 'Bold Adventures Await',
    heading: 'Escape to',
    headingAccent: 'Paradise',
    subtitle: 'Royal Caribbean\'s world-class ships and private destinations. From Icon Class to Perfect Day at CocoCay - adventure awaits.',
  },
  {
    backgroundImage: ASSETS.royalCaribbean.heroes[2],
    tagline: 'Your Perfect Day Starts Here',
    heading: 'Experience',
    headingAccent: 'Island Bliss',
    subtitle: 'Exclusive private islands, thrilling activities, and crystal-clear waters. Let me plan your ultimate cruise getaway.',
  },
  {
    backgroundImage: ASSETS.royalCaribbean.heroes[1],
    tagline: 'The World\'s Largest Ships',
    heading: 'Sail in',
    headingAccent: 'Style',
    subtitle: 'Oasis Class adventures with endless entertainment and dining. Personalized cruise planning for your perfect vacation.',
  },
  // Disneyland
  {
    backgroundImage: ASSETS.disneyland.heroes[0],
    tagline: 'The Original Magic',
    heading: 'Create',
    headingAccent: 'Memories',
    subtitle: 'Disneyland Resort magic for the whole family. From park tickets to dining reservations - I\'ve got you covered.',
  },
  {
    backgroundImage: ASSETS.disneyland.heroes[3],
    tagline: 'California Adventure',
    heading: 'Experience',
    headingAccent: 'Adventure',
    subtitle: 'Two incredible parks, countless memories. Expert Disneyland planning to maximize your magical moments.',
  },
  {
    backgroundImage: ASSETS.disneyland.heroes[4],
    tagline: 'Where Dreams Come True',
    heading: 'Your',
    headingAccent: 'Happiest Place',
    subtitle: 'Personalized Disneyland experiences tailored just for you. From first-timers to annual passholders.',
  },
];

// Get a random hero variant (executed once on component mount)
const getRandomHeroVariant = (): HeroVariant => {
  const randomIndex = Math.floor(Math.random() * heroVariants.length);
  return heroVariants[randomIndex];
};

const Hero = () => {
  const scrollOffset = useParallax();
  // Select random hero variant once on mount
  const [heroVariant] = useState<HeroVariant>(getRandomHeroVariant);

  return (
    <section
      id="home"
      className="relative h-[75vh] min-h-[450px] md:h-screen md:min-h-[600px] flex items-center justify-center overflow-hidden"
    >
      {/* Background Image with Parallax */}
      <div
        className="absolute inset-0 bg-cover bg-top md:bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('${heroVariant.backgroundImage}')`,
          transform: `translateY(${scrollOffset * 0.5}px)`,
        }}
      />

      {/* Dark Overlay for text readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-ocean-dark/50 via-ocean/40 to-ocean-dark/50" />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Tagline */}
          <p className="text-yellow uppercase tracking-[0.3em] text-sm font-semibold mb-6 animate-fade-in-down drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
            {heroVariant.tagline}
          </p>

          {/* Main Heading - All white with yellow accent */}
          <h1
            className="font-serif text-4xl md:text-5xl lg:text-7xl font-semibold mb-6 leading-tight animate-fade-in drop-shadow-[0_4px_8px_rgba(0,0,0,0.7)]"
            style={{ color: '#FFFFFF' }}
          >
            {heroVariant.heading}{' '}
            <span className="text-yellow italic drop-shadow-[0_4px_8px_rgba(0,0,0,0.7)]">{heroVariant.headingAccent}</span>
            <br />
            Begins Here
          </h1>

          {/* Subtitle */}
          <p className="text-white text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed animate-fade-in-up drop-shadow-[0_2px_4px_rgba(0,0,0,0.6)]">
            {heroVariant.subtitle}
          </p>

          {/* CTA Buttons - White text on both */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up">
            <a
              href={QUOTE_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackQuoteClick('hero')}
              className="px-8 py-4 rounded-lg bg-magenta text-white font-semibold uppercase tracking-wide text-sm hover:bg-magenta-light transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1"
            >
              Get a Free Quote
            </a>
            <a
              href="#destinations"
              className="btn-outline px-8 py-4 rounded-lg font-semibold uppercase tracking-wide text-sm transition-all duration-300 hover:-translate-y-1"
            >
              Explore Destinations
            </a>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-10 animate-bounce">
        <a
          href="#destinations"
          className="flex flex-col items-center gap-2 hover:text-yellow transition-colors"
          aria-label="Scroll to destinations"
        >
          <span className="text-xs uppercase tracking-widest font-medium text-white lg:text-aqua">Scroll</span>
          <ChevronDown className="w-5 h-5 text-white lg:text-aqua" />
        </a>
      </div>

      {/* Decorative Wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg
          viewBox="0 0 1440 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-auto"
        >
          <path
            d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z"
            fill="#FFFFFF"
          />
        </svg>
      </div>
    </section>
  );
};

export default Hero;
