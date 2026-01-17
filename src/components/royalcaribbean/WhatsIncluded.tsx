import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import { cruiseFareInclusions } from '../../data/royalcaribbean';

const WhatsIncluded = () => {
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation({ threshold: 0.2 });
  const { ref: cardsRef, isVisible: cardsVisible } = useScrollAnimation({ threshold: 0.2 });

  return (
    <section id="whats-included" className="py-24 bg-sky">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div
          ref={headerRef}
          className={`text-center max-w-3xl mx-auto mb-16 transition-all duration-700 ${
            headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <p className="text-magenta uppercase tracking-[0.2em] text-sm font-medium mb-4">
            YOUR CRUISE INCLUDES
          </p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-ocean mb-6">
            Everything You Need for an Amazing Vacation
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed">
            Your cruise fare includes accommodations, exceptional dining, world-class entertainment,
            thrilling activities, and exciting ports of call. It's all included in one incredible price.
          </p>
        </div>

        {/* Inclusion Cards */}
        <div
          ref={cardsRef}
          className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 transition-all duration-700 delay-200 ${
            cardsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          {cruiseFareInclusions.map((inclusion, index) => (
            <div
              key={inclusion.title}
              className="card-hover bg-sky rounded-2xl p-8 text-center transition-all duration-300"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="flex justify-center mb-4">
                {inclusion.icon}
              </div>
              <h3 className="font-serif text-xl text-ocean mb-3">
                {inclusion.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {inclusion.description}
              </p>
            </div>
          ))}
        </div>

        {/* Additional Note */}
        <div className="mt-12 text-center max-w-2xl mx-auto">
          <p className="text-sm text-gray-500 italic">
            Some specialty dining, premium beverages, shore excursions, spa services, and internet
            packages are available for an additional charge.
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhatsIncluded;
