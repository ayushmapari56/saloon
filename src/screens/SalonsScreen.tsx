import React from 'react';
import { SALONS_DATA } from '../data/editorialData';
import { MapPin, Phone, Clock, ArrowRight, Shield } from 'lucide-react';
import { motion } from 'motion/react';

interface SalonsScreenProps {
  onSelectSalonForBooking: (salonId: string) => void;
}

export const SalonsScreen: React.FC<SalonsScreenProps> = ({
  onSelectSalonForBooking,
}) => {
  return (
    <div className="w-full bg-transparent section-veil text-[#2A1A1A] pt-28 sm:pt-36 md:pt-40 pb-24 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 sm:px-10 lg:px-16 space-y-16 relative z-10">
        
        {/* Screen Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center space-x-2 bg-white/80 text-[#4A1818] px-4 py-1.5 rounded-full text-xs font-sans uppercase tracking-[0.16em] border border-[rgba(74,24,24,0.08)] shadow-sm">
            <MapPin className="w-3.5 h-3.5 text-[#4A1818]" />
            <span>Capello Flagships · Mumbai · New Delhi · Bengaluru · Hyderabad</span>
          </div>

          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl text-[#2A1A1A] font-normal tracking-[-0.01em]">
            Flagship Sanctuaries
          </h1>

          <p className="font-serif italic text-base sm:text-lg text-[#2A1A1A]/75">
            "Where beauty becomes an experience. Architectural quietude and unhurried discretion across India's premier enclaves."
          </p>

          <p className="font-sans text-sm sm:text-base text-[#2A1A1A]/65 font-light leading-relaxed max-w-2xl mx-auto">
            Designed in collaboration with celebrated minimalist architects, incorporating honed Rajasthan sandstone, hand-chiseled travertine, and acoustic clay walls to keep urban bustle out.
          </p>
        </div>

        {/* 4 Flagship Indian Salons Showcase */}
        <div className="space-y-12">
          {SALONS_DATA.map((salon, idx) => (
            <motion.div
              key={salon.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: idx * 0.1 }}
              className="card-white rounded-[8px] overflow-hidden grid grid-cols-1 lg:grid-cols-12 gap-0 group"
            >
              {/* Image Column */}
              <div
                className={`lg:col-span-6 relative aspect-[16/10] lg:aspect-auto overflow-hidden bg-[#FAF7F2] ${
                  idx % 2 === 1 ? 'lg:order-2' : ''
                }`}
              >
                <img
                  src={salon.image}
                  alt={salon.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm text-[#4A1818] text-[10px] font-sans uppercase tracking-[0.16em] px-3.5 py-1 rounded-full border border-[rgba(74,24,24,0.08)] shadow">
                  Sanctuary {salon.city}
                </div>
              </div>

              {/* Details Column */}
              <div
                className={`lg:col-span-6 p-8 sm:p-12 flex flex-col justify-between space-y-8 ${
                  idx % 2 === 1 ? 'lg:order-1' : ''
                }`}
              >
                <div className="space-y-4">
                  <div>
                    <span className="text-xs font-sans uppercase tracking-widest text-[#4A1818] font-medium block mb-1">
                      {salon.district}
                    </span>
                    <h2 className="font-serif text-3xl sm:text-4xl text-[#2A1A1A]">
                      {salon.name}
                    </h2>
                  </div>

                  <p className="font-sans text-xs sm:text-sm text-[#2A1A1A]/70 leading-relaxed font-light">
                    {salon.address}
                  </p>

                  {/* Contact info bar */}
                  <div className="pt-2 flex flex-col sm:flex-row sm:items-center gap-4 text-xs font-sans text-[#2A1A1A]/80 border-t border-[rgba(74,24,24,0.08)] pt-4">
                    <div className="flex items-center space-x-2">
                      <Clock className="w-3.5 h-3.5 text-[#4A1818]" />
                      <span>{salon.hours}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Phone className="w-3.5 h-3.5 text-[#4A1818]" />
                      <a href={`tel:${salon.phone}`} className="hover:text-[#4A1818] transition-colors">
                        {salon.phone}
                      </a>
                    </div>
                  </div>

                  {/* Architecture Features List */}
                  <div className="pt-2 space-y-2">
                    <span className="text-[10px] font-sans uppercase tracking-widest text-[#2A1A1A]/50 block">
                      Atelier Architecture & Amenities
                    </span>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-sans text-[#2A1A1A]/75">
                      {salon.features.map((feat, fIdx) => (
                        <div key={fIdx} className="flex items-start space-x-1.5">
                          <span className="text-[#4A1818] mt-0.5">✦</span>
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Reservation Action */}
                <div className="pt-4 flex items-center justify-between border-t border-[rgba(74,24,24,0.08)]">
                  <span className="text-xs font-serif italic text-[#2A1A1A]/60">
                    Private Valet & Concierge Included
                  </span>
                  <button
                    onClick={() => onSelectSalonForBooking(salon.id)}
                    className="btn-maroon-pill !py-2.5 !px-5 text-xs"
                  >
                    <span>Reserve at {salon.city}</span>
                    <ArrowRight className="w-3.5 h-3.5 ml-1.5" />
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
