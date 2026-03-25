'use client';

import { useState, useEffect, useRef, useCallback } from 'react';

type LineType = 'cmd' | 'info' | 'highlight' | 'success' | 'warn' | 'dim';

type ConsoleLine = {
  text: string;
  type: LineType;
};

type Scenario = {
  id: string;
  label: string;
  title: string;
  intro: string;
  lines: ConsoleLine[];
  result: string;
};

const SCENARIOS: Scenario[] = [
  {
    id: 'api',
    label: 'API Error',
    title: 'Simulation: API Failure',
    intro: 'Incoming issue: customer blocked during integration.',
    lines: [
      { text: 'Customer reports API requests are failing', type: 'info' },
      { text: 'Reviewing status codes and error messages', type: 'info' },
      { text: 'Inspecting payload structure', type: 'info' },
      { text: 'Validating headers and authentication', type: 'info' },
      { text: 'Comparing expected vs actual request format', type: 'info' },
      { text: 'Root cause identified: missing required field in request payload', type: 'highlight' },
      { text: 'Applying correction', type: 'info' },
      { text: 'Retesting request', type: 'dim' },
      { text: 'Response successful — 200 OK', type: 'success' },
      { text: 'Issue resolved', type: 'success' },
    ],
    result: 'Root cause identified. Integration restored.',
  },
  {
    id: 'logs',
    label: 'Log Investigation',
    title: 'Simulation: Log Investigation',
    intro: 'Incoming issue: system behavior does not match expected output.',
    lines: [
      { text: 'Customer reports repeated failures in workflow', type: 'info' },
      { text: 'Opening logs', type: 'dim' },
      { text: 'Tracing sequence of events', type: 'info' },
      { text: 'Filtering signal from noise', type: 'info' },
      { text: 'Identifying error pattern', type: 'info' },
      { text: 'Matching timestamps to reported incident', type: 'info' },
      { text: 'Root cause identified: failure triggered by incorrect input handling', type: 'highlight' },
      { text: 'Reproducing behavior', type: 'dim' },
      { text: 'Validating fix', type: 'info' },
      { text: 'System behavior stabilized', type: 'success' },
    ],
    result: 'Logs analyzed. Failure pattern confirmed. Issue resolved.',
  },
  {
    id: 'outage',
    label: 'Service Outage',
    title: 'Simulation: Service Outage',
    intro: 'Incoming issue: users unable to access core functionality.',
    lines: [
      { text: 'Multiple users reporting service disruption', type: 'warn' },
      { text: 'Confirming scope of impact', type: 'info' },
      { text: 'Checking monitoring signals', type: 'info' },
      { text: 'Reviewing error spikes and failure trends', type: 'info' },
      { text: 'Investigating dependent services', type: 'info' },
      { text: 'Identifying affected component', type: 'highlight' },
      { text: 'Escalating and isolating issue', type: 'warn' },
      { text: 'Validating recovery', type: 'info' },
      { text: 'Monitoring stability after fix', type: 'dim' },
      { text: 'Service restored', type: 'success' },
    ],
    result: 'Impact contained. Recovery confirmed. Service stable.',
  },
  {
    id: 'postman',
    label: 'Postman Debugging',
    title: 'Simulation: Postman Debugging',
    intro: 'Incoming issue: API request works in theory but fails in testing.',
    lines: [
      { text: 'Opening Postman collection', type: 'dim' },
      { text: 'Reviewing request method and endpoint', type: 'info' },
      { text: 'Checking authorization settings', type: 'info' },
      { text: 'Validating headers and body', type: 'info' },
      { text: 'Comparing environment variables', type: 'info' },
      { text: 'Sending test request', type: 'dim' },
      { text: 'Error returned: required field missing in payload', type: 'warn' },
      { text: 'Updating payload with correct field', type: 'highlight' },
      { text: 'Retesting request', type: 'dim' },
      { text: 'Successful response received — 200 OK', type: 'success' },
    ],
    result: 'Request validated. Payload corrected. API working.',
  },
];

const LINE_COLORS: Record<LineType, string> = {
  cmd:       'text-green-400',
  info:      'text-zinc-300',
  highlight: 'text-amber-300 font-semibold',
  success:   'text-green-400 font-semibold',
  warn:      'text-red-400',
  dim:       'text-zinc-600',
};

const LINE_PREFIX: Record<LineType, string> = {
  cmd:       '$ ',
  info:      '  ',
  highlight: '→ ',
  success:   '✓ ',
  warn:      '⚠ ',
  dim:       '  ',
};

const TYPING_SPEED = 18; // ms per character
const AUTO_DELAY   = 900; // ms between auto-play steps

export default function SupportConsole() {
  const [activeId, setActiveId]     = useState(SCENARIOS[0].id);
  const [revealed, setRevealed]     = useState(0);       // how many lines shown
  const [typed, setTyped]           = useState('');      // current typing buffer
  const [autoPlay, setAutoPlay]     = useState(false);
  const [done, setDone]             = useState(false);
  const [isTyping, setIsTyping]     = useState(false);
  const scrollBoxRef                = useRef<HTMLDivElement>(null);
  const autoRef                     = useRef<ReturnType<typeof setTimeout> | null>(null);

  const scenario = SCENARIOS.find(s => s.id === activeId)!;
  const total = scenario.lines.length;

  const reset = useCallback(() => {
    setRevealed(0);
    setTyped('');
    setDone(false);
    setIsTyping(false);
    setAutoPlay(false);
    if (autoRef.current) clearTimeout(autoRef.current);
  }, []);

  // Switch scenario
  const switchScenario = (id: string) => {
    reset();
    setActiveId(id);
  };

  // Type out one line, then mark it revealed
  const typeLine = useCallback((line: string, onDone: () => void) => {
    setIsTyping(true);
    setTyped('');
    let i = 0;
    const interval = setInterval(() => {
      i++;
      setTyped(line.slice(0, i));
      if (i >= line.length) {
        clearInterval(interval);
        setIsTyping(false);
        onDone();
      }
    }, TYPING_SPEED);
    return () => clearInterval(interval);
  }, []);

  const advance = useCallback(() => {
    if (isTyping || done) return;
    if (revealed >= total) {
      setDone(true);
      return;
    }
    const nextLine = scenario.lines[revealed].text;
    typeLine(nextLine, () => {
      setRevealed(r => r + 1);
      setTyped('');
    });
  }, [isTyping, done, revealed, total, scenario.lines, typeLine]);

  // Auto-play
  useEffect(() => {
    if (!autoPlay || done || isTyping) return;
    autoRef.current = setTimeout(() => {
      advance();
    }, AUTO_DELAY);
    return () => { if (autoRef.current) clearTimeout(autoRef.current); };
  }, [autoPlay, done, isTyping, revealed, advance]);

  // Auto-scroll inside terminal only
  useEffect(() => {
    const box = scrollBoxRef.current;
    if (box) box.scrollTop = box.scrollHeight;
  }, [revealed, typed]);

  // Enter key
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Enter') advance();
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [advance]);

  const progress = Math.round((revealed / total) * 100);

  return (
    <div className="mt-16">
      {/* Section header */}
      <div className="mb-8">
        <p className="mb-2 font-mono text-sm font-semibold uppercase tracking-widest text-green-500">// console.simulate()</p>
        <h3 className="text-3xl font-bold text-white md:text-4xl">Watch me troubleshoot — live.</h3>
        <p className="mt-2 text-base text-zinc-400">Step through a real support session. Click Next or press Enter.</p>
      </div>

      {/* Scenario tabs */}
      <div className="mb-5 flex flex-wrap gap-2">
        {SCENARIOS.map(s => (
          <button
            key={s.id}
            onClick={() => switchScenario(s.id)}
            className={`rounded-full border px-4 py-1.5 font-mono text-sm font-semibold transition duration-150 ${
              activeId === s.id
                ? 'border-green-500 bg-green-500/10 text-green-400 shadow-[0_0_10px_rgba(34,197,94,0.15)]'
                : 'border-zinc-700 text-zinc-400 hover:border-zinc-500 hover:text-zinc-200'
            }`}
          >
            {s.label}
          </button>
        ))}
      </div>

      {/* Terminal window */}
      <div className="overflow-hidden rounded-xl border border-zinc-800 bg-black shadow-[0_0_40px_rgba(34,197,94,0.06)]">

        {/* Chrome bar */}
        <div className="flex items-center justify-between border-b border-zinc-800 bg-zinc-900 px-4 py-3">
          <div className="flex items-center gap-2">
            <span className="h-2.5 w-2.5 rounded-full bg-red-500/70" />
            <span className="h-2.5 w-2.5 rounded-full bg-yellow-500/70" />
            <span className="h-2.5 w-2.5 rounded-full bg-green-500/70" />
          </div>
          <div className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-green-500" />
            <span className="font-mono text-xs text-green-500/80">SESSION ACTIVE</span>
          </div>
          <span className="hidden font-mono text-xs text-zinc-500 sm:block">jazz@support-console:~</span>
          <span className="font-mono text-xs text-zinc-500 sm:hidden">console:~</span>
        </div>

        {/* Intro line */}
        <div className="border-b border-zinc-800 px-5 py-3">
          <p className="font-mono text-xs text-zinc-500">
            <span className="hidden text-green-500/70 sm:inline">jazz@support-console</span>
            <span className="text-green-500/70 sm:hidden">jazz</span>
            <span className="text-zinc-500">:~$ </span>
            <span className="text-zinc-300">run --scenario &quot;{scenario.title}&quot;</span>
          </p>
          <p className="mt-1 font-mono text-xs text-zinc-400">{scenario.intro}</p>
        </div>

        {/* Console output */}
        <div ref={scrollBoxRef} className="h-60 overflow-y-auto px-4 py-4 sm:h-72 md:h-80">
          <div className="space-y-1.5">
            {/* Revealed lines */}
            {scenario.lines.slice(0, revealed).map((line, i) => (
              <div key={i} className="flex items-start gap-2">
                <span className="mt-px shrink-0 font-mono text-xs text-zinc-400">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <p className={`font-mono text-sm leading-relaxed ${LINE_COLORS[line.type]}`}>
                  <span className="text-zinc-600">{LINE_PREFIX[line.type]}</span>
                  {line.text}
                </p>
              </div>
            ))}

            {/* Currently typing line */}
            {isTyping && revealed < total && (
              <div className="flex items-start gap-2">
                <span className="mt-px shrink-0 font-mono text-xs text-zinc-400">
                  {String(revealed + 1).padStart(2, '0')}
                </span>
                <p className={`font-mono text-sm leading-relaxed ${LINE_COLORS[scenario.lines[revealed].type]}`}>
                  <span className="text-zinc-600">{LINE_PREFIX[scenario.lines[revealed].type]}</span>
                  {typed}
                  <span className="animate-pulse text-green-400">▋</span>
                </p>
              </div>
            )}

            {/* Idle cursor */}
            {!isTyping && !done && (
              <div className="flex items-center gap-2 pt-1">
                <span className="font-mono text-xs text-zinc-400">
                  {String(revealed + 1).padStart(2, '0')}
                </span>
                <span className="hidden font-mono text-sm text-green-500/60 sm:inline">
                  jazz@support-console:~$ <span className="animate-pulse">▋</span>
                </span>
                <span className="font-mono text-sm text-green-500/60 sm:hidden">
                  jazz:~$ <span className="animate-pulse">▋</span>
                </span>
              </div>
            )}

            {/* Result */}
            {done && (
              <div className="mt-4 rounded-lg border border-zinc-700 bg-green-500/5 px-4 py-3">
                <p className="font-mono text-xs uppercase tracking-widest text-green-500/70">// resolution</p>
                <p className="mt-1 font-mono text-base font-semibold text-green-400">{scenario.result}</p>
              </div>
            )}
          </div>
        </div>

        {/* Progress bar */}
        <div className="h-px w-full bg-zinc-900">
          <div
            className="h-full bg-green-500/40 transition-all duration-300"
            style={{ width: `${progress}%` }}
          />
        </div>

        {/* Controls */}
        <div className="flex flex-wrap items-center justify-between gap-3 border-t border-zinc-800 bg-zinc-900 px-4 py-3">
          <div className="flex items-center gap-2">
            {/* Next */}
            <button
              onClick={advance}
              disabled={isTyping || done}
              className="rounded-lg border border-green-500/30 bg-green-500/10 px-5 py-2 font-mono text-sm font-semibold text-green-400 transition hover:bg-green-500/20 hover:shadow-[0_0_12px_rgba(34,197,94,0.2)] active:scale-95 disabled:cursor-not-allowed disabled:opacity-30"
            >
              {done ? 'Done' : 'Next →'}
            </button>

            {/* Reset */}
            <button
              onClick={reset}
              className="rounded-lg border border-zinc-700 px-4 py-2 font-mono text-sm text-zinc-400 transition hover:border-zinc-500 hover:text-zinc-200 active:scale-95"
            >
              Reset
            </button>

            {/* Auto-play */}
            <button
              onClick={() => setAutoPlay(a => !a)}
              disabled={done}
              className={`rounded-lg border px-4 py-2 font-mono text-sm transition active:scale-95 disabled:opacity-30 ${
                autoPlay
                  ? 'border-amber-500/40 bg-amber-500/10 text-amber-400'
                  : 'border-zinc-700 text-zinc-400 hover:border-zinc-500 hover:text-zinc-200'
              }`}
            >
              {autoPlay ? '⏸ Auto' : '▶ Auto'}
            </button>
          </div>

          {/* Step indicator */}
          <span className="font-mono text-xs text-zinc-400">
            {done ? 'RESOLVED' : `STEP ${Math.min(revealed + 1, total)} / ${total}`}
          </span>
        </div>
      </div>
    </div>
  );
}
