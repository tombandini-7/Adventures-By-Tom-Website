import { Bath, Maximize2, Users2, Sparkles, CheckCircle2 } from 'lucide-react';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';

const STATEROOM_IMAGES = {
  main: 'https://mctzomkzqzywhophhpdr.supabase.co/storage/v1/object/public/Magical%20Park%20Vacations/Destinations/Disney%20Cruise%20Line/Disney%20Treasure%20Verandah%20Stateroom.jpeg',
  splitBathroom1: 'https://mctzomkzqzywhophhpdr.supabase.co/storage/v1/object/public/Magical%20Park%20Vacations/Destinations/Disney%20Cruise%20Line/Disney%20Cruise%20Line%20Split%20Bathroom%201.jpeg',
  splitBathroom2: 'https://mctzomkzqzywhophhpdr.supabase.co/storage/v1/object/public/Magical%20Park%20Vacations/Destinations/Disney%20Cruise%20Line/DCL%20Split%20Bathroom%202.jpeg',
};

const stateroomFeatures = [
  {
    icon: <Bath className="w-8 h-8" />,
    title: 'Split Bathrooms',
    description: 'A Disney Cruise Line innovation! One bathroom with the toilet and sink, and another with the tub/shower and sink. Perfect for families getting ready at the same time.',
  },
  {
    icon: <Maximize2 className="w-8 h-8" />,
    title: 'Spacious Design',
    description: 'Disney staterooms are 25% larger on average than other cruise lines. Every inch is thoughtfully designed for family comfort.',
  },
  {
    icon: <Users2 className="w-8 h-8" />,
    title: 'Family-Friendly Layout',
    description: 'Cleverly designed to sleep up to 4-5 guests with innovative bed configurations including the famous pull-down bunk beds.',
  },
  {
    icon: <Sparkles className="w-8 h-8" />,
    title: 'Premium Amenities',
    description: 'H2O+ bath products, plush bedding, and evening turndown service with chocolate on your pillow.',
  },
];

const categoryHighlights = [
  'Inside Staterooms - Great value with Disney magic',
  'Oceanview Staterooms - Natural light with porthole views',
  'Verandah Staterooms - Private outdoor space',
  'Concierge Staterooms - Premium service & amenities',
];

const Staterooms = () => {
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation();
  const { ref: featuresRef, isVisible: featuresVisible } = useScrollAnimation();
  const { ref: categoriesRef, isVisible: categoriesVisible } = useScrollAnimation();

  return (
    <section id="staterooms" className="py-24 bg-ocean relative overflow-hidden">
      {/* Background Pattern */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23FFFFFF' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Section Header */}
        <div
          ref={headerRef}
          className={`text-center max-w-3xl mx-auto mb-16 transition-all duration-700 ${
            headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <p className="text-yellow uppercase tracking-[0.2em] text-sm font-medium mb-4">
            Your Home at Sea
          </p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-white mb-6">
            Spacious Staterooms
          </h2>
          <p className="text-sky text-lg leading-relaxed">
            Disney staterooms are designed with families in mind. From the innovative split bathroom design to the extra square footage, every detail is crafted for your comfort.
          </p>
        </div>

        {/* Stateroom Images */}
        <div
          ref={featuresRef}
          className={`mb-16 transition-all duration-700 delay-100 ${
            featuresVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-end">
            {/* Main Stateroom Image */}
            <div className="rounded-2xl overflow-hidden shadow-lg">
              <img
                src={STATEROOM_IMAGES.main}
                alt="Disney Cruise Line Verandah Stateroom"
                className="w-full h-64 lg:h-80 object-cover"
              />
              <div className="bg-white/10 backdrop-blur-sm p-4">
                <p className="text-white font-medium text-center">Verandah Stateroom</p>
              </div>
            </div>

            {/* Split Bathroom Images */}
            <div className="grid grid-cols-2 gap-4">
              <div className="rounded-2xl overflow-hidden shadow-lg">
                <img
                  src={STATEROOM_IMAGES.splitBathroom2}
                  alt="Disney Cruise Line Split Bathroom - Sink & Toilet"
                  className="w-full h-48 lg:h-80 object-cover"
                />
                <div className="bg-white/10 backdrop-blur-sm p-4">
                  <p className="text-white font-medium text-center">Sink & Toilet</p>
                </div>
              </div>
              <div className="rounded-2xl overflow-hidden shadow-lg">
                <img
                  src={STATEROOM_IMAGES.splitBathroom1}
                  alt="Disney Cruise Line Split Bathroom - Tub & Shower"
                  className="w-full h-48 lg:h-80 object-cover"
                />
                <div className="bg-white/10 backdrop-blur-sm p-4">
                  <p className="text-white font-medium text-center">Tub & Shower</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <div
          className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16 transition-all duration-700 delay-300 ${
            featuresVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          {stateroomFeatures.map((feature, index) => (
            <div
              key={feature.title}
              className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex justify-center text-yellow mb-4">{feature.icon}</div>
              <h3 className="font-serif text-xl text-white mb-3">{feature.title}</h3>
              <p className="text-sky/90 text-sm leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Stateroom Categories */}
        <div
          ref={categoriesRef}
          className={`bg-white/10 backdrop-blur-sm rounded-2xl p-8 max-w-2xl mx-auto transition-all duration-700 delay-300 ${
            categoriesVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <h3 className="font-serif text-2xl text-white text-center mb-6">
            Stateroom Categories
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {categoryHighlights.map((category) => (
              <div key={category} className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-yellow flex-shrink-0 mt-0.5" />
                <span className="text-white text-sm">{category}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Staterooms;
