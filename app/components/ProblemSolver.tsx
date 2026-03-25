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
  const chatContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = chatContainerRef.current;
    if (container) container.scrollTop = container.scrollHeight;
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

        <p className="mb-10 font-mono text-sm font-semibold uppercase tracking-widest text-green-500">// decode.run()</p>

        <div className="grid gap-16 md:grid-cols-2 md:gap-24">

          {/* left — description */}
          <div>
            <h2 className="mb-6 text-4xl font-bold text-white md:text-6xl">Let&apos;s Break It Down</h2>
            <div className="space-y-4 text-base leading-relaxed text-zinc-300">
              <p>An AI version of me. Not perfect (hehe), but trained to think like I do.</p>
              <p>Technical, career, life, or random. Go ahead, throw it at me.</p>
              <p>We&apos;ll break it down simply:</p>
              <ul className="space-y-2 font-mono text-sm text-zinc-400">
                <li><span className="text-green-500/60">›</span> Understand the problem</li>
                <li><span className="text-green-500/60">›</span> Find the root cause</li>
                <li><span className="text-green-500/60">›</span> Figure out the why</li>
                <li className="font-semibold text-green-400"><span className="text-green-400">›</span> Move toward the solution</li>
              </ul>
              <p>Simple. 😄</p>
            </div>
          </div>

          {/* right — terminal */}
          <div>
            {/* terminal window */}
            <div className="overflow-hidden rounded-xl border border-green-500/15 bg-black shadow-[0_0_40px_rgba(34,197,94,0.06)]">

              {/* chrome bar */}
              <div className="flex items-center justify-between border-b border-green-500/10 bg-zinc-900/60 px-4 py-3">
                <div className="flex items-center gap-2">
                  <span className="h-2.5 w-2.5 rounded-full bg-red-500/70" />
                  <span className="h-2.5 w-2.5 rounded-full bg-yellow-500/70" />
                  <span className="h-2.5 w-2.5 rounded-full bg-green-500/70" />
                </div>
                {/* mode tabs */}
                <div className="flex gap-1">
                  {modes.map((m) => (
                    <button
                      key={m}
                      onClick={() => { setMode(m); reset(); }}
                      className={`rounded px-3 py-1 font-mono text-xs font-semibold transition duration-150 ${
                        mode === m
                          ? 'bg-green-500/15 text-green-400'
                          : 'text-zinc-600 hover:text-zinc-400'
                      }`}
                    >
                      {m}
                    </button>
                  ))}
                </div>
                <span className="font-mono text-xs text-zinc-700">jazz@ai:~</span>
              </div>

              {/* console body */}
              <div ref={chatContainerRef} className="max-h-96 min-h-[200px] overflow-y-auto px-5 py-4">
                {messages.length === 0 && !loading && (
                  <div className="space-y-1">
                    <p className="font-mono text-xs text-green-500/60">$ jazz --mode {mode.toLowerCase()} --solve</p>
                    <p className="font-mono text-xs text-zinc-600">Initializing diagnostic session...</p>
                    <p className="font-mono text-xs text-zinc-600">Ready. Describe the problem below.</p>
                    <span className="font-mono text-sm text-green-500/50 animate-pulse">▋</span>
                  </div>
                )}

                <div className="space-y-3 mt-2">
                  {messages.map((msg, i) => (
                    <div key={i} className="font-mono text-sm">
                      {msg.role === 'user' ? (
                        <div className="flex items-start gap-2">
                          <span className="shrink-0 text-green-500/60">you:~$</span>
                          <p className="text-zinc-300 leading-relaxed">{msg.text}</p>
                        </div>
                      ) : (
                        <div className="flex items-start gap-2">
                          <span className="shrink-0 text-green-400">jazz:~&gt;</span>
                          <p className="text-zinc-300 leading-relaxed">{msg.text}</p>
                        </div>
                      )}
                    </div>
                  ))}

                  {loading && (
                    <div className="flex items-center gap-2 font-mono text-sm">
                      <span className="text-green-400">jazz:~&gt;</span>
                      <span className="flex items-center gap-1">
                        <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-green-500 [animation-delay:0ms]" />
                        <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-green-500 [animation-delay:150ms]" />
                        <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-green-500 [animation-delay:300ms]" />
                      </span>
                    </div>
                  )}

                  {breakdown && (
                    <div className="mt-3 rounded-lg border border-green-500/20 bg-green-500/5 p-5">
                      <p className="mb-1 font-mono text-xs text-green-500/60">// breakdown.output</p>
                      <p className="mb-4 font-mono text-xs text-zinc-500">Hello, this is Jazz. An AI trained to think like him.</p>
                      <div className="space-y-4">
                        {[
                          { label: 'Problem',    value: breakdown.problem },
                          { label: 'Root cause', value: breakdown.rootCause },
                          { label: 'Why',        value: breakdown.why },
                          { label: 'Solution',   value: breakdown.solution },
                        ].map(({ label, value }) => (
                          <div key={label} className="flex gap-4">
                            <span className="mt-px w-24 shrink-0 font-mono text-xs font-bold uppercase tracking-wider text-green-500">{label}</span>
                            <p className="text-sm leading-relaxed text-zinc-300">{value}</p>
                          </div>
                        ))}
                      </div>
                      <button
                        onClick={reset}
                        className="mt-5 font-mono text-xs text-zinc-600 transition hover:text-green-400"
                      >
                        $ reset --session
                      </button>
                    </div>
                  )}
                </div>
              </div>

              {/* input bar */}
              {!breakdown && (
                <div className="border-t border-green-500/10 bg-zinc-900/30 px-4 py-3">
                  <div className="flex items-center gap-3">
                    <span className="shrink-0 font-mono text-xs text-green-500/60">you:~$</span>
                    <input
                      value={input}
                      onChange={(e) => setInput(e.target.value)}
                      onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                      placeholder={messages.length === 0 ? "What's actually going on?" : 'Your answer...'}
                      className="flex-1 bg-transparent font-mono text-sm text-zinc-200 placeholder:text-zinc-700 outline-none"
                    />
                    <button
                      onClick={handleSend}
                      disabled={loading}
                      className="shrink-0 rounded border border-green-500/30 bg-green-500/10 px-4 py-1.5 font-mono text-xs font-semibold text-green-400 transition hover:bg-green-500/20 active:scale-95 disabled:opacity-40"
                    >
                      {loading ? '...' : 'Run →'}
                    </button>
                  </div>
                </div>
              )}
            </div>

            {error && <p className="mt-3 font-mono text-xs text-red-400">ERROR: {error}</p>}
          </div>

        </div>
      </div>
    </section>
  );
}
