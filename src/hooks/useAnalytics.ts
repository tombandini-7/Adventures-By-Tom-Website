import { useEffect, useRef, useCallback } from 'react';
import { useLocation } from 'react-router-dom';
import { trackPageView, trackScrollDepth, trackSectionView, isGAEnabled } from '../utils/analytics';

/**
 * Hook to automatically track page views on route changes
 */
export const usePageTracking = (): void => {
  const location = useLocation();

  useEffect(() => {
    // Track page view on route change
    const path = location.pathname + location.search + location.hash;
    trackPageView(path, document.title);
  }, [location]);
};

/**
 * Hook to track scroll depth milestones (25%, 50%, 75%, 100%)
 */
export const useScrollDepthTracking = (): void => {
  const trackedMilestones = useRef<Set<number>>(new Set());

  useEffect(() => {
    if (!isGAEnabled()) return;

    const milestones = [25, 50, 75, 100];

    const handleScroll = (): void => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = Math.round((scrollTop / docHeight) * 100);

      for (const milestone of milestones) {
        if (scrollPercent >= milestone && !trackedMilestones.current.has(milestone)) {
          trackedMilestones.current.add(milestone);
          trackScrollDepth(milestone);
        }
      }
    };

    // Throttle scroll handler
    let ticking = false;
    const throttledScroll = (): void => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', throttledScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', throttledScroll);
    };
  }, []);
};

/**
 * Hook to track when a section enters the viewport
 */
export const useSectionTracking = (sectionId: string, ref: React.RefObject<HTMLElement | null>): void => {
  const hasTracked = useRef(false);

  useEffect(() => {
    if (!isGAEnabled() || !ref.current || hasTracked.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasTracked.current) {
            hasTracked.current = true;
            trackSectionView(sectionId);
          }
        });
      },
      { threshold: 0.3 } // Trigger when 30% visible
    );

    observer.observe(ref.current);

    return () => observer.disconnect();
  }, [sectionId, ref]);
};

/**
 * Combined analytics hook for use in App.tsx
 * Handles page tracking and scroll depth
 */
export const useAnalytics = (): void => {
  usePageTracking();
  useScrollDepthTracking();
};

/**
 * Hook to create a tracked click handler
 */
export const useTrackedClick = <T extends (...args: unknown[]) => void>(
  trackingFn: () => void,
  onClick?: T
): ((...args: Parameters<T>) => void) => {
  return useCallback(
    (...args: Parameters<T>) => {
      trackingFn();
      onClick?.(...args);
    },
    [trackingFn, onClick]
  );
};
