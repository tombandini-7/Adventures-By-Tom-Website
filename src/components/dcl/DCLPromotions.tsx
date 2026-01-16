import { Ship, ArrowRight } from 'lucide-react';
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

// DCL promotions - using magenta gradient for cruise differentiation
const dclPromotions: Promotion[] = [
  {
    id: '1',
    title: "Special Military Offer: Celebrate America's 250th Anniversary",
    shortDescription: 'In honor of the 250th anniversary of the United States, Disney Cruise Line is proud to recognize US military personnel with an exclusive $250 onboard credit per reservation on select Disney Wish and Disney Dream sailings throughout 2026.',
    offerText: '$250 Credit',
    validDates: 'Throughout 2026',
    bgGradient: 'from-magenta-dark via-magenta to-magenta-light',
  },
  {
    id: '2',
    title: 'Only 50% Deposit Due at Time of Booking',
    shortDescription: 'Book an eligible Disney cruise by January 18, 2026, and pay only half of the deposit on the day you make your reservation.',
    offerText: '50% Deposit',
    validDates: 'Book by Jan 18, 2026',
    bgGradient: 'from-magenta-dark via-magenta to-magenta-light',
  },
  {
    id: '3',
    title: 'Save Up to 35% Off Voyage Fare on Select Sailings',
    shortDescription: 'Embark on an unforgettable Disney cruise on select dates and take advantage of special savings on prevailing rates as quoted on disneycruise.com!',
    offerText: 'Up to 35% Off',
    validDates: 'Select Sailings',
    bgGradient: 'from-magenta-dark via-magenta to-magenta-light',
  },
  {
    id: '4',
    title: 'Florida Residents Save Up to 35%',
    shortDescription: 'Take advantage of special savings of up to 35% when you embark on an unforgettable Disney cruise to the Caribbean or The Bahamas on select dates—available to residents of Florida.',
    offerText: 'FL Residents',
    validDates: 'Select Sailings',
    bgGradient: 'from-magenta-dark via-magenta to-magenta-light',
  },
  {
    id: '5',
    title: 'Special US Military Rates',
    shortDescription: 'Disney Cruise Line offers special military rates on select Disney cruises, valid for new bookings only. Special military rates are limited to a maximum of one stateroom per military member, per sailing.',
    offerText: 'Military Rates',
    validDates: 'Select Sailings',
    bgGradient: 'from-magenta-dark via-magenta to-magenta-light',
  },
  {
    id: '6',
    title: 'Canadian Residents: Save Up to 35%',
    shortDescription: 'Calling all Canadian residents! Embark on an unforgettable Disney cruise—and take advantage of special savings of up to 35% on prevailing rates as quoted on Disneycruise.com for select stateroom categories.',
    offerText: 'CA Residents',
    validDates: 'Select Sailings',
    bgGradient: 'from-magenta-dark via-magenta to-magenta-light',
  },
];

const DCLPromotions = () => {
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation();

  return (
    <section id="dcl-promotions" className="py-24 bg-sky">
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
            Disney Cruise Line Promotions
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed">
            Take advantage of these limited-time offers to set sail on your dream Disney cruise. Contact me to find the best deal for your voyage!
          </p>
        </div>

        {/* Promotions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {dclPromotions.map((promo, index) => (
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
          <Ship className="w-6 h-6 text-white flex-shrink-0 mt-1" />
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

export default DCLPromotions;
