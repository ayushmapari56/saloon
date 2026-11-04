import { ServiceItem, ProductItem, PortfolioItem, StylistMember, SalonLocation } from '../types';

export const SALON_INFO = {
  name: "CAPELLO",
  tagline: "Bespoke Hair Artistry & Ayurvedic Trichology",
  subheading: "India's premier sanctuary for architectural hair sculpting, Ayurvedic scalp therapies, and bespoke bridal couture.",
  edition: "PRIVATE EDITION · CAPELLO INDIA · VOL. V",
  cityPairs: "MUMBAI · NEW DELHI · BENGALURU · HYDERABAD"
};

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: "couture-cut-architecture",
    category: "hair",
    title: "Architectural Precision Haircut & Silk Seal",
    subtitle: "Cranial diagnostic cut tailored to natural density and movement",
    duration: "75 min",
    price: 4500,
    description: "An architectural dry-and-wet cut sculpted to complement cranial bone structure, natural grain, and facial symmetry. Includes our signature botanical scalp wash and velvet silk blow-dry.",
    ritualSteps: [
      "Micro-cranial diagnosis & hair density consultation",
      "Warm cedarwood & vetiver clarifying scalp cleanse",
      "Wet architectural shaping with Japanese precision shears",
      "Dry texture carving tailored to natural movement and wave",
      "Cold-air gloss diffusion and raw silk serum seal"
    ],
    keyIngredients: ["Kashmiri Walnut Oil", "Hydrolyzed Cashmere Protein", "Damask Rose Hydrosol"],
    recommendedTier: "Master Stylist",
    image: "https://images.unsplash.com/photo-1560869713-7d0a29430803?auto=format&fit=crop&w=900&q=80"
  },
  {
    id: "sunkissed-chai-balayage",
    category: "color",
    title: "Chai & Warm Cinnamon Mineral Balayage",
    subtitle: "Ammonia-free painterly lightening for Indian brunettes",
    duration: "180 min",
    price: 12500,
    description: "Tailored specifically for Indian brunette undertones. Freehand painterly balayage using ammonia-free Kaolin clay, followed by a double glaze in warm spiced chai, molten caramel, or bronze champagne with zero brassiness.",
    ritualSteps: [
      "Melanin reflectance mapping & tone customization",
      "Freehand kaolin clay lightening application",
      "Controlled incubation under soft infrared warmth",
      "Bond-repairing post-lightening pH balancing rinse",
      "Dual mineral gloss infusion tailored to South Asian skin tones"
    ],
    keyIngredients: ["White Kaolin Clay", "Sweet Almond Lipid Complex", "Amber Resin Extract"],
    recommendedTier: "Artistic Director",
    image: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=900&q=80"
  },
  {
    id: "ayurvedic-keshya-shirodhara",
    category: "scalp",
    title: "Royal Ayurvedic Shirodhara Scalp Therapy",
    subtitle: "Warm copper vessel oil stream and marma point relief",
    duration: "90 min",
    price: 6800,
    description: "A transcendental 90-minute ritual combining continuous warm herbal oil rhythm from a hand-beaten copper vessel, Kansa wand marma-point stimulation, and high-frequency ozone therapy for folicular rebirth.",
    ritualSteps: [
      "Microscopic dermascope scalp diagnosis (200x)",
      "Traditional Kansa wand cranial marma massage",
      "Continuous rhythm copper vessel warm Bhringraj oil drip (Shirodhara)",
      "Ozone oxygenating comb stimulating dormant roots",
      "Cold rosewater infusion and steam towel wrap"
    ],
    keyIngredients: ["Bhringraj & Brahmi Infusion", "Cold-Pressed Black Sesame", "Kansa Copper Minerals"],
    recommendedTier: "Master Stylist",
    image: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=900&q=80"
  },
  {
    id: "royal-mughal-bridal-updo",
    category: "bridal",
    title: "Royal Mughal Bridal Hair Architecture",
    subtitle: "Sculptural occasion chignon engineered for heavy jewelry",
    duration: "120 min",
    price: 16500,
    description: "Haute bridal hair architecture engineered to anchor heavy antique maang tikkas, mathapattis, and dupattas effortlessly for 14+ hours. Finished with fresh Madurai mogra or French baby's breath pinning.",
    ritualSteps: [
      "Bridal outfit & heirloom jewelry harmony consultation",
      "Humidity-proof botanical foundation prep",
      "Architectural textured chignon sculpting with hidden frame pins",
      "Dupatta weight-balancing anchor integration",
      "Fresh floral woven garland (Mogra/Jasmine) placement & veil setting"
    ],
    keyIngredients: ["Nordic Birch Resin", "Wild Beeswax Extract", "Fresh Madurai Jasmine Mist"],
    recommendedTier: "Artistic Director",
    image: "https://images.unsplash.com/photo-1519699047748-de8e457a634e?auto=format&fit=crop&w=900&q=80"
  },
  {
    id: "monsoon-hardwater-detox",
    category: "scalp",
    title: "Urban Hard-Water Detox & Hair Botox",
    subtitle: "Chelating mineral cleanse and hyaluronic moisture recharge",
    duration: "75 min",
    price: 5200,
    description: "Formulated to counter Indian municipal and groundwater hardness (calcium, magnesium, chlorine). Chelating fruit acids dissolve mineral deposits, followed by hyaluronic botox plumping for weightless bounce.",
    ritualSteps: [
      "Chelating fruit acid mineral strip bath",
      "pH-neutralizing volcanic ash foam cleanse",
      "Hyaluronic & biomimetic ceramide ultrasound infusion",
      "Cold-water mineral lock seal",
      "Lightweight silk thermal protective blowout"
    ],
    keyIngredients: ["Fermented Fruit AHA", "Biomimetic Ceramide NP", "Marine Algae Polysaccharides"],
    recommendedTier: "Senior Resident",
    image: "https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?auto=format&fit=crop&w=900&q=80"
  },
  {
    id: "kumkumadi-24k-gold-facial",
    category: "facial",
    title: "24K Gold Kumkumadi Saffron Facial",
    subtitle: "Buccal muscular sculpting and cold jade contouring",
    duration: "80 min",
    price: 7500,
    description: "A transformative facial combining rare Kashmiri saffron oil (Kumkumadi Thailam), 24k bio-gold leaf, intra-oral buccal lifting, and cold nephrite jade lymphatic drainage for an ethereal bridal glow.",
    ritualSteps: [
      "Warm sandalwood hydrosol double cleanse",
      "Intra-oral buccal tension relief & cheekbone sculpting",
      "Nephrite jade cold gua sha jawline definition",
      "Pure Kashmiri 24k bio-gold leaf infusion compress",
      "Saffron and blue lotus cooling mist seal"
    ],
    keyIngredients: ["Pure Kashmiri Mogra Saffron", "24K Bio-Gold Leaf", "Mysore Sandalwood Hydrosol"],
    recommendedTier: "Artistic Director",
    image: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=900&q=80"
  },
  {
    id: "liquid-gold-nanoplastia",
    category: "botanical",
    title: "Liquid Gold Nanoplastia Smoothing Reset",
    subtitle: "Formaldehyde-free organic smoothing & mirror glass shine",
    duration: "180 min",
    price: 14500,
    description: "100% formaldehyde-free organic restructuring. Infuses nanoscopic amino acids, murumuru butter, and argan nectar deep into the cortex, delivering mirror-smooth glass hair that withstands coastal Indian humidity.",
    ritualSteps: [
      "Clarifying botanical deep cleanse",
      "Nanoplastia organic amino acid saturation",
      "Infrared ceramic sealing at calibrated 190°C",
      "Neutralizing cold rose elixir bath",
      "Deep hydration cashmere silk finish"
    ],
    keyIngredients: ["Organic Murumuru Butter", "Moroccan Argan Nectar", "Silk Sericin Peptides"],
    recommendedTier: "Master Stylist",
    image: "https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388?auto=format&fit=crop&w=900&q=80"
  }
];

export const PRODUCTS_DATA: ProductItem[] = [
  {
    id: "capello-keshya-nectar",
    name: "N° 01 Botanical Hair Nectar",
    subtitle: "21 Cold-Pressed Herbs & Virgin Kerala Coconut Oil",
    category: "hair-elixir",
    size: "100 ml / 3.4 fl. oz.",
    price: 3200,
    description: "An artisanal Ayurvedic hair oil crafted with heirloom Bhringraj, amla, and hibiscus blossoms macerated under warm sunlight in raw Kerala coconut oil to fortify roots and prevent premature silvering.",
    notes: ["Damask Rose", "Mysore Sandalwood", "Wild Bergamot"],
    ingredients: ["Cold-Pressed Cocos Nucifera", "Eclipta Alba (Bhringraj)", "Emblica Officinalis (Amla)", "Hibiscus Rosa-Sinensis", "Tocopherol"],
    image: "https://images.unsplash.com/photo-1608248597359-250882e340e4?auto=format&fit=crop&w=800&q=80",
    inStock: true,
    featured: true
  },
  {
    id: "capello-saffron-heat-mist",
    name: "N° 02 Saffron & Amber Thermal Veil",
    subtitle: "Weightless Heat Protection Shield up to 230°C",
    category: "hair-elixir",
    size: "120 ml / 4.0 fl. oz.",
    price: 2600,
    description: "A weightless heat protection veil enriched with antioxidant-rich Kashmiri saffron fractions and amber resin. Guards hair from styling heat, UV oxidation, and urban smog.",
    notes: ["Kashmiri Saffron", "Warm Amber", "White Cardamom"],
    ingredients: ["Crocus Sativus Stigma Extract", "Hydrolyzed Quinoa", "Colloidal Silica", "Rosa Damascena Distillate"],
    image: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&w=800&q=80",
    inStock: true,
    featured: true
  },
  {
    id: "capello-himalayan-gommage",
    name: "N° 03 Himalayan Volcanic & Neem Scrub",
    subtitle: "Purifying Mineral & Pink Rock Salt Exfoliant",
    category: "scalp-serum",
    size: "200 ml / 6.7 fl. oz.",
    price: 2800,
    description: "Pink Himalayan rock salt and organic neem leaf paste suspended in whipped shea butter. Gently purges buildup, dandruff flakes, and hard-water deposits while restoring scalp oxygenation.",
    notes: ["Crisp Tea Tree", "Crushed Mint", "Himalayan Cedarwood"],
    ingredients: ["Himalayan Pink Salt", "Azadirachta Indica (Neem)", "Shea Butter Nilotica", "Organic Peppermint Hydrosol"],
    image: "https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=800&q=80",
    inStock: true,
    featured: false
  },
  {
    id: "capello-mogra-parfum",
    name: "N° 04 Madurai Jasmine & Vetiver Hair Perfume",
    subtitle: "Alcohol-Free Hydrating Sillage",
    category: "fragrance",
    size: "75 ml / 2.5 fl. oz.",
    price: 3600,
    description: "An alcohol-free couture hair fragrance that hydrates strands with hyaluronic fractions while leaving an intimate sillage of hand-picked Madurai mogra blossoms and earthy vetiver root.",
    notes: ["Night-Blooming Mogra", "Vetiver (Khus)", "Green Cardamom", "White Musk"],
    ingredients: ["Hyaluronic Acid Micro-spheres", "Jasminum Sambac Flower Water", "Vetiveria Zizanioides Root Extract"],
    image: "https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?auto=format&fit=crop&w=800&q=80",
    inStock: true,
    featured: true
  },
  {
    id: "capello-cashmere-mask",
    name: "N° 05 Kashmiri Walnut & Keratin Soufflé",
    subtitle: "Deep Moisture & Frizz-Control Repair Mask",
    category: "treatment",
    size: "250 ml / 8.5 fl. oz.",
    price: 3400,
    description: "Formulated specifically to tame coastal humidity and monsoons. Biomimetic cashmere amino acids and unrefined Kashmiri walnut butter repair damaged cuticles in 10 minutes.",
    notes: ["Roasted Walnut", "Bourbon Vanilla", "Almond Blossom"],
    ingredients: ["Juglans Regia (Walnut) Seed Oil", "Cashmere Keratin", "Prunus Amygdalus Dulcis", "Ceramide NP"],
    image: "https://images.unsplash.com/photo-1526947425960-945c6e72858f?auto=format&fit=crop&w=800&q=80",
    inStock: true,
    featured: false
  },
  {
    id: "capello-kumkumadi-24k",
    name: "N° 06 24K Gold Kumkumadi Night Elixir",
    subtitle: "Kashmiri Saffron & 24K Gold Glow Oil",
    category: "botanical-balm",
    size: "30 ml / 1.0 fl. oz.",
    price: 4800,
    description: "Handcrafted in small copper cauldrons with 26 Ayurvedic herbs, real 24k bio-gold flakes, and pure red saffron stigmas from Pampore to bestow an incandescent bridal glow.",
    notes: ["Pure Red Saffron", "Lotus Stamen", "Vetiver"],
    ingredients: ["Crocus Sativus (Saffron)", "Pterocarpus Santalinus (Red Sandalwood)", "Ficus Religiosa", "24K Pure Gold Flakes"],
    image: "https://images.unsplash.com/photo-1571781926291-c477ebfd024b?auto=format&fit=crop&w=800&q=80",
    inStock: true,
    featured: false
  }
];

export const PORTFOLIO_DATA: PortfolioItem[] = [
  {
    id: "look-pali-hill-bob",
    title: "The Pali Hill Precision Blunt Bob",
    category: "Couture Cuts",
    stylist: "Alistair Fernandes",
    season: "Monsoon / Winter 2026",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=1000&q=80",
    description: "Razor-sharp architectural perimeter cut strictly dry to respect the hairline's natural grain. Polished with cold squalane and mineral glass.",
    formulaNote: "Cut dry with Japanese carbon shears, finished with N° 01 Botanical Hair Nectar."
  },
  {
    id: "look-chai-balayage",
    title: "Spiced Chai & Caramel Dimensional Balayage",
    category: "Chai & Caramel Balayage",
    stylist: "Priya Kapoor",
    season: "Festive Couture 2026",
    image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=1000&q=80",
    description: "Whisper-thin micro-slices framed around the cheekbones, seamlessly blending espresso roots into melted cinnamon, hazelnut, and warm caramel.",
    formulaNote: "Kaolin Clay 20 vol + Double Glaze (Warm Spiced Chai & Golden Sand)."
  },
  {
    id: "look-mughal-bridal",
    title: "Royal Mughal Bridal Architectural Chignon",
    category: "Royal Bridal Updos",
    stylist: "Alistair Fernandes",
    season: "Bridal Couture Fashion Week",
    image: "https://images.unsplash.com/photo-1509967419530-da38b4704bc6?auto=format&fit=crop&w=1000&q=80",
    description: "Architectural structured bun built to anchor heavy heirloom mathapattis without pulling. Finished with woven Madurai mogra and gold filigree pins.",
    formulaNote: "Prepped with N° 02 Saffron Thermal Veil and organic beeswax hold."
  },
  {
    id: "look-soft-curtain-layers",
    title: "Bombay Modern Wave & Feathered Curtain Fringe",
    category: "Couture Cuts",
    stylist: "Dr. Ananya Sen-Sharma",
    season: "Spring / Summer 2026",
    image: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=1000&q=80",
    description: "Cascading face-framing curtains that celebrate rich natural wave movement, dried under gentle diffused ambient warmth.",
    formulaNote: "Diffused with N° 04 Madurai Jasmine Hair Perfume for weightless movement."
  },
  {
    id: "look-espresso-glass",
    title: "Obsidian Espresso Liquid Mirror Glaze",
    category: "Chai & Caramel Balayage",
    stylist: "Priya Kapoor",
    season: "Autumn / Winter 2026",
    image: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=crop&w=1000&q=80",
    description: "Rich dark chocolate with deep crystalline light reflection. Restores virgin hair bounce and eliminates monsoon frizzy flyaways.",
    formulaNote: "Nanoplastia amino infusion + 0.00 Crystal Gloss cold lock."
  },
  {
    id: "look-editorial-runway",
    title: "Sculptural Sleek Wet Waves · Runway",
    category: "Runway & Editorial",
    stylist: "Alistair Fernandes",
    season: "Lakmé Fashion Week Grand Finale",
    image: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format&fit=crop&w=1000&q=80",
    description: "Editorial gloss waves molded along temple contours, combining classic royal Indian opulence with modern architectural minimalism.",
    formulaNote: "Sculpted with organic flaxseed gel and cold-pressed marula oil."
  }
];

export const STYLISTS_DATA: StylistMember[] = [
  {
    id: "alistair-fernandes",
    name: "Alistair Fernandes",
    role: "Artistic Director & Master Sculptor",
    tier: "Artistic Director",
    experience: "19 years — Lakmé Fashion Week & Milan",
    specialty: "Architectural Dry Sculpting & Royal Bridal Updos",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80",
    quote: "Indian hair has extraordinary density and natural wave. Our role is not to force it into submission, but to sculpt its innate majesty."
  },
  {
    id: "priya-kapoor",
    name: "Priya Kapoor",
    role: "Lead Colorist & Pigment Alchemist",
    tier: "Master Stylist",
    experience: "14 years — London & Paris Atelier Trained",
    specialty: "Sunkissed Chai Balayage & Anti-Brass Mineral Toners",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80",
    quote: "We don't bleach Indian hair into lifeless blonde; we reveal dimensional warmth that reflects the golden light of the Deccan."
  },
  {
    id: "ananya-sen-sharma",
    name: "Dr. Ananya Sen-Sharma",
    role: "Head of Ayurvedic Trichology & Scalp Wellness",
    tier: "Senior Resident",
    experience: "12 years — BAMS (Kerala) & Certified Trichologist",
    specialty: "Shirodhara Scalp Therapies, Kansa Marma & Hard-Water Detox",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=800&q=80",
    quote: "The scalp is an ecosystem of delicate marma meridians. When we soothe the roots with cold-pressed nectars, the hair blossoms naturally."
  }
];

export const SALONS_DATA: SalonLocation[] = [
  {
    id: "mumbai-bandra-pali-hill",
    city: "Mumbai",
    name: "Capello Pali Hill Penthouse",
    district: "Bandra West",
    address: "Penthouse 7, Nargis Dutt Road, Pali Hill, Bandra West, Mumbai 400050",
    phone: "+91 22 2640 8820",
    hours: "Tuesday – Sunday: 10:00 – 20:30 (Private Appointments)",
    image: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=900&q=80",
    features: [
      "Sea-breeze Penthouse Suites overlooking the Arabian Sea",
      "Subterranean Keshya Shirodhara & Copper Spa Sanctuary",
      "Acoustically isolated Whisper Suites for VIP & Celebrity guests",
      "Complimentary Valet & Private Lift Access"
    ]
  },
  {
    id: "delhi-chanakya-mehrauli",
    city: "New Delhi",
    name: "Capello The Chanakya & Mehrauli",
    district: "Chanakyapuri & Mehrauli Heritage Enclave",
    address: "Pavilion 4, The Chanakya, Yashwant Place, Chanakyapuri, New Delhi 110021",
    phone: "+91 11 4100 7710",
    hours: "Tuesday – Sunday: 10:30 – 21:00",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=900&q=80",
    features: [
      "Royal Mughal-inspired Honed Travertine & Sandstone Architecture",
      "Private Bridal Atelier with Mathapatti & Dupatta Trial Mirror Hall",
      "Rare Kashmiri Kahwa & Single-Estate Darjeeling Tea Bar",
      "Chauffeur-coordinated Private Concierge"
    ]
  },
  {
    id: "bengaluru-lavelle-road",
    city: "Bengaluru",
    name: "Capello Lavelle Road Sanctuary",
    district: "Central Business Enclave",
    address: "32 Lavelle Road, Shanthala Nagar, Bengaluru, Karnataka 560001",
    phone: "+91 80 4122 3340",
    hours: "Tuesday – Sunday: 09:30 – 20:00",
    image: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=900&q=80",
    features: [
      "Lush Rainforest Atrium with Biodynamic Scalp Garden",
      "Executive Quietude Pods with High-Speed Noise Cancellation",
      "Cold-Pressed Fresh Coconut & Lemongrass Infusion Bar",
      "Bespoke Men's Grooming & Beard Architecture Suite"
    ]
  },
  {
    id: "hyderabad-jubilee-hills",
    city: "Hyderabad",
    name: "Capello Jubilee Hills",
    district: "Road No. 36 Enclave",
    address: "Plot 82, Road No. 36, Jubilee Hills, Hyderabad, Telangana 500033",
    phone: "+91 40 2355 6670",
    hours: "Tuesday – Sunday: 10:00 – 20:30",
    image: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=900&q=80",
    features: [
      "Palatial Alabaster Courtyard with Water Cascades",
      "Private Family Bridal Dressing Pavilion",
      "Ayurvedic Herbal Cauldron Formulation Bar",
      "Valet Parking & Private Elevator"
    ]
  }
];

export const EDITORIAL_PRESS = [
  {
    quote: "Capello has redefined luxury salon culture in India: no chaotic chemical odors, no hurried blowouts, only unhurried Ayurvedic quietude and precision hair architecture.",
    publication: "VOGUE INDIA",
    date: "ANNUAL LUXURY ISSUE"
  },
  {
    quote: "Their Keshya Shirodhara scalp ceremony is an intoxicating ritual of warm herbal oils and marma pressure that erases urban fatigue instantly.",
    publication: "HARPER'S BAZAAR INDIA",
    date: "BEAUTY EDITION"
  },
  {
    quote: "Finally, balayage tailored for Indian brunettes that avoids brassy orange tones. Capello's Chai and Molten Bronze tones are works of art.",
    publication: "ELLE INDIA",
    date: "SALON AWARDS"
  }
];

export const TIME_SLOTS = [
  "10:00", "11:30", "13:00", "14:30", "16:00", "17:30", "19:00"
];
