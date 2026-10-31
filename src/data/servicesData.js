// Official 4-Pillar Services Catalog for City Grafix Kadapa
// Complete Printing, Designing, Advertising & Gifting Solutions

export const SERVICES_CATEGORIES = [
  { id: 'all', label: 'All Services' },
  { id: 'flex', label: 'Flex, Arches & Hoardings', badge: 'Outdoor' },
  { id: 'publicity', label: 'Auto Publicity & Offset', badge: 'Cards, Bills & Flyers' },
  { id: 'xerox', label: 'Jumbo Xerox & CAD Plans', badge: 'A0 - A4' },
  { id: 'gifts', label: 'Personalised Gifts', badge: 'Mugs, Tees & Frames' },
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
  // PILLAR 2: FLEX, ARCHES, HOARDINGS & SIGN BOARDS
  // ==========================================
  {
    id: 'arch-flex-printing',
    category: 'flex',
    title: 'Arch Flex Printing & Welcome Arches',
    teluguTitle: 'ఆర్చ్ ఫ్లెక్స్ ప్రింటింగ్ (స్వాగత తోరణాలు)',
    badge: 'Events & Weddings',
    tagline: 'Grand entrance welcome arches for weddings, temple fests & inaugurations',
    description: 'Custom fabricated grand entrance arch flexes for weddings, VIP welcome stages, political rallies, temple Brahmotsavams, and commercial showroom launches across Kadapa. Built with heavy MS iron frames and high-gloss Star Flex.',
    features: [
      'Custom grand arch spans: 20ft × 10ft, 30ft × 15ft, up to 50ft arches',
      'Heavy-duty welded MS iron arch framework & wooden beeding',
      'High-gloss Star Flex with vivid Telugu typography & floral motifs',
      'Complete on-site erection and night spotlighting available'
    ],
    turnaround: 'Same Day Express Dispatch',
    image: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=800&q=80',
    popular: true
  },
  {
    id: 'hoarding-flex-printing',
    category: 'flex',
    title: 'Hoarding Flex & Highway Billboards',
    teluguTitle: 'హోర్డింగ్ ఫ్లెక్స్ & హైవే బిల్ బోర్డ్స్',
    badge: 'Mass Outdoor Reach',
    tagline: 'Massive roadside hoardings & national highway advertising billboards',
    description: 'Dominate Kadapa skyline with colossal roadside hoardings. Heavy GSM frontlit and backlit flex materials built to withstand intense monsoon winds, dust storms, and extreme summer sun without tearing or fading.',
    features: [
      'High wind-resistant heavy GSM industrial outdoor flex',
      'Fade-resistant weatherproof eco-solvent inks for multi-month life',
      'Heavy brass eyelets (రింగులు) & high-tensile nylon rope ties',
      'High-speed roll-to-roll printing for urgent election & event campaigns'
    ],
    turnaround: '2 - 4 Hours Fast Dispatch',
    image: 'https://images.unsplash.com/photo-1568992687947-868a62a9f521?auto=format&fit=crop&w=800&q=80',
    popular: true
  },
  {
    id: 'led-glow-boards',
    category: 'flex',
    title: 'Lighting Board & LED Glow Sign Boards',
    teluguTitle: 'లైటింగ్ బోర్డులు & ఎల్ఈడీ గ్లో సైన్ బోర్డ్స్',
    badge: 'Day & Night Glow',
    tagline: 'Heavy-gauge steel light boxes with uniform edge-to-edge illumination',
    description: 'The classic high-visibility lighting board trusted by pharmacies, grocery stores, restaurants, and retail showrooms across Kadapa. Built with anti-rust treated iron frames, high-lumen waterproof LED arrays, and backlit flex.',
    features: [
      'Anti-corrosion powder coated iron framework & ACP sheet borders',
      'High-lumen waterproof IP67 LED internal arrays',
      'Uniform light distribution without dark spots or flickering',
      'Complete on-site mounting & electrical wiring across Kadapa'
    ],
    turnaround: '2 - 3 Days',
    image: 'https://images.unsplash.com/photo-1508739773434-c26b3d09e071?auto=format&fit=crop&w=800&q=80',
    popular: true
  },
  {
    id: 'star-flex',
    category: 'flex',
    title: 'Star Flex Banner Printing',
    teluguTitle: 'స్టార్ ఫ్లెక్స్ బ్యానర్ ప్రింటింగ్',
    badge: 'Best Seller',
    tagline: 'High-gloss premium finish with vibrant, sun-resistant colors',
    description: 'Our flagship outdoor advertising medium. Engineered with heavy GSM substrate to deliver eye-popping CMYK fidelity that stays vibrant even under Kadapa’s intense summer heat. Perfect for shop fronts, political events, and grand wedding flexes.',
    features: [
      'Heavy GSM thick tear-resistant fabric',
      'High-gloss coating for richer contrast',
      'UV-protected all-weather eco-solvent inks',
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

  // ==========================================
  // PILLAR 3: AUTO PUBLICITY, OFFSET & COMMERCIAL PRINTING
  // ==========================================
  {
    id: 'auto-publicity-branding',
    category: 'publicity',
    title: 'Auto Publicity & Mobile Rickshaw Advertising',
    teluguTitle: 'ఆటో పబ్లిసిటీ & వెహికల్ బ్రాండింగ్',
    badge: 'High Impact Publicity',
    tagline: 'Auto hood flex, passenger back panel advertising & mobile sound campaign vans',
    description: 'Take your message straight to every street, galli, and bus stand in Kadapa town and surrounding mandals. Auto publicity provides unstoppable mobile visibility for movie releases, school admissions, hospital camps, and store grand openings.',
    features: [
      'Auto-rickshaw front hood flex and rear passenger panel boards',
      'Sound vehicle publicity flex framing & megaphone mounting',
      'Tear-resistant, water-proof heavy vinyl & Star Flex banners',
      'Fleet branding packages for 5 to 50+ autos across Kadapa district'
    ],
    turnaround: 'Same Day / 24 Hours',
    image: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=800&q=80',
    popular: true
  },
  {
    id: 'pamphlets-flyers-printing',
    category: 'publicity',
    title: 'Pamphlets, Leaflets & Flyers Multi-Colour Printing',
    teluguTitle: 'పాంప్లెట్లు, కరపత్రాలు & ఫ్లైయర్స్',
    badge: 'Bulk Direct Marketing',
    tagline: 'High-speed multi-colour offset printing for newspaper inserts & door-to-door publicity',
    description: 'Reach thousands of households across Kadapa overnight. We print eye-catching promotional pamphlets and flyers on 70 GSM to 130 GSM art paper with sharp Telugu typography and brilliant color contrast.',
    features: [
      'A4, A5, and 1/8th Demy sheet dimensions in single / multi-color',
      'Single side or double side full-color offset printing',
      'Bulk wholesale pricing from 1,000 to 50,000+ copies',
      'Ideal for coaching centers, supermarkets, medical camps & festive offers'
    ],
    turnaround: '24 - 48 Hours',
    image: 'https://images.unsplash.com/photo-1586075010923-2dd4570fb338?auto=format&fit=crop&w=800&q=80',
    popular: true
  },
  {
    id: 'bill-books-invoices',
    category: 'publicity',
    title: 'Custom Bill Books, Invoices & Receipt Pads',
    teluguTitle: 'బిల్ బుక్స్, రసీదు పుస్తకాలు & క్యాష్ మెమోలు',
    badge: 'Business Stationery',
    tagline: 'Numbered duplicate & triplicate carbonless (NCR) business invoice books',
    description: 'Essential business stationery custom designed with your shop name, logo, GSTIN, UPI payment QR, and terms. Printed on premium carbonless copy paper so you never have to deal with messy carbon paper.',
    features: [
      '1+1 (Duplicate) and 1+2 (Triplicate) carbonless NCR paper',
      'Sequential red machine numbering & clean perforated tear-lines',
      'Heavy hardboard binding with wraparound protective flap',
      'Single color (Blue/Red/Black) or premium multi-color headers'
    ],
    turnaround: '2 - 3 Days',
    image: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=800&q=80',
    popular: true
  },
  {
    id: 'visiting-cards-commercial',
    category: 'publicity',
    title: 'Visiting Cards & Corporate Business Cards',
    teluguTitle: 'విజిటింగ్ కార్డ్స్ (1000 Pcs హోల్‌సేల్ ప్యాక్)',
    badge: '1000 Pcs Wholesale Pack',
    tagline: '350 GSM imported cardstock with velvet matte, gloss & spot UV coatings',
    description: 'Make a commanding first impression with premium business cards. Printed on heavy 350 GSM art cardstock on high-precision commercial offset presses with smooth edge trimming.',
    features: [
      'Standard 1000 cards commercial offset package at wholesale rates',
      'Velvety Soft-Touch Matte, High-Gloss, and Raised Spot UV finishes',
      'Single side or double side full-color HD offset reproduction',
      'Rounded corner die-cutting options for executive presentation'
    ],
    turnaround: '2 - 3 Days',
    image: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=800&q=80',
    popular: true
  },

  // ==========================================
  // PILLAR 3: PERSONALISED GIFTING
  // ==========================================
  {
    id: 'photo-magic-mugs',
    category: 'gifts',
    title: 'Custom Photo Mugs & Magic Mugs',
    teluguTitle: 'కస్టమ్ ఫోటో మగ్స్ & మ్యాజిక్ మగ్స్',
    badge: 'From ₹350 | 1-Hour Dispatch',
    tagline: 'Plain (₹350), Inner Colour (₹450), Heart Handle (₹500) & Magic Heat-Reveal (₹550)',
    description: 'The all-time favorite personalized gift. Upload family photos, couple portraits, or corporate logos. Choose between crisp Plain White, colorful Inner Rim accents, sculpted Heart handles, or heat-activated Magic reveal mugs!',
    features: [
      'Plain Ceramic Cup: ₹350/- | Inner Colour Cup: ₹450/-',
      'Heart Handle Couple Cup: ₹500/- | Magic Heat Reveal Cup: ₹550/-',
      'Microwave & dishwasher safe AAA-grade ceramic',
      'High-gloss scratch-resistant sublimation print with individual gift box'
    ],
    turnaround: '1 - 2 Hours',
    image: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=800&q=80',
    popular: true
  },
  {
    id: 'customized-tshirts',
    category: 'gifts',
    title: 'Customized Photo T-Shirt Printing',
    teluguTitle: 'కస్టమ్ టీ-షర్ట్ ప్రింటింగ్ (DTF & సబ్లిమేషన్)',
    badge: 'From ₹300 | Single to Bulk',
    tagline: 'DTF Printing (Collar ₹500 / Round ₹400) & Sublimation (Collar ₹400 / Round ₹300)',
    description: 'Personalized apparel for birthday squads, corporate teams, college reunions, promotional brand campaigns, and family celebrations. Full-color stretchable prints that never fade across washes.',
    features: [
      'DTF Print: Collar ₹500/- | Round Neck ₹400/- (XL/XXL +₹50)',
      'Sublimation Print: Collar ₹400/- | Round Neck ₹300/- (XL/XXL +₹50)',
      'Sizes S, M, L, XL, XXL in 100% Cotton & Sports Dry-Fit Polyester',
      'Front, back, and left chest pocket print placement options'
    ],
    turnaround: '1 - 2 Days',
    image: 'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=800&q=80',
    popular: true
  },
  {
    id: 'custom-photo-frames',
    category: 'gifts',
    title: 'Personalized Photo Frames & LED Wall Art',
    teluguTitle: 'కస్టమ్ ఫోటో ఫ్రేమ్స్ & ఎల్ఈడీ ఆర్ట్',
    badge: 'From ₹250 | Luxury Moldings',
    tagline: 'Desktop 6x8 (₹250), Wall 8x12 (₹350), Collage (₹650) & LED Glow Frame (₹1250)',
    description: 'Transform mobile pictures into museum-grade family wall art. Framed with imported synthetic wooden moldings, moisture-barrier backings, and sparkle or velvet matte protective lamination.',
    features: [
      'Desktop Stand Frame (6x8"): ₹250/- | Classic Wall Frame (8x12"): ₹350/-',
      'Family Collage Frame (12x18"): ₹650/- | Grand Portrait (16x24"): ₹1,100/-',
      'Ambient LED Glow Backlit Frame (12x18"): ₹1,250/- with warm night lights',
      'Termite-proof & warp-free teak wood, black, and antique gold borders'
    ],
    turnaround: '24 - 48 Hours',
    image: 'https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&w=800&q=80',
    popular: true
  },
  {
    id: 'photo-cushions-pillows',
    category: 'gifts',
    title: 'Photo Cushion & Pillow Printing',
    teluguTitle: 'ఫోటో కుషన్ & పిల్లో ప్రింటింగ్',
    badge: 'From ₹450 | Heart & Square',
    tagline: 'Standard (₹450), Fancy Fur (₹600), Magic Sequins (₹800) & LED Glow (₹850)',
    description: 'Turn your favorite memories into huggable keepsakes. Perfect for birthdays, romantic anniversaries, and housewarming gifts. Stuffed with ultra-soft hypoallergenic fiber and washable printed covers.',
    features: [
      'Heart or Square Normal Pillow: ₹450/- | Fancy Fur Border Pillow: ₹600/-',
      'Heart or Square Magic Sequins Pillow: ₹800/- (swipe to reveal)',
      'Heart or Square L.E.D Pillow: ₹850/- with built-in internal warm lights',
      'Ultra-soft hypoallergenic micro-fiber fill with concealed zipper'
    ],
    turnaround: 'Same Day / Next Day',
    image: 'https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?auto=format&fit=crop&w=800&q=80',
    popular: true
  },
  {
    id: 'custom-caps-merch',
    category: 'gifts',
    title: 'Custom Cap + Logo & Photo Print',
    teluguTitle: 'క్యాప్ + లోగో & ఫోటో ప్రింట్',
    badge: '₹300 Fixed | Trendy Merch',
    tagline: 'High-profile structured caps with vibrant DTF heat transfer print',
    description: 'Custom branded caps for sports squads, college fests, corporate teams, and personal gifts. Durable structured crown with adjustable snapback closure.',
    features: [
      'Complete Cap + Print: ₹300/- all inclusive',
      'Red & White Trucker, Solid Black, Navy Blue, and Pure White',
      'High-definition DTF heat transfer print that resists sweat & sun',
      'No minimum order quantity (single piece to bulk event quantities)'
    ],
    turnaround: 'Same Day / 24 Hours',
    image: 'https://images.unsplash.com/photo-1588850561407-ed78c282e89b?auto=format&fit=crop&w=800&q=80',
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
