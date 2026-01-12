import { UtensilsCrossed, Car, Zap, Luggage, CreditCard } from 'lucide-react';
import { createElement } from 'react';
import { ASSETS } from '../constants/assets';

export interface TimelineStep {
  days: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}

export interface WDWEvent {
  id: string;
  name: string;
  shortName: string;
  description: string;
  dates: string;
  location: string;
  park: 'Magic Kingdom' | 'EPCOT' | 'Hollywood Studios' | 'Animal Kingdom';
  image: string;
  highlights: string[];
}

export interface FirstTimeGuideItem {
  title: string;
  description: string;
  tips: string[];
}

export interface DiningPlan {
  id: string;
  title: string;
  summary: string;
  included: string[];
  modalContent: {
    intro: string;
    whatsIncluded: string[];
    footnotes: string[];
    importantInfo: string[];
    paceInfo: {
      title: string;
      description: string;
      example: string;
    };
    links: { label: string; url: string }[];
  };
}

// Planning Timeline Data
export const timelineSteps: TimelineStep[] = [
  {
    days: '60 Days',
    title: 'Dining Reservations',
    description: 'I will book your table service restaurants and character dining experiences.',
    icon: createElement(UtensilsCrossed, { className: 'w-6 h-6' }),
  },
  {
    days: '45 Days',
    title: 'Transportation',
    description: 'I will help arrange airport transfers, rental cars, or other transportation options to get you to the magic.',
    icon: createElement(Car, { className: 'w-6 h-6' }),
  },
  {
    days: '30 Days',
    title: 'Final Payment',
    description: 'Your final payment is due! Make sure you authorize your final balance with me so it is paid in full to avoid cancellation of your reservation.',
    icon: createElement(CreditCard, { className: 'w-6 h-6' }),
  },
  {
    days: '7 Days',
    title: 'Lightning Lane',
    description: 'Purchase Lightning Lane Multi Pass for skip-the-line access to popular attractions. Choose your first day\'s selections!',
    icon: createElement(Zap, { className: 'w-6 h-6' }),
  },
  {
    days: '5 Days',
    title: 'Pack & Prepare',
    description: 'Start packing essentials, download the My Disney Experience app, and review your park reservations one final time.',
    icon: createElement(Luggage, { className: 'w-6 h-6' }),
  },
];

// WDW Events Data (ordered by calendar year)
export const wdwEvents: WDWEvent[] = [
  {
    id: 'festival-arts',
    name: 'EPCOT International Festival of the Arts',
    shortName: 'Festival of the Arts',
    description: 'A celebration of visual, culinary, and performing arts featuring unique food studios, art displays, live performances, and the Disney on Broadway concert series.',
    dates: 'January - February',
    location: 'EPCOT',
    park: 'EPCOT',
    image: ASSETS.events.festivalOfTheArts,
    highlights: ['Disney on Broadway', 'Art Workshops', 'Food Studios', 'Figment\'s Art Walk'],
  },
  {
    id: 'flower-garden',
    name: 'EPCOT International Flower & Garden Festival',
    shortName: 'Flower & Garden',
    description: 'Experience stunning topiaries of Disney characters, beautiful gardens, Outdoor Kitchens with fresh flavors, and the Garden Rocks concert series.',
    dates: 'March - July',
    location: 'EPCOT',
    park: 'EPCOT',
    image: ASSETS.events.flowerGarden,
    highlights: ['Character Topiaries', 'Garden Rocks Concerts', 'Outdoor Kitchens', 'Butterfly Garden'],
  },
  {
    id: 'food-wine',
    name: 'EPCOT International Food & Wine Festival',
    shortName: 'Food & Wine',
    description: "Disney's longest festival featuring Global Marketplaces with cuisines from around the world, Eat to the Beat concerts, and culinary demonstrations.",
    dates: 'July - November',
    location: 'EPCOT',
    park: 'EPCOT',
    image: ASSETS.events.foodWine,
    highlights: ['Global Marketplaces', 'Eat to the Beat Concerts', 'Culinary Demos', 'Emile\'s Fromage'],
  },
  {
    id: 'mnsshp',
    name: "Mickey's Not So Scary Halloween Party",
    shortName: 'Halloween Party',
    description: 'A spooky celebration with trick-or-treating throughout the park, the famous Boo-to-You parade, and the Not So Spooky Spectacular fireworks show. Costumes encouraged!',
    dates: 'August - October',
    location: 'Magic Kingdom',
    park: 'Magic Kingdom',
    image: ASSETS.events.halloweenParty,
    highlights: ['Boo-to-You Parade', 'Trick-or-Treating', 'Rare Characters', 'Fireworks'],
  },
  {
    id: 'mvmcp',
    name: "Mickey's Very Merry Christmas Party",
    shortName: 'Christmas Party',
    description: "Celebrate the holidays with snow on Main Street, Mickey's Once Upon a Christmastime Parade, and complimentary cookies and cocoa throughout the park.",
    dates: 'November - December',
    location: 'Magic Kingdom',
    park: 'Magic Kingdom',
    image: ASSETS.events.christmasParty,
    highlights: ['Holiday Parade', 'Snow on Main Street', 'Holiday Fireworks', 'Free Treats'],
  },
  {
    id: 'jollywood-nights',
    name: 'Jollywood Nights',
    shortName: 'Jollywood Nights',
    description: 'A holiday celebration at Hollywood Studios featuring festive entertainment, character meet and greets, specialty food and beverages, and a merry atmosphere.',
    dates: 'November - December',
    location: 'Hollywood Studios',
    park: 'Hollywood Studios',
    image: ASSETS.events.jollywoodNights,
    highlights: ['Holiday Entertainment', 'Rare Characters', 'Festive Atmosphere', 'Special Food'],
  },
];

// First Time Guide Data
export const firstTimeGuideItems: FirstTimeGuideItem[] = [
  {
    title: 'Why Use a Travel Agent?',
    description: 'Working with a travel agent makes planning your Disney vacation stress-free and ensures you get the most magic for your money. Best of all, my services are completely complimentary!',
    tips: [
      'Expert knowledge from a former Cast Member',
      'I monitor and apply the latest promotions to your reservation',
      'Keep you on track for important deadlines and milestones',
      'Helpful planning guides sent directly to you',
      'All your questions answered with insider tips and tricks',
    ],
  },
  {
    title: 'My Disney Experience App',
    description: 'This essential app handles mobile ordering, Lightning Lane, park maps, wait times, and more. I\'ll send you a guide to help you get set up!',
    tips: [
      'I will Link your tickets and resort reservation',
      'I\'ll provide a Lightning Lane strategy guide',
      'I\'ll link all your Friends and Family to the application'
    ],
  },
  {
    title: 'What to Pack',
    description: 'Florida weather can be unpredictable and packing for Disney can require many things. I\'ll send you a comprehensive packing guide so you\'re prepared for everything!',
    tips: [
      'Customized packing list for your travel dates',
      'Must-have items for the parks',
      'Tips for staying comfortable all day',
    ],
  },
];

// Dining Categories
export const diningCategories = [
  {
    title: 'Character Dining',
    description: 'Meet beloved Disney characters while enjoying a delicious meal. Perfect for families!',
    examples: ["Chef Mickey's", "Cinderella's Royal Table", "'Ohana"],
  },
  {
    title: 'Signature Dining',
    description: 'Upscale dining experiences featuring exceptional cuisine and service.',
    examples: ["Victoria & Albert's", 'California Grill', 'Jiko'],
  },
  {
    title: 'Quick Service',
    description: 'Fast and casual dining options perfect for maximizing park time.',
    examples: ['Casey\'s Corner', 'Docking Bay 7', 'Pecos Bill'],
  },
];

// Lightning Lane Info
export const lightningLaneInfo = {
  multiPass: {
    title: 'Lightning Lane Multi Pass',
    description: 'Skip the standby line at multiple attractions throughout the day. Select your first 3 attractions in advance, then add more as you use them.',
    price: 'Starting at $15+ per person, per day (varies by date)',
    included: [
      'Most attractions at all 4 parks',
      'Book up to 3 attractions at a time',
      'Available 7 days in advance for resort guests',
    ],
  },
  singlePass: {
    title: 'Lightning Lane Single Pass',
    description: 'Purchase individual access to the most popular attractions not included in Multi Pass.',
    attractions: [
      'Tron Lightcycle Run',
      'Guardians of the Galaxy: Cosmic Rewind',
      'Avatar Flight of Passage',
    ],
    price: 'Starting at $12-25+ per attraction (varies by date)',
  },
};

// Dining Plans
export const diningPlans: DiningPlan[] = [
  {
    id: 'quick-service',
    title: 'Disney Quick-Service Dining Plan',
    summary: 'For families on the go all day, this is a fast and easy meal plan option—especially when you have little ones in tow. Dine at a variety of Quick-Service locations when you\'re ready to stop and enjoy a casual meal.',
    included: [
      '2 Quick-Service Meals per night of stay',
      '1 Snack/Nonalcoholic Drink per night of stay',
      '1 Resort-Refillable Drink Mug',
    ],
    modalContent: {
      intro: 'With the Disney Quick-Service Dining Plan you can dine at a variety of Quick-Service locations when you\'re ready to stop and enjoy a casual meal. Just order at a counter or register and then find a seat—no dining reservations required!',
      whatsIncluded: [
        '2 Quick-Service Meals (per night of stay)*',
        '1 Snack/Nonalcoholic Drink (per night of stay)*',
        '1 Resort-Refillable Drink Mug**',
      ],
      footnotes: [
        '* Specific number of meals and snacks are determined by the number of nights included in the package stay. Meals and snacks can be redeemed at any time during your stay. Unused meals and snacks will roll over day to day and expire at midnight on day of checkout. Meals and snacks are nontransferable between party members.',
        '** Resort-refillable mugs are eligible for refills from self-service beverage islands at any Disney Resort hotel Quick-Service location.',
      ],
      importantInfo: [
        'Beverages are included with each meal. Guests under 21 years of age may choose from a variety of nonalcoholic beverages. Guests 21 and older with valid identification may substitute for beer, wine and cocktails.',
        'Guests ages 3 to 9 must order from a children\'s menu, where available.',
        'Plan must be purchased for entire length of stay and for the entire party (ages 3 and up).',
      ],
      paceInfo: {
        title: 'Dine and Snack at Your Own Pace',
        description: 'Remember, meals and snacks can be redeemed at any time during your stay.',
        example: 'For example, if you book a 4-night package with a Disney Quick-Service Dining Plan, each Guest (ages 3 and up) in your party would receive 8 Quick-Service meals and 4 Snacks or Nonalcoholic Beverages—which can be used at any time during your 4-night stay.',
      },
      links: [
        { label: 'View Disney Quick-Service Dining Plan Details', url: 'https://disneyworld.disney.go.com/guest-services/quick-service-dining-plan/' },
        { label: 'View participating dining experiences', url: 'https://disneyworld.disney.go.com/dining/#/2025-quick-service-dining-plan/' },
      ],
    },
  },
  {
    id: 'dining-plan',
    title: 'Disney Dining Plan',
    summary: 'Want to slow down a little and savor special family moments over sit-down meals—or watch the kids light up during Character Dining? Experience classic dining options at both Quick-Service and Table-Service restaurants.',
    included: [
      '1 Quick-Service Meal per night of stay',
      '1 Table-Service Meal per night of stay',
      '1 Snack/Nonalcoholic Drink per night of stay',
      '1 Resort-Refillable Drink Mug',
    ],
    modalContent: {
      intro: 'This option allows you to easily plan meals around your family\'s schedule: Quick-Service when you\'re on the go and Table-Service when you\'re ready to savor the moment.',
      whatsIncluded: [
        '1 Quick-Service Meal (per night of stay)*',
        '1 Table-Service Meal (per night of stay)*',
        '1 Snack/Nonalcoholic Drink (per night of stay)*',
        '1 Resort-Refillable Drink Mug**',
      ],
      footnotes: [
        '* Specific number of meals and snacks are determined by the number of nights included in the package stay. Meals and snacks can be redeemed at any time during your stay. Unused meals and snacks will roll over day to day and expire at midnight on day of checkout. Meals and snacks are nontransferable between party members.',
        '** Resort-refillable mugs are eligible for refills from self-service beverage islands at any Disney Resort hotel Quick-Service location.',
      ],
      importantInfo: [
        'Beverages are included with each meal. Guests under 21 years of age may choose from a variety of nonalcoholic beverages. Guests 21 and older with valid identification may substitute for beer, wine and cocktails.',
        'Reservations at Table-Service restaurants are subject to availability and are highly recommended.',
        'Two table-service meals will be redeemed from the dining plan for each person dining at a Fine/Signature Dining experience, select Character Dining experience or a Dinner Show.',
        'Guests ages 3 to 9 must order from a children\'s menu, where available.',
        'Plan must be purchased for the entire length of stay and for the entire party (ages 3 and up).',
      ],
      paceInfo: {
        title: 'Dine and Snack at Your Own Pace',
        description: 'Remember, meals and snacks can be redeemed at any time during your stay.',
        example: 'For example, if you book a 4-night package with a Disney Dining Plan, each Guest (ages 3 and up) in your party would receive 4 Table-Service meals, 4 Quick-Service meals and 4 snacks or nonalcoholic beverages—which can be used at any time during your 4-night stay.',
      },
      links: [
        { label: 'Explore dining experiences available for booking', url: 'https://disneyworld.disney.go.com/dine-res/' },
        { label: 'View participating dining experiences', url: 'https://disneyworld.disney.go.com/dining/#/2025-dining-plan/' },
      ],
    },
  },
];
