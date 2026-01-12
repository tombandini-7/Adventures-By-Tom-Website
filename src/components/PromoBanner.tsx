import { X, Ship } from 'lucide-react';

interface PromoBannerProps {
  isVisible: boolean;
  onClose: () => void;
  onLearnMore?: () => void;
}

const PromoBanner = ({ isVisible, onClose, onLearnMore }: PromoBannerProps) => {
  if (!isVisible) return null;

  return (
    <div className="fixed top-0 left-0 right-0 z-[60] bg-gradient-to-r from-aqua-dark via-aqua to-ocean text-white py-2.5 px-4">
      <div className="container mx-auto flex items-center justify-center gap-3 text-sm md:text-base">
        <Ship className="w-5 h-5 flex-shrink-0 hidden sm:block" />
        <p className="text-center">
          <span className="font-semibold">Hurry!</span> 50% off Disney Cruise Line deposits ends January 18!{' '}
{onLearnMore && (
            <button
              onClick={onLearnMore}
              className="underline font-semibold hover:text-yellow transition-colors"
            >
              Learn More
            </button>
          )}
        </p>
        <button
          onClick={onClose}
          className="absolute right-3 top-1/2 -translate-y-1/2 p-1 hover:bg-white/20 rounded transition-colors"
          aria-label="Dismiss banner"
        >
          <X className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};

export default PromoBanner;
