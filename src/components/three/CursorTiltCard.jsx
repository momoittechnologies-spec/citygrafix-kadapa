import React, { useState, useRef, useEffect } from 'react';

/**
 * Spring-Damped Cursor Rig Component (adapted from open-3d-skills/cursor-rig)
 * Gives cards and elements tactile 3D perspective tilt, specular surface sheen,
 * and cursor-following depth.
 */
export default function CursorTiltCard({
  children,
  className = '',
  maxTilt = 10,
  perspective = 1000,
  glare = true
}) {
  const cardRef = useRef(null);
  const [transform, setTransform] = useState({ rotateX: 0, rotateY: 0, glareX: 50, glareY: 50, opacity: 0 });
  const springRef = useRef({ curX: 0, curY: 0, targetX: 0, targetY: 0 });

  useEffect(() => {
    let animId;
    const updateSpring = () => {
      const s = springRef.current;
      // Spring dampening physics (lerp 0.12)
      s.curX += (s.targetX - s.curX) * 0.12;
      s.curY += (s.targetY - s.curY) * 0.12;

      setTransform((prev) => ({
        ...prev,
        rotateX: -s.curY,
        rotateY: s.curX
      }));

      if (Math.abs(s.targetX - s.curX) > 0.01 || Math.abs(s.targetY - s.curY) > 0.01) {
        animId = requestAnimationFrame(updateSpring);
      }
    };

    animId = requestAnimationFrame(updateSpring);
    return () => cancelAnimationFrame(animId);
  }, []);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const normX = (x / rect.width) * 2 - 1; // -1 to 1
    const normY = (y / rect.height) * 2 - 1;

    springRef.current.targetX = normX * maxTilt;
    springRef.current.targetY = normY * maxTilt;

    setTransform((prev) => ({
      ...prev,
      glareX: (x / rect.width) * 100,
      glareY: (y / rect.height) * 100,
      opacity: 0.15
    }));
  };

  const handleMouseLeave = () => {
    springRef.current.targetX = 0;
    springRef.current.targetY = 0;
    setTransform((prev) => ({ ...prev, opacity: 0 }));
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`relative transition-shadow duration-300 ${className}`}
      style={{
        perspective: `${perspective}px`,
        transformStyle: 'preserve-3d'
      }}
    >
      <div
        className="w-full h-full transition-transform duration-75 ease-out"
        style={{
          transform: `rotateX(${transform.rotateX.toFixed(2)}deg) rotateY(${transform.rotateY.toFixed(2)}deg) translateZ(0)`
        }}
      >
        {children}

        {/* Dynamic Glare Sheen Layer */}
        {glare && (
          <div
            className="absolute inset-0 pointer-events-none rounded-[inherit] transition-opacity duration-300"
            style={{
              background: `radial-gradient(circle at ${transform.glareX}% ${transform.glareY}%, rgba(255,255,255,0.7) 0%, rgba(255,255,255,0) 65%)`,
              opacity: transform.opacity
            }}
          />
        )}
      </div>
    </div>
  );
}
