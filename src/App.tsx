import { useState } from 'react';
import {
  Header,
  Footer,
  Hero,
  PromoBanner,
  Promotions,
  Destinations,
  About,
  Testimonials,
  Contact,
} from './components';

// DCL Half Deposit promo ID
const DCL_PROMO_ID = '2';

function App() {
  const [isBannerVisible, setIsBannerVisible] = useState(true);
  const [openPromotionId, setOpenPromotionId] = useState<string | null>(null);

  const handleBannerLearnMore = () => {
    setOpenPromotionId(DCL_PROMO_ID);
  };

  return (
    <div className="min-h-screen">
      <PromoBanner
        isVisible={isBannerVisible}
        onClose={() => setIsBannerVisible(false)}
        onLearnMore={handleBannerLearnMore}
      />
      <Header hasBanner={isBannerVisible} />
      <main>
        <Hero />
        <Promotions
          openPromotionId={openPromotionId}
          onModalClose={() => setOpenPromotionId(null)}
        />
        <Destinations />
        <About />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
