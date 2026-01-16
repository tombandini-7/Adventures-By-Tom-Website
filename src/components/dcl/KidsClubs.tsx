import { Baby, Gamepad2, Music, GraduationCap } from 'lucide-react';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';

interface ClubInfo {
  name: string;
  ages: string;
  description: string;
  highlights: string[];
  icon: React.ReactNode;
}

const kidsClubs: ClubInfo[] = [
  {
    name: "It's a Small World Nursery",
    ages: '6 months - 3 years',
    description: 'A safe haven for your littlest cruisers with trained counselors providing attentive care.',
    highlights: ['Age-appropriate activities', 'Quiet nap areas', 'Play sessions', 'Fee-based service'],
    icon: <Baby className="w-6 h-6" />,
  },
  {
    name: 'Oceaneer Club & Lab',
    ages: '3 - 12 years',
    description: 'Immersive themed spaces where kids can explore, create, and play with beloved Disney characters.',
    highlights: ['Marvel Super Hero Academy', 'Star Wars: Cargo Bay', 'Disney\'s Oceaneer Lab', 'Included in fare'],
    icon: <Gamepad2 className="w-6 h-6" />,
  },
  {
    name: 'Edge',
    ages: '11 - 14 years',
    description: 'A trendy hangout designed exclusively for tweens with video games, activities, and social events.',
    highlights: ['Gaming consoles', 'Group activities', 'Dance parties', 'Included in fare'],
    icon: <Music className="w-6 h-6" />,
  },
  {
    name: 'Vibe',
    ages: '14 - 17 years',
    description: 'An exclusive teen-only club with a coffee bar, movies, and social activities.',
    highlights: ['Teen-only space', 'Movie screenings', 'Themed parties', 'Included in fare'],
    icon: <GraduationCap className="w-6 h-6" />,
  },
];

const KidsClubs = () => {
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation();

  return (
    <section id="kids-clubs" className="py-24 bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div
          ref={headerRef}
          className={`text-center max-w-3xl mx-auto mb-16 transition-all duration-700 ${
            headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <p className="text-magenta uppercase tracking-[0.2em] text-sm font-medium mb-4">
            Something for Everyone
          </p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-ocean mb-6">
            Award-Winning Youth Clubs
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed">
            Disney Cruise Line offers dedicated spaces for every age group, from infants to teens. While the kids are having the time of their lives, parents can enjoy adult-exclusive areas and activities.
          </p>
        </div>

        {/* Clubs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {kidsClubs.map((club, index) => (
            <ClubCard key={club.name} club={club} delay={index * 100} />
          ))}
        </div>
      </div>
    </section>
  );
};

interface ClubCardProps {
  club: ClubInfo;
  delay: number;
}

const ClubCard = ({ club, delay }: ClubCardProps) => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.2 });

  return (
    <div
      ref={ref}
      className={`card-hover bg-sky rounded-2xl p-6 lg:p-8 transition-all duration-700 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="flex items-start gap-4">
        <div className="flex-shrink-0 text-aqua">{club.icon}</div>
        <div className="flex-1">
          <div className="flex flex-wrap items-center gap-3 mb-2">
            <h3 className="font-serif text-xl lg:text-2xl text-ocean">{club.name}</h3>
            <span className="px-3 py-1 bg-ocean/10 text-ocean text-xs font-semibold rounded-full">
              Ages {club.ages}
            </span>
          </div>
          <p className="text-gray-600 text-sm leading-relaxed mb-4">{club.description}</p>
          <ul className="grid grid-cols-2 gap-2">
            {club.highlights.map((highlight) => (
              <li key={highlight} className="flex items-center gap-2 text-sm text-gray-500">
                <span className="w-1.5 h-1.5 bg-aqua rounded-full flex-shrink-0" />
                {highlight}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default KidsClubs;
