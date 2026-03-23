'use client';

import { useEffect, useState } from 'react';

const LINES = [
  {
    text: 'Hey you. Yes, you.',
    className: 'text-sm font-semibold uppercase tracking-[0.3em] text-zinc-400',
  },
  {
    text: 'Every problem has a solution.',
    className: 'text-5xl font-black leading-[1.05] tracking-tight text-zinc-950 md:text-7xl',
  },
  {
    text: 'Not just in your career — but in life too.',
    className: 'text-base font-medium text-zinc-500 md:text-lg',
  },
];

export default function Typewriter({ className = '' }: { className?: string }) {
  const [lineIndex, setLineIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [displayed, setDisplayed] = useState(LINES.map(() => ''));
  const [finished, setFinished] = useState(false);

  useEffect(() => {
    if (lineIndex >= LINES.length) {
      setFinished(true);
      return;
    }

    const current = LINES[lineIndex].text;

    if (charIndex < current.length) {
      const speed = lineIndex === 1 ? 35 : 50;
      const t = setTimeout(() => {
        setDisplayed(prev => {
          const next = [...prev];
          next[lineIndex] = current.slice(0, charIndex + 1);
          return next;
        });
        setCharIndex(c => c + 1);
      }, speed);
      return () => clearTimeout(t);
    } else {
      const pause = lineIndex === 0 ? 200 : 400;
      const t = setTimeout(() => {
        setLineIndex(l => l + 1);
        setCharIndex(0);
      }, pause);
      return () => clearTimeout(t);
    }
  }, [lineIndex, charIndex]);

  return (
    <div className={`space-y-5 ${className}`}>
      {LINES.map((line, i) => (
        <p key={i} className={`min-h-[1.2em] ${line.className}`}>
          {/* color "solution" green when it appears */}
          {i === 1
            ? displayed[i].split(/(solution)/gi).map((part, j) =>
                part.toLowerCase() === 'solution'
                  ? <span key={j} className="text-green-600">{part}</span>
                  : part
              )
            : displayed[i]}
          {lineIndex === i && !finished && (
            <span className="ml-0.5 inline-block w-[2px] animate-pulse bg-current opacity-70">&nbsp;</span>
          )}
        </p>
      ))}
    </div>
  );
}
