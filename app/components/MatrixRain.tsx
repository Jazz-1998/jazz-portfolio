'use client';

import { useEffect, useRef } from 'react';

type Node = {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  pulse: number;
  pulseSpeed: number;
};

const NODE_COUNT   = 55;
const MAX_DIST     = 160;
const NODE_COLOR   = 'rgba(34,197,94,';
const LINE_COLOR   = 'rgba(34,197,94,';

export default function MatrixRain({ className = '' }: { className?: string }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let w = 0, h = 0;
    let nodes: Node[] = [];
    let animId: number;

    const init = () => {
      w = canvas.width  = canvas.offsetWidth;
      h = canvas.height = canvas.offsetHeight;

      nodes = Array.from({ length: NODE_COUNT }, () => ({
        x:          Math.random() * w,
        y:          Math.random() * h,
        vx:         (Math.random() - 0.5) * 0.4,
        vy:         (Math.random() - 0.5) * 0.4,
        radius:     Math.random() * 1.5 + 1,
        pulse:      Math.random() * Math.PI * 2,
        pulseSpeed: Math.random() * 0.02 + 0.008,
      }));
    };

    const onResize = () => init();
    window.addEventListener('resize', onResize);
    init();

    const draw = () => {
      ctx.clearRect(0, 0, w, h);

      // update positions
      for (const n of nodes) {
        n.x += n.vx;
        n.y += n.vy;
        n.pulse += n.pulseSpeed;

        // bounce off edges
        if (n.x < 0 || n.x > w) n.vx *= -1;
        if (n.y < 0 || n.y > h) n.vy *= -1;
        n.x = Math.max(0, Math.min(w, n.x));
        n.y = Math.max(0, Math.min(h, n.y));
      }

      // draw edges
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const a = nodes[i], b = nodes[j];
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist > MAX_DIST) continue;

          const alpha = (1 - dist / MAX_DIST) * 0.18;
          ctx.beginPath();
          ctx.moveTo(a.x, a.y);
          ctx.lineTo(b.x, b.y);
          ctx.strokeStyle = LINE_COLOR + alpha + ')';
          ctx.lineWidth = 0.8;
          ctx.stroke();
        }
      }

      // draw nodes
      for (const n of nodes) {
        const glow   = (Math.sin(n.pulse) + 1) / 2; // 0–1
        const alpha  = 0.3 + glow * 0.55;
        const radius = n.radius + glow * 1.2;

        // outer glow ring
        const grad = ctx.createRadialGradient(n.x, n.y, 0, n.x, n.y, radius * 4);
        grad.addColorStop(0,   NODE_COLOR + (alpha * 0.4) + ')');
        grad.addColorStop(1,   NODE_COLOR + '0)');
        ctx.beginPath();
        ctx.arc(n.x, n.y, radius * 4, 0, Math.PI * 2);
        ctx.fillStyle = grad;
        ctx.fill();

        // solid core
        ctx.beginPath();
        ctx.arc(n.x, n.y, radius, 0, Math.PI * 2);
        ctx.fillStyle = NODE_COLOR + alpha + ')';
        ctx.fill();
      }

      animId = requestAnimationFrame(draw);
    };

    animId = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', onResize);
    };
  }, []);

  return <canvas ref={canvasRef} className={className} />;
}
