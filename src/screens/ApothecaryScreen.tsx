import React, { useState } from 'react';
import { ProductItem } from '../types';
import { PRODUCTS_DATA } from '../data/editorialData';
import { ShoppingBag, Eye, Leaf } from 'lucide-react';
import { motion } from 'motion/react';

interface ApothecaryScreenProps {
  onSelectProduct: (product: ProductItem) => void;
  onAddToCart: (product: ProductItem, quantity: number) => void;
}

export const ApothecaryScreen: React.FC<ApothecaryScreenProps> = ({
  onSelectProduct,
  onAddToCart,
}) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const categories = [
    { id: 'all', label: 'All Formulations' },
    { id: 'hair-elixir', label: 'Hair Nectars & Mists' },
    { id: 'scalp-serum', label: 'Volcanic Scalp Scrubs' },
    { id: 'fragrance', label: 'Jasmine & Vetiver Mists' },
    { id: 'treatment', label: 'Keratin Repair Masks' },
    { id: 'botanical-balm', label: '24K Saffron Night Oil' },
  ];

  const filteredProducts =
    activeCategory === 'all'
      ? PRODUCTS_DATA
      : PRODUCTS_DATA.filter((p) => p.category === activeCategory);

  return (
    <div className="w-full bg-transparent section-veil text-[#2A1A1A] pt-28 sm:pt-36 md:pt-40 pb-24 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 sm:px-10 lg:px-16 space-y-16 relative z-10">
        
        {/* Editorial Masthead */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center space-x-2 bg-white/80 text-[#4A1818] px-4 py-1.5 rounded-full text-xs font-sans uppercase tracking-[0.16em] border border-[rgba(74,24,24,0.08)] shadow-sm">
            <Leaf className="w-3.5 h-3.5 text-[#4A1818]" />
            <span>Capello Botanical Apothecary · Cold-Pressed Ayurvedic Nectars</span>
          </div>

          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl text-[#2A1A1A] font-normal tracking-[-0.01em]">
            The Botanical Apothecary
          </h1>

          <p className="font-serif italic text-base sm:text-lg text-[#2A1A1A]/75">
            "Heirloom Bhringraj, cold-pressed Kerala coconuts, and wild Kashmiri saffron bottled in numbered dark violet glass."
          </p>

          <p className="font-sans text-sm sm:text-base text-[#2A1A1A]/65 font-light leading-relaxed max-w-2xl mx-auto">
            Handcrafted under the guidance of our Ayurvedic trichologists in small batches. Free of synthetic silicones, mineral oils, phthalates, and aggressive alcohol carriers.
          </p>
        </div>

        {/* Category Filter Pills */}
        <div className="flex justify-center flex-wrap gap-2 pt-2 border-b border-[rgba(74,24,24,0.12)] pb-6">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`text-xs font-sans tracking-wide px-4 py-2 rounded-full transition-all cursor-pointer ${
                activeCategory === cat.id
                  ? 'bg-[#4A1818] text-white font-medium shadow-sm'
                  : 'bg-white text-[#2A1A1A]/80 hover:text-[#2A1A1A] hover:bg-white/90 border border-[rgba(74,24,24,0.08)]'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Product Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product, idx) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.08 }}
              className="card-glass p-6 rounded-[12px] flex flex-col justify-between group cursor-pointer"
              onClick={() => onSelectProduct(product)}
            >
              <div>
                {/* Product Image Frame */}
                <div className="aspect-[4/5] bg-[#FAF7F2] rounded-[6px] p-6 flex items-center justify-center overflow-hidden mb-6 relative border border-[rgba(74,24,24,0.06)]">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="max-h-full max-w-full object-contain group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm text-[#4A1818] text-[10px] font-sans uppercase tracking-[0.14em] px-2.5 py-0.5 rounded-full border border-[rgba(74,24,24,0.08)]">
                    {product.size}
                  </div>
                </div>

                <span className="text-[10px] font-sans uppercase tracking-[0.16em] text-[#4A1818] block mb-1 font-medium">
                  {product.category.replace('-', ' ')}
                </span>
                
                <h3 className="font-serif text-xl sm:text-2xl text-[#2A1A1A] group-hover:text-[#4A1818] transition-colors leading-snug">
                  {product.name}
                </h3>
                
                <p className="font-sans text-xs text-[#2A1A1A]/65 mt-1 font-light">
                  {product.subtitle}
                </p>

                {/* Scent / Botanical Notes */}
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {product.notes.map((note, i) => (
                    <span
                      key={i}
                      className="text-[10px] font-sans text-[#2A1A1A]/60 bg-[#FAF7F2] px-2 py-0.5 rounded border border-[rgba(74,24,24,0.06)]"
                    >
                      {note}
                    </span>
                  ))}
                </div>
              </div>

              {/* Price & Action */}
              <div className="pt-6 border-t border-[rgba(74,24,24,0.08)] flex items-center justify-between mt-6">
                <div>
                  <span className="text-[10px] uppercase tracking-wider text-[#2A1A1A]/50 block">
                    Price
                  </span>
                  <span className="font-serif text-xl sm:text-2xl text-[#2A1A1A]">
                    ₹{product.price.toLocaleString('en-IN')}
                  </span>
                </div>

                <div className="flex items-center space-x-2">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      onSelectProduct(product);
                    }}
                    className="p-2 rounded-full border border-[rgba(74,24,24,0.15)] text-[#2A1A1A]/70 hover:text-[#4A1818] hover:border-[#4A1818] transition-colors cursor-pointer"
                    title="Quick inspect"
                  >
                    <Eye className="w-4 h-4" />
                  </button>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      onAddToCart(product, 1);
                    }}
                    className="btn-maroon-pill !py-2 !px-4 !text-xs flex items-center space-x-1.5"
                  >
                    <ShoppingBag className="w-3.5 h-3.5" />
                    <span>Add to Bag</span>
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </div>
  );
};
