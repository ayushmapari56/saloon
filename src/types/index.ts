export type ScreenId = 'home' | 'services' | 'apothecary' | 'booking' | 'portfolio' | 'salons';

export interface ServiceItem {
  id: string;
  category: 'hair' | 'color' | 'scalp' | 'bridal' | 'facial' | 'botanical';
  title: string;
  subtitle?: string;
  duration: string;
  price: number;
  description: string;
  ritualSteps: string[];
  keyIngredients: string[];
  recommendedTier: 'Master Stylist' | 'Senior Resident' | 'Artistic Director';
  image: string;
}

export interface ProductItem {
  id: string;
  name: string;
  subtitle: string;
  category: 'hair-elixir' | 'scalp-serum' | 'botanical-balm' | 'fragrance' | 'treatment';
  size: string;
  price: number;
  description: string;
  notes: string[];
  ingredients: string[];
  image: string;
  inStock: boolean;
  featured?: boolean;
}

export interface PortfolioItem {
  id: string;
  title: string;
  category: 'Couture Cuts' | 'Chai & Caramel Balayage' | 'Royal Bridal Updos' | 'Runway & Editorial';
  stylist: string;
  season: string;
  image: string;
  description: string;
  formulaNote?: string;
}

export interface StylistMember {
  id: string;
  name: string;
  role: string;
  tier: 'Master Stylist' | 'Senior Resident' | 'Artistic Director';
  experience: string;
  specialty: string;
  image: string;
  quote: string;
}

export interface SalonLocation {
  id: string;
  city: string;
  name: string;
  address: string;
  district: string;
  phone: string;
  hours: string;
  image: string;
  features: string[];
}

export interface BookingState {
  serviceId?: string;
  tier: 'Master Stylist' | 'Senior Resident' | 'Artistic Director';
  stylistId?: string;
  locationId: string;
  date: string;
  timeSlot: string;
  guestName: string;
  guestEmail: string;
  guestPhone: string;
  sensoryPreference: 'Quietude (Silent Session)' | 'Mysore Sandalwood & Mogra Aroma' | 'Acoustic Sitar & Ambient Jazz';
  complimentaryBeverage: 'Kashmiri Kahwa with Almonds & Saffron' | 'Darjeeling First Flush Tea' | 'Cold Tender Coconut & Mint' | 'Artisan Spiced Lemongrass Chai';
  consultationNotes: string;
}

export interface CartItem {
  product: ProductItem;
  quantity: number;
}
