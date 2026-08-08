import { useState, useEffect, useCallback } from 'react';
import { Castle, Ship, Palmtree, ChevronLeft, ChevronRight } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { getDestinationImage, QUOTE_URL } from '../constants';
import { Modal } from './common';

type PromotionDestination =
  | 'Walt Disney World'
  | 'Disney Cruise Line'
  | 'Royal Caribbean'
  | 'Sandals';

interface Promotion {
  id: string;
  destination: PromotionDestination;
  title: string;
  shortDescription: string;
  offerText: string;
  /** Human-readable dates shown on the card, e.g. "Book by Aug 30, 2026". */
  validDates: string;
  /**
   * Last day the offer can be booked, as YYYY-MM-DD. Once this date passes the
   * promotion stops rendering (see `activePromotions`) so expired offers never
   * sit on the site. `scripts/check-promotions.mjs` reports on these at build
   * time. Use null for evergreen offers with no booking deadline.
   */
  bookBy: string | null;
  fullDescription: string;
  bgGradient: string;
}

/** Today at local midnight, so an offer stays live through its final booking day. */
const startOfToday = (): Date => {
  const now = new Date();
  return new Date(now.getFullYear(), now.getMonth(), now.getDate());
};

const isPromotionActive = (promotion: Promotion, today = startOfToday()): boolean => {
  if (!promotion.bookBy) return true;
  const [year, month, day] = promotion.bookBy.split('-').map(Number);
  return new Date(year, month - 1, day) >= today;
};

const promotions: Promotion[] = [
  {
    id: 'dcl-fall-holiday-2026',
    destination: 'Disney Cruise Line',
    title: 'Save Up to $500 Per Guest on Fall & Holiday Sailings',
    shortDescription: 'Sail through the holidays for less! Save up to $500 per guest on select Disney Treasure, Disney Fantasy and Disney Wonder sailings this October through December.',
    offerText: 'Up to $500 Off',
    validDates: 'Book by Aug 30, 2026',
    bookBy: '2026-08-30',
    bgGradient: 'from-magenta-dark via-magenta to-magenta-light',
    fullDescription: `
<h2>Offer Details</h2>
<p>Close out the year at sea. Guests can save <strong>up to $500 USD per guest</strong> on select Disney Cruise Line sailings departing <strong>October 1 through December 31, 2026</strong> - including Halloween on the High Seas and Very Merrytime voyages.</p>

<h2>Savings by Stateroom</h2>
<h3>7-Night Sailings</h3>
<ul>
  <li>$500 per guest - Verandah staterooms</li>
  <li>$400 per guest - Oceanview staterooms</li>
  <li>$300 per guest - Inside staterooms</li>
</ul>

<h3>3 to 6-Night Sailings</h3>
<ul>
  <li>$250 per guest - Verandah staterooms</li>
  <li>$200 per guest - Oceanview staterooms</li>
  <li>$150 per guest - Inside staterooms</li>
</ul>

<h2>Important Details</h2>
<ul>
  <li>Must book by August 30, 2026</li>
  <li>Valid on select Disney Treasure, Disney Fantasy and Disney Wonder sailings</li>
  <li>Stateroom categories 04A through 11C only - Concierge and Suites are excluded</li>
  <li>Cannot be combined with other offers; a limited number of staterooms are allocated to this offer</li>
  <li>Taxes, fees and port expenses are not included</li>
  <li>Availability is subject to change without notice - reach out and I'll confirm what's open for your dates</li>
</ul>`,
  },
  {
    id: '3',
    destination: 'Walt Disney World',
    title: 'FREE Kids Dining Plan',
    shortDescription: 'Get a FREE dining plan for kids (ages 3 to 9) when you purchase a package with dining for adults.',
    offerText: 'Kids Eat Free',
    validDates: 'For 2026 arrivals',
    bookBy: '2026-12-31',
    bgGradient: 'from-ocean via-ocean-light to-aqua-dark',
    fullDescription: `
<h2>Offer Overview</h2>
<p>Get a <strong>FREE dining plan for kids (ages 3 to 9)</strong> when you purchase a Walt Disney Travel Company package that includes:</p>
<ul>
  <li>A room at a Disney Resorts Collection hotel</li>
  <li>A dining plan for each Guest ages 10 and up</li>
</ul>

<p>Offer valid for arrivals in 2026!</p>

<p>A dining plan includes delicious meals and snacks, so you can focus on enjoying the magic and worry less about meal budgeting during your visit!</p>

<h2>How To Book</h2>
<ul>
  <li>To book online, your package must also include theme park tickets.</li>
  <li>Book by phone if you already have theme park admission.</li>
</ul>

<h2>Important Details</h2>
<ul>
  <li>The number of packages available for this offer is limited.</li>
  <li>Everyone in the same room must be on the same package.</li>
  <li>Child must stay in room with adult.</li>
  <li>Advance reservations required.</li>
  <li>Some Table-Service restaurants may have limited or no availability at time of package purchase.</li>
</ul>`,
  },
  {
    id: '5',
    destination: 'Walt Disney World',
    title: 'Save Up to 30% on Summer Rooms',
    shortDescription: 'Save up to 30% on rooms at select Disney Resort hotels for stays this summer.',
    offerText: 'Up to 30% Off',
    validDates: 'Stays through Oct 4, 2026',
    bookBy: '2026-10-04',
    bgGradient: 'from-ocean via-ocean-light to-aqua-dark',
    fullDescription: `
<h2>Offer Details</h2>

<h3>Valid Travel Dates</h3>
<ul>
  <li>For 5-night or longer stays from May 1 to October 4, 2026</li>
  <li>Other savings available for shorter stays</li>
</ul>

<h3>Length of Stay Requirements</h3>
<ul>
  <li>Minimum – 1 night</li>
  <li>Maximum – 14 nights</li>
</ul>

<h2>Important Details</h2>
<ul>
  <li>The number of rooms allocated for this offer is limited.</li>
  <li>Length-of-stay requirements may apply.</li>
  <li>Additional per-adult charges may apply if more than 2 adults per room at Disney Value, Moderate and Deluxe Resorts.</li>
  <li>Cannot be combined with any other discount or promotion, except for the 2026 Kids Dining Plan Offer.</li>
  <li>Must be consecutive-night stays.</li>
  <li>Advance reservations required.</li>
  <li>Valid admission is required to enjoy the theme parks and is not included in this offer.</li>
</ul>`,
  },
  {
    id: 'rccl-kids-teens-sail-free-2026',
    destination: 'Royal Caribbean',
    title: 'Kids & Teens Sail Free',
    shortDescription: 'For the first time ever, teens sail free too! Third and fourth guests sail free on select Royal Caribbean sailings - now including Alaska and Europe.',
    offerText: 'Kids & Teens Free',
    validDates: 'Book by Sep 14, 2026',
    bookBy: '2026-09-14',
    bgGradient: 'from-ocean via-ocean-light to-aqua-dark',
    fullDescription: `
<h2>Offer Details</h2>
<p>Royal Caribbean has expanded its Kids Sail Free offer to include <strong>teens for the first time</strong>. Third and fourth guests sharing a stateroom with two full-fare-paying adults receive <strong>free cruise fare</strong> on select sailings - and Alaska and Europe itineraries are now included.</p>

<h2>Booking &amp; Sailing Windows</h2>
<ul>
  <li>Book between July 31 and <strong>September 14, 2026</strong></li>
  <li>Valid on select sailings departing <strong>August 26, 2026 through August 20, 2027</strong></li>
</ul>

<h2>Important Details</h2>
<ul>
  <li>Requires two full-fare-paying adults in the stateroom - bookings with a single paying adult do not qualify</li>
  <li>Covers cruise fare only; taxes, fees, port expenses and gratuities are not included</li>
  <li>Blackout dates apply, including Thanksgiving, Christmas and spring break sailings</li>
  <li>Available to residents of the U.S., Canada, Puerto Rico and select Caribbean countries</li>
  <li>Offer applies to select sailings and is capacity controlled - let's check your dates before they fill</li>
</ul>`,
  },
  {
    id: 'sandals-summer-loving-2026',
    destination: 'Sandals',
    title: 'Summer Loving: Up to $1,500 Credit + Free Night',
    shortDescription: 'Adults-only luxury in the Caribbean - up to $1,500 in instant credits plus a free night, spa credit and air credit on qualifying stays.',
    offerText: 'Up to $1,500 Credit',
    validDates: 'Book by Aug 24, 2026',
    bookBy: '2026-08-24',
    bgGradient: 'from-magenta-dark via-magenta to-magenta-light',
    fullDescription: `
<h2>Offer Details</h2>
<p>Sandals' Summer Loving offer stacks several perks on qualifying all-inclusive stays:</p>
<ul>
  <li><strong>Up to $1,500 instant credit</strong> toward your stay</li>
  <li><strong>One free night</strong> on qualifying stays</li>
  <li><strong>$150 spa credit</strong></li>
  <li><strong>Up to $750 air credit</strong></li>
</ul>

<h2>Booking &amp; Travel Windows</h2>
<ul>
  <li>Book by <strong>August 24, 2026</strong></li>
  <li>Valid for travel <strong>August 4, 2026 through December 25, 2027</strong></li>
</ul>

<h2>Important Details</h2>
<ul>
  <li>Instant credits are in USD and apply to the room value only (land portion)</li>
  <li>Credit amounts vary by resort, room category and length of stay</li>
  <li>Free-night and air-credit perks require a qualifying minimum stay</li>
  <li>Combinable with other Sandals consumer savings promotions</li>
  <li>Terms vary by resort - reach out and I'll price out the combination that saves you the most</li>
</ul>`,
  },
];

/**
 * Only promotions whose booking deadline has not passed. Everything downstream
 * (carousel, dots, deep links) uses this, so an expired offer disappears on its
 * own without anyone having to remember to pull it.
 */
const activePromotions = promotions.filter((promotion) => isPromotionActive(promotion));

/** Icon per brand. Colour is applied directly to the icon - no background shapes. */
const destinationIcon = (destination: PromotionDestination, className: string) => {
  switch (destination) {
    case 'Disney Cruise Line':
    case 'Royal Caribbean':
      return <Ship className={className} />;
    case 'Sandals':
      return <Palmtree className={className} />;
    default:
      return <Castle className={className} />;
  }
};

// Modal Component using reusable Modal
const PromotionModal = ({
  promotion,
  isOpen,
  onClose,
}: {
  promotion: Promotion | null;
  isOpen: boolean;
  onClose: () => void;
}) => {
  if (!promotion) return null;

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      icon={destinationIcon(promotion.destination, 'w-7 h-7')}
      label={promotion.destination}
      badge={promotion.offerText}
      title={promotion.title}
      subtitle={`Valid: ${promotion.validDates}`}
    >
      <div
        className="promotion-content"
        dangerouslySetInnerHTML={{ __html: promotion.fullDescription }}
      />
    </Modal>
  );
};

interface PromotionsProps {
  openPromotionId?: string | null;
  onModalClose?: () => void;
}

const Promotions = ({ openPromotionId, onModalClose }: PromotionsProps) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [selectedPromotion, setSelectedPromotion] = useState<Promotion | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.2 });

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % activePromotions.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + activePromotions.length) % activePromotions.length);
  }, []);

  const goToSlide = useCallback((index: number) => {
    setCurrentSlide(index);
  }, []);

  const openModal = (promotion: Promotion) => {
    setSelectedPromotion(promotion);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedPromotion(null);
    onModalClose?.();
  };

  // Open modal when openPromotionId is set externally
  useEffect(() => {
    if (openPromotionId) {
      const promo = activePromotions.find((p) => p.id === openPromotionId);
      if (promo) {
        openModal(promo);
      }
    }
  }, [openPromotionId]);

  // Auto-rotation
  useEffect(() => {
    if (isPaused || isModalOpen) return;

    const interval = setInterval(() => {
      nextSlide();
    }, 6000);

    return () => clearInterval(interval);
  }, [isPaused, isModalOpen, nextSlide]);

  // Every offer has expired - hide the section rather than render an empty carousel.
  if (activePromotions.length === 0) return null;

  return (
    <>
      <section id="promotions" className="py-12 bg-white overflow-hidden">
        <div
          ref={ref}
          className={`container mx-auto px-4 lg:px-8 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          {/* Section Label */}
          <p className="text-magenta uppercase tracking-[0.2em] text-sm font-medium mb-6 text-center">
            Current Offers
          </p>

          {/* Carousel Container */}
          <div
            className="relative"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            {/* Slides */}
            <div className="overflow-hidden rounded-2xl">
              <div
                className="carousel-track"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
                {activePromotions.map((promo) => (
                  <div
                    key={promo.id}
                    className="carousel-slide min-w-full flex flex-col md:flex-row"
                  >
                    {/* Destination Image */}
                    <div className="relative w-full md:w-1/3 lg:w-2/5 h-48 md:h-auto flex-shrink-0">
                      <img
                        src={getDestinationImage(promo.destination)}
                        alt={promo.destination}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent to-ocean/30 md:block hidden" />
                      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-ocean/50 md:hidden" />
                    </div>

                    {/* Content Area */}
                    <div className={`flex-1 bg-gradient-to-r ${promo.bgGradient} p-6 md:p-8 lg:p-10 flex flex-col md:flex-row items-center justify-between gap-4 md:gap-6`}>
                      {/* Content */}
                      <div className="flex-1 text-center md:text-left">
                        <p className="text-white/80 text-xs uppercase tracking-wider mb-1">
                          {promo.destination}
                        </p>
                        <div className="inline-block px-3 py-1 bg-yellow text-ocean text-xs font-bold uppercase tracking-wider rounded-full mb-3">
                          {promo.offerText}
                        </div>
                        <h3 className="font-serif text-xl md:text-2xl lg:text-3xl font-semibold text-white mb-2">
                          {promo.title}
                        </h3>
                        <p className="text-white/90 text-sm md:text-base mb-2 max-w-xl">
                          {promo.shortDescription}
                        </p>
                        <p className="text-yellow text-sm font-medium">
                          Valid: {promo.validDates}
                        </p>
                      </div>

                      {/* CTAs */}
                      <div className="flex flex-col gap-3 flex-shrink-0">
                        <a
                          href={QUOTE_URL}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-6 py-3 bg-magenta text-white font-semibold text-sm uppercase tracking-wide rounded-lg hover:bg-magenta-light transition-all duration-300 shadow-lg text-center"
                        >
                          Get Quote
                        </a>
                        <button
                          onClick={() => openModal(promo)}
                          className="px-6 py-3 bg-white/20 text-white font-semibold text-sm uppercase tracking-wide rounded-lg hover:bg-white/30 transition-all duration-300 text-center"
                        >
                          Learn More
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Navigation Arrows & Dots */}
          <div className="flex items-center justify-center gap-4 mt-6">
            <button
              onClick={prevSlide}
              className="w-10 h-10 rounded-full bg-ocean/10 hover:bg-ocean/20 flex items-center justify-center text-ocean transition-all duration-300"
              aria-label="Previous promotion"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            <div className="flex gap-2">
              {activePromotions.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`carousel-dot ${currentSlide === index ? 'active' : ''}`}
                  aria-label={`Go to promotion ${index + 1}`}
                />
              ))}
            </div>

            <button
              onClick={nextSlide}
              className="w-10 h-10 rounded-full bg-ocean/10 hover:bg-ocean/20 flex items-center justify-center text-ocean transition-all duration-300"
              aria-label="Next promotion"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </section>

      {/* Modal */}
      <PromotionModal
        promotion={selectedPromotion}
        isOpen={isModalOpen}
        onClose={closeModal}
      />
    </>
  );
};

export default Promotions;
