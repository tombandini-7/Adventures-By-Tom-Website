// Centralized application constants

// Quote form URL - Update this single location to change the quote link across the entire application
export const QUOTE_URL = 'https://tinyurl.com/advbytom';

// Social media links
export const SOCIAL_LINKS = {
  instagram: {
    name: 'Instagram',
    url: 'https://instagram.com/tombandini.travels',
    handle: '@tombandini.travels',
  },
  facebook: {
    name: 'Facebook',
    url: 'https://facebook.com/adventuresbytomta',
    handle: 'adventuresbytomta',
  },
  tiktok: {
    name: 'TikTok',
    url: 'https://tiktok.com/@tombandini.travels',
    handle: '@tombandini.travels',
  },
} as const;

// Re-export assets for convenience
export { ASSETS, getDestinationImage } from './assets';
