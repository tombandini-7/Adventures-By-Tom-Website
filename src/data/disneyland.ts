import { UtensilsCrossed, Car, Zap, Luggage, CreditCard } from 'lucide-react';
import { createElement } from 'react';
import { ASSETS } from '../constants/assets';

export interface TimelineStep {
  days: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}

export interface DisneylandEvent {
  id: string;
  name: string;
  shortName: string;
  description: string;
  dates: string;
  park: 'Disneyland Park' | 'Disney California Adventure' | 'Both Parks';
  image: string;
  highlights: string[];
}

export interface FirstTimeGuideItem {
  title: string;
  description: string;
  tips: string[];
}

export interface DisneylandResort {
  id: string;
  name: string;
  shortName: string;
  description: string;
  image: string;
  highlights: string[];
  tier: 'Deluxe' | 'Moderate';
  youtube_url: string | null;
  phone: string;
  address: string;
  resort_website: string;
}

// Resort Room Interface - matches industry standard structure
export interface DLRResortRoom {
  id: string;
  resort_id: string;
  room_category: string;
  name: string;
  view_type: string | null;
  bed_type: string;
  sleeping_occupancy: string;
  max_occupancy: string;
  amenities: string;
  additional_information: string | null;
  visible: boolean;
  youtube_url: string | null;
  resortname: string;
}

// Planning Timeline Data - Disneyland specific
export const timelineSteps: TimelineStep[] = [
  {
    days: '60 Days',
    title: 'Dining Reservations',
    description: 'I will book your table service restaurants and character dining experiences at Disneyland Resort.',
    icon: createElement(UtensilsCrossed, { className: 'w-6 h-6' }),
  },
  {
    days: '45 Days',
    title: 'Transportation',
    description: 'I will help arrange airport transfers from LAX, SNA, or ONT, rental cars, or other transportation options.',
    icon: createElement(Car, { className: 'w-6 h-6' }),
  },
  {
    days: '30 Days',
    title: 'Final Payment',
    description: 'Your final payment is due! Make sure you authorize your final balance with me so it is paid in full to avoid cancellation.',
    icon: createElement(CreditCard, { className: 'w-6 h-6' }),
  },
  {
    days: '7 Days',
    title: 'Lightning Lane',
    description: 'Purchase Lightning Lane Multi Pass for skip-the-line access. One pass covers BOTH parks!',
    icon: createElement(Zap, { className: 'w-6 h-6' }),
  },
  {
    days: '5 Days',
    title: 'Pack & Prepare',
    description: 'Start packing essentials, download the Disneyland app, and review your park reservations one final time.',
    icon: createElement(Luggage, { className: 'w-6 h-6' }),
  },
];

// Disneyland Events Data (ordered by calendar year)
export const disneylandEvents: DisneylandEvent[] = [
  {
    id: 'lunar-new-year',
    name: 'Lunar New Year Celebration',
    shortName: 'Lunar New Year',
    description: 'A dazzling 31-day celebration welcoming the Year of the Horse with vibrant festivities and joyous tributes to Chinese, Korean and Vietnamese cultures! Enjoy innovative marketplace bites, dazzling festival décor, and special character appearances.',
    dates: 'January 23 - February 22, 2026',
    park: 'Disney California Adventure',
    image: ASSETS.disneyland.events.lunarNewYear,
    highlights: [
      "Mulan's Lunar New Year Procession",
      'Sip and Savor Pass',
      'Hurry Home Pre-Show',
      'Lucky Wishing Wall',
      'Characters in Traditional Attire',
      'Festival Marketplaces',
    ],
  },
  {
    id: 'food-wine',
    name: 'Disney California Adventure Food & Wine Festival',
    shortName: 'Food & Wine Festival',
    description: "Celebrate California's incredible bounty with exciting cuisine, entertainment and more! Enjoy tasty plates at festival marketplaces, craft beer and specialty wines, culinary demonstrations, and live music.",
    dates: 'March 6 - April 27, 2026',
    park: 'Disney California Adventure',
    image: ASSETS.disneyland.events.foodWine,
    highlights: [
      'Festival Marketplaces',
      'Sip and Savor Pass',
      'Beverage Seminars',
      'Culinary Demonstrations',
      'Live Entertainment',
      'Meet Chef Goofy',
    ],
  },
  {
    id: 'halloween-time',
    name: 'Halloween Time at the Disneyland Resort',
    shortName: 'Halloween Time',
    description: 'Spirit away for eerily awesome fun with themed attractions, entertainment, dining and more! Experience Haunted Mansion Holiday, Halloween Screams fireworks, and the separate-ticket Oogie Boogie Bash party.',
    dates: 'August 21 - October 31, 2026',
    park: 'Both Parks',
    image: ASSETS.disneyland.events.halloweenTime,
    highlights: [
      'Haunted Mansion Holiday',
      'Oogie Boogie Bash Party',
      'Halloween Screams Fireworks',
      'Main Street Pumpkin Festival',
      'Guardians: Monsters After Dark',
      'Plaza de la Familia',
    ],
  },
  {
    id: 'holidays',
    name: 'Holidays at the Disneyland Resort',
    shortName: 'Holiday Season',
    description: "Enjoy happy holiday experiences filled with festive fun throughout the Disneyland Resort! Experience 'it's a small world' Holiday, Haunted Mansion Holiday, the spectacular 'Believe... In Holiday Magic' fireworks, and the Disney Festival of Holidays.",
    dates: 'November 18, 2026 - January 2027',
    park: 'Both Parks',
    image: ASSETS.disneyland.events.holidays,
    highlights: [
      "It's a Small World Holiday",
      'Believe... In Holiday Magic',
      'Haunted Mansion Holiday',
      'A Christmas Fantasy Parade',
      'Disney Festival of Holidays',
      'Meet Santa Claus',
    ],
  },
];

// First Time Guide Data - Disneyland specific
export const firstTimeGuideItems: FirstTimeGuideItem[] = [
  {
    title: 'Why Use a Travel Agent?',
    description: 'Working with a travel agent makes planning your Disneyland vacation stress-free and ensures you get the most magic for your money. Best of all, my services are completely complimentary!',
    tips: [
      'Expert knowledge from a former Cast Member',
      'I monitor and apply the latest promotions to your reservation',
      'Keep you on track for important deadlines and milestones',
      'Helpful planning guides sent directly to you',
      'All your questions answered with insider tips and tricks',
    ],
  },
  {
    title: 'Disneyland App',
    description: 'This essential app handles mobile ordering, Lightning Lane, park maps, wait times, and more. I\'ll send you a guide to help you get set up!',
    tips: [
      'I will link your tickets and hotel reservation',
      "I'll provide a Lightning Lane strategy guide",
      "I'll link all your Friends and Family to the application",
    ],
  },
  {
    title: 'What to Pack',
    description: 'Southern California weather is typically mild but can vary. I\'ll send you a comprehensive packing guide so you\'re prepared for your Disneyland adventure!',
    tips: [
      'Customized packing list for your travel dates',
      'Must-have items for the parks',
      'Tips for staying comfortable all day',
    ],
  },
];

// Lightning Lane Info - Disneyland specific
export const lightningLaneInfo = {
  multiPass: {
    title: 'Lightning Lane Multi Pass',
    description: 'Skip the standby line at multiple attractions throughout the day. One pass covers BOTH Disneyland Park and Disney California Adventure! Select your first attraction as soon as you enter the park.',
    price: 'Starting at $32+ per person, per day (varies by date)',
    included: [
      'ONE pass covers BOTH theme parks',
      'Book up to 2 attractions at a time',
      'Available to book once inside the park',
    ],
  },
  singlePass: {
    title: 'Lightning Lane Single Pass',
    description: 'Purchase individual access to the most popular attractions not included in Multi Pass.',
    attractions: [
      'Radiator Springs Racers',
      'Star Wars: Rise of the Resistance',
      "Tiana's Bayou Adventure",
    ],
    price: 'Starting at $20-30+ per attraction (varies by date)',
  },
};

// Disneyland Resort Hotels
export const disneylandResorts: DisneylandResort[] = [
  {
    id: '8330be45-72f8-4cdd-b34f-3d9e9f8e9603',
    name: "Disney's Grand Californian Hotel & Spa",
    shortName: 'Grand Californian',
    description: "Experience the elegance of early 20th-century California Craftsman architecture at Disney's most luxurious resort. Enjoy a dedicated entrance to Disney California Adventure, world-class dining, and the award-winning Tenaya Stone Spa.",
    image: ASSETS.disneyland.resorts.grandCalifornian,
    highlights: [
      'Direct DCA Park Entrance',
      'Tenaya Stone Spa',
      "Napa Rose Fine Dining",
      'Storytelling by the Fireplace',
      'Downtown Disney Access',
      'Character Dining',
    ],
    tier: 'Deluxe',
    youtube_url: null,
    phone: '7146352300',
    address: '1600 S Disneyland Dr, Anaheim, CA 92802',
    resort_website: 'https://disneyland.disney.go.com/hotels/grand-californian-hotel/',
  },
  {
    id: '2aa4eade-0a32-4025-823a-258e3264aa10',
    name: 'The Disneyland Hotel',
    shortName: 'Disneyland Hotel',
    description: "Stay at the original Disneyland Resort hotel where Disney magic has been made since 1955. Featuring themed guest rooms, the magical headboards, monorail pool slides, and convenient Downtown Disney location.",
    image: ASSETS.disneyland.resorts.disneylandHotel,
    highlights: [
      'Iconic Disney Theming',
      'E-Ticket Pool with Slides',
      "Goofy's Kitchen Character Dining",
      'Trader Sam\'s Enchanted Tiki Bar',
      'Downtown Disney Location',
      'Magical Headboards',
    ],
    tier: 'Deluxe',
    youtube_url: null,
    phone: '7147786600',
    address: '1150 Magic Way, Anaheim, CA 92802',
    resort_website: 'https://disneyland.disney.go.com/hotels/disneyland-hotel/',
  },
  {
    id: 'adfa2743-bbb1-4a7b-92c4-0fc8d637d0fa',
    name: 'Pixar Place Hotel',
    shortName: 'Pixar Place',
    description: 'Immerse yourself in the artistry and storytelling of Pixar Animation Studios. This reimagined hotel features whimsical Pixar-themed décor, a rooftop pool, and the Great Maple restaurant with California comfort cuisine.',
    image: ASSETS.disneyland.resorts.pixarPlace,
    highlights: [
      'Pixar-Themed Rooms',
      'Rooftop Pool Deck',
      'Great Maple Restaurant',
      'Sketch Pad Café',
      'Downtown Disney Access',
      'Pixar Character Encounters',
    ],
    tier: 'Moderate',
    youtube_url: null,
    phone: '7149992050',
    address: '1717 Disneyland Dr, Anaheim, CA 92802',
    resort_website: 'https://disneyland.disney.go.com/hotels/pixar-place-hotel/',
  },
];

// Import room data from JSON (industry standard: large datasets in JSON files)
import disneylandRoomsData from './disneylandRooms.json';
export const disneylandRooms: DLRResortRoom[] = disneylandRoomsData as DLRResortRoom[];

// Helper function to get rooms by resort ID
export const getDLRRoomsByResortId = (resortId: string): DLRResortRoom[] => {
  return disneylandRooms.filter(room => room.resort_id === resortId && room.visible);
};

// Helper function to group rooms by category
export const groupDLRRoomsByCategory = (rooms: DLRResortRoom[]): Record<string, DLRResortRoom[]> => {
  return rooms.reduce((acc, room) => {
    const category = room.room_category;
    if (!acc[category]) {
      acc[category] = [];
    }
    acc[category].push(room);
    return acc;
  }, {} as Record<string, DLRResortRoom[]>);
};
