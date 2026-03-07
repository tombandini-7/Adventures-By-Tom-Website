import { useEffect } from 'react';
import { Header, Footer, Contact } from '../components';
import {
  DCLHero,
  Fleet,
  RotationalDining,
  KidsClubs,
  Staterooms,
  PrivateIslands,
  DCLPromotions,
} from '../components/dcl';
import { DisneyCruiseLinePageSEO } from '../components/SEO';

const DisneyCruiseLinePage = () => {
  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen">
      <DisneyCruiseLinePageSEO />
      <Header />
      <main>
        <DCLHero />
        <Fleet />
        <RotationalDining />
        <KidsClubs />
        <Staterooms />
        <PrivateIslands />
        <DCLPromotions />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default DisneyCruiseLinePage;
