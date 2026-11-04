import React, { useState } from 'react';
import { ServiceItem, ScreenId } from '../types';
import { SERVICES_DATA } from '../data/editorialData';
import { Sparkles, Clock, Filter, ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';

interface ServicesScreenProps {
  onSelectService: (service: ServiceItem) => void;
  onBookService: (service: ServiceItem) => void;
  onNavigate: (screen: ScreenId) => void;
}

export const ServicesScreen: React.FC<ServicesScreenProps> = ({
  onSelectService,
  onBookService,
  onNavigate,
}) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [activeTier, setActiveTier] = useState<string>('all');

  const categories = [
    { id: 'all', label: 'All Rituals' },
    { id: 'hair', label: 'Hair Architecture' },
    { id: 'color', label: 'Chai Balayage' },
    { id: 'scalp', label: 'Ayurvedic Scalp Therapy' },
    { id: 'bridal', label: 'Royal Bridal Couture' },
    { id: 'facial', label: '24K Gold Facial' },
    { id: 'botanical', label: 'Organic Nanoplastia' },
  ];

  const tiers = [
    { id: 'all', label: 'All Practitioners' },
    { id: 'Artistic Director', label: 'Artistic Director' },
    { id: 'Master Stylist', label: 'Master Stylist' },
    { id: 'Senior Resident', label: 'Senior Resident' },
  ];

  const filteredServices = SERVICES_DATA.filter((s) => {
    const matchCat = activeCategory === 'all' || s.category === activeCategory;
    const matchTier = activeTier === 'all' || s.recommendedTier === activeTier;
    return matchCat && matchTier;
  });

  return (
    <div className="w-full bg-transparent section-veil text-[#2A1A1A] pt-28 sm:pt-36 md:pt-40 pb-24 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 sm:px-10 lg:px-16 space-y-16 relative z-10">
        
        {/* Editorial Screen Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center space-x-2 bg-white/80 text-[#4A1818] px-4 py-1.5 rounded-full text-xs font-sans uppercase tracking-[0.16em] border border-[rgba(74,24,24,0.08)] shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-[#4A1818]" />
            <span>Capello Tariff & Protocols · India</span>
          </div>

          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl text-[#2A1A1A] font-normal tracking-[-0.01em]">
            Treatment Menu & Protocols
          </h1>

          <p className="font-serif italic text-base sm:text-lg text-[#2A1A1A]/75">
            "Where beauty becomes an experience. Every gesture begins with a 200x microscopic dermascope diagnosis."
          </p>

          <p className="font-sans text-sm sm:text-base text-[#2A1A1A]/65 font-light leading-relaxed max-w-2xl mx-auto">
            All appointments include a private consultation, tailored botanical scalp bath, Kansa wand marma pressure relief, and cold-air silk finishing. All tariffs are in Indian Rupees (₹).
          </p>
        </div>

        {/* Filter Bar */}
        <div className="space-y-4 pt-4 border-b border-[rgba(74,24,24,0.12)] pb-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            {/* Category Pills */}
            <div className="flex flex-wrap gap-2">
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

            {/* Tier Filter */}
            <div className="flex items-center space-x-2 text-xs font-sans text-[#2A1A1A]/70">
              <Filter className="w-3.5 h-3.5 text-[#4A1818]" />
              <select
                value={activeTier}
                onChange={(e) => setActiveTier(e.target.value)}
                className="bg-white text-xs font-sans text-[#2A1A1A] focus:outline-none border border-[rgba(74,24,24,0.15)] rounded-full px-3 py-1.5 cursor-pointer shadow-sm"
              >
                {tiers.map((t) => (
                  <option key={t.id} value={t.id}>
                    {t.label}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Service Menu Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredServices.map((service, idx) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.06 }}
              className="card-glass p-6 sm:p-7 flex flex-col justify-between group cursor-pointer"
              onClick={() => onSelectService(service)}
            >
              <div>
                <div className="aspect-[16/10] sm:aspect-[4/5] w-full rounded-[8px] overflow-hidden mb-6 bg-[#FAF7F2] relative">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm text-[#4A1818] text-[10px] font-sans uppercase tracking-[0.14em] px-3 py-1 rounded-full border border-[rgba(74,24,24,0.08)]">
                    {service.category.toUpperCase()}
                  </div>
                  <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm text-[#2A1A1A] text-[10px] font-sans uppercase tracking-[0.1em] px-3 py-1 rounded-full border border-[rgba(74,24,24,0.08)]">
                    {service.recommendedTier}
                  </div>
                </div>

                <h3 className="font-serif text-[24px] sm:text-[26px] text-[#2A1A1A] leading-tight mb-2 group-hover:text-[#4A1818] transition-colors">
                  {service.title}
                </h3>

                <div className="flex items-center space-x-2 text-xs font-sans text-[#2A1A1A]/65 mb-3">
                  <Clock className="w-3.5 h-3.5 text-[#4A1818]" />
                  <span>{service.duration}</span>
                  <span>·</span>
                  <span className="italic">{service.subtitle}</span>
                </div>

                <p className="font-sans text-sm text-[#2A1A1A]/70 font-light leading-relaxed mb-6 line-clamp-2">
                  {service.description}
                </p>
              </div>

              <div className="pt-4 border-t border-[rgba(74,24,24,0.08)] flex items-center justify-between">
                <div>
                  <span className="text-[10px] uppercase tracking-wider text-[#2A1A1A]/50 block">
                    Tariff From
                  </span>
                  <span className="font-serif text-2xl text-[#2A1A1A]">
                    ₹{service.price.toLocaleString('en-IN')}
                  </span>
                </div>

                <div className="flex items-center space-x-3">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      onSelectService(service);
                    }}
                    className="text-xs font-sans text-[#4A1818] hover:text-[#6E1A1A] underline underline-offset-4 cursor-pointer hidden sm:inline"
                  >
                    View Ritual
                  </button>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      onBookService(service);
                    }}
                    className="btn-maroon-pill !py-2 !px-5 !text-xs"
                  >
                    Book Now
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Private Bridal & Festive Concierge Banner */}
        <div className="card-white p-8 sm:p-12 rounded-[8px] bg-[#FFFFFF] border border-[rgba(74,24,24,0.08)] space-y-6">
          <div className="max-w-2xl space-y-3">
            <span className="text-xs font-sans tracking-[0.2em] uppercase text-[#4A1818] font-medium block">
              Exclusive Bridal & Festive Concierge
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl text-[#2A1A1A]">
              Bridal Trousseau Consultations & Dupatta Draping Trials
            </h3>
            <p className="font-sans text-sm text-[#2A1A1A]/70 font-light leading-relaxed">
              For brides and festive wedding parties, we offer private suites equipped with 360-degree vanity lighting and heirloom jewelry integration. Reserve a preliminary consultation with Artistic Director Alistair Fernandes.
            </p>
          </div>

          <div className="pt-2 flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <button
              onClick={() => onNavigate('booking')}
              className="btn-maroon-pill"
            >
              Schedule Bridal Consultation
            </button>
            <span className="text-xs font-serif italic text-[#2A1A1A]/60">
              Absolute discretion guaranteed for every guest.
            </span>
          </div>
        </div>

      </div>
    </div>
  );
};
