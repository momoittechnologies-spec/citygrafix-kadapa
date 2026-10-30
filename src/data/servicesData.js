// Comprehensive Services Catalog for City Grafix Kadapa
export const SERVICES_CATEGORIES = [
  { id: 'all', label: 'All Services' },
  { id: 'flex', label: 'Flex & Large Format' },
  { id: 'boards', label: 'Sign Boards & 3D Letters' },
  { id: 'stickers', label: 'Stickers & Glass Film' },
  { id: 'gifts', label: 'Custom Gifts & Frames' },
  { id: 'offset', label: 'Commercial & Offset' },
  { id: 'design', label: 'Graphic Design Studio' }
];

export const SERVICES_LIST = [
  {
    id: 'star-flex',
    category: 'flex',
    title: 'Star Flex Banner Printing',
    teluguTitle: 'స్టార్ ఫ్లెక్స్ ప్రింటింగ్',
    badge: 'Best Seller',
    tagline: 'High-gloss premium finish with vibrant, sun-resistant colors',
    description: 'Our flagship large-format printing solution. Engineered with heavy GSM substrate to deliver eye-popping CMYK fidelity that stays vibrant even under Kadapa’s intense weather. Perfect for shop fronts, roadside hoardings, political events, and festival celebrations.',
    features: [
      'Heavy GSM thick tear-resistant fabric',
      'High-gloss coating for richer contrast',
      'UV protected Japanese eco-solvent inks',
      'Available in any dimension (up to 100+ feet)'
    ],
    turnaround: 'Same Day Dispatch (2 - 4 Hours)',
    image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=800&q=80',
    popular: true
  },
  {
    id: 'acrylic-3d-letters',
    category: 'boards',
    title: '3D Acrylic LED Letter Boards',
    teluguTitle: '3D అక్రిలిక్ ఎల్ఈడీ బోర్డ్స్',
    badge: 'Luxury Brand Choice',
    tagline: 'Precision laser-cut channel letters with backlit neon glow',
    description: 'Give your business an elite, world-class storefront presence. Custom crafted with imported cast acrylic, solid aluminum composite backings, and long-lasting branded LED modules with waterproof IP67 drivers.',
    features: [
      'Precision CNC laser-cut acrylic front',
      'Front-lit, back-lit (halo), or full-glow options',
      'Branded Osram/Samsung ultra-bright LEDs',
      '3-Year structural & lighting durability'
    ],
    turnaround: '3 - 5 Days',
    image: 'https://images.unsplash.com/photo-1572945550744-570424749b95?auto=format&fit=crop&w=800&q=80',
    popular: true
  },
  {
    id: 'led-glow-boards',
    category: 'boards',
    title: 'LED Glow Sign Boards & ACP Work',
    teluguTitle: 'ఎల్ఈడీ గ్లో సైన్ బోర్డులు',
    badge: 'Popular for Retail',
    tagline: 'Heavy-gauge steel light boxes with uniform edge-to-edge glow',
    description: 'The classic high-visibility sign board trusted by pharmacies, grocery stores, restaurants, and retail showrooms across Kadapa. Built with anti-rust treated iron frames and backlit flex or polycarbonate face.',
    features: [
      'Anti-corrosion powder coated iron framework',
      'High-lumen waterproof LED internal arrays',
      'Low power consumption energy-efficient circuits',
      'Custom fabricated to your exact storefront size'
    ],
    turnaround: '2 - 3 Days',
    image: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=800&q=80',
    popular: true
  },
  {
    id: 'rollup-standees',
    category: 'flex',
    title: 'Rollup Standees & X-Banners',
    teluguTitle: 'రోలప్ స్టాండీస్ & ఈవెంట్ బ్యానర్స్',
    badge: 'Event Ready',
    tagline: 'Portable aluminum pull-up banner stands with carrying bag',
    description: 'Essential for hospital seminars, college conferences, real estate sales pavilions, trade fairs, and hotel event entrances. Lightweight, sets up in 30 seconds, and collapses into a neat shoulder bag.',
    features: [
      'Standard sizes: 6ft × 2.5ft and 6ft × 3ft',
      'Non-tearable matte greyback synthetic film',
      'High-grade aluminum mechanical base',
      'Includes complimentary padded nylon travel bag'
    ],
    turnaround: 'Same Day (Within 3 Hours)',
    image: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=800&q=80',
    popular: false
  },
  {
    id: 'one-way-vision',
    category: 'stickers',
    title: 'One-Way Vision Glass Graphics',
    teluguTitle: 'వన్ వే విజన్ గ్లాస్ బ్రాండింగ్',
    badge: 'Smart Privacy',
    tagline: 'Vibrant outdoor advertising with full visibility from inside',
    description: 'Transform clinic, office, showroom glass windows or vehicle rear glass into dynamic ad billboards while maintaining crystal clear outdoor sightlines and heat reduction from the inside.',
    features: [
      'Micro-perforated vinyl mesh structure',
      'Acts as a daylight sun barrier & UV filter',
      'Removable adhesive leaving zero sticky residue',
      'High definition photo-quality digital print'
    ],
    turnaround: '24 Hours',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80',
    popular: true
  },
  {
    id: 'vinyl-stickers',
    category: 'stickers',
    title: 'Custom Vinyl Stickers & Frosted Film',
    teluguTitle: 'వినైల్ స్టిక్కర్స్ & ఫ్రాస్టెడ్ ఫిల్మ్',
    badge: 'Versatile',
    tagline: 'Die-cut waterproof stickers, wall decals & privacy partitions',
    description: 'From miniature product packaging labels and barcode stickers to expansive interior glass decorative frosted patterns and showroom wall murals.',
    features: [
      'Gloss, Matte, and Transparent film finishes',
      'Precision contour & kiss-cut shaping',
      'Scratch & water resistant protective overlaminate',
      'Ideal for metal, wood, acrylic, glass, and vehicles'
    ],
    turnaround: '24 Hours',
    image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=80',
    popular: false
  },
  {
    id: 'custom-mugs',
    category: 'gifts',
    title: 'Personalized Photo Mugs & Magic Mugs',
    teluguTitle: 'కస్టమ్ ఫోటో మగ్స్ & మ్యాజిక్ మగ్స్',
    badge: 'Trending Gift',
    tagline: 'Premium ceramic mugs printed with your photos and quotes',
    description: 'The perfect gift for birthdays, anniversaries, corporate employee welcomes, and friend reunions. Watch your memories appear magically when pouring hot coffee into our Magic Mugs!',
    features: [
      'Food-safe grade A ceramic build',
      'Microwave and dishwasher safe print',
      'Magic heat-sensitive color-changing option',
      'Includes individual protective gift presentation box'
    ],
    turnaround: 'Instant (1 - 2 Hours)',
    image: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=800&q=80',
    popular: true
  },
  {
    id: 'photo-frames',
    category: 'gifts',
    title: 'Custom Wooden Photo Frames & Collages',
    teluguTitle: 'పర్సనలైజ్డ్ ఫోటో ఫ్రేమ్స్',
    badge: 'Timeless Keepsake',
    tagline: 'Elegant synthetic wood frames with crystal lamination',
    description: 'Preserve wedding, family, newborn, and milestone memories. Choose from single royal portraits, collage layouts, or LED back-lit floating photo frames ready to mount on your living room wall.',
    features: [
      'Sturdy synthetic wood molding in Black, Gold, White & Teak',
      'Sparkle velvet or smooth matte lamination',
      'Unbreakable acrylic glass shield',
      'Heavy MDF backing with dual orientation hanging hooks'
    ],
    turnaround: '24 Hours',
    image: 'https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&w=800&q=80',
    popular: true
  },
  {
    id: 'visiting-cards',
    category: 'offset',
    title: 'Luxury Visiting Cards & Business Cards',
    teluguTitle: 'బిజినెస్ & విజిటింగ్ కార్డ్స్',
    badge: 'Corporate Standard',
    tagline: 'From crisp 350 GSM cards to velvety Spot UV & gold foil',
    description: 'Make a commanding first impression in any client meeting. We offer premium paper stocks, rounded corner dies, metallic foil highlights, and velvety soft-touch lamination.',
    features: [
      'High-grade 350 GSM imported art board',
      'Matte, Gloss, Velvet Touch & Spot UV options',
      'Sharp ultra-fine 2400 DPI offset printing',
      'Affordable bulk packs of 1000, 2000, 5000 cards'
    ],
    turnaround: '2 - 3 Days',
    image: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=800&q=80',
    popular: true
  },
  {
    id: 'stationery-printing',
    category: 'offset',
    title: 'Pamphlets, Bill Books & ID Cards',
    teluguTitle: 'కరపత్రాలు, బిల్ బుక్స్ & ఐడీ కార్డ్స్',
    badge: 'Commercial Essential',
    tagline: 'Complete paper printing solutions for schools, shops & offices',
    description: 'High-speed multicolour flyers for newspaper inserts, duplicate & triplicate carbonless bill books with custom serial numbering, employee PVC ID cards with custom printed lanyards.',
    features: [
      'Multi-color offset newspaper pamphlets (10k - 100k+ runs)',
      'Numbered carbonless duplicate bill & receipt vouchers',
      'Rigid PVC smart ID cards with barcode/QR integration',
      'Executive letterheads & envelopes'
    ],
    turnaround: '1 - 3 Days',
    image: 'https://images.unsplash.com/photo-1586075010923-2dd4570fb338?auto=format&fit=crop&w=800&q=80',
    popular: false
  },
  {
    id: 'event-flex-banners',
    category: 'design',
    title: 'Telugu & English Event Graphic Design',
    teluguTitle: 'ప్రత్యేక డిజైనింగ్ & ఈవెంట్ ఫ్లెక్స్',
    badge: 'Creative Masters',
    tagline: 'Political, cinema fan club, birthday, and festival designs',
    description: 'Have an idea? Our veteran graphic artists bring it to life with vibrant Telugu typography, dynamic 3D lighting effects, photo background blending, and high-impact layouts that captivate crowds.',
    features: [
      'Authentic Telugu, Urdu & English typography',
      'Specialized in grand opening & festive festival banners',
      'High resolution image retouching & background cutout',
      'Instant draft sharing via WhatsApp for quick revisions'
    ],
    turnaround: '1 - 2 Hours',
    image: 'https://images.unsplash.com/photo-1626785774573-4b799315345d?auto=format&fit=crop&w=800&q=80',
    popular: true
  }
];
