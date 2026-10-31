import React, { useState, useMemo, useRef } from 'react';
import {
  Sparkles,
  Upload,
  Image as ImageIcon,
  Type,
  Check,
  MessageCircle,
  ShieldCheck,
  ChevronRight,
  RotateCcw,
  Sliders,
  Heart,
  Zap,
  Info,
  Layers,
  Flame,
  Lightbulb,
  Tag,
  PhoneCall
} from 'lucide-react';
import {
  GIFT_CATEGORIES,
  GIFT_PRODUCTS,
  formatGiftWhatsAppOrder
} from '../data/giftCustomizerData';

export default function GiftsCustomizer({ preselectedCategory = 'cups' }) {
  const [activeCategory, setActiveCategory] = useState(preselectedCategory);
  
  // Customization States
  const [selectedVariantId, setSelectedVariantId] = useState('plain');
  const [uploadedImage, setUploadedImage] = useState(null);
  const [customText, setCustomText] = useState('With Love ❤️');
  const [fontFamily, setFontFamily] = useState('font-serif');
  const [textColor, setTextColor] = useState('#ffffff');
  const [quantity, setQuantity] = useState(1);
  const [customerName, setCustomerName] = useState('');
  const [customerPhone, setCustomerPhone] = useState('');
  const [customerNotes, setCustomerNotes] = useState('');

  // Category-specific states
  // Cups
  const [selectedInnerColor, setSelectedInnerColor] = useState('red');
  const [isMagicHot, setIsMagicHot] = useState(true); // Toggle for Magic Cup preview

  // T-Shirts
  const [tshirtPrintType, setTshirtPrintType] = useState('dtf'); // 'dtf' | 'sublimation'
  const [tshirtNeckStyle, setTshirtNeckStyle] = useState('round'); // 'collar' | 'round'
  const [tshirtSize, setTshirtSize] = useState('L');
  const [tshirtColor, setTshirtColor] = useState('black');
  const [tshirtPlacement, setTshirtPlacement] = useState('front');

  // Frames
  const [frameBorder, setFrameBorder] = useState('matte-black');
  const [isFrameLedOn, setIsFrameLedOn] = useState(true);

  // Pillows
  const [pillowShape, setPillowShape] = useState('heart'); // 'heart' | 'square'
  const [pillowColor, setPillowColor] = useState('red');
  const [isPillowLedOn, setIsPillowLedOn] = useState(true);
  const [isPillowSequinsRevealed, setIsPillowSequinsRevealed] = useState(true);

  // Caps
  const [capColor, setCapColor] = useState('red-white');

  const fileInputRef = useRef(null);

  // Handle Category Change
  const handleCategorySwitch = (catId) => {
    setActiveCategory(catId);
    if (catId === 'cups') {
      setSelectedVariantId('plain');
    } else if (catId === 'frames') {
      setSelectedVariantId('wall-8x12');
    } else if (catId === 'pillows') {
      setSelectedVariantId('normal');
    }
  };

  // Image Upload Handler
  const handleImageUpload = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      if (file.size > 15 * 1024 * 1024) {
        alert('Please choose an image under 15MB');
        return;
      }
      const reader = new FileReader();
      reader.onload = (event) => {
        setUploadedImage(event.target.result);
      };
      reader.readAsDataURL(file);
    }
  };

  // Current Product Config
  const productConfig = GIFT_PRODUCTS[activeCategory] || GIFT_PRODUCTS.cups;

  // Real-Time Price Calculation based on Workshop Menu Card (Screenshot 2)
  const { unitPrice, subOptionsSummary, variantDisplayName } = useMemo(() => {
    let price = 0;
    let subOptions = [];
    let variantName = '';

    if (activeCategory === 'cups') {
      const variant = productConfig.variants.find((v) => v.id === selectedVariantId) || productConfig.variants[0];
      price = variant.price;
      variantName = variant.name;
      if (selectedVariantId === 'inner-colour') {
        const col = productConfig.innerColors.find((c) => c.id === selectedInnerColor);
        subOptions.push(`Inner Color: ${col?.name || selectedInnerColor}`);
      }
      if (selectedVariantId === 'magic') {
        subOptions.push('Thermochromic Heat-Reveal Ceramic');
      }
    } else if (activeCategory === 'tshirts') {
      const pType = productConfig.printTypes.find((p) => p.id === tshirtPrintType) || productConfig.printTypes[0];
      const base = tshirtNeckStyle === 'collar' ? pType.collarPrice : pType.roundNeckPrice;
      const sizeObj = productConfig.sizes.find((s) => s.id === tshirtSize);
      const extra = sizeObj ? sizeObj.extra : 0;
      price = base + extra;

      const neckName = tshirtNeckStyle === 'collar' ? 'Collar Polo' : 'Round Neck (Without Collar)';
      variantName = `${pType.name} - ${neckName}`;
      subOptions.push(`Size: ${tshirtSize} (${sizeObj?.name})`);
      if (extra > 0) subOptions.push(`Size Surcharge: +₹${extra}`);
      const col = productConfig.colors.find((c) => c.id === tshirtColor);
      subOptions.push(`T-Shirt Color: ${col?.name || tshirtColor}`);
      const place = productConfig.placements.find((p) => p.id === tshirtPlacement);
      subOptions.push(`Print Placement: ${place?.name || tshirtPlacement}`);
    } else if (activeCategory === 'frames') {
      const variant = productConfig.variants.find((v) => v.id === selectedVariantId) || productConfig.variants[0];
      price = variant.price;
      variantName = variant.name;
      const border = productConfig.borderStyles.find((b) => b.id === frameBorder);
      subOptions.push(`Border Style: ${border?.name || frameBorder}`);
    } else if (activeCategory === 'pillows') {
      const variant = productConfig.variants.find((v) => v.id === selectedVariantId) || productConfig.variants[0];
      price = variant.price;
      const shape = productConfig.shapes.find((s) => s.id === pillowShape);
      variantName = `${shape?.name || 'Heart/Square'} - ${variant.name}`;
      const col = productConfig.colors.find((c) => c.id === pillowColor);
      subOptions.push(`Fabric Color: ${col?.name || pillowColor}`);
    } else if (activeCategory === 'caps') {
      price = productConfig.price;
      variantName = productConfig.title;
      const col = productConfig.colors.find((c) => c.id === capColor);
      subOptions.push(`Cap Style: ${col?.name || capColor}`);
    }

    return {
      unitPrice: price,
      subOptionsSummary: subOptions.join(' | '),
      variantDisplayName: variantName
    };
  }, [
    activeCategory,
    productConfig,
    selectedVariantId,
    selectedInnerColor,
    tshirtPrintType,
    tshirtNeckStyle,
    tshirtSize,
    tshirtColor,
    tshirtPlacement,
    frameBorder,
    pillowShape,
    pillowColor,
    capColor
  ]);

  const totalPrice = unitPrice * Math.max(1, quantity);

  // Send Order to WhatsApp
  const handleSendOrderWhatsApp = () => {
    const encoded = formatGiftWhatsAppOrder({
      category: activeCategory,
      productTitle: productConfig.title,
      variantName: variantDisplayName,
      subOptions: subOptionsSummary,
      customText: customText.trim() || null,
      fontStyle: fontFamily === 'font-serif' ? 'Serif Elegant' : fontFamily === 'font-sans' ? 'Modern Sans' : 'Script Signature',
      textColor,
      quantity,
      unitPrice,
      totalPrice,
      customerName: customerName.trim() || null,
      customerPhone: customerPhone.trim() || null,
      customerNotes: customerNotes.trim() || null,
      hasUploadedPhoto: !!uploadedImage
    });

    const targetUrl = `https://wa.me/917287867584?text=${encoded}`;
    window.open(targetUrl, '_blank', 'noopener,noreferrer');
  };

  // Fallback demo sample image when user hasn't uploaded yet
  const sampleDisplayImage = uploadedImage || 'https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?auto=format&fit=crop&w=600&q=80';

  return (
    <section id="custom-gifts" className="py-20 sm:py-28 bg-gradient-to-b from-slate-900 via-slate-950 to-slate-900 text-white relative overflow-hidden">
      {/* Background Decorative Mesh */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(225,29,72,0.15),rgba(255,255,255,0))]" />
      <div className="absolute -top-32 -left-32 w-96 h-96 rounded-full bg-rose-600/10 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-32 -right-32 w-96 h-96 rounded-full bg-sky-600/10 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-rose-500/10 border border-rose-500/30 text-rose-400 text-xs font-black uppercase tracking-wider mb-4 shadow-sm backdrop-blur-md">
            <Sparkles className="w-3.5 h-3.5 text-rose-400" />
            <span>Interactive Custom Gifting Studio</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight mb-4">
            Customize & Order{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-400 via-amber-300 to-sky-400">
              Personalized Gifts
            </span>
          </h2>
          <p className="text-slate-300 text-xs sm:text-base leading-relaxed font-medium">
            Personalize photo mugs, DTF t-shirts, synthetic wood frames, plush cushions, and caps with your own pictures and names. Preview live, calculate exact workshop prices, and submit your order directly to our WhatsApp!
          </p>

          {/* Kadapa Workshop Rate Guarantee */}
          <div className="mt-4 inline-flex items-center gap-2 px-4 py-1.5 rounded-xl bg-slate-800/80 border border-slate-700/80 text-emerald-400 text-xs font-bold shadow-inner">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            <span>Official Kadapa Workshop Direct Prices (No Third-Party Margins)</span>
          </div>
        </div>

        {/* 1. Category Switcher Tabs */}
        <div className="flex items-center justify-start sm:justify-center gap-2 sm:gap-3 overflow-x-auto pb-4 mb-10 scrollbar-none px-2 max-w-full">
          {GIFT_CATEGORIES.map((cat) => {
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => handleCategorySwitch(cat.id)}
                className={`flex items-center gap-2 py-3 px-4 sm:px-6 rounded-2xl text-xs sm:text-sm font-extrabold whitespace-nowrap transition-all duration-300 active:scale-95 ${
                  isActive
                    ? 'bg-gradient-to-r from-rose-600 to-red-600 text-white shadow-xl shadow-rose-600/30 scale-105 border border-rose-400/30'
                    : 'bg-slate-800/70 hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-700/70'
                }`}
              >
                <span className="text-base sm:text-lg">{cat.emoji}</span>
                <span>{cat.name}</span>
              </button>
            );
          })}
        </div>

        {/* 2. Main Studio Grid: Mockup Canvas (Left) + Customizer Options (Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* ========================================================= */}
          {/* LEFT: INTERACTIVE LIVE MOCKUP PREVIEW CANVAS */}
          {/* ========================================================= */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            <div className="bg-slate-900/90 border border-slate-800 rounded-3xl p-6 sm:p-8 shadow-2xl relative overflow-hidden backdrop-blur-xl">
              
              {/* Product Badge Pill */}
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-2">
                  <span className="px-3 py-1 rounded-full text-[10px] sm:text-xs font-black uppercase tracking-wider bg-rose-500/20 text-rose-300 border border-rose-500/30">
                    Live Mockup Preview
                  </span>
                  <span className="text-[11px] font-semibold text-slate-400 hidden sm:inline">
                    {productConfig.teluguTitle}
                  </span>
                </div>
                
                {/* Instant Calculated Badge */}
                <div className="flex items-center gap-1.5 px-3 py-1 rounded-xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 font-black text-sm">
                  <span>₹{unitPrice}/-</span>
                </div>
              </div>

              {/* Mockup Canvas Container */}
              <div className="relative w-full aspect-square max-w-[360px] mx-auto bg-slate-950 rounded-2xl border border-slate-800 flex items-center justify-center p-6 overflow-hidden shadow-inner group">
                
                {/* Ambient glow backdrop */}
                <div className="absolute inset-0 bg-radial-gradient from-rose-500/10 via-transparent to-transparent opacity-80" />

                {/* ========================================= */}
                {/* 1. MUG MOCKUP VIEW */}
                {/* ========================================= */}
                {activeCategory === 'cups' && (
                  <div className="relative w-56 h-64 flex items-center justify-center transition-all duration-300">
                    {/* Ceramic Mug Body */}
                    <div
                      className="relative w-44 h-56 rounded-b-[40px] rounded-t-lg shadow-2xl overflow-hidden flex flex-col items-center justify-center border-t-8 border-slate-200"
                      style={{
                        backgroundColor: '#ffffff',
                        boxShadow: '0 20px 40px -10px rgba(0,0,0,0.6)'
                      }}
                    >
                      {/* Inner Rim Color Accent */}
                      {selectedVariantId === 'inner-colour' && (
                        <div
                          className="absolute top-0 left-0 right-0 h-4 border-b border-black/10 transition-colors"
                          style={{
                            backgroundColor:
                              productConfig.innerColors.find((c) => c.id === selectedInnerColor)?.hex || '#dc2626'
                          }}
                        />
                      )}

                      {/* Photo Wrap Zone */}
                      <div className="relative w-36 h-40 rounded-xl overflow-hidden border border-slate-200 shadow-sm flex items-center justify-center bg-slate-100">
                        {/* Magic Mug Cover Effect */}
                        {selectedVariantId === 'magic' && !isMagicHot ? (
                          <div className="absolute inset-0 bg-slate-950 flex flex-col items-center justify-center p-4 text-center z-20 transition-opacity">
                            <Flame className="w-6 h-6 text-slate-600 mb-1" />
                            <span className="text-[10px] font-bold text-slate-500 leading-tight">
                              Cold Cup (Black)
                              <br />
                              <strong className="text-amber-400">Pour hot drink to reveal!</strong>
                            </span>
                          </div>
                        ) : null}

                        <img
                          src={sampleDisplayImage}
                          alt="Custom Upload Preview"
                          className="w-full h-full object-cover"
                        />

                        {/* Custom Text Inscription Overlay */}
                        {customText.trim() && (
                          <div className="absolute bottom-2 inset-x-2 text-center z-10 drop-shadow-[0_2px_4px_rgba(0,0,0,0.9)]">
                            <span
                              className={`text-xs sm:text-sm font-black leading-tight block truncate ${fontFamily}`}
                              style={{ color: textColor }}
                            >
                              {customText}
                            </span>
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Ceramic Mug Handle */}
                    {selectedVariantId === 'heart-handle' ? (
                      /* Heart Shaped Handle */
                      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-12 h-20 rounded-r-3xl border-8 border-rose-500 -z-1 flex items-center justify-center shadow-lg transform rotate-6">
                        <Heart className="w-4 h-4 text-rose-500 fill-rose-500 absolute -right-2" />
                      </div>
                    ) : (
                      /* Standard Curved Handle */
                      <div
                        className="absolute right-1 top-1/2 -translate-y-1/2 w-12 h-24 rounded-r-full border-8 border-slate-200 -z-1 shadow-lg"
                        style={{
                          borderColor:
                            selectedVariantId === 'inner-colour'
                              ? productConfig.innerColors.find((c) => c.id === selectedInnerColor)?.hex || '#ffffff'
                              : '#ffffff'
                        }}
                      />
                    )}
                  </div>
                )}

                {/* ========================================= */}
                {/* 2. T-SHIRT MOCKUP VIEW */}
                {/* ========================================= */}
                {activeCategory === 'tshirts' && (
                  <div className="relative w-64 h-64 flex items-center justify-center">
                    {/* T-Shirt Silhouette Container */}
                    <div
                      className="relative w-56 h-60 rounded-3xl shadow-2xl flex flex-col items-center justify-start pt-6 border border-white/10 overflow-hidden transition-colors"
                      style={{
                        backgroundColor:
                          productConfig.colors.find((c) => c.id === tshirtColor)?.hex || '#0f172a'
                      }}
                    >
                      {/* Neck Style Simulation */}
                      {tshirtNeckStyle === 'collar' ? (
                        <div className="w-20 h-7 border-b-4 border-l-4 border-r-4 border-white/30 rounded-b-2xl bg-black/20 flex items-center justify-center">
                          <span className="text-[8px] uppercase tracking-widest text-white/60 font-black">POLO</span>
                        </div>
                      ) : (
                        <div className="w-16 h-5 rounded-b-full border-b-2 border-white/20 bg-black/20" />
                      )}

                      {/* Printable Front/Back Zone */}
                      <div className="relative mt-4 w-32 h-36 rounded-lg border-2 border-dashed border-white/20 flex flex-col items-center justify-center overflow-hidden bg-black/20 shadow-inner">
                        <img
                          src={sampleDisplayImage}
                          alt="T-Shirt Print Preview"
                          className="w-full h-full object-cover"
                        />
                        {customText.trim() && (
                          <div className="absolute bottom-1 inset-x-1 text-center bg-black/50 py-0.5 rounded backdrop-blur-sm">
                            <span
                              className={`text-[10px] font-black leading-none block truncate ${fontFamily}`}
                              style={{ color: textColor }}
                            >
                              {customText}
                            </span>
                          </div>
                        )}
                      </div>

                      {/* Small badge overlay */}
                      <div className="absolute top-2 right-2 text-[8px] font-extrabold px-1.5 py-0.5 rounded bg-white/20 text-white">
                        {tshirtSize}
                      </div>
                    </div>
                  </div>
                )}

                {/* ========================================= */}
                {/* 3. PHOTO FRAME MOCKUP VIEW */}
                {/* ========================================= */}
                {activeCategory === 'frames' && (
                  <div className="relative w-56 h-64 flex items-center justify-center">
                    {/* Ambient LED glow if enabled */}
                    {selectedVariantId === 'led-12x18' && isFrameLedOn && (
                      <div className="absolute -inset-4 rounded-3xl bg-amber-400/25 blur-xl pointer-events-none animate-pulse" />
                    )}

                    {/* Frame Molding Box */}
                    <div
                      className={`relative w-48 h-60 rounded-xl p-3 shadow-2xl flex flex-col items-center justify-center border-8 transition-colors ${
                        productConfig.borderStyles.find((b) => b.id === frameBorder)?.borderClass || 'border-slate-900 bg-slate-950'
                      }`}
                      style={{
                        borderColor:
                          productConfig.borderStyles.find((b) => b.id === frameBorder)?.hex || '#09090b'
                      }}
                    >
                      {/* Inner Sparkle/Glass Photo Mount */}
                      <div className="relative w-full h-full rounded bg-slate-900 overflow-hidden shadow-inner flex items-center justify-center">
                        <img
                          src={sampleDisplayImage}
                          alt="Photo Frame Preview"
                          className="w-full h-full object-cover"
                        />

                        {/* Sparkle Texture Indicator */}
                        <div className="absolute top-1 left-1 px-1 py-0.5 rounded bg-black/60 text-[8px] font-black text-amber-300">
                          ✨ Sparkle Laminated
                        </div>

                        {customText.trim() && (
                          <div className="absolute bottom-2 inset-x-2 text-center bg-black/60 py-1 rounded backdrop-blur-sm">
                            <span
                              className={`text-xs font-black block truncate ${fontFamily}`}
                              style={{ color: textColor }}
                            >
                              {customText}
                            </span>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                )}

                {/* ========================================= */}
                {/* 4. PILLOW / CUSHION MOCKUP VIEW */}
                {/* ========================================= */}
                {activeCategory === 'pillows' && (
                  <div className="relative w-64 h-64 flex items-center justify-center">
                    {/* LED Glow if active */}
                    {selectedVariantId === 'led' && isPillowLedOn && (
                      <div className="absolute -inset-3 rounded-full bg-rose-500/30 blur-2xl pointer-events-none animate-pulse" />
                    )}

                    {/* Shape: Heart vs Square */}
                    {pillowShape === 'heart' ? (
                      <div
                        className="relative w-52 h-48 flex items-center justify-center shadow-2xl transition-all"
                        style={{
                          filter: 'drop-shadow(0 15px 25px rgba(0,0,0,0.5))'
                        }}
                      >
                        <Heart
                          className="w-52 h-48 transition-colors"
                          style={{
                            color: productConfig.colors.find((c) => c.id === pillowColor)?.hex || '#dc2626',
                            fill: productConfig.colors.find((c) => c.id === pillowColor)?.hex || '#dc2626'
                          }}
                        />

                        {/* Photo inside heart center */}
                        <div className="absolute w-28 h-28 rounded-full overflow-hidden border-2 border-white/60 shadow-lg">
                          {selectedVariantId === 'magic' && !isPillowSequinsRevealed ? (
                            <div className="w-full h-full bg-amber-400 flex flex-col items-center justify-center p-2 text-center text-slate-900 font-bold text-[9px]">
                              <span>✨ Sequins Hidden</span>
                              <span className="text-[7px]">Brush to Reveal</span>
                            </div>
                          ) : (
                            <img
                              src={sampleDisplayImage}
                              alt="Heart Pillow Preview"
                              className="w-full h-full object-cover"
                            />
                          )}
                        </div>
                      </div>
                    ) : (
                      /* Square Pillow */
                      <div
                        className="relative w-52 h-52 rounded-3xl shadow-2xl p-4 flex items-center justify-center border-4 border-white/10"
                        style={{
                          backgroundColor:
                            productConfig.colors.find((c) => c.id === pillowColor)?.hex || '#dc2626'
                        }}
                      >
                        <div className="w-36 h-36 rounded-2xl overflow-hidden border-2 border-white/40 shadow-inner">
                          {selectedVariantId === 'magic' && !isPillowSequinsRevealed ? (
                            <div className="w-full h-full bg-amber-400 flex flex-col items-center justify-center p-2 text-center text-slate-900 font-bold text-[10px]">
                              <span>✨ Magic Sequins Covered</span>
                            </div>
                          ) : (
                            <img
                              src={sampleDisplayImage}
                              alt="Square Pillow Preview"
                              className="w-full h-full object-cover"
                            />
                          )}
                        </div>
                      </div>
                    )}
                  </div>
                )}

                {/* ========================================= */}
                {/* 5. CAP MOCKUP VIEW */}
                {/* ========================================= */}
                {activeCategory === 'caps' && (
                  <div className="relative w-64 h-60 flex flex-col items-center justify-center">
                    {/* Crown */}
                    <div
                      className="w-48 h-36 rounded-t-full shadow-2xl flex flex-col items-center justify-center relative border border-white/10"
                      style={{
                        backgroundColor:
                          productConfig.colors.find((c) => c.id === capColor)?.hex || '#ef4444'
                      }}
                    >
                      {/* Logo Print Zone */}
                      <div className="w-24 h-16 rounded border border-dashed border-white/30 flex items-center justify-center overflow-hidden bg-black/20">
                        <img
                          src={sampleDisplayImage}
                          alt="Cap Logo Preview"
                          className="w-full h-full object-contain"
                        />
                      </div>
                      {customText.trim() && (
                        <span className="text-[9px] font-black text-white mt-1 drop-shadow">
                          {customText}
                        </span>
                      )}
                    </div>
                    {/* Visor / Brim */}
                    <div className="w-56 h-10 rounded-b-full bg-slate-900 shadow-xl border-t border-slate-700" />
                  </div>
                )}
              </div>

              {/* Special Interactive Effect Toggles under Mockup */}
              <div className="mt-4 flex flex-wrap items-center justify-center gap-2">
                {activeCategory === 'cups' && selectedVariantId === 'magic' && (
                  <button
                    type="button"
                    onClick={() => setIsMagicHot(!isMagicHot)}
                    className={`py-1.5 px-3 rounded-xl text-xs font-bold flex items-center gap-1.5 transition-all ${
                      isMagicHot
                        ? 'bg-amber-500 text-slate-950 font-black'
                        : 'bg-slate-800 text-slate-300'
                    }`}
                  >
                    <Flame className="w-3.5 h-3.5" />
                    <span>{isMagicHot ? '🔥 Pouring Hot Coffee (Revealed)' : '❄️ Cold Cup (Hidden)'}</span>
                  </button>
                )}

                {activeCategory === 'frames' && selectedVariantId === 'led-12x18' && (
                  <button
                    type="button"
                    onClick={() => setIsFrameLedOn(!isFrameLedOn)}
                    className={`py-1.5 px-3 rounded-xl text-xs font-bold flex items-center gap-1.5 transition-all ${
                      isFrameLedOn
                        ? 'bg-amber-400 text-slate-950 font-black'
                        : 'bg-slate-800 text-slate-300'
                    }`}
                  >
                    <Lightbulb className="w-3.5 h-3.5" />
                    <span>{isFrameLedOn ? '💡 LED Lights ON' : '🌑 LED Lights OFF'}</span>
                  </button>
                )}

                {activeCategory === 'pillows' && selectedVariantId === 'magic' && (
                  <button
                    type="button"
                    onClick={() => setIsPillowSequinsRevealed(!isPillowSequinsRevealed)}
                    className="py-1.5 px-3 rounded-xl text-xs font-bold flex items-center gap-1.5 bg-amber-500 text-slate-950 font-black"
                  >
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>{isPillowSequinsRevealed ? '✨ Swipe to Hide Photo' : '✨ Swipe to Reveal Photo'}</span>
                  </button>
                )}

                {activeCategory === 'pillows' && selectedVariantId === 'led' && (
                  <button
                    type="button"
                    onClick={() => setIsPillowLedOn(!isPillowLedOn)}
                    className="py-1.5 px-3 rounded-xl text-xs font-bold flex items-center gap-1.5 bg-rose-500 text-white font-black"
                  >
                    <Lightbulb className="w-3.5 h-3.5" />
                    <span>{isPillowLedOn ? '💡 Cushion LED ON' : '🌑 Cushion LED OFF'}</span>
                  </button>
                )}
              </div>

              {/* Photo Upload Action Box */}
              <div className="mt-6 pt-5 border-t border-slate-800 flex flex-col gap-3">
                <input
                  ref={fileInputRef}
                  type="file"
                  accept="image/*"
                  onChange={handleImageUpload}
                  className="hidden"
                />

                <div className="flex items-center gap-3">
                  <button
                    type="button"
                    onClick={() => fileInputRef.current?.click()}
                    className="flex-1 py-3 px-4 rounded-2xl bg-gradient-to-r from-sky-600 to-blue-600 hover:from-sky-500 hover:to-blue-500 text-white text-xs sm:text-sm font-black flex items-center justify-center gap-2 shadow-lg shadow-sky-600/20 active:scale-95 transition-all"
                  >
                    <Upload className="w-4 h-4" />
                    <span>{uploadedImage ? 'Replace Photo' : 'Upload Your Photo / Logo'}</span>
                  </button>

                  {uploadedImage && (
                    <button
                      type="button"
                      onClick={() => setUploadedImage(null)}
                      className="py-3 px-3.5 rounded-2xl bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-bold transition-all"
                      title="Reset to sample"
                    >
                      <RotateCcw className="w-4 h-4" />
                    </button>
                  )}
                </div>

                <p className="text-[11px] text-slate-400 text-center font-medium">
                  {uploadedImage
                    ? '✅ Photo loaded! Original high-res picture will be confirmed on WhatsApp.'
                    : '📸 Pick any photo from your phone or PC to see how it looks!'}
                </p>
              </div>

            </div>
          </div>

          {/* ========================================================= */}
          {/* RIGHT: CUSTOMIZATION CONTROLS & WORKSHOP RATE OPTIONS */}
          {/* ========================================================= */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            
            {/* 1. Model / Variant Selector (Screenshot 2 exact prices) */}
            <div className="bg-slate-900/90 border border-slate-800 rounded-3xl p-6 sm:p-7 shadow-xl backdrop-blur-xl">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-base sm:text-lg font-black text-white flex items-center gap-2">
                  <Tag className="w-4 h-4 text-rose-400" />
                  <span>Choose Product Model & Price</span>
                </h3>
                <span className="text-xs text-rose-400 font-bold">Menu Prices</span>
              </div>

              {/* CUPS VARIANTS */}
              {activeCategory === 'cups' && (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {productConfig.variants.map((variant) => {
                    const isSelected = selectedVariantId === variant.id;
                    return (
                      <div
                        key={variant.id}
                        onClick={() => setSelectedVariantId(variant.id)}
                        className={`p-4 rounded-2xl border transition-all cursor-pointer relative flex flex-col justify-between ${
                          isSelected
                            ? 'bg-rose-500/15 border-rose-500 shadow-md shadow-rose-500/10'
                            : 'bg-slate-800/60 border-slate-700/80 hover:border-slate-600 hover:bg-slate-800'
                        }`}
                      >
                        <div className="flex items-start justify-between gap-2 mb-2">
                          <div>
                            <h4 className="font-extrabold text-sm text-white">
                              {variant.name}
                            </h4>
                            <span className="text-[11px] font-bold text-rose-400 block">
                              {variant.telugu}
                            </span>
                          </div>
                          <span className="text-base font-black text-emerald-400">
                            ₹{variant.price}/-
                          </span>
                        </div>
                        <p className="text-[11px] text-slate-300 leading-snug">
                          {variant.desc}
                        </p>
                      </div>
                    );
                  })}
                </div>
              )}

              {/* T-SHIRTS (DTF vs SUBLIMATION & COLLAR vs ROUND) */}
              {activeCategory === 'tshirts' && (
                <div className="space-y-4">
                  {/* Print Technology Toggle */}
                  <div>
                    <label className="text-xs font-bold text-slate-300 block mb-2">
                      1. Select Printing Technology:
                    </label>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {productConfig.printTypes.map((pt) => {
                        const isSelected = tshirtPrintType === pt.id;
                        return (
                          <div
                            key={pt.id}
                            onClick={() => setTshirtPrintType(pt.id)}
                            className={`p-3.5 rounded-2xl border cursor-pointer transition-all ${
                              isSelected
                                ? 'bg-rose-500/15 border-rose-500 shadow-sm'
                                : 'bg-slate-800/60 border-slate-700/80 hover:bg-slate-800'
                            }`}
                          >
                            <div className="flex items-center justify-between mb-1">
                              <span className="text-sm font-extrabold text-white">{pt.name}</span>
                              <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-slate-700 text-slate-200">
                                {pt.badge}
                              </span>
                            </div>
                            <p className="text-[11px] text-slate-300">{pt.desc}</p>
                            <div className="mt-2 text-xs font-black text-emerald-400">
                              Collar: ₹{pt.collarPrice} | Round Neck: ₹{pt.roundNeckPrice}
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  {/* Neck Style Toggle */}
                  <div>
                    <label className="text-xs font-bold text-slate-300 block mb-2">
                      2. Select T-Shirt Style:
                    </label>
                    <div className="grid grid-cols-2 gap-3">
                      {productConfig.neckStyles.map((neck) => {
                        const isSelected = tshirtNeckStyle === neck.id;
                        return (
                          <button
                            key={neck.id}
                            type="button"
                            onClick={() => setTshirtNeckStyle(neck.id)}
                            className={`py-2.5 px-3 rounded-xl text-xs font-extrabold border transition-all ${
                              isSelected
                                ? 'bg-sky-600 border-sky-400 text-white shadow-md'
                                : 'bg-slate-800/80 border-slate-700 text-slate-300 hover:bg-slate-800'
                            }`}
                          >
                            <span>{neck.name}</span>
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Size Selector with XL / XXL 50/- EXTRA rule */}
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <label className="text-xs font-bold text-slate-300">
                        3. Size Selection:
                      </label>
                      <span className="text-[11px] text-amber-400 font-bold">
                        XL & XXL are +₹50/- extra
                      </span>
                    </div>
                    <div className="grid grid-cols-5 gap-2">
                      {productConfig.sizes.map((s) => {
                        const isSelected = tshirtSize === s.id;
                        return (
                          <button
                            key={s.id}
                            type="button"
                            onClick={() => setTshirtSize(s.id)}
                            className={`py-2 px-1 rounded-xl text-center border transition-all ${
                              isSelected
                                ? 'bg-emerald-600 border-emerald-400 text-white font-black'
                                : 'bg-slate-800 border-slate-700 text-slate-300'
                            }`}
                          >
                            <span className="text-xs font-black block">{s.id}</span>
                            <span className="text-[9px] text-slate-400 block">
                              {s.extra > 0 ? '+₹50' : 'Base'}
                            </span>
                          </button>
                        );
                      })}
                    </div>
                  </div>
                </div>
              )}

              {/* FRAMES VARIANTS */}
              {activeCategory === 'frames' && (
                <div className="space-y-3">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {productConfig.variants.map((variant) => {
                      const isSelected = selectedVariantId === variant.id;
                      return (
                        <div
                          key={variant.id}
                          onClick={() => setSelectedVariantId(variant.id)}
                          className={`p-3.5 rounded-2xl border transition-all cursor-pointer flex flex-col justify-between ${
                            isSelected
                              ? 'bg-rose-500/15 border-rose-500 shadow-md'
                              : 'bg-slate-800/60 border-slate-700/80 hover:bg-slate-800'
                          }`}
                        >
                          <div className="flex items-start justify-between gap-1 mb-1.5">
                            <div>
                              <h4 className="font-extrabold text-xs sm:text-sm text-white">
                                {variant.name}
                              </h4>
                              <span className="text-[10px] font-bold text-rose-400">
                                {variant.telugu}
                              </span>
                            </div>
                            <span className="text-sm sm:text-base font-black text-emerald-400 shrink-0">
                              ₹{variant.price}/-
                            </span>
                          </div>
                          <p className="text-[10px] text-slate-300">{variant.desc}</p>
                        </div>
                      );
                    })}
                  </div>

                  {/* Frame Border Moldings */}
                  <div className="pt-2">
                    <label className="text-xs font-bold text-slate-300 block mb-2">
                      Frame Border Finish:
                    </label>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                      {productConfig.borderStyles.map((b) => (
                        <button
                          key={b.id}
                          type="button"
                          onClick={() => setFrameBorder(b.id)}
                          className={`py-2 px-2.5 rounded-xl text-xs font-bold border flex items-center gap-2 transition-all ${
                            frameBorder === b.id
                              ? 'bg-slate-800 border-amber-400 text-white font-black'
                              : 'bg-slate-900 border-slate-700 text-slate-400'
                          }`}
                        >
                          <span
                            className="w-3.5 h-3.5 rounded-full border border-white/20 shrink-0"
                            style={{ backgroundColor: b.hex }}
                          />
                          <span className="truncate">{b.name}</span>
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* PILLOWS VARIANTS */}
              {activeCategory === 'pillows' && (
                <div className="space-y-4">
                  {/* Shape Selector */}
                  <div>
                    <label className="text-xs font-bold text-slate-300 block mb-2">
                      1. Choose Pillow Shape:
                    </label>
                    <div className="grid grid-cols-2 gap-3">
                      {productConfig.shapes.map((sh) => (
                        <button
                          key={sh.id}
                          type="button"
                          onClick={() => setPillowShape(sh.id)}
                          className={`py-2.5 px-3 rounded-xl text-xs font-extrabold border transition-all ${
                            pillowShape === sh.id
                              ? 'bg-rose-600 border-rose-400 text-white font-black shadow-md'
                              : 'bg-slate-800 border-slate-700 text-slate-300'
                          }`}
                        >
                          <span>{sh.name}</span>
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Pillow Type (Normal, Fancy, Magic, LED) */}
                  <div>
                    <label className="text-xs font-bold text-slate-300 block mb-2">
                      2. Choose Pillow Model & Price:
                    </label>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {productConfig.variants.map((v) => {
                        const isSelected = selectedVariantId === v.id;
                        return (
                          <div
                            key={v.id}
                            onClick={() => setSelectedVariantId(v.id)}
                            className={`p-3.5 rounded-2xl border transition-all cursor-pointer flex flex-col justify-between ${
                              isSelected
                                ? 'bg-rose-500/15 border-rose-500 shadow-md'
                                : 'bg-slate-800/60 border-slate-700/80 hover:bg-slate-800'
                            }`}
                          >
                            <div className="flex items-start justify-between gap-1 mb-1">
                              <h4 className="font-extrabold text-xs sm:text-sm text-white">
                                {v.name}
                              </h4>
                              <span className="text-sm sm:text-base font-black text-emerald-400 shrink-0">
                                ₹{v.price}/-
                              </span>
                            </div>
                            <p className="text-[10px] text-slate-300">{v.desc}</p>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              )}

              {/* CAPS */}
              {activeCategory === 'caps' && (
                <div className="space-y-3">
                  <div className="p-4 rounded-2xl bg-slate-800/80 border border-slate-700 flex items-center justify-between">
                    <div>
                      <h4 className="font-extrabold text-sm text-white">{productConfig.title}</h4>
                      <p className="text-xs text-slate-300">{productConfig.description}</p>
                    </div>
                    <span className="text-xl font-black text-emerald-400">₹{productConfig.price}/-</span>
                  </div>

                  <div>
                    <label className="text-xs font-bold text-slate-300 block mb-2">
                      Select Cap Color:
                    </label>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                      {productConfig.colors.map((c) => (
                        <button
                          key={c.id}
                          type="button"
                          onClick={() => setCapColor(c.id)}
                          className={`py-2 px-2.5 rounded-xl text-xs font-bold border flex items-center gap-2 transition-all ${
                            capColor === c.id
                              ? 'bg-slate-800 border-sky-400 text-white font-black'
                              : 'bg-slate-900 border-slate-700 text-slate-400'
                          }`}
                        >
                          <span
                            className="w-3.5 h-3.5 rounded-full border border-white/20 shrink-0"
                            style={{ backgroundColor: c.hex }}
                          />
                          <span className="truncate">{c.name}</span>
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              )}

            </div>

            {/* 2. Custom Text & Typography Personalization */}
            <div className="bg-slate-900/90 border border-slate-800 rounded-3xl p-6 sm:p-7 shadow-xl backdrop-blur-xl space-y-4">
              <h3 className="text-base font-black text-white flex items-center gap-2">
                <Type className="w-4 h-4 text-sky-400" />
                <span>Add Custom Name / Text Message</span>
              </h3>

              <div>
                <input
                  type="text"
                  value={customText}
                  onChange={(e) => setCustomText(e.target.value)}
                  placeholder="e.g. Happy Birthday Suresh / Best Mom / Royal Couple"
                  maxLength={50}
                  className="w-full bg-slate-950 border border-slate-700 rounded-2xl py-3 px-4 text-xs sm:text-sm text-white placeholder-slate-500 focus:outline-none focus:border-rose-500 focus:ring-1 focus:ring-rose-500 font-semibold"
                />
              </div>

              {/* Font Style & Color Picker */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-[11px] font-bold text-slate-400 block mb-1.5">
                    Font Style:
                  </label>
                  <div className="grid grid-cols-3 gap-2">
                    <button
                      type="button"
                      onClick={() => setFontFamily('font-serif')}
                      className={`py-1.5 px-2 rounded-xl text-xs font-serif border ${
                        fontFamily === 'font-serif'
                          ? 'bg-rose-600 border-rose-400 text-white'
                          : 'bg-slate-800 border-slate-700 text-slate-300'
                      }`}
                    >
                      Serif
                    </button>
                    <button
                      type="button"
                      onClick={() => setFontFamily('font-sans')}
                      className={`py-1.5 px-2 rounded-xl text-xs font-sans font-bold border ${
                        fontFamily === 'font-sans'
                          ? 'bg-rose-600 border-rose-400 text-white'
                          : 'bg-slate-800 border-slate-700 text-slate-300'
                      }`}
                    >
                      Sans
                    </button>
                    <button
                      type="button"
                      onClick={() => setFontFamily('italic font-serif')}
                      className={`py-1.5 px-2 rounded-xl text-xs italic font-serif border ${
                        fontFamily === 'italic font-serif'
                          ? 'bg-rose-600 border-rose-400 text-white'
                          : 'bg-slate-800 border-slate-700 text-slate-300'
                      }`}
                    >
                      Script
                    </button>
                  </div>
                </div>

                <div>
                  <label className="text-[11px] font-bold text-slate-400 block mb-1.5">
                    Text Color:
                  </label>
                  <div className="flex items-center gap-2">
                    {[
                      { name: 'White', hex: '#ffffff' },
                      { name: 'Gold', hex: '#facc15' },
                      { name: 'Red', hex: '#ef4444' },
                      { name: 'Black', hex: '#09090b' },
                      { name: 'Blue', hex: '#38bdf8' }
                    ].map((col) => (
                      <button
                        key={col.hex}
                        type="button"
                        onClick={() => setTextColor(col.hex)}
                        className={`w-7 h-7 rounded-full border-2 transition-transform ${
                          textColor === col.hex ? 'scale-110 border-white ring-2 ring-rose-500' : 'border-slate-600'
                        }`}
                        style={{ backgroundColor: col.hex }}
                        title={col.name}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* 3. Quantity, Order Summary & Direct WhatsApp Submission */}
            <div className="bg-gradient-to-br from-slate-900 to-slate-950 border border-slate-800 rounded-3xl p-6 sm:p-7 shadow-2xl relative overflow-hidden">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-5 border-b border-slate-800">
                {/* Quantity Stepper */}
                <div className="flex items-center gap-3">
                  <span className="text-xs font-bold text-slate-300">Quantity:</span>
                  <div className="flex items-center bg-slate-950 border border-slate-700 rounded-xl overflow-hidden">
                    <button
                      type="button"
                      onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                      className="px-3 py-1.5 text-slate-300 hover:text-white hover:bg-slate-800 font-bold text-sm transition-colors"
                    >
                      -
                    </button>
                    <span className="px-3 py-1.5 text-xs font-black text-white min-w-[32px] text-center">
                      {quantity}
                    </span>
                    <button
                      type="button"
                      onClick={() => setQuantity((q) => q + 1)}
                      className="px-3 py-1.5 text-slate-300 hover:text-white hover:bg-slate-800 font-bold text-sm transition-colors"
                    >
                      +
                    </button>
                  </div>
                </div>

                {/* Live Total Badge */}
                <div className="text-right">
                  <span className="text-[11px] text-slate-400 block font-medium">
                    Total Order Value
                  </span>
                  <div className="flex items-baseline gap-1.5">
                    <span className="text-2xl sm:text-3xl font-black text-emerald-400">
                      ₹{totalPrice}/-
                    </span>
                    <span className="text-xs text-slate-400 font-semibold">
                      (₹{unitPrice} × {quantity})
                    </span>
                  </div>
                </div>
              </div>

              {/* Customer Inputs (Optional for WhatsApp auto-fill) */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 py-4 border-b border-slate-800">
                <div>
                  <input
                    type="text"
                    value={customerName}
                    onChange={(e) => setCustomerName(e.target.value)}
                    placeholder="Your Name (e.g. Ramesh Reddy)"
                    className="w-full bg-slate-950/80 border border-slate-800 rounded-xl py-2 px-3 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-emerald-500"
                  />
                </div>
                <div>
                  <input
                    type="text"
                    value={customerNotes}
                    onChange={(e) => setCustomerNotes(e.target.value)}
                    placeholder="Special request (e.g. urgent delivery/gift box)"
                    className="w-full bg-slate-950/80 border border-slate-800 rounded-xl py-2 px-3 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-emerald-500"
                  />
                </div>
              </div>

              {/* Order Workflow Reassurance Banner */}
              <div className="py-4 space-y-2 text-[11px] text-slate-300">
                <div className="flex items-start gap-2">
                  <span className="w-4 h-4 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center font-black shrink-0 text-[10px]">
                    1
                  </span>
                  <span>Click button below to send your custom specs directly to our WhatsApp.</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="w-4 h-4 rounded-full bg-sky-500/20 text-sky-400 flex items-center justify-center font-black shrink-0 text-[10px]">
                    2
                  </span>
                  <span>Attach your original high-resolution picture in the WhatsApp chat.</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="w-4 h-4 rounded-full bg-amber-500/20 text-amber-400 flex items-center justify-center font-black shrink-0 text-[10px]">
                    3
                  </span>
                  <span>Our team verifies print proof & shares payment QR. We print once you approve!</span>
                </div>
              </div>

              {/* PRIMARY CTA: Send Order to WhatsApp */}
              <button
                type="button"
                onClick={handleSendOrderWhatsApp}
                className="w-full py-4 px-6 rounded-2xl bg-gradient-to-r from-emerald-500 via-teal-600 to-emerald-600 hover:from-emerald-600 hover:to-teal-700 text-white font-black text-sm sm:text-base flex items-center justify-center gap-2.5 shadow-xl shadow-emerald-500/25 active:scale-98 transition-all hover:scale-[1.01]"
              >
                <MessageCircle className="w-5 h-5" />
                <span>Send Custom Order to WhatsApp (₹{totalPrice}/-)</span>
                <ChevronRight className="w-4 h-4" />
              </button>

              <div className="mt-3 text-center text-[10px] text-slate-400">
                Direct WhatsApp Order Line: <strong className="text-white">+91 72878 67584</strong> (Kadapa Central Workshop)
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
