import { X, Ship } from 'lucide-react';
import { QUOTE_URL } from '../constants';

interface PromoBannerProps {
  isVisible: boolean;
  onClose: () => void;
}

const PromoBanner = ({ isVisible, onClose }: PromoBannerProps) => {
  if (!isVisible) return null;

  return (
    <div className="fixed top-0 left-0 right-0 z-[60] bg-gradient-to-r from-aqua-dark via-aqua to-ocean text-white py-2.5">
      <div className="container mx-auto px-4 flex items-center justify-between gap-2 sm:gap-3 text-xs sm:text-sm md:text-base">
        <div className="flex-1 flex items-center justify-center gap-2 sm:gap-3">
          <Ship className="w-5 h-5 flex-shrink-0 hidden sm:block" />
          <p className="text-center leading-tight sm:leading-normal">
            <a
              href={QUOTE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-yellow transition-colors"
            >
              <span className="hidden sm:inline">
                <span className="font-semibold">Limited Time!</span> Get FREE onboard credit for booking a cruise until February 15!{' '}
                <span className="underline font-semibold">Book Now</span>
              </span>
              <span className="sm:hidden">
                <span className="font-semibold">FREE</span> cruise onboard credit until Feb 15!{' '}
                <span className="underline font-semibold">Book Now</span>
              </span>
            </a>
          </p>
        </div>
        <button
          onClick={onClose}
          className="flex-shrink-0 p-1 hover:bg-white/20 rounded transition-colors"
          aria-label="Dismiss banner"
        >
          <X className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};

export default PromoBanner;
