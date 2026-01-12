import { useEffect } from 'react';
import { X } from 'lucide-react';
import type { ReactNode } from 'react';
import { QUOTE_URL } from '../../constants';

export interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  // Header
  icon?: ReactNode;
  label?: string;
  badge?: string;
  title: string;
  subtitle?: string;
  // Content
  children: ReactNode;
  // Footer
  ctaText?: string;
  ctaUrl?: string;
  showFooter?: boolean;
}

export const Modal = ({
  isOpen,
  onClose,
  icon,
  label,
  badge,
  title,
  subtitle,
  children,
  ctaText = 'Get Your Free Quote',
  ctaUrl = QUOTE_URL,
  showFooter = true,
}: ModalProps) => {
  // Handle escape key and body scroll lock
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      window.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4"
      onClick={onClose}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />

      {/* Modal */}
      <div
        className="relative bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[85vh] overflow-hidden animate-fade-in"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="bg-gradient-to-r from-ocean via-ocean-light to-aqua-dark p-6 text-white">
          <div className="flex items-start justify-between gap-4">
            <div className="flex gap-4">
              {/* Icon */}
              {icon && (
                <div className="flex-shrink-0 w-14 h-14 rounded-full bg-white/20 flex items-center justify-center text-white">
                  {icon}
                </div>
              )}
              <div>
                {/* Label */}
                {label && (
                  <p className="text-white/80 text-xs uppercase tracking-wider mb-1">
                    {label}
                  </p>
                )}
                {/* Badge */}
                {badge && (
                  <span className="inline-block px-3 py-1 bg-yellow text-ocean text-xs font-bold uppercase tracking-wider rounded-full mb-2">
                    {badge}
                  </span>
                )}
                {/* Title */}
                <h2 className="font-serif text-2xl md:text-3xl font-semibold text-white">
                  {title}
                </h2>
                {/* Subtitle */}
                {subtitle && (
                  <p className="text-yellow text-sm mt-2">{subtitle}</p>
                )}
              </div>
            </div>
            <button
              onClick={onClose}
              className="flex-shrink-0 w-10 h-10 rounded-full bg-white/20 hover:bg-white/40 flex items-center justify-center transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto max-h-[50vh]">
          {children}
        </div>

        {/* Footer */}
        {showFooter && (
          <div className="p-6 bg-gray-50 border-t border-gray-100">
            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href={ctaUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 px-6 py-3 bg-magenta text-white font-semibold text-sm uppercase tracking-wide rounded-lg text-center hover:bg-magenta-light transition-all duration-300"
              >
                {ctaText}
              </a>
              <button
                onClick={onClose}
                className="px-6 py-3 bg-gray-200 text-gray-700 font-semibold text-sm uppercase tracking-wide rounded-lg hover:bg-gray-300 transition-all duration-300"
              >
                Close
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Modal;
