import React, { useState, useMemo } from 'react';
import { Sliders, MessageCircle, Info, Sparkles, Check, Send, Layers, FileCheck, CheckCircle2 } from 'lucide-react';
import { PRICING_CONFIG, formatWhatsAppQuote } from '../data/pricingConfig';

export default function PriceCalculator() {
  const [selectedProductId, setSelectedProductId] = useState('star-flex');
  const [width, setWidth] = useState(6);
  const [height, setHeight] = useState(4);
  const [quantity, setQuantity] = useState(1);
  const [letterCount, setLetterCount] = useState(12);
  const [letterHeightInches, setLetterHeightInches] = useState(8);
  const [selectedFixedIndex, setSelectedFixedIndex] = useState(0);
  const [selectedFinishings, setSelectedFinishings] = useState({
    eyelets: true,
    woodBeeding: false,
    frame: false,
    lamination: false,
    foamBoardMount: false,
    magicMug: false
  });
  const [customerNote, setCustomerNote] = useState('');

  // Selected Product Definition
  const product = useMemo(() => {
    return PRICING_CONFIG.products.find(p => p.id === selectedProductId) || PRICING_CONFIG.products[0];
  }, [selectedProductId]);

  // Size Presets for Quick Selection
  const presets = [
    { label: '6 × 4 ft (Event Banner)', w: 6, h: 4 },
    { label: '8 × 3 ft (Shop Fascia)', w: 8, h: 3 },
    { label: '10 × 5 ft (Hoarding / Arch)', w: 10, h: 5 },
    { label: '12 × 8 ft (Backdrop)', w: 12, h: 8 },
    { label: '20 × 10 ft (Grand Stage)', w: 20, h: 10 },
  ];

  // Specification Summary Logic
  const specification = useMemo(() => {
    let areaSqFt = 0;
    let dimensionStr = '';

    if (product.unitType === 'area') {
      const w = Math.max(1, Number(width) || 1);
      const h = Math.max(1, Number(height) || 1);
      const qty = Math.max(1, Number(quantity) || 1);
      areaSqFt = w * h * qty;
      dimensionStr = `${w}ft × ${h}ft (Qty: ${qty})`;
    } else if (product.unitType === 'letters') {
      const letters = Math.max(1, Number(letterCount) || 1);
      const heightInches = Math.max(2, Number(letterHeightInches) || 2);
      dimensionStr = `${letters} Letters @ ${heightInches} inch height`;
    } else if (product.unitType === 'quantity') {
      const qty = Math.max(1, Number(quantity) || 1);
      dimensionStr = `${qty} piece${qty > 1 ? 's' : ''}`;
    } else if (product.unitType === 'fixed') {
      const opt = product.fixedOptions[selectedFixedIndex] || product.fixedOptions[0];
      const qty = Math.max(1, Number(quantity) || 1);
      dimensionStr = `${opt.label} (Qty: ${qty})`;
    }

    // Applied Finishings
    const finishingAppliedNames = [];
    if (product.finishingAllowed) {
      product.finishingAllowed.forEach(finishKey => {
        if (selectedFinishings[finishKey]) {
          const config = PRICING_CONFIG.finishingOptions[finishKey];
          if (config) {
            finishingAppliedNames.push(config.name.split(' (')[0]);
          }
        }
      });
    }

    return {
      areaSqFt: Math.round(areaSqFt * 10) / 10,
      dimensionStr,
      finishingAppliedNames,
    };
  }, [product, width, height, quantity, letterCount, letterHeightInches, selectedFixedIndex, selectedFinishings]);

  // Toggle finishing option
  const toggleFinishing = (key) => {
    setSelectedFinishings(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  // WhatsApp Order Handler
  const handleSendWhatsApp = () => {
    const encoded = formatWhatsAppQuote({
      productName: product.name,
      dimensions: specification.dimensionStr,
      quantity: product.unitType !== 'fixed' && product.unitType !== 'quantity' ? quantity : null,
      sqFt: specification.areaSqFt > 0 ? specification.areaSqFt : null,
      finishingNames: specification.finishingAppliedNames,
      customerNotes: customerNote.trim() || null
    });

    const url = `https://wa.me/917287867584?text=${encoded}`;
    window.open(url, '_blank');
  };

  return (
    <section id="calculator" className="py-20 sm:py-28 bg-stone-50 relative border-b border-stone-200/80">
      <div className="w-full max-w-[1720px] mx-auto px-4 sm:px-8 lg:px-10 xl:px-12 2xl:px-16 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-4xl 2xl:max-w-5xl mx-auto mb-14 sm:mb-18">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-rose-50 border border-rose-200 text-rose-700 text-xs font-bold mb-3.5 shadow-2xs">
            <Sliders className="w-3.5 h-3.5 text-rose-600" />
            <span>Interactive Size & Spec Configurator</span>
          </div>

          <h2 className="font-outfit text-3xl sm:text-5xl font-extrabold text-zinc-950 tracking-tight mb-3">
            Instant Flex & Printing{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-600 via-rose-700 to-amber-600">
              Order & Size Estimator
            </span>
          </h2>

          <p className="font-anek text-lg sm:text-xl font-bold text-rose-700 mb-3">
            సైజ్ సెలెక్ట్ చేసుకోండి • నేరుగా హోల్‌సేల్ కొటేషన్ పొందండి
          </p>

          <p className="font-sans text-zinc-600 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto font-medium">
            Configure your exact dimensions, material grade, and finishing preferences. Instantly generate a formatted specification to receive our best direct wholesale quotation on WhatsApp.
          </p>

          {/* Customer Ready-Design Notice Banner */}
          <div className="mt-4 inline-flex items-center gap-2 px-4 py-2 rounded-2xl bg-amber-50 border border-amber-200 text-amber-900 text-xs font-medium shadow-2xs">
            <FileCheck className="w-4 h-4 text-amber-600 shrink-0" />
            <span>
              <strong>Note:</strong> We print customer-provided ready designs (<span className="font-mono font-bold">CDR, PSD, PDF, TIFF, JPG</span>).
            </span>
          </div>
        </div>

        {/* Calculator Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Product & Options Form */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Step 1: Select Product Category */}
            <div className="atelier-card p-6 sm:p-7 rounded-3xl bg-white border border-stone-200 shadow-atelier-sm">
              <label className="block text-xs font-mono font-bold uppercase tracking-wider text-zinc-500 mb-3.5">
                1. Select Item or Material
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {PRICING_CONFIG.products.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => {
                      setSelectedProductId(item.id);
                      setSelectedFixedIndex(0);
                    }}
                    className={`flex flex-col text-left p-4 rounded-2xl border-2 transition-all min-h-[56px] ${
                      selectedProductId === item.id
                        ? 'bg-rose-50/80 border-rose-500 shadow-xs'
                        : 'bg-white border-stone-200 hover:border-stone-300 text-zinc-700'
                    }`}
                  >
                    <div className="flex items-center justify-between w-full mb-1">
                      <span className={`text-sm font-outfit font-extrabold ${selectedProductId === item.id ? 'text-rose-950' : 'text-zinc-900'}`}>
                        {item.name.split(' (')[0]}
                      </span>
                      {item.popular && (
                        <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-amber-100 text-amber-800 border border-amber-300">
                          Popular
                        </span>
                      )}
                    </div>
                    <span className="text-xs text-zinc-500 font-medium line-clamp-1">
                      {item.description}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* Step 2: Dimensions & Quantity Inputs */}
            <div className="atelier-card p-6 sm:p-7 rounded-3xl bg-white border border-stone-200 shadow-atelier-sm">
              <label className="block text-xs font-mono font-bold uppercase tracking-wider text-zinc-500 mb-3.5">
                2. Specify Size & Dimensions
              </label>

              {/* AREA BASED (Flex, Glow Board, Vinyl) */}
              {product.unitType === 'area' && (
                <div className="space-y-4">
                  {/* Presets */}
                  <div>
                    <span className="text-xs text-zinc-600 font-bold mb-2 block">Quick Standard Sizes:</span>
                    <div className="flex flex-wrap gap-2">
                      {presets.map((p, idx) => (
                        <button
                          key={idx}
                          onClick={() => {
                            setWidth(p.w);
                            setHeight(p.h);
                          }}
                          className={`text-xs px-3.5 py-2 rounded-xl border font-bold transition-all min-h-[40px] ${
                            width === p.w && height === p.h
                              ? 'bg-rose-600 text-white border-rose-600 shadow-xs'
                              : 'bg-stone-50 text-zinc-700 border-stone-200 hover:bg-stone-100'
                          }`}
                        >
                          {p.label}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Width & Height Inputs */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
                    <div>
                      <label className="block text-xs font-bold text-zinc-700 mb-1.5">
                        Width (in Feet)
                      </label>
                      <div className="relative">
                        <input
                          type="number"
                          min="1"
                          max="200"
                          value={width}
                          onChange={(e) => setWidth(Math.max(1, Number(e.target.value)))}
                          className="w-full bg-stone-50 border-2 border-stone-200 focus:border-rose-500 focus:bg-white rounded-xl px-4 py-2.5 text-zinc-900 font-bold text-base focus:outline-none transition-all"
                        />
                        <span className="absolute right-3 top-2.5 text-xs text-zinc-400 font-bold">
                          ft
                        </span>
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-zinc-700 mb-1.5">
                        Height (in Feet)
                      </label>
                      <div className="relative">
                        <input
                          type="number"
                          min="1"
                          max="100"
                          value={height}
                          onChange={(e) => setHeight(Math.max(1, Number(e.target.value)))}
                          className="w-full bg-stone-50 border-2 border-stone-200 focus:border-rose-500 focus:bg-white rounded-xl px-4 py-2.5 text-zinc-900 font-bold text-base focus:outline-none transition-all"
                        />
                        <span className="absolute right-3 top-2.5 text-xs text-zinc-400 font-bold">
                          ft
                        </span>
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-zinc-700 mb-1.5">
                        Quantity (Copies)
                      </label>
                      <input
                        type="number"
                        min="1"
                        max="500"
                        value={quantity}
                        onChange={(e) => setQuantity(Math.max(1, Number(e.target.value)))}
                        className="w-full bg-stone-50 border-2 border-stone-200 focus:border-rose-500 focus:bg-white rounded-xl px-4 py-2.5 text-zinc-900 font-bold text-base focus:outline-none transition-all"
                      />
                    </div>
                  </div>

                  <div className="flex items-center gap-2 p-3 bg-stone-100 border border-stone-200 rounded-xl text-xs text-zinc-800 font-medium">
                    <Info className="w-4 h-4 text-sky-600 shrink-0" />
                    <span>
                      Total Calculated Area: <strong className="text-sky-700 font-bold font-mono">{specification.areaSqFt} sq. ft.</strong> across {quantity} banner{quantity > 1 ? 's' : ''}.
                    </span>
                  </div>
                </div>
              )}

              {/* 3D LETTERS */}
              {product.unitType === 'letters' && (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-zinc-700 mb-1.5">
                      Number of Letters / Characters
                    </label>
                    <input
                      type="number"
                      min="1"
                      max="100"
                      value={letterCount}
                      onChange={(e) => setLetterCount(Math.max(1, Number(e.target.value)))}
                      className="w-full bg-stone-50 border-2 border-stone-200 focus:border-rose-500 rounded-xl px-4 py-2.5 text-zinc-900 font-bold text-base focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-zinc-700 mb-1.5">
                      Letter Height (Inches)
                    </label>
                    <select
                      value={letterHeightInches}
                      onChange={(e) => setLetterHeightInches(Number(e.target.value))}
                      className="w-full bg-stone-50 border-2 border-stone-200 focus:border-rose-500 rounded-xl px-4 py-2.5 text-zinc-900 font-bold text-base focus:outline-none"
                    >
                      <option value="6">6 Inches (Small Storefront)</option>
                      <option value="8">8 Inches (Standard Shop Fascia)</option>
                      <option value="12">12 Inches (1 Foot High - Prominent)</option>
                      <option value="18">18 Inches (1.5 Feet - Rooftop)</option>
                      <option value="24">24 Inches (2 Feet - Landmark)</option>
                    </select>
                  </div>
                </div>
              )}

              {/* FIXED OPTIONS (Jumbo Xerox, Visiting Cards, Frames) */}
              {product.unitType === 'fixed' && (
                <div className="space-y-3">
                  <span className="text-xs text-zinc-600 font-bold block">Choose Size or Print Specification:</span>
                  <div className="grid grid-cols-1 gap-2">
                    {product.fixedOptions.map((opt, idx) => (
                      <button
                        key={idx}
                        onClick={() => setSelectedFixedIndex(idx)}
                        className={`flex items-center justify-between p-4 rounded-xl border-2 text-left transition-all min-h-[48px] ${
                          selectedFixedIndex === idx
                            ? 'bg-rose-50 border-rose-500 text-rose-950 font-bold shadow-xs'
                            : 'bg-stone-50 border-stone-200 text-zinc-700 hover:bg-stone-100'
                        }`}
                      >
                        <span className="text-sm font-medium">{opt.label}</span>
                        <span className={`text-xs font-mono font-bold uppercase tracking-wider px-2 py-0.5 rounded ${
                          selectedFixedIndex === idx
                            ? 'bg-rose-100 text-rose-700'
                            : 'bg-stone-200 text-zinc-700'
                        }`}>
                          Selected
                        </span>
                      </button>
                    ))}
                  </div>

                  <div className="pt-2">
                    <label className="block text-xs font-bold text-zinc-700 mb-1.5">
                      Order Quantity
                    </label>
                    <input
                      type="number"
                      min="1"
                      max="1000"
                      value={quantity}
                      onChange={(e) => setQuantity(Math.max(1, Number(e.target.value)))}
                      className="w-32 bg-stone-50 border-2 border-stone-200 focus:border-rose-500 rounded-xl px-4 py-2 text-zinc-900 font-bold text-base focus:outline-none"
                    />
                  </div>
                </div>
              )}

              {/* QUANTITY BASED (Mugs, T-Shirts) */}
              {product.unitType === 'quantity' && (
                <div className="space-y-4">
                  <div>
                    <label className="block text-xs font-bold text-zinc-700 mb-1.5">
                      Order Quantity (Units)
                    </label>
                    <input
                      type="number"
                      min="1"
                      max="1000"
                      value={quantity}
                      onChange={(e) => setQuantity(Math.max(1, Number(e.target.value)))}
                      className="w-full sm:w-48 bg-stone-50 border-2 border-stone-200 focus:border-rose-500 rounded-xl px-4 py-2.5 text-zinc-900 font-bold text-base focus:outline-none"
                    />
                  </div>

                  <div className="flex items-center gap-2 p-3 bg-amber-50 border border-amber-200 rounded-xl text-xs text-amber-900 font-medium">
                    <Sparkles className="w-4 h-4 text-amber-600 shrink-0" />
                    <span>
                      Bulk wholesale discounts available for event orders & corporate gifting.
                    </span>
                  </div>
                </div>
              )}
            </div>

            {/* Step 3: Finishing & Add-ons */}
            {product.finishingAllowed && product.finishingAllowed.length > 0 && (
              <div className="atelier-card p-6 sm:p-7 rounded-3xl bg-white border border-stone-200 shadow-atelier-sm">
                <label className="block text-xs font-mono font-bold uppercase tracking-wider text-zinc-500 mb-3.5">
                  3. Optional Finishing & Framing
                </label>
                <div className="space-y-2.5">
                  {product.finishingAllowed.map(finishKey => {
                    const finish = PRICING_CONFIG.finishingOptions[finishKey];
                    if (!finish) return null;
                    const isChecked = selectedFinishings[finishKey];

                    return (
                      <div
                        key={finishKey}
                        onClick={() => toggleFinishing(finishKey)}
                        className={`flex items-start gap-3 p-4 rounded-xl border-2 cursor-pointer transition-all min-h-[48px] ${
                          isChecked
                            ? 'bg-rose-50 border-rose-500 text-rose-950 shadow-2xs'
                            : 'bg-white border-stone-200 text-zinc-700 hover:border-stone-300'
                        }`}
                      >
                        <div className={`w-5 h-5 rounded-md flex items-center justify-center mt-0.5 border-2 transition-all ${
                          isChecked ? 'bg-rose-600 border-rose-600 text-white' : 'border-stone-300 bg-white'
                        }`}>
                          {isChecked && <Check className="w-3.5 h-3.5 stroke-[3]" />}
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center justify-between">
                            <span className="text-sm font-bold">{finish.name}</span>
                            <span className="text-[10px] text-rose-700 font-bold uppercase tracking-wider bg-rose-100 px-2 py-0.5 rounded">
                              Optional Addon
                            </span>
                          </div>
                          <p className="text-xs text-zinc-500 mt-0.5 font-medium">{finish.description}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}

            {/* Step 4: Custom Notes */}
            <div className="atelier-card p-6 sm:p-7 rounded-3xl bg-white border border-stone-200 shadow-atelier-sm">
              <label className="block text-xs font-mono font-bold uppercase tracking-wider text-zinc-500 mb-2">
                4. Custom Notes & Ready Design Format (Optional)
              </label>
              <input
                type="text"
                placeholder="e.g., CDR file ready, urgent delivery needed today, with brass eyelets..."
                value={customerNote}
                onChange={(e) => setCustomerNote(e.target.value)}
                className="w-full bg-stone-50 border-2 border-stone-200 focus:border-rose-500 rounded-xl px-4 py-2.5 text-sm text-zinc-900 focus:outline-none"
              />
            </div>
          </div>

          {/* Right Column: Order Specification Summary & WhatsApp Action */}
          <div className="lg:col-span-5 sticky top-28">
            <div className="atelier-card p-6 sm:p-7 rounded-3xl bg-white border border-stone-200 shadow-atelier-md relative overflow-hidden">
              <div className="flex items-center justify-between pb-4 border-b border-stone-200 mb-5">
                <div>
                  <span className="text-xs font-mono font-bold uppercase tracking-wider text-rose-600">
                    Live Specification
                  </span>
                  <h3 className="font-outfit text-xl font-extrabold text-zinc-900">Order Summary</h3>
                </div>
                <span className="px-2.5 py-1 text-xs font-bold rounded-lg bg-emerald-50 text-emerald-800 border border-emerald-300">
                  Direct Workshop Quote
                </span>
              </div>

              {/* Itemized Specification Breakdown */}
              <div className="space-y-3 text-sm mb-6">
                <div className="flex justify-between py-1.5 border-b border-stone-100 text-zinc-700">
                  <span className="text-zinc-500 font-medium">Selected Item:</span>
                  <span className="font-bold text-zinc-900 text-right max-w-[200px] truncate">
                    {product.name}
                  </span>
                </div>

                <div className="flex justify-between py-1.5 border-b border-stone-100 text-zinc-700">
                  <span className="text-zinc-500 font-medium">Size / Dimensions:</span>
                  <span className="font-bold text-zinc-900 font-mono">
                    {specification.dimensionStr}
                  </span>
                </div>

                {specification.areaSqFt > 0 && (
                  <div className="flex justify-between py-1.5 border-b border-stone-100 text-zinc-700">
                    <span className="text-zinc-500 font-medium">Total Area:</span>
                    <span className="font-extrabold text-sky-700 font-mono">
                      {specification.areaSqFt} sq. ft.
                    </span>
                  </div>
                )}

                {specification.finishingAppliedNames.length > 0 && (
                  <div className="flex justify-between py-1.5 border-b border-stone-100 text-zinc-700">
                    <span className="text-zinc-500 font-medium">Finishing:</span>
                    <span className="font-bold text-zinc-900 text-right max-w-[180px]">
                      {specification.finishingAppliedNames.join(', ')}
                    </span>
                  </div>
                )}

                <div className="flex justify-between py-1.5 border-b border-stone-100 text-zinc-700">
                  <span className="text-zinc-500 font-medium">Design File:</span>
                  <span className="font-bold text-emerald-700">
                    Customer Ready Design
                  </span>
                </div>
              </div>

              {/* High-Impact WhatsApp Quote Box */}
              <div className="p-5 rounded-2xl bg-zinc-950 text-white mb-6 text-center shadow-md border border-zinc-800">
                <div className="w-10 h-10 rounded-2xl bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 flex items-center justify-center mx-auto mb-2">
                  <MessageCircle className="w-5 h-5" />
                </div>
                <h4 className="font-outfit text-sm font-extrabold text-white">
                  Get Direct Best Wholesale Price
                </h4>
                <p className="font-sans text-[11px] text-zinc-300 mt-1 leading-relaxed font-medium">
                  Send this exact specification to City Grafix on WhatsApp to receive the direct workshop rate with zero middlemen.
                </p>
              </div>

              {/* WhatsApp Action Button */}
              <button
                onClick={handleSendWhatsApp}
                className="w-full flex items-center justify-center gap-2 py-4 px-6 rounded-2xl font-bold text-sm sm:text-base text-white bg-emerald-600 hover:bg-emerald-700 shadow-lg shadow-emerald-600/20 transition-all hover:scale-[1.01] active:scale-[0.98] min-h-[48px]"
              >
                <MessageCircle className="w-5 h-5" />
                <span>Send Specs to WhatsApp for Best Quote</span>
              </button>

              <p className="text-[10px] text-zinc-500 text-center mt-3 leading-tight font-medium">
                *City Grafix provides commercial printing and fabrication from customer-supplied ready design files (CDR, PSD, PDF, JPG).
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
