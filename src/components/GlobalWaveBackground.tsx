import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useSpring, useTransform, useReducedMotion } from 'motion/react';

export const GlobalWaveBackground: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const imgRef = useRef<HTMLImageElement>(null);
  const prefersReducedMotion = useReducedMotion();

  const [travelDistance, setTravelDistance] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  // Measure dynamic travel distance: -(imageHeight - viewportHeight)
  useEffect(() => {
    const updateDimensions = () => {
      const vh = window.innerHeight;
      const vw = window.innerWidth;
      const mobile = vw < 768;
      setIsMobile(mobile);

      if (imgRef.current) {
        const imgHeight = imgRef.current.offsetHeight || (vw * 2832) / 1600;
        const rawDistance = Math.max(0, imgHeight - vh);
        // Mobile uses half movement to keep it smooth and performant
        setTravelDistance(mobile ? rawDistance * 0.5 : rawDistance);
      } else {
        const estimatedHeight = (vw * 2832) / 1600;
        const rawDistance = Math.max(0, estimatedHeight - vh);
        setTravelDistance(mobile ? rawDistance * 0.5 : rawDistance);
      }
    };

    updateDimensions();
    window.addEventListener('resize', updateDimensions, { passive: true });
    return () => window.removeEventListener('resize', updateDimensions);
  }, []);

  // Track global page scroll progress (0 to 1)
  const { scrollYProgress } = useScroll();
  
  // Smooth out scroll progress with stiffness: 60, damping: 20
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 60,
    damping: 20,
    restDelta: 0.001,
  });

  // Map progress to translateY from 0 to -travelDistance
  const y = useTransform(smoothProgress, [0, 1], [0, -travelDistance]);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 -z-10 overflow-hidden pointer-events-none select-none"
      style={{
        backgroundColor: '#E8DDD0', // Prevents any white flash while image loads
      }}
      aria-hidden="true"
    >
      {/* Scroll-traveling wave image layer */}
      {prefersReducedMotion ? (
        // Reduced motion fallback: static crop at 50% 40%
        <div className="w-full h-full">
          <picture>
            <source srcSet="/bg/waves.avif" type="image/avif" />
            <source srcSet="/bg/waves.webp" type="image/webp" />
            <img
              src="/bg/waves.webp"
              alt=""
              className="w-full h-full object-cover object-[50%_40%]"
            />
          </picture>
        </div>
      ) : (
        <motion.div
          style={{
            y,
            width: '100%',
            willChange: 'transform',
          }}
          className="relative top-0 left-0"
        >
          <picture>
            <source srcSet="/bg/waves.avif" type="image/avif" />
            <source srcSet="/bg/waves.webp" type="image/webp" />
            <img
              ref={imgRef}
              src="/bg/waves.webp"
              alt=""
              fetchPriority="high"
              decoding="async"
              className="w-full h-auto block select-none pointer-events-none"
              style={{
                minHeight: '100vh',
              }}
              onLoad={() => {
                if (imgRef.current) {
                  const vh = window.innerHeight;
                  const mobile = window.innerWidth < 768;
                  const rawDistance = Math.max(0, imgRef.current.offsetHeight - vh);
                  setTravelDistance(mobile ? rawDistance * 0.5 : rawDistance);
                }
              }}
            />
          </picture>
        </motion.div>
      )}

      {/* Subtle Noise / Paper-Silk Grain Overlay (SVG feTurbulence, opacity 0.05, mix-blend-mode: multiply) */}
      <svg
        className="fixed inset-0 w-full h-full pointer-events-none opacity-[0.05] mix-blend-multiply z-10"
        xmlns="http://www.w3.org/2000/svg"
      >
        <filter id="silk-noise" x="0%" y="0%" width="100%" height="100%">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.85"
            numOctaves="3"
            stitchTiles="stitch"
          />
          <feColorMatrix type="saturate" values="0" />
        </filter>
        <rect width="100%" height="100%" filter="url(#silk-noise)" />
      </svg>
    </div>
  );
};

