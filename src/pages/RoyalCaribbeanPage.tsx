import { useEffect } from 'react';
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
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Header />

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
