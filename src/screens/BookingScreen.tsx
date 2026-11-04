import React, { useState } from 'react';
import { BookingState } from '../types';
import { SERVICES_DATA, STYLISTS_DATA, SALONS_DATA, TIME_SLOTS, SALON_INFO } from '../data/editorialData';
import { Sparkles, Download, ArrowRight, Check, MapPin, Calendar, Clock, User } from 'lucide-react';
import { motion } from 'motion/react';

interface BookingScreenProps {
  initialServiceId?: string;
}

export const BookingScreen: React.FC<BookingScreenProps> = ({
  initialServiceId,
}) => {
  const [booking, setBooking] = useState<BookingState>({
    serviceId: initialServiceId || SERVICES_DATA[0].id,
    tier: 'Master Stylist',
    stylistId: STYLISTS_DATA[0].id,
    locationId: SALONS_DATA[0].id,
    date: '2026-11-12',
    timeSlot: '11:30',
    guestName: '',
    guestEmail: '',
    guestPhone: '',
    sensoryPreference: 'Quietude (Silent Session)',
    complimentaryBeverage: 'Kashmiri Kahwa with Almonds & Saffron',
    consultationNotes: '',
  });

  const [confirmed, setConfirmed] = useState(false);
  const [bookingPassCode, setBookingPassCode] = useState('');

  const selectedService =
    SERVICES_DATA.find((s) => s.id === booking.serviceId) || SERVICES_DATA[0];
  const selectedLocation =
    SALONS_DATA.find((l) => l.id === booking.locationId) || SALONS_DATA[0];
  const selectedStylist =
    STYLISTS_DATA.find((s) => s.id === booking.stylistId) || STYLISTS_DATA[0];

  const availableDates = [
    { dateStr: '2026-11-10', day: 'Tuesday', num: '10 Nov' },
    { dateStr: '2026-11-11', day: 'Wednesday', num: '11 Nov' },
    { dateStr: '2026-11-12', day: 'Thursday', num: '12 Nov' },
    { dateStr: '2026-11-13', day: 'Friday', num: '13 Nov' },
    { dateStr: '2026-11-14', day: 'Saturday', num: '14 Nov' },
    { dateStr: '2026-11-15', day: 'Sunday', num: '15 Nov' },
  ];

  const handleConfirm = (e: React.FormEvent) => {
    e.preventDefault();
    const code = `CPL-${Math.floor(100000 + Math.random() * 900000)}`;
    setBookingPassCode(code);
    setConfirmed(true);
  };

  const handleReset = () => {
    setConfirmed(false);
    setBooking((prev) => ({
      ...prev,
      guestName: '',
      guestEmail: '',
      guestPhone: '',
      consultationNotes: '',
    }));
  };

  return (
    <div className="w-full bg-transparent section-veil text-[#2A1A1A] pt-28 sm:pt-36 md:pt-40 pb-24 relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-6 sm:px-10 lg:px-12 space-y-14 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto space-y-4">
          <div className="inline-flex items-center space-x-2 bg-white/80 text-[#4A1818] px-4 py-1.5 rounded-full text-xs font-sans uppercase tracking-[0.16em] border border-[rgba(74,24,24,0.08)] shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-[#4A1818]" />
            <span>Private Sanctuary Reservations · India</span>
          </div>

          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl text-[#2A1A1A] font-normal tracking-[-0.01em]">
            Bespoke Session Booking
          </h1>

          <p className="font-serif italic text-base sm:text-lg text-[#2A1A1A]/75">
            "Where beauty becomes an experience. Private suites and unhurried Ayurvedic rituals."
          </p>
        </div>

        {/* Confirmation View */}
        {confirmed ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            className="card-white p-8 sm:p-14 rounded-[8px] bg-white border border-[rgba(74,24,24,0.08)] text-center space-y-8 shadow-xl max-w-2xl mx-auto"
          >
            <div className="w-16 h-16 rounded-full bg-[#4A1818] text-white flex items-center justify-center mx-auto shadow-md">
              <Check className="w-8 h-8 stroke-[2.5]" />
            </div>

            <div className="space-y-2">
              <span className="text-xs font-sans uppercase tracking-widest text-[#4A1818] font-semibold">
                Reservation Confirmed
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl text-[#2A1A1A]">
                We Await Your Presence, {booking.guestName || 'Esteemed Guest'}
              </h2>
              <p className="font-sans text-sm text-[#2A1A1A]/70 font-light max-w-md mx-auto">
                A formal private calendar invitation and gate pass have been dispatched to your email and WhatsApp concierge.
              </p>
            </div>

            {/* Pass Code Card */}
            <div className="p-6 rounded-[8px] bg-[#FCE5C0]/40 border border-[#4A1818]/15 space-y-3">
              <span className="text-[11px] font-sans uppercase tracking-[0.18em] text-[#4A1818] block">
                Sanctuary Entry Pass Code
              </span>
              <span className="font-mono text-3xl font-bold tracking-wider text-[#4A1818] block">
                {bookingPassCode}
              </span>
              <div className="text-xs font-sans text-[#2A1A1A]/70 pt-2 border-t border-[#4A1818]/10 flex flex-wrap justify-center gap-4">
                <span>{selectedLocation.name}</span>
                <span>·</span>
                <span>{booking.date} at {booking.timeSlot}</span>
                <span>·</span>
                <span>{selectedService.title}</span>
              </div>
            </div>

            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
              <button
                onClick={handleReset}
                className="btn-maroon-pill"
              >
                Schedule Another Reservation
              </button>
            </div>
          </motion.div>
        ) : (
          /* Booking Form */
          <form onSubmit={handleConfirm} className="space-y-12">
            
            {/* Step 1: Select Sanctuary Location */}
            <div className="card-white p-6 sm:p-8 rounded-[8px] space-y-6">
              <div className="flex items-center space-x-2 text-xs font-sans uppercase tracking-widest text-[#4A1818] font-semibold">
                <MapPin className="w-4 h-4" />
                <span>01. Select Sanctuary Location</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {SALONS_DATA.map((salon) => (
                  <div
                    key={salon.id}
                    onClick={() => setBooking({ ...booking, locationId: salon.id })}
                    className={`p-4 rounded-[6px] border cursor-pointer transition-all ${
                      booking.locationId === salon.id
                        ? 'border-[#4A1818] bg-[#FCE5C0]/30 shadow-sm'
                        : 'border-[rgba(74,24,24,0.1)] hover:border-[#4A1818]/40 bg-white'
                    }`}
                  >
                    <span className="text-xs uppercase tracking-wider text-[#4A1818] font-semibold block">
                      {salon.city}
                    </span>
                    <h3 className="font-serif text-lg text-[#2A1A1A] mt-1">
                      {salon.district}
                    </h3>
                    <p className="text-[11px] text-[#2A1A1A]/60 mt-1 line-clamp-1">
                      {salon.address}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Step 2: Choose Signature Service */}
            <div className="card-white p-6 sm:p-8 rounded-[8px] space-y-6">
              <div className="flex items-center space-x-2 text-xs font-sans uppercase tracking-widest text-[#4A1818] font-semibold">
                <Sparkles className="w-4 h-4" />
                <span>02. Select Signature Service</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {SERVICES_DATA.map((service) => (
                  <div
                    key={service.id}
                    onClick={() => setBooking({ ...booking, serviceId: service.id })}
                    className={`p-4 rounded-[6px] border cursor-pointer transition-all flex items-start space-x-4 ${
                      booking.serviceId === service.id
                        ? 'border-[#4A1818] bg-[#FCE5C0]/30 shadow-sm'
                        : 'border-[rgba(74,24,24,0.1)] hover:border-[#4A1818]/40 bg-white'
                    }`}
                  >
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-16 h-16 rounded-[4px] object-cover flex-shrink-0"
                    />
                    <div className="flex-1 min-w-0">
                      <h4 className="font-serif text-base text-[#2A1A1A] leading-snug">
                        {service.title}
                      </h4>
                      <p className="text-xs text-[#2A1A1A]/60 mt-0.5">
                        {service.duration} · ₹{service.price.toLocaleString('en-IN')}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Step 3: Date & Time Slot */}
            <div className="card-white p-6 sm:p-8 rounded-[8px] space-y-6">
              <div className="flex items-center space-x-2 text-xs font-sans uppercase tracking-widest text-[#4A1818] font-semibold">
                <Calendar className="w-4 h-4" />
                <span>03. Date & Preferred Suite Time</span>
              </div>

              {/* Date selection pills */}
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
                {availableDates.map((d) => (
                  <button
                    type="button"
                    key={d.dateStr}
                    onClick={() => setBooking({ ...booking, date: d.dateStr })}
                    className={`p-3 rounded-[6px] border text-center transition-all cursor-pointer ${
                      booking.date === d.dateStr
                        ? 'border-[#4A1818] bg-[#4A1818] text-white shadow-sm'
                        : 'border-[rgba(74,24,24,0.1)] bg-white text-[#2A1A1A] hover:border-[#4A1818]/40'
                    }`}
                  >
                    <span className="text-[10px] uppercase tracking-wider block opacity-75">
                      {d.day}
                    </span>
                    <span className="font-serif text-base block mt-0.5">
                      {d.num}
                    </span>
                  </button>
                ))}
              </div>

              {/* Time Slots */}
              <div className="pt-2">
                <span className="text-xs font-sans text-[#2A1A1A]/70 block mb-3 font-medium">
                  Available Whisper Suite Slots:
                </span>
                <div className="flex flex-wrap gap-2.5">
                  {TIME_SLOTS.map((slot) => (
                    <button
                      type="button"
                      key={slot}
                      onClick={() => setBooking({ ...booking, timeSlot: slot })}
                      className={`px-4 py-2 text-xs font-sans rounded-full border transition-all cursor-pointer ${
                        booking.timeSlot === slot
                          ? 'border-[#4A1818] bg-[#4A1818] text-white font-medium shadow-sm'
                          : 'border-[rgba(74,24,24,0.12)] bg-white text-[#2A1A1A]/80 hover:border-[#4A1818]/40'
                      }`}
                    >
                      {slot}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Step 4: Guest Details & Preferences */}
            <div className="card-white p-6 sm:p-8 rounded-[8px] space-y-6">
              <div className="flex items-center space-x-2 text-xs font-sans uppercase tracking-widest text-[#4A1818] font-semibold">
                <User className="w-4 h-4" />
                <span>04. Guest Particulars & Atelier Preferences</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                <div>
                  <label className="block text-xs font-sans text-[#2A1A1A]/70 mb-1.5 font-medium">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={booking.guestName}
                    onChange={(e) => setBooking({ ...booking, guestName: e.target.value })}
                    placeholder="e.g. Meera Singhania"
                    className="w-full bg-white border border-[rgba(74,24,24,0.15)] rounded-[6px] px-4 py-2.5 text-sm text-[#2A1A1A] focus:outline-none focus:border-[#4A1818]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-sans text-[#2A1A1A]/70 mb-1.5 font-medium">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    value={booking.guestEmail}
                    onChange={(e) => setBooking({ ...booking, guestEmail: e.target.value })}
                    placeholder="meera@domain.com"
                    className="w-full bg-white border border-[rgba(74,24,24,0.15)] rounded-[6px] px-4 py-2.5 text-sm text-[#2A1A1A] focus:outline-none focus:border-[#4A1818]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-sans text-[#2A1A1A]/70 mb-1.5 font-medium">
                    Phone Number (WhatsApp) *
                  </label>
                  <input
                    type="tel"
                    required
                    value={booking.guestPhone}
                    onChange={(e) => setBooking({ ...booking, guestPhone: e.target.value })}
                    placeholder="+91 98765 43210"
                    className="w-full bg-white border border-[rgba(74,24,24,0.15)] rounded-[6px] px-4 py-2.5 text-sm text-[#2A1A1A] focus:outline-none focus:border-[#4A1818]"
                  />
                </div>
              </div>

              {/* Consultation Notes */}
              <div>
                <label className="block text-xs font-sans text-[#2A1A1A]/70 mb-1.5 font-medium">
                  Sensory or Bridal Notes (Optional)
                </label>
                <textarea
                  rows={3}
                  value={booking.consultationNotes}
                  onChange={(e) => setBooking({ ...booking, consultationNotes: e.target.value })}
                  placeholder="Mention jewelry weight trials, municipal hard-water sensitivity, or quietude requests..."
                  className="w-full bg-white border border-[rgba(74,24,24,0.15)] rounded-[6px] px-4 py-2.5 text-sm text-[#2A1A1A] focus:outline-none focus:border-[#4A1818]"
                />
              </div>
            </div>

            {/* Submission Bar */}
            <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-6">
              <div className="text-xs font-sans text-[#2A1A1A]/60 text-center sm:text-left">
                <span>Total Tariff for Session: </span>
                <span className="font-serif text-xl text-[#2A1A1A] font-semibold ml-1">
                  ₹{selectedService.price.toLocaleString('en-IN')}
                </span>
                <span className="block text-[11px] text-[#2A1A1A]/50">
                  Payment is settled post-session in the private suite.
                </span>
              </div>

              <button
                type="submit"
                className="btn-maroon-pill !py-3.5 !px-8 text-sm"
              >
                <span>Confirm Private Suite Reservation</span>
                <ArrowRight className="w-4 h-4 ml-2" />
              </button>
            </div>

          </form>
        )}

      </div>
    </div>
  );
};
