'use client';

import { useState } from 'react';

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    const form = e.currentTarget;
    const data = new FormData(form);
    await fetch('https://formspree.io/f/xkoqdwyy', {
      method: 'POST',
      body: data,
      headers: { Accept: 'application/json' },
    });
    setLoading(false);
    setSubmitted(true);
  };

  const inputClass =
    'w-full rounded-xl border border-zinc-800 bg-zinc-900/80 px-4 py-3.5 text-sm font-bold text-white placeholder-white placeholder:font-bold outline-none transition duration-200 focus:border-green-500 focus:ring-2 focus:ring-green-500/20';

  return submitted ? (
    <div className="flex h-full flex-col items-center justify-center gap-4 rounded-2xl border border-zinc-800 bg-zinc-900/50 py-20 text-center">
      <span className="text-5xl">👋</span>
      <p className="text-xl font-bold text-white">Message sent!</p>
      <p className="text-sm text-zinc-400">I&apos;ll get back to you soon.</p>
    </div>
  ) : (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input
        name="name"
        type="text"
        required
        placeholder="Your name"
        className={inputClass}
      />
      <input
        name="email"
        type="email"
        required
        placeholder="Your email"
        className={inputClass}
      />
      <textarea
        name="message"
        required
        rows={6}
        placeholder="Your message"
        className={`${inputClass} resize-none`}
      />
      <label className="flex cursor-pointer items-center gap-3">
        <input
          type="checkbox"
          required
          className="h-4 w-4 cursor-pointer accent-green-500"
        />
        <span className="text-sm font-bold text-white">I&apos;m a real human, I promise.</span>
      </label>

      <button
        type="submit"
        disabled={loading}
        className="group relative w-full overflow-hidden rounded-xl bg-green-500 px-6 py-4 text-sm font-bold uppercase tracking-widest text-black transition duration-200 hover:-translate-y-px hover:bg-green-400 hover:shadow-lg hover:shadow-green-500/30 active:scale-[0.98] disabled:opacity-60"
      >
        {loading ? 'Sending...' : 'Send it'}
      </button>
    </form>
  );
}
