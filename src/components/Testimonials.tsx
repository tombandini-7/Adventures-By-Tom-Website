import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { Quote, Star } from 'lucide-react';

interface Testimonial {
  id: number;
  name: string;
  location: string;
  trip: string;
  quote: string;
  rating: number;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'Liz',
    trip: 'Walt Disney World',
    quote: "The overwhelming feeling of booking a Disney vacation was out the window when working with Tom. He was beyond knowledgeable and ensured we knew all our options from start to finish. We had the most magical trip because of his expertise and communication on procedures. We will never go to Disney without Tom’s help!",
    rating: 5,
    location: ''
  },
  {
    id: 2,
    name: 'Alex',
    location: '',
    trip: 'Disney Cruise Line',
    quote:
      "Tom did an amazing job planning the perfect trip for my family. It was our first time on a Disney cruise and we couldn't be happier. Our two young kids had a wonderful time!",
    rating: 5,
  },
  {
    id: 3,
    name: 'Lisa',
    location: '',
    trip: 'Royal Caribbean Cruises',
    quote:
      "Traveling with a large group made for a lot of questions and Tom was promptly available with an answer every time. Tom has extensive knowledge of things to do, places to stay, and lots of tips and tricks!",
    rating: 5,
  },
  {
    id: 4,
    name: 'Will',
    location: '',
    trip: 'Royal Caribbean Cruises',
    quote:
      "We recently had the pleasure of working with Tom to plan our summer cruise vacation, and it was an exceptional experience from start to finish. Tom went above and beyond to ensure every detail was covered, and he managed to keep our large group of family and friends together, which was no small feat! His organization, attention to detail, and genuine care for our travel needs made the entire process smooth and enjoyable. We felt confident and well-supported throughout our trip, and we couldn’t have asked for a better travel agent. We highly recommend Tom’s travel services to anyone looking for a stress-free and memorable vacation experience!",
    rating: 5,
  },
];

interface TestimonialCardProps {
  testimonial: Testimonial;
  delay: number;
}

const TestimonialCard = ({ testimonial, delay }: TestimonialCardProps) => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.2 });

  return (
    <div
      ref={ref}
      className={`card-hover bg-white rounded-2xl p-6 md:p-8 shadow-lg relative transition-all duration-700 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {/* Quote Icon */}
      <div className="absolute top-4 right-4 text-aqua/20">
        <Quote className="w-10 h-10" />
      </div>

      {/* Stars */}
      <div className="flex items-center gap-1 mb-4">
        {[...Array(testimonial.rating)].map((_, i) => (
          <Star key={i} className="w-4 h-4 fill-yellow text-yellow" />
        ))}
      </div>

      {/* Quote */}
      <blockquote className="font-serif text-lg text-gray-700 leading-relaxed mb-6 italic">
        "{testimonial.quote}"
      </blockquote>

      {/* Author Info */}
      <div className="border-t border-gray-100 pt-4">
        <p className="font-semibold text-ocean">{testimonial.name}</p>
        <p className="text-gray-500 text-sm">
          {testimonial.location} • {testimonial.trip}
        </p>
      </div>
    </div>
  );
};

const Testimonials = () => {
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation();

  return (
    <section id="testimonials" className="py-24 bg-sky relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-aqua/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-magenta/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Section Header */}
        <div
          ref={headerRef}
          className={`text-center max-w-3xl mx-auto mb-16 transition-all duration-700 ${
            headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <p className="text-magenta uppercase tracking-[0.2em] text-sm font-medium mb-4">
            Testimonials
          </p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-ocean mb-6">
            Stories from Happy Travelers
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed">
            Don't just take my word for it. Here's what families are saying about
            their magical adventures.
          </p>
        </div>

        {/* Testimonial Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={testimonial.id}
              testimonial={testimonial}
              delay={index * 100}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
