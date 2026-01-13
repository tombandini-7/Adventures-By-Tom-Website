// Google Analytics 4 Tracking Utility
// Provides centralized analytics functions for the application

declare global {
  interface Window {
    gtag: (...args: unknown[]) => void;
    dataLayer: unknown[];
  }
}

const GA_MEASUREMENT_ID = import.meta.env.VITE_GA_MEASUREMENT_ID;

/**
 * Initialize Google Analytics 4
 * Call this once at app startup
 */
export const initGA = (): void => {
  if (!GA_MEASUREMENT_ID || typeof window === 'undefined') {
    return;
  }

  // Initialize dataLayer
  window.dataLayer = window.dataLayer || [];
  window.gtag = function gtag(...args: unknown[]) {
    window.dataLayer.push(args);
  };

  // Load gtag.js script
  const script = document.createElement('script');
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
  document.head.appendChild(script);

  // Configure GA4
  window.gtag('js', new Date());
  window.gtag('config', GA_MEASUREMENT_ID, {
    send_page_view: false, // We handle page views manually for SPA
  });
};

/**
 * Check if GA is available and properly configured
 */
export const isGAEnabled = (): boolean => {
  return Boolean(GA_MEASUREMENT_ID && typeof window !== 'undefined' && window.gtag);
};

/**
 * Track a page view (for SPA navigation)
 */
export const trackPageView = (path: string, title?: string): void => {
  if (!isGAEnabled()) return;

  window.gtag('config', GA_MEASUREMENT_ID, {
    page_path: path,
    page_title: title,
  });
};

/**
 * Track a custom event
 */
export const trackEvent = (
  action: string,
  category: string,
  label?: string,
  value?: number
): void => {
  if (!isGAEnabled()) return;

  window.gtag('event', action, {
    event_category: category,
    event_label: label,
    value: value,
  });
};

/**
 * Track quote button clicks (main conversion event)
 */
export const trackQuoteClick = (location: string): void => {
  trackEvent('quote_click', 'conversion', location);
};

/**
 * Track navigation clicks
 */
export const trackNavClick = (item: string): void => {
  trackEvent('nav_click', 'navigation', item);
};

/**
 * Track destination card clicks
 */
export const trackDestinationClick = (destination: string): void => {
  trackEvent('destination_click', 'engagement', destination);
};

/**
 * Track section visibility (when user scrolls to a section)
 */
export const trackSectionView = (sectionId: string): void => {
  trackEvent('section_view', 'engagement', sectionId);
};

/**
 * Track scroll depth milestones
 */
export const trackScrollDepth = (percentage: number): void => {
  trackEvent('scroll_depth', 'engagement', `${percentage}%`, percentage);
};

/**
 * Track promotion interactions
 */
export const trackPromotionView = (promotionName: string): void => {
  trackEvent('promotion_view', 'engagement', promotionName);
};

export const trackPromotionClick = (promotionName: string): void => {
  trackEvent('promotion_click', 'engagement', promotionName);
};
