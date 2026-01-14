// Google Analytics 4 Tracking Utility
// Uses Measurement Protocol directly for reliable event tracking

const GA_MEASUREMENT_ID = import.meta.env.VITE_GA_MEASUREMENT_ID;
const GA_ENDPOINT = 'https://www.google-analytics.com/g/collect';

// Track last page view to prevent duplicates (React StrictMode)
let lastPageViewPath = '';
let lastPageViewTime = 0;

// Initialization guard
let isInitialized = false;

// Session state - determined at init time from localStorage
let isNewSession = false;
let isFirstVisit = false;
let sessionHitCount = 0;

// Generate or retrieve a persistent client ID
const getClientId = (): string => {
  const storageKey = 'ga_client_id';
  let clientId = localStorage.getItem(storageKey);

  if (!clientId) {
    // Generate a client ID in the format GA4 expects
    clientId = `${Math.floor(Math.random() * 2147483647)}.${Math.floor(Date.now() / 1000)}`;
    localStorage.setItem(storageKey, clientId);
  }

  return clientId;
};

// Generate a session ID (resets after 30 min of inactivity)
const getSessionId = (): string => {
  const storageKey = 'ga_session_id';
  const timestampKey = 'ga_session_timestamp';
  const sessionCountKey = 'ga_session_count';
  const sessionTimeout = 30 * 60 * 1000; // 30 minutes

  const now = Date.now();
  const lastActivity = parseInt(localStorage.getItem(timestampKey) || '0', 10);
  let sessionId = localStorage.getItem(storageKey);
  let sessionCount = parseInt(localStorage.getItem(sessionCountKey) || '0', 10);

  if (!sessionId || (now - lastActivity) > sessionTimeout) {
    sessionId = Math.floor(Date.now() / 1000).toString();
    sessionCount += 1;
    sessionHitCount = 0;
    localStorage.setItem(storageKey, sessionId);
    localStorage.setItem(sessionCountKey, sessionCount.toString());
  }

  localStorage.setItem(timestampKey, now.toString());
  return sessionId;
};

// Get session count
const getSessionCount = (): number => {
  return parseInt(localStorage.getItem('ga_session_count') || '1', 10);
};

/**
 * Check if GA is available and properly configured
 */
export const isGAEnabled = (): boolean => {
  return Boolean(GA_MEASUREMENT_ID && typeof window !== 'undefined');
};

/**
 * Send an event to GA4 using the Measurement Protocol
 */
const sendEvent = (eventName: string, params: Record<string, string | number | undefined> = {}): void => {
  if (!isGAEnabled()) return;

  // Increment hit counter
  sessionHitCount += 1;

  const payload = new URLSearchParams({
    v: '2',
    tid: GA_MEASUREMENT_ID,
    cid: getClientId(),
    sid: getSessionId(),
    sct: getSessionCount().toString(),
    seg: '1', // Session engaged
    _s: sessionHitCount.toString(), // Hit number in session
    en: eventName,
    dl: window.location.href,
    dt: document.title,
    dr: document.referrer || '',
  });

  // Add session start flag if new session
  if (isNewSession) {
    payload.append('_ss', '1');
    isNewSession = false;
  }

  // Add first visit flag if new user
  if (isFirstVisit) {
    payload.append('_fv', '1');
    isFirstVisit = false;
  }

  // Add custom event parameters
  Object.entries(params).forEach(([key, value]) => {
    if (value !== undefined) {
      payload.append(`ep.${key}`, String(value));
    }
  });

  // Add user properties
  const sessionCount = getSessionCount();
  payload.append('up.user_type', sessionCount === 1 ? 'new' : 'returning');
  payload.append('up.session_count', sessionCount.toString());

  // Use sendBeacon for reliable delivery (even on page unload)
  navigator.sendBeacon(`${GA_ENDPOINT}?${payload.toString()}`);
};

/**
 * Initialize Google Analytics 4
 * Call this once at app startup
 * Includes guard to prevent duplicate initialization from React StrictMode
 */
export const initGA = (): void => {
  if (!isGAEnabled() || isInitialized) return;

  isInitialized = true;

  // Check if this is a first-time visitor before initializing
  const existingClientId = localStorage.getItem('ga_client_id');
  if (!existingClientId) {
    isFirstVisit = true;
  }

  // Check if this is a new session
  const sessionTimestamp = localStorage.getItem('ga_session_timestamp');
  const sessionTimeout = 30 * 60 * 1000;
  if (!sessionTimestamp || (Date.now() - parseInt(sessionTimestamp, 10)) > sessionTimeout) {
    isNewSession = true;
  }

  // Initialize client and session IDs
  getClientId();
  getSessionId();
};

/**
 * Track a page view (for SPA navigation)
 * Includes deduplication to prevent double tracking from React StrictMode
 */
export const trackPageView = (path: string, title?: string): void => {
  if (!isGAEnabled()) return;

  const now = Date.now();
  const isDuplicate = path === lastPageViewPath && (now - lastPageViewTime) < 1000;

  if (isDuplicate) return;

  lastPageViewPath = path;
  lastPageViewTime = now;

  sendEvent('page_view', {
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

  sendEvent(action, {
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
