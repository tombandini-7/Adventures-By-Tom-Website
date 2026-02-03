import { useState, useEffect } from 'react';
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
} from '../components';
import { HomePageSEO } from '../components/SEO';

const HomePage = () => {
  const [isBannerVisible, setIsBannerVisible] = useState(true);

  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen">
      <HomePageSEO />
      <PromoBanner
        isVisible={isBannerVisible}
        onClose={() => setIsBannerVisible(false)}
      />
      <Header hasBanner={isBannerVisible} />
      <main>
        <Hero />
        <About />
        <Promotions />
        <Destinations />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default HomePage;
