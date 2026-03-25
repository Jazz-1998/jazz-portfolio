'use client';

import { useState, useRef, useEffect } from 'react';

const modes = ['Technical', 'Career', 'Life', 'Random'] as const;
type Mode = typeof modes[number];

type Message = { role: 'user' | 'ai'; text: string };

type Breakdown = {
  problem: string;
  rootCause: string;
  why: string;
  solution: string;
};

export default function ProblemSolver() {
  const [input, setInput] = useState('');
  const [mode, setMode] = useState<Mode>('Technical');
  const [messages, setMessages] = useState<Message[]>([]);
  const [breakdown, setBreakdown] = useState<Breakdown | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const bottomRef = useRef<HTMLDivElement>(null);
  const chatContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = chatContainerRef.current;
    if (container) {
      container.scrollTop = container.scrollHeight;
    }
  }, [messages, breakdown, loading]);

  const reset = () => {
    setMessages([]);
    setBreakdown(null);
    setInput('');
    setError('');
  };

  const handleSend = async () => {
    if (!input.trim() || loading) return;

    const userMessage = input.trim();
    const updated: Message[] = [...messages, { role: 'user', text: userMessage }];
    setMessages(updated);
    setInput('');
    setLoading(true);
    setError('');

    try {
      const res = await fetch('/api/solve', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ messages: updated, mode }),
      });
      const data = await res.json();
      if (data.error) throw new Error(data.error);

      if (data.type === 'question') {
        setMessages([...updated, { role: 'ai', text: data.question }]);
      } else {
        setMessages([...updated, { role: 'ai', text: "Got everything I need. Here's the breakdown:" }]);
        setBreakdown(data);
      }
    } catch {
      setError('Something went wrong. Try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="tryme" className="relative overflow-hidden border-t border-green-500/10 bg-[#0d0d0d] py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">

        <p className="mb-10 font-mono text-xs font-semibold uppercase tracking-widest text-green-500">// decode.run()</p>

        <div className="grid gap-16 md:grid-cols-2 md:gap-24">

          {/* left — description */}
          <div>
            <h2 className="mb-6 text-4xl font-bold text-white md:text-5xl">Let&apos;s Break It Down</h2>
            <div className="space-y-4 text-base leading-relaxed text-zinc-400">
              <p>An AI version of me. Not perfect (hehe), but trained to think like I do.</p>
              <p>Technical, career, life, or random. Go ahead, throw it at me.</p>
              <p>We&apos;ll break it down simply:</p>
              <ul className="space-y-2 text-zinc-400">
                <li>→ Understand the problem</li>
                <li>→ Find the root cause</li>
                <li>→ Figure out the why</li>
                <li className="font-semibold text-emerald-400">→ Move toward the solution</li>
              </ul>
              <p>Simple. 😄</p>
            </div>
          </div>

          {/* right — interactive */}
          <div>
            {/* mode pills */}
            <div className="mb-6 flex flex-wrap gap-3">
              {modes.map((m) => (
                <button
                  key={m}
                  onClick={() => { setMode(m); reset(); }}
                  className={`rounded-full border px-5 py-2 text-sm font-semibold transition duration-200 ${
                    mode === m
                      ? 'border-emerald-500 bg-emerald-500 text-slate-950'
                      : 'border-slate-700 bg-slate-800 text-slate-400 hover:border-emerald-500/50 hover:text-white'
                  }`}
                >
                  {m}
                </button>
              ))}
            </div>

            {/* chat history */}
            {messages.length > 0 && (
              <div ref={chatContainerRef} className="mb-6 max-h-96 overflow-y-auto space-y-4 pr-1">
                {messages.map((msg, i) => (
                  <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                    <div className={`max-w-[85%] rounded-2xl px-5 py-3.5 text-sm leading-7 ${
                      msg.role === 'user'
                        ? 'bg-emerald-500 text-slate-950 font-semibold'
                        : 'bg-slate-800 border border-slate-700 text-slate-200'
                    }`}>
                      {msg.role === 'ai' && (
                        <p className="mb-1 text-xs font-bold uppercase tracking-wider text-emerald-400">Jazz AI</p>
                      )}
                      {msg.text}
                    </div>
                  </div>
                ))}

                {loading && (
                  <div className="flex justify-start">
                    <div className="flex items-center gap-1.5 rounded-2xl border border-slate-700 bg-slate-800 px-5 py-4">
                      <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-emerald-500 [animation-delay:0ms]" />
                      <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-emerald-500 [animation-delay:150ms]" />
                      <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-emerald-500 [animation-delay:300ms]" />
                    </div>
                  </div>
                )}

                {breakdown && (
                  <div className="rounded-2xl border border-slate-700 bg-slate-800/60 p-6 backdrop-blur-sm">
                    <p className="mb-1 text-sm font-semibold text-white">Hello, this is Jazz. An AI trained to think like him.</p>
                    <p className="mb-5 text-sm text-zinc-400">Thank you for adding your input. I&apos;m happy to answer you.</p>
                    <div className="space-y-4">
                      {[
                        { label: 'Problem', value: breakdown.problem },
                        { label: 'Root cause', value: breakdown.rootCause },
                        { label: 'Why', value: breakdown.why },
                        { label: 'Solution', value: breakdown.solution },
                      ].map(({ label, value }) => (
                        <div key={label} className="flex gap-4">
                          <span className="mt-1 w-24 shrink-0 text-xs font-bold uppercase tracking-wider text-emerald-500">{label}</span>
                          <p className="leading-relaxed text-slate-300">{value}</p>
                        </div>
                      ))}
                    </div>
                    <button onClick={reset} className="mt-6 text-xs font-bold uppercase tracking-widest text-slate-500 transition hover:text-emerald-400">
                      Start over
                    </button>
                  </div>
                )}

                <div ref={bottomRef} />
              </div>
            )}

            {/* input */}
            {!breakdown && (
              <>
                <input
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                  placeholder={messages.length === 0 ? "What's actually going on?" : 'Your answer...'}
                  className="mb-4 w-full rounded-xl border border-green-500/15 bg-black px-5 py-4 text-zinc-200 placeholder:text-zinc-700 outline-none transition focus:border-green-500/40 focus:ring-2 focus:ring-green-500/10"
                />
                <button
                  onClick={handleSend}
                  disabled={loading}
                  className="w-full rounded-xl bg-green-500 py-3.5 font-semibold text-black shadow-[0_0_20px_rgba(34,197,94,0.3)] transition hover:-translate-y-px hover:bg-green-400 active:scale-[0.98] disabled:opacity-60"
                >
                  {loading ? 'Thinking...' : messages.length === 0 ? "Let's break it down" : 'Send'}
                </button>
              </>
            )}

            {error && <p className="mt-4 text-sm text-red-400">{error}</p>}
          </div>

        </div>
      </div>
    </section>
  );
}
