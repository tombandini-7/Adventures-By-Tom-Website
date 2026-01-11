import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { Castle, Ship, Palmtree, MapPin, ArrowRight } from 'lucide-react';

interface DestinationCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  features: string[];
  image: string;
  delay: number;
}

const DestinationCard = ({
  icon,
  title,
  description,
  features,
  image,
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
      <div className="relative h-64 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ocean/60 to-transparent" />
        <div className="absolute top-4 left-4 w-12 h-12 rounded-full bg-aqua flex items-center justify-center text-white">
          {icon}
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="font-serif text-2xl text-ocean mb-3">{title}</h3>
        <p className="text-gray-600 text-sm mb-4 leading-relaxed">{description}</p>

        {/* Features */}
        <ul className="space-y-2 mb-6">
          {features.map((feature) => (
            <li key={feature} className="flex items-center gap-2 text-sm text-gray-500">
              <MapPin className="w-4 h-4 text-magenta" />
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
        'Experience the magic of four incredible theme parks, two water parks, and world-class resorts in Orlando, Florida.',
      features: ['Magic Kingdom', 'EPCOT', 'Hollywood Studios', "Animal Kingdom"],
      image: 'https://images.unsplash.com/photo-1597466599360-3b9775841aec?q=80&w=1964',
    },
    {
      icon: <Ship className="w-6 h-6" />,
      title: 'Disney Cruise Line',
      description:
        'Set sail on an unforgettable voyage where legendary Disney entertainment meets the relaxation of a luxury cruise.',
      features: ['Caribbean Voyages', 'Mediterranean Cruises', 'Alaska Adventures', 'Private Island'],
      image: 'https://images.unsplash.com/photo-1548574505-5e239809ee19?q=80&w=2064',
    },
    {
      icon: <Palmtree className="w-6 h-6" />,
      title: 'Aulani Resort',
      description:
        "Discover Hawaiian paradise at Disney's stunning beachfront resort, where relaxation meets adventure.",
      features: ['Ko Olina Beach', 'Spa Services', 'Cultural Experiences', 'Character Dining'],
      image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=2073',
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {destinations.map((destination, index) => (
            <DestinationCard
              key={destination.title}
              {...destination}
              delay={index * 150}
            />
          ))}
        </div>

        {/* Additional Services */}
        <div className="mt-16 text-center">
          <p className="text-gray-600 mb-6">
            Also specializing in:{' '}
            <span className="text-aqua font-medium">Adventures by Disney</span>,{' '}
            <span className="text-aqua font-medium">Disneyland Resort</span>,{' '}
            <span className="text-aqua font-medium">Universal Studios</span>, and more.
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
