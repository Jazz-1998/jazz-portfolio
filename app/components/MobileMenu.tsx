'use client';

import { useState } from 'react';

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Story', href: '#story' },
  { label: 'Skills', href: '#skills' },
  { label: 'Human', href: '#human' },
  { label: 'Contact', href: '#contact' },
];

export default function MobileMenu() {
  const [open, setOpen] = useState(false);

  return (
    <div className="md:hidden">
      <button
        onClick={() => setOpen(!open)}
        aria-label="Toggle menu"
        className="rounded-lg p-2 text-zinc-500 transition hover:bg-green-500/10 hover:text-green-400"
      >
        {open ? (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-5 w-5">
            <path d="M6 18L18 6M6 6l12 12" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        ) : (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-5 w-5">
            <path d="M4 6h16M4 12h16M4 18h16" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        )}
      </button>

      {open && (
        <div className="absolute left-0 top-full w-full border-t border-green-500/10 bg-[#0a0a0a]/98 py-6 backdrop-blur-xl shadow-lg">
          <nav className="flex flex-col items-center gap-6 font-mono text-sm font-medium text-zinc-400">
            {navLinks.map(({ label, href }) => (
              <a
                key={label}
                href={href}
                onClick={() => setOpen(false)}
                className="transition hover:text-green-400"
              >
                {label}
              </a>
            ))}
          </nav>
        </div>
      )}
    </div>
  );
}
