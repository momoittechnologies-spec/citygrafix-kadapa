// Structured Data and Menu Pricing for City Grafix Personalized Gifts Customizer
// Matches the official workshop rate card with exact online prices

export const GIFT_CATEGORIES = [
  { id: 'cups', name: 'Cups & Mugs', emoji: '☕', shortLabel: 'Mugs' },
  { id: 'tshirts', name: 'Photo T-Shirts', emoji: '👕', shortLabel: 'T-Shirts' },
  { id: 'frames', name: 'Photo Frames', emoji: '🖼️', shortLabel: 'Frames' },
  { id: 'pillows', name: 'Photo Pillows', emoji: '🛋️', shortLabel: 'Pillows' },
  { id: 'caps', name: 'Caps & Merch', emoji: '🧢', shortLabel: 'Caps' }
];

export const GIFT_PRODUCTS = {
  cups: {
    id: 'cups',
    title: 'Custom Photo Mugs & Magic Mugs',
    teluguTitle: 'కప్స్ & మగ్స్ ప్రింటింగ్',
    badge: 'Instant 1-Hour Printing',
    tagline: 'AAA Grade ceramic with vivid scratch-proof sublimation printing',
    description: 'The timeless personalized gift for birthdays, anniversaries, corporate swag, and coffee lovers. Upload any photo, couple portrait, or brand logo.',
    defaultVariant: 'plain',
    variants: [
      {
        id: 'plain',
        name: 'Plain Ceramic Cup',
        telugu: 'ప్లేన్ కప్ ప్రింటింగ్',
        price: 350,
        badge: 'Popular',
        desc: 'Sparkling high-gloss AAA white ceramic mug with full wrap photo print.'
      },
      {
        id: 'inner-colour',
        name: 'Inner Colour Cup',
        telugu: 'ఇన్నర్ కలర్ కప్',
        price: 450,
        badge: 'Vibrant Accent',
        desc: 'Richly colored interior & matching ergonomic handle with crisp white exterior photo wrap.'
      },
      {
        id: 'heart-handle',
        name: 'Heart Handle Cup',
        telugu: 'హార్ట్ హ్యాండిల్ కప్',
        price: 500,
        badge: 'Romance Special',
        desc: 'Sculpted romantic heart handle with bright white ceramic body. The ultimate couple keepsake.'
      },
      {
        id: 'magic',
        name: 'Magic Heat Reveal Cup',
        telugu: 'మ్యాజిక్ కప్ (హీట్ సెన్సిటివ్)',
        price: 550,
        badge: 'Surprise Effect',
        desc: 'Appears pitch black when cold. Pour hot tea/coffee and watch your photo miraculously reveal!'
      }
    ],
    innerColors: [
      { id: 'red', name: 'Crimson Red', hex: '#dc2626' },
      { id: 'blue', name: 'Royal Blue', hex: '#2563eb' },
      { id: 'black', name: 'Midnight Black', hex: '#1e293b' },
      { id: 'yellow', name: 'Canary Yellow', hex: '#eab308' },
      { id: 'green', name: 'Emerald Green', hex: '#16a34a' },
      { id: 'orange', name: 'Sunset Orange', hex: '#ea580c' }
    ]
  },

  tshirts: {
    id: 'tshirts',
    title: 'Personalized Photo T-Shirts (DTF & Sublimation)',
    teluguTitle: 'కస్టమ్ టీ-షర్ట్స్ ప్రింటింగ్',
    badge: 'Single Piece to Bulk Orders',
    tagline: 'High-definition wash-resistant printing on breathable combed fabrics',
    description: 'Custom t-shirts for birthdays, colleges, corporate staff, and family reunions. Choose between heavy vibrant DTF or ultra-breathable Sublimation.',
    printTypes: [
      {
        id: 'dtf',
        name: 'DTF Printing (Direct-to-Film)',
        telugu: 'DTF ప్రింట్',
        badge: 'Ultra-Vibrant & 100% Cotton / Blends',
        desc: 'Full-color stretchable transfer with zero color fading across 50+ machine washes.',
        collarPrice: 500,
        roundNeckPrice: 400
      },
      {
        id: 'sublimation',
        name: 'Sublimation Printing',
        telugu: 'సబ్లిమేషన్ ప్రింట్',
        badge: 'Lightweight & Sports Dry-Fit',
        desc: 'Infused directly into micro-poly fabric fibers for feather-soft, breathable feel.',
        collarPrice: 400,
        roundNeckPrice: 300
      }
    ],
    neckStyles: [
      { id: 'collar', name: 'Collar T-Shirt (Polo)', telugu: 'కాలర్ టీ-షర్ట్' },
      { id: 'round', name: 'Without Collar (Round Neck)', telugu: 'రౌండ్ నెక్ (కాలర్ లేకుండా)' }
    ],
    sizes: [
      { id: 'S', name: 'S (Chest 38")', extra: 0 },
      { id: 'M', name: 'M (Chest 40")', extra: 0 },
      { id: 'L', name: 'L (Chest 42")', extra: 0 },
      { id: 'XL', name: 'XL (Chest 44")', extra: 50, note: '+₹50 Extra' },
      { id: 'XXL', name: 'XXL (Chest 46")', extra: 50, note: '+₹50 Extra' }
    ],
    colors: [
      { id: 'black', name: 'Solid Black', hex: '#0f172a' },
      { id: 'white', name: 'Pure White', hex: '#f8fafc' },
      { id: 'navy', name: 'Navy Blue', hex: '#1e3a8a' },
      { id: 'red', name: 'Classic Red', hex: '#b91c1c' },
      { id: 'royal', name: 'Royal Blue', hex: '#1d4ed8' },
      { id: 'grey', name: 'Melange Grey', hex: '#64748b' }
    ],
    placements: [
      { id: 'front', name: 'Front Chest (A4 / 10×12")' },
      { id: 'back', name: 'Back Center (10×14")' },
      { id: 'pocket', name: 'Left Pocket Logo (4×4")' }
    ]
  },

  frames: {
    id: 'frames',
    title: 'Custom Photo Frames & LED Wall Art',
    teluguTitle: 'కస్టమ్ ఫోటో ఫ్రేమ్స్ & ఎల్ఈడీ ఆర్ట్',
    badge: 'Museum Grade Finish',
    tagline: 'Synthetic teak wood moldings, sparkle textured lamination & LED glow frames',
    description: 'Turn your cherished mobile clicks into gallery-worthy framed portraits. Waterproof sparkle lamination protects against dust and moisture.',
    defaultVariant: 'wall-8x12',
    variants: [
      {
        id: 'table-6x8',
        name: 'Desktop Table Stand Frame (6 × 8")',
        telugu: 'టేబుల్ స్టాండ్ ఫ్రేమ్ (6 × 8 అంగుళాలు)',
        price: 250,
        badge: 'Compact Desk Display',
        desc: 'Includes fold-out desktop easel stand and wall hook. Perfect for office desks and bedside tables.'
      },
      {
        id: 'wall-8x12',
        name: 'Classic A4 Wall Frame (8 × 12")',
        telugu: 'క్లాసిక్ వాల్ ఫ్రేమ్ (8 × 12 అంగుళాలు)',
        price: 350,
        badge: 'Most Popular',
        desc: 'Standard A4 size portrait frame. 1.5-inch sturdy synthetic wooden border with sparkle matte lamination.'
      },
      {
        id: 'collage-12x18',
        name: 'Family Collage Wall Frame (12 × 18")',
        telugu: 'ఫ్యామిలీ కోలాజ్ ఫ్రేమ్ (12 × 18 అంగుళాలు)',
        price: 650,
        badge: 'Multi-Photo Layout',
        desc: 'Spacious medium wall centerpiece. Ideal for displaying 4 to 8 family photos in one cohesive arrangement.'
      },
      {
        id: 'portrait-16x24',
        name: 'Grand Wall Portrait Frame (16 × 24")',
        telugu: 'గ్రాండ్ పోర్ట్రెయిట్ ఫ్రేమ్ (16 × 24 అంగుళాలు)',
        price: 1100,
        badge: 'Luxury Portrait',
        desc: 'Commanding living room portrait for weddings, parents’ anniversaries, and grand family celebrations.'
      },
      {
        id: 'led-12x18',
        name: 'Ambient LED Glow Backlit Frame (12 × 18")',
        telugu: 'ఎల్ఈడీ గ్లో బ్యాక్‌లిట్ ఫ్రేమ్ (12 × 18 అంగుళాలు)',
        price: 1250,
        badge: 'Night Glow Wonder',
        desc: 'Built-in warm LED backlighting with power adapter. Illuminates your favorite memory in ambient darkness!'
      }
    ],
    borderStyles: [
      { id: 'matte-black', name: 'Matte Jet Black', hex: '#09090b', borderClass: 'border-slate-900 bg-slate-950' },
      { id: 'teak-wood', name: 'Rich Teak Wood', hex: '#78350f', borderClass: 'border-amber-900 bg-amber-950' },
      { id: 'royal-gold', name: 'Royal Antique Gold', hex: '#b45309', borderClass: 'border-yellow-600 bg-amber-800' },
      { id: 'white', name: 'Minimal White', hex: '#f4f4f5', borderClass: 'border-slate-300 bg-slate-100' }
    ]
  },

  pillows: {
    id: 'pillows',
    title: 'Custom Photo Cushions & Pillows',
    teluguTitle: 'ఫోటో కుషన్ & పిల్లో ప్రింటింగ్',
    badge: 'Cozy Keepsakes',
    tagline: 'Heart or Square photo pillows stuffed with hypoallergenic micro-fiber',
    description: 'Soft, huggable photo pillows for birthdays, romantic anniversaries, and housewarming gifts. Stuffed with ultra-plush fiber and washable printed covers.',
    defaultVariant: 'normal',
    shapes: [
      { id: 'heart', name: 'Romantic Heart Shape', telugu: 'హార్ట్ షేప్' },
      { id: 'square', name: 'Classic Square (14 × 14")', telugu: 'స్క్వేర్ షేప్' }
    ],
    variants: [
      {
        id: 'normal',
        name: 'Heart or Square Pillow',
        telugu: 'నార్మల్ పిల్లో',
        price: 450,
        badge: 'Classic Plush',
        desc: 'Silky smooth satin/velvet fabric with edge-to-edge vibrant photo print.'
      },
      {
        id: 'fancy',
        name: 'Heart or Square Fancy Pillow',
        telugu: 'ఫ్యాన్సీ పిల్లో',
        price: 600,
        badge: 'Luxury Fur Border',
        desc: 'Plush fluffy fur border surrounding your vibrant high-definition center photo.'
      },
      {
        id: 'magic',
        name: 'Heart or Square Magic Pillow',
        telugu: 'మ్యాజిక్ సీక్విన్స్ పిల్లో',
        price: 800,
        badge: 'Reversible Sequins',
        desc: 'Dual-sided reversible sequins. Brush your hand across to reveal or conceal the hidden photo!'
      },
      {
        id: 'led',
        name: 'Heart or Square L.E.D Pillow',
        telugu: 'ఎల్ఈడీ గ్లో పిల్లో',
        price: 850,
        badge: 'Internal Fairy Lights',
        desc: 'Internal battery-operated multi-point LED glow lights that sparkle warmly through the plush pillow!'
      }
    ],
    colors: [
      { id: 'red', name: 'Romantic Red', hex: '#dc2626' },
      { id: 'pink', name: 'Rose Pink', hex: '#ec4899' },
      { id: 'gold', name: 'Champagne Gold', hex: '#d97706' },
      { id: 'blue', name: 'Royal Blue', hex: '#2563eb' },
      { id: 'silver', name: 'Metallic Silver', hex: '#94a3b8' }
    ]
  },

  caps: {
    id: 'caps',
    title: 'Custom Cap + Logo / Photo Print',
    teluguTitle: 'క్యాప్ + లోగో & ఫోటో ప్రింట్',
    badge: 'Fashion & Merch',
    tagline: 'High-profile structured caps with vibrant DTF heat transfer print',
    description: 'Custom branded caps for sports teams, corporate events, promotional rallies, and stylish personal gifts with adjustable snapback closure.',
    price: 300,
    colors: [
      { id: 'red-white', name: 'Red & White Trucker', hex: '#ef4444' },
      { id: 'black', name: 'Solid Black', hex: '#0f172a' },
      { id: 'navy', name: 'Navy Blue', hex: '#1e3a8a' },
      { id: 'white', name: 'Pure White', hex: '#ffffff' }
    ]
  }
};

/**
 * Format structured WhatsApp Order Message for the Customizer
 */
export function formatGiftWhatsAppOrder({
  category,
  productTitle,
  variantName,
  subOptions,
  customText,
  fontStyle,
  textColor,
  quantity,
  unitPrice,
  totalPrice,
  customerName,
  customerPhone,
  customerNotes,
  hasUploadedPhoto
}) {
  const lines = [
    `*🎁 NEW CUSTOM GIFT ORDER - CITY GRAFIX KADAPA*`,
    `----------------------------------------`,
    `*Category:* ${productTitle}`,
    `*Selected Model:* ${variantName}`,
    subOptions ? `*Specs / Options:* ${subOptions}` : null,
    customText ? `*Custom Inscription:* "${customText}"` : null,
    fontStyle ? `*Text Font / Color:* ${fontStyle} (${textColor})` : null,
    `*Photo Status:* ${hasUploadedPhoto ? '📸 Photo selected on web (sending original in this chat)' : '📸 Photo will be sent in this WhatsApp chat'}`,
    `----------------------------------------`,
    `*Unit Price:* ₹${unitPrice}/-`,
    `*Quantity:* ${quantity} piece${quantity > 1 ? 's' : ''}`,
    `*Total Order Amount:* ₹${totalPrice}/-`,
    `----------------------------------------`,
    customerName ? `*Customer Name:* ${customerName}` : null,
    customerPhone ? `*Contact Number:* ${customerPhone}` : null,
    customerNotes ? `*Special Instructions:* ${customerNotes}` : null,
    `----------------------------------------`,
    `Hello City Grafix, I configured this gift order on your website! Please verify my preview and reply with confirmation & UPI payment QR. 🙏`
  ].filter(Boolean);

  return encodeURIComponent(lines.join('\n'));
}
