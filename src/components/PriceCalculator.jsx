import React, { useState, useMemo } from 'react';
import { Calculator, MessageCircle, Info, Sparkles, Check, RefreshCw, Send, ChevronRight } from 'lucide-react';
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

  // Calculation Logic
  const calculation = useMemo(() => {
    let baseTotal = 0;
    let areaSqFt = 0;
    let dimensionStr = '';

    if (product.unitType === 'area') {
      const w = Math.max(1, Number(width) || 1);
      const h = Math.max(1, Number(height) || 1);
      const qty = Math.max(1, Number(quantity) || 1);
      areaSqFt = w * h * qty;
      dimensionStr = `${w}ft × ${h}ft (Qty: ${qty})`;
      baseTotal = areaSqFt * product.baseRatePerSqFt;
      if (baseTotal < product.minCharge * qty) {
        baseTotal = product.minCharge * qty;
      }
    } else if (product.unitType === 'letters') {
      const letters = Math.max(1, Number(letterCount) || 1);
      const heightInches = Math.max(2, Number(letterHeightInches) || 2);
      dimensionStr = `${letters} Letters @ ${heightInches} inch height`;
      baseTotal = letters * heightInches * product.baseRatePerInchLetter;
      if (baseTotal < product.minCharge) {
        baseTotal = product.minCharge;
      }
    } else if (product.unitType === 'quantity') {
      const qty = Math.max(1, Number(quantity) || 1);
      dimensionStr = `${qty} piece${qty > 1 ? 's' : ''}`;
      let rate = product.ratePerPiece;
      if (product.bulkDiscounts) {
        for (const discount of product.bulkDiscounts) {
          if (qty >= discount.minQty) {
            rate = discount.rate;
          }
        }
      }
      baseTotal = qty * rate;
    } else if (product.unitType === 'fixed') {
      const opt = product.fixedOptions[selectedFixedIndex] || product.fixedOptions[0];
      const qty = Math.max(1, Number(quantity) || 1);
      dimensionStr = `${opt.label} (Qty: ${qty})`;
      baseTotal = opt.price * qty;
    }

    // Calculate Finishings
    let finishingTotal = 0;
    const finishingAppliedNames = [];

    if (product.finishingAllowed) {
      product.finishingAllowed.forEach(finishKey => {
        if (selectedFinishings[finishKey]) {
          const config = PRICING_CONFIG.finishingOptions[finishKey];
          if (config) {
            finishingAppliedNames.push(config.name);
            if (config.price) {
              finishingTotal += config.price * (Number(quantity) || 1);
            } else if (config.pricePerSqFt && areaSqFt > 0) {
              finishingTotal += config.pricePerSqFt * areaSqFt;
            } else if (config.pricePerPiece && product.unitType === 'quantity') {
              finishingTotal += config.pricePerPiece * (Number(quantity) || 1);
            }
          }
        }
      });
    }

    const grandTotal = Math.round(baseTotal + finishingTotal);

    return {
      areaSqFt: Math.round(areaSqFt * 10) / 10,
      dimensionStr,
      baseTotal: Math.round(baseTotal),
      finishingTotal: Math.round(finishingTotal),
      finishingAppliedNames,
      grandTotal
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
      dimensions: calculation.dimensionStr,
      quantity: product.unitType !== 'fixed' && product.unitType !== 'quantity' ? quantity : null,
      sqFt: calculation.areaSqFt > 0 ? calculation.areaSqFt : null,
      finishingNames: calculation.finishingAppliedNames,
      estimatedPrice: calculation.grandTotal,
      customerNotes: customerNote.trim() || null
    });

    const url = `https://wa.me/917601043674?text=${encoded}`;
    window.open(url, '_blank');
  };

  return (
    <section id="calculator" className="py-20 bg-[#0a0f1d] relative overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-96 h-96 bg-amber-500/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-semibold mb-3">
            <Calculator className="w-3.5 h-3.5" />
            <span>Interactive Estimator</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-4">
            Instant Flex & Printing{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-teal-300 to-amber-300">
              Price Calculator
            </span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            Get an exact real-time quote for your flex banner, glow board, visiting cards or customized gifts. Send it directly to WhatsApp for instant confirmation.
          </p>
        </div>

        {/* Calculator Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Product & Options Form */}
          <div className="lg:col-span-7 space-y-6">
            {/* Step 1: Select Product Category */}
            <div className="p-6 rounded-2xl glass-card border border-white/10">
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">
                1. Select Item or Material
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {PRICING_CONFIG.products.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => {
                      setSelectedProductId(item.id);
                      setSelectedFixedIndex(0);
                    }}
                    className={`flex flex-col text-left p-3.5 rounded-xl border transition-all ${
                      selectedProductId === item.id
                        ? 'bg-cyan-500/15 border-cyan-400/80 shadow-md shadow-cyan-950/50'
                        : 'bg-slate-900/60 border-slate-800 hover:border-slate-700 text-slate-300'
                    }`}
                  >
                    <div className="flex items-center justify-between w-full mb-1">
                      <span className={`text-sm font-bold ${selectedProductId === item.id ? 'text-white' : 'text-slate-200'}`}>
                        {item.name.split(' (')[0]}
                      </span>
                      {item.popular && (
                        <span className="text-[10px] font-semibold px-2 py-0.5 rounded bg-amber-500/20 text-amber-300 border border-amber-500/30">
                          Popular
                        </span>
                      )}
                    </div>
                    <span className="text-[11px] text-slate-400 line-clamp-1">
                      {item.description}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* Step 2: Dimensions & Quantity Inputs */}
            <div className="p-6 rounded-2xl glass-card border border-white/10">
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">
                2. Specify Size & Dimensions
              </label>

              {/* AREA BASED (Flex, Glow Board, Vinyl) */}
              {product.unitType === 'area' && (
                <div className="space-y-4">
                  {/* Presets */}
                  <div>
                    <span className="text-xs text-slate-400 mb-2 block">Quick Size Presets:</span>
                    <div className="flex flex-wrap gap-2">
                      {presets.map((p, idx) => (
                        <button
                          key={idx}
                          onClick={() => {
                            setWidth(p.w);
                            setHeight(p.h);
                          }}
                          className={`text-xs px-3 py-1.5 rounded-lg border transition-all ${
                            width === p.w && height === p.h
                              ? 'bg-cyan-400 text-slate-950 font-bold border-cyan-400'
                              : 'bg-slate-800/80 text-slate-300 border-slate-700 hover:border-slate-600'
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
                      <label className="block text-xs font-medium text-slate-300 mb-1.5">
                        Width (in Feet)
                      </label>
                      <div className="relative">
                        <input
                          type="number"
                          min="1"
                          max="200"
                          value={width}
                          onChange={(e) => setWidth(Math.max(1, Number(e.target.value)))}
                          className="w-full bg-slate-900 border border-slate-700 focus:border-cyan-400 rounded-xl px-4 py-2.5 text-white font-bold text-base focus:outline-none"
                        />
                        <span className="absolute right-3 top-2.5 text-xs text-slate-400 font-semibold">
                          ft
                        </span>
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-slate-300 mb-1.5">
                        Height (in Feet)
                      </label>
                      <div className="relative">
                        <input
                          type="number"
                          min="1"
                          max="100"
                          value={height}
                          onChange={(e) => setHeight(Math.max(1, Number(e.target.value)))}
                          className="w-full bg-slate-900 border border-slate-700 focus:border-cyan-400 rounded-xl px-4 py-2.5 text-white font-bold text-base focus:outline-none"
                        />
                        <span className="absolute right-3 top-2.5 text-xs text-slate-400 font-semibold">
                          ft
                        </span>
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-slate-300 mb-1.5">
                        Quantity (Copies)
                      </label>
                      <input
                        type="number"
                        min="1"
                        max="500"
                        value={quantity}
                        onChange={(e) => setQuantity(Math.max(1, Number(e.target.value)))}
                        className="w-full bg-slate-900 border border-slate-700 focus:border-cyan-400 rounded-xl px-4 py-2.5 text-white font-bold text-base focus:outline-none"
                      />
                    </div>
                  </div>

                  <div className="flex items-center gap-2 p-3 bg-cyan-950/30 border border-cyan-500/20 rounded-xl text-xs text-cyan-300">
                    <Info className="w-4 h-4 shrink-0" />
                    <span>
                      Total Area: <strong>{calculation.areaSqFt} sq. ft.</strong> (Rate: ₹{product.baseRatePerSqFt} per sq.ft)
                    </span>
                  </div>
                </div>
              )}

              {/* 3D LETTERS */}
              {product.unitType === 'letters' && (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-medium text-slate-300 mb-1.5">
                      Number of Letters / Characters
                    </label>
                    <input
                      type="number"
                      min="1"
                      max="100"
                      value={letterCount}
                      onChange={(e) => setLetterCount(Math.max(1, Number(e.target.value)))}
                      className="w-full bg-slate-900 border border-slate-700 focus:border-cyan-400 rounded-xl px-4 py-2.5 text-white font-bold text-base focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-slate-300 mb-1.5">
                      Letter Height (Inches)
                    </label>
                    <select
                      value={letterHeightInches}
                      onChange={(e) => setLetterHeightInches(Number(e.target.value))}
                      className="w-full bg-slate-900 border border-slate-700 focus:border-cyan-400 rounded-xl px-4 py-2.5 text-white font-bold text-base focus:outline-none"
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

              {/* FIXED OPTIONS (Visiting Cards, Frames) */}
              {product.unitType === 'fixed' && (
                <div className="space-y-3">
                  <span className="text-xs text-slate-400 block">Choose Size or Paper Grade:</span>
                  <div className="grid grid-cols-1 gap-2">
                    {product.fixedOptions.map((opt, idx) => (
                      <button
                        key={idx}
                        onClick={() => setSelectedFixedIndex(idx)}
                        className={`flex items-center justify-between p-3.5 rounded-xl border text-left transition-all ${
                          selectedFixedIndex === idx
                            ? 'bg-cyan-500/15 border-cyan-400 text-white font-bold'
                            : 'bg-slate-900/60 border-slate-800 text-slate-300'
                        }`}
                      >
                        <span className="text-sm">{opt.label}</span>
                        <span className="text-sm font-extrabold text-cyan-400">₹{opt.price}</span>
                      </button>
                    ))}
                  </div>

                  <div className="pt-2">
                    <label className="block text-xs font-medium text-slate-300 mb-1.5">
                      Order Quantity
                    </label>
                    <input
                      type="number"
                      min="1"
                      max="100"
                      value={quantity}
                      onChange={(e) => setQuantity(Math.max(1, Number(e.target.value)))}
                      className="w-32 bg-slate-900 border border-slate-700 focus:border-cyan-400 rounded-xl px-4 py-2 text-white font-bold text-base focus:outline-none"
                    />
                  </div>
                </div>
              )}

              {/* QUANTITY BASED (Mugs) */}
              {product.unitType === 'quantity' && (
                <div className="space-y-4">
                  <div>
                    <label className="block text-xs font-medium text-slate-300 mb-1.5">
                      Quantity of Mugs
                    </label>
                    <input
                      type="number"
                      min="1"
                      max="1000"
                      value={quantity}
                      onChange={(e) => setQuantity(Math.max(1, Number(e.target.value)))}
                      className="w-full sm:w-48 bg-slate-900 border border-slate-700 focus:border-cyan-400 rounded-xl px-4 py-2.5 text-white font-bold text-base focus:outline-none"
                    />
                  </div>

                  <div className="flex items-center gap-2 p-3 bg-amber-500/10 border border-amber-500/20 rounded-xl text-xs text-amber-300">
                    <Sparkles className="w-4 h-4 shrink-0" />
                    <span>
                      Bulk Discount: 5+ Mugs @ ₹160/pc | 20+ Mugs @ ₹140/pc (Includes Gift Box)
                    </span>
                  </div>
                </div>
              )}
            </div>

            {/* Step 3: Finishing & Add-ons */}
            {product.finishingAllowed && product.finishingAllowed.length > 0 && (
              <div className="p-6 rounded-2xl glass-card border border-white/10">
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">
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
                        className={`flex items-start gap-3 p-3.5 rounded-xl border cursor-pointer transition-all ${
                          isChecked
                            ? 'bg-cyan-950/40 border-cyan-400/80 text-white'
                            : 'bg-slate-900/60 border-slate-800 text-slate-300 hover:border-slate-700'
                        }`}
                      >
                        <div className={`w-5 h-5 rounded-md flex items-center justify-center mt-0.5 border transition-all ${
                          isChecked ? 'bg-cyan-500 border-cyan-400 text-slate-950' : 'border-slate-700 bg-slate-800'
                        }`}>
                          {isChecked && <Check className="w-3.5 h-3.5 stroke-[3]" />}
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center justify-between">
                            <span className="text-sm font-semibold">{finish.name}</span>
                            <span className="text-xs text-cyan-400 font-bold">
                              {finish.price ? `+₹${finish.price}` : `+₹${finish.pricePerSqFt || finish.pricePerPiece} / unit`}
                            </span>
                          </div>
                          <p className="text-xs text-slate-400 mt-0.5">{finish.description}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}

            {/* Optional Customer Note */}
            <div className="p-6 rounded-2xl glass-card border border-white/10">
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                4. Custom Notes (Optional)
              </label>
              <input
                type="text"
                placeholder="e.g., Urgent requirement today, Telugu text with logo..."
                value={customerNote}
                onChange={(e) => setCustomerNote(e.target.value)}
                className="w-full bg-slate-900 border border-slate-700 focus:border-cyan-400 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none"
              />
            </div>
          </div>

          {/* Right Column: Instant Live Quotation Box */}
          <div className="lg:col-span-5 sticky top-28">
            <div className="p-6 sm:p-7 rounded-3xl glass-card border-2 border-cyan-500/30 shadow-2xl shadow-cyan-950/80 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/10 rounded-full blur-2xl pointer-events-none" />

              <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-5">
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-cyan-400">
                    Live Quotation
                  </span>
                  <h3 className="text-lg font-bold text-white">Estimated Summary</h3>
                </div>
                <span className="px-2.5 py-1 text-xs font-semibold rounded-lg bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                  Best Kadapa Price
                </span>
              </div>

              {/* Itemized Breakdown */}
              <div className="space-y-3 text-sm mb-6">
                <div className="flex justify-between py-1 border-b border-white/5 text-slate-300">
                  <span className="text-slate-400">Product:</span>
                  <span className="font-semibold text-white text-right max-w-[200px] truncate">
                    {product.name}
                  </span>
                </div>

                <div className="flex justify-between py-1 border-b border-white/5 text-slate-300">
                  <span className="text-slate-400">Size / Specs:</span>
                  <span className="font-semibold text-white">
                    {calculation.dimensionStr}
                  </span>
                </div>

                {calculation.areaSqFt > 0 && (
                  <div className="flex justify-between py-1 border-b border-white/5 text-slate-300">
                    <span className="text-slate-400">Total Area:</span>
                    <span className="font-semibold text-cyan-400">
                      {calculation.areaSqFt} sq. ft.
                    </span>
                  </div>
                )}

                <div className="flex justify-between py-1 border-b border-white/5 text-slate-300">
                  <span className="text-slate-400">Base Print Cost:</span>
                  <span className="font-semibold text-white">
                    ₹{calculation.baseTotal}
                  </span>
                </div>

                {calculation.finishingTotal > 0 && (
                  <div className="flex justify-between py-1 border-b border-white/5 text-slate-300">
                    <span className="text-slate-400">Finishing / Addons:</span>
                    <span className="font-semibold text-amber-300">
                      +₹{calculation.finishingTotal}
                    </span>
                  </div>
                )}
              </div>

              {/* Total Display */}
              <div className="p-4 rounded-2xl bg-gradient-to-br from-slate-900 to-cyan-950/60 border border-cyan-500/30 mb-6 text-center">
                <span className="text-xs uppercase font-bold text-slate-400 tracking-wider">
                  Total Estimated Price
                </span>
                <div className="flex items-center justify-center gap-1 mt-1">
                  <span className="text-3xl sm:text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white via-cyan-200 to-teal-300">
                    ₹{calculation.grandTotal}
                  </span>
                  <span className="text-xs text-slate-400">*(Approx)</span>
                </div>
                <p className="text-[11px] text-slate-400 mt-1">
                  *Prices may vary slightly based on complex graphic design or urgent dispatch.
                </p>
              </div>

              {/* WhatsApp Action Button */}
              <button
                onClick={handleSendWhatsApp}
                className="w-full flex items-center justify-center gap-2 py-4 px-6 rounded-2xl font-bold text-base text-white bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-400 hover:to-teal-500 shadow-xl shadow-emerald-950/70 transition-all hover:scale-[1.02] active:scale-[0.98]"
              >
                <MessageCircle className="w-5 h-5" />
                <span>Confirm & Send to WhatsApp</span>
              </button>

              <div className="mt-4 flex items-center justify-center gap-2 text-xs text-slate-400">
                <span>Direct shop WhatsApp:</span>
                <a href="tel:+917601043674" className="text-cyan-400 hover:underline font-semibold">
                  +91 76010 43674
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
