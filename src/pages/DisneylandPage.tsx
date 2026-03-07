import { useEffect } from 'react';
import { Header, Footer, Contact } from '../components';
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
  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen">
      <DisneylandPageSEO />
      <Header />
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
