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
      id: 'vinyl-sticker',
      name: 'Vinyl Sticker & Frosted Sheet (వినైల్ స్టిక్కర్)',
      category: 'sticker',
      unitType: 'area',
      baseRatePerSqFt: 38,
      popular: true,
      description: 'Self-adhesive waterproof vinyl for shop boards, glass doors, walls & vehicle branding.',
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
      id: 'custom-mug',
      name: 'Custom Printed Mug (కస్టమ్ మగ్స్)',
      category: 'gift',
      unitType: 'quantity',
      ratePerPiece: 180,
      minQuantity: 1,
      bulkDiscounts: [
        { minQty: 5, rate: 160 },
        { minQty: 20, rate: 140 }
      ],
      description: 'High-gloss ceramic sublimation photo mug with gift packaging. Magic mugs also available.',
      finishingAllowed: ['magicMug']
    },
    {
      id: 'custom-photo-frame',
      name: 'Personalized Photo Frame (ఫోటో ఫ్రేమ్)',
      category: 'gift',
      unitType: 'fixed',
      fixedOptions: [
        { label: '8 x 12 inches (Table / Wall)', price: 350 },
        { label: '12 x 18 inches (Wall Frame)', price: 650 },
        { label: '16 x 24 inches (Grand Wall Portrait)', price: 1100 },
        { label: '20 x 30 inches (Luxury Big Frame)', price: 1750 }
      ],
      description: 'Synthetic wood frame + Sparkle/Matte lamination + unbreakable acrylic/glass.',
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
 * Generate a pre-formatted WhatsApp quote string
 */
export function formatWhatsAppQuote({
  productName,
  dimensions,
  quantity,
  sqFt,
  finishingNames,
  estimatedPrice,
  customerNotes
}) {
  const lines = [
    `*📋 NEW PRINTING ESTIMATE REQUEST - CITY GRAFIX*`,
    `----------------------------------------`,
    `*Product:* ${productName}`,
    dimensions ? `*Size:* ${dimensions}` : null,
    sqFt ? `*Total Area:* ${sqFt} sq. ft.` : null,
    quantity ? `*Quantity:* ${quantity}` : null,
    finishingNames && finishingNames.length > 0 ? `*Finishing/Addons:* ${finishingNames.join(', ')}` : null,
    `*Approx. Estimate:* ₹${estimatedPrice}`,
    customerNotes ? `*Customer Note:* ${customerNotes}` : null,
    `----------------------------------------`,
    `Hello City Grafix, I generated this estimate on your website and would like to confirm my order/discuss design! 🎨`
  ].filter(Boolean);

  return encodeURIComponent(lines.join('\n'));
}
