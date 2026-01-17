import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import { privateDestinations, type PrivateDestination } from '../../data/royalcaribbean';
import { MapPin, AlertCircle } from 'lucide-react';

interface DestinationCardProps {
  destination: PrivateDestination;
  delay: number;
}

const DestinationCard = ({ destination, delay }: DestinationCardProps) => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.2 });

  const getStatusBadge = () => {
    if (destination.status === 'suspended') {
      return (
        <span className="absolute top-4 right-4 bg-magenta text-white text-xs font-bold uppercase px-3 py-1 rounded-full shadow-lg flex items-center gap-1">
          <AlertCircle className="w-3 h-3" />
          Suspended
        </span>
      );
    }
    return null;
  };

  return (
    <div
      ref={ref}
      className={`card-hover bg-white rounded-2xl overflow-hidden shadow-md transition-all duration-700 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {/* Image Section */}
      <div className="relative h-56 overflow-hidden">
        <img
          src={destination.image}
          alt={destination.name}
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
        />
        {getStatusBadge()}
        <div className="absolute bottom-0 left-0 right-0 bg-black/50 p-3">
          <div className="flex items-center gap-2 text-sky-light mb-1">
            <MapPin className="w-4 h-4" />
            <span className="text-xs uppercase tracking-wide">Private Destination</span>
          </div>
          <h3 className="font-serif text-2xl text-white">{destination.name}</h3>
        </div>
      </div>

      {/* Content Section */}
      <div className="p-6">
        <p className="text-gray-600 text-sm leading-relaxed mb-4">
          {destination.description}
        </p>

        {/* Status Note (for suspended/coming soon destinations) */}
        {destination.statusNote && (
          <div className={`mb-4 p-3 rounded-lg ${
            destination.status === 'suspended'
              ? 'bg-magenta/10 border border-magenta/20'
              : 'bg-yellow/10 border border-yellow/20'
          }`}>
            <p className={`text-xs leading-relaxed ${
              destination.status === 'suspended' ? 'text-magenta-dark' : 'text-ocean'
            }`}>
              {destination.statusNote}
            </p>
          </div>
        )}

        {/* Highlights */}
        <div>
          <p className="text-xs uppercase tracking-wide text-gray-500 mb-3 font-semibold">
            Highlights:
          </p>
          <ul className="space-y-2">
            {destination.highlights.map((highlight, index) => (
              <li key={index} className="text-sm text-gray-700 flex items-start gap-2">
                <span className="text-aqua mt-1">•</span>
                <span>{highlight}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

const PrivateDestinations = () => {
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation({ threshold: 0.2 });

  return (
    <section id="private-destinations" className="py-24 bg-sky">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div
          ref={headerRef}
          className={`text-center max-w-3xl mx-auto mb-16 transition-all duration-700 ${
            headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <p className="text-magenta uppercase tracking-[0.2em] text-sm font-medium mb-4">
            EXCLUSIVE DESTINATIONS
          </p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-ocean mb-6">
            Private Island Paradises
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed">
            Experience Royal Caribbean's exclusive private destinations featuring pristine beaches,
            thrilling water parks, authentic cultural experiences, and unforgettable island adventures
            available only to our guests.
          </p>
        </div>

        {/* Destinations Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {privateDestinations.map((destination, index) => (
            <DestinationCard
              key={destination.id}
              destination={destination}
              delay={index * 100}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PrivateDestinations;
