import { UtensilsCrossed, Sparkles, Users, ChefHat } from 'lucide-react';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';

const features = [
  {
    icon: <UtensilsCrossed className="w-6 h-6" />,
    title: 'Three Unique Restaurants',
    description: 'Experience a different themed restaurant each night of your cruise, from elegant to adventurous.',
  },
  {
    icon: <Users className="w-6 h-6" />,
    title: 'Your Server Follows You',
    description: 'Unlike traditional cruises, your dedicated serving team rotates with you to each restaurant.',
  },
  {
    icon: <ChefHat className="w-6 h-6" />,
    title: 'Premium Quality Cuisine',
    description: 'Enjoy chef-prepared meals with menus that change nightly, all included in your cruise fare.',
  },
  {
    icon: <Sparkles className="w-6 h-6" />,
    title: 'Immersive Experiences',
    description: 'Experience Simba\’s journey come to life at the Disney Destiny\’s Pride Lands: Feast of The Lion King, an immersive dining experience blending Broadway-style performances with vibrant, African-inspired cuisine.',
  },
];

const RotationalDining = () => {
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation();
  const { ref: contentRef, isVisible: contentVisible } = useScrollAnimation();

  return (
    <section id="rotational-dining" className="py-24 bg-gradient-to-b from-sky to-white">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content Side */}
          <div
            ref={headerRef}
            className={`transition-all duration-700 ${
              headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <p className="text-magenta uppercase tracking-[0.2em] text-sm font-medium mb-4">
              A Disney Cruise Line Exclusive
            </p>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-ocean mb-6">
              Rotational Dining
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-8">
              Disney Cruise Line revolutionized cruising with Rotational Dining&mdash;an experience you won't find on any other cruise line. Each evening, you'll dine in a different themed restaurant while your serving team travels with you, already knowing your preferences and dietary needs.
            </p>
            <p className="text-gray-600 text-lg leading-relaxed">
              Traditional cruise ships have you choose between the same restaurant every night or starting fresh with new servers. Disney's innovative approach means the best of both worlds: variety in venues with consistency in service.
            </p>
          </div>

          {/* Features Grid */}
          <div
            ref={contentRef}
            className={`grid grid-cols-1 sm:grid-cols-2 gap-6 transition-all duration-700 delay-200 ${
              contentVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            {features.map((feature, index) => (
              <div
                key={feature.title}
                className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-lg transition-shadow"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="text-aqua mb-4">{feature.icon}</div>
                <h3 className="font-serif text-lg text-ocean mb-2">{feature.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default RotationalDining;
