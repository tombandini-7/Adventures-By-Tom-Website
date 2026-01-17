import { Ship, Calendar, FileText, CheckCircle, Anchor, Utensils, Sparkles, MapPin } from 'lucide-react';
import { createElement } from 'react';
import { ASSETS } from '../constants/assets';

export interface TimelineStep {
  days: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}

export interface ShipClass {
  id: string;
  name: string;
  ships: string[];
  description: string;
  capacity: string;
  yearIntroduced: number;
  highlights: string[];
  image: string;
  isNew?: boolean;
}

export interface PrivateDestination {
  id: string;
  name: string;
  shortName: string;
  description: string;
  image: string;
  highlights: string[];
  status?: 'active' | 'coming-soon' | 'suspended';
  statusNote?: string;
}

export interface CruiseFareInclusion {
  title: string;
  description: string;
  icon: React.ReactNode;
}

// Royal Caribbean Planning Timeline
export const timelineSteps: TimelineStep[] = [
  {
    days: '1 Year / Upon Booking',
    title: 'Book Excursions & Activities',
    description: 'Shore excursions and onboard activities can be booked as early as one year before sailing or immediately upon booking your cruise.',
    icon: createElement(Calendar, { className: 'w-6 h-6' }),
  },
  {
    days: '90 Days (5+ nights)',
    title: 'Final Payment Due',
    description: 'Final payment is due 90 days before sailing for cruises 5 nights or longer, and 75 days before for sailings 4 nights or shorter.',
    icon: createElement(CheckCircle, { className: 'w-6 h-6' }),
  },
  {
    days: '45 Days',
    title: 'Online Check-In Opens',
    description: 'Complete online check-in and choose your port arrival time. This is also when you can make any final dining or activity reservations.',
    icon: createElement(FileText, { className: 'w-6 h-6' }),
  },
  {
    days: '2 Weeks',
    title: 'Receive Guest Booklet',
    description: 'Your Guest Ticket Booklet will arrive, containing all your cruise documents, boarding passes, and important information.',
    icon: createElement(Anchor, { className: 'w-6 h-6' }),
  },
];

// Royal Caribbean Ship Classes
export const shipClasses: ShipClass[] = [
  {
    id: 'icon',
    name: 'Icon Class',
    ships: ['Icon of the Seas', 'Star of the Seas'],
    description: 'The newest and most innovative ships at sea, featuring unprecedented thrills, family-friendly neighborhoods, and sustainable design.',
    capacity: '5,610 guests',
    yearIntroduced: 2024,
    highlights: [
      'Category 6 Water Park',
      'Thrill Island',
      'Surfside Family Neighborhood',
      'Crown\'s Edge Suspended Walk',
      '7 Swimming Pools',
      'AquaDome Multi-Use Space',
    ],
    image: ASSETS.royalCaribbean.shipClasses.icon,
    isNew: true,
  },
  {
    id: 'oasis',
    name: 'Oasis Class',
    ships: ['Oasis of the Seas', 'Allure of the Seas', 'Harmony of the Seas', 'Symphony of the Seas', 'Wonder of the Seas', 'Utopia of the Seas'],
    description: 'The world\'s largest cruise ships, featuring neighborhood concept with Central Park, Boardwalk, and revolutionary entertainment.',
    capacity: '5,400+ guests',
    yearIntroduced: 2009,
    highlights: [
      'Central Park with Live Plants',
      'AquaTheater Shows',
      'Zip Line',
      'Perfect Storm Water Slides',
      'Ultimate Abyss Slide',
      'Two FlowRider Surf Simulators',
    ],
    image: ASSETS.royalCaribbean.shipClasses.oasis,
  },
  {
    id: 'quantum',
    name: 'Quantum Class',
    ships: ['Quantum of the Seas', 'Anthem of the Seas', 'Ovation of the Seas', 'Spectrum of the Seas', 'Odyssey of the Seas'],
    description: 'Smart ships featuring cutting-edge technology, iFLY skydiving, bumper cars, and the North Star observation capsule.',
    capacity: '4,180 guests',
    yearIntroduced: 2014,
    highlights: [
      'North Star Observation Pod',
      'iFLY Skydiving Simulator',
      'SeaPlex with Bumper Cars',
      'RipCord by iFLY',
      'Two70 Entertainment Venue',
      'Virtual Balconies',
    ],
    image: ASSETS.royalCaribbean.shipClasses.quantum,
  },
  {
    id: 'freedom',
    name: 'Freedom Class',
    ships: ['Freedom of the Seas', 'Liberty of the Seas', 'Independence of the Seas'],
    description: 'Mid-sized ships perfect for first-time cruisers, featuring FlowRider, ice skating, and H2O Zone water park.',
    capacity: '3,634 guests',
    yearIntroduced: 2006,
    highlights: [
      'FlowRider Surf Simulator',
      'Ice Skating Rink',
      'H2O Zone Water Park',
      'Rock Climbing Wall',
      'Mini Golf',
      'Royal Promenade',
    ],
    image: ASSETS.royalCaribbean.shipClasses.freedom,
  },
  {
    id: 'voyager',
    name: 'Voyager Class',
    ships: ['Voyager of the Seas', 'Explorer of the Seas', 'Adventure of the Seas', 'Navigator of the Seas', 'Mariner of the Seas'],
    description: 'The first ships to feature ice skating rinks at sea, plus Royal Promenade shopping and entertainment district.',
    capacity: '3,286 guests',
    yearIntroduced: 1999,
    highlights: [
      'Ice Skating Shows',
      'Royal Promenade',
      'FlowRider (select ships)',
      'Rock Climbing Wall',
      'Mini Golf',
      'Splash Island Water Park',
    ],
    image: ASSETS.royalCaribbean.shipClasses.voyager,
  },
  {
    id: 'radiance',
    name: 'Radiance Class',
    ships: ['Radiance of the Seas', 'Brilliance of the Seas', 'Serenade of the Seas', 'Jewel of the Seas'],
    description: 'Elegant ships with expansive glass for stunning ocean views, offering a more intimate cruising experience.',
    capacity: '2,143 guests',
    yearIntroduced: 2001,
    highlights: [
      'Floor-to-Ceiling Windows',
      'Rock Climbing Wall',
      'Self-Leveling Pool Tables',
      'Golf Simulator',
      'Vitality Spa',
      'Intimate Atmosphere',
    ],
    image: ASSETS.royalCaribbean.shipClasses.radiance,
  },
  {
    id: 'vision',
    name: 'Vision Class',
    ships: ['Vision of the Seas', 'Rhapsody of the Seas', 'Grandeur of the Seas'],
    description: 'Smaller, classic ships perfect for port-intensive itineraries and guests seeking a traditional cruise experience.',
    capacity: '2,000 guests',
    yearIntroduced: 1996,
    highlights: [
      'Intimate Ship Size',
      'Viking Crown Lounge',
      'Rock Climbing Wall',
      'Solarium Pool',
      'Port-Intensive Itineraries',
      'Classic Elegance',
    ],
    image: ASSETS.royalCaribbean.shipClasses.vision,
  },
];

// Royal Caribbean Private Destinations
export const privateDestinations: PrivateDestination[] = [
  {
    id: 'cococay',
    name: 'Perfect Day at CocoCay',
    shortName: 'CocoCay',
    description: 'Royal Caribbean\'s award-winning private island in the Bahamas, featuring the tallest waterslide in North America, pristine beaches, and thrilling water park experiences.',
    image: ASSETS.royalCaribbean.privateDestinations.cocoCay,
    highlights: [
      'Thrill Waterpark with 13 Slides',
      'Daredevil\'s Peak - 135ft Waterslide',
      'Oasis Lagoon Freshwater Pool',
      'Up, Up and Away Helium Balloon',
      'Overwater Cabanas',
      'Zip Line Over the Ocean',
    ],
    status: 'active',
  },
  {
    id: 'cozumel',
    name: 'Royal Beach Club Cozumel',
    shortName: 'Cozumel',
    description: 'An exclusive beachfront paradise in Cozumel, Mexico, featuring crystal-clear waters, authentic Mexican cuisine, and luxurious beach club amenities.',
    image: ASSETS.royalCaribbean.privateDestinations.cozumel,
    highlights: [
      'Overwater Swim-Up Bar',
      'Adults-Only Hideaway Beach',
      'Authentic Mexican Dining',
      'Infinity Pools',
      'Beach Club Loungers',
      'Cultural Entertainment',
    ],
    status: 'coming-soon',
    statusNote: 'Opening 2026',
  },
  {
    id: 'nassau',
    name: 'Royal Beach Club Nassau',
    shortName: 'Nassau',
    description: 'The newest beach club destination in Nassau, Bahamas, offering an upscale beach day experience with exclusive amenities and stunning ocean views.',
    image: ASSETS.royalCaribbean.privateDestinations.nassau,
    highlights: [
      'Private Beach Access',
      'Infinity Edge Pool',
      'Overwater Cabanas',
      'Complimentary Beach Amenities',
      'Local Bahamian Entertainment',
      'Water Sports',
    ],
    status: 'active',
  },
  {
    id: 'perfect-day-mexico',
    name: 'Perfect Day Mexico',
    shortName: 'Perfect Day Mexico',
    description: 'Coming in 2027, this new destination will bring the Perfect Day experience to the Western Caribbean with thrilling attractions and Mexican culture.',
    image: ASSETS.royalCaribbean.privateDestinations.perfectDayMexico,
    highlights: [
      'Thrill Waterpark',
      'Beach Club Experience',
      'Mexican Cultural Elements',
      'Exclusive Shore Experiences',
      'Family-Friendly Activities',
    ],
    status: 'coming-soon',
    statusNote: 'Opening 2027',
  },
  {
    id: 'labadee',
    name: 'Labadee',
    shortName: 'Labadee',
    description: 'Royal Caribbean\'s original private destination on Haiti\'s northern coast, featuring beaches, water sports, and the Dragon\'s Breath zip line.',
    image: ASSETS.royalCaribbean.privateDestinations.labadee,
    highlights: [
      'Dragon\'s Breath Zip Line',
      'Multiple Beach Areas',
      'Water Sports',
      'Local Artisan Market',
      'Arawak Aqua Park',
      'Columbus Cove',
    ],
    status: 'suspended',
    statusNote: 'Labadee sailings are currently suspended through December 2026 due to the unrest in Haiti.',
  },
];

// What's Included in Your Cruise Fare
export const cruiseFareInclusions: CruiseFareInclusion[] = [
  {
    title: 'Stateroom Accommodations',
    description: 'Comfortable accommodations ranging from cozy interior staterooms to luxurious suites with private balconies and concierge service.',
    icon: createElement(Anchor, { className: 'w-8 h-8 text-aqua' }),
  },
  {
    title: 'Dining & Meals',
    description: 'Main Dining Room, Windjammer Marketplace buffet, casual dining venues, room service, and complimentary specialty restaurants on select ships.',
    icon: createElement(Utensils, { className: 'w-8 h-8 text-aqua' }),
  },
  {
    title: 'Entertainment',
    description: 'Broadway-style shows, live music, comedy clubs, poolside entertainment, movies under the stars, and themed deck parties.',
    icon: createElement(Sparkles, { className: 'w-8 h-8 text-aqua' }),
  },
  {
    title: 'Activities & Amenities',
    description: 'FlowRider surf simulator, rock climbing walls, water slides, pools, hot tubs, fitness center, sports courts, and kids clubs.',
    icon: createElement(Ship, { className: 'w-8 h-8 text-aqua' }),
  },
  {
    title: 'Ports of Call',
    description: 'Port fees and taxes included. Explore exciting destinations across the Caribbean, Europe, Alaska, and beyond.',
    icon: createElement(MapPin, { className: 'w-8 h-8 text-aqua' }),
  },
];

// Main Dining Room Info
export const diningInfo = {
  mainDining: {
    title: 'Main Dining Room',
    description: 'Experience elegant multi-course dining in the Main Dining Room, featuring rotating menus with appetizers, entrees, and desserts. Choose traditional assigned seating or flexible My Time Dining.',
    image: ASSETS.royalCaribbean.dining.mainDiningRoom,
    options: [
      {
        name: 'Traditional Dining',
        description: 'Dine at the same table with the same waitstaff at your assigned time (Assigned times vary per ship and sailing)',
      },
      {
        name: 'My Time Dining',
        description: 'Flexible dining between 6:00 PM - 9:30 PM without assigned times or tablemates',
      },
    ],
  },
  casualDining: {
    title: 'Casual Dining Venues',
    venues: [
      'Windjammer Marketplace - International buffet',
      'Park Café - Deli sandwiches and salads',
      'Sorrento\'s Pizza - Fresh pizza by the slice',
      'Café Promenade - Coffee, pastries, and light bites',
      'Johnny Rockets (select ships) - Classic burgers',
      'El Loco Fresh (select ships) - Mexican cuisine',
    ],
  },
  specialtyDining: {
    title: 'Specialty Restaurants',
    description: 'Upscale dining experiences available for an additional charge, featuring cuisines from around the world.',
    restaurants: [
      'Chops Grille - Premium steakhouse',
      '150 Central Park - Farm-to-table cuisine',
      'Jamie\'s Italian - By celebrity chef Jamie Oliver',
      'Izumi - Asian fusion and hibachi',
      'Giovanni\'s Table - Authentic Italian',
      'Wonderland - Imaginative cuisine',
    ],
  },
};

// Additional Royal Caribbean Info
export const additionalInfo = {
  beveragePackages: {
    title: 'Beverage Packages',
    description: 'Pre-purchase beverage packages for unlimited drinks throughout your cruise, including soft drinks, specialty coffee, or alcoholic beverages.',
  },
  royalUp: {
    title: 'Royal Up℠ Bidding',
    description: 'After booking, bid to upgrade your stateroom category for a chance to move to a better room at a discounted rate.',
  },
  wifiPackages: {
    title: 'Voom℠ Internet',
    description: 'The fastest internet at sea with packages available for browsing, streaming, and video calling.',
  },
  shorExcursions: {
    title: 'Shore Excursions',
    description: 'Book guided tours and activities at each port of call, from cultural experiences to adventure activities and beach escapes.',
  },
};
