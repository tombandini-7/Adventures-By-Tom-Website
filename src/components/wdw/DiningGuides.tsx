import { useState } from 'react';
import { UtensilsCrossed, Crown, Clock, ArrowRight, CheckCircle2, BookOpen, ExternalLink } from 'lucide-react';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import { diningCategories, diningPlans } from '../../data/wdw';
import type { DiningPlan } from '../../data/wdw';
import { Modal } from '../common';
import { QUOTE_URL } from '../../constants';

const iconMap: Record<string, React.ReactNode> = {
  'Character Dining': <UtensilsCrossed className="w-6 h-6" />,
  'Signature Dining': <Crown className="w-6 h-6" />,
  'Quick Service': <Clock className="w-6 h-6" />,
};

const colorMap: Record<string, string> = {
  'Character Dining': 'from-magenta to-magenta-light',
  'Signature Dining': 'from-ocean to-ocean-light',
  'Quick Service': 'from-aqua to-aqua-dark',
};

const DiningGuides = () => {
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation();
  const { ref: contentRef, isVisible: contentVisible } = useScrollAnimation();
  const { ref: plansRef, isVisible: plansVisible } = useScrollAnimation();
  const [selectedPlan, setSelectedPlan] = useState<DiningPlan | null>(null);

  return (
    <section id="dining" className="py-24 bg-sky">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div
          ref={headerRef}
          className={`text-center max-w-3xl mx-auto mb-16 transition-all duration-700 ${
            headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <p className="text-magenta uppercase tracking-[0.2em] text-sm font-medium mb-4">
            Culinary Magic
          </p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-ocean mb-6">
            Disney Dining Guide
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed">
            From character breakfasts to award-winning fine dining, Walt Disney World offers incredible culinary experiences for every taste and budget.
          </p>
        </div>

        {/* Dining Plans */}
        <div
          ref={plansRef}
          className={`mb-12 transition-all duration-700 ${
            plansVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <h3 className="font-serif text-2xl text-ocean mb-6 text-center">
            Disney Dining Plans
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {diningPlans.map((plan, index) => (
              <DiningPlanCard
                key={plan.id}
                plan={plan}
                delay={index * 100}
                onLearnMore={() => setSelectedPlan(plan)}
              />
            ))}
          </div>
        </div>

        {/* Dining Categories */}
        <div
          ref={contentRef}
          className={`grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-12 transition-all duration-700 ${
            contentVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          {diningCategories.map((category, index) => (
            <DiningCard key={category.title} category={category} delay={index * 100} />
          ))}
        </div>

        {/* Dining Tips */}
        <div className="bg-white rounded-2xl p-6 lg:p-8 shadow-lg">
          <h3 className="font-serif text-2xl text-ocean mb-6 text-center">
            Dining Reservation Tips
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <TipItem
              number="01"
              title="Book at 60 Days"
              description="Bookings open at 6:00 AM ET exactly 60 days before your visit"
            />
            <TipItem
              number="02"
              title="Have Backups"
              description="Popular restaurants fill instantly - have 2-3 alternatives ready"
            />
            <TipItem
              number="03"
              title="Check Daily"
              description="Cancellations happen! I will check and tr  y to secure your top choices"
            />
            <TipItem
              number="04"
              title="Consider Mobile"
              description="Mobile order at quick service to save valuable park time"
            />
          </div>
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <a
            href={QUOTE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-lg bg-magenta text-white font-semibold uppercase tracking-wide text-sm hover:bg-magenta-light transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1"
          >
            Let Me Book For You
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </div>

      {/* Dining Plan Modal */}
      <DiningPlanModal
        plan={selectedPlan}
        isOpen={!!selectedPlan}
        onClose={() => setSelectedPlan(null)}
      />
    </section>
  );
};

interface DiningCardProps {
  category: typeof diningCategories[0];
  delay: number;
}

const DiningCard = ({ category, delay }: DiningCardProps) => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.2 });

  return (
    <div
      ref={ref}
      className={`card-hover bg-white rounded-2xl overflow-hidden shadow-lg transition-all duration-700 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {/* Header */}
      <div className={`bg-gradient-to-r ${colorMap[category.title]} p-5 text-white`}>
        <div className="flex items-center gap-3">
          {iconMap[category.title]}
          <h3 className="font-serif text-xl font-semibold">{category.title}</h3>
        </div>
      </div>

      {/* Content */}
      <div className="p-5">
        <p className="text-gray-600 text-sm leading-relaxed mb-4">
          {category.description}
        </p>
        <div className="space-y-2">
          <p className="text-xs text-gray-400 uppercase tracking-wide font-medium">Popular Options:</p>
          <ul className="space-y-1.5">
            {category.examples.map((example) => (
              <li key={example} className="flex items-center gap-2 text-sm text-ocean">
                <span className="w-1.5 h-1.5 rounded-full bg-magenta" />
                {example}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

interface TipItemProps {
  number: string;
  title: string;
  description: string;
}

const TipItem = ({ number, title, description }: TipItemProps) => {
  return (
    <div className="text-center">
      <span className="text-3xl font-serif text-ocean/50">{number}</span>
      <h4 className="font-serif text-lg text-ocean mt-1 mb-2">{title}</h4>
      <p className="text-gray-500 text-sm leading-relaxed">{description}</p>
    </div>
  );
};

// Dining Plan Card Component
interface DiningPlanCardProps {
  plan: DiningPlan;
  delay: number;
  onLearnMore: () => void;
}

const DiningPlanCard = ({ plan, delay, onLearnMore }: DiningPlanCardProps) => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.2 });

  return (
    <div
      ref={ref}
      className={`card-hover bg-white rounded-2xl overflow-hidden shadow-lg transition-all duration-700 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {/* Header */}
      <div className="bg-gradient-to-r from-magenta to-ocean p-5 text-white">
        <div className="flex items-center gap-3">
          <BookOpen className="w-6 h-6" />
          <h3 className="font-serif text-xl font-semibold">{plan.title}</h3>
        </div>
      </div>

      {/* Content */}
      <div className="p-5">
        <p className="text-gray-600 text-sm leading-relaxed mb-4">
          {plan.summary}
        </p>

        <div className="space-y-2 mb-4">
          <p className="text-xs text-gray-400 uppercase tracking-wide font-medium">What's Included:</p>
          <ul className="space-y-1.5">
            {plan.included.map((item) => (
              <li key={item} className="flex items-start gap-2 text-sm text-ocean">
                <CheckCircle2 className="w-4 h-4 text-aqua flex-shrink-0 mt-0.5" />
                {item}
              </li>
            ))}
          </ul>
        </div>

        <button
          onClick={onLearnMore}
          className="inline-flex items-center gap-2 text-magenta font-medium text-sm hover:text-magenta-dark transition-colors group"
        >
          Learn More
          <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
        </button>
      </div>
    </div>
  );
};

// Dining Plan Modal Component using reusable Modal
interface DiningPlanModalProps {
  plan: DiningPlan | null;
  isOpen: boolean;
  onClose: () => void;
}

const DiningPlanModal = ({ plan, isOpen, onClose }: DiningPlanModalProps) => {
  if (!plan) return null;

  const { modalContent } = plan;

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      icon={<BookOpen className="w-7 h-7" />}
      label="Disney Dining"
      title={plan.title}
    >
      <div className="space-y-6">
        {/* Intro */}
        <p className="text-gray-600 leading-relaxed">{modalContent.intro}</p>

        {/* What's Included */}
        <div>
          <h3 className="font-serif text-xl text-ocean mb-3">What's Included</h3>
          <p className="text-gray-600 text-sm mb-3">Everyone in the party ages 3 and over receives the following:</p>
          <ul className="space-y-2">
            {modalContent.whatsIncluded.map((item) => (
              <li key={item} className="flex items-start gap-2 text-gray-700">
                <CheckCircle2 className="w-5 h-5 text-aqua flex-shrink-0 mt-0.5" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Footnotes */}
        <div className="bg-sky/50 rounded-lg p-4">
          {modalContent.footnotes.map((note, index) => (
            <p key={index} className="text-xs text-gray-500 leading-relaxed mb-2 last:mb-0">
              {note}
            </p>
          ))}
        </div>

        {/* Important Information */}
        <div>
          <h3 className="font-serif text-xl text-ocean mb-3">Important Information</h3>
          <ul className="space-y-3">
            {modalContent.importantInfo.map((info, index) => (
              <li key={index} className="flex items-start gap-2 text-gray-600 text-sm">
                <span className="w-1.5 h-1.5 rounded-full bg-magenta flex-shrink-0 mt-2" />
                <span>{info}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Pace Info */}
        <div className="bg-aqua/10 rounded-lg p-5">
          <h4 className="font-serif text-lg text-ocean mb-2">{modalContent.paceInfo.title}</h4>
          <p className="text-gray-600 text-sm mb-3">{modalContent.paceInfo.description}</p>
          <p className="text-gray-600 text-sm italic">{modalContent.paceInfo.example}</p>
        </div>

        {/* Links */}
        <div className="space-y-2">
          {modalContent.links.map((link) => (
            <a
              key={link.url}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-aqua hover:text-aqua-dark transition-colors text-sm font-medium"
            >
              <ExternalLink className="w-4 h-4" />
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </Modal>
  );
};

export default DiningGuides;
