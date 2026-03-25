'use client';

import { useState, useEffect, useRef, useCallback } from 'react';

type Issue = {
  id: number;
  label: string;
  tag: string;
  color: string;
  x: number;
  y: number;
  speed: number;
  resolved: boolean;
  missed: boolean;
};

const ISSUES = [
  { label: 'API Error', tag: '500', color: 'border-red-500/60 bg-red-500/10 text-red-400' },
  { label: 'Timeout', tag: 'TIMEOUT', color: 'border-orange-500/60 bg-orange-500/10 text-orange-400' },
  { label: 'Broken Auth', tag: '401', color: 'border-yellow-500/60 bg-yellow-500/10 text-yellow-400' },
  { label: 'Bad Payload', tag: '400', color: 'border-pink-500/60 bg-pink-500/10 text-pink-400' },
  { label: 'Service Outage', tag: 'DOWN', color: 'border-red-600/60 bg-red-600/10 text-red-300' },
  { label: 'Failed Request', tag: '503', color: 'border-orange-600/60 bg-orange-600/10 text-orange-300' },
  { label: 'Missing Field', tag: 'NULL', color: 'border-amber-500/60 bg-amber-500/10 text-amber-400' },
  { label: 'Rate Limited', tag: '429', color: 'border-violet-500/60 bg-violet-500/10 text-violet-400' },
];

const CARD_W = 140;
const CARD_H = 56;
const TICK = 16; // ~60fps

let uid = 0;

type GameState = 'idle' | 'playing' | 'over';

export default function FixItMode() {
  const [gameState, setGameState] = useState<GameState>('idle');
  const [issues, setIssues] = useState<Issue[]>([]);
  const [score, setScore] = useState(0);
  const [missed, setMissed] = useState(0);
  const [timeLeft, setTimeLeft] = useState(30);
  const [flashMsg, setFlashMsg] = useState('');
  const areaRef = useRef<HTMLDivElement>(null);
  const tickRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const spawnRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const scoreRef = useRef(0);
  const missedRef = useRef(0);
  const timeRef = useRef(30);
  const areaW = useRef(0);
  const areaH = useRef(0);

  const stopAll = useCallback(() => {
    if (tickRef.current) clearInterval(tickRef.current);
    if (spawnRef.current) clearInterval(spawnRef.current);
    if (timerRef.current) clearInterval(timerRef.current);
  }, []);

  const endGame = useCallback(() => {
    stopAll();
    setGameState('over');
  }, [stopAll]);

  const resolve = useCallback((id: number) => {
    setIssues((prev) =>
      prev.map((c) => (c.id === id && !c.resolved && !c.missed ? { ...c, resolved: true } : c))
    );
    scoreRef.current += 1;
    setScore(scoreRef.current);
    setFlashMsg('RESOLVED ✓');
    setTimeout(() => setFlashMsg(''), 600);
  }, []);

  const startGame = useCallback(() => {
    stopAll();
    uid = 0;
    scoreRef.current = 0;
    missedRef.current = 0;
    timeRef.current = 30;
    setScore(0);
    setMissed(0);
    setTimeLeft(30);
    setIssues([]);
    setFlashMsg('');
    setGameState('playing');

    const getArea = () => {
      if (areaRef.current) {
        areaW.current = areaRef.current.offsetWidth;
        areaH.current = areaRef.current.offsetHeight;
      }
    };
    getArea();

    // Spawn
    const spawnCard = () => {
      getArea();
      if (!areaW.current) return;
      const template = ISSUES[Math.floor(Math.random() * ISSUES.length)];
      const x = Math.random() * Math.max(0, areaW.current - CARD_W);
      const difficultyMult = 1 + (30 - timeRef.current) / 40;
      const speed = (0.7 + Math.random() * 0.8) * difficultyMult;
      uid += 1;
      setIssues((prev) => [
        ...prev,
        { id: uid, ...template, x, y: -CARD_H, speed, resolved: false, missed: false },
      ]);
    };

    spawnRef.current = setInterval(spawnCard, 1400);

    // Tick — move cards down
    tickRef.current = setInterval(() => {
      setIssues((prev) => {
        const updated = prev.map((c) => {
          if (c.resolved || c.missed) return c;
          const nextY = c.y + c.speed;
          if (nextY + CARD_H >= (areaH.current || 320)) {
            missedRef.current += 1;
            setMissed(missedRef.current);
            if (missedRef.current >= 5) {
              endGame();
            }
            return { ...c, y: nextY, missed: true };
          }
          return { ...c, y: nextY };
        });
        // Clean up resolved/missed after a delay
        return updated;
      });
    }, TICK);

    // Countdown
    timerRef.current = setInterval(() => {
      timeRef.current -= 1;
      setTimeLeft(timeRef.current);
      if (timeRef.current <= 0) {
        endGame();
      }
    }, 1000);
  }, [stopAll, endGame]);

  useEffect(() => () => stopAll(), [stopAll]);

  // Periodically clean up resolved/missed cards
  useEffect(() => {
    if (gameState !== 'playing') return;
    const gc = setInterval(() => {
      setIssues((prev) => prev.filter((c) => !c.resolved && !c.missed));
    }, 1000);
    return () => clearInterval(gc);
  }, [gameState]);

  const rating = () => {
    if (score >= 20) return { label: 'LEGENDARY SUPPORT', color: 'text-green-300' };
    if (score >= 14) return { label: 'SENIOR ENGINEER', color: 'text-green-400' };
    if (score >= 8) return { label: 'MID-LEVEL SOLID', color: 'text-yellow-400' };
    return { label: 'KEEP PRACTICING', color: 'text-zinc-400' };
  };

  return (
    <div className="mt-16 overflow-hidden rounded-xl border border-zinc-800 bg-black shadow-[0_0_40px_rgba(34,197,94,0.06)]">
      {/* Chrome bar */}
      <div className="flex items-center justify-between border-b border-zinc-800 bg-zinc-900 px-4 py-3">
        <div className="flex items-center gap-2">
          <span className="h-2.5 w-2.5 rounded-full bg-red-500/70" />
          <span className="h-2.5 w-2.5 rounded-full bg-yellow-500/70" />
          <span className="h-2.5 w-2.5 rounded-full bg-green-500/70" />
          <span className="ml-2 font-mono text-xs text-zinc-400">fix_it_mode.exe</span>
        </div>
        <div className="flex items-center gap-3 font-mono text-xs">
          <span className="text-zinc-500">SCORE <span className="text-green-400">{score}</span></span>
          <span className="text-zinc-500">MISSED <span className={missed >= 3 ? 'text-red-400' : 'text-zinc-300'}>{missed}/5</span></span>
          {gameState === 'playing' && (
            <span className={`font-bold ${timeLeft <= 10 ? 'text-red-400 animate-pulse' : 'text-zinc-300'}`}>
              {timeLeft}s
            </span>
          )}
        </div>
        <span className="font-mono text-xs text-zinc-500">jazz@support:~</span>
      </div>

      {/* Game area */}
      <div className="relative" style={{ height: 320 }} ref={areaRef}>
        {/* Background grid */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: 'linear-gradient(rgba(34,197,94,1) 1px, transparent 1px), linear-gradient(90deg, rgba(34,197,94,1) 1px, transparent 1px)',
            backgroundSize: '40px 40px',
          }}
        />

        {/* Danger zone bar at bottom */}
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-red-500/30" />
        <div className="absolute bottom-1 left-0 right-0 flex items-center justify-center">
          <span className="font-mono text-[9px] text-red-500/40 tracking-widest">── CRITICAL ZONE ──</span>
        </div>

        {/* IDLE state */}
        {gameState === 'idle' && (
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-5">
            <div className="text-center">
              <p className="font-mono text-xs text-green-500/60 mb-2">$ ./fix_it_mode.sh --start</p>
              <h3 className="text-xl font-bold text-white mb-1">Fix It Mode</h3>
              <p className="text-sm text-zinc-500 max-w-xs mx-auto">Issues are falling. Click them before they hit the critical zone. Don&apos;t let 5 through.</p>
            </div>
            <button
              onClick={startGame}
              className="rounded-lg border border-green-500/40 bg-green-500/10 px-6 py-2.5 font-mono text-sm font-semibold text-green-400 transition hover:bg-green-500/20 hover:border-green-500/60 active:scale-95"
            >
              Start Session →
            </button>
          </div>
        )}

        {/* GAME OVER state */}
        {gameState === 'over' && (
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 bg-black/80">
            <p className="font-mono text-xs text-red-400/80 mb-1">$ session --terminated</p>
            <h3 className="text-2xl font-bold text-white">Session Closed</h3>
            <div className="flex gap-8 font-mono text-sm">
              <div className="text-center">
                <p className="text-zinc-500 text-xs mb-1">RESOLVED</p>
                <p className="text-2xl font-bold text-green-400">{score}</p>
              </div>
              <div className="text-center">
                <p className="text-zinc-500 text-xs mb-1">MISSED</p>
                <p className="text-2xl font-bold text-red-400">{missed}</p>
              </div>
            </div>
            <p className={`font-mono text-xs font-bold tracking-widest ${rating().color}`}>
              ── {rating().label} ──
            </p>
            <button
              onClick={startGame}
              className="mt-1 rounded-lg border border-green-500/40 bg-green-500/10 px-6 py-2.5 font-mono text-sm font-semibold text-green-400 transition hover:bg-green-500/20 active:scale-95"
            >
              $ restart --session
            </button>
          </div>
        )}

        {/* PLAYING — falling cards */}
        {gameState === 'playing' && (
          <>
            {flashMsg && (
              <div className="pointer-events-none absolute inset-0 flex items-center justify-center z-10">
                <span className="font-mono text-lg font-bold text-green-400 animate-ping opacity-0">{flashMsg}</span>
                <span className="font-mono text-base font-bold text-green-400 absolute">{flashMsg}</span>
              </div>
            )}

            {issues.map((issue) =>
              issue.resolved || issue.missed ? null : (
                <button
                  key={issue.id}
                  onClick={() => resolve(issue.id)}
                  style={{
                    position: 'absolute',
                    left: issue.x,
                    top: issue.y,
                    width: CARD_W,
                    height: CARD_H,
                  }}
                  className={`rounded-lg border px-3 py-1.5 text-left transition-all duration-75 active:scale-95 cursor-pointer select-none ${issue.color}`}
                >
                  <p className="font-mono text-[10px] font-bold tracking-widest opacity-70">{issue.tag}</p>
                  <p className="font-mono text-xs font-semibold leading-tight">{issue.label}</p>
                  <p className="font-mono text-[9px] opacity-50 mt-0.5">click to resolve</p>
                </button>
              )
            )}
          </>
        )}
      </div>

      {/* Footer hint */}
      <div className="border-t border-zinc-800 bg-zinc-900/30 px-5 py-3 flex items-center justify-between">
        <p className="font-mono text-[10px] text-zinc-600">
          {gameState === 'playing' ? '// click cards before they reach the critical zone' : '// interactive support simulation'}
        </p>
        {gameState === 'playing' && (
          <button
            onClick={endGame}
            className="font-mono text-[10px] text-zinc-600 transition hover:text-red-400"
          >
            $ exit --session
          </button>
        )}
      </div>
    </div>
  );
}
