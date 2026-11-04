import React from 'react';
import { ServiceItem } from '../types';
import { X, Clock, Sparkles, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface ServiceDrawerModalProps {
  service: ServiceItem | null;
  onClose: () => void;
  onSelectForBooking: (service: ServiceItem) => void;
}

export const ServiceDrawerModal: React.FC<ServiceDrawerModalProps> = ({
  service,
  onClose,
  onSelectForBooking,
}) => {
  if (!service) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/60 backdrop-blur-md">
        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 16 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.96, y: 16 }}
          transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
          className="bg-white text-[#2A1A1A] border border-[rgba(74,24,24,0.08)] max-w-2xl w-full max-h-[90vh] overflow-y-auto relative rounded-[8px] shadow-2xl"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header Close Bar */}
          <div className="sticky top-0 bg-white/95 backdrop-blur-md border-b border-[rgba(74,24,24,0.08)] px-6 py-4 flex items-center justify-between z-10">
            <div className="flex items-center space-x-2">
              <span className="text-[11px] font-sans tracking-[0.16em] uppercase text-[#4A1818] font-semibold">
                Capello Treatment Protocol · {service.category.toUpperCase()}
              </span>
            </div>
            <button
              onClick={onClose}
              className="p-1 text-[#2A1A1A]/70 hover:text-[#4A1818] transition-colors rounded-full cursor-pointer"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Hero Visual & Title */}
          <div className="relative aspect-[16/9] w-full overflow-hidden bg-[#FAF7F2] border-b border-[rgba(74,24,24,0.08)]">
            <img
              src={service.image}
              alt={service.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent flex items-end p-6">
              <div className="text-white">
                <span className="inline-block text-[10px] font-sans uppercase tracking-[0.16em] text-[#FCE5C0] mb-1 font-semibold">
                  {service.recommendedTier}
                </span>
                <h2 className="font-serif text-2xl sm:text-3xl text-white">
                  {service.title}
                </h2>
                <p className="font-sans text-xs text-white/80 mt-1">
                  Duration: {service.duration} · {service.subtitle}
                </p>
              </div>
            </div>
          </div>

          {/* Modal Body */}
          <div className="p-6 sm:p-8 space-y-6">
            {/* Description */}
            <div>
              <span className="text-[11px] font-sans uppercase tracking-widest text-[#4A1818] font-semibold block mb-2">
                Atelier Philosophy & Architecture
              </span>
              <p className="font-sans text-sm text-[#2A1A1A]/80 font-light leading-relaxed">
                {service.description}
              </p>
            </div>

            {/* Step-by-Step Ritual Protocol */}
            <div className="space-y-3">
              <span className="text-[11px] font-sans uppercase tracking-widest text-[#4A1818] font-semibold block">
                Chronological Ritual Sequence
              </span>
              <div className="space-y-2.5">
                {service.ritualSteps.map((step, idx) => (
                  <div key={idx} className="flex items-start space-x-3 text-xs sm:text-sm font-sans text-[#2A1A1A]/85">
                    <span className="font-mono text-xs text-[#4A1818] font-bold mt-0.5 w-5 flex-shrink-0">
                      0{idx + 1}.
                    </span>
                    <span>{step}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Key Botanical Ingredients */}
            <div className="pt-4 border-t border-[rgba(74,24,24,0.08)] space-y-2">
              <span className="text-[11px] font-sans uppercase tracking-widest text-[#4A1818] font-semibold block">
                Active Botanical & Mineral Fractions
              </span>
              <div className="flex flex-wrap gap-2">
                {service.keyIngredients.map((ing, i) => (
                  <span
                    key={i}
                    className="text-xs font-sans text-[#4A1818] bg-[#FCE5C0]/40 px-3 py-1 rounded-full border border-[#4A1818]/10"
                  >
                    {ing}
                  </span>
                ))}
              </div>
            </div>

            {/* Pricing & CTA */}
            <div className="pt-6 border-t border-[rgba(74,24,24,0.08)] flex items-center justify-between">
              <div>
                <span className="text-[10px] uppercase tracking-wider text-[#2A1A1A]/50 block">
                  Tariff (Inc. Taxes)
                </span>
                <span className="font-serif text-2xl sm:text-3xl text-[#2A1A1A] font-semibold">
                  ₹{service.price.toLocaleString('en-IN')}
                </span>
              </div>

              <div className="flex items-center space-x-3">
                <button
                  onClick={onClose}
                  className="btn-maroon-outline !py-2.5 !px-5 text-xs"
                >
                  Close
                </button>
                <button
                  onClick={() => {
                    onSelectForBooking(service);
                    onClose();
                  }}
                  className="btn-maroon-pill !py-2.5 !px-6 text-xs flex items-center space-x-1.5"
                >
                  <span>Book Private Suite</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
