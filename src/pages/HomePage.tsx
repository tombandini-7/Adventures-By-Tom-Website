import { useEffect } from 'react';
import {
  Header,
  Footer,
  Hero,
  Promotions,
  Destinations,
  About,
  Testimonials,
  Contact,
} from '../components';
import { HomePageSEO } from '../components/SEO';

const HomePage = () => {
  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen">
      <HomePageSEO />
      <Header />
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
