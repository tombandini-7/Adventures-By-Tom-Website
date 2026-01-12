import { X, Ship } from 'lucide-react';

interface PromoBannerProps {
  isVisible: boolean;
  onClose: () => void;
  onLearnMore?: () => void;
}

const PromoBanner = ({ isVisible, onClose, onLearnMore }: PromoBannerProps) => {
  if (!isVisible) return null;

  return (
    <div className="fixed top-0 left-0 right-0 z-[60] bg-gradient-to-r from-aqua-dark via-aqua to-ocean text-white py-2.5">
      <div className="container mx-auto px-4 flex items-center justify-between gap-2 sm:gap-3 text-xs sm:text-sm md:text-base">
        <div className="flex-1 flex items-center justify-center gap-2 sm:gap-3">
          <Ship className="w-5 h-5 flex-shrink-0 hidden sm:block" />
          <p className="text-center leading-tight sm:leading-normal">
            <span className="font-semibold">Hurry!</span>{' '}
            <span className="hidden sm:inline">50% off Disney Cruise Line deposits ends January 18!</span>
            <span className="sm:hidden">50% off DCL deposits ends Jan 18!</span>{' '}
            {onLearnMore && (
              <button
                onClick={onLearnMore}
                className="underline font-semibold hover:text-yellow transition-colors"
              >
                Learn More
              </button>
            )}
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
