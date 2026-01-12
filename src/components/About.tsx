import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { Award, Heart, Clock, Shield } from 'lucide-react';
import { IoMdHappy } from 'react-icons/io';
import { ASSETS } from '../constants/assets';

const About = () => {
  const { ref: contentRef, isVisible: contentVisible } = useScrollAnimation();
  const { ref: statsRef, isVisible: statsVisible } = useScrollAnimation();

  const features = [
    {
      icon: <Heart className="w-6 h-6" />,
      title: 'Personalized Service',
      description:
        'Every journey is crafted to your unique preferences. No cookie-cutter vacations here.',
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: 'Expert Knowledge',
      description:
        'Years of experience and insider knowledge to maximize your magical moments.',
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: 'Time Savings',
      description:
        'I handle every detail so you can focus on creating memories with your loved ones.',
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: 'Peace of Mind',
      description:
        'From planning to return, enjoy stress-free travel with a trusted advisor by your side.',
    },
  ];

  return (
    <section id="about" className="py-24 bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Image Side */}
          <div
            ref={contentRef}
            className={`relative transition-all duration-700 ${
              contentVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'
            }`}
          >
            {/* Main Image */}
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src={ASSETS.team.tom}
                alt="Tom - Your Travel Advisor"
                className="w-full h-[500px] object-cover object-top"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-ocean/30 to-transparent" />
            </div>

            {/* Decorative Element */}
            <div className="absolute -bottom-8 -right-8 w-48 h-48 bg-aqua/20 rounded-full blur-3xl -z-10" />
            <div className="absolute -top-8 -left-8 w-32 h-32 bg-magenta/20 rounded-full blur-2xl -z-10" />

            {/* Floating Badge */}
            <div className="absolute -bottom-6 -right-6 md:bottom-8 md:right-8 bg-white rounded-xl shadow-xl p-4 animate-float">
              <div className="flex items-center gap-3">
                <div className="flex items-center justify-center">
                  <IoMdHappy className="w-8 h-8 text-yellow-dark" />
                </div>
                <div>
                  <p className="font-serif text-2xl text-ocean font-semibold">Hundreds of</p>
                  <p className="text-xs text-gray-500">Happy Families</p>
                </div>
              </div>
            </div>
          </div>

          {/* Content Side */}
          <div>
            <p className="text-magenta uppercase tracking-[0.2em] text-sm font-medium mb-4">
              About Me
            </p>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-ocean mb-6">
              Your Personal Travel Advisor
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-8">
              Hi, I'm Tom! As a passionate Disney enthusiast and cruise vacation specialist,
              I believe every family deserves a vacation that feels truly magical. My approach
              is simple: treat every client as if they're my only client.
            </p>
            <p className="text-gray-600 leading-relaxed mb-8">
              With years of firsthand experience at Disney destinations worldwide and countless
              cruise voyages, I bring insider expertise that transforms ordinary trips into
              extraordinary adventures. My services are complimentary — I'm compensated by
              the travel partners I work with, not by you.
            </p>

            {/* Features Grid */}
            <div
              ref={statsRef}
              className={`grid grid-cols-1 sm:grid-cols-2 gap-6 transition-all duration-700 delay-300 ${
                statsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              {features.map((feature, index) => (
                <div
                  key={feature.title}
                  className="flex items-start gap-4"
                  style={{ transitionDelay: `${index * 100 + 300}ms` }}
                >
                  <div className="flex items-center justify-center text-aqua flex-shrink-0">
                    {feature.icon}
                  </div>
                  <div>
                    <h4 className="font-serif text-lg text-ocean mb-1">{feature.title}</h4>
                    <p className="text-sm text-gray-500 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
