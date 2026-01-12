import { CheckCircle2, Smartphone, Backpack, Heart } from 'lucide-react';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import { firstTimeGuideItems } from '../../data/wdw';

const iconMap: Record<string, React.ReactNode> = {
  'Why Use a Travel Agent?': <Heart className="w-6 h-6" />,
  'My Disney Experience App': <Smartphone className="w-6 h-6" />,
  'What to Pack': <Backpack className="w-6 h-6" />,
};

const FirstTimeGuide = () => {
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation();

  return (
    <section id="first-time-guide" className="py-24 bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div
          ref={headerRef}
          className={`text-center max-w-3xl mx-auto mb-16 transition-all duration-700 ${
            headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <p className="text-magenta uppercase tracking-[0.2em] text-sm font-medium mb-4">
            Getting Started
          </p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-ocean mb-6">
            First Time Guide
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed">
            Planning your first Walt Disney World vacation? Here&apos;s everything you need to know to make the most of your magical adventure.
          </p>
        </div>

        {/* Guide Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {firstTimeGuideItems.map((item, index) => (
            <GuideCard
              key={item.title}
              item={item}
              delay={index * 100}
              isFullWidth={index === 0}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

interface GuideCardProps {
  item: typeof firstTimeGuideItems[0];
  delay: number;
  isFullWidth?: boolean;
}

const GuideCard = ({ item, delay, isFullWidth }: GuideCardProps) => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.2 });

  return (
    <div
      ref={ref}
      className={`card-hover bg-sky rounded-2xl p-6 lg:p-8 transition-all duration-700 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
      } ${isFullWidth ? 'md:col-span-2' : ''}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="flex items-start gap-4">
        <div className="flex-shrink-0 text-aqua">
          {iconMap[item.title]}
        </div>
        <div className="flex-1">
          <h3 className="font-serif text-xl lg:text-2xl text-ocean mb-2">
            {item.title}
          </h3>
          <p className="text-gray-600 text-sm leading-relaxed mb-4">
            {item.description}
          </p>
          <ul className="space-y-2">
            {item.tips.map((tip) => (
              <li key={tip} className="flex items-start gap-2 text-sm text-gray-500">
                <CheckCircle2 className="w-4 h-4 text-aqua flex-shrink-0 mt-0.5" />
                <span>{tip}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default FirstTimeGuide;
