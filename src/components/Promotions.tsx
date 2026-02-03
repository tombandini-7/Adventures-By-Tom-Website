import { useState, useEffect, useCallback } from 'react';
import { Castle, Ship, ChevronLeft, ChevronRight } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { getDestinationImage, QUOTE_URL } from '../constants';
import { Modal } from './common';

interface Promotion {
  id: string;
  destination: 'Walt Disney World' | 'Disney Cruise Line';
  title: string;
  shortDescription: string;
  offerText: string;
  validDates: string;
  fullDescription: string;
  bgGradient: string;
}

const promotions: Promotion[] = [
  {
    id: '1',
    destination: 'Walt Disney World',
    title: '2 Free Nights & Park Days',
    shortDescription: 'Get 2 free nights and 2 extra park days when you book a 6+ night vacation package.',
    offerText: '2 Free Nights',
    validDates: 'May 26 – Sep 15, 2026',
    bgGradient: 'from-ocean via-ocean-light to-aqua-dark',
    fullDescription: `
<h2>Offer Details</h2>

<h3>Valid Travel Dates</h3>
<ul>
  <li>For arrivals most nights from May 26 to September 15, 2026</li>
</ul>

<h3>Length-of-Stay Requirements</h3>
<ul>
  <li>Minimum – 6 nights (includes the 2 free nights)</li>
  <li>Maximum – 10 nights (includes the 2 free nights)</li>
</ul>

<h3>Package Includes</h3>
<ul>
  <li>Resort hotel accommodations</li>
  <li>Theme park tickets</li>
</ul>

<h2>Important Details</h2>
<ul>
  <li>The number of packages allocated for this offer is limited.</li>
  <li>Everyone in the same room must be on the same package.</li>
  <li>Theme park tickets are valid for admission beginning on date of check-in and must be used within a limited number of days, depending on length of stay and ticket.</li>
  <li>Cannot be combined with any other discount or promotion, except for the 2026 Kids Dining Plan Offer.</li>
  <li>Offer includes 2 extra nights of Resort hotel accommodations and 2 more days added to your theme park tickets.</li>
  <li>Advance reservations required.</li>
  <li>Offer excludes: 3-Bedroom Villas; Moderate & Deluxe Resort Suites; Cabins at Copper Creek Villas & Cabins at Disney's Wilderness Lodge; and Bungalows, 1-Bedroom Villas, 2-Bedroom Villas and Penthouses at Disney's Polynesian Villas & Bungalows.</li>
</ul>`,
  },
  {
    id: '2',
    destination: 'Disney Cruise Line',
    title: 'Seas the Moment: 20% Off + $250 Credit',
    shortDescription: 'Enjoy 20% off voyage fare plus $250 onboard credit on select Disney Wish and Disney Dream sailings!',
    offerText: '20% Off + Credit',
    validDates: 'Book by Mar 29, 2026',
    bgGradient: 'from-magenta-dark via-magenta to-magenta-light',
    fullDescription: `
<h2>Offer Details</h2>
<p>Seas the moment and plan a magical escape on a Disney Cruise! Guests can embark on select Disney Wish and Disney Dream sailings and enjoy <strong>20% off voyage fare</strong> - plus <strong>$250 onboard credit</strong> to spend during their vacation at sea.</p>

<p>This offer is available on select sailings aboard the Disney Wish and Disney Dream between <strong>April and July 2026</strong>.</p>

<h2>Eligible Sailings</h2>
<p><em>Availability is subject to change without notice.</em></p>

<h3>Disney Wish from Port Canaveral</h3>
<ul>
  <li>April 6, 10, 17, 20, 2026</li>
  <li>May 1, 8, 18, 22, 29, 2026</li>
  <li>June 1, 5, 12, 15, 19, 26, 29, 2026</li>
  <li>July 3, 10, 13, 17, 20, 24, 27, 31, 2026</li>
</ul>

<h3>Disney Dream from Fort Lauderdale</h3>
<ul>
  <li>April 10, 13, 17, 24, 27, 2026</li>
</ul>

<h2>Important Details</h2>
<ul>
  <li>Must book by March 29, 2026</li>
  <li>Valid on select Disney Wish and Disney Dream sailings only</li>
  <li>Sailings depart April through July 2026</li>
  <li>$250 onboard credit per reservation</li>
  <li>Contact your travel advisor to book</li>
</ul>`,
  },
  {
    id: '3',
    destination: 'Walt Disney World',
    title: 'FREE Kids Dining Plan',
    shortDescription: 'Get a FREE dining plan for kids (ages 3 to 9) when you purchase a package with dining for adults.',
    offerText: 'Kids Eat Free',
    validDates: 'All of 2026',
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
    id: '4',
    destination: 'Walt Disney World',
    title: 'Save on Spring Packages',
    shortDescription: 'Save on vacation packages for stays most nights from February to July 2026.',
    offerText: 'Spring Savings',
    validDates: 'Feb 22 – Jul 25, 2026',
    bgGradient: 'from-ocean via-ocean-light to-aqua-dark',
    fullDescription: `
<h2>Offer Details</h2>

<h3>Valid Travel Dates</h3>
<ul>
  <li>For stays most nights from February 22 to July 25, 2026</li>
  <li>Other savings available for stays most Sunday to Thursday nights from January 4 to February 19, 2026</li>
</ul>

<h3>Length-of-Stay Requirements</h3>
<ul>
  <li>Minimum – 4 nights</li>
  <li>Maximum – 14 nights</li>
</ul>

<h3>Package Includes</h3>
<ul>
  <li>Resort hotel accommodations</li>
  <li>Theme park tickets</li>
</ul>

<h2>Important Details</h2>
<ul>
  <li>The number of rooms allocated for this offer is limited.</li>
  <li>Savings based on the nondiscounted price of the same package.</li>
  <li>Everyone in the same room must be on the same package.</li>
  <li>Theme park tickets are valid for admission beginning on date of check-in.</li>
  <li>Advance reservations required.</li>
  <li>Cannot be combined with any other discount or promotion, except for the 2026 Kids Dining Plan Offer.</li>
  <li>This package includes a date-based ticket; theme park reservations are not required for date-based tickets.</li>
</ul>`,
  },
  {
    id: '5',
    destination: 'Walt Disney World',
    title: 'Save Up to 30% on Summer Rooms',
    shortDescription: 'Save up to 30% on rooms at select Disney Resort hotels for stays this summer.',
    offerText: 'Up to 30% Off',
    validDates: 'May 1 – Oct 4, 2026',
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
    id: '6',
    destination: 'Walt Disney World',
    title: 'Florida Resident Summer Offer',
    shortDescription: 'Special room rates for Florida residents at select Disney Resort hotels.',
    offerText: 'FL Residents',
    validDates: 'May 1 – Jul 29, 2026',
    bgGradient: 'from-ocean via-ocean-light to-aqua-dark',
    fullDescription: `
<h2>Offer Details</h2>

<h3>Eligibility</h3>
<ul>
  <li>Proof of Florida residency required at check-in</li>
</ul>

<h3>Valid Travel Dates</h3>
<ul>
  <li>Most nights from May 1 to July 29, 2026</li>
</ul>

<h3>Length-of-Stay Requirements</h3>
<ul>
  <li>Minimum – 1 night</li>
  <li>Maximum – 14 nights</li>
</ul>

<h2>Important Details</h2>
<ul>
  <li>The number of rooms allocated for this offer is limited.</li>
  <li>Savings based on the nondiscounted price a non-Florida resident pays for the same room.</li>
  <li>Additional per-adult charges may apply if more than 2 adults per room.</li>
  <li>Cannot be combined with any other discount or promotion, except for the 2026 Kids Dining Plan Offer.</li>
  <li>Must be consecutive-night stays.</li>
  <li>Valid admission is required to enjoy the theme parks and is not included in this offer.</li>
</ul>`,
  },
  {
    id: '7',
    destination: 'Walt Disney World',
    title: 'Passholder Summer Savings',
    shortDescription: 'Annual Passholders save up to 40% on rooms at select Disney Resort hotels this summer.',
    offerText: 'Up to 40% Off',
    validDates: 'May 1 – Jul 29, 2026',
    bgGradient: 'from-ocean via-ocean-light to-aqua-dark',
    fullDescription: `
<h2>Offer Details</h2>

<h3>Eligibility</h3>
<ul>
  <li>Passholder must present a valid Walt Disney World Annual Pass at check-in</li>
</ul>

<h3>Valid Travel Dates</h3>
<ul>
  <li>Most nights from May 1 to July 29, 2026</li>
</ul>

<h3>Length of Stay Requirements</h3>
<ul>
  <li>Minimum – 1 night</li>
  <li>Maximum – 14 nights</li>
</ul>

<h2>Important Details</h2>
<ul>
  <li>The number of rooms allocated for this offer is limited.</li>
  <li>Savings based on the nondiscounted price a non-Passholder pays for the same room.</li>
  <li>Additional per-adult charges may apply if more than 2 adults per room.</li>
  <li>Cannot be combined with any other discount or promotion, except for the 2026 Kids Dining Plan Offer.</li>
  <li>Advance reservations required.</li>
  <li>Must be consecutive-night stays.</li>
  <li>To enter a theme park, each Passholder must have valid admission and may need a theme park reservation.</li>
</ul>`,
  },
];

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
      icon={
        promotion.destination === 'Disney Cruise Line' ? (
          <Ship className="w-7 h-7" />
        ) : (
          <Castle className="w-7 h-7" />
        )
      }
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
    setCurrentSlide((prev) => (prev + 1) % promotions.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + promotions.length) % promotions.length);
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
      const promo = promotions.find((p) => p.id === openPromotionId);
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
                {promotions.map((promo) => (
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
              {promotions.map((_, index) => (
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
