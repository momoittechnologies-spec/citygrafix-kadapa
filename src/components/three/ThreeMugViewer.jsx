import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { RotateCw, Flame, Sun, Moon, Sparkles, RefreshCw } from 'lucide-react';

export default function ThreeMugViewer({
  selectedVariantId = 'plain',
  innerColorHex = '#dc2626',
  sampleDisplayImage,
  customText = '',
  fontFamily = 'Montserrat',
  textColor = '#0f172a',
  imageZoom = 100,
  imagePositionY = 0,
  isMagicHot = false,
  setIsMagicHot
}) {
  const mountRef = useRef(null);
  const [autoRotate, setAutoRotate] = useState(true);
  const [lightingMode, setLightingMode] = useState('day');
  const [heatProgress, setHeatProgress] = useState(isMagicHot ? 1 : 0);

  // References for three.js objects
  const sceneRef = useRef(null);
  const rendererRef = useRef(null);
  const mugGroupRef = useRef(null);
  const decalTextureRef = useRef(null);
  const innerMatRef = useRef(null);
  const outerMatRef = useRef(null);
  const magicMatRef = useRef(null);
  const isDraggingRef = useRef(false);
  const previousPointerPos = useRef({ x: 0, y: 0 });

  // Handle thermal transition animation
  useEffect(() => {
    let animId;
    const target = isMagicHot ? 1 : 0;
    const step = () => {
      setHeatProgress((prev) => {
        const diff = target - prev;
        if (Math.abs(diff) < 0.02) return target;
        return prev + diff * 0.08;
      });
      if (Math.abs(target - heatProgress) > 0.01) {
        animId = requestAnimationFrame(step);
      }
    };
    animId = requestAnimationFrame(step);
    return () => cancelAnimationFrame(animId);
  }, [isMagicHot]);

  // Generate dynamic canvas texture from user photo, text and thermal mask
  const updateDecalTexture = () => {
    const canvas = document.createElement('canvas');
    canvas.width = 1024;
    canvas.height = 512;
    const ctx = canvas.getContext('2d');

    // Ceramic base background
    ctx.fillStyle = '#ffffff';
    ctx.fillRect(0, 0, 1024, 512);

    const drawArtwork = (img) => {
      ctx.save();
      // Draw centered printable area (representing printable wrap)
      const printX = 256;
      const printY = 64;
      const printW = 512;
      const printH = 384;

      // Rounded photo mask
      ctx.beginPath();
      ctx.roundRect(printX, printY, printW, printH, 24);
      ctx.clip();

      if (img) {
        const zoomScale = (imageZoom / 100);
        const offsetY = (imagePositionY / 100) * (printH * 0.3);
        const sw = printW * zoomScale;
        const sh = printH * zoomScale;
        const sx = printX + (printW - sw) / 2;
        const sy = printY + (printH - sh) / 2 + offsetY;
        ctx.drawImage(img, sx, sy, sw, sh);
      } else {
        // High quality placeholder gradient
        const grad = ctx.createLinearGradient(printX, printY, printX + printW, printY + printH);
        grad.addColorStop(0, '#f43f5e');
        grad.addColorStop(0.5, '#a855f7');
        grad.addColorStop(1, '#0284c7');
        ctx.fillStyle = grad;
        ctx.fillRect(printX, printY, printW, printH);
      }

      // Custom user text overlay
      if (customText) {
        ctx.restore();
        ctx.save();
        ctx.font = `bold 36px ${fontFamily}, sans-serif`;
        ctx.fillStyle = textColor;
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.shadowColor = 'rgba(0,0,0,0.4)';
        ctx.shadowBlur = 6;
        ctx.fillText(customText, 512, 410);
      }
      ctx.restore();

      // If Magic Mug, apply thermal coat based on heatProgress
      if (selectedVariantId === 'magic') {
        ctx.save();
        const coldOpacity = Math.max(0, 1 - heatProgress);
        if (coldOpacity > 0.01) {
          ctx.fillStyle = `rgba(15, 23, 42, ${coldOpacity * 0.96})`;
          ctx.fillRect(240, 50, 544, 412);

          // Subtle thermal indicator text when cold
          if (coldOpacity > 0.6) {
            ctx.fillStyle = `rgba(255, 255, 255, ${(coldOpacity - 0.5) * 1.5})`;
            ctx.font = 'bold 20px sans-serif';
            ctx.textAlign = 'center';
            ctx.fillText('☕ Pour Hot Drink to Reveal Photo', 512, 256);
          }
        }
        ctx.restore();
      }

      if (decalTextureRef.current) {
        decalTextureRef.current.image = canvas;
        decalTextureRef.current.needsUpdate = true;
      }
    };

    if (sampleDisplayImage) {
      const img = new Image();
      img.crossOrigin = 'anonymous';
      img.onload = () => drawArtwork(img);
      img.onerror = () => drawArtwork(null);
      img.src = sampleDisplayImage;
    } else {
      drawArtwork(null);
    }

    return new THREE.CanvasTexture(canvas);
  };

  useEffect(() => {
    if (!mountRef.current) return;
    const container = mountRef.current;
    const width = container.clientWidth || 380;
    const height = container.clientHeight || 380;

    // 1. Scene & Camera setup (threejs-scene quality standards)
    const scene = new THREE.Scene();
    sceneRef.current = scene;

    const camera = new THREE.PerspectiveCamera(40, width / height, 0.1, 50);
    camera.position.set(0, 0.6, 2.6);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true, powerPreference: 'high-performance' });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.1;
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    rendererRef.current = renderer;
    container.innerHTML = '';
    container.appendChild(renderer.domElement);

    // 2. Lighting setup (Day Studio vs Night Ambiance)
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.8);
    scene.add(ambientLight);

    const keyLight = new THREE.DirectionalLight(0xfff7ed, 1.4);
    keyLight.position.set(2, 3, 2.5);
    keyLight.castShadow = true;
    keyLight.shadow.mapSize.width = 1024;
    keyLight.shadow.mapSize.height = 1024;
    scene.add(keyLight);

    const fillLight = new THREE.DirectionalLight(0xe0f2fe, 0.7);
    fillLight.position.set(-2.5, 1.5, 1);
    scene.add(fillLight);

    const rimLight = new THREE.DirectionalLight(0xffe4e6, 0.8);
    rimLight.position.set(0, 2, -2.5);
    scene.add(rimLight);

    // 3. Procedural 3D Ceramic Mug Construction
    const mugGroup = new THREE.Group();
    mugGroupRef.current = mugGroup;
    scene.add(mugGroup);

    // Texture & Materials
    const decalTex = updateDecalTexture();
    decalTex.colorSpace = THREE.SRGBColorSpace;
    decalTextureRef.current = decalTex;

    const isInnerColored = selectedVariantId === 'inner-colour';
    const isMagic = selectedVariantId === 'magic';

    const outerMat = new THREE.MeshPhysicalMaterial({
      color: 0xffffff,
      map: decalTex,
      roughness: 0.12,
      metalness: 0.02,
      clearcoat: 0.9,
      clearcoatRoughness: 0.1,
      reflectivity: 0.7
    });
    outerMatRef.current = outerMat;

    const innerMat = new THREE.MeshPhysicalMaterial({
      color: new THREE.Color(isInnerColored ? innerColorHex : (isMagic && !isMagicHot ? '#1e293b' : '#ffffff')),
      roughness: 0.15,
      metalness: 0.02,
      clearcoat: 0.8
    });
    innerMatRef.current = innerMat;

    const baseCeramicMat = new THREE.MeshPhysicalMaterial({
      color: isInnerColored ? new THREE.Color(innerColorHex) : 0xffffff,
      roughness: 0.15,
      metalness: 0.02,
      clearcoat: 0.8
    });

    // A. Outer Cylinder Shell
    const outerGeo = new THREE.CylinderGeometry(0.48, 0.46, 1.05, 48, 1, true);
    const outerMesh = new THREE.Mesh(outerGeo, outerMat);
    outerMesh.castShadow = true;
    outerMesh.receiveShadow = true;
    mugGroup.add(outerMesh);

    // B. Inner Hollow Cylinder
    const innerGeo = new THREE.CylinderGeometry(0.44, 0.42, 1.02, 48, 1, true);
    const innerMesh = new THREE.Mesh(innerGeo, innerMat);
    innerMesh.scale.set(1, 1, -1); // invert normals for interior
    mugGroup.add(innerMesh);

    // C. Top Rim Lip (Smooth Curved Torus Rim)
    const rimGeo = new THREE.TorusGeometry(0.46, 0.022, 16, 48);
    rimGeo.rotateX(Math.PI / 2);
    rimGeo.translate(0, 0.525, 0);
    const rimMesh = new THREE.Mesh(rimGeo, isInnerColored ? innerMat : outerMat);
    mugGroup.add(rimMesh);

    // D. Bottom Base Plate
    const bottomGeo = new THREE.CylinderGeometry(0.46, 0.46, 0.04, 48);
    bottomGeo.translate(0, -0.51, 0);
    const bottomMesh = new THREE.Mesh(bottomGeo, baseCeramicMat);
    bottomMesh.receiveShadow = true;
    mugGroup.add(bottomMesh);

    // E. Ergonomic Ceramic Handle (Classic C-Handle or Heart-Handle)
    if (selectedVariantId === 'heart-handle') {
      // Heart shaped handle curve
      const heartShape = new THREE.Shape();
      heartShape.moveTo(0, 0);
      heartShape.bezierCurveTo(0.1, 0.2, 0.35, 0.3, 0.35, 0);
      heartShape.bezierCurveTo(0.35, -0.2, 0.15, -0.3, 0, -0.4);

      const handleGeo = new THREE.TorusGeometry(0.28, 0.05, 16, 36, Math.PI * 1.3);
      handleGeo.rotateZ(-Math.PI / 2);
      handleGeo.translate(0.58, 0.02, 0);
      const handleMesh = new THREE.Mesh(handleGeo, isInnerColored ? innerMat : outerMat);
      handleMesh.castShadow = true;
      mugGroup.add(handleMesh);
    } else {
      // Classic ergonomic C-handle
      const handleCurve = new THREE.CurvePath();
      const p1 = new THREE.Vector3(0.45, 0.32, 0);
      const p2 = new THREE.Vector3(0.82, 0.22, 0);
      const p3 = new THREE.Vector3(0.82, -0.22, 0);
      const p4 = new THREE.Vector3(0.45, -0.32, 0);
      const curve = new THREE.CubicBezierCurve3(p1, p2, p3, p4);
      const handleGeo = new THREE.TubeGeometry(curve, 32, 0.052, 16, false);
      const handleMesh = new THREE.Mesh(handleGeo, isInnerColored ? innerMat : outerMat);
      handleMesh.castShadow = true;
      mugGroup.add(handleMesh);
    }

    // F. Studio Pedestal Shadow Disc
    const shadowGeo = new THREE.PlaneGeometry(1.6, 1.6);
    shadowGeo.rotateX(-Math.PI / 2);
    shadowGeo.translate(0, -0.54, 0);
    const shadowCanvas = document.createElement('canvas');
    shadowCanvas.width = 128;
    shadowCanvas.height = 128;
    const sCtx = shadowCanvas.getContext('2d');
    const radGrad = sCtx.createRadialGradient(64, 64, 10, 64, 64, 64);
    radGrad.addColorStop(0, 'rgba(0, 0, 0, 0.25)');
    radGrad.addColorStop(0.5, 'rgba(0, 0, 0, 0.08)');
    radGrad.addColorStop(1, 'rgba(0, 0, 0, 0)');
    sCtx.fillStyle = radGrad;
    sCtx.fillRect(0, 0, 128, 128);
    const shadowTex = new THREE.CanvasTexture(shadowCanvas);
    const shadowMat = new THREE.MeshBasicMaterial({ map: shadowTex, transparent: true });
    const shadowMesh = new THREE.Mesh(shadowGeo, shadowMat);
    scene.add(shadowMesh);

    // Initial slight angle
    mugGroup.rotation.y = 0.6;
    mugGroup.rotation.x = 0.08;

    // 4. Interactive Drag / Orbit Controls
    const onPointerDown = (e) => {
      isDraggingRef.current = true;
      setAutoRotate(false);
      previousPointerPos.current = { x: e.clientX, y: e.clientY };
    };

    const onPointerMove = (e) => {
      if (!isDraggingRef.current || !mugGroupRef.current) return;
      const deltaX = e.clientX - previousPointerPos.current.x;
      const deltaY = e.clientY - previousPointerPos.current.y;
      mugGroupRef.current.rotation.y += deltaX * 0.01;
      mugGroupRef.current.rotation.x = THREE.MathUtils.clamp(
        mugGroupRef.current.rotation.x + deltaY * 0.008,
        -0.4,
        0.5
      );
      previousPointerPos.current = { x: e.clientX, y: e.clientY };
    };

    const onPointerUp = () => {
      isDraggingRef.current = false;
    };

    const dom = renderer.domElement;
    dom.addEventListener('pointerdown', onPointerDown);
    window.addEventListener('pointermove', onPointerMove);
    window.addEventListener('pointerup', onPointerUp);

    // 5. Animation loop (60 fps)
    let reqId;
    const animate = () => {
      reqId = requestAnimationFrame(animate);
      if (autoRotate && !isDraggingRef.current && mugGroupRef.current) {
        mugGroupRef.current.rotation.y += 0.005;
      }
      renderer.render(scene, camera);
    };
    animate();

    return () => {
      cancelAnimationFrame(reqId);
      dom.removeEventListener('pointerdown', onPointerDown);
      window.removeEventListener('pointermove', onPointerMove);
      window.removeEventListener('pointerup', onPointerUp);
      renderer.dispose();
      outerGeo.dispose();
      innerGeo.dispose();
    };
  }, [selectedVariantId, innerColorHex]);

  // Update canvas decal texture whenever props change
  useEffect(() => {
    updateDecalTexture();
  }, [sampleDisplayImage, customText, fontFamily, textColor, imageZoom, imagePositionY, heatProgress, selectedVariantId]);

  return (
    <div className="relative w-full aspect-square max-w-[420px] mx-auto rounded-3xl overflow-hidden select-none bg-gradient-to-b from-slate-100/90 via-white to-slate-200/80 border-2 border-slate-200/90 shadow-[0_20px_50px_-15px_rgba(0,0,0,0.08)] flex flex-col justify-between p-3 sm:p-4">
      {/* Top 3D Control Badges */}
      <div className="flex items-center justify-between z-10 w-full pointer-events-auto">
        <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/95 backdrop-blur-md border border-slate-200/80 shadow-xs">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          <span className="text-[10px] font-black uppercase tracking-wider text-slate-800">
            Real 3D WebGL Studio
          </span>
        </div>

        <div className="flex items-center gap-1">
          <button
            type="button"
            onClick={() => setAutoRotate(!autoRotate)}
            className={`p-1.5 rounded-lg border text-xs transition-all ${
              autoRotate ? 'bg-rose-50 text-rose-600 border-rose-200 shadow-xs' : 'bg-white/90 text-slate-600 border-slate-200 hover:bg-slate-50'
            }`}
            title="Toggle 360° Auto-Spin"
          >
            <RotateCw className="w-3.5 h-3.5" />
          </button>

          {selectedVariantId === 'magic' && (
            <button
              type="button"
              onClick={() => setIsMagicHot && setIsMagicHot(!isMagicHot)}
              className={`flex items-center gap-1 px-2.5 py-1 rounded-lg border text-[11px] font-black transition-all ${
                isMagicHot
                  ? 'bg-gradient-to-r from-amber-500 to-rose-600 text-white border-transparent shadow-sm shadow-rose-500/30'
                  : 'bg-white/95 text-slate-800 border-slate-200 hover:border-amber-400'
              }`}
            >
              <Flame className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
              <span>{isMagicHot ? 'Cold Reset' : 'Pour Hot Coffee'}</span>
            </button>
          )}
        </div>
      </div>

      {/* Interactive 3D Three.js Mount Canvas */}
      <div
        ref={mountRef}
        className="w-full h-full cursor-grab active:cursor-grabbing flex items-center justify-center -my-2"
        title="Click & Drag to rotate in full 3D"
      />

      {/* Bottom Interactive 3D Instructions */}
      <div className="flex items-center justify-between z-10 w-full text-[10px] text-slate-400 font-semibold px-1">
        <span className="flex items-center gap-1 text-slate-500">
          <Sparkles className="w-3 h-3 text-rose-500" />
          <span>360° Drag & Orbit</span>
        </span>
        <span className="font-mono text-[9px] uppercase tracking-wider text-slate-400">
          Procedural Ceramic Glaze • 60 FPS
        </span>
      </div>
    </div>
  );
}
