// Pricing rates and configuration for City Grafix Kadapa Calculator
export const PRICING_CONFIG = {
  products: [
    {
      id: 'star-flex',
      name: 'Star Flex Banner (స్టార్ ఫ్లెక్స్)',
      category: 'flex',
      unitType: 'area', // width x height in sq.ft
      baseRatePerSqFt: 18,
      popular: true,
      description: 'Ultra high-gloss, thick GSM outdoor banner. Superior tear resistance & color pop.',
      minCharge: 100,
      finishingAllowed: ['eyelets', 'frame', 'woodBeeding']
    },
    {
      id: 'jumbo-xerox',
      name: 'Jumbo Xerox & CAD Plan (జంబో జిరాక్స్ A0-A3)',
      category: 'xerox',
      unitType: 'fixed',
      popular: true,
      fixedOptions: [
        { label: 'A0 Colour Plan / Map (841 × 1189 mm)', price: 220 },
        { label: 'A0 Black & White Xerox / Drawing', price: 90 },
        { label: 'A1 Colour Engineering Drawing (594 × 841 mm)', price: 140 },
        { label: 'A1 Black & White Architectural Plan', price: 60 },
        { label: 'A2 Colour Layout Plan (420 × 594 mm)', price: 90 },
        { label: 'A2 Black & White Plan', price: 40 },
        { label: 'A3 High-Speed Colour Xerox', price: 25 },
        { label: 'A0 Tracing Paper / Drafting Cloth Print', price: 320 },
        { label: 'Large Document Scanning to PDF (A0/A1)', price: 80 }
      ],
      description: 'A0-A4 colour & B/W jumbo photocopy, municipal layout maps, engineering blueprints & large document scanning.',
      finishingAllowed: []
    },
    {
      id: 'normal-flex',
      name: 'Normal Flex Banner (నార్మల్ ఫ్లెక్స్)',
      category: 'flex',
      unitType: 'area',
      baseRatePerSqFt: 12,
      popular: false,
      description: 'Cost-effective high-impact banner for short-term events, birthdays & local announcements.',
      minCharge: 70,
      finishingAllowed: ['eyelets', 'frame', 'woodBeeding']
    },
    {
      id: 'backlit-flex',
      name: 'Backlit Flex for Glow Boxes (బ్యాక్‌లిట్ ఫ్లెక్స్)',
      category: 'flex',
      unitType: 'area',
      baseRatePerSqFt: 35,
      popular: false,
      description: 'High light-translucent flex for backlit signboards and night-glow displays.',
      minCharge: 200,
      finishingAllowed: ['frame']
    },
    {
      id: 'sunboard-foam-board',
      name: 'Sunboard & PVC Foam Board (సన్‌బోర్డ్ ప్రింటింగ్)',
      category: 'board',
      unitType: 'area',
      baseRatePerSqFt: 65,
      popular: true,
      description: '3mm / 5mm rigid sunboard with waterproof high-resolution vinyl mount for showroom displays and wall branding.',
      minCharge: 150,
      finishingAllowed: ['lamination']
    },
    {
      id: 'vinyl-sticker',
      name: 'Vinyl Sticker & Product Labels (వినైల్ స్టిక్కర్)',
      category: 'sticker',
      unitType: 'area',
      baseRatePerSqFt: 38,
      popular: true,
      description: 'Self-adhesive waterproof vinyl for shop boards, product labels, walls & vehicle branding.',
      minCharge: 120,
      finishingAllowed: ['lamination', 'foamBoardMount']
    },
    {
      id: 'one-way-vision',
      name: 'One-Way Vision Glass Film (వన్ వే విజన్)',
      category: 'sticker',
      unitType: 'area',
      baseRatePerSqFt: 65,
      popular: false,
      description: 'Micro-perforated film for glass facades & car back glass. See-through from inside.',
      minCharge: 250,
      finishingAllowed: []
    },
    {
      id: 'led-glow-board',
      name: 'LED Glow Sign Board (Complete) (ఎల్ఈడీ గ్లో బోర్డ్)',
      category: 'board',
      unitType: 'area',
      baseRatePerSqFt: 220,
      popular: true,
      description: 'Heavy gauge steel box + high lumen waterproof LED modules + power supply + backlit print.',
      minCharge: 1200,
      finishingAllowed: []
    },
    {
      id: 'acrylic-3d-letters',
      name: '3D Acrylic LED Letters (3D అక్రిలిక్ లెటర్స్)',
      category: 'board',
      unitType: 'letters', // per letter height
      baseRatePerInchLetter: 45,
      popular: true,
      description: 'Premium laser-cut acrylic with Samsung/Osram LED modules for luxury store frontage.',
      minCharge: 1500,
      finishingAllowed: []
    },
    {
      id: 'custom-tshirt',
      name: 'Customized Photo T-Shirt (కస్టమ్ టీ-షర్ట్స్)',
      category: 'gift',
      unitType: 'fixed',
      popular: true,
      fixedOptions: [
        { label: 'Sublimation Round Neck (S, M, L)', price: 300 },
        { label: 'Sublimation Collar Polo (S, M, L)', price: 400 },
        { label: 'DTF Print Round Neck (S, M, L) - Ultra Washproof', price: 400 },
        { label: 'DTF Print Collar Polo (S, M, L) - Ultra Washproof', price: 500 },
        { label: 'Sublimation Round Neck (XL, XXL)', price: 350 },
        { label: 'Sublimation Collar Polo (XL, XXL)', price: 450 },
        { label: 'DTF Print Round Neck (XL, XXL)', price: 450 },
        { label: 'DTF Print Collar Polo (XL, XXL)', price: 550 },
        { label: 'Cap + Custom Photo / Logo Print', price: 300 }
      ],
      description: 'High-definition DTF / Sublimation photo printing on breathable fabrics. Single piece to bulk event quantities.',
      finishingAllowed: []
    },
    {
      id: 'photo-cushion-pillow',
      name: 'Photo Pillow & Cushion (కస్టమ్ కుషన్ పిల్లో)',
      category: 'gift',
      unitType: 'fixed',
      popular: true,
      fixedOptions: [
        { label: 'Heart or Square Standard Photo Pillow', price: 450 },
        { label: 'Heart or Square Fancy Fur Border Pillow', price: 600 },
        { label: 'Heart or Square Magic Reversible Sequins Pillow', price: 800 },
        { label: 'Heart or Square L.E.D Internal Glow Pillow', price: 850 }
      ],
      description: 'Heart or Square plush photo pillows with vibrant, washable color fidelity. Ideal for birthdays & anniversaries.',
      finishingAllowed: []
    },
    {
      id: 'custom-mug',
      name: 'Custom Printed Mug & Magic Cup (కస్టమ్ మగ్స్)',
      category: 'gift',
      unitType: 'fixed',
      popular: true,
      fixedOptions: [
        { label: 'Plain Ceramic Photo Cup (Sparkling White AAA)', price: 350 },
        { label: 'Inner Colour Cup (Red / Blue / Black / Yellow)', price: 450 },
        { label: 'Heart Handle Couple Cup (Romantic Keepsake)', price: 500 },
        { label: 'Magic Heat Reveal Cup (Appears Black, reveals on hot coffee)', price: 550 }
      ],
      description: 'High-gloss AAA ceramic sublimation photo mug with gift packaging. Ready in 1 hour.',
      finishingAllowed: []
    },
    {
      id: 'custom-photo-frame',
      name: 'Personalized Photo Frame & LED Art (ఫోటో ఫ్రేమ్)',
      category: 'gift',
      unitType: 'fixed',
      popular: true,
      fixedOptions: [
        { label: '6 x 8 inches Desktop Table Stand Frame', price: 250 },
        { label: '8 x 12 inches Classic A4 Wall Frame', price: 350 },
        { label: '12 x 18 inches Family Collage Wall Frame', price: 650 },
        { label: '16 x 24 inches Grand Portrait Wall Frame', price: 1100 },
        { label: '12 x 18 inches Ambient LED Glow Backlit Frame', price: 1250 }
      ],
      description: 'Synthetic wood frame + Sparkle/Matte lamination + unbreakable acrylic sheet & LED options.',
      finishingAllowed: []
    },
    {
      id: 'visiting-cards',
      name: 'Visiting Cards (విజిటింగ్ కార్డ్స్ - 1000 pcs)',
      category: 'offset',
      unitType: 'fixed',
      fixedOptions: [
        { label: 'Normal Matte (1000 Cards)', price: 750 },
        { label: '350 GSM Gloss Lamination (1000 Cards)', price: 950 },
        { label: 'Velvet Soft Touch + Spot UV (1000 Cards)', price: 1650 }
      ],
      description: 'High-quality 4-color offset printing on imported card stock with sharp finish.',
      finishingAllowed: []
    },
    {
      id: 'arch-flex',
      name: 'Arch Flex & Welcome Arches (ఆర్చ్ ఫ్లెక్స్)',
      category: 'flex',
      unitType: 'area',
      baseRatePerSqFt: 22,
      popular: true,
      description: 'Grand entrance welcome arch flex for weddings, showroom launches & temple fests with iron frame fabrication.',
      minCharge: 800,
      finishingAllowed: ['eyelets', 'frame', 'woodBeeding']
    },
    {
      id: 'hoarding-flex',
      name: 'Hoarding Flex (హోర్డింగ్ ఫ్లెక్స్ - Billboards)',
      category: 'flex',
      unitType: 'area',
      baseRatePerSqFt: 20,
      popular: true,
      description: 'Heavy GSM tear-resistant flex for large roadside hoardings and national highway billboards.',
      minCharge: 500,
      finishingAllowed: ['eyelets', 'frame']
    },
    {
      id: 'auto-publicity',
      name: 'Auto Publicity & Vehicle Branding (ఆటో పబ్లిసిటీ)',
      category: 'offset',
      unitType: 'fixed',
      popular: true,
      fixedOptions: [
        { label: 'Auto Rickshaw Hood Flex + Rear Board (Single Auto)', price: 450 },
        { label: 'Fleet Package: 5 Autos Complete Branding', price: 2100 },
        { label: 'Fleet Package: 10 Autos Mega Campaign', price: 3900 },
        { label: 'Sound Campaign Van / Sound Auto Flex Set', price: 1200 }
      ],
      description: 'High-mobility mobile advertising across Kadapa town & rural mandals on auto-rickshaws and campaign vehicles.',
      finishingAllowed: []
    },
    {
      id: 'pamphlets-flyers',
      name: 'Pamphlets & Flyers Multi-Colour (పాంప్లెట్లు)',
      category: 'offset',
      unitType: 'fixed',
      popular: true,
      fixedOptions: [
        { label: 'A5 Single Side Multi-Colour (1000 Copies)', price: 950 },
        { label: 'A5 Double Side Multi-Colour (1000 Copies)', price: 1650 },
        { label: 'A4 Single Side Multi-Colour (1000 Copies)', price: 1750 },
        { label: 'A4 Double Side Multi-Colour (1000 Copies)', price: 2950 },
        { label: 'Newspaper Insert Pamphlets (5000 Copies Bulk)', price: 3800 }
      ],
      description: 'Bulk high-speed multi-colour offset printing on art paper for newspaper distribution & door-to-door sales.',
      finishingAllowed: []
    },
    {
      id: 'bill-books',
      name: 'Bill Books & Invoices (బిల్ బుక్స్ & రసీదులు)',
      category: 'offset',
      unitType: 'fixed',
      popular: true,
      fixedOptions: [
        { label: 'Duplicate 1+1 Carbonless NCR (5 Books - 50 sets/book)', price: 850 },
        { label: 'Duplicate 1+1 Carbonless NCR (10 Books Wholesale)', price: 1550 },
        { label: 'Triplicate 1+2 Carbonless NCR (5 Books - 50 sets/book)', price: 1250 },
        { label: 'Triplicate 1+2 Carbonless NCR (10 Books Wholesale)', price: 2300 }
      ],
      description: 'Custom numbered duplicate & triplicate carbonless business invoice books with GSTIN and shop branding.',
      finishingAllowed: []
    }
  ],
  finishingOptions: {
    eyelets: {
      id: 'eyelets',
      name: 'Metal Eyelets / Rings (రింగులు వేయడం)',
      price: 20,
      description: 'Corner brass grommets for easy rope tying.'
    },
    woodBeeding: {
      id: 'woodBeeding',
      name: 'Wooden Beeding (కొయ్య బీడింగ్)',
      pricePerSqFt: 6,
      description: 'Sturdy wooden strip border for smooth flat display.'
    },
    frame: {
      id: 'frame',
      name: 'Iron Square Pipe Metal Frame (ఐరన్ ఫ్రేమ్)',
      pricePerSqFt: 35,
      description: 'Heavy duty welded MS square pipe frame, painted & rust resistant.'
    },
    lamination: {
      id: 'lamination',
      name: 'Protective Gloss/Matte Lamination (లామినేషన్)',
      pricePerSqFt: 10,
      description: 'Extra scratch & UV weather protection layer.'
    },
    foamBoardMount: {
      id: 'foamBoardMount',
      name: '3mm / 5mm Sunboard Mount (ఫోమ్ బోర్డ్)',
      pricePerSqFt: 45,
      description: 'Mounted onto rigid lightweight foam board for indoor displays.'
    },
    magicMug: {
      id: 'magicMug',
      name: 'Color Changing Magic Mug Upgrade (మ్యాజిక్ మగ్)',
      pricePerPiece: 90,
      description: 'Reveals photo only when hot liquid/tea/coffee is poured.'
    }
  }
};

/**
 * Generate a pre-formatted WhatsApp quote string without hardcoded prices
 */
export function formatWhatsAppQuote({
  productName,
  dimensions,
  quantity,
  sqFt,
  finishingNames,
  customerNotes
}) {
  const lines = [
    `*📋 NEW PRINTING INQUIRY - CITY GRAFIX KADAPA*`,
    `----------------------------------------`,
    `*Product:* ${productName}`,
    dimensions ? `*Size / Specs:* ${dimensions}` : null,
    sqFt ? `*Total Area:* ${sqFt} sq. ft.` : null,
    quantity ? `*Quantity:* ${quantity}` : null,
    finishingNames && finishingNames.length > 0 ? `*Finishing / Addons:* ${finishingNames.join(', ')}` : null,
    `*Design File:* Customer has ready-to-print design (CDR / PSD / PDF / JPG)`,
    customerNotes ? `*Customer Note:* ${customerNotes}` : null,
    `----------------------------------------`,
    `Hello City Grafix, please share your best wholesale rate and turnaround time for this specification! 🖨️`
  ].filter(Boolean);

  return encodeURIComponent(lines.join('\n'));
}
