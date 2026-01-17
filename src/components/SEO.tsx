// SEO Component using React 19's native document metadata support
// React 19 automatically hoists <title>, <meta>, and <link> tags to <head>

import type { ReactNode } from 'react';

interface SEOProps {
  title: string;
  description: string;
  canonical?: string;
  image?: string;
  type?: 'website' | 'article';
  noIndex?: boolean;
}

// Site-wide constants
const SITE_NAME = 'Adventures By Tom';
const SITE_URL = 'https://adventuresbytom.com';
const DEFAULT_IMAGE = 'https://nwsyyhirelhlkbqpxsaa.supabase.co/storage/v1/object/public/images/logo/Adventures%20by%20Tom%20Logo%20-%20Light%20Blue.webp';

// Structured data for the business
const businessStructuredData = {
  '@context': 'https://schema.org',
  '@type': 'TravelAgency',
  name: 'Adventures By Tom',
  description: 'Boutique travel advisor specializing in Disney destinations and cruise vacations',
  url: SITE_URL,
  email: 'tom@magicalparkvacations.com',
  telephone: '(585) 754-5434',
  sameAs: [
    'https://instagram.com/tombandini.travels',
    'https://facebook.com/adventuresbytomta',
    'https://tiktok.com/@tombandini.travels',
  ],
  areaServed: {
    '@type': 'Country',
    name: 'United States',
  },
  serviceType: ['Disney Vacation Planning', 'Cruise Vacation Planning', 'Luxury Travel Advisory'],
};

export const SEO = ({
  title,
  description,
  canonical,
  image = DEFAULT_IMAGE,
  type = 'website',
  noIndex = false,
}: SEOProps): ReactNode => {
  const fullTitle = `${title} | ${SITE_NAME}`;
  const canonicalUrl = canonical ? `${SITE_URL}${canonical}` : SITE_URL;

  return (
    <>
      {/* Primary Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      {noIndex && <meta name="robots" content="noindex, nofollow" />}
      <link rel="canonical" href={canonicalUrl} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:site_name" content={SITE_NAME} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={canonicalUrl} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(businessStructuredData) }}
      />
    </>
  );
};

// Pre-configured SEO for specific pages
export const HomePageSEO = (): ReactNode => (
  <SEO
    title="Disney Vacation & Cruise Planning"
    description="Plan your dream Disney vacation or cruise with Tom, your personal travel advisor. Specializing in Walt Disney World, Disneyland, Disney Cruise Line, and luxury cruise vacations. Free quotes and personalized service."
    canonical="/"
  />
);

export const WaltDisneyWorldPageSEO = (): ReactNode => (
  <SEO
    title="Walt Disney World Planning Guide"
    description="Your complete guide to planning a Walt Disney World vacation. First-time visitor tips, dining guides, Lightning Lane strategies, and personalized planning from your Disney travel expert."
    canonical="/walt-disney-world"
  />
);

export const DisneyCruiseLinePageSEO = (): ReactNode => (
  <SEO
    title="Disney Cruise Line Vacation Planning"
    description="Discover the magic of Disney Cruise Line with our complete guide. Explore the fleet, rotational dining, kids clubs, spacious staterooms, and Disney's private islands. Get your free cruise quote today."
    canonical="/disney-cruise-line"
  />
);

export const DisneylandPageSEO = (): ReactNode => (
  <SEO
    title="Disneyland Resort Planning Guide"
    description="Your complete guide to planning a Disneyland Resort vacation. Discover Disneyland Park and Disney California Adventure, Lightning Lane tips, seasonal events, and personalized planning from your Disney travel expert."
    canonical="/disneyland"
  />
);
