import React, { useState } from 'react';
import { CartItem } from '../types';
import { X, Trash2, ArrowRight, ShieldCheck, Gift, CheckCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onUpdateQuantity: (productId: string, delta: number) => void;
  onRemoveItem: (productId: string) => void;
  onClearCart: () => void;
}

export const CartDrawer: React.FC<CartDrawerProps> = ({
  isOpen,
  onClose,
  items,
  onUpdateQuantity,
  onRemoveItem,
  onClearCart,
}) => {
  const [selectedSample, setSelectedSample] = useState<string>('sample-keshya');
  const [orderComplete, setOrderComplete] = useState(false);

  if (!isOpen) return null;

  const subtotal = items.reduce(
    (sum, item) => sum + item.product.price * item.quantity,
    0
  );

  const handleCheckout = () => {
    setOrderComplete(true);
    setTimeout(() => {
      onClearCart();
      setOrderComplete(false);
      onClose();
    }, 3500);
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 overflow-hidden">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
          onClick={onClose}
        />

        <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="w-screen max-w-md bg-white text-[#2A1A1A] border-l border-[rgba(74,24,24,0.08)] flex flex-col shadow-2xl relative"
          >
            {/* Header */}
            <div className="p-6 border-b border-[rgba(74,24,24,0.08)] flex items-center justify-between bg-white">
              <div className="flex items-center space-x-2">
                <span className="font-serif text-2xl text-[#2A1A1A]">
                  Apothecary Bag
                </span>
                <span className="text-xs font-sans bg-[#FCE5C0]/40 text-[#4A1818] px-2.5 py-0.5 rounded-full font-semibold border border-[#4A1818]/10">
                  {items.reduce((acc, i) => acc + i.quantity, 0)} items
                </span>
              </div>
              <button
                onClick={onClose}
                className="p-1.5 text-[#2A1A1A]/70 hover:text-[#4A1818] rounded-full transition-colors cursor-pointer"
                aria-label="Close Bag"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Order Complete Screen */}
            {orderComplete ? (
              <div className="flex-1 p-8 flex flex-col items-center justify-center text-center space-y-4 bg-[#FAF7F2]">
                <div className="w-16 h-16 rounded-full bg-[#4A1818] text-white flex items-center justify-center shadow-lg">
                  <CheckCircle className="w-8 h-8" />
                </div>
                <h3 className="font-serif text-2xl sm:text-3xl text-[#2A1A1A]">
                  Apothecary Dispatch Confirmed
                </h3>
                <p className="text-xs font-sans text-[#2A1A1A]/70 max-w-xs leading-relaxed font-light">
                  Your numbered violet glass flacons are being packed with fresh cold-insulation and dispatched from our Mumbai atelier.
                </p>
                <div className="p-4 rounded-[6px] bg-white border border-[rgba(74,24,24,0.08)] text-xs text-[#4A1818] font-mono">
                  DISPATCH REF: CPL-DISP-{Math.floor(10000 + Math.random() * 90000)}
                </div>
              </div>
            ) : items.length === 0 ? (
              /* Empty Bag State */
              <div className="flex-1 p-8 flex flex-col items-center justify-center text-center space-y-4">
                <div className="w-14 h-14 rounded-full bg-[#FAF7F2] text-[#4A1818] flex items-center justify-center border border-[rgba(74,24,24,0.08)]">
                  <Gift className="w-6 h-6" />
                </div>
                <h3 className="font-serif text-xl text-[#2A1A1A]">
                  Your Bag is Currently Empty
                </h3>
                <p className="text-xs font-sans text-[#2A1A1A]/60 max-w-xs leading-relaxed font-light">
                  Discover our numbered hair elixirs, volcanic scalp exfoliants, and 24K saffron night oils.
                </p>
                <button
                  onClick={onClose}
                  className="btn-maroon-pill !py-2.5 !px-6 text-xs"
                >
                  Explore Apothecary
                </button>
              </div>
            ) : (
              /* Items List */
              <div className="flex-1 overflow-y-auto p-6 space-y-6">
                <div className="space-y-4 divide-y divide-[rgba(74,24,24,0.06)]">
                  {items.map(({ product, quantity }) => (
                    <div key={product.id} className="pt-4 first:pt-0 flex space-x-4">
                      {/* Thumbnail */}
                      <div className="w-20 h-24 rounded-[6px] bg-[#FAF7F2] p-2 flex items-center justify-center border border-[rgba(74,24,24,0.08)] flex-shrink-0">
                        <img
                          src={product.image}
                          alt={product.name}
                          className="max-h-full max-w-full object-contain"
                        />
                      </div>

                      {/* Info */}
                      <div className="flex-1 flex flex-col justify-between">
                        <div>
                          <div className="flex items-start justify-between">
                            <h4 className="font-serif text-base text-[#2A1A1A] leading-snug">
                              {product.name}
                            </h4>
                            <button
                              onClick={() => onRemoveItem(product.id)}
                              className="text-[#2A1A1A]/40 hover:text-[#4A1818] p-1 cursor-pointer transition-colors"
                              title="Remove item"
                            >
                              <Trash2 className="w-4 h-4" />
                            </button>
                          </div>
                          <span className="text-[11px] font-sans text-[#2A1A1A]/60 block mt-0.5">
                            {product.size}
                          </span>
                        </div>

                        {/* Quantity & Price */}
                        <div className="flex items-center justify-between pt-2">
                          <div className="flex items-center border border-[rgba(74,24,24,0.15)] rounded-full overflow-hidden">
                            <button
                              onClick={() => onUpdateQuantity(product.id, -1)}
                              className="px-2.5 py-0.5 text-xs text-[#2A1A1A] hover:bg-[#FCE5C0]/40 cursor-pointer"
                            >
                              -
                            </button>
                            <span className="px-2.5 text-xs font-sans font-semibold text-[#2A1A1A]">
                              {quantity}
                            </span>
                            <button
                              onClick={() => onUpdateQuantity(product.id, 1)}
                              className="px-2.5 py-0.5 text-xs text-[#2A1A1A] hover:bg-[#FCE5C0]/40 cursor-pointer"
                            >
                              +
                            </button>
                          </div>

                          <span className="font-serif text-lg text-[#2A1A1A] font-medium">
                            ₹{(product.price * quantity).toLocaleString('en-IN')}
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Complimentary Miniature Sample Selection */}
                <div className="p-4 rounded-[6px] bg-[#FAF7F2] border border-[rgba(74,24,24,0.08)] space-y-3">
                  <div className="flex items-center space-x-2 text-xs font-sans uppercase tracking-widest text-[#4A1818] font-semibold">
                    <Gift className="w-3.5 h-3.5" />
                    <span>Complimentary Deluxe 15ml Vial</span>
                  </div>
                  <p className="text-[11px] font-sans text-[#2A1A1A]/70 font-light">
                    Select a curated miniature Ayurvedic elixir with your dispatch:
                  </p>
                  <div className="space-y-1.5 text-xs font-sans">
                    {[
                      { id: 'sample-keshya', label: '15ml N° 01 Botanical Hair Nectar' },
                      { id: 'sample-mist', label: '15ml N° 04 Madurai Jasmine Mist' },
                      { id: 'sample-gommage', label: '20g N° 03 Himalayan Scalp Scrub' },
                    ].map((sample) => (
                      <label
                        key={sample.id}
                        className="flex items-center space-x-2 cursor-pointer text-[#2A1A1A]/80 hover:text-[#4A1818]"
                      >
                        <input
                          type="radio"
                          name="sample"
                          checked={selectedSample === sample.id}
                          onChange={() => setSelectedSample(sample.id)}
                          className="accent-[#4A1818]"
                        />
                        <span className="text-[11px]">{sample.label}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Secure Shipping note */}
                <div className="flex items-center space-x-2 text-xs text-[#2A1A1A]/60 pt-2 font-sans font-light">
                  <ShieldCheck className="w-4 h-4 text-[#4A1818]" />
                  <span>Complimentary insured courier dispatch across India.</span>
                </div>
              </div>
            )}

            {/* Footer Summary & Checkout */}
            {!orderComplete && items.length > 0 && (
              <div className="p-6 border-t border-[rgba(74,24,24,0.08)] bg-white space-y-4">
                <div className="space-y-1.5 text-xs font-sans">
                  <div className="flex justify-between text-[#2A1A1A]/70">
                    <span>Subtotal</span>
                    <span>₹{subtotal.toLocaleString('en-IN')}</span>
                  </div>
                  <div className="flex justify-between text-[#2A1A1A]/70">
                    <span>Atelier Hand-Packaging & Delivery</span>
                    <span className="text-[#4A1818] font-medium">Complimentary</span>
                  </div>
                  <div className="flex justify-between text-base font-serif text-[#2A1A1A] pt-2 border-t border-[rgba(74,24,24,0.08)] font-semibold">
                    <span>Estimated Total</span>
                    <span>₹{subtotal.toLocaleString('en-IN')}</span>
                  </div>
                </div>

                <button
                  onClick={handleCheckout}
                  className="w-full btn-maroon-pill !py-3.5 flex items-center justify-center space-x-2 shadow-lg"
                >
                  <span>Proceed to Dispatch Concierge</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </AnimatePresence>
  );
};
