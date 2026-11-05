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
  PhoneCall,
  Palette,
  ZoomIn,
  Move,
  CheckCircle2,
  Smile
} from 'lucide-react';
import {
  GIFT_CATEGORIES,
  GIFT_PRODUCTS,
  formatGiftWhatsAppOrder
} from '../data/giftCustomizerData';
import RealProductMockup3D from './RealProductMockup3D';

// Curated Sample Photos for instant 1-click preview
const SAMPLE_PRESETS = [
  {
    id: 'couple',
    label: 'Couple',
    emoji: '💑',
    url: 'https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?auto=format&fit=crop&w=600&q=80',
    defaultText: 'Forever & Always ❤️'
  },
  {
    id: 'birthday',
    label: 'Birthday',
    emoji: '🎂',
    url: 'https://images.unsplash.com/photo-1513151233558-d860c5398176?auto=format&fit=crop&w=600&q=80',
    defaultText: 'Happy Birthday! 🎉'
  },
  {
    id: 'family',
    label: 'Family',
    emoji: '👨‍👩‍👧',
    url: 'https://images.unsplash.com/photo-1511895426328-dc8714191300?auto=format&fit=crop&w=600&q=80',
    defaultText: 'Sweet Memories ✨'
  },
  {
    id: 'brand',
    label: 'Logo/Store',
    emoji: '🏢',
    url: 'https://images.unsplash.com/photo-1572945550744-570424749b95?auto=format&fit=crop&w=600&q=80',
    defaultText: 'City Grafix Kadapa'
  }
];

export default function GiftsCustomizer({ preselectedCategory = 'cups' }) {
  const [activeCategory, setActiveCategory] = useState(preselectedCategory);
  
  // Customization States
  const [selectedVariantId, setSelectedVariantId] = useState('plain');
  const [uploadedImage, setUploadedImage] = useState(null);
  const [selectedPresetId, setSelectedPresetId] = useState('couple');
  const [customText, setCustomText] = useState('With Love ❤️');
  const [fontFamily, setFontFamily] = useState('italic font-serif');
  const [textColor, setTextColor] = useState('#ffffff');
  const [quantity, setQuantity] = useState(1);
  const [customerName, setCustomerName] = useState('');
  const [customerPhone, setCustomerPhone] = useState('');
  const [customerNotes, setCustomerNotes] = useState('');

  // 3D Image Fine-Tuning Controls
  const [imageZoom, setImageZoom] = useState(100);
  const [imagePositionY, setImagePositionY] = useState(0);

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
    setImageZoom(100);
    setImagePositionY(0);
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
        setSelectedPresetId(null);
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

    if (activeCategory === 'signage') {
      const variant = productConfig.variants?.find((v) => v.id === selectedVariantId) || productConfig.variants?.[0];
      price = (variant?.price || 180) * 12; // 12-inch standard letter sample
      variantName = `${variant?.name || '3D Letter'} (12" Sample)`;
      const col = productConfig.acrylicColors?.find((c) => c.id === selectedInnerColor);
      subOptions.push(`Acrylic Color: ${col?.name || 'Radiant Crimson'}`);
      subOptions.push('IP68 Samsung LED Modules Included');
    } else if (activeCategory === 'cups') {
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
      fontStyle:
        fontFamily === 'font-serif'
          ? 'Serif Elegant'
          : fontFamily === 'font-sans'
          ? 'Modern Sans'
          : fontFamily === 'italic font-serif'
          ? 'Romantic Calligraphy'
          : 'Bold Display',
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

  // Resolve current active image (either user uploaded or selected preset)
  const sampleDisplayImage = useMemo(() => {
    if (uploadedImage) return uploadedImage;
    const preset = SAMPLE_PRESETS.find((p) => p.id === selectedPresetId);
    return preset?.url || SAMPLE_PRESETS[0].url;
  }, [uploadedImage, selectedPresetId]);

  return (
    <section id="custom-gifts" className="py-20 sm:py-28 bg-stone-50 text-zinc-900 relative overflow-hidden border-b border-stone-200/80">
      {/* 3D Soft Lighting Mesh Accents */}
      <div className="absolute top-10 left-1/4 w-[500px] h-[350px] bg-rose-500/5 blur-[140px] rounded-full pointer-events-none" />
      <div className="absolute bottom-10 right-1/4 w-[500px] h-[350px] bg-sky-500/5 blur-[140px] rounded-full pointer-events-none" />

      <div className="w-full max-w-[1720px] mx-auto px-4 sm:px-8 lg:px-10 xl:px-12 2xl:px-16 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-4xl 2xl:max-w-5xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-rose-50 border border-rose-200 text-rose-700 text-xs font-bold uppercase tracking-wider mb-3.5 shadow-2xs">
            <Sparkles className="w-3.5 h-3.5 text-rose-600" />
            <span>Interactive 3D Gifting Atelier</span>
          </div>
          <h2 className="font-outfit text-3xl sm:text-5xl font-extrabold text-zinc-950 tracking-tight mb-3">
            Customize & Order{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-600 via-rose-700 to-amber-600">
              Personalized Gifts
            </span>
          </h2>
          <p className="font-anek text-lg sm:text-xl font-bold text-rose-700 mb-3">
            కస్టమైజ్డ్ ఫోటో మగ్స్, టీ-షర్ట్స్, కుషన్స్ మరియు ఫ్రేమ్స్
          </p>
          <p className="font-sans text-zinc-600 text-xs sm:text-base leading-relaxed max-w-2xl mx-auto font-medium">
            Personalize photo mugs, DTF t-shirts, synthetic wood frames, plush cushions, and caps with your own pictures and names. Preview live on realistic 3D mockups with dynamic angles, calculate exact workshop prices, and submit your order directly to our WhatsApp!
          </p>

          {/* Kadapa Workshop Rate Guarantee */}
          <div className="mt-4 inline-flex items-center gap-2 px-4 py-1.5 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-bold shadow-sm">
            <ShieldCheck className="w-4 h-4 text-emerald-600" />
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
                    ? 'bg-gradient-to-r from-rose-600 to-red-600 text-white shadow-xl shadow-rose-600/25 scale-105 border border-rose-400/40'
                    : 'bg-white hover:bg-slate-50 text-slate-700 hover:text-slate-900 border border-slate-200/90 shadow-sm'
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
          {/* LEFT: PHOTOREALISTIC 3D LIGHT MOCKUP CANVAS & CONTROLS */}
          {/* ========================================================= */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            <div className="bg-white/95 border border-slate-200/90 rounded-3xl p-6 sm:p-7 shadow-[0_20px_50px_-10px_rgba(0,0,0,0.06)] relative overflow-hidden backdrop-blur-xl">
              
              {/* Product Badge Pill */}
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <span className="px-3 py-1 rounded-full text-[10px] sm:text-xs font-black uppercase tracking-wider bg-rose-50 text-rose-700 border border-rose-200">
                    Live 3D View
                  </span>
                  <span className="text-[11px] font-bold text-slate-500 hidden sm:inline">
                    {productConfig.teluguTitle}
                  </span>
                </div>
                
                <span className="text-xs text-slate-400 font-bold flex items-center gap-1">
                  <Smile className="w-3.5 h-3.5 text-amber-500" />
                  <span>Interactive Studio</span>
                </span>
              </div>

              {/* Photorealistic 3D Mockup Component with Angles & Parallax */}
              <RealProductMockup3D
                activeCategory={activeCategory}
                productConfig={productConfig}
                selectedVariantId={selectedVariantId}
                selectedInnerColor={selectedInnerColor}
                isMagicHot={isMagicHot}
                setIsMagicHot={setIsMagicHot}
                tshirtPrintType={tshirtPrintType}
                tshirtNeckStyle={tshirtNeckStyle}
                tshirtSize={tshirtSize}
                tshirtColor={tshirtColor}
                tshirtPlacement={tshirtPlacement}
                frameBorder={frameBorder}
                isFrameLedOn={isFrameLedOn}
                setIsFrameLedOn={setIsFrameLedOn}
                pillowShape={pillowShape}
                pillowColor={pillowColor}
                isPillowLedOn={isPillowLedOn}
                setIsPillowLedOn={setIsPillowLedOn}
                isPillowSequinsRevealed={isPillowSequinsRevealed}
                setIsPillowSequinsRevealed={setIsPillowSequinsRevealed}
                capColor={capColor}
                sampleDisplayImage={sampleDisplayImage}
                customText={customText}
                fontFamily={fontFamily}
                textColor={textColor}
                unitPrice={unitPrice}
                imageZoom={imageZoom}
                imagePositionY={imagePositionY}
              />

              {/* Interactive Image Fine-Tuning Tools (Zoom & Position) */}
              <div className="mt-5 p-3.5 rounded-2xl bg-slate-50 border border-slate-200/90 space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-black uppercase tracking-wider text-slate-600 flex items-center gap-1.5">
                    <ZoomIn className="w-3.5 h-3.5 text-sky-600" />
                    <span>Photo Scaling & Placement</span>
                  </span>
                  <span className="text-xs font-black text-sky-700">{imageZoom}%</span>
                </div>

                <div className="flex items-center gap-3">
                  <input
                    type="range"
                    min="75"
                    max="150"
                    value={imageZoom}
                    onChange={(e) => setImageZoom(Number(e.target.value))}
                    className="w-full accent-rose-600 cursor-pointer h-1.5 bg-slate-200 rounded-lg"
                  />
                  <div className="flex items-center gap-1 shrink-0">
                    <button
                      type="button"
                      onClick={() => setImagePositionY((y) => Math.max(-25, y - 5))}
                      className="p-1 rounded-lg bg-white border border-slate-200 hover:bg-slate-100 text-slate-700 text-[10px] font-bold shadow-2xs"
                      title="Nudge Photo Up"
                    >
                      ▲ Up
                    </button>
                    <button
                      type="button"
                      onClick={() => setImagePositionY(0)}
                      className="p-1 rounded-lg bg-white border border-slate-200 hover:bg-slate-100 text-slate-700 text-[10px] font-bold shadow-2xs"
                      title="Center Photo"
                    >
                      Center
                    </button>
                    <button
                      type="button"
                      onClick={() => setImagePositionY((y) => Math.min(25, y + 5))}
                      className="p-1 rounded-lg bg-white border border-slate-200 hover:bg-slate-100 text-slate-700 text-[10px] font-bold shadow-2xs"
                      title="Nudge Photo Down"
                    >
                      ▼ Down
                    </button>
                  </div>
                </div>
              </div>

              {/* Instant 1-Click Sample Photo Presets (Try Before Uploading) */}
              <div className="mt-4 pt-3 border-t border-slate-100">
                <span className="text-[10px] font-black uppercase tracking-wider text-slate-500 block mb-2">
                  Try with Sample Pictures:
                </span>
                <div className="grid grid-cols-4 gap-2">
                  {SAMPLE_PRESETS.map((preset) => {
                    const isSelected = !uploadedImage && selectedPresetId === preset.id;
                    return (
                      <button
                        key={preset.id}
                        type="button"
                        onClick={() => {
                          setUploadedImage(null);
                          setSelectedPresetId(preset.id);
                          setCustomText(preset.defaultText);
                        }}
                        className={`p-1.5 rounded-xl border text-center transition-all ${
                          isSelected
                            ? 'bg-rose-50 border-rose-500 shadow-sm'
                            : 'bg-white border-slate-200 hover:bg-slate-50'
                        }`}
                      >
                        <span className="text-sm block">{preset.emoji}</span>
                        <span className="text-[10px] font-bold text-slate-700 block truncate">
                          {preset.label}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Photo Upload Action Box */}
              <div className="mt-4 pt-3 border-t border-slate-100 flex flex-col gap-2.5">
                <input
                  ref={fileInputRef}
                  type="file"
                  accept="image/*"
                  onChange={handleImageUpload}
                  className="hidden"
                />

                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={() => fileInputRef.current?.click()}
                    className="flex-1 py-3 px-4 rounded-2xl bg-gradient-to-r from-sky-600 to-blue-600 hover:from-sky-700 hover:to-blue-700 text-white text-xs sm:text-sm font-black flex items-center justify-center gap-2 shadow-lg shadow-sky-600/25 active:scale-95 transition-all"
                  >
                    <Upload className="w-4 h-4" />
                    <span>{uploadedImage ? 'Replace with Another Photo' : 'Upload Your Photo / Logo'}</span>
                  </button>

                  {uploadedImage && (
                    <button
                      type="button"
                      onClick={() => setUploadedImage(null)}
                      className="py-3 px-3.5 rounded-2xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold transition-all border border-slate-200"
                      title="Reset to sample"
                    >
                      <RotateCcw className="w-4 h-4" />
                    </button>
                  )}
                </div>

                <p className="text-[11px] text-slate-500 text-center font-medium">
                  {uploadedImage
                    ? '✅ Custom photo loaded! Original high-res picture will be confirmed on WhatsApp.'
                    : '📸 Pick any photo from your phone or PC to see instant realistic preview!'}
                </p>
              </div>

              {/* Customer Happiness Standards Bar */}
              <div className="mt-5 pt-4 border-t border-slate-200/90 grid grid-cols-2 gap-2 text-[10px] font-semibold text-slate-600">
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  <span>AAA High-Gloss Ceramic</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  <span>Fade-Proof Wash Quality</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  <span>Microwave Safe Coating</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  <span>WhatsApp Proof Approval</span>
                </div>
              </div>

            </div>
          </div>

          {/* ========================================================= */}
          {/* RIGHT: CUSTOMIZATION CONTROLS & WORKSHOP RATE OPTIONS */}
          {/* ========================================================= */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            
            {/* 1. Model / Variant Selector */}
            <div className="bg-white/95 border border-slate-200/90 rounded-3xl p-6 sm:p-7 shadow-[0_15px_35px_-5px_rgba(0,0,0,0.06)] backdrop-blur-xl">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-base sm:text-lg font-black text-slate-900 flex items-center gap-2">
                  <Tag className="w-4 h-4 text-rose-500" />
                  <span>Choose Product Model & Price</span>
                </h3>
                <span className="text-xs text-rose-600 font-bold bg-rose-50 px-2 py-0.5 rounded-full border border-rose-200">
                  Menu Rates
                </span>
              </div>

              {/* CUPS VARIANTS */}
              {activeCategory === 'cups' && (
                <div className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {productConfig.variants.map((variant) => {
                      const isSelected = selectedVariantId === variant.id;
                      return (
                        <div
                          key={variant.id}
                          onClick={() => setSelectedVariantId(variant.id)}
                          className={`p-4 rounded-2xl border transition-all cursor-pointer relative flex flex-col justify-between ${
                            isSelected
                              ? 'bg-rose-50/80 border-2 border-rose-500 shadow-md'
                              : 'bg-slate-50/70 border-slate-200 hover:border-slate-300 hover:bg-white'
                          }`}
                        >
                          <div className="flex items-start justify-between gap-2 mb-2">
                            <div>
                              <h4 className="font-extrabold text-sm text-slate-900">
                                {variant.name}
                              </h4>
                              <span className="text-[11px] font-bold text-rose-600 block">
                                {variant.telugu}
                              </span>
                            </div>
                            <span className="text-base font-black text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-lg border border-emerald-200">
                              ₹{variant.price}/-
                            </span>
                          </div>
                          <p className="text-[11px] text-slate-600 leading-snug font-medium">
                            {variant.desc}
                          </p>
                        </div>
                      );
                    })}
                  </div>

                  {selectedVariantId === 'inner-colour' && (
                    <div className="pt-2 border-t border-slate-100">
                      <label className="text-xs font-bold text-slate-700 block mb-2">
                        Select Mug Interior Glaze Color:
                      </label>
                      <div className="grid grid-cols-3 sm:grid-cols-6 gap-2">
                        {productConfig.innerColors?.map((c) => (
                          <button
                            key={c.id}
                            type="button"
                            onClick={() => setSelectedInnerColor(c.id)}
                            className={`py-2 px-1 rounded-xl border flex flex-col items-center gap-1 transition-all ${
                              selectedInnerColor === c.id
                                ? 'bg-white border-slate-900 ring-2 ring-rose-500 shadow-sm'
                                : 'bg-slate-50 border-slate-200 hover:bg-white'
                            }`}
                          >
                            <span
                              className="w-4 h-4 rounded-full border border-slate-300"
                              style={{ backgroundColor: c.hex }}
                            />
                            <span className="text-[9px] font-bold text-slate-700 truncate w-full text-center">
                              {c.name}
                            </span>
                          </button>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              )}

              {/* SIGNAGE VARIANTS (3D ACRYLIC LED LETTERS) */}
              {activeCategory === 'signage' && (
                <div className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    {productConfig.variants?.map((variant) => {
                      const isSelected = selectedVariantId === variant.id;
                      return (
                        <div
                          key={variant.id}
                          onClick={() => setSelectedVariantId(variant.id)}
                          className={`p-4 rounded-2xl border transition-all cursor-pointer relative flex flex-col justify-between ${
                            isSelected
                              ? 'bg-rose-50/80 border-2 border-rose-500 shadow-md'
                              : 'bg-slate-50/70 border-slate-200 hover:border-slate-300 hover:bg-white'
                          }`}
                        >
                          <div className="flex items-start justify-between gap-1 mb-2">
                            <div>
                              <h4 className="font-extrabold text-xs sm:text-sm text-slate-900">
                                {variant.name}
                              </h4>
                              <span className="text-[10px] font-bold text-rose-600 block">
                                {variant.telugu}
                              </span>
                            </div>
                            <span className="text-xs font-black text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-lg border border-emerald-200 shrink-0">
                              ₹{variant.price}/in
                            </span>
                          </div>
                          <p className="text-[10px] text-slate-600 leading-snug font-medium">
                            {variant.desc}
                          </p>
                        </div>
                      );
                    })}
                  </div>

                  <div className="pt-2 border-t border-slate-100">
                    <label className="text-xs font-bold text-slate-700 block mb-2">
                      Cast Acrylic Face Color:
                    </label>
                    <div className="flex flex-wrap gap-2">
                      {productConfig.acrylicColors?.map((c) => (
                        <button
                          key={c.id}
                          type="button"
                          onClick={() => setSelectedInnerColor(c.id)}
                          className={`flex items-center gap-2 px-3 py-1.5 rounded-xl border text-xs font-bold transition-all ${
                            selectedInnerColor === c.id
                              ? 'bg-slate-900 text-white border-slate-900 shadow-xs'
                              : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-white'
                          }`}
                        >
                          <span
                            className="w-3.5 h-3.5 rounded-full border border-black/20"
                            style={{ backgroundColor: c.hex }}
                          />
                          <span>{c.name}</span>
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* T-SHIRTS (DTF vs SUBLIMATION) */}
              {activeCategory === 'tshirts' && (
                <div className="space-y-4">
                  <div>
                    <label className="text-xs font-bold text-slate-700 block mb-2">
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
                                ? 'bg-rose-50/80 border-2 border-rose-500 shadow-sm'
                                : 'bg-slate-50/70 border-slate-200 hover:bg-white'
                            }`}
                          >
                            <div className="flex items-center justify-between mb-1">
                              <span className="text-sm font-extrabold text-slate-900">{pt.name}</span>
                              <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-slate-200 text-slate-700">
                                {pt.badge}
                              </span>
                            </div>
                            <p className="text-[11px] text-slate-600 font-medium">{pt.desc}</p>
                            <div className="mt-2 text-xs font-black text-emerald-700">
                              Collar: ₹{pt.collarPrice} | Round Neck: ₹{pt.roundNeckPrice}
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  <div>
                    <label className="text-xs font-bold text-slate-700 block mb-2">
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
                                ? 'bg-sky-600 border-sky-600 text-white shadow-md'
                                : 'bg-slate-50 border-slate-200 text-slate-700 hover:bg-white'
                            }`}
                          >
                            <span>{neck.name}</span>
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <label className="text-xs font-bold text-slate-700">
                        3. Size Selection:
                      </label>
                      <span className="text-[11px] text-amber-700 font-bold bg-amber-50 px-2 py-0.5 rounded border border-amber-200">
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
                                ? 'bg-emerald-600 border-emerald-600 text-white font-black shadow-sm'
                                : 'bg-slate-50 border-slate-200 text-slate-700 hover:bg-white'
                            }`}
                          >
                            <span className="text-xs font-black block">{s.id}</span>
                            <span className="text-[9px] text-slate-500 block">
                              {s.extra > 0 ? '+₹50' : 'Base'}
                            </span>
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  <div>
                    <label className="text-xs font-bold text-slate-700 block mb-2">
                      4. T-Shirt Color:
                    </label>
                    <div className="grid grid-cols-3 sm:grid-cols-6 gap-2">
                      {productConfig.colors.map((c) => (
                        <button
                          key={c.id}
                          type="button"
                          onClick={() => setTshirtColor(c.id)}
                          className={`py-2 px-1 rounded-xl border flex flex-col items-center gap-1 transition-all ${
                            tshirtColor === c.id
                              ? 'bg-white border-slate-900 ring-2 ring-rose-500 shadow-sm'
                              : 'bg-slate-50 border-slate-200'
                          }`}
                        >
                          <span
                            className="w-4 h-4 rounded-full border border-slate-300"
                            style={{ backgroundColor: c.hex }}
                          />
                          <span className="text-[9px] font-bold text-slate-700 truncate w-full text-center">
                            {c.name}
                          </span>
                        </button>
                      ))}
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
                              ? 'bg-rose-50/80 border-2 border-rose-500 shadow-md'
                              : 'bg-slate-50/70 border-slate-200 hover:bg-white'
                          }`}
                        >
                          <div className="flex items-start justify-between gap-1 mb-1.5">
                            <div>
                              <h4 className="font-extrabold text-xs sm:text-sm text-slate-900">
                                {variant.name}
                              </h4>
                              <span className="text-[10px] font-bold text-rose-600">
                                {variant.telugu}
                              </span>
                            </div>
                            <span className="text-sm sm:text-base font-black text-emerald-700 shrink-0 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                              ₹{variant.price}/-
                            </span>
                          </div>
                          <p className="text-[10px] text-slate-600 font-medium">{variant.desc}</p>
                        </div>
                      );
                    })}
                  </div>

                  <div className="pt-2">
                    <label className="text-xs font-bold text-slate-700 block mb-2">
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
                              ? 'bg-slate-900 border-slate-900 text-white font-black shadow'
                              : 'bg-slate-50 border-slate-200 text-slate-700 hover:bg-white'
                          }`}
                        >
                          <span
                            className="w-3.5 h-3.5 rounded-full border border-slate-300 shrink-0"
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
                  <div>
                    <label className="text-xs font-bold text-slate-700 block mb-2">
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
                              ? 'bg-rose-600 border-rose-600 text-white font-black shadow-md'
                              : 'bg-slate-50 border-slate-200 text-slate-700 hover:bg-white'
                          }`}
                        >
                          <span>{sh.name}</span>
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="text-xs font-bold text-slate-700 block mb-2">
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
                                ? 'bg-rose-50/80 border-2 border-rose-500 shadow-md'
                                : 'bg-slate-50/70 border-slate-200 hover:bg-white'
                            }`}
                          >
                            <div className="flex items-start justify-between gap-1 mb-1">
                              <h4 className="font-extrabold text-xs sm:text-sm text-slate-900">
                                {v.name}
                              </h4>
                              <span className="text-sm sm:text-base font-black text-emerald-700 shrink-0 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                                ₹{v.price}/-
                              </span>
                            </div>
                            <p className="text-[10px] text-slate-600 font-medium">{v.desc}</p>
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  <div>
                    <label className="text-xs font-bold text-slate-700 block mb-2">
                      3. Pillow Fabric Color:
                    </label>
                    <div className="grid grid-cols-3 sm:grid-cols-5 gap-2">
                      {productConfig.colors.map((c) => (
                        <button
                          key={c.id}
                          type="button"
                          onClick={() => setPillowColor(c.id)}
                          className={`py-2 px-1 rounded-xl border flex flex-col items-center gap-1 transition-all ${
                            pillowColor === c.id
                              ? 'bg-white border-slate-900 ring-2 ring-rose-500 shadow-sm'
                              : 'bg-slate-50 border-slate-200'
                          }`}
                        >
                          <span
                            className="w-4 h-4 rounded-full border border-slate-300"
                            style={{ backgroundColor: c.hex }}
                          />
                          <span className="text-[9px] font-bold text-slate-700 truncate w-full text-center">
                            {c.name}
                          </span>
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* CAPS */}
              {activeCategory === 'caps' && (
                <div className="space-y-3">
                  <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 flex items-center justify-between">
                    <div>
                      <h4 className="font-extrabold text-sm text-slate-900">{productConfig.title}</h4>
                      <p className="text-xs text-slate-600 font-medium">{productConfig.description}</p>
                    </div>
                    <span className="text-xl font-black text-emerald-700 bg-emerald-50 px-3 py-1 rounded-xl border border-emerald-200">
                      ₹{productConfig.price}/-
                    </span>
                  </div>

                  <div>
                    <label className="text-xs font-bold text-slate-700 block mb-2">
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
                              ? 'bg-slate-900 border-slate-900 text-white font-black'
                              : 'bg-slate-50 border-slate-200 text-slate-700 hover:bg-white'
                          }`}
                        >
                          <span
                            className="w-3.5 h-3.5 rounded-full border border-slate-300 shrink-0"
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
            <div className="bg-white/95 border border-slate-200/90 rounded-3xl p-6 sm:p-7 shadow-[0_15px_35px_-5px_rgba(0,0,0,0.06)] backdrop-blur-xl space-y-4">
              <h3 className="text-base font-black text-slate-900 flex items-center gap-2">
                <Type className="w-4 h-4 text-sky-600" />
                <span>Add Custom Name / Text Message</span>
              </h3>

              <div>
                <input
                  type="text"
                  value={customText}
                  onChange={(e) => setCustomText(e.target.value)}
                  placeholder="e.g. Happy Birthday Suresh / Best Mom / Royal Couple"
                  maxLength={50}
                  className="w-full bg-slate-50 border border-slate-300 rounded-2xl py-3 px-4 text-xs sm:text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-rose-500 focus:ring-1 focus:ring-rose-500 font-semibold focus:bg-white shadow-2xs"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-[11px] font-bold text-slate-600 block mb-1.5">
                    Font Typography Style:
                  </label>
                  <div className="grid grid-cols-3 gap-2">
                    <button
                      type="button"
                      onClick={() => setFontFamily('italic font-serif')}
                      className={`py-2 px-2 rounded-xl text-xs italic font-serif border transition-all ${
                        fontFamily === 'italic font-serif'
                          ? 'bg-rose-600 border-rose-600 text-white font-black shadow-sm'
                          : 'bg-slate-50 border-slate-200 text-slate-700 hover:bg-white'
                      }`}
                    >
                      Script Calligraphy
                    </button>
                    <button
                      type="button"
                      onClick={() => setFontFamily('font-sans font-black tracking-tight')}
                      className={`py-2 px-2 rounded-xl text-xs font-sans font-black border transition-all ${
                        fontFamily.includes('font-sans')
                          ? 'bg-rose-600 border-rose-600 text-white shadow-sm'
                          : 'bg-slate-50 border-slate-200 text-slate-700 hover:bg-white'
                      }`}
                    >
                      Modern Bold
                    </button>
                    <button
                      type="button"
                      onClick={() => setFontFamily('font-serif')}
                      className={`py-2 px-2 rounded-xl text-xs font-serif border transition-all ${
                        fontFamily === 'font-serif'
                          ? 'bg-rose-600 border-rose-600 text-white font-bold shadow-sm'
                          : 'bg-slate-50 border-slate-200 text-slate-700 hover:bg-white'
                      }`}
                    >
                      Classic Serif
                    </button>
                  </div>
                </div>

                <div>
                  <label className="text-[11px] font-bold text-slate-600 block mb-1.5">
                    Text Heat-Press Color:
                  </label>
                  <div className="flex items-center gap-2 pt-1">
                    {[
                      { name: 'Pure White', hex: '#ffffff' },
                      { name: 'Warm Gold', hex: '#facc15' },
                      { name: 'Ruby Red', hex: '#ef4444' },
                      { name: 'Jet Black', hex: '#09090b' },
                      { name: 'Sky Blue', hex: '#38bdf8' }
                    ].map((col) => (
                      <button
                        key={col.hex}
                        type="button"
                        onClick={() => setTextColor(col.hex)}
                        className={`w-8 h-8 rounded-full border-2 transition-transform shadow-sm ${
                          textColor === col.hex ? 'scale-115 border-slate-900 ring-2 ring-rose-500' : 'border-slate-300'
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
            <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-950 text-white rounded-3xl p-6 sm:p-7 shadow-2xl relative overflow-hidden border border-slate-700/80">
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

              {/* Customer Inputs */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 py-4 border-b border-slate-800">
                <div>
                  <input
                    type="text"
                    value={customerName}
                    onChange={(e) => setCustomerName(e.target.value)}
                    placeholder="Your Name (e.g. Ramesh Reddy)"
                    className="w-full bg-slate-950/80 border border-slate-700 rounded-xl py-2.5 px-3 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-emerald-500 font-medium"
                  />
                </div>
                <div>
                  <input
                    type="text"
                    value={customerNotes}
                    onChange={(e) => setCustomerNotes(e.target.value)}
                    placeholder="Special request (e.g. urgent delivery/gift box)"
                    className="w-full bg-slate-950/80 border border-slate-700 rounded-xl py-2.5 px-3 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-emerald-500 font-medium"
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
