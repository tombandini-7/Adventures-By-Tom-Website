import {
  Header,
  Footer,
  Hero,
  Destinations,
  About,
  Testimonials,
  Contact,
} from './components';

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
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
