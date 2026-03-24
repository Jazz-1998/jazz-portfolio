'use client';

import { useEffect, useState, useRef } from 'react';

export default function TypewriterText({ text, className, speed = 120 }: { text: string; className?: string; speed?: number }) {
  const [displayed, setDisplayed] = useState('');
  const ref = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          observer.disconnect();
          let i = 0;
          const interval = setInterval(() => {
            setDisplayed(text.slice(0, i + 1));
            i++;
            if (i >= text.length) clearInterval(interval);
          }, speed);
        }
      },
      { threshold: 0.4 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [text]);

  return (
    <h2 ref={ref} className={className}>
      {displayed}
      <span className="animate-pulse">|</span>
    </h2>
  );
}
