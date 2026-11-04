import React, { useRef } from 'react';
import { ServiceItem, ProductItem, ScreenId } from '../types';
import { SERVICES_DATA, STYLISTS_DATA, EDITORIAL_PRESS, SALON_INFO } from '../data/editorialData';
import { ArrowRight, Sparkles } from 'lucide-react';
import { motion, useScroll, useTransform } from 'motion/react';

// Configurable Hero Object Position across breakpoints (easy to adjust in one place)
const HERO_OBJECT_POSITION = {
  desktop: 'center center',
  tablet: 'center center',
  mobile: 'center center',
};

interface HomeScreenProps {
  onNavigate: (screen: ScreenId) => void;
  onSelectService: (service: ServiceItem) => void;
  onSelectProduct: (product: ProductItem) => void;
  onOpenBooking: () => void;
}

export const HomeScreen: React.FC<HomeScreenProps> = ({
  onNavigate,
  onSelectService,
  onOpenBooking,
}) => {
  // Parallax refs for testimonials and CTA
  const testimonialsRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress: testimonialsProgress } = useScroll({
    target: testimonialsRef,
    offset: ['start end', 'end start'],
  });
  const testimonialParallax = useTransform(testimonialsProgress, [0, 1], [-30, 30]);

  const ctaContainerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress: ctaProgress } = useScroll({
    target: ctaContainerRef,
    offset: ['start end', 'end start'],
  });
  const ctaBgParallax = useTransform(ctaProgress, [0, 1], ['0%', '18%']);

  const heroServices = SERVICES_DATA.slice(0, 4);

  return (
    <div className="w-full bg-transparent text-[#2A1A1A] overflow-hidden">
      {/* ======================================================== */}
      {/* 1. HERO SECTION                                          */}
      {/*    Strict safe areas: navbar + 40px top, bottom + 40px   */}
      {/*    Still image (no Ken Burns), responsive object-pos     */}
      {/*    Readability overlays & 3-line balanced headline       */}
      {/* ======================================================== */}
      <section
        className="relative w-full overflow-hidden flex flex-col justify-end"
        style={{
          height: '100svh',
          minHeight: '600px',
          paddingTop: 'calc(64px + 40px)', // navbar 52px + 12px offset + 40px
          paddingBottom: 'clamp(36px, 6vh, 56px)',
          paddingLeft: 'clamp(24px, 6vw, 96px)',
          paddingRight: 'clamp(24px, 6vw, 96px)',
          // Pass configurable object-position to CSS variables
          ['--hero-pos-mobile' as any]: HERO_OBJECT_POSITION.mobile,
          ['--hero-pos-tablet' as any]: HERO_OBJECT_POSITION.tablet,
          ['--hero-pos-desktop' as any]: HERO_OBJECT_POSITION.desktop,
        }}
      >
        {/* STILL IMAGE: perfectly still and fitted, priority, no Ken Burns or transform animations */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none select-none">
          <img
            src="/assets/hero_bg.jpg"
            alt="Capello Haute Hair Artistry"
            loading="eager"
            decoding="async"
            className="absolute inset-0 w-full h-full hero-image-fit"
            style={{
              transition: 'opacity 0.6s ease-out',
            }}
          />

          {/* Readability Overlay A: Left-to-right gradient */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                'linear-gradient(to right, rgba(35, 8, 8, 0.78) 0%, rgba(35, 8, 8, 0.45) 45%, transparent 75%)',
            }}
          />

          {/* Readability Overlay B: Bottom gradient */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                'linear-gradient(to top, rgba(35, 8, 8, 0.70) 0%, transparent 45%)',
            }}
          />
        </div>

        {/* Hero Content Area */}
        <div className="relative z-10 w-full max-w-7xl mx-auto flex flex-col lg:flex-row lg:items-end justify-between gap-6 lg:gap-10">
          
          {/* Headline Block (aligned bottom-left of content area) */}
          <div className="w-full lg:max-w-[55vw] space-y-2">
            <div className="flex items-center space-x-2 text-white/80 mb-2">
              <Sparkles className="w-3.5 h-3.5 text-[#FFE3BF]" />
              <span className="text-[11px] font-sans uppercase tracking-[0.22em] text-[#FFE3BF]">
                {SALON_INFO.edition}
              </span>
            </div>

            <h1
              className="font-serif text-white uppercase select-none tracking-[-0.02em]"
              style={{
                fontSize: 'clamp(2.5rem, min(6.2vw, 11.5svh), 7.5rem)',
                lineHeight: 0.98,
                fontWeight: 400,
                textShadow: '0 2px 24px rgba(0, 0, 0, 0.35)',
              }}
            >
              {/* Exactly 3 lines on desktop, natural wrap on mobile */}
              <span className="block overflow-hidden pb-[0.12em]">
                <motion.span
                  initial={{ y: '100%', opacity: 0 }}
                  animate={{ y: '0%', opacity: 1 }}
                  transition={{ duration: 0.85, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
                  className="block will-change-transform"
                >
                  WHERE BEAUTY
                </motion.span>
              </span>
              <span className="block overflow-hidden pb-[0.12em]">
                <motion.span
                  initial={{ y: '100%', opacity: 0 }}
                  animate={{ y: '0%', opacity: 1 }}
                  transition={{ duration: 0.85, delay: 0.28, ease: [0.16, 1, 0.3, 1] }}
                  className="block will-change-transform"
                >
                  <span style={{ color: '#FFE3BF' }}>BECOMES</span> AN
                </motion.span>
              </span>
              <span className="block overflow-hidden pb-[0.12em]">
                <motion.span
                  initial={{ y: '100%', opacity: 0 }}
                  animate={{ y: '0%', opacity: 1 }}
                  transition={{ duration: 0.85, delay: 0.42, ease: [0.16, 1, 0.3, 1] }}
                  className="block will-change-transform"
                >
                  EXPERIENCE.
                </motion.span>
              </span>
            </h1>
          </div>

          {/* Description Block + Buttons (desktop: right-aligned on same baseline; mobile: stacked below) */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="w-full lg:max-w-[380px] text-left lg:text-right space-y-4"
          >
            <p
              className="font-sans text-[18px] lg:text-[20px] text-white/95 font-light leading-[1.5]"
              style={{
                textShadow: '0 1px 12px rgba(0, 0, 0, 0.35)',
              }}
            >
              {SALON_INFO.subheading}
            </p>

            <div className="flex items-center justify-start lg:justify-end gap-3 pt-1">
              <button
                onClick={onOpenBooking}
                className="btn-maroon-pill bg-white text-[#4A1818] hover:bg-white/90 border border-white !py-2.5 !px-6 text-sm shadow-md"
              >
                Book Now
              </button>
              <button
                onClick={() => onNavigate('services')}
                className="btn-nav-outline !py-2.5 !px-5 text-sm"
              >
                View Menu
              </button>
            </div>
          </motion.div>

        </div>
      </section>

      {/* ======================================================== */}
      {/* 2. SERVICES SECTION (Transparent with soft veil for waves)*/}
      {/*    Two-column layout:                                    */}
      {/*    Left (5/12): position sticky top-120px with H2, text,  */}
      {/*                 and maroon "Book Now" pill               */}
      {/*    Right (7/12): 2-col grid of glass service cards       */}
      {/* ======================================================== */}
      <section className="relative bg-transparent section-veil py-24 sm:py-32 px-6 sm:px-10 lg:px-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            
            {/* Left Column (about 5/12) - Sticky on Desktop (top-120px) */}
            <div className="lg:col-span-5 lg:sticky lg:top-[120px] space-y-6">
              <span className="text-xs font-sans tracking-[0.2em] uppercase text-[#4A1818] font-medium block">
                Signature Protocols
              </span>

              {/* H2 clamp(2.5rem, 5vw, 4.5rem) with line-height 1.05 and -0.01em spacing */}
              <h2
                className="font-serif text-[#2A1A1A] font-normal leading-[1.05] tracking-[-0.01em]"
                style={{
                  fontSize: 'clamp(2.5rem, 5vw, 4.5rem)',
                }}
              >
                Our Signature Services
              </h2>

              {/* One short sentence */}
              <p className="font-sans text-[17px] text-[#2A1A1A]/75 font-light leading-[1.6] max-w-md">
                Architectural dry cutting, dimensional chai balayage, and ancestral Ayurvedic Shirodhara tailored to Indian hair biology.
              </p>

              {/* Maroon "Book Now" Pill */}
              <div className="pt-2">
                <button
                  onClick={onOpenBooking}
                  className="btn-maroon-pill"
                >
                  Book Now
                </button>
              </div>

              {/* Additional helpful link */}
              <div className="pt-4">
                <button
                  onClick={() => onNavigate('services')}
                  className="text-xs font-sans tracking-[0.14em] uppercase text-[#4A1818] hover:text-[#6E1A1A] transition-colors flex items-center space-x-2 underline underline-offset-8 decoration-[#4A1818]/30 cursor-pointer"
                >
                  <span>Explore full treatment tariff</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Right Column (about 7/12) - 2-Column Grid of Service Cards */}
            <div className="lg:col-span-7">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                {heroServices.map((service, idx) => (
                  <motion.div
                    key={service.id}
                    initial={{ opacity: 0, y: 28 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-50px' }}
                    transition={{ duration: 0.8, delay: idx * 0.12, ease: [0.16, 1, 0.3, 1] }}
                    className="card-glass p-6 sm:p-7 flex flex-col justify-between group cursor-pointer"
                    onClick={() => onSelectService(service)}
                  >
                    <div>
                      {/* Image on Top (aspect 4/5, rounded, image zooms 1.05 inside frame on hover) */}
                      <div className="aspect-[4/5] w-full rounded-[8px] overflow-hidden mb-6 bg-[#FAF7F2] relative">
                        <motion.img
                          initial={{ clipPath: 'inset(100% 0 0 0)' }}
                          whileInView={{ clipPath: 'inset(0% 0 0 0)' }}
                          viewport={{ once: true }}
                          transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
                          src={service.image}
                          alt={service.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out will-change-transform"
                        />
                        <div className="absolute top-3 left-3 bg-[#FFFFFF]/90 backdrop-blur-sm text-[#4A1818] text-[10px] font-sans uppercase tracking-[0.12em] px-2.5 py-1 rounded-full border border-[rgba(74,24,24,0.08)]">
                          {service.duration}
                        </div>
                      </div>

                      {/* Service Name in Serif 24px */}
                      <h3 className="font-serif text-[24px] text-[#2A1A1A] leading-[1.1] mb-2 group-hover:text-[#4A1818] transition-colors">
                        {service.title}
                      </h3>

                      <p className="font-sans text-[14px] text-[#2A1A1A]/65 leading-relaxed mb-4 line-clamp-2">
                        {service.subtitle}
                      </p>
                    </div>

                    {/* Card Footer: Price & Maroon "Book Now" Pill */}
                    <div className="pt-4 border-t border-[rgba(74,24,24,0.08)] flex items-center justify-between">
                      <span className="font-serif text-[22px] text-[#2A1A1A]">
                        ₹{service.price.toLocaleString('en-IN')}
                      </span>

                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          onSelectService(service);
                        }}
                        className="btn-maroon-pill !py-2 !px-4 !text-xs"
                      >
                        Book Now
                      </button>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ======================================================== */}
      {/* 3. ARTISTS / TEAM (Transparent with soft veil for waves)  */}
      {/*    Centered H2 + one muted line                          */}
      {/*    Row of 3 portrait glass cards (aspect 4/5, radius 12px)*/}
      {/* ======================================================== */}
      <section className="relative bg-transparent section-veil py-24 sm:py-32 px-6 sm:px-10 lg:px-16 border-t border-[var(--color-wave-mid)]/30">
        <div className="max-w-7xl mx-auto space-y-16">
          {/* Centered H2 + One Muted Line */}
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#2A1A1A] font-normal tracking-[-0.01em]">
              Resident Master Artists
            </h2>
            <p className="font-sans text-[17px] text-[#2A1A1A]/65 font-light leading-[1.6]">
              Leading experts in Indian hair biology, pigment formulation, and Ayurvedic cranial rejuvenation.
            </p>
          </div>

          {/* Row of 3 Portrait Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {STYLISTS_DATA.map((stylist, idx) => (
              <motion.div
                key={stylist.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.8, delay: idx * 0.15, ease: [0.16, 1, 0.3, 1] }}
                className="card-glass p-6 rounded-[12px] flex flex-col justify-between group"
              >
                <div className="space-y-5">
                  {/* Aspect 4/5, rounded 8px */}
                  <div className="aspect-[4/5] w-full rounded-[8px] overflow-hidden bg-[#FAF7F2] relative">
                    <motion.img
                      initial={{ clipPath: 'inset(100% 0 0 0)' }}
                      whileInView={{ clipPath: 'inset(0% 0 0 0)' }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
                      src={stylist.image}
                      alt={stylist.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out will-change-transform"
                    />
                    <div className="absolute top-3 right-3 bg-[#FFFFFF]/90 backdrop-blur-sm text-[#4A1818] text-[10px] font-sans uppercase tracking-[0.1em] px-2.5 py-1 rounded-full border border-[rgba(74,24,24,0.08)]">
                      {stylist.tier}
                    </div>
                  </div>

                  <div>
                    {/* Name in Serif 28px */}
                    <h3 className="font-serif text-[28px] text-[#2A1A1A] leading-tight group-hover:text-[#4A1818] transition-colors">
                      {stylist.name}
                    </h3>
                    {/* Role in Small Muted Sans Below */}
                    <p className="font-sans text-xs text-[#2A1A1A]/65 uppercase tracking-wider mt-1.5 font-medium">
                      {stylist.role}
                    </p>
                  </div>
                </div>

                <div className="pt-5 border-t border-[rgba(74,24,24,0.08)] mt-5">
                  <p className="font-serif italic text-sm text-[#2A1A1A]/80 leading-relaxed">
                    "{stylist.quote}"
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ======================================================== */}
      {/* 4. TESTIMONIALS (Peach background #FCE5C0, full width)    */}
      {/*    Two columns:                                          */}
      {/*    Left: H2 "Words from Our Clients" style + 3 stacked   */}
      {/*          quotes (sans 20px, small muted below, dividers) */}
      {/*    Right: tall photo touching right edge & top/bottom    */}
      {/*           with subtle parallax (+/-30px)                 */}
      {/* ======================================================== */}
      <section
        ref={testimonialsRef}
        className="w-full bg-[#FCE5C0] text-[#2A1A1A] relative overflow-hidden"
      >
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 min-h-[640px]">
          
          {/* Left Column: H2 & Stacked Quotes */}
          <div className="lg:col-span-7 py-20 sm:py-28 px-6 sm:px-10 lg:px-16 flex flex-col justify-center space-y-12">
            <div>
              <span className="text-xs font-sans tracking-[0.2em] uppercase text-[#4A1818] font-medium block mb-2">
                Editorial Acclaim
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#2A1A1A] font-normal leading-[1.08] tracking-[-0.01em]">
                Words from Our Clients & Critics
              </h2>
            </div>

            {/* 3 Stacked Quotes with thin dividers */}
            <div className="space-y-8 divide-y divide-[#4A1818]/15">
              {EDITORIAL_PRESS.map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-30px' }}
                  transition={{ duration: 0.8, delay: idx * 0.18, ease: [0.16, 1, 0.3, 1] }}
                  className={`${idx > 0 ? 'pt-8' : ''} space-y-3`}
                >
                  {/* Quote text sans 20px */}
                  <p className="font-sans text-[18px] sm:text-[20px] text-[#2A1A1A] font-light leading-[1.5]">
                    "{item.quote}"
                  </p>
                  {/* Name small muted below */}
                  <p className="font-sans text-xs uppercase tracking-widest text-[#2A1A1A]/65 font-medium">
                    {item.publication} · {item.date}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right Column: Tall Photo Touching Edge with Subtle Parallax (+/-30px) */}
          <div className="lg:col-span-5 relative min-h-[420px] lg:min-h-full overflow-hidden">
            <motion.div
              style={{ y: testimonialParallax }}
              className="absolute inset-[-40px] w-[calc(100%+80px)] h-[calc(100%+80px)]"
            >
              <img
                src="https://images.unsplash.com/photo-1560869713-7d0a29430803?auto=format&fit=crop&w=1200&q=80"
                alt="Capello Salon Architecture and Private Suite"
                className="w-full h-full object-cover object-center"
              />
            </motion.div>
            <div className="absolute inset-0 bg-gradient-to-t from-[#FCE5C0]/60 lg:from-transparent to-transparent pointer-events-none" />
          </div>

        </div>
      </section>

      {/* ======================================================== */}
      {/* 5. CTA BANNER                                            */}
      {/*    Full-bleed salon interior photo background            */}
      {/*    Compact white card anchored to the left               */}
      {/*    so the salon mirrors and chairs remain clearly visible*/}
      {/* ======================================================== */}
      <section
        ref={ctaContainerRef}
        className="relative w-full min-h-[90vh] lg:min-h-screen py-16 sm:py-24 px-6 sm:px-10 lg:px-16 flex items-center justify-start overflow-hidden"
      >
        {/* Full-bleed salon interior photo as background (crisp, not over-zoomed) */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img
            src="/assets/salon_interior_cta.jpg"
            alt="Capello Salon Sanctuary Interior"
            className="w-full h-full object-cover object-center lg:object-[60%_center]"
          />
        </div>

        {/* Compact White Card Positioned to the Left (matching inspiration reference) */}
        <div className="relative z-10 w-full max-w-[620px] lg:ml-4 xl:ml-12 my-auto">
          <div className="card-white p-6 sm:p-8 rounded-[8px] shadow-[0_20px_50px_-12px_rgba(74,24,24,0.22)] bg-white border border-[rgba(74,24,24,0.08)]">
            <div className="grid grid-cols-1 sm:grid-cols-12 gap-6 items-center">
              
              {/* Content Column */}
              <div className="sm:col-span-7 space-y-4">
                <h2 className="font-serif text-2xl sm:text-3xl lg:text-[32px] text-[#2A1A1A] font-normal leading-[1.1] tracking-[-0.01em]">
                  Ready for a Transformation?
                </h2>

                <p className="font-sans text-xs sm:text-sm text-[#2A1A1A]/75 font-light leading-[1.6]">
                  Your best hair is just an appointment away. Book your visit to our salon today to experience modern elegance refined for you.
                </p>

                <div className="pt-1">
                  <button
                    onClick={onOpenBooking}
                    className="btn-maroon-pill !py-2.5 !px-6 !text-xs font-medium"
                  >
                    Book Online
                  </button>
                </div>
              </div>

              {/* Portrait Image on Right Inside Card */}
              <div className="sm:col-span-5">
                <div className="aspect-[4/5] w-full rounded-[8px] overflow-hidden bg-[#FAF7F2] shadow-sm">
                  <img
                    src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80"
                    alt="Capello Haute Hair Transformation Model"
                    className="w-full h-full object-cover object-center"
                  />
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
