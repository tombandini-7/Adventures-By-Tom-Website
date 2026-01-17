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

// Resort Category Interface
export interface WDWResortCategory {
  id: string;
  name: string;
  description: string;
  image: string;
  highlights: string[];
  examples: string[];
}

// WDW Resort Categories
export const wdwResortCategories: WDWResortCategory[] = [
   {
    id: 'villas',
    name: 'Deluxe Villas & Suites',
    description: 'Spacious home-away-from-home accommodations with full kitchens, living areas, and washer/dryers. Ideal for larger families or extended stays. Includes all Deluxe resort benefits.',
    image: ASSETS.wdw.resorts.villas,
    highlights: [
      'Full kitchens available',
      'Extended Evening Hours',
      'Multiple bedrooms',
      'Washer & dryer in unit',
    ],
    examples: ['Grand Floridian Villas', 'Riviera Resort', 'Bay Lake Tower', 'BoardWalk Villas'],
  },
  {
    id: 'deluxe',
    name: 'Deluxe Resorts',
    description: 'The ultimate in Disney luxury with exceptional theming, fine dining, and premium amenities. Deluxe guests enjoy Extended Evening Hours—exclusive access to select attractions after the parks close on select nights.',
    image: ASSETS.wdw.resorts.deluxe,
    highlights: [
      'Extended Evening Hours (exclusive)',
      'Premium dining options',
      'Exceptional theming & detail',
      'Monorail or boat transport',
    ],
    examples: ['Grand Floridian', 'Polynesian Village', 'Contemporary', 'Animal Kingdom Lodge'],
  },
  {
    id: 'moderate',
    name: 'Moderate Resorts',
    description: 'The perfect balance of value and comfort with beautiful theming, larger rooms, and table-service dining options. Great pools and recreational activities for the whole family.',
    image: ASSETS.wdw.resorts.moderate,
    highlights: [
      'Larger rooms than Value',
      'Table-service restaurants',
      'Themed pools with slides',
      'Food courts available',
    ],
    examples: ['Coronado Springs', 'Caribbean Beach', 'Port Orleans', 'Fort Wilderness Cabins'],
  },
  {
    id: 'value',
    name: 'Value Resorts',
    description: 'Experience Disney magic at an affordable price with fun, larger-than-life theming. Perfect for families who spend most of their time in the parks.',
    image: ASSETS.wdw.resorts.value,
    highlights: [
      'Most affordable option',
      'Fun, colorful theming',
      'Food court dining',
      'Large pools',
    ],
    examples: ['Pop Century', 'Art of Animation', 'All-Star Movies', 'All-Star Music'],
  }
];

// All Resort Guest Benefits (apply to all categories)
export const resortGuestBenefits = [
  'Early Entry: 30 minutes early access to all 4 theme parks daily',
  'Free parking at theme parks',
  'Complimentary Disney bus, monorail, and boat transportation',
  'Ability to charge purchases to your room with MagicBand+',
  'Package delivery to your resort from theme park shops',
];

// Deluxe-Exclusive Benefits
export const deluxeBenefits = [
  'Extended Evening Hours at Magic Kingdom & EPCOT on select nights',
  'Access exclusive attractions with shorter waits after park close',
  'Premium dining and lounges',
  'Walking distance or monorail/boat to parks (most locations)',
];

// Individual Resort Interface
export interface WDWResort {
  id: string;
  name: string;
  description: string;
  category: 'Deluxe Resort' | 'Deluxe Villa Resort' | 'Moderate Resort' | 'Value Resort' | 'Campground Resort';
  image_url: string;
  resort_area: string;
  youtube_url: string | null;
  phone: string;
  address: string;
  resort_website: string;
}

// All WDW Resorts Data
export const wdwResorts: WDWResort[] = [
  {
    id: '04cc6b42-e563-400d-8fdd-ecd7d1481992',
    name: "Disney's Contemporary Resort",
    description: "Retreat to this ultra-modern Disney Resort hotel and discover award-winning dining, spectacular views and dazzling pools. Whether you're staying in the iconic A-frame Contemporary tower or the nearby Garden Wing, you can walk to Magic Kingdom main gate or catch the Resort Monorail as it breezes through the tower. Inside, a 90-foot-tall mural by Disney Legend Mary Blair—responsible for the distinct look and feel of the 'it's a small world' attraction—celebrates the Grand Canyon and the American Southwest.",
    category: 'Deluxe Resort',
    image_url: 'https://mctzomkzqzywhophhpdr.supabase.co/storage/v1/object/public/app-assets/resorts/resorts/Walt%20Disney%20World/Contemporary%20Resort.jpg',
    resort_area: 'Magic Kingdom Resort Area',
    youtube_url: 'https://youtu.be/Fwz337GikMc?si=ZHn_90SkvoNiWuOj',
    phone: '4078241000',
    address: '4600 North World Drive, Lake Buena Vista, Florida 32830-8413',
    resort_website: 'https://disneyworld.disney.go.com/resorts/contemporary-resort/',
  },
  {
    id: '120c4ba2-e307-468e-b602-0538e6a2e0a9',
    name: "Disney's Wilderness Lodge",
    description: "Escape to the rustic majesty of America's Great Northwest. Inspired by turn-of-the-century National Park lodges, Disney's Wilderness Lodge celebrates American craftsmanship and honors the beauty of the untamed wilderness. Soak in the splendor of the great outdoors, from nature trails through pine forests to rocking chairs that overlook a murmuring creek. Inside, discover towering totem poles, headdresses and more, and enjoy the rustic elegance of the stone hearth and roaring fireplace.",
    category: 'Deluxe Resort',
    image_url: 'https://mctzomkzqzywhophhpdr.supabase.co/storage/v1/object/public/app-assets/resorts/resorts/Walt%20Disney%20World/Wilderness%20Lodge%20Resort.jpg',
    resort_area: 'Magic Kingdom Resort Area',
    youtube_url: null,
    phone: '4078243200',
    address: '901 Timberline Drive, Lake Buena Vista, Florida 32830-8426',
    resort_website: 'https://disneyworld.disney.go.com/resorts/wilderness-lodge-resort/',
  },
  {
    id: '347c1905-9376-4f26-a252-9afa61d31529',
    name: "Disney's BoardWalk Inn",
    description: "Experience the charm and whimsy of turn-of-the-century Atlantic City at this waterfront Resort hotel. Make a splash at Luna Park Pool and delight in a massage at the state-of-the-art fitness center. Discover carnival games, unique dining and exciting nightlife on the Coney Island-style boardwalk. Strung like saltwater taffy along the shimmering Crescent Lake, Disney's BoardWalk Inn is located within walking distance to both EPCOT and Disney's Hollywood Studios.",
    category: 'Deluxe Resort',
    image_url: 'https://mctzomkzqzywhophhpdr.supabase.co/storage/v1/object/public/app-assets/resorts/resorts/Walt%20Disney%20World/Boardwalk%20Inn%20Villas.jpeg',
    resort_area: 'EPCOT Resort Area',
    youtube_url: 'https://www.youtube.com/watch?v=5LjUcQfqHxI',
    phone: '4079396200',
    address: '2100 Epcot Resorts Blvd, Lake Buena Vista, Florida 32830-8442',
    resort_website: 'https://disneyworld.disney.go.com/resorts/boardwalk-inn/',
  },
  {
    id: '5ab479b1-0757-42a8-9e95-39ca6024eb28',
    name: "Disney's Yacht Club Resort",
    description: "Delight in the formal grace of a grand New England-style yacht club at this lakeside hotel. Relax in the inviting elegance of a plush lobby replete with nautical touches, explore the whimsical Stormalong Bay and rent a variety of watercraft from Bayside Marina. Sharing many amenities with its pastel-toned sister, Disney's Beach Club Resort, Disney's Yacht Club Resort is walking distance to EPCOT and a convenient boat ride to Disney's Hollywood Studios.",
    category: 'Deluxe Resort',
    image_url: 'https://mctzomkzqzywhophhpdr.supabase.co/storage/v1/object/public/app-assets/resorts/resorts/Walt%20Disney%20World/Yacht%20Club%20Resort.jpg',
    resort_area: 'EPCOT Resort Area',
    youtube_url: 'https://www.youtube.com/watch?v=7f03HZYjKoU',
    phone: '4079347000',
    address: '1700 Epcot Resorts Boulevard, Lake Buena Vista, Florida 32830-8407',
    resort_website: 'https://disneyworld.disney.go.com/resorts/yacht-club-resort/',
  },
  {
    id: 'de6007fe-5e85-48dd-a027-a48ee32bb2bf',
    name: "Disney's Beach Club Resort",
    description: "Discover the casual elegance of this charming, New England-style Resort hotel. Savor exquisite dining, and explore the pools, lagoons and spas of Stormalong Bay. Sail around Crescent Lake on a rented mini-powerboat, and experience the luxurious comfort of a Club Level Suite. Sharing many amenities with its more formal sister, Disney's Yacht Club Resort, Disney's Beach Club Resort is walking distance to EPCOT and a convenient boat ride to Disney's Hollywood Studios.",
    category: 'Deluxe Resort',
    image_url: 'https://mctzomkzqzywhophhpdr.supabase.co/storage/v1/object/public/app-assets/resorts/resorts/Walt%20Disney%20World/Beach%20Club%20Villas.jpeg',
    resort_area: 'EPCOT Resort Area',
    youtube_url: 'https://www.youtube.com/watch?v=7f03HZYjKoU',
    phone: '4079348000',
    address: '1800 Epcot Resorts Boulevard, Lake Buena Vista, Florida 32830-8443',
    resort_website: 'https://disneyworld.disney.go.com/resorts/beach-club-resort/',
  },
  {
    id: '5b23fd03-d7bb-4039-ae94-c59503213cfd',
    name: "Disney's Animal Kingdom Lodge",
    description: "Step into the heart of Africa at this magnificent Resort hotel. Inspired by the traditional African kraal, the horseshoe-curved design provides spectacular views of 4 lush savannas that over 200 hoofed animals and birds call home. Delight in dazzling pool areas, exciting animal programs and one of the largest collections of African art in the United States as you experience your own African safari adventure with a touch of Disney magic.",
    category: 'Deluxe Resort',
    image_url: 'https://mctzomkzqzywhophhpdr.supabase.co/storage/v1/object/public/app-assets/resorts/resorts/Walt%20Disney%20World/Animal%20Kingdom%20Lodge%20Full.jpeg',
    resort_area: "Disney's Animal Kingdom Resort Area",
    youtube_url: null,
    phone: '4079383000',
    address: '2901 Osceola Parkway, Lake Buena Vista, Florida 32830-8410',
    resort_website: 'https://disneyworld.disney.go.com/resorts/animal-kingdom-lodge/',
  },
  {
    id: '5c45c194-dd83-40e9-8b6d-f31a716f9141',
    name: "Disney's Polynesian Village Resort",
    description: "Celebrate the spirit of the South Pacific at this oasis of tropical palms, lush vegetation and so much more. From moonlit nights immersed in the outdoor island ambience to the exotic tastes of our world-class restaurants, discover the signature tropical atmosphere that's made Disney's Polynesian Village Resort a favorite Disney destination since 1971.",
    category: 'Deluxe Resort',
    image_url: "https://mctzomkzqzywhophhpdr.supabase.co/storage/v1/object/public/app-assets/resorts/resorts/Walt%20Disney%20World/Disney's%20Polynesian%20Resort%20-%20Full.jpg",
    resort_area: 'Magic Kingdom Resort Area',
    youtube_url: 'https://youtu.be/IHsSQm-Woj4?si=CyW3YNHXllOeYfo_',
    phone: '4078242000',
    address: '1600 Seven Seas Drive, Lake Buena Vista, Florida 32830-8423',
    resort_website: 'https://disneyworld.disney.go.com/resorts/polynesian-resort/',
  },
  {
    id: '846a295b-182e-419d-ae83-373a999f44b9',
    name: "Disney's Grand Floridian Resort & Spa",
    description: "Victorian elegance meets modern sophistication at this lavish Disney Resort hotel. Unwind outdoors, indulge in a luxurious massage and watch evening fireworks light up the sky over Cinderella Castle. Just one stop to Magic Kingdom park on the complimentary Resort Monorail, this timeless Victorian-style marvel evokes Palm Beach's golden era.",
    category: 'Deluxe Resort',
    image_url: "https://mctzomkzqzywhophhpdr.supabase.co/storage/v1/object/public/app-assets/resorts/resorts/Walt%20Disney%20World/Grand%20Floridian%20Resort%20&%20Spa.jpg",
    resort_area: 'Magic Kingdom Resort Area',
    youtube_url: 'https://youtu.be/Ft9c1fWy834',
    phone: '4078243000',
    address: '4401 Floridian Way, Lake Buena Vista, Florida 32830-8451',
    resort_website: 'https://disneyworld.disney.go.com/resorts/grand-floridian-resort-and-spa/',
  },
  {
    id: '2a8b05cd-3635-4329-baed-31591bc9b270',
    name: 'Four Seasons Resort Orlando at Walt Disney World Resort',
    description: "Discover a AAA Five Diamond-rated resort that combines the ultimate in luxury accommodations with a dash of Disney enchantment. Located within Walt Disney World Resort, this lakeside retreat is an idyllic getaway with impeccably designed rooms and suites—along with exclusive amenities and In-Room Celebrations to delight all ages and interests. Delectable dining awaits you across 6 restaurants—from the Disney Character Breakfast at Ravello to the Michelin-star experience at Capa steakhouse. Rejuvenating recreation abounds. Make a splash at the 5-acre Explorer Island water park—or savor serenity at the adults-only pool.",
    category: 'Deluxe Resort',
    image_url: 'https://mctzomkzqzywhophhpdr.supabase.co/storage/v1/object/public/app-assets/resorts/resorts/Walt%20Disney%20World/Walt%20Disney%20World%20Four%20Seasons%20Resort.jpg',
    resort_area: 'Disney Springs Resort Area',
    youtube_url: null,
    phone: '4073137777',
    address: '10100 Dream Tree Blvd, Lake Buena Vista, Florida 32836',
    resort_website: 'https://disneyworld.disney.go.com/resorts/more/four-seasons/',
  },
  {
    id: '6b11eb99-be3a-4d88-a5f1-eec68fdc02f9',
    name: 'Walt Disney World Swan Hotel',
    description: "This sister of the Walt Disney World Dolphin Hotel employs the same modern design sensibilities with a nod to Renaissance elegance. Clamshell fountains and graceful twin swans preside over swaying palm trees, verdant lawns and the gleaming shores of Crescent Lake, while a wave motif with a coral-and-aqua color scheme embodies Florida's unique subtropical style.",
    category: 'Deluxe Resort',
    image_url: 'https://mctzomkzqzywhophhpdr.supabase.co/storage/v1/object/public/app-assets/resorts/resorts/Walt%20Disney%20World/Walt%20Disney%20World%20Swan%20Hotel%20(Marriott).jpg',
    resort_area: 'EPCOT Resort Area',
    youtube_url: null,
    phone: '4079343000',
    address: '1200 Epcot Resorts Boulevard, Lake Buena Vista, Florida 32830',
    resort_website: 'https://disneyworld.disney.go.com/resorts/swan-hotel/',
  },
  {
    id: '90e0ca5e-1535-45de-a936-9bd7d0ebdec5',
    name: 'Walt Disney World Swan Reserve',
    description: "Escape to a luxurious yet tranquil oasis—and convenient home base for your Walt Disney World vacation. With EPCOT and Disney's Hollywood Studios within walking distance, you can flow effortlessly from the excitement of the theme parks to the relaxation of a lavishly appointed hotel room at this Autograph Collection hotel.",
    category: 'Deluxe Resort',
    image_url: 'https://mctzomkzqzywhophhpdr.supabase.co/storage/v1/object/public/app-assets/resorts/resorts/Walt%20Disney%20World/Walt%20Disney%20World%20Swan%20Reserve%20Hotel%20(Marriott).jpg',
    resort_area: 'EPCOT Resort Area',
    youtube_url: null,
    phone: '8002271500',
    address: '1255 Epcot Resorts Blvd, Lake Buena Vista, Florida 32830',
    resort_website: 'https://disneyworld.disney.go.com/resorts/swan-reserve/',
  },
  {
    id: '92ed4a34-824a-4af4-b041-4f991285d3c8',
    name: 'Walt Disney World Dolphin Hotel',
    description: "With deluxe accommodations inspired by Florida itself, Walt Disney World Dolphin Hotel juxtaposes modern architectural silhouettes alongside Renaissance flourishes—most notably, the twin stylized dolphin statues gracing its rooftop. A tropical palette of aqua and coral, elaborate fountains, towering palm trees and grassy expanses render the hotel as idyllic as it is striking.",
    category: 'Deluxe Resort',
    image_url: 'https://mctzomkzqzywhophhpdr.supabase.co/storage/v1/object/public/app-assets/resorts/resorts/Walt%20Disney%20World/Walt%20Disney%20World%20Dolphin%20Hotel%20(Marriott).jpeg',
    resort_area: 'EPCOT Resort Area',
    youtube_url: null,
    phone: '4079344000',
    address: '1500 Epcot Resorts Boulevard, Lake Buena Vista, Florida 32830',
    resort_website: 'https://disneyworld.disney.go.com/resorts/dolphin-hotel/',
  },
  // Deluxe Villa Resorts
  {
    id: '1dc391f4-20b3-4808-a925-6929986ba863',
    name: "Disney's BoardWalk Villas",
    description: "Timeless elegance meets old-fashioned charm at this waterfront Resort hotel. Delight in saltwater taffy-colored cottages, private courtyards and picturesque gardens—plus the ragtime sounds and carnival pastimes of the exciting Coney Island-style boardwalk. Reminiscent of turn-of-the-century Atlantic City, Disney's BoardWalk Villas is located within walking distance to both EPCOT and Disney's Hollywood Studios.",
    category: 'Deluxe Villa Resort',
    image_url: 'https://mctzomkzqzywhophhpdr.supabase.co/storage/v1/object/public/app-assets/resorts/resorts/Walt%20Disney%20World/Boardwalk%20Inn%20Villas.jpeg',
    resort_area: 'EPCOT Resort Area',
    youtube_url: 'https://www.youtube.com/watch?v=5LjUcQfqHxI',
    phone: '4079396200',
    address: '2100 Epcot Resorts Blvd, Lake Buena Vista, Florida 32830-8442',
    resort_website: 'https://disneyworld.disney.go.com/resorts/boardwalk-villas/',
  },
  {
    id: '281fe891-fe37-43b6-a1fc-4e1beca3b2f5',
    name: "Bay Lake Tower at Disney's Contemporary Resort",
    description: "Warm luxury meets modern elegance at this lakeside Resort hotel located in walking distance to Magic Kingdom park. Delight in studios and multi-bedroom villas, kitchens or kitchenettes and dramatic views that may include old-growth cypress trees, the shimmering Bay Lake, the lush courtyard or Cinderella Castle. Enjoy enchanting pools and award-winning dining—plus the extensive offerings of Disney's Contemporary Resort, connected by the convenient Sky Way Bridge.",
    category: 'Deluxe Villa Resort',
    image_url: 'https://mctzomkzqzywhophhpdr.supabase.co/storage/v1/object/public/app-assets/resorts/resorts/Walt%20Disney%20World/Bay%20Lake%20Tower.jpeg',
    resort_area: 'Magic Kingdom Resort Area',
    youtube_url: 'https://youtu.be/Fwz337GikMc?si=ZHn_90SkvoNiWuOj',
    phone: '4078241000',
    address: '4600 North World Drive, Lake Buena Vista, Florida 32830-8413',
    resort_website: 'https://disneyworld.disney.go.com/resorts/bay-lake-tower-at-contemporary/',
  },
  {
    id: '3404a1c4-56ef-4249-a655-82d5d330d78f',
    name: "The Cabins at Disney's Fort Wilderness Resort",
    description: "Nestled on 750 acres of pine and cypress forest, The Cabins at Disney's Fort Wilderness Resort – A Disney Vacation Club Resort evokes the timeless beauty of the American frontier. Each morning you can let the magic of the outdoors shine through as you draw the curtains back to reveal floor-to-ceiling windows. Luxuriate in accommodations that provide a fresh, elevated take on the cabin experience—with a fully equipped kitchen, large flat-screen TVs and additional comforts and conveniences.",
    category: 'Deluxe Villa Resort',
    image_url: "https://mctzomkzqzywhophhpdr.supabase.co/storage/v1/object/public/app-assets/resorts/resorts/Walt%20Disney%20World/Cabins%20at%20Fort%20Wilderness.jpeg",
    resort_area: 'Magic Kingdom Resort Area',
    youtube_url: null,
    phone: '4078242900',
    address: '4510 North Fort Wilderness Trail, Lake Buena Vista, Florida 32830',
    resort_website: 'https://disneyworld.disney.go.com/resorts/dvc-cabins-at-fort-wilderness-resort/',
  },
  {
    id: '4556b2e4-366a-4a46-97e1-443cb12990be',
    name: "Boulder Ridge Villas at Disney's Wilderness Lodge",
    description: "Recalling the 1860's railroad hotels of the American West, Boulder Ridge Villas offer the comforts of home amid the rustic beauty of Disney's Wilderness Lodge. Dine on traditional Pacific Northwest cuisine, explore trails through lush meadows and delight in the enchanting Copper Creek Springs Pool. Just a breezy boat ride to Magic Kingdom park, this Resort hotel celebrates the ethos of traditional craftsmanship and the great outdoors.",
    category: 'Deluxe Villa Resort',
    image_url: 'https://mctzomkzqzywhophhpdr.supabase.co/storage/v1/object/public/app-assets/resorts/resorts/Walt%20Disney%20World/Boulder%20Ridge%20Wilderness%20Lodge.jpg',
    resort_area: 'Magic Kingdom Resort Area',
    youtube_url: null,
    phone: '4078243200',
    address: '901 Timberline Drive, Lake Buena Vista, Florida 32830-8426',
    resort_website: 'https://disneyworld.disney.go.com/resorts/boulder-ridge-villas-at-wilderness-lodge/',
  },
  {
    id: '6275fa21-7e86-4425-8f06-b97ae659640e',
    name: "Disney's Saratoga Springs Resort & Spa",
    description: "Inspired by historic Saratoga Springs—a late-1800s' New York retreat famous for its spas and horse racing—this charming, Victorian-style Resort hotel is nestled between rolling golf course greens and the shimmering Lake Buena Vista. Delight in stately Studios and multi-bedroom Villas, dazzling pools and a spa.",
    category: 'Deluxe Villa Resort',
    image_url: "https://mctzomkzqzywhophhpdr.supabase.co/storage/v1/object/public/app-assets/resorts/resorts/Walt%20Disney%20World/Saratoga%20Springs%20Resort%20&%20Spa.jpeg",
    resort_area: 'Disney Springs Resort Area',
    youtube_url: 'https://youtu.be/UF_GwYzfdlg?si=yoI-1croJFVQGf2C',
    phone: '4078271100',
    address: '1960 Broadway, Lake Buena Vista, Florida 32830-8446',
    resort_website: 'https://disneyworld.disney.go.com/resorts/saratoga-springs-resort-and-spa/',
  },
  {
    id: '8438e322-e3b4-4cf1-beb7-789da1e9fb8a',
    name: "Disney's Animal Kingdom Villas - Jambo House",
    description: "Experience your own African safari adventure! This Resort hotel's horseshoe-curved design, inspired by the traditional African kraal, provides spectacular views of 4 lush savannas, where over 200 hoofed animals and birds freely roam. Enjoy the comforts of home in our spacious Studios and multi-bedroom Villas—and indulge in Club Level service for added luxury!",
    category: 'Deluxe Villa Resort',
    image_url: 'https://mctzomkzqzywhophhpdr.supabase.co/storage/v1/object/public/app-assets/resorts/resorts/Walt%20Disney%20World/Animal%20Kingdom%20Villas%20-%20Jambo%20House.jpg',
    resort_area: "Disney's Animal Kingdom Resort Area",
    youtube_url: null,
    phone: '4079383000',
    address: '2901 Osceola Parkway, Lake Buena Vista, Florida 32830-8410',
    resort_website: 'https://disneyworld.disney.go.com/resorts/animal-kingdom-villas-jambo/',
  },
  {
    id: 'bbc980c9-4399-43b5-be63-5a03966db61a',
    name: "Disney's Animal Kingdom Villas - Kidani Village",
    description: "Escape on your own African safari adventure at this magnificent Resort hotel. Inspired by the traditional African kraal, the horseshoe-curved design offers exquisite views of lush savannas—where over 30 species of African wildlife freely roam. Delight in dazzling pool areas, exciting animal programs and all the comforts of home in our spacious Studios and multi-bedroom Villas.",
    category: 'Deluxe Villa Resort',
    image_url: 'https://mctzomkzqzywhophhpdr.supabase.co/storage/v1/object/public/app-assets/resorts/resorts/Walt%20Disney%20World/Animal%20Kingdom%20Villas%20-%20Kidani%20Village.jpg',
    resort_area: "Disney's Animal Kingdom Resort Area",
    youtube_url: null,
    phone: '4079387400',
    address: '3701 Osceola Parkway, Lake Buena Vista, Florida 32830-8445',
    resort_website: 'https://disneyworld.disney.go.com/resorts/animal-kingdom-villas-kidani/',
  },
  {
    id: '999c8253-007c-43dd-88bd-9bd70b825764',
    name: "Disney's Old Key West Resort",
    description: "Experience the romance of the Florida Keys at this tranquil community of Conch Flats—a sprawling island hamlet with shimmering waterways, swaying palm trees and manicured golf-course fairways. Delight in sun-soaked pools, casual dining and such amenities as fully equipped kitchens or kitchenettes.",
    category: 'Deluxe Villa Resort',
    image_url: 'https://mctzomkzqzywhophhpdr.supabase.co/storage/v1/object/public/app-assets/resorts/resorts/Walt%20Disney%20World/Old%20Key%20West%20Resort.jpeg',
    resort_area: 'Disney Springs Resort Area',
    youtube_url: 'https://youtu.be/P4UD7iFmQck?si=0GceQH-orhpTKu5z',
    phone: '4078277700',
    address: '1510 North Cove Road, Lake Buena Vista, Florida 32830-8421',
    resort_website: 'https://disneyworld.disney.go.com/resorts/old-key-west-resort/',
  },
  {
    id: 'b18a1571-2a94-47a4-8238-db7dc269355c',
    name: "Disney's Beach Club Villas",
    description: "Leisure, elegance and romance abound at this charming New England-style beach hotel—in easy walking distance to EPCOT and a boat ride to Disney's Hollywood Studios. Enjoy the pools, spas and lagoons of Stormalong Bay, and the many amenities shared with Disney's Yacht & Beach Club Resorts.",
    category: 'Deluxe Villa Resort',
    image_url: 'https://mctzomkzqzywhophhpdr.supabase.co/storage/v1/object/public/app-assets/resorts/resorts/Walt%20Disney%20World/Beach%20Club%20Villas.jpeg',
    resort_area: 'EPCOT Resort Area',
    youtube_url: 'https://www.youtube.com/watch?v=7f03HZYjKoU',
    phone: '4079348000',
    address: '1800 Epcot Resorts Boulevard, Lake Buena Vista, Florida 32830-8443',
    resort_website: 'https://disneyworld.disney.go.com/resorts/beach-club-villas/',
  },
  {
    id: 'b27335be-eab7-4405-a24d-4e467a9a9565',
    name: "Disney's Riviera Resort",
    description: "Enchantment awaits you at a Resort hotel that's inspired by Europe and imagined by Disney. Here, you can delight in exhilarating activities, delectable dining and stylish accommodations—from cozy Tower Studios to spacious villas with up to 3 bedrooms.",
    category: 'Deluxe Villa Resort',
    image_url: 'https://mctzomkzqzywhophhpdr.supabase.co/storage/v1/object/public/app-assets/resorts/resorts/Walt%20Disney%20World/Riviera%20Resort.jpeg',
    resort_area: 'EPCOT Resort Area',
    youtube_url: 'https://www.youtube.com/watch?v=c_FVx4Bhx9M',
    phone: '4078287030',
    address: '1080 Esplanade Avenue, Lake Buena Vista, Florida 32830',
    resort_website: 'https://disneyworld.disney.go.com/resorts/riviera-resort/',
  },
  {
    id: 'c4b077fa-d397-4713-a8ed-165ee6a48a52',
    name: "Copper Creek Villas & Cabins at Disney's Wilderness Lodge",
    description: "Welcome to new idyllic retreat that evokes a rustic-elegant vibe—a perfect nod to the rich and pioneering heritage of the Pacific Northwest. Consider this your new go-to vacation base camp when pining for serene surroundings located just around the river bend from Magic Kingdom park. Standout features include a full range of accommodations with modern amenities—from Deluxe Studios to 26 waterfront Cabins with wraparound porches.",
    category: 'Deluxe Villa Resort',
    image_url: 'https://mctzomkzqzywhophhpdr.supabase.co/storage/v1/object/public/app-assets/resorts/resorts/Walt%20Disney%20World/Copper%20Creek%20Villas%20-%20Wilderness%20Lodge.jpg',
    resort_area: 'Magic Kingdom Resort Area',
    youtube_url: null,
    phone: '4078243200',
    address: '901 Timberline Drive, Lake Buena Vista, Florida 32830-8426',
    resort_website: 'https://disneyworld.disney.go.com/resorts/copper-creek-villas-and-cabins/',
  },
  {
    id: 'c7055c2a-0fd7-4830-ad26-36f2c3fd00bd',
    name: "Disney's Polynesian Villas & Bungalows",
    description: "Escape to an enchanting oasis of swaying palms, tropical surroundings and an island ambience that evokes the languid spirit of the South Pacific. Disney's Polynesian Villas & Bungalows makes its home at one of the original—and legendary—Walt Disney World Resort hotels.",
    category: 'Deluxe Villa Resort',
    image_url: 'https://mctzomkzqzywhophhpdr.supabase.co/storage/v1/object/public/app-assets/resorts/resorts/Walt%20Disney%20World/Island%20Tower%20-%20Polynesian%20Villas%20&%20Bungalows.jpeg',
    resort_area: 'Magic Kingdom Resort Area',
    youtube_url: 'https://youtu.be/IHsSQm-Woj4?si=CyW3YNHXllOeYfo_',
    phone: '4078243500',
    address: '1600 Seven Seas Drive, Lake Buena Vista, Florida 32830-8423',
    resort_website: 'https://disneyworld.disney.go.com/resorts/polynesian-villas-bungalows/',
  },
  {
    id: 'cbdbf61d-52bf-46fc-9f4d-09927d0c05aa',
    name: "The Villas at Disney's Grand Floridian Resort & Spa",
    description: "Revel in Victorian-style splendor and enjoy the comforts of home at this elegant Disney Resort hotel. Stay in a stately deluxe studio or multi-bedroom villa. Indulge in a luxurious massage at the full-service spa or receive a grooming service in the salon. Unwind outdoors as evening fireworks light up the sky over Cinderella Castle. Just one stop from Magic Kingdom park on the complimentary Resort Monorail, this timeless marvel evokes Palm Beach's golden era.",
    category: 'Deluxe Villa Resort',
    image_url: "https://mctzomkzqzywhophhpdr.supabase.co/storage/v1/object/public/app-assets/resorts/resorts/Walt%20Disney%20World/Villas%20at%20Disney's%20Grand%20Floridian%20Resort.jpg",
    resort_area: 'Magic Kingdom Resort Area',
    youtube_url: 'https://youtu.be/Ft9c1fWy834',
    phone: '4078243000',
    address: '4401 Floridian Way, Lake Buena Vista, Florida 32830-8451',
    resort_website: 'https://disneyworld.disney.go.com/resorts/villas-at-grand-floridian-resort-and-spa/',
  },
  // Moderate Resorts
  {
    id: '31502f0a-7f69-48cc-a832-f74cb70b7650',
    name: "Disney's Coronado Springs Resort",
    description: "Celebrate the unique blend of Spanish, Mexican and Southwest American cultures at Disney's Coronado Springs Resort. This beautiful lakeside oasis offers classic influences, Disney touches and modern comforts to energize and inspire.",
    category: 'Moderate Resort',
    image_url: 'https://mctzomkzqzywhophhpdr.supabase.co/storage/v1/object/public/app-assets/resorts/resorts/Walt%20Disney%20World/Gran%20Destino%20Hotel.jpg',
    resort_area: "Disney's Animal Kingdom Resort Area",
    youtube_url: 'https://www.youtube.com/watch?v=uwDrm398wP0',
    phone: '4079391000',
    address: '1001 West Buena Vista Drive, Lake Buena Vista, Florida 32830-8403',
    resort_website: 'https://disneyworld.disney.go.com/resorts/coronado-springs-resort/',
  },
  {
    id: '4d775edf-858c-4c76-929a-54d42e045a69',
    name: "Disney's Port Orleans Resort - Riverside",
    description: "From the stately white-column mansions of Magnolia Bend to Alligator Bayou's quaint backwoods cottages, delight in a picturesque setting that evokes the romance of rural Louisiana. Take a short walk along the Sassagoula River to Disney's Port Orleans Resort – French Quarter, known for Southern specialties like gumbo, jambalaya and beignets.",
    category: 'Moderate Resort',
    image_url: "https://mctzomkzqzywhophhpdr.supabase.co/storage/v1/object/public/app-assets/resorts/resorts/Walt%20Disney%20World/Disney's%20Port%20Orleans%20-%20Riverside%20-%20Full.jpg",
    resort_area: 'Disney Springs Resort Area',
    youtube_url: null,
    phone: '4079346000',
    address: '1251 Riverside Drive, Lake Buena Vista, Florida 32830-8514',
    resort_website: 'https://disneyworld.disney.go.com/resorts/port-orleans-resort-riverside/',
  },
  {
    id: '69b2082b-ccdc-4050-ac83-4182d8191df1',
    name: "Disney's Port Orleans Resort - French Quarter",
    description: "Revel in the romance and pageantry of New Orleans's historic French Quarter at this Moderate Resort hotel. Discover cobblestone streets, gas lamps, wrought-iron balconies and fragrant magnolia blossoms, along with colorful Mardi Gras characters and the sounds of jazz. Then stroll along the lushly landscaped Sassagoula River to Disney's Port Orleans Resort – Riverside, where the bayou beckons, as do Cajun and Creole specialties.",
    category: 'Moderate Resort',
    image_url: "https://mctzomkzqzywhophhpdr.supabase.co/storage/v1/object/public/app-assets/resorts/resorts/Walt%20Disney%20World/Disney's%20Port%20Orleans%20-%20French%20Quarter%20-%20Full.jpg",
    resort_area: 'Disney Springs Resort Area',
    youtube_url: null,
    phone: '4079345000',
    address: '2201 Orleans Drive, Lake Buena Vista, Florida 32830-8424',
    resort_website: 'https://disneyworld.disney.go.com/resorts/port-orleans-resort-french-quarter/',
  },
  {
    id: '9eb4c0bb-b02b-4c3d-bf3d-c455a08c36dc',
    name: "Disney's Caribbean Beach Resort",
    description: "Discover a world where life slows to a leisurely pace and worries melt away amidst Calypso rhythms. Awash with vibrant colors and lush landscapes, Disney's Caribbean Beach Resort transports Guests to a relaxing paradise that captures the essence of 5 distinct islands: Barbados, Jamaica, Martinique, Trinidad and Aruba. Celebrate the spirit of the Caribbean with blissful sights and fun-filled activities—including colonial forts, lively markets, pristine beaches, splashy florals and swaying hammocks—sure to awaken the imagination.",
    category: 'Moderate Resort',
    image_url: 'https://mctzomkzqzywhophhpdr.supabase.co/storage/v1/object/public/app-assets/resorts/resorts/Walt%20Disney%20World/Caribbean%20Beach%20Resort.jpg',
    resort_area: 'EPCOT Resort Area',
    youtube_url: 'https://www.youtube.com/watch?v=wlvrL4MfwOg',
    phone: '4079343400',
    address: '1114 Cayman Way, Lake Buena Vista, Florida 32830-8411',
    resort_website: 'https://disneyworld.disney.go.com/resorts/caribbean-beach-resort/',
  },
  // Value Resorts
  {
    id: '6c5e2aa7-6600-462a-bd0e-962dd5838ef4',
    name: "Disney's Art of Animation Resort",
    description: "Be surrounded in the artistry, enchantment and magic of Disney and Pixar movies. Stay at a Disney Resort hotel that invites you to explore the storybook landscapes seen in such classics as Finding Nemo, Cars, The Lion King and The Little Mermaid. From delightfully themed family suites to wondrously detailed courtyards, Disney's Art of Animation draws you and your family in to become a part of some of your animated favorites.",
    category: 'Value Resort',
    image_url: 'https://mctzomkzqzywhophhpdr.supabase.co/storage/v1/object/public/app-assets/resorts/resorts/Walt%20Disney%20World/Art%20of%20Animation%20Resort.jpg',
    resort_area: 'Wide World of Sports Resort Area',
    youtube_url: 'https://youtu.be/zTJc3A8vOmk',
    phone: '4079387000',
    address: '1850 Animation Way, Lake Buena Vista, Florida 32830-8400',
    resort_website: 'https://disneyworld.disney.go.com/resorts/art-of-animation-resort/',
  },
  {
    id: '8d9b3391-224e-48ad-b982-fca08d815722',
    name: "Disney's All-Star Music Resort",
    description: "Let the rhythm move you at this Resort hotel that pays homage to some of the world's most popular music genres, including country, jazz, rock 'n' roll, calypso and Broadway-style show tunes. Large-sized, music-inspired icons outside and subtle song-and dance surprises inside provide a harmonious setting for music lovers of all ages.",
    category: 'Value Resort',
    image_url: 'https://mctzomkzqzywhophhpdr.supabase.co/storage/v1/object/public/app-assets/resorts/resorts/Walt%20Disney%20World/All%20Star%20Music%20Hotel.jpg',
    resort_area: "Disney's Animal Kingdom Resort Area",
    youtube_url: null,
    phone: '4079396000',
    address: '1801 West Buena Vista Drive, Lake Buena Vista, Florida 32830-8436',
    resort_website: 'https://disneyworld.disney.go.com/resorts/all-star-music-resort/',
  },
  {
    id: 'a0f52a8d-1f10-4836-88ac-6485a87872ef',
    name: "Disney's Pop Century Resort",
    description: "Experience the unforgettable fads of the 1950s through the 1990s all over again. From yo-yos and Play-Doh to Rubik's Cube and rollerblades, this Resort hotel salutes the timeless fashions, catch phrases, toys and dances that captivated the world through the decades.",
    category: 'Value Resort',
    image_url: 'https://mctzomkzqzywhophhpdr.supabase.co/storage/v1/object/public/app-assets/resorts/resorts/Walt%20Disney%20World/Pop%20Century%20Resort.jpg',
    resort_area: 'Wide World of Sports Resort Area',
    youtube_url: null,
    phone: '4079384000',
    address: '1050 Century Drive, Lake Buena Vista, Florida 32830-8433',
    resort_website: 'https://disneyworld.disney.go.com/resorts/pop-century-resort/',
  },
  {
    id: 'c4ff2a90-fef1-492e-ad3a-eb0393a44b25',
    name: "Disney's All-Star Sports Resort",
    description: "Get in the game at this Resort hotel that salutes the world of competitive sports, including baseball, basketball, football, surfing and tennis. Go the distance and don't be afraid to celebrate your inner fan amid sporty décor starring some of your favorite Disney characters.",
    category: 'Value Resort',
    image_url: 'https://mctzomkzqzywhophhpdr.supabase.co/storage/v1/object/public/app-assets/resorts/resorts/Walt%20Disney%20World/All%20Star%20Sports%20Hotel.jpg',
    resort_area: "Disney's Animal Kingdom Resort Area",
    youtube_url: null,
    phone: '4079395000',
    address: '1701 West Buena Vista Drive, Lake Buena Vista, Florida 32830-8401',
    resort_website: 'https://disneyworld.disney.go.com/resorts/all-star-sports-resort/',
  },
  {
    id: 'e1a4ed32-7d7e-4060-b571-f464378e0f47',
    name: "Disney's All-Star Movies Resort",
    description: "Imagine yourself sharing the spotlight with some of your favorite Disney friends, as you headline your very own all-star adventure. Stay at a Disney Resort hotel that salutes the legends of Disney films—from the dotted pups of 101 Dalmatians to the playful toys of Andy's Room— with whimsical, larger-than-life décor.",
    category: 'Value Resort',
    image_url: 'https://mctzomkzqzywhophhpdr.supabase.co/storage/v1/object/public/app-assets/resorts/resorts/Walt%20Disney%20World/All%20Star%20Movies%20Hotel.jpg',
    resort_area: "Disney's Animal Kingdom Resort Area",
    youtube_url: null,
    phone: '4079397000',
    address: '1901 West Buena Vista Drive, Lake Buena Vista, Florida 32830-8412',
    resort_website: 'https://disneyworld.disney.go.com/resorts/all-star-movies-resort/',
  },
  // Campground Resort
  {
    id: '3aaa0661-272b-46b2-81c7-a106d3aea53e',
    name: "The Campsites at Disney's Fort Wilderness Resort",
    description: "Camp amid the magic of the great outdoors. Disney's Fort Wilderness Resort & Campground evokes the timeless beauty of the American frontier, with deer, rabbits, ducks and armadillos roaming the Resort's 750 acres of pine and cypress forest. Discover charming woodland trails, spectacular pool areas and rip-roarin' entertainment at this picturesque backcountry retreat.",
    category: 'Campground Resort',
    image_url: "https://mctzomkzqzywhophhpdr.supabase.co/storage/v1/object/public/app-assets/resorts/resorts/Walt%20Disney%20World/Campsites%20at%20Disney's%20Fort%20Wilderness.jpeg",
    resort_area: 'Magic Kingdom Resort Area',
    youtube_url: null,
    phone: '4078242900',
    address: '4510 North Fort Wilderness Trail, Lake Buena Vista, Florida 32830-8415',
    resort_website: 'https://disneyworld.disney.go.com/resorts/campsites-at-fort-wilderness-resort/',
  },
];

// Helper function to get resorts by category
export const getResortsByCategory = (category: WDWResort['category']): WDWResort[] => {
  return wdwResorts.filter(resort => resort.category === category);
};

// Category display order and mapping
export const resortCategoryOrder: Array<{ key: WDWResort['category']; displayName: string }> = [
  { key: 'Deluxe Villa Resort', displayName: 'Deluxe Villas & Suites' },
  { key: 'Deluxe Resort', displayName: 'Deluxe Resorts' },
  { key: 'Moderate Resort', displayName: 'Moderate Resorts' },
  { key: 'Value Resort', displayName: 'Value Resorts' },
  { key: 'Campground Resort', displayName: 'Campground' },
];

// Resort Room Interface
export interface WDWResortRoom {
  id: string;
  resort_id: string;
  room_category: string;
  name: string;
  room_property_location: string;
  view_type: string;
  bed_type: string;
  sleeping_occupancy: string;
  max_occupancy: string;
  amenities: string;
  additional_information: string;
  visible: boolean;
  youtube_url: string | null;
  resortname: string;
}

// Import room data
import wdwResortRoomsData from './wdwResortRooms.json';
export const wdwResortRooms: WDWResortRoom[] = wdwResortRoomsData as WDWResortRoom[];

// Helper function to get rooms by resort ID
export const getRoomsByResortId = (resortId: string): WDWResortRoom[] => {
  return wdwResortRooms.filter(room => room.resort_id === resortId && room.visible);
};

// Helper function to group rooms by category
export const groupRoomsByCategory = (rooms: WDWResortRoom[]): Record<string, WDWResortRoom[]> => {
  return rooms.reduce((acc, room) => {
    const category = room.room_category;
    if (!acc[category]) {
      acc[category] = [];
    }
    acc[category].push(room);
    return acc;
  }, {} as Record<string, WDWResortRoom[]>);
};

// ============================================
// Resort Finder Filter System (Compact Dropdown Version)
// ============================================

// Filter options for dropdown selects
export interface FilterOption {
  value: string;
  label: string;
}

// Family Size Options
export const familySizeOptions: FilterOption[] = [
  { value: '', label: 'Any Size' },
  { value: '2', label: '2 Guests' },
  { value: '4', label: '4 Guests' },
  { value: '6', label: '6+ Guests' },
  { value: '8', label: '8+ Guests' },
  { value: '10', label: '10+ Guests' },
];

// Resort Category Options
export const resortCategoryOptions: FilterOption[] = [
  { value: '', label: 'All Categories' },
  { value: 'Value Resort', label: 'Value' },
  { value: 'Moderate Resort', label: 'Moderate' },
  { value: 'Deluxe Resort', label: 'Deluxe' },
  { value: 'Deluxe Villa Resort', label: 'Deluxe Villa' },
  { value: 'Campground Resort', label: 'Campground' },
];

// Resort Area Options
export const resortAreaOptions: FilterOption[] = [
  { value: '', label: 'All Areas' },
  { value: 'Magic Kingdom Resort Area', label: 'Magic Kingdom' },
  { value: 'EPCOT Resort Area', label: 'EPCOT' },
  { value: "Disney's Animal Kingdom Resort Area", label: 'Animal Kingdom' },
  { value: 'Disney Springs Resort Area', label: 'Disney Springs' },
];

// Amenity options (multi-select chips)
export interface AmenityOption {
  id: string;
  label: string;
  matcher: (resort: WDWResort) => boolean;
}

// Monorail resorts
const monorailResortIds = [
  '04cc6b42-e563-400d-8fdd-ecd7d1481992', // Contemporary
  '281fe891-fe37-43b6-a1fc-4e1beca3b2f5', // Bay Lake Tower
  '5c45c194-dd83-40e9-8b6d-f31a716f9141', // Polynesian Village
  'c7055c2a-0fd7-4830-ad26-36f2c3fd00bd', // Polynesian Villas
  '846a295b-182e-419d-ae83-373a999f44b9', // Grand Floridian
  'cbdbf61d-52bf-46fc-9f4d-09927d0c05aa', // Grand Floridian Villas
];

// Skyliner resorts
const skylinerResortIds = [
  '9eb4c0bb-b02b-4c3d-bf3d-c455a08c36dc', // Caribbean Beach
  'a0f52a8d-1f10-4836-88ac-6485a87872ef', // Pop Century
  '6c5e2aa7-6600-462a-bd0e-962dd5838ef4', // Art of Animation
  'b27335be-eab7-4405-a24d-4e467a9a9565', // Riviera
];

// Walking distance to parks
const walkingDistanceResortIds = [
  '347c1905-9376-4f26-a252-9afa61d31529', // BoardWalk Inn
  '1dc391f4-20b3-4808-a925-6929986ba863', // BoardWalk Villas
  '5ab479b1-0757-42a8-9e95-39ca6024eb28', // Yacht Club
  'de6007fe-5e85-48dd-a027-a48ee32bb2bf', // Beach Club
  'b18a1571-2a94-47a4-8238-db7dc269355c', // Beach Club Villas
  '6b11eb99-be3a-4d88-a5f1-eec68fdc02f9', // Swan
  '90e0ca5e-1535-45de-a936-9bd7d0ebdec5', // Swan Reserve
  '92ed4a34-824a-4af4-b041-4f991285d3c8', // Dolphin
  '04cc6b42-e563-400d-8fdd-ecd7d1481992', // Contemporary
  '281fe891-fe37-43b6-a1fc-4e1beca3b2f5', // Bay Lake Tower
];

// Savanna view resorts
const savannaViewResortIds = [
  '5b23fd03-d7bb-4039-ae94-c59503213cfd', // Animal Kingdom Lodge
  '8438e322-e3b4-4cf1-beb7-789da1e9fb8a', // AKL Villas Jambo
  'bbc980c9-4399-43b5-be63-5a03966db61a', // AKL Villas Kidani
];

export const amenityOptions: AmenityOption[] = [
  {
    id: 'monorail',
    label: 'Monorail',
    matcher: (resort) => monorailResortIds.includes(resort.id),
  },
  {
    id: 'skyliner',
    label: 'Skyliner',
    matcher: (resort) => skylinerResortIds.includes(resort.id),
  },
  {
    id: 'walking',
    label: 'Walk to Parks',
    matcher: (resort) => walkingDistanceResortIds.includes(resort.id),
  },
  {
    id: 'kitchen',
    label: 'Full Kitchen',
    matcher: (resort) => resort.category === 'Deluxe Villa Resort',
  },
  {
    id: 'savanna',
    label: 'Savanna Views',
    matcher: (resort) => savannaViewResortIds.includes(resort.id),
  },
  {
    id: 'evening-hours',
    label: 'Extended Evening Hours',
    matcher: (resort) => resort.category === 'Deluxe Resort' || resort.category === 'Deluxe Villa Resort',
  },
];

// Get max occupancy for a resort from room data
export const getResortMaxOccupancy = (resortId: string): number => {
  const rooms = getRoomsByResortId(resortId);
  if (rooms.length === 0) return 4; // Default
  return Math.max(...rooms.map(r => parseInt(r.max_occupancy) || 4));
};

// Filter state interface
export interface ResortFilters {
  familySize: string;
  category: string;
  area: string;
  amenities: string[];
}

// Helper function to filter resorts with new filter structure
export const filterResortsCompact = (filters: ResortFilters): WDWResort[] => {
  const hasAnyFilter = filters.familySize || filters.category || filters.area || filters.amenities.length > 0;
  if (!hasAnyFilter) return [];

  return wdwResorts.filter(resort => {
    // Family size filter
    if (filters.familySize) {
      const minOccupancy = parseInt(filters.familySize);
      const resortMaxOccupancy = getResortMaxOccupancy(resort.id);
      if (resortMaxOccupancy < minOccupancy) return false;
    }

    // Category filter
    if (filters.category && resort.category !== filters.category) {
      return false;
    }

    // Area filter
    if (filters.area && resort.resort_area !== filters.area) {
      return false;
    }

    // Amenities filter (must match ALL selected amenities)
    if (filters.amenities.length > 0) {
      const selectedAmenities = amenityOptions.filter(a => filters.amenities.includes(a.id));
      if (!selectedAmenities.every(amenity => amenity.matcher(resort))) {
        return false;
      }
    }

    return true;
  });
};
