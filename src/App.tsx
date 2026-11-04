/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { ScreenId, ServiceItem, ProductItem, CartItem } from './types';
import { ScrollProgressBar } from './components/ScrollProgressBar';
import { GlobalWaveBackground } from './components/GlobalWaveBackground';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { ServiceDrawerModal } from './components/ServiceDrawerModal';
import { ProductQuickView } from './components/ProductQuickView';
import { CartDrawer } from './components/CartDrawer';
import { HomeScreen } from './screens/HomeScreen';
import { ServicesScreen } from './screens/ServicesScreen';
import { ApothecaryScreen } from './screens/ApothecaryScreen';
import { BookingScreen } from './screens/BookingScreen';
import { PortfolioScreen } from './screens/PortfolioScreen';
import { SalonsScreen } from './screens/SalonsScreen';
import { PRODUCTS_DATA } from './data/editorialData';
import { useLenis } from './hooks/useLenis';

export default function App() {
  // Initialize Lenis smooth scroll (lerp 0.08, no scroll-snap)
  useLenis();

  const [currentScreen, setCurrentScreen] = useState<ScreenId | 'all'>('home');
  
  // Interactive Cart State with initial sample item
  const [cartItems, setCartItems] = useState<CartItem[]>([
    { product: PRODUCTS_DATA[0], quantity: 1 }
  ]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  // Modals
  const [activeServiceModal, setActiveServiceModal] = useState<ServiceItem | null>(null);
  const [activeProductModal, setActiveProductModal] = useState<ProductItem | null>(null);
  const [bookingServiceId, setBookingServiceId] = useState<string | undefined>(undefined);

  // Cart operations
  const handleAddToCart = (product: ProductItem, quantity: number) => {
    setCartItems((prev) => {
      const existing = prev.find((item) => item.product.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.product.id === product.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      }
      return [...prev, { product, quantity }];
    });
    setIsCartOpen(true);
  };

  const handleUpdateQuantity = (productId: string, delta: number) => {
    setCartItems((prev) =>
      prev
        .map((item) => {
          if (item.product.id === productId) {
            const newQty = item.quantity + delta;
            return newQty > 0 ? { ...item, quantity: newQty } : null;
          }
          return item;
        })
        .filter(Boolean) as CartItem[]
    );
  };

  const handleRemoveFromCart = (productId: string) => {
    setCartItems((prev) => prev.filter((item) => item.product.id !== productId));
  };

  const handleClearCart = () => {
    setCartItems([]);
  };

  // Service Booking trigger
  const handleBookService = (service: ServiceItem) => {
    setBookingServiceId(service.id);
    setCurrentScreen('booking');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const totalCartCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <div className="min-h-screen bg-transparent text-[#2A1A1A] font-sans flex flex-col selection:bg-[#4A1818] selection:text-[#F4EEE3] relative">
      {/* Global Silk Wave Background */}
      <GlobalWaveBackground />

      {/* Scroll-driven Progress Bar */}
      <ScrollProgressBar />

      {/* Floating Pill Navbar */}
      <Header
        currentScreen={currentScreen}
        onNavigate={(screen) => {
          setCurrentScreen(screen);
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
        cartCount={totalCartCount}
        onOpenCart={() => setIsCartOpen(true)}
        onOpenBooking={() => {
          setCurrentScreen('booking');
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
      />

      {/* Main Content Area */}
      <main className="flex-1">
        {currentScreen === 'all' && (
          <div className="w-full">
            <HomeScreen
              onNavigate={(screen) => {
                setCurrentScreen(screen);
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              onSelectService={(service) => setActiveServiceModal(service)}
              onSelectProduct={(product) => setActiveProductModal(product)}
              onOpenBooking={() => {
                setCurrentScreen('booking');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
            />

            <div className="border-t border-[rgba(74,24,24,0.08)]">
              <ServicesScreen
                onSelectService={(service) => setActiveServiceModal(service)}
                onBookService={handleBookService}
                onNavigate={(screen) => {
                  setCurrentScreen(screen);
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
              />
            </div>

            <div className="border-t border-[rgba(74,24,24,0.08)]">
              <ApothecaryScreen
                onSelectProduct={(product) => setActiveProductModal(product)}
                onAddToCart={handleAddToCart}
              />
            </div>

            <div className="border-t border-[rgba(74,24,24,0.08)]">
              <PortfolioScreen />
            </div>

            <div className="border-t border-[rgba(74,24,24,0.08)]">
              <BookingScreen initialServiceId={bookingServiceId} />
            </div>

            <div className="border-t border-[rgba(74,24,24,0.08)]">
              <SalonsScreen
                onSelectSalonForBooking={() => {
                  setCurrentScreen('booking');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
              />
            </div>
          </div>
        )}

        {currentScreen === 'home' && (
          <HomeScreen
            onNavigate={(screen) => {
              setCurrentScreen(screen);
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            onSelectService={(service) => setActiveServiceModal(service)}
            onSelectProduct={(product) => setActiveProductModal(product)}
            onOpenBooking={() => {
              setCurrentScreen('booking');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          />
        )}

        {currentScreen === 'services' && (
          <ServicesScreen
            onSelectService={(service) => setActiveServiceModal(service)}
            onBookService={handleBookService}
            onNavigate={(screen) => {
              setCurrentScreen(screen);
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          />
        )}

        {currentScreen === 'apothecary' && (
          <ApothecaryScreen
            onSelectProduct={(product) => setActiveProductModal(product)}
            onAddToCart={handleAddToCart}
          />
        )}

        {currentScreen === 'portfolio' && <PortfolioScreen />}

        {currentScreen === 'booking' && (
          <BookingScreen initialServiceId={bookingServiceId} />
        )}

        {currentScreen === 'salons' && (
          <SalonsScreen
            onSelectSalonForBooking={() => {
              setCurrentScreen('booking');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          />
        )}
      </main>

      {/* Footer */}
      <Footer />

      {/* Service Ritual Details Modal */}
      <ServiceDrawerModal
        service={activeServiceModal}
        onClose={() => setActiveServiceModal(null)}
        onSelectForBooking={handleBookService}
      />

      {/* Product Quick View Modal */}
      <ProductQuickView
        product={activeProductModal}
        onClose={() => setActiveProductModal(null)}
        onAddToCart={handleAddToCart}
      />

      {/* Luxury Cart Drawer */}
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        items={cartItems}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveFromCart}
        onClearCart={handleClearCart}
      />
    </div>
  );
}
