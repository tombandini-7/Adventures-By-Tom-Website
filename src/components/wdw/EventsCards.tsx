import { Calendar, Sparkles } from 'lucide-react';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import { wdwEvents } from '../../data/wdw';
import { QUOTE_URL } from '../../constants';

const EventsCards = () => {
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation();

  return (
    <section id="events" className="py-24 bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div
          ref={headerRef}
          className={`text-center max-w-3xl mx-auto mb-16 transition-all duration-700 ${
            headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <p className="text-magenta uppercase tracking-[0.2em] text-sm font-medium mb-4">
            Special Events
          </p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-ocean mb-6">
            Festivals & Celebrations
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed">
            Throughout the year, Walt Disney World hosts incredible seasonal events and festivals. Plan your visit around these magical celebrations!
          </p>
        </div>

        {/* Events Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {wdwEvents.map((event, index) => (
            <EventCard key={event.id} event={event} delay={index * 100} />
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <a
            href={QUOTE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-lg bg-magenta text-white font-semibold uppercase tracking-wide text-sm hover:bg-magenta-light transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1"
          >
            Plan Around an Event
          </a>
        </div>
      </div>
    </section>
  );
};

interface EventCardProps {
  event: typeof wdwEvents[0];
  delay: number;
}

const EventCard = ({ event, delay }: EventCardProps) => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.2 });

  const parkColors: Record<string, string> = {
    'Magic Kingdom': 'bg-magenta',
    'EPCOT': 'bg-ocean',
    'Hollywood Studios': 'bg-aqua-dark',
    'Animal Kingdom': 'bg-green-600',
  };

  return (
    <div
      ref={ref}
      className={`group card-hover bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-100 transition-all duration-700 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {/* Image */}
      <div className="relative h-48 lg:h-52 overflow-hidden">
        <img
          src={event.image}
          alt={event.name}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ocean/70 to-transparent" />

        {/* Date Badge */}
        <div className="absolute top-4 left-4 flex items-center gap-1.5 px-3 py-1.5 bg-white/95 backdrop-blur-sm text-ocean text-xs font-bold rounded-full">
          <Calendar className="w-3.5 h-3.5" />
          {event.dates}
        </div>

        {/* Park Badge */}
        <div className={`absolute bottom-4 left-4 px-3 py-1 ${parkColors[event.park]} text-white text-xs font-bold uppercase tracking-wide rounded-full`}>
          {event.park}
        </div>
      </div>

      {/* Content */}
      <div className="p-5">
        <h3 className="font-serif text-xl lg:text-2xl text-ocean mb-2">
          {event.name}
        </h3>
        <p className="text-gray-600 text-sm leading-relaxed mb-4">
          {event.description}
        </p>

        {/* Highlights */}
        <div className="flex flex-wrap gap-2">
          {event.highlights.slice(0, 3).map((highlight) => (
            <span
              key={highlight}
              className="inline-flex items-center gap-1 px-2.5 py-1 bg-sky text-ocean text-xs font-medium rounded-full"
            >
              <Sparkles className="w-3 h-3 text-magenta" />
              {highlight}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EventsCards;
