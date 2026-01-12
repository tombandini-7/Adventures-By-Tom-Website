import { useState, useEffect } from 'react';
import { Header, Footer, PromoBanner, Contact } from '../components';
import {
  WDWHero,
  FirstTimeGuide,
  PlanningTimeline,
  EventsCards,
  DiningGuides,
  LightningLane,
  WDWPromotions,
} from '../components/wdw';

const WaltDisneyWorldPage = () => {
  const [isBannerVisible, setIsBannerVisible] = useState(true);

  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen">
      <PromoBanner
        isVisible={isBannerVisible}
        onClose={() => setIsBannerVisible(false)}
      />
      <Header hasBanner={isBannerVisible} />
      <main>
        <WDWHero />
        <FirstTimeGuide />
        <PlanningTimeline />
        <EventsCards />
        <DiningGuides />
        <LightningLane />
        <WDWPromotions />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default WaltDisneyWorldPage;
