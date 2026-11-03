// Ported and adapted from open-3d-skills (https://github.com/Moh4696/open-3d-skills)
// Skills: exploded-view & threejs-scene
import * as THREE from 'three';

const smooth = (t) => t * t * (3 - 2 * t);
const _v = new THREE.Vector3(), _b = new THREE.Box3();

/**
 * Staged 3D explosion manager for Three.js assemblies.
 * Supports per-part stages, custom explode offsets, and smooth easing.
 */
export class Exploder {
  constructor(root, { parts = null, axis = null, spread = 1, center = null } = {}) {
    this.root = root;
    this.parts = parts || [...root.children];
    root.updateMatrixWorld(true);
    const all = new THREE.Box3().setFromObject(root);
    const c = center ? new THREE.Vector3(...center) : all.getCenter(new THREE.Vector3());
    const size = all.getSize(new THREE.Vector3()).length();
    const stages = new Set();
    
    this.items = this.parts.map((p) => {
      const home = p.position.clone();
      let off;
      if (p.userData.explode) {
        off = new THREE.Vector3(...p.userData.explode);
      } else {
        const pc = _b.setFromObject(p).getCenter(_v).clone();
        const d = pc.sub(c);
        if (axis) d.copy(axis).multiplyScalar(d.dot(axis));
        off = d.lengthSq() < 1e-8 ? new THREE.Vector3(0, size * 0.25, 0) : d.multiplyScalar(spread * 1.2);
        if (p.parent) off.applyQuaternion(p.parent.getWorldQuaternion(new THREE.Quaternion()).invert());
      }
      const stage = p.userData.stage ?? 0;
      stages.add(stage);
      return { p, home, off, stage };
    });
    
    this.stages = [...stages].sort((a, b) => a - b);
    this.t = 0;
  }

  set(t) {
    this.t = THREE.MathUtils.clamp(t, 0, 1);
    const n = this.stages.length;
    const w = n > 1 ? 2 / (n + 1) : 1;
    for (const it of this.items) {
      const i = this.stages.indexOf(it.stage);
      const start = n > 1 ? (i * w) / 2 : 0;
      const k = smooth(THREE.MathUtils.clamp((this.t - start) / w, 0, 1));
      it.p.position.copy(it.home).addScaledVector(it.off, k);
    }
  }
}

/**
 * HTML Leader Line Labels pinned to 3D anchor points on meshes.
 * Dynamically repositions callout cards and renders SVG leader lines without obstructing the model.
 */
export class Labels {
  constructor(container, camera, canvas, { margin = 16, gap = 6 } = {}) {
    Object.assign(this, { container, camera, canvas, margin, gap, items: [] });
    container.style.pointerEvents = 'none';
    this.svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    Object.assign(this.svg.style, {
      position: 'absolute',
      inset: '0',
      width: '100%',
      height: '100%',
      overflow: 'visible',
      pointerEvents: 'none'
    });
    container.appendChild(this.svg);
  }

  add(object, text, { anchor = [0, 0, 0], note = '', spec = '' } = {}) {
    const el = document.createElement('div');
    el.className = 'label-card pointer-events-auto';
    el.innerHTML = `
      <div class="px-2.5 py-1.5 rounded-lg bg-white/95 backdrop-blur-md border border-slate-200/90 shadow-md text-left transition-all hover:scale-105 select-none">
        <div class="text-[11px] font-black text-slate-900 leading-tight">${text}</div>
        ${note ? `<div class="text-[9px] font-semibold text-rose-600 leading-tight mt-0.5">${note}</div>` : ''}
        ${spec ? `<div class="text-[8px] font-mono text-slate-500 leading-tight mt-0.5">${spec}</div>` : ''}
      </div>
    `;
    Object.assign(el.style, {
      position: 'absolute',
      left: '0',
      top: '0',
      whiteSpace: 'nowrap',
      zIndex: '20'
    });

    const line = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    line.setAttribute('stroke', '#e11d48'); // rose-600
    line.setAttribute('stroke-width', '1.5');
    line.setAttribute('fill', 'none');
    line.setAttribute('stroke-dasharray', '2 2');
    line.setAttribute('opacity', '0.7');

    this.container.appendChild(el);
    this.svg.appendChild(line);

    const item = { object, el, line, anchor: new THREE.Vector3(...anchor), focus: false };
    this.items.push(item);
    return item;
  }

  update() {
    if (!this.canvas) return;
    const r = this.canvas.getBoundingClientRect();
    const mid = r.width / 2;
    const shown = [];

    for (const it of this.items) {
      _v.copy(it.anchor);
      it.object.localToWorld(_v);
      _v.project(this.camera);
      const visible = it.object.visible && _v.z < 1 && Math.abs(_v.x) < 1.15 && Math.abs(_v.y) < 1.15;
      it.el.style.display = it.line.style.display = visible ? '' : 'none';
      if (!visible) continue;
      it.sx = (_v.x * 0.5 + 0.5) * r.width;
      it.sy = (-_v.y * 0.5 + 0.5) * r.height;
      it.h = it.el.offsetHeight || 30;
      it.w = it.el.offsetWidth || 110;
      shown.push(it);
    }

    // Two columns: Left & Right
    for (const left of [true, false]) {
      const col = shown.filter((it) => (it.sx < mid) === left).sort((a, b) => a.sy - b.sy);
      let y = this.margin;
      for (const it of col) {
        it.ly = Math.max(it.sy - it.h / 2, y);
        y = it.ly + it.h + this.gap;
      }
      const over = y - this.gap - (r.height - this.margin);
      if (over > 0) {
        for (const it of col) it.ly -= over;
      }
      for (const it of col) {
        const x = left ? this.margin : r.width - this.margin - it.w;
        it.el.style.transform = `translate(${x}px, ${it.ly}px)`;
        const ex = left ? x + it.w + 4 : x - 4;
        const ey = it.ly + it.h / 2;
        const bend = left ? ex + 14 : ex - 14;
        it.line.setAttribute('d', `M${ex},${ey} L${bend},${ey} L${it.sx},${it.sy}`);
      }
    }
  }

  destroy() {
    if (this.svg && this.svg.parentNode) {
      this.svg.parentNode.removeChild(this.svg);
    }
    for (const it of this.items) {
      if (it.el && it.el.parentNode) it.el.parentNode.removeChild(it.el);
    }
    this.items = [];
  }
}

/**
 * X-Ray Mode: Turns outer casings / shells into translucent glass
 */
export class Xray {
  constructor(root) {
    this.mats = [];
    root.traverse((o) => {
      if (!o.isMesh) return;
      let shell = false;
      for (let p = o; p; p = p.parent) {
        if (p.userData.shell) shell = true;
      }
      if (!shell) return;
      for (const m of [].concat(o.material)) {
        if (!this.mats.find((e) => e.m === m)) {
          this.mats.push({
            m,
            opacity: m.opacity,
            transparent: m.transparent,
            depthWrite: m.depthWrite
          });
        }
      }
    });
    this.on = false;
  }

  set(on, opacity = 0.22) {
    this.on = on;
    for (const e of this.mats) {
      e.m.transparent = on || e.transparent;
      e.m.opacity = on ? opacity : e.opacity;
      e.m.depthWrite = on ? false : e.depthWrite;
      e.m.needsUpdate = true;
    }
  }
}
