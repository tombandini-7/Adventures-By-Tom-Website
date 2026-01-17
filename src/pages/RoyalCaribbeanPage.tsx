import { useState, useEffect } from 'react';
import PromoBanner from '../components/PromoBanner';
import Header from '../components/Header';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import {
  RCHero,
  ShipClasses,
  WhatsIncluded,
  DiningExperience,
  PrivateDestinations,
  PlanningTimeline,
} from '../components/royalcaribbean';

const RoyalCaribbeanPage = () => {
  const [showPromoBanner, setShowPromoBanner] = useState(true);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <PromoBanner isVisible={showPromoBanner} onClose={() => setShowPromoBanner(false)} />
      <Header hasBanner={showPromoBanner} />

      <main>
        <RCHero />
        <ShipClasses />
        <WhatsIncluded />
        <DiningExperience />
        <PrivateDestinations />
        <PlanningTimeline />
        <Contact />
      </main>

      <Footer />
    </div>
  );
};

export default RoyalCaribbeanPage;
