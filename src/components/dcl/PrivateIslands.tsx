import { useState, useEffect } from 'react';
import { Palmtree, Waves, Sun, Compass, ChevronLeft, ChevronRight } from 'lucide-react';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';

interface IslandInfo {
  name: string;
  location: string;
  description: string;
  features: string[];
  images: string[];
}

const islands: IslandInfo[] = [
  {
    name: 'Castaway Cay',
    location: 'The Bahamas',
    description: 'Disney\'s original private island paradise features pristine beaches, water sports, and exclusive Disney experiences. A guest favorite since 1998.',
    features: [
      'Family Beach with waterslides',
      'Serenity Bay - adults-only beach',
      'Pelican Plunge floating platform',
      'Snorkeling lagoon',
      'Beach BBQ lunch included',
      'Bike & boat rentals available',
    ],
    images: [
      'https://mctzomkzqzywhophhpdr.supabase.co/storage/v1/object/public/Magical%20Park%20Vacations/Destinations/Disney%20Cruise%20Line/Private%20Islands/Castaway%20Cay%201.jpeg',
      'https://mctzomkzqzywhophhpdr.supabase.co/storage/v1/object/public/Magical%20Park%20Vacations/Destinations/Disney%20Cruise%20Line/Private%20Islands/Castaway%20Cay%202.jpeg',
      'https://mctzomkzqzywhophhpdr.supabase.co/storage/v1/object/public/Magical%20Park%20Vacations/Destinations/Disney%20Cruise%20Line/Private%20Islands/Castaway%20Cay%20-%20Serenity%20Bay.jpeg',
    ],
  },
  {
    name: 'Lookout Cay at Lighthouse Point',
    location: 'Eleuthera, The Bahamas',
    description: 'Disney\'s newest private destination celebrates Bahamian culture with stunning views, vibrant colors, and authentic local experiences.',
    features: [
      'Bahamian-inspired design',
      'Two stunning beaches',
      'Cultural experiences & local art',
      'Unique dining venues',
      'Water play areas',
      'Signature lighthouse landmark',
    ],
    images: [
      'https://mctzomkzqzywhophhpdr.supabase.co/storage/v1/object/public/Magical%20Park%20Vacations/Destinations/Disney%20Cruise%20Line/Private%20Islands/2025-dcl-lookout-cay.jpeg',
      'https://mctzomkzqzywhophhpdr.supabase.co/storage/v1/object/public/Magical%20Park%20Vacations/Destinations/Disney%20Cruise%20Line/Private%20Islands/DCL%20Lookout%20Cay%20Splash%20Pad.jpeg',
      'https://mctzomkzqzywhophhpdr.supabase.co/storage/v1/object/public/Magical%20Park%20Vacations/Destinations/Disney%20Cruise%20Line/Private%20Islands/Lookout%20Cay%20-%20Magic%20-%20Pier.jpeg',
    ],
  },
];

const PrivateIslands = () => {
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation();

  return (
    <section id="private-islands" className="py-24 bg-gradient-to-b from-white to-sky">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div
          ref={headerRef}
          className={`text-center max-w-3xl mx-auto mb-16 transition-all duration-700 ${
            headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <p className="text-magenta uppercase tracking-[0.2em] text-sm font-medium mb-4">
            Exclusive Destinations
          </p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-ocean mb-6">
            Disney's Private Islands
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed">
            Experience paradise at Disney's private island destinations&mdash;exclusive to Disney Cruise Line guests. Pristine beaches, crystal-clear waters, and Disney magic await.
          </p>
        </div>

        {/* Islands */}
        <div className="space-y-8">
          {islands.map((island, index) => (
            <IslandCard key={island.name} island={island} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

interface IslandCardProps {
  island: IslandInfo;
  index: number;
}

const IslandCard = ({ island, index }: IslandCardProps) => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.2 });
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const icons = [
    <Palmtree key="palm" className="w-6 h-6" />,
    <Waves key="waves" className="w-6 h-6" />,
    <Sun key="sun" className="w-6 h-6" />,
    <Compass key="compass" className="w-6 h-6" />,
  ];

  // Auto-rotate images every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % island.images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [island.images.length]);

  const goToPrevious = () => {
    setCurrentImageIndex((prev) =>
      prev === 0 ? island.images.length - 1 : prev - 1
    );
  };

  const goToNext = () => {
    setCurrentImageIndex((prev) => (prev + 1) % island.images.length);
  };

  return (
    <div
      ref={ref}
      className={`card-hover bg-white rounded-2xl overflow-hidden shadow-sm transition-all duration-700 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
      }`}
      style={{ transitionDelay: `${index * 200}ms` }}
    >
      {/* Image Carousel */}
      <div className="relative h-64 md:h-80 overflow-hidden">
        {island.images.map((image, imgIndex) => (
          <img
            key={image}
            src={image}
            alt={`${island.name} - Image ${imgIndex + 1}`}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${
              imgIndex === currentImageIndex ? 'opacity-100' : 'opacity-0'
            }`}
          />
        ))}

        {/* Navigation Arrows */}
        <button
          onClick={goToPrevious}
          className="absolute left-3 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-2 shadow-lg transition-all"
          aria-label="Previous image"
        >
          <ChevronLeft className="w-5 h-5 text-ocean" />
        </button>
        <button
          onClick={goToNext}
          className="absolute right-3 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-2 shadow-lg transition-all"
          aria-label="Next image"
        >
          <ChevronRight className="w-5 h-5 text-ocean" />
        </button>

        {/* Dots Indicator */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
          {island.images.map((_, imgIndex) => (
            <button
              key={imgIndex}
              onClick={() => setCurrentImageIndex(imgIndex)}
              className={`w-2.5 h-2.5 rounded-full transition-all ${
                imgIndex === currentImageIndex
                  ? 'bg-white w-6'
                  : 'bg-white/50 hover:bg-white/75'
              }`}
              aria-label={`Go to image ${imgIndex + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="p-6 lg:p-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Text Content */}
          <div className="flex-1">
            <div className="flex items-center gap-3 mb-4">
              <div className="text-aqua">
                <Palmtree className="w-8 h-8" />
              </div>
              <div>
                <h3 className="font-serif text-2xl lg:text-3xl text-ocean">{island.name}</h3>
                <p className="text-magenta text-sm font-medium">{island.location}</p>
              </div>
            </div>
            <p className="text-gray-600 leading-relaxed">{island.description}</p>
          </div>

          {/* Features */}
          <div className="flex-1 bg-sky rounded-xl p-6">
            <h4 className="font-serif text-lg text-ocean mb-4">Island Highlights</h4>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {island.features.map((feature, featureIndex) => (
                <li key={feature} className="flex items-start gap-3 text-sm text-gray-600">
                  <span className="text-aqua flex-shrink-0 mt-0.5">
                    {icons[featureIndex % icons.length]}
                  </span>
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivateIslands;
