import React, { useState, useRef, useMemo } from 'react';
import {
  Heart,
  Flame,
  Lightbulb,
  Sparkles,
  Eye,
  Rotate3d,
  Sun,
  Moon,
  ZoomIn,
  Move,
  Layers,
  Check
} from 'lucide-react';

export default function RealProductMockup3D({
  activeCategory,
  productConfig,
  selectedVariantId,
  selectedInnerColor,
  isMagicHot,
  setIsMagicHot,
  tshirtPrintType,
  tshirtNeckStyle,
  tshirtSize,
  tshirtColor,
  tshirtPlacement,
  frameBorder,
  isFrameLedOn,
  setIsFrameLedOn,
  pillowShape,
  pillowColor,
  isPillowLedOn,
  setIsPillowLedOn,
  isPillowSequinsRevealed,
  setIsPillowSequinsRevealed,
  capColor,
  sampleDisplayImage,
  customText,
  fontFamily,
  textColor,
  unitPrice,
  imageZoom = 100,
  imagePositionY = 0
}) {
  // 3D View Angle: 'front' (0 deg), 'perspective' (20 deg), 'side' (-25 deg)
  const [viewAngle, setViewAngle] = useState('perspective');
  // Studio Lighting Mode: 'day' | 'night'
  const [lightingMode, setLightingMode] = useState('day');
  // Mouse hover interactive 3D parallax tilt
  const [parallax, setParallax] = useState({ rotateX: 0, rotateY: 0 });
  const containerRef = useRef(null);

  const handleMouseMove = (e) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    // Mild parallax tilt (+/- 8 degrees max)
    setParallax({
      rotateX: -Math.max(-8, Math.min(8, (y / (rect.height / 2)) * 8)),
      rotateY: Math.max(-10, Math.min(10, (x / (rect.width / 2)) * 10))
    });
  };

  const handleMouseLeave = () => {
    setParallax({ rotateX: 0, rotateY: 0 });
  };

  // Base rotation per view angle
  const baseRotationY = useMemo(() => {
    if (viewAngle === 'front') return 0;
    if (viewAngle === 'perspective') return 16;
    if (viewAngle === 'side') return -22;
    return 16;
  }, [viewAngle]);

  const combinedTransform = `perspective(1000px) rotateX(${parallax.rotateX}deg) rotateY(${baseRotationY + parallax.rotateY}deg) scale3d(1, 1, 1)`;

  // Inner color hex helper
  const innerColorHex = useMemo(() => {
    return (
      productConfig.innerColors?.find((c) => c.id === selectedInnerColor)?.hex ||
      '#dc2626'
    );
  }, [productConfig, selectedInnerColor]);

  // Frame border hex helper
  const frameBorderObj = useMemo(() => {
    return (
      productConfig.borderStyles?.find((b) => b.id === frameBorder) || {
        hex: '#09090b',
        name: 'Matte Jet Black'
      }
    );
  }, [productConfig, frameBorder]);

  // T-Shirt color hex helper
  const tshirtColorHex = useMemo(() => {
    return (
      productConfig.colors?.find((c) => c.id === tshirtColor)?.hex || '#0f172a'
    );
  }, [productConfig, tshirtColor]);

  // Pillow color hex helper
  const pillowColorHex = useMemo(() => {
    return (
      productConfig.colors?.find((c) => c.id === pillowColor)?.hex || '#dc2626'
    );
  }, [productConfig, pillowColor]);

  // Cap color hex helper
  const capColorHex = useMemo(() => {
    return productConfig.colors?.find((c) => c.id === capColor)?.hex || '#ef4444';
  }, [productConfig, capColor]);

  // Effective night ambiance for LED modes
  const isNightAmbiance =
    lightingMode === 'night' ||
    (activeCategory === 'frames' && selectedVariantId === 'led-12x18' && isFrameLedOn) ||
    (activeCategory === 'pillows' && selectedVariantId === 'led' && isPillowLedOn);

  return (
    <div className="flex flex-col gap-3">
      {/* 3D Interactive Stage Canvas Container */}
      <div
        ref={containerRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className={`relative w-full aspect-square max-w-[420px] mx-auto rounded-3xl border-2 transition-all duration-500 overflow-hidden select-none flex items-center justify-center p-6 ${
          isNightAmbiance
            ? 'bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 border-slate-700 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.5)]'
            : 'bg-gradient-to-b from-slate-100 via-sky-50/30 to-slate-200/80 border-slate-200/90 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.08)]'
        }`}
        style={{
          perspective: '1000px',
          cursor: 'grab'
        }}
      >
        {/* Dynamic Studio Ambient Lighting & Radial Stage */}
        <div
          className={`absolute inset-0 pointer-events-none transition-opacity duration-700 ${
            isNightAmbiance
              ? 'opacity-80 bg-[radial-gradient(circle_at_50%_35%,rgba(251,191,36,0.18)_0%,transparent_70%)]'
              : 'opacity-100 bg-[radial-gradient(circle_at_50%_25%,rgba(255,255,255,0.9)_0%,transparent_65%)]'
          }`}
        />

        {/* 3D Realistic Cylindrical Pedestal / Table Surface */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 w-72 h-14 rounded-full pointer-events-none">
          {/* Contact Ambient Shadow */}
          <div
            className={`w-full h-full rounded-full blur-md transition-all duration-500 ${
              isNightAmbiance ? 'bg-black/80 scale-105' : 'bg-slate-900/15 scale-100'
            }`}
          />
          {/* Subtle Studio Pedestal Reflection Ring */}
          <div
            className={`absolute top-1 left-4 right-4 h-5 rounded-full border-t transition-opacity ${
              isNightAmbiance ? 'border-amber-400/20' : 'border-white/80'
            }`}
          />
        </div>

        {/* Top Floating Badges */}
        <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-30 pointer-events-none">
          <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/90 backdrop-blur-md border border-slate-200 shadow-sm text-slate-800 text-[10px] sm:text-xs font-black">
            <Sparkles className="w-3 h-3 text-rose-500" />
            <span>3D Photorealistic Studio</span>
          </div>

          <div className="flex items-center gap-1 px-2.5 py-1 rounded-xl bg-emerald-500 text-white font-black text-xs shadow-md">
            <span>₹{unitPrice}/-</span>
          </div>
        </div>

        {/* Interactive 3D Product Mesh Layer */}
        <div
          className="relative z-10 transition-transform duration-200 ease-out flex items-center justify-center w-full h-full"
          style={{
            transform: combinedTransform,
            transformStyle: 'preserve-3d'
          }}
        >
          {/* ========================================================
              1. PHOTOREALISTIC 3D CERAMIC MUG MOCKUP
             ======================================================== */}
          {activeCategory === 'cups' && (
            <div className="relative w-64 h-72 flex items-center justify-center">
              {/* Steaming Coffee Effect for Magic Mug when Hot */}
              {selectedVariantId === 'magic' && isMagicHot && (
                <div className="absolute -top-12 left-1/2 -translate-x-1/2 flex items-center gap-2 pointer-events-none z-20 animate-pulse">
                  <div className="w-1.5 h-10 bg-gradient-to-t from-white/40 via-white/20 to-transparent rounded-full blur-xs -rotate-6 animate-bounce" />
                  <div className="w-2 h-14 bg-gradient-to-t from-white/50 via-white/20 to-transparent rounded-full blur-xs rotate-3 animate-bounce delay-150" />
                  <div className="w-1.5 h-12 bg-gradient-to-t from-white/40 via-white/20 to-transparent rounded-full blur-xs -rotate-2 animate-bounce delay-300" />
                </div>
              )}

              {/* Ceramic Cylinder Mug Shell */}
              <div className="relative w-48 h-60 flex flex-col items-center">
                
                {/* 3D Top Opening Ellipse with Depth Rim & Inner Glaze Color */}
                <div
                  className="relative w-48 h-12 rounded-[50%] z-20 shadow-md overflow-hidden border-2 transition-colors duration-300"
                  style={{
                    backgroundColor:
                      selectedVariantId === 'inner-colour'
                        ? innerColorHex
                        : selectedVariantId === 'magic' && !isMagicHot
                        ? '#09090b'
                        : '#ffffff',
                    borderColor: '#e2e8f0',
                    boxShadow: 'inset 0 4px 10px rgba(0,0,0,0.35)'
                  }}
                >
                  {/* Steaming Coffee / Tea Liquid Surface inside the cup */}
                  <div className="absolute inset-1.5 rounded-[50%] bg-gradient-to-br from-[#2b1810] via-[#3a2016] to-[#1a0e08] shadow-inner flex items-center justify-center">
                    <div className="w-24 h-4 rounded-full bg-amber-900/30 blur-[2px]" />
                  </div>
                </div>

                {/* 3D Cylindrical Ceramic Body */}
                <div
                  className="relative w-48 h-52 -mt-6 rounded-b-[40px] overflow-hidden shadow-2xl flex flex-col items-center justify-center border-t-0 border-x-2 border-b-2 border-slate-200 transition-colors duration-300"
                  style={{
                    backgroundColor:
                      selectedVariantId === 'magic' && !isMagicHot
                        ? '#0f172a'
                        : '#ffffff',
                    boxShadow:
                      '0 25px 50px -12px rgba(0,0,0,0.25), inset -10px 0 20px rgba(0,0,0,0.08), inset 10px 0 20px rgba(255,255,255,0.7)'
                  }}
                >
                  {/* Inner Rim Color Band for Inner Colour variant */}
                  {selectedVariantId === 'inner-colour' && (
                    <div
                      className="absolute top-0 inset-x-0 h-3 z-10 border-b border-black/10 transition-colors"
                      style={{ backgroundColor: innerColorHex }}
                    />
                  )}

                  {/* Cylindrical Wrap Photo Zone with Perspective Distortion */}
                  <div className="relative w-40 h-40 rounded-xl overflow-hidden shadow-inner flex items-center justify-center bg-slate-100 group">
                    {/* Magic Cup Thermochromic Cold Shell Cover */}
                    {selectedVariantId === 'magic' && !isMagicHot && (
                      <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 z-20 flex flex-col items-center justify-center p-3 text-center transition-all duration-700">
                        <Flame className="w-7 h-7 text-amber-400 mb-1 animate-pulse" />
                        <span className="text-xs font-black text-white leading-tight">
                          Cold Cup (Black)
                        </span>
                        <span className="text-[10px] text-amber-300 font-semibold mt-1">
                          Click "Pour Hot Drink" to reveal!
                        </span>
                      </div>
                    )}

                    {/* The Customer's Photo Glazed on the Mug with Zoom & Pan */}
                    <div
                      className="w-full h-full transition-transform duration-200"
                      style={{
                        transform: `scale(${imageZoom / 100}) translateY(${imagePositionY}px)`
                      }}
                    >
                      <img
                        src={sampleDisplayImage}
                        alt="Mug Custom Print"
                        className="w-full h-full object-cover"
                      />
                    </div>

                    {/* Realistic Cylindrical Specular Glaze Overlay (Makes it look curved and glossy) */}
                    <div
                      className="absolute inset-0 pointer-events-none z-10"
                      style={{
                        background:
                          'linear-gradient(90deg, rgba(0,0,0,0.18) 0%, rgba(255,255,255,0.45) 12%, rgba(255,255,255,0) 28%, rgba(0,0,0,0.02) 65%, rgba(255,255,255,0.7) 82%, rgba(0,0,0,0.22) 100%)',
                        mixBlendMode: 'overlay'
                      }}
                    />

                    {/* Custom Text Inscription Engraving */}
                    {customText.trim() && (
                      <div className="absolute bottom-2 inset-x-2 text-center z-20 pointer-events-none drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
                        <span
                          className={`text-xs sm:text-sm font-black leading-tight block truncate ${fontFamily}`}
                          style={{
                            color: textColor,
                            textShadow: '0 1px 3px rgba(0,0,0,0.7)'
                          }}
                        >
                          {customText}
                        </span>
                      </div>
                    )}
                  </div>

                  {/* Bottom Ceramic Base Ellipse / Foot */}
                  <div className="absolute -bottom-1 inset-x-8 h-3 rounded-full bg-black/10 blur-[1px]" />
                </div>

                {/* 3D Ceramic Handle Attachment */}
                {selectedVariantId === 'heart-handle' ? (
                  // Romantic Sculpted Heart Handle
                  <div className="absolute -right-7 top-24 w-14 h-24 pointer-events-none z-0">
                    <div className="relative w-full h-full flex items-center justify-center">
                      <Heart className="w-16 h-20 text-rose-600 fill-rose-500 drop-shadow-xl transform rotate-12 scale-x-90" />
                      <div className="absolute inset-2 flex items-center justify-center">
                        <div className="w-6 h-8 rounded-full bg-transparent border-4 border-rose-700/60" />
                      </div>
                    </div>
                  </div>
                ) : (
                  // Ergonomic C-Handle with Rim Lighting
                  <div
                    className="absolute -right-8 top-20 w-12 h-32 rounded-r-[32px] border-[10px] -z-1 transition-all duration-300"
                    style={{
                      borderColor:
                        selectedVariantId === 'inner-colour'
                          ? innerColorHex
                          : selectedVariantId === 'magic' && !isMagicHot
                          ? '#0f172a'
                          : '#ffffff',
                      boxShadow: '4px 6px 15px rgba(0,0,0,0.15)'
                    }}
                  >
                    {/* Handle Specular Shine */}
                    <div className="absolute top-2 right-1 w-2 h-16 rounded-full bg-white/40 blur-[1px]" />
                  </div>
                )}
              </div>
            </div>
          )}

          {/* ========================================================
              2. PHOTOREALISTIC 3D T-SHIRT MOCKUP
             ======================================================== */}
          {activeCategory === 'tshirts' && (
            <div className="relative w-64 h-72 flex items-center justify-center">
              {/* Cotton Garment Shape with Seam Creases */}
              <div
                className="relative w-56 h-64 rounded-3xl shadow-2xl flex flex-col items-center justify-start pt-5 border transition-all duration-300 overflow-hidden"
                style={{
                  backgroundColor: tshirtColorHex,
                  borderColor: 'rgba(255,255,255,0.15)',
                  boxShadow:
                    '0 25px 50px -12px rgba(0,0,0,0.35), inset 0 2px 10px rgba(255,255,255,0.2), inset 0 -15px 30px rgba(0,0,0,0.25)'
                }}
              >
                {/* Woven Fabric Texture Overlay */}
                <div
                  className="absolute inset-0 pointer-events-none opacity-25"
                  style={{
                    backgroundImage:
                      'radial-gradient(rgba(255,255,255,0.3) 1px, transparent 1px)',
                    backgroundSize: '4px 4px'
                  }}
                />

                {/* Collar Construction: Polo Collar vs Round Neck */}
                {tshirtNeckStyle === 'collar' ? (
                  // Ribbed Polo Collar with Pearl Buttons
                  <div className="relative z-10 w-24 h-9 -mt-1 flex flex-col items-center">
                    <div className="w-24 h-6 border-b-2 border-white/20 rounded-b-2xl bg-black/25 flex items-center justify-center shadow-md">
                      <span className="text-[7px] uppercase tracking-widest text-white/90 font-black">
                        PREMIUM POLO
                      </span>
                    </div>
                    {/* Placket with 2 buttons */}
                    <div className="w-6 h-6 bg-black/35 rounded-b-md flex flex-col items-center justify-around py-0.5 shadow-inner">
                      <div className="w-1.5 h-1.5 rounded-full bg-white/80 shadow-xs" />
                      <div className="w-1.5 h-1.5 rounded-full bg-white/80 shadow-xs" />
                    </div>
                  </div>
                ) : (
                  // Athletic Ribbed Crew Neck with Neck Tape
                  <div className="relative z-10 w-20 h-6 -mt-1 rounded-b-full border-b-4 border-white/25 bg-black/30 flex items-center justify-center shadow-inner">
                    <span className="text-[6px] tracking-widest text-white/60 uppercase font-bold">
                      COMFORT FIT
                    </span>
                  </div>
                )}

                {/* Shoulder Stitches & Sleeve Hints */}
                <div className="absolute top-6 left-2 right-2 flex justify-between pointer-events-none opacity-40">
                  <div className="w-8 h-0.5 border-t border-dashed border-white" />
                  <div className="w-8 h-0.5 border-t border-dashed border-white" />
                </div>

                {/* High-Definition DTF / Sublimation Print Area */}
                <div
                  className={`relative mt-4 rounded-xl overflow-hidden shadow-inner flex flex-col items-center justify-center transition-all ${
                    tshirtPlacement === 'pocket'
                      ? 'w-16 h-16 mr-auto ml-7 border border-dashed border-white/40'
                      : 'w-36 h-38 border-2 border-dashed border-white/30'
                  }`}
                  style={{
                    boxShadow:
                      tshirtPrintType === 'dtf'
                        ? '0 4px 10px rgba(0,0,0,0.3), inset 0 1px 2px rgba(255,255,255,0.4)'
                        : 'inset 0 1px 4px rgba(0,0,0,0.1)'
                  }}
                >
                  <div
                    className="w-full h-full transition-transform duration-200"
                    style={{
                      transform: `scale(${imageZoom / 100}) translateY(${imagePositionY}px)`
                    }}
                  >
                    <img
                      src={sampleDisplayImage}
                      alt="T-Shirt Print Preview"
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* DTF Glossy Specular Finish or Sublimation Soft Matting */}
                  <div
                    className="absolute inset-0 pointer-events-none"
                    style={{
                      background:
                        tshirtPrintType === 'dtf'
                          ? 'linear-gradient(135deg, rgba(255,255,255,0.25) 0%, transparent 60%)'
                          : 'radial-gradient(circle, transparent 40%, rgba(0,0,0,0.08) 100%)'
                    }}
                  />

                  {/* Custom Text Inscription */}
                  {customText.trim() && (
                    <div className="absolute bottom-1 inset-x-1 text-center bg-black/60 py-0.5 rounded backdrop-blur-sm">
                      <span
                        className={`text-[9px] font-black leading-none block truncate ${fontFamily}`}
                        style={{ color: textColor }}
                      >
                        {customText}
                      </span>
                    </div>
                  )}
                </div>

                {/* Garment Fabric Bottom Creases & Natural Hem */}
                <div className="mt-auto mb-2 w-48 h-1 rounded-full bg-black/20" />

                {/* Size Badge Tag on Right Sleeve */}
                <div className="absolute top-3 right-3 text-[8px] font-black px-2 py-0.5 rounded-full bg-white/20 text-white backdrop-blur-md border border-white/20 shadow-xs">
                  {tshirtSize}
                </div>
              </div>
            </div>
          )}

          {/* ========================================================
              3. PHOTOREALISTIC 3D PHOTO FRAME & LED WALL ART
             ======================================================== */}
          {activeCategory === 'frames' && (
            <div className="relative w-64 h-72 flex items-center justify-center">
              {/* Warm 3000K Radial LED Glow blooming across the wall */}
              {selectedVariantId === 'led-12x18' && isFrameLedOn && (
                <div className="absolute -inset-8 rounded-3xl bg-amber-400/40 blur-2xl pointer-events-none animate-pulse transition-all duration-700" />
              )}

              {/* Synthetic Molded Wooden Frame with 45° Mitered Bevel */}
              <div
                className="relative w-52 h-64 rounded-2xl p-3 shadow-2xl flex flex-col items-center justify-center border-8 transition-all duration-300"
                style={{
                  backgroundColor: frameBorderObj.hex,
                  borderColor: frameBorderObj.hex,
                  boxShadow:
                    selectedVariantId === 'led-12x18' && isFrameLedOn
                      ? '0 0 35px rgba(251,191,36,0.6), 0 25px 50px rgba(0,0,0,0.45)'
                      : '0 25px 50px -10px rgba(0,0,0,0.35), inset 0 2px 4px rgba(255,255,255,0.3)'
                }}
              >
                {/* 45-degree Miter Corner Line Accents */}
                <div className="absolute inset-0 pointer-events-none">
                  <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-white/30" />
                  <div className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-white/30" />
                  <div className="absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2 border-white/30" />
                  <div className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-white/30" />
                </div>

                {/* White Museum Bevel Matting Core (Passe-Partout) */}
                <div className="relative w-full h-full rounded-xl bg-slate-100 p-2 shadow-inner flex items-center justify-center overflow-hidden border border-slate-300">
                  
                  {/* Photo Canvas Artwork */}
                  <div className="relative w-full h-full rounded-lg overflow-hidden bg-slate-900 shadow-inner flex items-center justify-center">
                    <div
                      className="w-full h-full transition-transform duration-200"
                      style={{
                        transform: `scale(${imageZoom / 100}) translateY(${imagePositionY}px)`
                      }}
                    >
                      <img
                        src={sampleDisplayImage}
                        alt="Photo Frame Artwork"
                        className="w-full h-full object-cover"
                      />
                    </div>

                    {/* Diagonal Museum Glass Glare Reflection */}
                    <div
                      className="absolute inset-0 pointer-events-none z-10"
                      style={{
                        background:
                          'linear-gradient(125deg, rgba(255,255,255,0.4) 0%, rgba(255,255,255,0.1) 25%, transparent 45%, rgba(255,255,255,0.15) 75%, transparent 100%)',
                        mixBlendMode: 'screen'
                      }}
                    />

                    {/* Sparkle Lamination Pill */}
                    <div className="absolute top-1.5 left-1.5 px-2 py-0.5 rounded-md bg-black/70 backdrop-blur-md text-[8px] font-black text-amber-300 shadow-sm z-20">
                      ✨ Sparkle Matte Laminated
                    </div>

                    {/* Custom Text Inscription */}
                    {customText.trim() && (
                      <div className="absolute bottom-2 inset-x-2 text-center bg-black/70 py-1 rounded-lg backdrop-blur-md z-20">
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

                {/* LED Backlit Tube Indicator */}
                {selectedVariantId === 'led-12x18' && (
                  <div className="absolute -bottom-2 px-2 py-0.5 rounded-full bg-amber-500 text-slate-950 font-black text-[8px] uppercase tracking-wider shadow-md">
                    {isFrameLedOn ? '⚡ LED Backlit Active' : 'LED Off'}
                  </div>
                )}
              </div>
            </div>
          )}

          {/* ========================================================
              4. PHOTOREALISTIC 3D PILLOW / CUSHION MOCKUP
             ======================================================== */}
          {activeCategory === 'pillows' && (
            <div className="relative w-64 h-72 flex items-center justify-center">
              {/* Internal LED Glow Bloom for LED Pillow */}
              {selectedVariantId === 'led' && isPillowLedOn && (
                <div className="absolute -inset-6 rounded-full bg-rose-400/40 blur-2xl pointer-events-none animate-pulse transition-all duration-700" />
              )}

              {pillowShape === 'heart' ? (
                // 3D Plump Romantic Heart Cushion
                <div
                  className="relative w-56 h-52 flex items-center justify-center transition-transform"
                  style={{
                    filter:
                      'drop-shadow(0 20px 30px rgba(0,0,0,0.28)) drop-shadow(0 4px 6px rgba(0,0,0,0.1))'
                  }}
                >
                  <Heart
                    className="w-56 h-52 transition-colors duration-300"
                    style={{
                      color: pillowColorHex,
                      fill: pillowColorHex,
                      filter: 'drop-shadow(inset 0 4px 10px rgba(255,255,255,0.4))'
                    }}
                  />

                  {/* Pillow Piping Perimeter Hem Seam */}
                  <div className="absolute inset-1 pointer-events-none border-2 border-white/20 rounded-full blur-[0.5px]" />

                  {/* Centered Plush Photo Pad (or Sequins Pad) */}
                  <div
                    className={`absolute w-32 h-32 rounded-full overflow-hidden shadow-2xl flex items-center justify-center transition-all ${
                      selectedVariantId === 'fancy'
                        ? 'border-4 border-amber-200 ring-4 ring-white/60 p-1'
                        : 'border-2 border-white/80'
                    }`}
                  >
                    {selectedVariantId === 'magic' && !isPillowSequinsRevealed ? (
                      <div className="w-full h-full bg-gradient-to-tr from-amber-400 via-yellow-300 to-amber-500 flex flex-col items-center justify-center p-2 text-center text-slate-950 font-black text-[10px] shadow-inner">
                        <Sparkles className="w-5 h-5 text-amber-900 mb-0.5 animate-spin" />
                        <span>✨ Reversible Sequins</span>
                        <span className="text-[8px] text-amber-950 font-bold">
                          Brush to reveal photo!
                        </span>
                      </div>
                    ) : (
                      <div
                        className="w-full h-full transition-transform duration-200"
                        style={{
                          transform: `scale(${imageZoom / 100}) translateY(${imagePositionY}px)`
                        }}
                      >
                        <img
                          src={sampleDisplayImage}
                          alt="Heart Pillow Print"
                          className="w-full h-full object-cover"
                        />
                      </div>
                    )}

                    {/* Plush Velvet Shimmer Glaze */}
                    <div
                      className="absolute inset-0 pointer-events-none"
                      style={{
                        background:
                          'radial-gradient(circle at 35% 35%, rgba(255,255,255,0.4) 0%, transparent 65%)'
                      }}
                    />

                    {/* Custom Text Inscription */}
                    {customText.trim() && isPillowSequinsRevealed && (
                      <div className="absolute bottom-2 inset-x-2 text-center bg-black/60 py-0.5 rounded-full backdrop-blur-sm z-10">
                        <span
                          className={`text-[9px] font-black leading-none block truncate ${fontFamily}`}
                          style={{ color: textColor }}
                        >
                          {customText}
                        </span>
                      </div>
                    )}
                  </div>
                </div>
              ) : (
                // 3D Plump Square Cushion (14 × 14") with Tufted Corners
                <div
                  className="relative w-56 h-56 rounded-[36px] shadow-2xl p-5 flex items-center justify-center border-4 border-white/40 transition-colors duration-300"
                  style={{
                    backgroundColor: pillowColorHex,
                    boxShadow:
                      '0 25px 50px -10px rgba(0,0,0,0.35), inset 0 4px 15px rgba(255,255,255,0.4), inset 0 -10px 20px rgba(0,0,0,0.2)'
                  }}
                >
                  {/* Pillow Seam Tufting Accents */}
                  <div className="absolute top-2 left-2 w-3 h-3 rounded-full bg-black/10 blur-[1px]" />
                  <div className="absolute top-2 right-2 w-3 h-3 rounded-full bg-black/10 blur-[1px]" />
                  <div className="absolute bottom-2 left-2 w-3 h-3 rounded-full bg-black/10 blur-[1px]" />
                  <div className="absolute bottom-2 right-2 w-3 h-3 rounded-full bg-black/10 blur-[1px]" />

                  {/* Centered Photo Pad */}
                  <div
                    className={`relative w-40 h-40 rounded-2xl overflow-hidden shadow-2xl flex items-center justify-center ${
                      selectedVariantId === 'fancy'
                        ? 'border-4 border-amber-200 ring-4 ring-white/60 p-1'
                        : 'border-2 border-white/80'
                    }`}
                  >
                    {selectedVariantId === 'magic' && !isPillowSequinsRevealed ? (
                      <div className="w-full h-full bg-gradient-to-tr from-amber-400 via-yellow-300 to-amber-500 flex flex-col items-center justify-center p-3 text-center text-slate-950 font-black text-xs shadow-inner">
                        <Sparkles className="w-6 h-6 text-amber-900 mb-1 animate-spin" />
                        <span>✨ Magic Sequins Covered</span>
                        <span className="text-[9px] text-amber-950 font-bold mt-1">
                          Click "Swipe to Reveal" below!
                        </span>
                      </div>
                    ) : (
                      <div
                        className="w-full h-full transition-transform duration-200"
                        style={{
                          transform: `scale(${imageZoom / 100}) translateY(${imagePositionY}px)`
                        }}
                      >
                        <img
                          src={sampleDisplayImage}
                          alt="Square Cushion Print"
                          className="w-full h-full object-cover"
                        />
                      </div>
                    )}

                    {/* Velvet Fabric Highlights */}
                    <div
                      className="absolute inset-0 pointer-events-none"
                      style={{
                        background:
                          'linear-gradient(135deg, rgba(255,255,255,0.3) 0%, transparent 60%)'
                      }}
                    />

                    {/* Custom Text Inscription */}
                    {customText.trim() && isPillowSequinsRevealed && (
                      <div className="absolute bottom-2 inset-x-2 text-center bg-black/60 py-1 rounded-lg backdrop-blur-sm z-10">
                        <span
                          className={`text-[10px] font-black leading-tight block truncate ${fontFamily}`}
                          style={{ color: textColor }}
                        >
                          {customText}
                        </span>
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>
          )}

          {/* ========================================================
              5. PHOTOREALISTIC 3D STRUCTURED CAP MOCKUP
             ======================================================== */}
          {activeCategory === 'caps' && (
            <div className="relative w-64 h-72 flex flex-col items-center justify-center">
              {/* Structured 5-Panel Crown with Squatchee Button */}
              <div
                className="relative w-48 h-36 rounded-t-[70px] shadow-2xl flex flex-col items-center justify-center border-t-2 border-x-2 border-slate-300 transition-colors duration-300"
                style={{
                  backgroundColor: capColorHex,
                  boxShadow:
                    '0 20px 40px -10px rgba(0,0,0,0.35), inset 0 2px 10px rgba(255,255,255,0.3)'
                }}
              >
                {/* Top Squatchee Fabric Button */}
                <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-slate-900 border border-white/40 shadow-md" />

                {/* Eyelet Breather Holes */}
                <div className="absolute top-4 left-6 w-1.5 h-1.5 rounded-full bg-black/40 border border-white/30" />
                <div className="absolute top-4 right-6 w-1.5 h-1.5 rounded-full bg-black/40 border border-white/30" />

                {/* Front Panel DTF Heat Transfer Print Patch */}
                <div className="relative w-28 h-18 rounded-lg border-2 border-dashed border-white/40 flex items-center justify-center overflow-hidden bg-black/25 shadow-inner">
                  <div
                    className="w-full h-full transition-transform duration-200"
                    style={{
                      transform: `scale(${imageZoom / 100}) translateY(${imagePositionY}px)`
                    }}
                  >
                    <img
                      src={sampleDisplayImage}
                      alt="Cap Custom Logo"
                      className="w-full h-full object-contain p-1"
                    />
                  </div>

                  {customText.trim() && (
                    <div className="absolute bottom-0.5 inset-x-0.5 text-center bg-black/70 py-0.5 rounded">
                      <span className="text-[8px] font-black text-white block truncate">
                        {customText}
                      </span>
                    </div>
                  )}
                </div>
              </div>

              {/* 3D Curved Visor with 4 Stitch Rows */}
              <div
                className="relative w-56 h-12 rounded-b-[60px] shadow-2xl border-t border-black/30 overflow-hidden flex flex-col justify-around py-1"
                style={{
                  backgroundColor:
                    capColor === 'red-white'
                      ? '#ef4444'
                      : capColor === 'navy'
                      ? '#1e3a8a'
                      : '#0f172a'
                }}
              >
                {/* 4 Rows of Parallel Visor Stitching Lines */}
                <div className="w-full h-0.5 border-t border-dashed border-white/25" />
                <div className="w-full h-0.5 border-t border-dashed border-white/20" />
                <div className="w-full h-0.5 border-t border-dashed border-white/15" />
              </div>
            </div>
          )}
        </div>

        {/* Bottom Interactive Angle & Lighting Controls Dock */}
        <div className="absolute bottom-3 inset-x-4 flex items-center justify-between z-30">
          {/* 3D Angle Selector */}
          <div className="flex items-center gap-1 bg-white/95 backdrop-blur-md border border-slate-200/90 p-1 rounded-2xl shadow-md">
            {[
              { id: 'front', label: 'Front', icon: Eye },
              { id: 'perspective', label: '3D 45°', icon: Rotate3d },
              { id: 'side', label: 'Detail', icon: Layers }
            ].map((ang) => {
              const Icon = ang.icon;
              const isActive = viewAngle === ang.id;
              return (
                <button
                  key={ang.id}
                  type="button"
                  onClick={() => setViewAngle(ang.id)}
                  className={`flex items-center gap-1 px-2.5 py-1 rounded-xl text-[10px] font-black transition-all ${
                    isActive
                      ? 'bg-rose-600 text-white shadow-sm'
                      : 'text-slate-700 hover:text-slate-900 hover:bg-slate-100'
                  }`}
                  title={`${ang.label} angle`}
                >
                  <Icon className="w-3 h-3" />
                  <span>{ang.label}</span>
                </button>
              );
            })}
          </div>

          {/* Lighting Mode Switcher (Day / Night) */}
          <button
            type="button"
            onClick={() => setLightingMode(lightingMode === 'day' ? 'night' : 'day')}
            className={`flex items-center gap-1 px-2.5 py-1.5 rounded-2xl text-[10px] font-black border transition-all shadow-md ${
              isNightAmbiance
                ? 'bg-amber-400 text-slate-950 border-amber-300 shadow-amber-400/20'
                : 'bg-white/95 text-slate-800 border-slate-200/90 hover:bg-slate-50'
            }`}
            title="Toggle Studio Lighting Environment"
          >
            {isNightAmbiance ? (
              <>
                <Moon className="w-3 h-3 text-slate-950" />
                <span>Night Ambiance</span>
              </>
            ) : (
              <>
                <Sun className="w-3 h-3 text-amber-500" />
                <span>Studio Light</span>
              </>
            )}
          </button>
        </div>
      </div>

      {/* Interactive Micro-Effect Buttons underneath the 3D Stage */}
      <div className="flex flex-wrap items-center justify-center gap-2">
        {/* Magic Mug Hot Pour Toggle */}
        {activeCategory === 'cups' && selectedVariantId === 'magic' && (
          <button
            type="button"
            onClick={() => setIsMagicHot(!isMagicHot)}
            className={`py-2 px-4 rounded-2xl text-xs font-black flex items-center gap-2 shadow-md transition-all active:scale-95 ${
              isMagicHot
                ? 'bg-amber-400 text-slate-950 border border-amber-300'
                : 'bg-slate-900 text-white hover:bg-slate-800'
            }`}
          >
            <Flame className="w-4 h-4 text-amber-500" />
            <span>
              {isMagicHot
                ? '🔥 Boiling Hot Coffee Poured (Revealed)'
                : '❄️ Cold Cup (Pitch Black)'}
            </span>
          </button>
        )}

        {/* LED Frame Light Switcher */}
        {activeCategory === 'frames' && selectedVariantId === 'led-12x18' && (
          <button
            type="button"
            onClick={() => setIsFrameLedOn(!isFrameLedOn)}
            className={`py-2 px-4 rounded-2xl text-xs font-black flex items-center gap-2 shadow-md transition-all active:scale-95 ${
              isFrameLedOn
                ? 'bg-amber-400 text-slate-950 border border-amber-300'
                : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
            }`}
          >
            <Lightbulb className="w-4 h-4 text-amber-600" />
            <span>{isFrameLedOn ? '💡 Turn Frame LED Lights OFF' : '💡 Glow Frame LED Lights ON'}</span>
          </button>
        )}

        {/* Magic Pillow Sequins Swipe */}
        {activeCategory === 'pillows' && selectedVariantId === 'magic' && (
          <button
            type="button"
            onClick={() => setIsPillowSequinsRevealed(!isPillowSequinsRevealed)}
            className="py-2 px-4 rounded-2xl text-xs font-black flex items-center gap-2 bg-gradient-to-r from-amber-400 to-yellow-500 text-slate-950 shadow-md transition-all active:scale-95"
          >
            <Sparkles className="w-4 h-4 text-slate-900" />
            <span>
              {isPillowSequinsRevealed
                ? '✨ Swipe Brush to Conceal Photo'
                : '✨ Swipe Brush to Reveal Photo'}
            </span>
          </button>
        )}

        {/* LED Pillow Glow Switcher */}
        {activeCategory === 'pillows' && selectedVariantId === 'led' && (
          <button
            type="button"
            onClick={() => setIsPillowLedOn(!isPillowLedOn)}
            className={`py-2 px-4 rounded-2xl text-xs font-black flex items-center gap-2 shadow-md transition-all active:scale-95 ${
              isPillowLedOn
                ? 'bg-rose-500 text-white'
                : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
            }`}
          >
            <Lightbulb className="w-4 h-4" />
            <span>{isPillowLedOn ? '💡 Internal Fairy Lights ON' : '🌑 Fairy Lights OFF'}</span>
          </button>
        )}
      </div>
    </div>
  );
}
