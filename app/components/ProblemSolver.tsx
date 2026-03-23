'use client';

import { useState } from 'react';

const modes = ['Technical', 'Career', 'Life', 'Random'] as const;
type Mode = typeof modes[number];

type Response = {
  problem: string;
  rootCause: string;
  why: string;
  solution: string;
};

export default function ProblemSolver() {
  const [input, setInput] = useState('');
  const [mode, setMode] = useState<Mode>('Technical');
  const [response, setResponse] = useState<Response | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSolve = async () => {
    if (!input.trim()) return;
    setLoading(true);
    setResponse(null);
    setError('');

    try {
      const res = await fetch('/api/solve', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ input, mode }),
      });
      const data = await res.json();
      if (data.error) throw new Error(data.error);
      setResponse(data);
    } catch {
      setError('Something went wrong. Try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="relative overflow-hidden bg-black py-28">

      {/* glow */}
      <div className="pointer-events-none absolute inset-0 -z-10" aria-hidden="true">
        <div className="absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-green-500/10 blur-[180px]" />
      </div>

      <div className="mx-auto max-w-3xl px-6 text-center">

        <p className="mb-4 text-xs font-bold uppercase tracking-[0.35em] text-green-400">Try me</p>
        <h2 className="mb-5 text-4xl font-black text-white md:text-5xl">Let&apos;s Break It Down</h2>
        <p className="mx-auto mb-10 max-w-xl text-base leading-8 text-zinc-400">
          Career, life, technical, or random — it usually starts the same way.
          Understand the problem. Find the root cause. Figure out the why. Then move toward the solution.
        </p>

        {/* mode pills */}
        <div className="mb-8 flex flex-wrap justify-center gap-3">
          {modes.map((m) => (
            <button
              key={m}
              onClick={() => { setMode(m); setResponse(null); }}
              className={`rounded-full border px-5 py-2 text-sm font-semibold transition duration-200 ${
                mode === m
                  ? 'border-green-500 bg-green-500 text-black'
                  : 'border-zinc-700 bg-zinc-900 text-zinc-400 hover:border-green-500/50 hover:text-white'
              }`}
            >
              {m}
            </button>
          ))}
        </div>

        {/* input */}
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && handleSolve()}
          placeholder="What's actually going on?"
          className="mb-4 w-full rounded-xl border border-zinc-800 bg-zinc-900 px-5 py-4 text-white placeholder:text-zinc-500 outline-none transition focus:border-green-500 focus:ring-2 focus:ring-green-500/20"
        />

        {/* button */}
        <button
          onClick={handleSolve}
          disabled={loading}
          className="w-full rounded-xl bg-green-500 py-3.5 font-bold text-black shadow-[0_0_25px_rgba(34,197,94,0.3)] transition hover:-translate-y-px hover:bg-green-400 hover:shadow-[0_0_40px_rgba(34,197,94,0.5)] active:scale-[0.98] disabled:opacity-60"
        >
          {loading ? 'Thinking...' : "Let's break it down"}
        </button>

        {/* loading */}
        {loading && (
          <div className="mt-8 flex items-center justify-center gap-2 text-sm text-zinc-500">
            <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-green-500 [animation-delay:0ms]" />
            <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-green-500 [animation-delay:150ms]" />
            <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-green-500 [animation-delay:300ms]" />
          </div>
        )}

        {/* error */}
        {error && <p className="mt-6 text-sm text-red-400">{error}</p>}

        {/* response */}
        {response && (
          <div className="mt-10 rounded-2xl border border-zinc-800 bg-zinc-900/60 p-8 text-left backdrop-blur-sm">
            <p className="mb-6 text-xs font-bold uppercase tracking-widest text-green-400">How I&apos;d approach this</p>
            <div className="space-y-5">
              {[
                { label: 'Problem', value: response.problem },
                { label: 'Root cause', value: response.rootCause },
                { label: 'Why', value: response.why },
                { label: 'Solution', value: response.solution },
              ].map(({ label, value }) => (
                <div key={label} className="flex gap-4">
                  <span className="mt-1 w-24 shrink-0 text-xs font-bold uppercase tracking-wider text-green-500">{label}</span>
                  <p className="leading-7 text-zinc-200">{value}</p>
                </div>
              ))}
            </div>
          </div>
        )}

      </div>
    </section>
  );
}
