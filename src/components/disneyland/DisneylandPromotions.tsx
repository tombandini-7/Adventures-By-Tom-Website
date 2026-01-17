import { Sparkles, ArrowRight } from 'lucide-react';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import { QUOTE_URL } from '../../constants';

interface Promotion {
  id: string;
  title: string;
  shortDescription: string;
  offerText: string;
  validDates: string;
  bgGradient: string;
}

// Disneyland-only promotions - uses magenta gradient for Disneyland consistency
const disneylandPromotions: Promotion[] = [
  {
    id: '1',
    title: 'SoCal Resident Ticket Offer',
    shortDescription: 'Special ticket pricing for Southern California residents. Enjoy the magic at a special rate!',
    offerText: 'SoCal Special',
    validDates: 'Limited Time',
    bgGradient: 'from-magenta-dark via-magenta to-magenta-light',
  },
  {
    id: '2',
    title: 'Kids Special Offer',
    shortDescription: 'Special pricing on kids tickets when you purchase adult tickets for select dates.',
    offerText: 'Kids Deal',
    validDates: 'Select Dates',
    bgGradient: 'from-magenta-dark via-magenta to-magenta-light',
  },
  {
    id: '3',
    title: 'Hotel + Ticket Package',
    shortDescription: 'Save when you bundle your Disneyland Resort hotel stay with theme park tickets.',
    offerText: 'Bundle & Save',
    validDates: 'Ongoing',
    bgGradient: 'from-magenta-dark via-magenta to-magenta-light',
  },
  {
    id: '4',
    title: 'Good Neighbor Hotel Deals',
    shortDescription: 'Great rates at nearby Good Neighbor hotels with easy access to the parks.',
    offerText: 'Hotel Savings',
    validDates: 'Year-Round',
    bgGradient: 'from-magenta-dark via-magenta to-magenta-light',
  },
];

const DisneylandPromotions = () => {
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation();

  return (
    <section id="disneyland-promotions" className="py-24 bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div
          ref={headerRef}
          className={`text-center max-w-3xl mx-auto mb-16 transition-all duration-700 ${
            headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <p className="text-magenta uppercase tracking-[0.2em] text-sm font-medium mb-4">
            Current Offers
          </p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-ocean mb-6">
            Disneyland Promotions
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed">
            Take advantage of these offers to make your Disneyland vacation even more magical. Let me help you find the best deal for your trip!
          </p>
        </div>

        {/* Promotions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {disneylandPromotions.map((promo, index) => (
            <PromoCard key={promo.id} promo={promo} delay={index * 100} />
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
            Get Your Free Quote
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  );
};

interface PromoCardProps {
  promo: Promotion;
  delay: number;
}

const PromoCard = ({ promo, delay }: PromoCardProps) => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.2 });

  return (
    <div
      ref={ref}
      className={`card-hover bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-100 transition-all duration-700 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {/* Gradient Header */}
      <div className={`bg-gradient-to-r ${promo.bgGradient} p-5`}>
        <div className="flex items-start gap-3">
          <Sparkles className="w-6 h-6 text-white flex-shrink-0 mt-1" />
          <div>
            <span className="inline-block px-2.5 py-0.5 bg-yellow text-ocean text-xs font-bold uppercase tracking-wider rounded-full mb-2">
              {promo.offerText}
            </span>
            <h3 className="font-serif text-lg text-white leading-tight">{promo.title}</h3>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-5">
        <p className="text-gray-600 text-sm leading-relaxed mb-4">{promo.shortDescription}</p>
        <p className="text-magenta text-sm font-medium mb-4">Valid: {promo.validDates}</p>

        <a
          href={QUOTE_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-aqua font-medium text-sm hover:text-aqua-dark transition-colors group"
        >
          Get Quote
          <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
        </a>
      </div>
    </div>
  );
};

export default DisneylandPromotions;
