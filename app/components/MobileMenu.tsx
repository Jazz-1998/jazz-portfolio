'use client';

const navLinks = [
  {
    label: 'Story',
    href: '#story',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
        <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" /><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
      </svg>
    ),
  },
  {
    label: 'About',
    href: '#about',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" />
      </svg>
    ),
  },
  {
    label: 'Skills',
    href: '#skills',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
        <rect x="2" y="3" width="20" height="14" rx="2" /><path d="M8 21h8M12 17v4" /><path d="M7 8h.01M12 8h.01M17 8h.01" />
      </svg>
    ),
  },
  {
    label: 'Life',
    href: '#human',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
      </svg>
    ),
  },
  {
    label: 'Decode',
    href: '#tryme',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
        <polyline points="4 17 10 11 4 5" /><line x1="12" y1="19" x2="20" y2="19" />
      </svg>
    ),
  },
  {
    label: 'Contact',
    href: '#contact',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" />
      </svg>
    ),
  },
];

export default function MobileMenu() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden">
      <div className="border-t border-green-500/10 bg-[#0a0a0a]/98 backdrop-blur-xl">
        <nav className="flex items-center justify-around px-1 py-2">
          {navLinks.map(({ label, href, icon }) => (
            <a
              key={label}
              href={href}
              className="flex flex-col items-center gap-1 rounded-lg px-2 py-1.5 text-zinc-600 transition-colors active:bg-green-500/10 active:text-green-400 hover:text-green-400"
            >
              {icon}
              <span className="font-mono text-[9px] tracking-wide">{label}</span>
            </a>
          ))}
        </nav>
      </div>
    </div>
  );
}
