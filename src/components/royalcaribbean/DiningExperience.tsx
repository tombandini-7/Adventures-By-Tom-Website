import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import { diningInfo } from '../../data/royalcaribbean';
import { UtensilsCrossed, Clock, Pizza, Coffee } from 'lucide-react';

const DiningExperience = () => {
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation({ threshold: 0.2 });
  const { ref: mainDiningRef, isVisible: mainDiningVisible } = useScrollAnimation({ threshold: 0.2 });
  const { ref: casualRef, isVisible: casualVisible } = useScrollAnimation({ threshold: 0.2 });
  const { ref: specialtyRef, isVisible: specialtyVisible } = useScrollAnimation({ threshold: 0.2 });

  return (
    <section id="dining" className="py-24 bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div
          ref={headerRef}
          className={`text-center max-w-3xl mx-auto mb-16 transition-all duration-700 ${
            headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <p className="text-magenta uppercase tracking-[0.2em] text-sm font-medium mb-4">
            DINING EXPERIENCES
          </p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-ocean mb-6">
            Exceptional Cuisine at Sea
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed">
            From elegant multi-course dinners to casual poolside bites, Royal Caribbean offers
            diverse dining options to satisfy every taste and occasion.
          </p>
        </div>

        {/* Main Dining Room */}
        <div
          ref={mainDiningRef}
          className={`mb-16 transition-all duration-700 ${
            mainDiningVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            {/* Hero Image */}
            <div className="relative h-64 md:h-80 overflow-hidden">
              <img
                src={diningInfo.mainDining.image}
                alt="Main Dining Room"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ocean-dark/90 via-ocean/50 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                <div className="flex items-center gap-3 mb-3">
                  <UtensilsCrossed className="w-8 h-8 text-yellow" />
                  <h3 className="font-serif text-2xl md:text-3xl text-white">
                    {diningInfo.mainDining.title}
                  </h3>
                </div>
                <p className="text-white/90 leading-relaxed max-w-3xl">
                  {diningInfo.mainDining.description}
                </p>
              </div>
            </div>

            <div className="p-6 md:p-8">
              <div className="grid md:grid-cols-2 gap-6">
                {diningInfo.mainDining.options.map((option) => (
                  <div
                    key={option.name}
                    className="bg-sky rounded-xl p-6 card-hover"
                  >
                    <div className="flex items-center gap-2 mb-3">
                      <Clock className="w-5 h-5 text-aqua" />
                      <h4 className="font-semibold text-ocean text-lg">
                        {option.name}
                      </h4>
                    </div>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {option.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Two-Column Layout for Casual & Specialty Dining */}
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Casual Dining */}
          <div
            ref={casualRef}
            className={`transition-all duration-700 ${
              casualVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8 h-full">
              <div className="flex items-center gap-3 mb-6">
                <Pizza className="w-7 h-7 text-aqua" />
                <h3 className="font-serif text-2xl text-ocean">
                  {diningInfo.casualDining.title}
                </h3>
              </div>
              <ul className="space-y-3">
                {diningInfo.casualDining.venues.map((venue, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-3 text-gray-700"
                  >
                    <span className="text-aqua mt-1 text-lg">•</span>
                    <span className="leading-relaxed">{venue}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Specialty Dining */}
          <div
            ref={specialtyRef}
            className={`transition-all duration-700 delay-200 ${
              specialtyVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8 h-full">
              <div className="flex items-center gap-3 mb-4">
                <Coffee className="w-7 h-7 text-aqua" />
                <h3 className="font-serif text-2xl text-ocean">
                  {diningInfo.specialtyDining.title}
                </h3>
              </div>
              <p className="text-gray-600 mb-6 leading-relaxed">
                {diningInfo.specialtyDining.description}
              </p>
              <ul className="space-y-3">
                {diningInfo.specialtyDining.restaurants.map((restaurant, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-3 text-gray-700"
                  >
                    <span className="text-aqua mt-1 text-lg">•</span>
                    <span className="leading-relaxed">{restaurant}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DiningExperience;
