// Official 4-Pillar Services Catalog for City Grafix Kadapa
// Complete Printing, Designing, Advertising & Gifting Solutions

export const SERVICES_CATEGORIES = [
  { id: 'all', label: 'All Services' },
  { id: 'xerox', label: 'Jumbo Xerox & Plans', badge: 'A0 - A4' },
  { id: 'flex', label: 'Flex & Sign Boards', badge: 'Outdoor' },
  { id: 'gifts', label: 'Personalised Gifts', badge: 'Mugs & T-Shirts' },
  { id: 'boards', label: 'Stickers & Boards', badge: 'Sunboard' }
];

export const SERVICES_LIST = [
  // ==========================================
  // PILLAR 1: JUMBO XEROX & LARGE FORMAT PLANS
  // ==========================================
  {
    id: 'jumbo-xerox-a0-a4',
    category: 'xerox',
    title: 'Jumbo Xerox Services (A0, A1, A2, A3, A4)',
    teluguTitle: 'జంబో జిరాక్స్ సర్వీసెస్ (కలర్ & B/W)',
    badge: 'High Precision CAD',
    tagline: 'High-speed large format colour and black & white photocopying',
    description: 'Kadapa’s premier center for large format document reproduction. Equipped with high-speed digital plotters capable of scanning and printing blueprints from standard A4/A3 up to massive A2, A1, and A0 sheet sizes with ultra-sharp lines.',
    features: [
      'A0, A1, A2, A3 & A4 Colour & Black and White Xerox',
      'Ultra-sharp 1200 DPI vector line reproduction',
      'Instant bulk reproduction for contractors & colleges',
      'Same-day express dispatch at Seven Roads Circle'
    ],
    turnaround: 'Instant / Same-Hour Service',
    image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80',
    popular: true
  },
  {
    id: 'engineering-architectural-drawings',
    category: 'xerox',
    title: 'Engineering & Architectural Drawing Printing',
    teluguTitle: 'ఇంజనీరింగ్ & ఆర్కిటెక్చరల్ డ్రాయింగ్స్',
    badge: 'Engineers & Architects',
    tagline: 'High-precision structural drawings, electrical & plumbing schematics',
    description: 'Designed specifically for civil engineers, MEP consultants, and architects. We print complex multi-layer AutoCAD DWG/PDF drawings with millimeter accuracy, precise line weights, and smudge-proof digital toner.',
    features: [
      'Structural blueprints, column layouts & elevation plans',
      'High-speed plotters maintaining exact 1:100 / 1:50 scales',
      'Smudge-proof & moisture-resistant digital toner',
      'Folding into standard A4 filing size upon request'
    ],
    turnaround: '15 - 30 Minutes',
    image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=800&q=80',
    popular: true
  },
  {
    id: 'municipal-layouts-village-maps',
    category: 'xerox',
    title: 'Municipal Layout & Village Map Printing',
    teluguTitle: 'మున్సిపల్ లేఅవుట్స్ & విలేజ్ మ్యాప్స్',
    badge: 'Land Survey & Govt',
    tagline: 'Master plans, venture layouts, revenue village maps & survey sheets',
    description: 'High-definition large-size map reproduction for real estate developers, survey officers, and legal land consultants. We reproduce revenue survey maps, venture layouts, and town planning master blueprints with absolute geometric fidelity.',
    features: [
      'Village survey maps & revenue FMB sketches',
      'Real estate venture plots with accurate boundary coloring',
      'Municipal building plan sanction blueprints',
      'Large size map printing up to 44-inch continuous length'
    ],
    turnaround: 'Express Turnaround',
    image: 'https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&w=800&q=80',
    popular: true
  },
  {
    id: 'tracing-paper-cloth-printing',
    category: 'xerox',
    title: 'Tracing Paper & Tracing Cloth Printing',
    teluguTitle: 'ట్రేసింగ్ పేపర్ & ట్రేసింగ్ క్లాత్ ప్రింటింగ్',
    badge: 'Architectural Grade',
    tagline: 'Translucent drafting paper and heavy-duty archival tracing cloth',
    description: 'Specialized drafting medium printing required for government submissions, municipal approvals, and archive-grade historical drawings. We print directly onto imported translucent tracing paper (90–110 GSM) and heavy tracing cloth.',
    features: [
      'High-translucency imported gateway tracing paper',
      'Heavy-duty architectural drafting cloth for permanent records',
      'Tear-resistant & heat-stable toner adhesion',
      'Accepted by municipal authorities & town planning offices'
    ],
    turnaround: '30 - 60 Minutes',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80',
    popular: false
  },
  {
    id: 'large-format-scanning',
    category: 'xerox',
    title: 'Large Format Document & Map Scanning',
    teluguTitle: 'లార్జ్ సైజ్ మ్యాప్ & డాక్యుమెంట్ స్కానింగ్',
    badge: 'Digital Archiving',
    tagline: 'High-resolution digital archiving for blueprints, cloth & oversized sheets',
    description: 'Protect irreplaceable blueprints, old land records, and historical village maps. Our wide-format optical scanners convert large physical documents up to A0 width into crisp, high-resolution PDF, TIFF, or JPEG files.',
    features: [
      'High optical resolution up to 600 DPI true color',
      'Scan to PDF, TIFF, or high-res JPEG',
      'Safe roll-feed handling for aged & fragile blueprints',
      'Direct transfer to Pen Drive, Email, or WhatsApp'
    ],
    turnaround: 'Instant While You Wait',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80',
    popular: false
  },

  // ==========================================
  // PILLAR 2: FLEX PRINTING & SIGN BOARDS
  // ==========================================
  {
    id: 'star-flex',
    category: 'flex',
    title: 'Star Flex Banner Printing',
    teluguTitle: 'స్టార్ ఫ్లెక్స్ బ్యానర్ ప్రింటింగ్',
    badge: 'Best Seller',
    tagline: 'High-gloss premium finish with vibrant, sun-resistant colors',
    description: 'Our flagship outdoor advertising medium. Engineered with heavy GSM substrate to deliver eye-popping CMYK fidelity that stays vibrant even under Kadapa’s intense summer heat. Perfect for shop fronts, political events, and grand wedding arches.',
    features: [
      'Heavy GSM thick tear-resistant fabric',
      'High-gloss coating for richer contrast',
      'UV-protected Japanese eco-solvent inks',
      'Available in any dimension (up to 100+ feet)'
    ],
    turnaround: 'Same Day Dispatch (2 - 4 Hours)',
    image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=800&q=80',
    popular: true
  },
  {
    id: 'acrylic-3d-letters',
    category: 'flex',
    title: '3D Acrylic LED Letter Boards',
    teluguTitle: '3D అక్రిలిక్ ఎల్ఈడీ బోర్డ్స్',
    badge: 'Luxury Storefronts',
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
    category: 'flex',
    title: 'LED Glow Sign Boards & Backlit Flex',
    teluguTitle: 'ఎల్ఈడీ గ్లో సైన్ బోర్డులు & బ్యాక్‌లిట్ ఫ్లెక్స్',
    badge: 'Retail Standard',
    tagline: 'Heavy-gauge steel light boxes with uniform edge-to-edge glow',
    description: 'The classic high-visibility sign board trusted by pharmacies, grocery stores, restaurants, and retail showrooms across Kadapa. Built with anti-rust treated iron frames and backlit flex or polycarbonate face.',
    features: [
      'Anti-corrosion powder coated iron framework',
      'High-lumen waterproof LED internal arrays',
      'Uniform light distribution without dark spots',
      'Complete on-site mounting across Kadapa'
    ],
    turnaround: '2 - 3 Days',
    image: 'https://images.unsplash.com/photo-1508739773434-c26b3d09e071?auto=format&fit=crop&w=800&q=80',
    popular: true
  },
  {
    id: 'hoardings-political-banners',
    category: 'flex',
    title: 'Hoardings & Promotional Banners',
    teluguTitle: 'హోర్డింగ్స్ & పొలిటికల్ ఫ్లెక్స్ బ్యానర్లు',
    badge: 'Mass Outdoor Reach',
    tagline: 'Grand roadside hoardings, political rally flexes & event arches',
    description: 'High-impact outdoor branding for grand inaugurations, political campaigns, festival celebrations, and commercial roadside hoardings across Kadapa district.',
    features: [
      'Heavy-duty welded MS iron square pipe frames',
      'Brass eyelets (రింగులు) & strong rope reinforcement',
      'Wind-resistant mesh & heavy frontlit flex options',
      'Rapid express printing for urgent rallies & events'
    ],
    turnaround: 'Express (2 - 4 Hours)',
    image: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=800&q=80',
    popular: true
  },

  // ==========================================
  // PILLAR 3: PERSONALISED GIFTING
  // ==========================================
  {
    id: 'customized-tshirts',
    category: 'gifts',
    title: 'Customized Photo T-Shirt Printing',
    teluguTitle: 'కస్టమ్ టీ-షర్ట్ ప్రింటింగ్',
    badge: 'Trendy Merch',
    tagline: 'High-definition DTF & sublimation photo printing on premium t-shirts',
    description: 'Personalized apparel for birthday squads, corporate teams, college reunions, promotional brand campaigns, and family celebrations. Non-cracking, stretch-resistant prints with vibrant color permanence.',
    features: [
      'Direct-to-Film (DTF) & Sublimation color technology',
      '100% breathable cotton & sports dry-fit polyester blends',
      'No minimum order quantity (single piece to bulk orders)',
      'Front, back, and sleeve custom printing options'
    ],
    turnaround: '1 - 2 Days (Bulk discounts available)',
    image: 'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=800&q=80',
    popular: true
  },
  {
    id: 'photo-cushions-pillows',
    category: 'gifts',
    title: 'Photo Cushion & Pillow Printing',
    teluguTitle: 'ఫోటో కుషన్ & పిల్లో ప్రింటింగ్',
    badge: 'Cozy Keepsakes',
    tagline: 'Plush velvet, satin, and magic reversible sequins photo cushions',
    description: 'Turn your favorite memories into huggable keepsakes. Perfect for birthdays, romantic anniversaries, and housewarming gifts. Stuffed with ultra-soft hypoallergenic fiber and washable printed covers.',
    features: [
      'Square (12x12", 16x16") & Romantic Heart-shaped cushions',
      'Magic color-changing reversible sequins option',
      'Fade-proof sublimation print that won’t peel on washing',
      'Concealed zipper for easy cushion insert cleaning'
    ],
    turnaround: 'Same Day / Next Day',
    image: 'https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?auto=format&fit=crop&w=800&q=80',
    popular: true
  },
  {
    id: 'photo-magic-mugs',
    category: 'gifts',
    title: 'Custom Photo Mugs & Magic Mugs',
    teluguTitle: 'కస్టమ్ ఫోటో మగ్స్ & మ్యాజిక్ మగ్స్',
    badge: 'Popular Gift',
    tagline: 'Glossy ceramic mugs and heat-activated color-changing surprise mugs',
    description: 'The all-time favorite personalized gift. Upload family photos, couple portraits, or corporate logos. Our Magic Mugs appear plain black when cold, and miraculously reveal your photo when hot coffee or tea is poured!',
    features: [
      'Microwave & dishwasher safe AAA-grade ceramic',
      'Magic heat-sensitive thermochromic coating',
      'High-gloss scratch-resistant ceramic glaze',
      'Supplied in individual protective gift box'
    ],
    turnaround: '1 - 2 Hours',
    image: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=800&q=80',
    popular: true
  },
  {
    id: 'custom-photo-frames',
    category: 'gifts',
    title: 'Personalized Photo Frames & Wall Art',
    teluguTitle: 'కస్టమ్ ఫోటో ఫ్రేమ్స్ & వాల్ ఆర్ట్',
    badge: 'Luxury Frames',
    tagline: 'Imported synthetic teak wood moldings with sparkle texture lamination',
    description: 'Transform mobile pictures into museum-grade family wall art. Framed with imported synthetic wooden moldings, moisture-barrier backings, and sparkle or velvet matte protective lamination.',
    features: [
      'Sizes ranging from 8x12" tabletop to 24x36" grand wall frames',
      'Sparkle crystal textured protective lamination',
      'Termite-proof & warp-free synthetic teak wood profiles',
      'Collage designing service with Telugu blessing text'
    ],
    turnaround: '24 - 48 Hours',
    image: 'https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&w=800&q=80',
    popular: true
  },

  // ==========================================
  // PILLAR 4: STICKERS & BRANDING BOARDS
  // ==========================================
  {
    id: 'sunboard-foam-board-printing',
    category: 'boards',
    title: 'Sunboard & PVC Foam Board Printing',
    teluguTitle: 'సన్‌బోర్డ్ & PVC ఫోమ్ బోర్డ్ ప్రింటింగ్',
    badge: 'Shop Branding',
    tagline: 'Rigid 3mm / 5mm sunboard mounted vinyl for indoor retail displays',
    description: 'The industry standard for clean, modern indoor commercial displays, menu boards, showroom wall graphics, exhibition stalls, and promotional display boards. Lightweight, rigid, and completely waterproof.',
    features: [
      'High-density 3mm and 5mm rigid PVC sunboard base',
      'High-definition vinyl print with matte/gloss lamination',
      'Smooth die-cut edges with double-sided mounting tape',
      'Ideal for clinic direction boards, menus & product stands'
    ],
    turnaround: 'Same Day / 24 Hours',
    image: 'https://images.unsplash.com/photo-1542744094-3a31f272c490?auto=format&fit=crop&w=800&q=80',
    popular: true
  },
  {
    id: 'vinyl-stickers-wall-graphics',
    category: 'boards',
    title: 'Vinyl Stickers & Product Labels',
    teluguTitle: 'వినైల్ స్టిక్కర్స్ & ప్రొడక్ట్ లేబుల్స్',
    badge: 'Packaging & Decals',
    tagline: 'Waterproof die-cut product labels, bottle stickers & wall graphics',
    description: 'Custom self-adhesive stickers for retail product packaging, sweet box labels, pickle bottles, glass jars, and promotional branding. Resistant to water, oil, and outdoor weather.',
    features: [
      'Self-adhesive waterproof vinyl with easy peel backing',
      'Custom contour kiss-cut or die-cut to any shape',
      'Available in Gloss, Matte, and Transparent Clear vinyl',
      'Vehicle branding stickers & commercial fleet decals'
    ],
    turnaround: '1 - 2 Days',
    image: 'https://images.unsplash.com/photo-1572945550744-570424749b95?auto=format&fit=crop&w=800&q=80',
    popular: true
  },
  {
    id: 'one-way-vision-glass-branding',
    category: 'boards',
    title: 'One-Way Vision Glass Film & Frosted Film',
    teluguTitle: 'వన్ వే విజన్ గ్లాస్ ఫిల్మ్ & ఫ్రాస్టెడ్ ఫిల్మ్',
    badge: 'Showroom Glass',
    tagline: 'Perforated window film that lets you see outside while advertising to the street',
    description: 'Transform showroom glass doors and doctor clinic partitions into high-visibility advertising space. From outside, people see your full-color advertisement; from inside, the glass remains completely transparent.',
    features: [
      'Micro-perforated 60/40 hole ratio for maximum daylight',
      'Reduces solar heat & harsh summer glare inside',
      'Frosted decorative vinyl for doctor chamber privacy',
      'Expert on-site bubble-free glass installation in Kadapa'
    ],
    turnaround: 'Same Day / 24 Hours',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80',
    popular: true
  }
];
