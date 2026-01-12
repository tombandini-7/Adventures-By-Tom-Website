import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { Castle, Ship, Palmtree, Sparkles, Anchor, Globe, MapPin, ArrowRight } from 'lucide-react';
import { ASSETS } from '../constants/assets';

interface DestinationCardProps {
  icon?: React.ReactNode;
  title: string;
  description: string;
  features: string[];
  image: string;
  imagePosition?: string;
  delay: number;
}

const DestinationCard = ({
  icon,
  title,
  description,
  features,
  image,
  imagePosition = 'center',
  delay,
}: DestinationCardProps) => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.2 });

  return (
    <div
      ref={ref}
      className={`group card-hover bg-white rounded-2xl overflow-hidden shadow-lg transition-all duration-700 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {/* Image */}
      <div className="relative h-48 lg:h-52 overflow-hidden">
        <img
          src={image}
          alt={title}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          style={{ objectPosition: imagePosition }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ocean/60 to-transparent" />
        {icon && (
          <div className="absolute top-4 left-4 w-12 h-12 rounded-full bg-aqua flex items-center justify-center text-white">
            {icon}
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-5">
        <h3 className="font-serif text-xl lg:text-2xl text-ocean mb-2">{title}</h3>
        <p className="text-gray-600 text-sm mb-4 leading-relaxed">{description}</p>

        {/* Features */}
        <ul className="space-y-1.5 mb-4">
          {features.map((feature) => (
            <li key={feature} className="flex items-center gap-2 text-sm text-gray-500">
              <MapPin className="w-3.5 h-3.5 text-magenta flex-shrink-0" />
              {feature}
            </li>
          ))}
        </ul>

        {/* CTA */}
        <a
          href="#contact"
          className="inline-flex items-center gap-2 text-aqua font-medium text-sm hover:text-aqua-dark transition-colors group/link"
        >
          Learn More
          <ArrowRight className="w-4 h-4 transition-transform group-hover/link:translate-x-1" />
        </a>
      </div>
    </div>
  );
};

const Destinations = () => {
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation();

  const destinations = [
    {
      icon: <Castle className="w-6 h-6" />,
      title: 'Walt Disney World',
      description:
        'Experience the magic of four incredible theme parks, two water parks, and world-class resorts in Orlando.',
      features: ['Magic Kingdom', 'EPCOT', 'Hollywood Studios', 'Animal Kingdom'],
      image: ASSETS.destinations.waltDisneyWorld,
    },
    {
      icon: <Sparkles className="w-6 h-6" />,
      title: 'Disneyland Resort',
      description:
        'Where the Disney magic began. Explore two amazing parks in the heart of Southern California.',
      features: ['Disneyland Park', 'California Adventure', 'Downtown Disney', 'Disney Hotels'],
      image: ASSETS.destinations.disneyland,
    },
    {
      icon: <Ship className="w-6 h-6" />,
      title: 'Disney Cruise Line',
      description:
        'Set sail on an unforgettable voyage where legendary Disney entertainment meets luxury cruising.',
      features: ['Caribbean Voyages', 'Mediterranean', 'Alaska Adventures', 'Private Island'],
      image: ASSETS.cruises.disneyCruiseLine,
    },
    {
      icon: <Palmtree className="w-6 h-6" />,
      title: 'Au\'Lani Resort & Spa',
      description:
        "Discover Hawaiian paradise at Disney's stunning beachfront resort in Ko Olina, Oahu.",
      features: ['Ko Olina Beach', 'Spa Services', 'Cultural Experiences', 'Character Dining'],
      image: ASSETS.destinations.aulani,
    },
    {
      title: 'Adventures by Disney',
      description:
        'Guided group vacations to extraordinary destinations around the world with Disney magic.',
      features: ['European Tours', 'African Safaris', 'South America', 'Family Expeditions'],
      image: ASSETS.destinations.adventuresByDisney,
      imagePosition: 'left center',
    },
    {
      icon: <Anchor className="w-6 h-6" />,
      title: 'Royal Caribbean',
      description:
        "Bold adventures on the world's most innovative cruise ships with something for everyone.",
      features: ['Caribbean Islands', 'Perfect Day CocoCay', 'Mediterranean', 'Alaska'],
      image: ASSETS.cruises.royalCaribbean,
    },
    {
      icon: <Ship className="w-6 h-6" />,
      title: 'Virgin Voyages',
      description:
        'Adults-only cruising reimagined with unique experiences and premium amenities.',
      features: ['Adults-Only', 'All-Inclusive Dining', 'Beach Club Access', 'Wellness Focus'],
      image: ASSETS.cruises.virginVoyages,
    },
    {
      title: 'Hotels & Resorts',
      description:
        'Premium hotel stays to complement your vacation or as standalone luxury getaways.',
      features: ['Luxury Resorts', 'Beach Properties', 'City Hotels', 'All-Inclusive'],
      image: ASSETS.destinations.hotels,
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: 'European Vacations',
      description:
        "Explore the rich history, culture, and beauty of Europe's greatest destinations.",
      features: ['City Tours', 'River Cruises', 'Cultural Experiences', 'Custom Itineraries'],
      image: ASSETS.destinations.europe,
    },
  ];

  return (
    <section id="destinations" className="py-24 bg-sky">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div
          ref={headerRef}
          className={`text-center max-w-3xl mx-auto mb-16 transition-all duration-700 ${
            headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <p className="text-magenta uppercase tracking-[0.2em] text-sm font-medium mb-4">
            Explore
          </p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-ocean mb-6">
            Magical Destinations
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed">
            From enchanting theme parks to luxurious ocean voyages, discover the perfect
            escape for your family. Every destination promises unforgettable memories.
          </p>
        </div>

        {/* Destination Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-8">
          {destinations.map((destination, index) => (
            <DestinationCard
              key={destination.title}
              {...destination}
              delay={index * 100}
            />
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <p className="text-gray-600 mb-6">
            Don't see what you're looking for? We can help plan any vacation destination.
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-lg bg-magenta text-white font-semibold uppercase tracking-wide text-sm hover:bg-magenta-light transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1"
          >
            Plan Your Trip
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Destinations;
