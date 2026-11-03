import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { Exploder, Labels, Xray } from './explodeEngine';
import { Layers, Lightbulb, Eye, RotateCw, Sparkles, Check, Sliders } from 'lucide-react';

export default function ThreeSignageExploder({
  initialExplode = 0.35,
  showControls = true,
  acrylicColor = '#e11d48',
  letterText = 'CG'
}) {
  const containerRef = useRef(null);
  const mountRef = useRef(null);
  const labelsContainerRef = useRef(null);

  const [explodeProgress, setExplodeProgress] = useState(initialExplode);
  const [isXrayOn, setIsXrayOn] = useState(false);
  const [isLedOn, setIsLedOn] = useState(true);
  const [autoRotate, setAutoRotate] = useState(true);

  // References
  const exploderRef = useRef(null);
  const labelsRef = useRef(null);
  const xrayRef = useRef(null);
  const signGroupRef = useRef(null);
  const ledLightsRef = useRef([]);
  const ledMatsRef = useRef([]);
  const acrylicMatRef = useRef(null);
  const isDraggingRef = useRef(false);
  const previousPointerPos = useRef({ x: 0, y: 0 });

  useEffect(() => {
    if (!mountRef.current || !labelsContainerRef.current) return;
    const container = mountRef.current;
    const width = container.clientWidth || 400;
    const height = container.clientHeight || 400;

    // 1. Scene, Camera & Renderer
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(42, width / height, 0.1, 50);
    camera.position.set(0.6, 0.4, 2.8);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true, powerPreference: 'high-performance' });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.15;
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    container.innerHTML = '';
    container.appendChild(renderer.domElement);

    // 2. Studio Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.85);
    scene.add(ambientLight);

    const keyLight = new THREE.DirectionalLight(0xfff5ea, 1.3);
    keyLight.position.set(2.5, 3.5, 2.5);
    keyLight.castShadow = true;
    scene.add(keyLight);

    const fillLight = new THREE.DirectionalLight(0xe2e8f0, 0.8);
    fillLight.position.set(-2.5, 1.5, 1.5);
    scene.add(fillLight);

    // 3. Assemble 3D Signage Assembly Group
    const signGroup = new THREE.Group();
    signGroupRef.current = signGroup;
    scene.add(signGroup);

    // Shape generator for channel letter (C & G stylized architectural glyphs)
    const createLetterShapes = () => {
      const shapes = [];

      // Stylized 'C' channel profile
      const shapeC = new THREE.Shape();
      shapeC.absarc(-0.35, 0, 0.42, 0.8, Math.PI * 2 - 0.8, false);
      const holeC = new THREE.Path();
      holeC.absarc(-0.35, 0, 0.26, 0.8, Math.PI * 2 - 0.8, true);
      shapeC.holes.push(holeC);
      shapes.push({ shape: shapeC, pos: [-0.05, 0, 0] });

      // Stylized 'G' channel profile
      const shapeG = new THREE.Shape();
      shapeG.absarc(0.38, 0, 0.42, 0.7, Math.PI * 2 - 0.5, false);
      shapeG.lineTo(0.38, 0);
      shapeG.lineTo(0.55, 0);
      shapeG.lineTo(0.55, -0.2);
      const holeG = new THREE.Path();
      holeG.absarc(0.38, 0, 0.26, 0.7, Math.PI * 2 - 0.5, true);
      shapeG.holes.push(holeG);
      shapes.push({ shape: shapeG, pos: [0.05, 0, 0] });

      return shapes;
    };

    const letterShapes = createLetterShapes();

    // ----------------------------------------------------
    // PART 1: FRONT CAST ACRYLIC FACE (Stage 0: Explodes Forward)
    // ----------------------------------------------------
    const acrylicGroup = new THREE.Group();
    acrylicGroup.userData = {
      shell: true,
      stage: 0,
      explode: [0, 0, 0.55]
    };

    const acrylicMat = new THREE.MeshPhysicalMaterial({
      color: new THREE.Color(acrylicColor),
      emissive: new THREE.Color(acrylicColor),
      emissiveIntensity: isLedOn ? 0.45 : 0.0,
      roughness: 0.1,
      metalness: 0.05,
      transmission: 0.65,
      thickness: 0.12,
      clearcoat: 1.0,
      clearcoatRoughness: 0.08,
      transparent: true,
      opacity: 0.95
    });
    acrylicMatRef.current = acrylicMat;

    letterShapes.forEach(({ shape, pos }) => {
      const geo = new THREE.ExtrudeGeometry(shape, {
        depth: 0.04,
        bevelEnabled: true,
        bevelSegments: 4,
        steps: 1,
        bevelSize: 0.015,
        bevelThickness: 0.015
      });
      const mesh = new THREE.Mesh(geo, acrylicMat);
      mesh.position.set(pos[0], pos[1], 0.12);
      mesh.castShadow = true;
      acrylicGroup.add(mesh);
    });
    signGroup.add(acrylicGroup);

    // ----------------------------------------------------
    // PART 2: HIGH-LUMEN IP68 LED MODULES (Stage 1: Slides Mid-Forward)
    // ----------------------------------------------------
    const ledGroup = new THREE.Group();
    ledGroup.userData = {
      stage: 1,
      explode: [0, 0, 0.28]
    };

    const ledBodyMat = new THREE.MeshStandardMaterial({ color: 0xe2e8f0, roughness: 0.4, metalness: 0.8 });
    const ledDiodeMat = new THREE.MeshStandardMaterial({
      color: 0xffffff,
      emissive: new THREE.Color(acrylicColor),
      emissiveIntensity: isLedOn ? 2.5 : 0.0
    });
    ledMatsRef.current.push(ledDiodeMat);

    // Add array of LED module pucks along letter tracks
    const ledPositions = [
      [-0.6, 0.25, 0.04], [-0.7, 0, 0.04], [-0.6, -0.25, 0.04], [-0.35, -0.32, 0.04], [-0.35, 0.32, 0.04],
      [0.18, 0.25, 0.04], [0.12, 0, 0.04], [0.18, -0.25, 0.04], [0.45, -0.32, 0.04], [0.45, 0.32, 0.04], [0.48, 0, 0.04]
    ];

    const pointLights = [];
    ledPositions.forEach((pos, idx) => {
      const puckGeo = new THREE.BoxGeometry(0.065, 0.065, 0.025);
      const puck = new THREE.Mesh(puckGeo, ledBodyMat);
      puck.position.set(...pos);

      const diodeGeo = new THREE.CylinderGeometry(0.02, 0.02, 0.01, 12);
      diodeGeo.rotateX(Math.PI / 2);
      diodeGeo.translate(0, 0, 0.015);
      const diode = new THREE.Mesh(diodeGeo, ledDiodeMat);
      puck.add(diode);
      ledGroup.add(puck);

      // Point light for nighttime neon glow
      if (idx % 3 === 0) {
        const pLight = new THREE.PointLight(new THREE.Color(acrylicColor), isLedOn ? 1.2 : 0, 1.2);
        pLight.position.set(pos[0], pos[1], pos[2] + 0.05);
        ledGroup.add(pLight);
        pointLights.push(pLight);
      }
    });
    ledLightsRef.current = pointLights;

    // Realistic electrical wiring harness
    const wireMat = new THREE.MeshBasicMaterial({ color: 0xef4444 });
    const wireGeo = new THREE.CylinderGeometry(0.005, 0.005, 1.1, 8);
    wireGeo.rotateZ(Math.PI / 2);
    wireGeo.translate(-0.1, 0, 0.02);
    const wire = new THREE.Mesh(wireGeo, wireMat);
    ledGroup.add(wire);

    signGroup.add(ledGroup);

    // ----------------------------------------------------
    // PART 3: CNC ALUMINUM RETURN SIDE WALLS (Stage 2: Stays at Origin)
    // ----------------------------------------------------
    const returnGroup = new THREE.Group();
    returnGroup.userData = {
      stage: 2,
      explode: [0, 0, 0]
    };

    const aluminumMat = new THREE.MeshStandardMaterial({
      color: 0x1e293b,
      roughness: 0.35,
      metalness: 0.85
    });

    letterShapes.forEach(({ shape, pos }) => {
      const geo = new THREE.ExtrudeGeometry(shape, {
        depth: 0.14,
        bevelEnabled: false
      });
      const mesh = new THREE.Mesh(geo, aluminumMat);
      mesh.position.set(pos[0], pos[1], -0.04);
      mesh.castShadow = true;
      mesh.receiveShadow = true;
      returnGroup.add(mesh);
    });
    signGroup.add(returnGroup);

    // ----------------------------------------------------
    // PART 4: HIGH-DENSITY ACP BACKING PLATE (Stage 3: Explodes Backward)
    // ----------------------------------------------------
    const backplateGroup = new THREE.Group();
    backplateGroup.userData = {
      stage: 3,
      explode: [0, 0, -0.42]
    };

    const acpMat = new THREE.MeshStandardMaterial({
      color: 0x334155,
      roughness: 0.5,
      metalness: 0.6
    });

    letterShapes.forEach(({ shape, pos }) => {
      const geo = new THREE.ExtrudeGeometry(shape, {
        depth: 0.02,
        bevelEnabled: true,
        bevelSize: 0.01,
        bevelThickness: 0.01
      });
      const mesh = new THREE.Mesh(geo, acpMat);
      mesh.position.set(pos[0], pos[1], -0.07);
      mesh.receiveShadow = true;
      backplateGroup.add(mesh);
    });

    // Wall mounting stand-off studs
    const studMat = new THREE.MeshStandardMaterial({ color: 0x94a3b8, metalness: 0.9, roughness: 0.2 });
    const studPositions = [[-0.6, 0.25, -0.12], [-0.6, -0.25, -0.12], [0.55, 0.25, -0.12], [0.55, -0.25, -0.12]];
    studPositions.forEach((pos) => {
      const studGeo = new THREE.CylinderGeometry(0.018, 0.018, 0.08, 16);
      studGeo.rotateX(Math.PI / 2);
      const stud = new THREE.Mesh(studGeo, studMat);
      stud.position.set(...pos);
      backplateGroup.add(stud);
    });

    signGroup.add(backplateGroup);

    // 4. Initialize open-3d-skills Exploder, Labels & Xray
    const exploder = new Exploder(signGroup);
    exploderRef.current = exploder;
    exploder.set(explodeProgress);

    const xray = new Xray(signGroup);
    xrayRef.current = xray;

    // Leader Line Labels (anchored to 3D parts)
    const labels = new Labels(labelsContainerRef.current, camera, renderer.domElement, { margin: 12, gap: 6 });
    labelsRef.current = labels;

    labels.add(acrylicGroup, 'Cast Acrylic Face (3mm)', {
      anchor: [-0.4, 0.35, 0.15],
      note: '92% Light Diffusion • UV-Proof',
      spec: 'CNC Laser-Cut • 3-Year Warranty'
    });

    labels.add(ledGroup, 'Samsung IP68 LED Modules', {
      anchor: [-0.2, 0.1, 0.06],
      note: '1.2W / 140° Lens • Waterproof',
      spec: '50,000 Hrs Rated Life'
    });

    labels.add(returnGroup, 'Aluminum Return Wall', {
      anchor: [0.35, -0.3, 0.05],
      note: '2.5" Depth Channel Returns',
      spec: 'Matte Powder-Coated'
    });

    labels.add(backplateGroup, 'ACP Backplate + Studs', {
      anchor: [0.6, 0.15, -0.1],
      note: 'High-Density Structural Base',
      spec: 'Stainless Steel Wall Studs'
    });

    // 5. Studio Pedestal Contact Shadow Disc
    const shadowGeo = new THREE.PlaneGeometry(2.4, 2.4);
    shadowGeo.rotateX(-Math.PI / 2);
    shadowGeo.translate(0, -0.65, 0);
    const shadowCanvas = document.createElement('canvas');
    shadowCanvas.width = 128;
    shadowCanvas.height = 128;
    const sCtx = shadowCanvas.getContext('2d');
    const radGrad = sCtx.createRadialGradient(64, 64, 15, 64, 64, 64);
    radGrad.addColorStop(0, 'rgba(0, 0, 0, 0.22)');
    radGrad.addColorStop(0.5, 'rgba(0, 0, 0, 0.06)');
    radGrad.addColorStop(1, 'rgba(0, 0, 0, 0)');
    sCtx.fillStyle = radGrad;
    sCtx.fillRect(0, 0, 128, 128);
    const shadowTex = new THREE.CanvasTexture(shadowCanvas);
    const shadowMat = new THREE.MeshBasicMaterial({ map: shadowTex, transparent: true });
    const shadowMesh = new THREE.Mesh(shadowGeo, shadowMat);
    scene.add(shadowMesh);

    // Initial angle
    signGroup.rotation.y = -0.45;
    signGroup.rotation.x = 0.12;

    // 6. Interactive Drag Controls
    const onPointerDown = (e) => {
      isDraggingRef.current = true;
      setAutoRotate(false);
      previousPointerPos.current = { x: e.clientX, y: e.clientY };
    };

    const onPointerMove = (e) => {
      if (!isDraggingRef.current || !signGroupRef.current) return;
      const deltaX = e.clientX - previousPointerPos.current.x;
      const deltaY = e.clientY - previousPointerPos.current.y;
      signGroupRef.current.rotation.y += deltaX * 0.01;
      signGroupRef.current.rotation.x = THREE.MathUtils.clamp(
        signGroupRef.current.rotation.x + deltaY * 0.008,
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

    // 7. Animation Loop
    let reqId;
    const animate = () => {
      reqId = requestAnimationFrame(animate);
      if (autoRotate && !isDraggingRef.current && signGroupRef.current) {
        signGroupRef.current.rotation.y += 0.004;
      }
      renderer.render(scene, camera);
      labels.update();
    };
    animate();

    return () => {
      cancelAnimationFrame(reqId);
      dom.removeEventListener('pointerdown', onPointerDown);
      window.removeEventListener('pointermove', onPointerMove);
      window.removeEventListener('pointerup', onPointerUp);
      labels.destroy();
      renderer.dispose();
    };
  }, [acrylicColor]);

  // Handle Explode Slider Updates
  const handleExplodeChange = (e) => {
    const val = parseFloat(e.target.value);
    setExplodeProgress(val);
    if (exploderRef.current) {
      exploderRef.current.set(val);
    }
  };

  // Handle X-Ray Mode Toggle
  const toggleXray = () => {
    const next = !isXrayOn;
    setIsXrayOn(next);
    if (xrayRef.current) {
      xrayRef.current.set(next, 0.18);
    }
  };

  // Handle LED Light Toggle
  const toggleLed = () => {
    const next = !isLedOn;
    setIsLedOn(next);
    if (acrylicMatRef.current) {
      acrylicMatRef.current.emissiveIntensity = next ? 0.45 : 0.0;
    }
    ledMatsRef.current.forEach((m) => {
      m.emissiveIntensity = next ? 2.5 : 0.0;
    });
    ledLightsRef.current.forEach((l) => {
      l.intensity = next ? 1.2 : 0;
    });
  };

  return (
    <div
      ref={containerRef}
      className="relative w-full aspect-square max-w-[520px] mx-auto rounded-3xl overflow-hidden select-none bg-gradient-to-b from-slate-100/90 via-white to-slate-200/80 border-2 border-slate-200/90 shadow-[0_20px_50px_-15px_rgba(0,0,0,0.08)] flex flex-col justify-between p-3 sm:p-5"
    >
      {/* Top Header Controls Bar */}
      <div className="flex items-center justify-between z-30 w-full">
        <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/95 backdrop-blur-md border border-slate-200/80 shadow-xs">
          <span className="w-2 h-2 rounded-full bg-rose-500 animate-pulse" />
          <span className="text-[10px] sm:text-xs font-black uppercase tracking-wider text-slate-800">
            3D Exploded Signage Inspector
          </span>
        </div>

        <div className="flex items-center gap-1.5">
          <button
            type="button"
            onClick={toggleLed}
            className={`flex items-center gap-1 px-2.5 py-1 rounded-lg border text-xs font-bold transition-all ${
              isLedOn
                ? 'bg-amber-50 text-amber-700 border-amber-300 shadow-xs'
                : 'bg-white/90 text-slate-600 border-slate-200 hover:bg-slate-50'
            }`}
            title="Toggle Internal LED Module Illumination"
          >
            <Lightbulb className={`w-3.5 h-3.5 ${isLedOn ? 'fill-amber-400 text-amber-500' : ''}`} />
            <span className="hidden sm:inline">LED Glow</span>
          </button>

          <button
            type="button"
            onClick={toggleXray}
            className={`flex items-center gap-1 px-2.5 py-1 rounded-lg border text-xs font-bold transition-all ${
              isXrayOn
                ? 'bg-sky-50 text-sky-700 border-sky-300 shadow-xs'
                : 'bg-white/90 text-slate-600 border-slate-200 hover:bg-slate-50'
            }`}
            title="Toggle X-Ray Acrylic Shell Transparency"
          >
            <Eye className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">X-Ray</span>
          </button>

          <button
            type="button"
            onClick={() => setAutoRotate(!autoRotate)}
            className={`p-1.5 rounded-lg border text-xs transition-all ${
              autoRotate ? 'bg-rose-50 text-rose-600 border-rose-200 shadow-xs' : 'bg-white/90 text-slate-600 border-slate-200 hover:bg-slate-50'
            }`}
            title="Toggle Auto-Spin"
          >
            <RotateCw className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {/* Mount Canvas & SVG Leader Lines Layer */}
      <div className="relative w-full h-full flex items-center justify-center -my-3">
        <div
          ref={mountRef}
          className="w-full h-full cursor-grab active:cursor-grabbing flex items-center justify-center"
          title="Drag to orbit in 3D"
        />
        {/* Dynamic Leader Line Labels Container (open-3d-skills Labels) */}
        <div
          ref={labelsContainerRef}
          className="absolute inset-0 pointer-events-none overflow-hidden z-20"
        />
      </div>

      {/* Bottom Explode Slider & Architecture Specs */}
      <div className="z-30 w-full space-y-2.5 bg-white/90 backdrop-blur-md p-3 rounded-2xl border border-slate-200/80 shadow-xs">
        <div className="flex items-center justify-between text-xs font-black text-slate-800">
          <div className="flex items-center gap-1.5">
            <Sliders className="w-3.5 h-3.5 text-rose-600" />
            <span>Explode Assembly:</span>
            <span className="text-rose-600 font-mono text-[11px]">{Math.round(explodeProgress * 100)}%</span>
          </div>
          <span className="text-[10px] font-bold text-slate-400">
            {explodeProgress > 0.05 ? 'Staged Engineering View' : 'Assembled Storefront View'}
          </span>
        </div>

        {/* Range Slider */}
        <input
          type="range"
          min="0"
          max="1"
          step="0.01"
          value={explodeProgress}
          onChange={handleExplodeChange}
          className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-rose-600 focus:outline-none"
        />

        <div className="flex items-center justify-between text-[10px] font-bold text-slate-500 pt-0.5">
          <span>0% Assembled</span>
          <span className="text-slate-400">• Drag slider to take letter apart •</span>
          <span>100% Exploded</span>
        </div>
      </div>
    </div>
  );
}
