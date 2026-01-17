import { useState, useEffect } from 'react';
import { Header, Footer, PromoBanner, Contact } from '../components';
import {
  DisneylandHero,
  FirstTimeGuide,
  PlanningTimeline,
  FestivalsEvents,
  LightningLane,
  DisneylandResorts,
  DisneylandPromotions,
} from '../components/disneyland';
import { DisneylandPageSEO } from '../components/SEO';

const DisneylandPage = () => {
  const [isBannerVisible, setIsBannerVisible] = useState(true);

  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen">
      <DisneylandPageSEO />
      <PromoBanner
        isVisible={isBannerVisible}
        onClose={() => setIsBannerVisible(false)}
      />
      <Header hasBanner={isBannerVisible} />
      <main>
        <DisneylandHero />
        <FirstTimeGuide />
        <PlanningTimeline />
        <FestivalsEvents />
        <LightningLane />
        <DisneylandResorts />
        <DisneylandPromotions />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default DisneylandPage;
