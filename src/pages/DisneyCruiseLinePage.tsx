import { useState, useEffect } from 'react';
import { Header, Footer, PromoBanner, Contact } from '../components';
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
  const [isBannerVisible, setIsBannerVisible] = useState(true);

  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen">
      <DisneyCruiseLinePageSEO />
      <PromoBanner
        isVisible={isBannerVisible}
        onClose={() => setIsBannerVisible(false)}
      />
      <Header hasBanner={isBannerVisible} />
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
