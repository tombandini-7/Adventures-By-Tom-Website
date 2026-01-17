import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import { shipClasses, type ShipClass } from '../../data/royalcaribbean';
import { Anchor } from 'lucide-react';

interface ShipCardProps {
  shipClass: ShipClass;
  delay: number;
}

const ShipCard = ({ shipClass, delay }: ShipCardProps) => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.2 });

  return (
    <div
      ref={ref}
      className={`card-hover bg-white rounded-2xl overflow-hidden shadow-md transition-all duration-700 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {/* Image Section */}
      <div className="relative h-48 overflow-hidden">
        <img
          src={shipClass.image}
          alt={shipClass.name}
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
        />
        {shipClass.isNew && (
          <span className="absolute top-3 right-3 bg-magenta text-white text-xs font-bold uppercase px-3 py-1 rounded-full shadow-lg">
            NEW
          </span>
        )}
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-ocean/90 to-transparent p-4">
          <h3 className="font-serif text-2xl text-white">{shipClass.name}</h3>
          <p className="text-sky-light text-sm">Introduced {shipClass.yearIntroduced}</p>
        </div>
      </div>

      {/* Content Section */}
      <div className="p-6">
        <div className="flex items-center gap-2 text-aqua mb-3">
          <Anchor className="w-4 h-4" />
          <span className="text-sm font-semibold">{shipClass.capacity}</span>
        </div>

        <p className="text-gray-600 text-sm leading-relaxed mb-4">
          {shipClass.description}
        </p>

        {/* Ships in Class */}
        <div className="mb-4">
          <p className="text-xs uppercase tracking-wide text-gray-500 mb-2 font-semibold">Ships:</p>
          <div className="flex flex-wrap gap-2">
            {shipClass.ships.map((ship) => (
              <span
                key={ship}
                className="text-xs bg-sky px-2 py-1 rounded-md text-ocean"
              >
                {ship}
              </span>
            ))}
          </div>
        </div>

        {/* Highlights */}
        <div>
          <p className="text-xs uppercase tracking-wide text-gray-500 mb-2 font-semibold">
            Key Features:
          </p>
          <ul className="space-y-1">
            {shipClass.highlights.slice(0, 4).map((highlight, index) => (
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

const ShipClasses = () => {
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation({ threshold: 0.2 });

  return (
    <section id="ship-classes" className="py-24 bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div
          ref={headerRef}
          className={`text-center max-w-3xl mx-auto mb-16 transition-all duration-700 ${
            headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <p className="text-magenta uppercase tracking-[0.2em] text-sm font-medium mb-4">
            OUR FLEET
          </p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-ocean mb-6">
            Seven Classes of Ships
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed">
            From the revolutionary Icon Class to the elegant Vision Class, Royal Caribbean offers
            a diverse fleet to match every traveler's dream. Each ship class brings unique
            features and innovations to create your perfect vacation at sea.
          </p>
        </div>

        {/* Ship Class Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {shipClasses.map((shipClass, index) => (
            <ShipCard
              key={shipClass.id}
              shipClass={shipClass}
              delay={index * 100}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ShipClasses;
