import React, { useState } from 'react';
import { PortfolioItem } from '../types';
import { PORTFOLIO_DATA } from '../data/editorialData';
import { Sparkles, Eye, X, Scissors } from 'lucide-react';
import { motion } from 'motion/react';

export const PortfolioScreen: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [selectedLook, setSelectedLook] = useState<PortfolioItem | null>(null);

  const categories = [
    { id: 'all', label: 'All Archives' },
    { id: 'Couture Cuts', label: 'Architectural Cuts' },
    { id: 'Chai & Caramel Balayage', label: 'Chai Balayage' },
    { id: 'Royal Bridal Updos', label: 'Royal Bridal Updos' },
    { id: 'Runway & Editorial', label: 'Runway & Studio' },
  ];

  const filteredLooks =
    activeCategory === 'all'
      ? PORTFOLIO_DATA
      : PORTFOLIO_DATA.filter((item) => item.category === activeCategory);

  return (
    <div className="w-full bg-transparent section-veil text-[#2A1A1A] pt-28 sm:pt-36 md:pt-40 pb-24 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 sm:px-10 lg:px-16 space-y-16 relative z-10">
        
        {/* Editorial Screen Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center space-x-2 bg-white/80 text-[#4A1818] px-4 py-1.5 rounded-full text-xs font-sans uppercase tracking-[0.16em] border border-[rgba(74,24,24,0.08)] shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-[#4A1818]" />
            <span>Capello Visual Anthology · Mumbai & Delhi Archives</span>
          </div>

          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl text-[#2A1A1A] font-normal tracking-[-0.01em]">
            Lookbook & Portfolio
          </h1>

          <p className="font-serif italic text-base sm:text-lg text-[#2A1A1A]/75">
            "Where beauty becomes an experience. Photographic studies of Indian hair architecture and royal bridal crowns."
          </p>

          <p className="font-sans text-sm sm:text-base text-[#2A1A1A]/65 font-light leading-relaxed max-w-2xl mx-auto">
            Captured on medium-format grain across our Pali Hill penthouse, Mehrauli bridal suites, and backstage at Lakmé Fashion Week. Click any study to reveal cutting angles and colorist glaze formulas.
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

        {/* Portfolio Looks Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredLooks.map((look, idx) => (
            <motion.div
              key={look.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.08 }}
              className="card-glass overflow-hidden rounded-[12px] group cursor-pointer"
              onClick={() => setSelectedLook(look)}
            >
              {/* Image Frame */}
              <div className="aspect-[3/4] w-full overflow-hidden bg-[#FAF7F2] relative">
                <img
                  src={look.image}
                  alt={look.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                  <span className="text-white text-xs font-sans uppercase tracking-widest flex items-center space-x-2">
                    <Eye className="w-4 h-4" />
                    <span>View Formula Study</span>
                  </span>
                </div>
                <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm text-[#4A1818] text-[10px] font-sans uppercase tracking-[0.14em] px-3 py-1 rounded-full border border-[rgba(74,24,24,0.08)]">
                  {look.category}
                </div>
              </div>

              {/* Look Info */}
              <div className="p-6 space-y-2">
                <span className="text-[10px] font-sans text-[#2A1A1A]/50 uppercase tracking-widest block">
                  {look.season} · {look.stylist}
                </span>
                <h3 className="font-serif text-xl sm:text-2xl text-[#2A1A1A] group-hover:text-[#4A1818] transition-colors leading-snug">
                  {look.title}
                </h3>
                <p className="font-sans text-xs text-[#2A1A1A]/70 font-light line-clamp-2 leading-relaxed">
                  {look.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>

      {/* Selected Look Modal */}
      {selectedLook && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 animate-fadeIn">
          <div className="bg-white text-[#2A1A1A] max-w-2xl w-full rounded-[8px] shadow-2xl overflow-hidden border border-[rgba(74,24,24,0.08)] max-h-[90vh] overflow-y-auto">
            <div className="relative aspect-[16/10] bg-[#FAF7F2] overflow-hidden">
              <img
                src={selectedLook.image}
                alt={selectedLook.title}
                className="w-full h-full object-cover"
              />
              <button
                onClick={() => setSelectedLook(null)}
                className="absolute top-4 right-4 w-9 h-9 rounded-full bg-black/50 text-white flex items-center justify-center hover:bg-black/70 transition-colors cursor-pointer"
                aria-label="Close"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-6 sm:p-8 space-y-6">
              <div>
                <span className="text-xs font-sans uppercase tracking-widest text-[#4A1818] font-medium block mb-1">
                  {selectedLook.category} · {selectedLook.season}
                </span>
                <h2 className="font-serif text-2xl sm:text-3xl text-[#2A1A1A]">
                  {selectedLook.title}
                </h2>
                <p className="text-xs font-sans text-[#2A1A1A]/60 mt-1">
                  Practitioner: {selectedLook.stylist}
                </p>
              </div>

              <p className="font-sans text-sm text-[#2A1A1A]/80 font-light leading-relaxed">
                {selectedLook.description}
              </p>

              <div className="p-4 rounded-[6px] bg-[#FCE5C0]/40 border border-[#4A1818]/10 space-y-1">
                <div className="flex items-center space-x-2 text-xs font-sans uppercase tracking-wider text-[#4A1818] font-semibold">
                  <Scissors className="w-3.5 h-3.5" />
                  <span>Technical & Formulation Formula</span>
                </div>
                <p className="font-serif italic text-sm text-[#2A1A1A]/85">
                  "{selectedLook.formulaNote}"
                </p>
              </div>

              <div className="pt-2 flex justify-end">
                <button
                  onClick={() => setSelectedLook(null)}
                  className="btn-maroon-pill !py-2.5 !px-6 text-xs"
                >
                  Close Archive
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
