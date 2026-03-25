'use client';

import { useEffect, useRef, useState, useCallback } from 'react';

type Ripple = { id: number; x: number; y: number };

export default function CustomCursor() {
  const dotRef  = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const [visible,  setVisible]  = useState(false);
  const [clicking, setClicking] = useState(false);
  const [ripples,  setRipples]  = useState<Ripple[]>([]);
  const counter = useRef(0);

  const spawnRipple = useCallback((x: number, y: number) => {
    const id = counter.current++;
    setRipples(r => [...r, { id, x, y }]);
    setTimeout(() => setRipples(r => r.filter(rp => rp.id !== id)), 600);
  }, []);

  useEffect(() => {
    let dotX = 0, dotY = 0;
    let ringX = 0, ringY = 0;
    let raf: number;

    const onMove  = (e: MouseEvent) => { dotX = e.clientX; dotY = e.clientY; setVisible(true); };
    const onLeave = () => setVisible(false);
    const onEnter = () => setVisible(true);

    const onDown  = (e: MouseEvent) => {
      setClicking(true);
      spawnRipple(e.clientX, e.clientY);
    };
    const onUp = () => setClicking(false);

    const animate = () => {
      ringX += (dotX - ringX) * 0.12;
      ringY += (dotY - ringY) * 0.12;
      if (dotRef.current)  dotRef.current.style.transform  = `translate(${dotX}px, ${dotY}px)`;
      if (ringRef.current) ringRef.current.style.transform = `translate(${ringX}px, ${ringY}px)`;
      raf = requestAnimationFrame(animate);
    };

    window.addEventListener('mousemove',   onMove);
    document.addEventListener('mouseleave', onLeave);
    document.addEventListener('mouseenter', onEnter);
    window.addEventListener('mousedown',   onDown);
    window.addEventListener('mouseup',     onUp);
    raf = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('mousemove',   onMove);
      document.removeEventListener('mouseleave', onLeave);
      document.removeEventListener('mouseenter', onEnter);
      window.removeEventListener('mousedown',   onDown);
      window.removeEventListener('mouseup',     onUp);
      cancelAnimationFrame(raf);
    };
  }, [spawnRipple]);

  if (typeof window !== 'undefined' && window.matchMedia('(pointer: coarse)').matches) {
    return null;
  }

  return (
    <>
      {/* Click ripples */}
      {ripples.map(({ id, x, y }) => (
        <div
          key={id}
          className="pointer-events-none fixed left-0 top-0 z-[9998]"
          style={{ transform: `translate(${x}px, ${y}px)` }}
        >
          {/* Ring 1 */}
          <div
            className="absolute rounded-full border border-green-400"
            style={{
              width: 0, height: 0,
              marginLeft: 0, marginTop: 0,
              animation: 'ripple 0.6s ease-out forwards',
              boxShadow: '0 0 8px rgba(34,197,94,0.5)',
            }}
          />
          {/* Ring 2 — delayed */}
          <div
            className="absolute rounded-full border border-green-400/50"
            style={{
              width: 0, height: 0,
              marginLeft: 0, marginTop: 0,
              animation: 'ripple 0.6s ease-out 0.1s forwards',
            }}
          />
        </div>
      ))}

      {/* Outer ring — floats behind */}
      <div
        ref={ringRef}
        className="pointer-events-none fixed left-0 top-0 z-[9999] transition-opacity duration-300"
        style={{ opacity: visible ? 1 : 0 }}
      >
        <div
          className="rounded-full border border-green-400/60 transition-all duration-150"
          style={{
            width:      clicking ? 28 : 36,
            height:     clicking ? 28 : 36,
            marginLeft: clicking ? -14 : -18,
            marginTop:  clicking ? -14 : -18,
            boxShadow:  clicking
              ? '0 0 16px rgba(34,197,94,0.6)'
              : '0 0 10px rgba(34,197,94,0.25)',
          }}
        />
      </div>

      {/* Inner dot — exact */}
      <div
        ref={dotRef}
        className="pointer-events-none fixed left-0 top-0 z-[9999] transition-opacity duration-300"
        style={{ opacity: visible ? 1 : 0 }}
      >
        <div
          className="rounded-full bg-green-400 transition-all duration-100"
          style={{
            width:      clicking ? 6 : 4,
            height:     clicking ? 6 : 4,
            marginLeft: clicking ? -3 : -2,
            marginTop:  clicking ? -3 : -2,
            boxShadow:  clicking
              ? '0 0 14px rgba(34,197,94,1)'
              : '0 0 8px rgba(34,197,94,0.9)',
          }}
        />
      </div>

      <style>{`
        @keyframes ripple {
          0%   { width: 0px;   height: 0px;   margin-left: 0px;   margin-top: 0px;   opacity: 1; }
          100% { width: 60px;  height: 60px;  margin-left: -30px; margin-top: -30px; opacity: 0; }
        }
      `}</style>
    </>
  );
}
