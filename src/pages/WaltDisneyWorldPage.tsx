import { useEffect } from 'react';
import { Header, Footer, Contact } from '../components';
import {
  WDWHero,
  FirstTimeGuide,
  PlanningTimeline,
  EventsCards,
  DiningGuides,
  LightningLane,
  WDWResorts,
  WDWPromotions,
} from '../components/wdw';
import { WaltDisneyWorldPageSEO } from '../components/SEO';

const WaltDisneyWorldPage = () => {
  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen">
      <WaltDisneyWorldPageSEO />
      <Header />
      <main>
        <WDWHero />
        <FirstTimeGuide />
        <PlanningTimeline />
        <EventsCards />
        <DiningGuides />
        <LightningLane />
        <WDWResorts />
        <WDWPromotions />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default WaltDisneyWorldPage;
