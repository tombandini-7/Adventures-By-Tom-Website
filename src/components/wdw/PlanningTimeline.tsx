import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import { timelineSteps } from '../../data/wdw';

const PlanningTimeline = () => {
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation();
  const { ref: timelineRef, isVisible: timelineVisible } = useScrollAnimation({ threshold: 0.1 });

  return (
    <section id="planning-timeline" className="py-24 bg-sky overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div
          ref={headerRef}
          className={`text-center max-w-3xl mx-auto mb-16 transition-all duration-700 ${
            headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <p className="text-magenta uppercase tracking-[0.2em] text-sm font-medium mb-4">
            Before You Go
          </p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-ocean mb-6">
            Planning Timeline
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed">
            Mark these important dates on your calendar to ensure you don&apos;t miss any booking windows for your Walt Disney World vacation.
          </p>
        </div>

        {/* Desktop Timeline (Horizontal) - with padding for cards */}
        <div ref={timelineRef} className="hidden lg:block relative pt-52 pb-52">
          {/* Connecting Line */}
          <div className="absolute top-1/2 left-8 right-8 h-1 bg-gradient-to-r from-aqua via-magenta to-ocean transform -translate-y-1/2 rounded-full" />

          {/* Timeline Steps */}
          <div className="relative flex justify-between items-center px-4">
            {timelineSteps.map((step, index) => (
              <TimelineNode
                key={step.days}
                step={step}
                index={index}
                isVisible={timelineVisible}
                position={index % 2 === 0 ? 'top' : 'bottom'}
              />
            ))}
          </div>
        </div>

        {/* Mobile Timeline (Vertical) */}
        <div className="lg:hidden">
          <div className="relative pl-8 border-l-4 border-gradient-to-b from-aqua to-ocean ml-4">
            {timelineSteps.map((step, index) => (
              <MobileTimelineNode key={step.days} step={step} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

interface TimelineNodeProps {
  step: typeof timelineSteps[0];
  index: number;
  isVisible: boolean;
  position: 'top' | 'bottom';
}

const TimelineNode = ({ step, index, isVisible, position }: TimelineNodeProps) => {
  return (
    <div
      className={`relative flex flex-col items-center transition-all duration-700 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
      style={{ transitionDelay: `${index * 150}ms` }}
    >
      {/* Content Card - positioned above or below */}
      <div
        className={`absolute w-52 text-center ${
          position === 'top' ? 'bottom-full mb-8' : 'top-full mt-8'
        }`}
      >
        <div className="bg-white rounded-xl shadow-lg p-5 border border-gray-100 card-hover">
          <p className="text-magenta font-bold text-lg mb-1">{step.days}</p>
          <h4 className="font-serif text-ocean text-lg mb-2">{step.title}</h4>
          <p className="text-gray-500 text-xs leading-relaxed">{step.description}</p>
        </div>
        {/* Arrow pointer */}
        <div
          className={`absolute left-1/2 transform -translate-x-1/2 w-0 h-0 ${
            position === 'top'
              ? 'bottom-0 translate-y-full border-l-8 border-r-8 border-t-8 border-transparent border-t-white'
              : 'top-0 -translate-y-full border-l-8 border-r-8 border-b-8 border-transparent border-b-white'
          }`}
          style={{ filter: 'drop-shadow(0 2px 2px rgba(0,0,0,0.1))' }}
        />
      </div>

      {/* Icon Circle (on the line) */}
      <div className="relative z-10 w-16 h-16 rounded-full bg-gradient-to-br from-aqua to-ocean flex items-center justify-center text-white shadow-lg border-4 border-white">
        {step.icon}
      </div>
    </div>
  );
};

interface MobileTimelineNodeProps {
  step: typeof timelineSteps[0];
  index: number;
}

const MobileTimelineNode = ({ step, index }: MobileTimelineNodeProps) => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.3 });

  const gradientColors = [
    'from-aqua to-aqua-dark',
    'from-magenta-light to-magenta',
    'from-yellow-dark to-yellow',
    'from-ocean-light to-ocean',
    'from-aqua-dark to-ocean',
  ];

  return (
    <div
      ref={ref}
      className={`relative mb-8 last:mb-0 transition-all duration-500 ${
        isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'
      }`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      {/* Circle on line */}
      <div className={`absolute -left-8 top-0 w-4 h-4 rounded-full bg-gradient-to-br ${gradientColors[index % gradientColors.length]} border-2 border-white transform -translate-x-1/2 shadow-md`} />

      {/* Content */}
      <div className="bg-white rounded-xl shadow-md p-5 border border-gray-100 ml-4">
        <div className="flex items-start gap-4">
          <div className={`flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-br ${gradientColors[index % gradientColors.length]} flex items-center justify-center text-white`}>
            {step.icon}
          </div>
          <div>
            <p className="text-magenta font-bold text-sm mb-1">{step.days}</p>
            <h4 className="font-serif text-ocean text-lg mb-1">{step.title}</h4>
            <p className="text-gray-500 text-sm leading-relaxed">{step.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlanningTimeline;
