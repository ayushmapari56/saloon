import React from 'react';

/**
 * Elegant organic silk curve transitions tailored to the Cream (#F4EEE3) and Maroon (#4A1818) palette.
 */

export const HeroToCashmereSilkWave: React.FC<{ className?: string }> = ({ className = '' }) => {
  return (
    <div className={`relative w-full overflow-hidden leading-none z-10 -mb-[1px] ${className}`}>
      <svg
        viewBox="0 0 1440 120"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-auto block"
        preserveAspectRatio="none"
      >
        <path
          d="M0,0 C380,80 720,20 1080,75 C1260,105 1380,50 1440,30 L1440,120 L0,120 Z"
          fill="#F4EEE3"
        />
      </svg>
    </div>
  );
};

export const BeigeToBrownSilkWave: React.FC<{ className?: string }> = ({ className = '' }) => {
  return (
    <div className={`relative w-full overflow-hidden leading-none z-10 -my-[1px] ${className}`}>
      <svg
        viewBox="0 0 1440 90"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-auto block"
        preserveAspectRatio="none"
      >
        <path
          d="M0,40 C320,80 640,15 960,65 C1200,100 1360,40 1440,25 L1440,90 L0,90 Z"
          fill="#ECE3D8"
          opacity="0.4"
        />
        <path
          d="M0,60 C380,95 720,30 1080,75 C1260,95 1380,60 1440,45 L1440,90 L0,90 Z"
          fill="#F4EEE3"
        />
      </svg>
    </div>
  );
};

export const BrownToBeigeSilkWave: React.FC<{ className?: string }> = ({ className = '' }) => {
  return (
    <div className={`relative w-full overflow-hidden leading-none z-10 -my-[1px] ${className}`}>
      <svg
        viewBox="0 0 1440 90"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-auto block"
        preserveAspectRatio="none"
      >
        <path
          d="M0,20 C360,70 720,10 1080,60 C1240,85 1380,45 1440,30 L1440,90 L0,90 Z"
          fill="#F4EEE3"
        />
      </svg>
    </div>
  );
};

export const AmbientSilkWaveBackdrop: React.FC<{
  opacity?: number;
  position?: 'top' | 'center' | 'bottom';
  className?: string;
}> = ({ opacity = 0.08, position = 'center', className = '' }) => {
  const posClass =
    position === 'top'
      ? 'top-0'
      : position === 'bottom'
      ? 'bottom-0'
      : 'top-1/2 -translate-y-1/2';

  return (
    <div
      className={`absolute left-0 right-0 pointer-events-none overflow-hidden select-none ${posClass} ${className}`}
      style={{ opacity }}
    >
      <div className="w-[1200px] h-[600px] bg-[#FCE5C0]/40 rounded-full blur-[140px] mx-auto" />
    </div>
  );
};
