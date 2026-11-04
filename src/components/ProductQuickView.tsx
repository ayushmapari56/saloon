import React, { useState } from 'react';
import { ProductItem } from '../types';
import { X, Check, ShoppingBag } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface ProductQuickViewProps {
  product: ProductItem | null;
  onClose: () => void;
  onAddToCart: (product: ProductItem, quantity: number) => void;
}

export const ProductQuickView: React.FC<ProductQuickViewProps> = ({
  product,
  onClose,
  onAddToCart,
}) => {
  const [quantity, setQuantity] = useState(1);
  const [added, setAdded] = useState(false);

  if (!product) return null;

  const handleAdd = () => {
    onAddToCart(product, quantity);
    setAdded(true);
    setTimeout(() => {
      setAdded(false);
      onClose();
    }, 1200);
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/60 backdrop-blur-md">
        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 16 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.96, y: 16 }}
          transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
          className="bg-white text-[#2A1A1A] border border-[rgba(74,24,24,0.08)] max-w-3xl w-full max-h-[90vh] overflow-y-auto relative rounded-[8px] shadow-2xl"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header Close Bar */}
          <div className="sticky top-0 bg-white/95 backdrop-blur-md border-b border-[rgba(74,24,24,0.08)] px-6 py-4 flex items-center justify-between z-10">
            <span className="text-[11px] font-sans tracking-[0.16em] uppercase text-[#4A1818] font-semibold">
              Capello Botanical Apothecary · {product.size}
            </span>
            <button
              onClick={onClose}
              className="p-1 text-[#2A1A1A]/70 hover:text-[#4A1818] transition-colors rounded-full cursor-pointer"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Modal Layout: 2 Columns */}
          <div className="grid grid-cols-1 md:grid-cols-2">
            {/* Image Column */}
            <div className="relative bg-[#FAF7F2] aspect-[4/5] overflow-hidden border-b md:border-b-0 md:border-r border-[rgba(74,24,24,0.08)] p-8 flex items-center justify-center">
              <img
                src={product.image}
                alt={product.name}
                className="max-h-full max-w-full object-contain"
              />
            </div>

            {/* Content Column */}
            <div className="p-6 sm:p-8 flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <div>
                  <span className="text-[10px] font-sans uppercase tracking-[0.16em] text-[#4A1818] block mb-1 font-semibold">
                    {product.category.replace('-', ' ')}
                  </span>
                  <h2 className="font-serif text-2xl sm:text-3xl text-[#2A1A1A]">
                    {product.name}
                  </h2>
                  <p className="font-sans text-xs text-[#2A1A1A]/65 mt-1 font-light">
                    {product.subtitle}
                  </p>
                </div>

                <p className="font-sans text-xs sm:text-sm text-[#2A1A1A]/80 font-light leading-relaxed">
                  {product.description}
                </p>

                {/* Scent notes */}
                <div className="space-y-1.5">
                  <span className="text-[10px] font-sans uppercase tracking-widest text-[#2A1A1A]/50 block">
                    Olfactory & Botanical Notes
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {product.notes.map((note, i) => (
                      <span
                        key={i}
                        className="text-xs font-sans text-[#4A1818] bg-[#FCE5C0]/40 px-2.5 py-0.5 rounded border border-[#4A1818]/10"
                      >
                        {note}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Key Ingredients */}
                <div className="space-y-1.5">
                  <span className="text-[10px] font-sans uppercase tracking-widest text-[#2A1A1A]/50 block">
                    Vedic Herb Infusions
                  </span>
                  <p className="text-xs font-sans text-[#2A1A1A]/70 leading-relaxed">
                    {product.ingredients.join(', ')}
                  </p>
                </div>
              </div>

              {/* Quantity & Add to Cart */}
              <div className="pt-6 border-t border-[rgba(74,24,24,0.08)] space-y-4">
                <div className="flex items-center justify-between">
                  <span className="font-serif text-2xl text-[#2A1A1A]">
                    ₹{(product.price * quantity).toLocaleString('en-IN')}
                  </span>

                  {/* Quantity selector */}
                  <div className="flex items-center border border-[rgba(74,24,24,0.2)] rounded-full overflow-hidden">
                    <button
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      className="px-3 py-1 text-sm text-[#2A1A1A] hover:bg-[#FCE5C0]/40 cursor-pointer"
                    >
                      -
                    </button>
                    <span className="px-3 text-xs font-sans font-semibold text-[#2A1A1A]">
                      {quantity}
                    </span>
                    <button
                      onClick={() => setQuantity(quantity + 1)}
                      className="px-3 py-1 text-sm text-[#2A1A1A] hover:bg-[#FCE5C0]/40 cursor-pointer"
                    >
                      +
                    </button>
                  </div>
                </div>

                <button
                  onClick={handleAdd}
                  disabled={added}
                  className="w-full btn-maroon-pill !py-3 flex items-center justify-center space-x-2"
                >
                  {added ? (
                    <>
                      <Check className="w-4 h-4" />
                      <span>Added to Apothecary Bag</span>
                    </>
                  ) : (
                    <>
                      <ShoppingBag className="w-4 h-4" />
                      <span>Add to Apothecary Bag</span>
                    </>
                  )}
                </button>
              </div>

            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
