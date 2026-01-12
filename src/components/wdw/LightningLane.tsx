import { Zap, Check, Star, ArrowRight } from 'lucide-react';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import { lightningLaneInfo } from '../../data/wdw';
import { QUOTE_URL } from '../../constants';

const LightningLane = () => {
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation();
  const { ref: contentRef, isVisible: contentVisible } = useScrollAnimation();

  return (
    <section id="lightning-lane" className="py-24 bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div
          ref={headerRef}
          className={`text-center max-w-3xl mx-auto mb-16 transition-all duration-700 ${
            headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <p className="text-magenta uppercase tracking-[0.2em] text-sm font-medium mb-4">
            Skip the Lines
          </p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-ocean mb-6">
            Lightning Lane
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed">
            Maximize your park time with Disney&apos;s Lightning Lane services. Skip standby lines and experience more attractions!
          </p>
        </div>

        {/* Lightning Lane Options */}
        <div
          ref={contentRef}
          className={`grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12 transition-all duration-700 ${
            contentVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          {/* Multi Pass Card */}
          <div className="card-hover bg-gradient-to-br from-aqua to-ocean rounded-2xl overflow-hidden shadow-xl">
            <div className="p-6 lg:p-8">
              <div className="flex items-center gap-3 mb-4">
                <Zap className="w-8 h-8 text-white" />
                <div>
                  <h3 className="font-serif text-2xl text-white">{lightningLaneInfo.multiPass.title}</h3>
                  <p className="text-white/70 text-sm">{lightningLaneInfo.multiPass.price}</p>
                </div>
              </div>

              <p className="text-white/90 mb-6 leading-relaxed">
                {lightningLaneInfo.multiPass.description}
              </p>

              <ul className="space-y-3">
                {lightningLaneInfo.multiPass.included.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-white">
                    <Check className="w-5 h-5 text-yellow flex-shrink-0 mt-0.5" />
                    <span className="text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Single Pass Card */}
          <div className="card-hover bg-white border-2 border-gray-100 rounded-2xl overflow-hidden shadow-lg">
            <div className="p-6 lg:p-8">
              <div className="flex items-center gap-3 mb-4">
                <Star className="w-8 h-8 text-magenta" />
                <div>
                  <h3 className="font-serif text-2xl text-ocean">{lightningLaneInfo.singlePass.title}</h3>
                  <p className="text-gray-500 text-sm">{lightningLaneInfo.singlePass.price}</p>
                </div>
              </div>

              <p className="text-gray-600 mb-6 leading-relaxed">
                {lightningLaneInfo.singlePass.description}
              </p>

              <div>
                <p className="text-xs text-gray-400 uppercase tracking-wide font-medium mb-3">Premium Attractions:</p>
                <ul className="space-y-3">
                  {lightningLaneInfo.singlePass.attractions.map((attraction) => (
                    <li key={attraction} className="flex items-center gap-3 text-ocean">
                      <Zap className="w-4 h-4 text-magenta flex-shrink-0" />
                      <span className="text-sm font-medium">{attraction}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Tips Banner */}
        <div className="bg-sky rounded-2xl p-6 lg:p-8">
          <div className="flex flex-col lg:flex-row items-center gap-6">
            <Zap className="w-10 h-10 text-yellow-dark flex-shrink-0" />
            <div className="flex-1 text-center lg:text-left">
              <h4 className="font-serif text-xl text-ocean mb-2">Pro Tip: Book Early!</h4>
              <p className="text-gray-600 text-sm leading-relaxed">
                Resort guests can book Lightning Lane Multi Pass 7 days before their visit, while day guests can book 3 days in advance. Set a reminder to book at 7:00 AM ET!
              </p>
            </div>
            <a
              href={QUOTE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-shrink-0 inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-magenta text-white font-semibold uppercase tracking-wide text-sm hover:bg-magenta-light transition-all duration-300"
            >
              Get Help
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LightningLane;
