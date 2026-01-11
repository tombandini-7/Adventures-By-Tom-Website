// Centralized asset URLs for reuse throughout the application

export const ASSETS = {
  // Logos
  logos: {
    white: 'https://mctzomkzqzywhophhpdr.supabase.co/storage/v1/object/public/Magical%20Park%20Vacations/ABT%20White.png',
  },

  // Team Photos
  team: {
    tom: 'https://mctzomkzqzywhophhpdr.supabase.co/storage/v1/object/public/Magical%20Park%20Vacations/Tom.JPG',
  },

  // Cruise Lines
  cruises: {
    disneyCruiseLine: 'https://mctzomkzqzywhophhpdr.supabase.co/storage/v1/object/public/app-assets/cruises/Disney%20Cruise%20Line.jpeg',
    royalCaribbean: 'https://mctzomkzqzywhophhpdr.supabase.co/storage/v1/object/public/Magical%20Park%20Vacations/Destinations/Star%20of%20the%20Seas.jpg',
    virginVoyages: 'https://mctzomkzqzywhophhpdr.supabase.co/storage/v1/object/public/Magical%20Park%20Vacations/Destinations/Virgin%20Voyages.jpg',
  },

  // Theme Parks
  themeParks: {
    magicKingdom: 'https://mctzomkzqzywhophhpdr.supabase.co/storage/v1/object/public/app-assets/theme%20parks/Magic%20Kingdom.jpeg',
    epcot: 'https://mctzomkzqzywhophhpdr.supabase.co/storage/v1/object/public/app-assets/theme%20parks/Epcot.jpeg',
    hollywoodStudios: 'https://mctzomkzqzywhophhpdr.supabase.co/storage/v1/object/public/app-assets/theme%20parks/Hollywood%20Studios.jpg',
    animalKingdom: 'https://mctzomkzqzywhophhpdr.supabase.co/storage/v1/object/public/app-assets/theme%20parks/Animal%20Kingdom.jpeg',
  },

  // Destinations
  destinations: {
    waltDisneyWorld: 'https://mctzomkzqzywhophhpdr.supabase.co/storage/v1/object/public/app-assets/destinations/Disney%20World.jpg',
    disneyland: 'https://mctzomkzqzywhophhpdr.supabase.co/storage/v1/object/public/app-assets/destinations/Disneyland.jpeg',
    aulani: 'https://mctzomkzqzywhophhpdr.supabase.co/storage/v1/object/public/app-assets/destinations/Disney%20Aulani%20Resort%20&%20Spa.jpeg',
    universalOrlando: 'https://mctzomkzqzywhophhpdr.supabase.co/storage/v1/object/public/app-assets/destinations/Universal%20Orlando.jpeg',
    adventuresByDisney: 'https://mctzomkzqzywhophhpdr.supabase.co/storage/v1/object/public/Magical%20Park%20Vacations/Destinations/Adventures%20by%20Disney.jpg',
    europe: 'https://mctzomkzqzywhophhpdr.supabase.co/storage/v1/object/public/Magical%20Park%20Vacations/Destinations/Europe%20Vacations.webp',
    hotels: 'https://mctzomkzqzywhophhpdr.supabase.co/storage/v1/object/public/Magical%20Park%20Vacations/Destinations/Marriott%20Hotels.png',
    allInclusives: 'https://mctzomkzqzywhophhpdr.supabase.co/storage/v1/object/public/Magical%20Park%20Vacations/Destinations/All%20Inclusives.jpg',
  },
} as const;

// Helper to get destination image by destination name
export const getDestinationImage = (destination: string): string => {
  switch (destination) {
    case 'Walt Disney World':
      return ASSETS.destinations.waltDisneyWorld;
    case 'Disney Cruise Line':
      return ASSETS.cruises.disneyCruiseLine;
    case 'Disneyland':
      return ASSETS.destinations.disneyland;
    case 'Aulani':
    case "Disney's Aulani Resort":
      return ASSETS.destinations.aulani;
    case 'Universal Orlando':
      return ASSETS.destinations.universalOrlando;
    default:
      return ASSETS.destinations.waltDisneyWorld;
  }
};
