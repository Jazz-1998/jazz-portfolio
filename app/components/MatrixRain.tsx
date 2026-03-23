'use client';

import { useEffect, useRef } from 'react';

const CHARS = 'アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホ0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ';

export default function MatrixRain({ className = '' }: { className?: string }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const fontSize = 13;
    let cols: number;
    let drops: number[];

    const init = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
      cols = Math.floor(canvas.width / fontSize);
      drops = Array(cols).fill(0).map(() => Math.random() * -50);
    };

    init();

    const onResize = () => init();
    window.addEventListener('resize', onResize);

    let animId: number;

    const draw = () => {
      // fade trail
      ctx.fillStyle = 'rgba(0, 0, 0, 0.06)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      for (let i = 0; i < cols; i++) {
        const y = drops[i] * fontSize;

        // leading char — bright white
        ctx.fillStyle = 'rgba(255, 255, 255, 0.85)';
        ctx.font = `bold ${fontSize}px monospace`;
        ctx.fillText(CHARS[Math.floor(Math.random() * CHARS.length)], i * fontSize, y);

        // body chars — green
        ctx.fillStyle = 'rgba(34, 197, 94, 0.7)';
        ctx.font = `${fontSize}px monospace`;
        ctx.fillText(CHARS[Math.floor(Math.random() * CHARS.length)], i * fontSize, y - fontSize);

        // reset column randomly after it passes the bottom
        if (y > canvas.height && Math.random() > 0.97) {
          drops[i] = 0;
        }

        drops[i] += 0.5;
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
