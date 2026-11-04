import React, { useState } from 'react';
import { ScreenId } from '../types';
import { SALON_INFO } from '../data/editorialData';
import { ShoppingBag, Menu, X } from 'lucide-react';

interface HeaderProps {
  currentScreen: ScreenId | 'all';
  onNavigate: (screen: ScreenId) => void;
  cartCount: number;
  onOpenCart: () => void;
  onOpenBooking: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  currentScreen,
  onNavigate,
  cartCount,
  onOpenCart,
  onOpenBooking,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks: { id: ScreenId; label: string }[] = [
    { id: 'home', label: 'Home' },
    { id: 'services', label: 'Services' },
    { id: 'apothecary', label: 'Apothecary' },
    { id: 'portfolio', label: 'Portfolio' },
    { id: 'salons', label: 'Sanctuaries' },
  ];

  return (
    <>
      {/* Floating Pill Navbar */}
      <header
        className="fixed top-3 left-3 right-3 z-50 h-[52px] rounded-full bg-[#4A1818] text-white shadow-[0_8px_30px_rgba(74,24,24,0.35)] px-4 sm:px-6 flex items-center justify-between transition-all duration-300"
        style={{
          inset: '12px 12px auto 12px',
          height: '52px',
        }}
      >
        {/* Left Side: Desktop Links */}
        <nav className="hidden lg:flex items-center space-x-6 z-10">
          {navLinks.map((link) => {
            const isActive = currentScreen === link.id;
            return (
              <button
                key={link.id}
                onClick={() => onNavigate(link.id)}
                className="text-[14px] text-white/90 hover:text-white transition-colors relative py-1 cursor-pointer font-sans"
              >
                <span>{link.label}</span>
                {isActive && (
                  <span className="absolute bottom-0 left-0 w-full h-[1.5px] bg-white rounded-full transition-all" />
                )}
              </button>
            );
          })}
        </nav>

        {/* Mobile Hamburger Button */}
        <div className="lg:hidden flex items-center z-10">
          <button
            onClick={() => setMobileMenuOpen(true)}
            className="p-1.5 text-white hover:text-white/80 transition-colors cursor-pointer"
            aria-label="Open Navigation Menu"
          >
            <Menu className="w-5 h-5" />
          </button>
        </div>

        {/* Center: Absolutely Centered Salon Name */}
        <div
          onClick={() => onNavigate('home')}
          className="absolute left-1/2 -translate-x-1/2 text-center cursor-pointer group select-none z-10"
        >
          <span className="font-serif text-[22px] tracking-[0.04em] text-white font-normal group-hover:opacity-90 transition-opacity">
            {SALON_INFO.name}
          </span>
        </div>

        {/* Right Side: Cart Icon & Outlined Pill Button */}
        <div className="flex items-center space-x-3 sm:space-x-4 z-10">
          {/* Cart Icon with badge (existing site feature) */}
          <button
            onClick={onOpenCart}
            className="relative p-1.5 text-white hover:text-white/85 transition-colors cursor-pointer"
            aria-label="View Shopping Bag"
            title="Cart"
          >
            <ShoppingBag className="w-[18px] h-[18px] stroke-[1.75]" />
            {cartCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-white text-[#4A1818] text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center shadow">
                {cartCount}
              </span>
            )}
          </button>

          {/* Outlined Pill Button "Book My Session" */}
          <button
            onClick={onOpenBooking}
            className="hidden sm:inline-flex items-center justify-center btn-nav-outline"
          >
            Book My Session
          </button>
        </div>
      </header>

      {/* Full-screen Maroon Mobile Menu with Staggered Fade-in */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 bg-[#4A1818] text-white flex flex-col justify-between p-6 sm:p-8 animate-fadeIn">
          {/* Top Bar with Logo & Close */}
          <div className="flex items-center justify-between border-b border-white/10 pb-4">
            <span className="font-serif text-2xl text-white tracking-wide">
              {SALON_INFO.name}
            </span>
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="p-2 text-white/80 hover:text-white cursor-pointer rounded-full hover:bg-white/10 transition-colors"
              aria-label="Close navigation"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Staggered Navigation Links */}
          <div className="flex flex-col space-y-6 my-auto py-8">
            {navLinks.map((link, idx) => {
              const isActive = currentScreen === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => {
                    onNavigate(link.id);
                    setMobileMenuOpen(false);
                  }}
                  style={{
                    animationDelay: `${idx * 70}ms`,
                  }}
                  className={`text-left text-2xl sm:text-3xl font-serif py-1 transition-all duration-300 flex items-center justify-between group ${
                    isActive ? 'text-white pl-3 border-l-2 border-white' : 'text-white/70 hover:text-white hover:pl-2'
                  }`}
                >
                  <span>{link.label}</span>
                  <span className="text-sm font-sans text-white/40 group-hover:text-white transition-colors">
                    0{idx + 1}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Bottom Actions */}
          <div className="space-y-4 pt-6 border-t border-white/10">
            <button
              onClick={() => {
                onOpenBooking();
                setMobileMenuOpen(false);
              }}
              className="w-full bg-white text-[#4A1818] font-medium text-sm font-sans py-3.5 px-6 rounded-full hover:bg-white/90 transition-all text-center cursor-pointer shadow-lg"
            >
              Book My Session
            </button>

            <div className="flex items-center justify-between text-xs text-white/60 pt-2 font-sans">
              <span>{SALON_INFO.cityPairs}</span>
              <button
                onClick={() => {
                  onOpenCart();
                  setMobileMenuOpen(false);
                }}
                className="flex items-center space-x-1.5 text-white/90 underline cursor-pointer"
              >
                <ShoppingBag className="w-3.5 h-3.5" />
                <span>Bag ({cartCount})</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
