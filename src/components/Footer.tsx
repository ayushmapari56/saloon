import React, { useState } from 'react';
import { SALON_INFO, SALONS_DATA } from '../data/editorialData';
import { ArrowRight, Check } from 'lucide-react';

export const Footer: React.FC = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setTimeout(() => setSubscribed(false), 4000);
      setEmail('');
    }
  };

  const primarySalon = SALONS_DATA[0];

  return (
    <footer className="w-full bg-[#4A1818] text-white pt-[120px] pb-[80px] px-6 sm:px-10 lg:px-16 transition-colors">
      <div className="max-w-7xl mx-auto space-y-20">
        {/* Top Row: Social Links Left, Legal Links Right */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 pb-12 border-b border-white/15 text-xs font-sans tracking-wider">
          {/* Social Links Left */}
          <div className="flex items-center space-x-8">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/80 hover:text-white transition-opacity uppercase tracking-widest text-xs"
            >
              Instagram
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/80 hover:text-white transition-opacity uppercase tracking-widest text-xs"
            >
              Facebook
            </a>
          </div>

          {/* Legal Links Right */}
          <div className="flex flex-wrap items-center justify-center sm:justify-end gap-6 text-xs text-white/75">
            <span className="hover:text-white cursor-pointer transition-colors">Privacy</span>
            <span className="hover:text-white cursor-pointer transition-colors">Terms</span>
            <span className="hover:text-white cursor-pointer transition-colors">Accessibility</span>
            <span className="hover:text-white cursor-pointer transition-colors">Refund</span>
          </div>
        </div>

        {/* Center Block: Opening Hours, Huge Wordmark, Contact Details */}
        <div className="text-center space-y-10 py-6">
          {/* Opening Hours in 3 Lines (small) */}
          <div className="space-y-1 text-xs sm:text-[13px] font-sans text-white/70 tracking-wide max-w-md mx-auto">
            <p>Tuesday – Friday: 10:00 – 20:30 (Private Consultations)</p>
            <p>Saturday – Sunday: 09:30 – 21:00 (Bridal & Occasion Suites)</p>
            <p>Monday: Reserved for Ayurvedic Trichology Formulations</p>
          </div>

          {/* Salon Name as Huge Serif Wordmark */}
          <div className="py-4 overflow-hidden select-none">
            <h1
              className="font-serif text-white font-light tracking-[-0.02em] leading-none uppercase transition-all duration-300 hover:tracking-[0.02em]"
              style={{
                fontSize: 'clamp(4rem, 12vw, 11rem)',
                fontWeight: 300,
              }}
            >
              {SALON_INFO.name}
            </h1>
          </div>

          {/* Email, Phone, Address in Small Text */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-8 text-xs font-sans text-white/80 tracking-wide">
            <a
              href="mailto:concierge@capellosalon.in"
              className="hover:text-white transition-colors underline underline-offset-4 decoration-white/30"
            >
              concierge@capellosalon.in
            </a>
            <span className="hidden sm:inline text-white/30">·</span>
            <a
              href={`tel:${primarySalon.phone}`}
              className="hover:text-white transition-colors"
            >
              {primarySalon.phone}
            </a>
            <span className="hidden sm:inline text-white/30">·</span>
            <span className="text-white/70 text-center">
              {primarySalon.address}
            </span>
          </div>
        </div>

        {/* Gazette Newsletter & Colophon */}
        <div className="pt-12 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-8 text-xs font-sans text-white/60">
          <div className="max-w-md text-center md:text-left space-y-1">
            <p className="font-serif italic text-white/90 text-sm">
              "{SALON_INFO.tagline}"
            </p>
            <p className="text-[11px] text-white/50">
              © {new Date().getFullYear()} {SALON_INFO.name} Private Limited. {SALON_INFO.cityPairs}.
            </p>
          </div>

          {/* Discreet Newsletter Input */}
          <form onSubmit={handleSubmit} className="w-full md:w-auto flex items-center max-w-sm relative">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Newsletter correspondence"
              required
              className="w-full sm:w-64 bg-white/10 border border-white/20 text-white placeholder-white/40 text-xs rounded-full py-2.5 px-4 pr-10 focus:outline-none focus:border-white transition-colors"
            />
            <button
              type="submit"
              className="absolute right-1 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-white text-[#4A1818] flex items-center justify-center hover:bg-white/90 transition-all cursor-pointer"
              aria-label="Subscribe"
            >
              {subscribed ? <Check className="w-3.5 h-3.5" /> : <ArrowRight className="w-3.5 h-3.5" />}
            </button>
          </form>
        </div>
      </div>
    </footer>
  );
};
