import { Star, Sparkles } from 'lucide-react';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';

interface ShipInfo {
  name: string;
  year: number;
  description: string;
  highlight: string;
  image: string;
  isNew?: boolean;
}

// Ships ordered by year (newest first)
const ships: ShipInfo[] = [
  {
    name: 'Disney Adventure',
    year: 2026,
    description: 'Coming to Singapore, this ship brings Disney magic to Asia with seven themed zones and unique experiences.',
    highlight: 'Asia Home Port',
    image: 'https://mctzomkzqzywhophhpdr.supabase.co/storage/v1/object/public/Magical%20Park%20Vacations/Destinations/Disney%20Cruise%20Line/Fleet/Disney%20Adventure.jpeg',
    isNew: true,
  },
  {
    name: 'Disney Destiny',
    year: 2025,
    description: 'The newest addition to the fleet, featuring immersive Disney storytelling and the latest onboard innovations.',
    highlight: 'Heroes & Villains Theme',
    image: 'https://mctzomkzqzywhophhpdr.supabase.co/storage/v1/object/public/Magical%20Park%20Vacations/Destinations/Disney%20Cruise%20Line/Fleet/Disney%20Destiny%20Atrium.jpeg',
    isNew: true,
  },
  {
    name: 'Disney Treasure',
    year: 2024,
    description: 'Inspired by the adventures of beloved Disney characters, featuring stunning design and world-class entertainment.',
    highlight: 'Adventure-Themed Design',
    image: 'https://mctzomkzqzywhophhpdr.supabase.co/storage/v1/object/public/Magical%20Park%20Vacations/Destinations/Disney%20Cruise%20Line/Fleet/Disney%20Treasure%20Atrium.jpeg',
    isNew: true,
  },
  {
    name: 'Disney Wish',
    year: 2022,
    description: 'A stunning ship with enchanting experiences including AquaMouse, the first Disney attraction at sea.',
    highlight: 'AquaMouse Attraction',
    image: 'https://mctzomkzqzywhophhpdr.supabase.co/storage/v1/object/public/Magical%20Park%20Vacations/Destinations/Disney%20Cruise%20Line/Fleet/Disney%20Wish%20Atrium.jpeg',
  },
  {
    name: 'Disney Fantasy',
    year: 2012,
    description: 'Sister ship to the Dream, offering unique dining venues and the spectacular Animator\'s Palate experience.',
    highlight: 'Animator\'s Palate',
    image: 'https://mctzomkzqzywhophhpdr.supabase.co/storage/v1/object/public/Magical%20Park%20Vacations/Destinations/Disney%20Cruise%20Line/Fleet/Disney%20Fantasy%20Waterslide.jpeg',
  },
  {
    name: 'Disney Dream',
    year: 2011,
    description: 'An elegant vessel featuring AquaDuck, the first-ever shipboard water coaster, and magical Broadway-style shows.',
    highlight: 'AquaDuck Water Coaster',
    image: 'https://mctzomkzqzywhophhpdr.supabase.co/storage/v1/object/public/Magical%20Park%20Vacations/Destinations/Disney%20Cruise%20Line/Fleet/Disney%20Dream.jpeg',
  },
  {
    name: 'Disney Wonder',
    year: 1999,
    description: 'Classic Disney cruising with intimate spaces, perfect for Alaska and Mexico sailings.',
    highlight: 'Tiana\'s Place Restaurant',
    image: 'https://mctzomkzqzywhophhpdr.supabase.co/storage/v1/object/public/Magical%20Park%20Vacations/Destinations/Disney%20Cruise%20Line/Fleet/Disney%20Wonder.jpeg',
  },
  {
    name: 'Disney Magic',
    year: 1998,
    description: 'The ship that started it all, recently refurbished with modern amenities while maintaining its classic charm.',
    highlight: 'Rapunzel\'s Royal Table',
    image: 'https://mctzomkzqzywhophhpdr.supabase.co/storage/v1/object/public/Magical%20Park%20Vacations/Destinations/Disney%20Cruise%20Line/Fleet/Disney%20Magic.jpeg',
  },
];

const Fleet = () => {
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation();

  return (
    <section id="fleet" className="py-24 bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div
          ref={headerRef}
          className={`text-center max-w-3xl mx-auto mb-16 transition-all duration-700 ${
            headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <p className="text-magenta uppercase tracking-[0.2em] text-sm font-medium mb-4">
            The Fleet
          </p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-ocean mb-6">
            Eight Magnificent Ships
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed">
            From the classic charm of the Disney Magic to the innovative Disney Destiny, each ship offers its own unique magic and adventure.
          </p>
        </div>

        {/* Ships Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {ships.map((ship, index) => (
            <ShipCard key={ship.name} ship={ship} delay={index * 100} />
          ))}
        </div>
      </div>
    </section>
  );
};

interface ShipCardProps {
  ship: ShipInfo;
  delay: number;
}

const ShipCard = ({ ship, delay }: ShipCardProps) => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.2 });

  return (
    <div
      ref={ref}
      className={`card-hover bg-sky rounded-2xl overflow-hidden transition-all duration-700 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {/* Ship Image */}
      <div className="relative h-40 overflow-hidden">
        <img
          src={ship.image}
          alt={ship.name}
          className="w-full h-full object-cover"
        />
        {ship.isNew && (
          <span className="absolute top-3 right-3 inline-flex items-center gap-1 px-2 py-1 bg-magenta text-white text-xs font-semibold rounded-full">
            <Sparkles className="w-3 h-3" />
            NEW
          </span>
        )}
      </div>

      {/* Card Content */}
      <div className="p-5">
        <h3 className="font-serif text-xl text-ocean mb-1">{ship.name}</h3>
        <p className="text-gray-500 text-sm mb-3">Maiden Voyage: {ship.year}</p>
        <p className="text-gray-600 text-sm leading-relaxed mb-4">
          {ship.description}
        </p>
        <div className="flex items-center gap-2 text-sm">
          <Star className="w-4 h-4 text-yellow" />
          <span className="text-ocean font-medium">{ship.highlight}</span>
        </div>
      </div>
    </div>
  );
};

export default Fleet;
