import React from 'react';
import { ScreenId } from '../types';
import { Sparkles } from 'lucide-react';

interface ScreenSwitcherBannerProps {
  currentScreen: ScreenId | 'all';
  onSelectScreen: (screen: ScreenId | 'all') => void;
}

export const ScreenSwitcherBanner: React.FC<ScreenSwitcherBannerProps> = ({
  currentScreen,
  onSelectScreen,
}) => {
  const screens: { id: ScreenId | 'all'; label: string; number: string }[] = [
    { id: 'all', label: 'Continuous Atelier Flow', number: 'ALL' },
    { id: 'home', label: 'Hero & Highlights', number: '01' },
    { id: 'services', label: 'Treatment Menu', number: '02' },
    { id: 'apothecary', label: 'Botanical Apothecary', number: '03' },
    { id: 'booking', label: 'Reservations', number: '04' },
    { id: 'portfolio', label: 'Bridal & Lookbook', number: '05' },
    { id: 'salons', label: 'Sanctuaries', number: '06' },
  ];

  return (
    <div className="fixed bottom-4 sm:bottom-6 left-1/2 -translate-x-1/2 z-40 max-w-[95vw] transition-all">
      <div className="bg-[#4A1818]/95 backdrop-blur-md text-white py-1.5 px-2.5 sm:px-3.5 border border-white/20 rounded-full shadow-[0_10px_35px_rgba(74,24,24,0.4)] flex items-center space-x-2">
        <div className="hidden lg:flex items-center space-x-1.5 text-white/80 pl-1 pr-2 border-r border-white/20">
          <Sparkles className="w-3 h-3 text-[#FCE5C0]" />
          <span className="font-medium tracking-[0.16em] uppercase text-[9px] whitespace-nowrap text-[#FCE5C0]">
            Pages
          </span>
        </div>

        <div className="flex items-center overflow-x-auto max-w-[85vw] sm:max-w-none space-x-1 scrollbar-none">
          {screens.map((screen) => {
            const isActive = currentScreen === screen.id;
            return (
              <button
                key={screen.id}
                onClick={() => onSelectScreen(screen.id)}
                className={`px-2.5 sm:px-3 py-1 text-[10px] sm:text-[11px] font-sans rounded-full transition-all whitespace-nowrap flex items-center space-x-1 cursor-pointer ${
                  isActive
                    ? 'bg-white text-[#4A1818] font-semibold shadow-sm'
                    : 'text-white/80 hover:text-white hover:bg-white/10'
                }`}
              >
                <span className={`text-[8px] sm:text-[9px] uppercase tracking-wider ${isActive ? 'text-[#4A1818]' : 'text-[#FCE5C0]'}`}>
                  {screen.number}
                </span>
                <span className="hidden sm:inline">{screen.label}</span>
                <span className="sm:hidden">{screen.number === 'ALL' ? 'Flow' : screen.number}</span>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};
