import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { Mail, Phone, MapPin, ExternalLink, Compass } from 'lucide-react';

const QUOTE_URL = 'https://tinyurl.com/advbytom';

const Contact = () => {
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation();
  const { ref: contentRef, isVisible: contentVisible } = useScrollAnimation();

  return (
    <section id="contact" className="py-24 bg-ocean relative overflow-hidden">
      {/* Background Pattern */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23FFFFFF' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Section Header */}
        <div
          ref={headerRef}
          className={`text-center max-w-3xl mx-auto mb-16 transition-all duration-700 ${
            headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <p className="text-yellow uppercase tracking-[0.2em] text-sm font-medium mb-4">
            Let's Connect
          </p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-white mb-6">
            Ready to Start Your Adventure?
          </h2>
          <p className="text-sky text-lg leading-relaxed mb-8">
            Let me help you plan the vacation of your dreams. Get your free, no-obligation
            quote today and discover how easy magical travel can be.
          </p>

          {/* Primary CTA */}
          <a
            href={QUOTE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-10 py-5 rounded-lg bg-magenta text-white font-semibold uppercase tracking-wide text-base hover:bg-magenta-light transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1"
          >
            Get Your Free Quote
            <ExternalLink className="w-5 h-5" />
          </a>
        </div>

        {/* Contact Info Cards */}
        <div
          ref={contentRef}
          className={`grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto transition-all duration-700 delay-200 ${
            contentVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          {/* Email */}
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center">
            <div className="flex items-center justify-center mx-auto mb-4" style={{ color: '#FFD60A' }}>
              <Mail className="w-8 h-8" />
            </div>
            <h3 className="font-semibold mb-2" style={{ color: '#FFD60A' }}>Email</h3>
            <a
              href="mailto:tom@magicalparkvacations.com"
              className="hover:opacity-80 transition-opacity text-sm"
              style={{ color: '#FFFFFF' }}
            >
              tom@magicalparkvacations.com
            </a>
          </div>

          {/* Phone */}
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center">
            <div className="flex items-center justify-center mx-auto mb-4" style={{ color: '#FFD60A' }}>
              <Phone className="w-8 h-8" />
            </div>
            <h3 className="font-semibold mb-2" style={{ color: '#FFD60A' }}>Phone</h3>
            <a
              href="tel:+15857545434"
              className="hover:opacity-80 transition-opacity text-sm"
              style={{ color: '#FFFFFF' }}
            >
              (585) 754-5434
            </a>
          </div>

          {/* Location */}
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center">
            <div className="flex items-center justify-center mx-auto mb-4" style={{ color: '#FFD60A' }}>
              <MapPin className="w-8 h-8" />
            </div>
            <h3 className="font-semibold mb-2" style={{ color: '#FFD60A' }}>Location</h3>
            <span className="text-sm" style={{ color: '#FFFFFF' }}>
              Available Nationwide
            </span>
          </div>
        </div>

        {/* Free Service Note */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-2 text-yellow text-sm">
            <Compass className="w-4 h-4" />
            <span>100% Free Planning Services - No Hidden Fees</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
