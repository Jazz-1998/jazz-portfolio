'use client';

import { useState, useRef } from 'react';

type ButtonState = 'idle' | 'sending' | 'sent';

export default function ContactForm() {
  const [btnState, setBtnState] = useState<ButtonState>('idle');
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setBtnState('sending');
    const data = new FormData(e.currentTarget);
    await fetch('https://formspree.io/f/xkoqdwyy', {
      method: 'POST',
      body: data,
      headers: { Accept: 'application/json' },
    });
    setBtnState('sent');
    setTimeout(() => { setBtnState('idle'); formRef.current?.reset(); }, 4000);
  };

  const inputClass =
    'w-full rounded-xl border border-green-500/15 bg-black px-4 py-3.5 text-sm text-zinc-200 placeholder-zinc-700 outline-none transition focus:border-green-500/40 focus:ring-2 focus:ring-green-500/10';

  const btnLabel =
    btnState === 'sending' ? 'Sending...' :
    btnState === 'sent' ? 'Successfully sent to Jazz ✓ 😊' :
    'Send it';

  return (
    <form ref={formRef} onSubmit={handleSubmit} className="space-y-3">
      <input name="name" type="text" required placeholder="Your name" className={inputClass} />
      <input name="email" type="email" required placeholder="Your email" className={inputClass} />
      <textarea name="message" required rows={6} placeholder="Your message" className={`${inputClass} resize-none`} />
      <label className="flex cursor-pointer items-center gap-3">
        <input type="checkbox" required className="h-4 w-4 cursor-pointer accent-green-500" />
        <span className="text-sm text-zinc-500">I promise I am not a bot. 🤖</span>
      </label>
      <button
        type="submit"
        disabled={btnState !== 'idle'}
        className="w-full rounded-xl bg-green-500 px-6 py-4 text-sm font-semibold text-black shadow-[0_0_20px_rgba(34,197,94,0.25)] transition hover:-translate-y-px hover:bg-green-400 hover:shadow-[0_0_30px_rgba(34,197,94,0.4)] active:scale-[0.98] disabled:opacity-60"
      >
        {btnLabel}
      </button>
    </form>
  );
}
