'use client';

import Image from "next/image";
import Typewriter from "typewriter-effect";
import { useEffect, useRef, useState, useCallback } from "react";

type LogType = 'sys' | 'ok' | 'warn' | 'error' | 'resolve' | 'debug';
type LogEntry = { type: LogType; text: string };

const ALL_LOGS: LogEntry[] = [
  { type: 'sys',     text: 'SYS: Connection established — remote.jazz.support' },
  { type: 'sys',     text: 'AUTH: Identity verified — clearance LEVEL 5' },
  { type: 'ok',      text: 'MONITOR: System health 100% — all services nominal' },
  { type: 'debug',   text: 'DEBUG: Response time 142ms — within SLA bounds' },
  { type: 'warn',    text: 'ALERT: New incident queued — Priority P1' },
  { type: 'resolve', text: 'RESOLVE: Ticket #4821 marked RESOLVED ✓' },
  { type: 'debug',   text: 'TRACE: Stack trace captured — analyzing root cause' },
  { type: 'ok',      text: 'API: Packet loss 0.0% — network optimal' },
  { type: 'resolve', text: 'INCIDENT: Escalation prevented — resolved at Tier 1' },
  { type: 'warn',    text: 'WARN: API rate limit at 87% — throttling near' },
  { type: 'debug',   text: 'DEBUG: OAuth token refresh — 200 OK' },
  { type: 'error',   text: 'ERROR: Webhook delivery failed — retrying (1/3)' },
  { type: 'resolve', text: 'FIXED: Webhook retry successful — delivery confirmed ✓' },
  { type: 'ok',      text: 'CSAT: Customer satisfaction logged — score 5/5 ⭐' },
  { type: 'warn',    text: 'SLA: Ticket approaching breach — 8 min remaining' },
  { type: 'resolve', text: 'RESOLVE: SLA breach prevented — ticket closed in time ✓' },
  { type: 'debug',   text: 'TRACE: Memory usage stable at 62% — no leak detected' },
  { type: 'ok',      text: 'QUEUE: 3 tickets resolved this session — pace nominal' },
  { type: 'sys',     text: 'HEARTBEAT: All services responding — latency < 50ms' },
  { type: 'error',   text: 'ERROR: 502 Bad Gateway — upstream timeout detected' },
  { type: 'resolve', text: 'FIXED: 502 resolved — load balancer rerouted ✓' },
  { type: 'warn',    text: 'ALERT: High priority ticket assigned — responding now' },
  { type: 'ok',      text: 'FCR: First contact resolution — ticket closed ✓' },
  { type: 'debug',   text: 'DEBUG: SAML assertion validated — SSO login OK' },
  { type: 'sys',     text: 'SYS: Diagnostic cycle complete — next scan in 30s' },
  { type: 'debug',   text: 'DEBUG: Payload size 4.2KB — compression applied' },
  { type: 'ok',      text: 'HEALTH: DB query time 18ms — index hit confirmed' },
  { type: 'warn',    text: 'WARN: Disk I/O spike detected — monitoring' },
  { type: 'resolve', text: 'FIXED: I/O spike resolved — cache warmed ✓' },
  { type: 'ok',      text: 'CSAT: NPS score submitted — promoter detected ⭐' },
];

const TICKET_POOL = [
  'API authentication failing on login',
  'Webhook not delivering payloads',
  'SSO redirect loop on production',
  'Dashboard not loading for user',
  '502 error on checkout endpoint',
  'Email notifications delayed 30m+',
  'CSV export timing out at 10k rows',
  'Rate limit hit — requesting increase',
  'SAML assertion validation error',
  'Billing integration not syncing',
  'Mobile app crashing on launch',
  'Search returning stale results',
  'Bulk import stuck at 0%',
  'PDF generation timeout on report',
  'OAuth scope mismatch on callback',
];

type Priority = 'P1' | 'P2' | 'P3';
type TStatus = 'OPEN' | 'IN PROGRESS' | 'ESCALATED' | 'RESOLVED';
type Ticket = { uid: number; id: number; title: string; priority: Priority; status: TStatus; age: string };

let _uid = 0;
let _tid = 4900;
function makeTicket(): Ticket {
  _uid++; _tid++;
  return {
    uid: _uid,
    id: _tid,
    title: TICKET_POOL[Math.floor(Math.random() * TICKET_POOL.length)],
    priority: (['P1', 'P2', 'P3'] as Priority[])[Math.floor(Math.random() * 3)],
    status: (['OPEN', 'IN PROGRESS', 'ESCALATED'] as TStatus[])[Math.floor(Math.random() * 3)],
    age: `${Math.floor(Math.random() * 55) + 1}m`,
  };
}

const HEX_CHARS = '0123456789ABCDEF';
function randHex(len: number) {
  return Array.from({ length: len }, () => HEX_CHARS[Math.floor(Math.random() * 16)]).join('');
}

const P_COLOR: Record<Priority, string> = {
  P1: 'text-red-400 border-red-500/40 bg-red-500/10',
  P2: 'text-amber-400 border-amber-500/40 bg-amber-500/10',
  P3: 'text-zinc-400 border-zinc-700 bg-zinc-800/60',
};
const S_COLOR: Record<TStatus, string> = {
  'OPEN':        'text-zinc-400',
  'IN PROGRESS': 'text-green-400',
  'ESCALATED':   'text-amber-400',
  'RESOLVED':    'text-green-500',
};
const LOG_COLOR: Record<LogType, string> = {
  sys:     'text-zinc-600',
  ok:      'text-green-500/60',
  warn:    'text-amber-500/70',
  error:   'text-red-400/80',
  resolve: 'text-green-400',
  debug:   'text-zinc-700',
};
const LOG_PREFIX: Record<LogType, string> = {
  sys:     '›',
  ok:      '✓',
  warn:    '⚠',
  error:   '✗',
  resolve: '✓',
  debug:   '·',
};

export default function Hero() {
  const matrixRef = useRef<HTMLCanvasElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: -9999, y: -9999 });
  const logBoxRef = useRef<HTMLDivElement>(null);

  const [uptime, setUptime] = useState('00:00:00');
  const [scanPos, setScanPos] = useState(0);
  const [heroScanPos, setHeroScanPos] = useState(0);
  const [scanData, setScanData] = useState({ id: 'ENG-001', match: '99.8%', status: 'VERIFIED' });
  const [signalBars, setSignalBars] = useState([60, 80, 50, 90, 70]);
  const [pingSize, setPingSize] = useState(1);
  const [ticketCount, setTicketCount] = useState(4821);
  const [hexLine, setHexLine] = useState(randHex(32));
  const [glitch, setGlitch] = useState(false);
  const [memUsage, setMemUsage] = useState(62);
  const [cpuLoad, setCpuLoad] = useState(34);

  // Live metrics
  const [csat, setCsat] = useState(98.2);
  const [fcr, setFcr] = useState(91);
  const [queueDepth, setQueueDepth] = useState(7);
  const [avgRes, setAvgRes] = useState('1h 42m');
  const [slaSeconds, setSlaSeconds] = useState(312);
  const [slaAlert, setSlaAlert] = useState(false);

  // Tickets
  const [tickets, setTickets] = useState<Ticket[]>(() => [makeTicket(), makeTicket(), makeTicket()]);
  const [resolving, setResolving] = useState<Set<number>>(new Set());

  // Logs
  const [logEntries, setLogEntries] = useState<LogEntry[]>(ALL_LOGS.slice(0, 5));
  const logIdxRef = useRef(5);

  // Uptime
  useEffect(() => {
    const start = Date.now();
    const iv = setInterval(() => {
      const s = Math.floor((Date.now() - start) / 1000);
      setUptime(`${String(Math.floor(s / 3600)).padStart(2,'0')}:${String(Math.floor((s % 3600) / 60)).padStart(2,'0')}:${String(s % 60).padStart(2,'0')}`);
    }, 1000);
    return () => clearInterval(iv);
  }, []);

  // Photo scan
  useEffect(() => {
    let pos = 0, raf: number;
    const tick = () => {
      pos += 0.2;
      if (pos >= 100) {
        pos = 0;
        setScanData({ id: `ENG-00${Math.floor(Math.random() * 9) + 1}`, match: `${(99 + Math.random()).toFixed(1)}%`, status: 'VERIFIED' });
        setTicketCount(c => c + Math.floor(Math.random() * 3) + 1);
      }
      setScanPos(pos);
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, []);

  // Hero scan
  useEffect(() => {
    let pos = 0, raf: number;
    const tick = () => { pos = (pos + 0.04) % 100; setHeroScanPos(pos); raf = requestAnimationFrame(tick); };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, []);

  // Signal bars
  useEffect(() => {
    const iv = setInterval(() => setSignalBars(() => Array.from({ length: 5 }, () => 35 + Math.random() * 65)), 700);
    return () => clearInterval(iv);
  }, []);

  // Ping circles
  useEffect(() => {
    let size = 1, growing = true, raf: number;
    const tick = () => {
      if (growing) { size += 0.04; if (size >= 3) growing = false; }
      else { size -= 0.06; if (size <= 1) growing = true; }
      setPingSize(size);
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, []);

  // Hex readout
  useEffect(() => {
    const iv = setInterval(() => setHexLine(randHex(32)), 120);
    return () => clearInterval(iv);
  }, []);

  // Glitch trigger
  useEffect(() => {
    const trigger = () => { setGlitch(true); setTimeout(() => setGlitch(false), 300); };
    const iv = setInterval(trigger, 3500 + Math.random() * 2000);
    return () => clearInterval(iv);
  }, []);

  // CPU / MEM
  useEffect(() => {
    const iv = setInterval(() => {
      setCpuLoad(20 + Math.floor(Math.random() * 50));
      setMemUsage(55 + Math.floor(Math.random() * 20));
    }, 1800);
    return () => clearInterval(iv);
  }, []);

  // Live metrics
  useEffect(() => {
    const iv = setInterval(() => {
      setCsat(+(96 + Math.random() * 3.8).toFixed(1));
      setFcr(Math.floor(85 + Math.random() * 10));
      setQueueDepth(Math.floor(3 + Math.random() * 12));
      const mins = Math.floor(60 + Math.random() * 90);
      setAvgRes(`${Math.floor(mins / 60)}h ${mins % 60}m`);
    }, 3500);
    return () => clearInterval(iv);
  }, []);

  // SLA countdown
  useEffect(() => {
    const iv = setInterval(() => {
      setSlaSeconds(s => {
        if (s <= 1) {
          setSlaAlert(true);
          setTimeout(() => setSlaAlert(false), 1200);
          return Math.floor(180 + Math.random() * 420);
        }
        return s - 1;
      });
    }, 1000);
    return () => clearInterval(iv);
  }, []);

  // Log feed — fast rolling
  useEffect(() => {
    const iv = setInterval(() => {
      const next = ALL_LOGS[logIdxRef.current % ALL_LOGS.length];
      logIdxRef.current++;
      setLogEntries(prev => [...prev.slice(-7), next]);
    }, 1400);
    return () => clearInterval(iv);
  }, []);

  // Auto-scroll log box
  useEffect(() => {
    if (logBoxRef.current) {
      logBoxRef.current.scrollTop = logBoxRef.current.scrollHeight;
    }
  }, [logEntries]);

  // Resolve ticket
  const resolveTicket = useCallback((uid: number) => {
    setResolving(prev => new Set(prev).add(uid));
    // Add a resolve log
    setLogEntries(prev => [...prev.slice(-7), { type: 'resolve', text: `RESOLVE: Ticket closed by Jazz — CSAT pending ✓` }]);
    setTimeout(() => {
      setTickets(prev => prev.map(t => t.uid === uid ? { ...t, status: 'RESOLVED' } : t));
      setTimeout(() => {
        setTickets(prev => prev.map(t => t.uid === uid ? makeTicket() : t));
        setResolving(prev => { const n = new Set(prev); n.delete(uid); return n; });
        setTicketCount(c => c + 1);
      }, 1200);
    }, 600);
  }, []);

  // New ticket every ~15s
  useEffect(() => {
    const iv = setInterval(() => {
      setTickets(prev => {
        const resolved = prev.filter(t => t.status !== 'RESOLVED');
        if (resolved.length === 3) {
          // Replace random one
          const idx = Math.floor(Math.random() * 3);
          return prev.map((t, i) => i === idx ? makeTicket() : t);
        }
        return prev.map(t => t.status === 'RESOLVED' ? makeTicket() : t);
      });
    }, 15000);
    return () => clearInterval(iv);
  }, []);

  // Matrix rain
  useEffect(() => {
    const canvas = matrixRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    const resize = () => { canvas.width = canvas.offsetWidth; canvas.height = canvas.offsetHeight; };
    resize();
    window.addEventListener('resize', resize);
    const CHARS = 'アイウエオカキクケコサシスセソ01ABCDEFβ@#$';
    const COL_W = 20;
    let cols = Math.floor(canvas.width / COL_W);
    let drops: number[] = Array(cols).fill(0).map(() => Math.random() * -80);
    let raf: number;
    const draw = () => {
      ctx.fillStyle = 'rgba(10,10,10,0.18)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      ctx.font = `12px monospace`;
      for (let i = 0; i < cols; i++) {
        const y = drops[i] * 16;
        const alpha = 0.04 + Math.random() * 0.06;
        ctx.fillStyle = `rgba(34,197,94,${alpha * 3})`;
        ctx.fillText(CHARS[Math.floor(Math.random() * CHARS.length)], i * COL_W, y);
        ctx.fillStyle = `rgba(34,197,94,${alpha})`;
        for (let t = 1; t < 6; t++) ctx.fillText(CHARS[Math.floor(Math.random() * CHARS.length)], i * COL_W, y - t * 16);
        drops[i]++;
        if (y > canvas.height && Math.random() > 0.97) drops[i] = Math.random() * -40;
      }
      raf = requestAnimationFrame(draw);
    };
    draw();
    return () => { cancelAnimationFrame(raf); window.removeEventListener('resize', resize); };
  }, []);

  // Particle network
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    const resize = () => { canvas.width = canvas.offsetWidth; canvas.height = canvas.offsetHeight; };
    resize();
    window.addEventListener('resize', resize);
    const onMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseRef.current = { x: e.clientX - rect.left, y: e.clientY - rect.top };
    };
    canvas.addEventListener('mousemove', onMouseMove);
    type P = { x: number; y: number; vx: number; vy: number; r: number };
    const particles: P[] = Array.from({ length: 80 }, () => ({
      x: Math.random() * canvas.width, y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 0.4, vy: (Math.random() - 0.5) * 0.4,
      r: Math.random() * 1.2 + 0.4,
    }));
    let raf: number;
    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const mouse = mouseRef.current;
      for (const p of particles) {
        p.x += p.vx; p.y += p.vy;
        if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1;
        ctx.beginPath(); ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(34,197,94,0.7)'; ctx.fill();
      }
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x, dy = particles[i].y - particles[j].y;
          const d = Math.sqrt(dx * dx + dy * dy);
          if (d < 130) {
            ctx.beginPath(); ctx.moveTo(particles[i].x, particles[i].y); ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `rgba(34,197,94,${0.15 * (1 - d / 130)})`; ctx.lineWidth = 0.5; ctx.stroke();
          }
        }
        const mdx = particles[i].x - mouse.x, mdy = particles[i].y - mouse.y;
        const md = Math.sqrt(mdx * mdx + mdy * mdy);
        if (md < 180) {
          ctx.beginPath(); ctx.moveTo(particles[i].x, particles[i].y); ctx.lineTo(mouse.x, mouse.y);
          ctx.strokeStyle = `rgba(34,197,94,${0.45 * (1 - md / 180)})`; ctx.lineWidth = 0.8; ctx.stroke();
        }
      }
      if (mouse.x > 0) { ctx.beginPath(); ctx.arc(mouse.x, mouse.y, 3, 0, Math.PI * 2); ctx.fillStyle = 'rgba(34,197,94,0.9)'; ctx.fill(); }
      raf = requestAnimationFrame(draw);
    };
    draw();
    return () => { cancelAnimationFrame(raf); window.removeEventListener('resize', resize); canvas.removeEventListener('mousemove', onMouseMove); };
  }, []);

  const slaMin = Math.floor(slaSeconds / 60);
  const slaSec = slaSeconds % 60;
  const slaColor = slaSeconds < 60 ? 'text-red-400' : slaSeconds < 180 ? 'text-amber-400' : 'text-green-500';

  return (
    <section id="home" className="relative min-h-screen overflow-hidden bg-[#0a0a0a]">

      <style>{`
        @keyframes glitch-skew {
          0%,100% { transform: none; text-shadow: 0 0 10px rgba(34,197,94,0.4); }
          20%      { transform: skewX(-4deg) translateX(-4px); text-shadow: -3px 0 rgba(0,255,100,0.6), 3px 0 rgba(255,0,80,0.4); }
          40%      { transform: skewX(3deg) translateX(3px); opacity: 0.85; }
          60%      { transform: skewX(-2deg) translateX(-2px); text-shadow: 2px 0 rgba(0,255,100,0.5); }
          80%      { transform: none; opacity: 1; }
        }
        .glitch-active { animation: glitch-skew 0.3s steps(2) forwards; }
        @keyframes crt-flicker {
          0%,100% { opacity: 1; } 92% { opacity: 0.97; } 94% { opacity: 0.92; } 96% { opacity: 0.98; }
        }
        .crt-flicker { animation: crt-flicker 6s infinite; }
        @keyframes blink-cursor { 0%,100% { opacity: 1; } 50% { opacity: 0; } }
        .blink { animation: blink-cursor 1s step-end infinite; }
        @keyframes sla-flash { 0%,100% { background: transparent; } 50% { background: rgba(239,68,68,0.15); } }
        .sla-flash { animation: sla-flash 0.3s ease 4; }
        @keyframes resolve-flash { 0% { background: transparent; } 50% { background: rgba(34,197,94,0.15); } 100% { background: transparent; } }
        .resolve-flash { animation: resolve-flash 0.6s ease forwards; }
        @keyframes slide-in { from { opacity:0; transform: translateY(-6px); } to { opacity:1; transform: none; } }
        .slide-in { animation: slide-in 0.3s ease forwards; }
      `}</style>

      {/* Matrix rain */}
      <canvas ref={matrixRef} className="absolute inset-0 h-full w-full opacity-[0.35]" style={{ zIndex: 0 }} />
      {/* Particle canvas */}
      <canvas ref={canvasRef} className="absolute inset-0 h-full w-full opacity-20" style={{ zIndex: 1 }} />

      {/* CRT scanline */}
      <div className="pointer-events-none absolute inset-0 crt-flicker" style={{ zIndex: 2, backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 3px, rgba(0,0,0,0.08) 4px)' }} />

      {/* Hero-wide scan */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden" style={{ zIndex: 2 }}>
        <div className="absolute left-0 right-0 h-px" style={{ top: `${heroScanPos}%`, background: 'linear-gradient(to right, transparent, rgba(34,197,94,0.06), rgba(34,197,94,0.12), rgba(34,197,94,0.06), transparent)', boxShadow: '0 0 15px rgba(34,197,94,0.08)' }} />
      </div>

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0a]/95 via-[#0a0a0a]/80 to-[#0a0a0a]/40" style={{ zIndex: 3 }} />

      {/* Section HUD corners */}
      <div className="pointer-events-none absolute inset-6 z-10">
        <div className="absolute left-0 top-0 h-12 w-12 border-l-2 border-t-2 border-green-500/30" />
        <div className="absolute right-0 top-0 h-12 w-12 border-r-2 border-t-2 border-green-500/30" />
        <div className="absolute bottom-0 left-0 h-12 w-12 border-b-2 border-l-2 border-green-500/30" />
        <div className="absolute bottom-0 right-0 h-12 w-12 border-b-2 border-r-2 border-green-500/30" />
        <span className="absolute left-14 top-1 font-mono text-[8px] text-green-500/30">SYS:ACTIVE</span>
        <span className="absolute right-14 top-1 font-mono text-[8px] text-green-500/30">v2026.1.0</span>
        <span className="absolute bottom-1 left-14 font-mono text-[8px] text-green-500/30">jazz.support</span>
        <span className="absolute bottom-1 right-14 font-mono text-[8px] text-green-500/30">ENC:AES-256</span>
      </div>

      <div className="absolute left-0 top-0 h-px w-full bg-gradient-to-r from-transparent via-green-500/60 to-transparent" style={{ zIndex: 10 }} />

      <div className="relative mx-auto max-w-7xl px-6" style={{ zIndex: 10 }}>

        {/* ── Status Bar ── */}
        <div className="flex items-center justify-between border-b border-green-500/10 py-5">
          <div className="flex items-center gap-5">
            <div className="relative flex items-center justify-center">
              <div className="h-2 w-2 rounded-full bg-green-500 shadow-[0_0_6px_rgba(34,197,94,0.8)]" />
              <div className="absolute rounded-full border border-green-500/40" style={{ width: `${pingSize * 8}px`, height: `${pingSize * 8}px`, opacity: 1 / pingSize }} />
            </div>
            <span className="font-mono text-[10px] text-zinc-600">TICKET #{ticketCount}</span>
            <span className="hidden items-center gap-1.5 font-mono text-[10px] md:flex">
              <span className="h-1.5 w-1.5 rounded-full bg-green-500 animate-pulse" />
              <span className="text-green-500">STATUS: RESOLVED</span>
            </span>
            <span className="hidden font-mono text-[10px] text-zinc-600 lg:block">QUEUE: {queueDepth}</span>
            <span className="hidden font-mono text-[10px] text-zinc-600 lg:block">CLEARANCE: LEVEL 5</span>
          </div>
          <div className="flex items-center gap-5">
            <span className="hidden font-mono text-[9px] text-green-500/20 lg:block tracking-wider">{hexLine.match(/.{1,4}/g)?.join(' ')}</span>
            <div className="hidden items-end gap-0.5 md:flex" style={{ height: 14 }}>
              {signalBars.map((h, i) => (
                <div key={i} className="w-1 rounded-sm bg-green-500 transition-all duration-700"
                  style={{ height: `${h}%`, opacity: 0.4 + (i / signalBars.length) * 0.6, boxShadow: '0 0 4px rgba(34,197,94,0.5)' }} />
              ))}
            </div>
            <span className="font-mono text-[10px] text-zinc-600">UPTIME {uptime}</span>
          </div>
        </div>

        {/* ── Main Grid ── */}
        <div className="grid grid-cols-1 items-center gap-8 py-12 md:grid-cols-[1fr_auto_1fr]">

          {/* LEFT */}
          <div className="flex flex-col justify-center">
            <div className="mb-6 font-mono text-xs text-green-500/80">
              <Typewriter options={{
                strings: [
                  '>> SUPPORT ENGINEER ONLINE',
                  '>> SUPPORT ENGINEER OFFLINE — EATING DONUTS 🍩',
                  '>> SUPPORT ENGINEER ONLINE',
                  '>> SUPPORT ENGINEER OFFLINE — SLEEPING LIKE A BABY 😴',
                  '>> SUPPORT ENGINEER ONLINE',
                  '>> SUPPORT ENGINEER OFFLINE — SKYDIVING 🪂',
                ],
                autoStart: true, loop: true, delay: 55, deleteSpeed: 30,
              }} />
            </div>

            <h1 className="text-4xl font-bold leading-[1.05] tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
              Every<br />problem<br />
              <span className={`text-green-400 inline-block ${glitch ? 'glitch-active' : ''}`}>has a</span><br />
              solution.
            </h1>

            <p className="mt-7 max-w-sm text-base leading-relaxed text-zinc-400">
              I work where things break, from simple problems to complex system failures. APIs fail, software errors happen, users get stuck. I step in, break it down, and find the solution.
            </p>
            <div className="mt-4 space-y-1 font-mono text-sm text-green-500/70">
              <p>Understand the problem.</p>
              <p>Diagnose it.</p>
              <p>Figure out why.</p>
              <p>Solve it.</p>
            </div>

            <div className="mt-6 flex flex-wrap gap-2">
              {['API Debugging', 'Root Cause Analysis', 'SaaS Support', 'Incident Response'].map((tag) => (
                <span key={tag} className="rounded-full border border-green-500/20 px-3 py-1 font-mono text-[10px] text-zinc-500">{tag}</span>
              ))}
            </div>

            <div className="mt-6 flex gap-3">
              <a href="#contact" className="rounded-full bg-green-500 px-6 py-3 text-sm font-semibold text-black transition hover:bg-green-400 hover:shadow-[0_0_20px_rgba(34,197,94,0.4)]">Say Hello</a>
              <a href="#story" className="rounded-full border border-zinc-800 px-6 py-3 text-sm font-semibold text-zinc-400 transition hover:border-green-500/30 hover:text-white">My Story</a>
            </div>
          </div>

          {/* CENTER — photo */}
          <div className="relative mx-auto flex justify-center pt-0 md:pt-0">
            <div className="relative">
              <div className="absolute -left-4 -top-4 z-30 h-9 w-9 border-l-2 border-t-2 border-green-500 shadow-[-3px_-3px_10px_rgba(34,197,94,0.4)]" />
              <div className="absolute -right-4 -top-4 z-30 h-9 w-9 border-r-2 border-t-2 border-green-500 shadow-[3px_-3px_10px_rgba(34,197,94,0.4)]" />
              <div className="absolute -bottom-4 -left-4 z-30 h-9 w-9 border-b-2 border-l-2 border-green-500 shadow-[-3px_3px_10px_rgba(34,197,94,0.4)]" />
              <div className="absolute -bottom-4 -right-4 z-30 h-9 w-9 border-b-2 border-r-2 border-green-500 shadow-[3px_3px_10px_rgba(34,197,94,0.4)]" />

              {/* Right data panel */}
              <div className="absolute -right-28 top-1/2 z-30 -translate-y-1/2 hidden xl:block">
                <div className="space-y-3">
                  {[{ label: 'ID', value: scanData.id }, { label: 'MATCH', value: scanData.match }, { label: 'STATUS', value: scanData.status }, { label: 'TICKETS', value: `${ticketCount}` }, { label: 'CSAT', value: `${csat}%` }, { label: 'SLA', value: 'MET' }].map(({ label, value }) => (
                    <div key={label} className="flex items-center gap-1.5">
                      <div><p className="font-mono text-[8px] text-right text-zinc-700">{label}</p><p className="font-mono text-[10px] text-right text-green-500">{value}</p></div>
                      <div className="h-px w-4 bg-green-500/40" />
                    </div>
                  ))}
                </div>
              </div>

              {/* Photo */}
              <div className="relative overflow-hidden rounded-2xl shadow-[0_0_60px_rgba(34,197,94,0.12)]">
                <Image src="/IMG_3785.JPG" alt="Jazz Alhussein" width={1170} height={2142} quality={100}
                  className="h-[420px] w-[280px] object-cover object-top sm:h-[480px] sm:w-[320px] md:h-[540px] md:w-[360px]" priority />
                <div className="pointer-events-none absolute inset-0 z-10" style={{ backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 19px, rgba(34,197,94,0.03) 20px), repeating-linear-gradient(90deg, transparent, transparent 19px, rgba(34,197,94,0.02) 20px)' }} />
                <div className="pointer-events-none absolute left-0 right-0 top-0 z-10" style={{ height: `${scanPos}%`, background: 'rgba(34,197,94,0.04)' }} />
                <div className="pointer-events-none absolute left-0 right-0 z-10" style={{ top: `${scanPos}%`, height: '80px', transform: 'translateY(-40px)', background: 'linear-gradient(to bottom, transparent, rgba(34,197,94,0.08), rgba(34,197,94,0.18), rgba(34,197,94,0.08), transparent)' }} />
                <div className="pointer-events-none absolute left-0 right-0 z-20" style={{ top: `${scanPos}%`, height: '2px', background: 'linear-gradient(to right, transparent, rgba(34,197,94,0.6), rgba(34,197,94,1), rgba(34,197,94,0.6), transparent)', boxShadow: '0 0 8px rgba(34,197,94,0.9), 0 0 20px rgba(34,197,94,0.5), 0 0 40px rgba(34,197,94,0.2)' }} />
                {scanPos > 5 && scanPos < 92 && (
                  <div className="pointer-events-none absolute right-3 z-30 flex items-center gap-1" style={{ top: `${scanPos}%`, transform: 'translateY(-50%)' }}>
                    <span className="h-1 w-1 rounded-full bg-green-400 animate-pulse" />
                    <span className="font-mono text-[8px] text-green-400 opacity-80">SCANNING</span>
                  </div>
                )}
                <div className="pointer-events-none absolute left-3 top-3 z-20 h-5 w-5 border-l border-t border-green-500/50" />
                <div className="pointer-events-none absolute right-3 top-3 z-20 h-5 w-5 border-r border-t border-green-500/50" />
                <div className="pointer-events-none absolute bottom-14 left-3 z-20 h-5 w-5 border-b border-l border-green-500/50" />
                <div className="pointer-events-none absolute bottom-14 right-3 z-20 h-5 w-5 border-b border-r border-green-500/50" />
                <div className="pointer-events-none absolute inset-0 z-20 flex items-center justify-center">
                  <div className="relative h-6 w-6 opacity-20">
                    <div className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-green-500" />
                    <div className="absolute left-0 top-1/2 h-px w-full -translate-y-1/2 bg-green-500" />
                  </div>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a]/80 via-transparent to-transparent" />
                <div className="absolute bottom-5 left-5 right-5 z-30 flex items-center justify-between">
                  <div>
                    <p className="mb-0.5 font-mono text-[10px] font-semibold tracking-widest text-green-500">{scanData.id}</p>
                    <p className="font-bold text-white">Jazz Alhussein</p>
                  </div>
                  <div className="text-right">
                    <p className="font-mono text-[9px] text-green-500">{scanData.match}</p>
                    <p className="font-mono text-[8px] text-green-400/60">{scanData.status}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT — diagnostic panel */}
          <div className="hidden md:flex flex-col items-end justify-between gap-4 pt-0">
            <div className="w-full max-w-[240px] overflow-hidden rounded-xl border border-green-500/15 bg-black shadow-[0_0_30px_rgba(34,197,94,0.06)]">

              <div className="flex items-center justify-between border-b border-green-500/10 bg-zinc-900/40 px-4 py-2.5">
                <div className="flex items-center gap-1.5">
                  <span className="h-2 w-2 rounded-full bg-red-500/60" />
                  <span className="h-2 w-2 rounded-full bg-yellow-500/60" />
                  <span className="h-2 w-2 rounded-full bg-green-500/60" />
                </div>
                <span className="font-mono text-[9px] text-zinc-700">diagnostic.sh</span>
              </div>

              <div className="p-5">
                <p className="mb-4 font-mono text-[10px] font-semibold uppercase tracking-widest text-green-500">Diagnostic Protocol</p>
                <div className="space-y-4">
                  {[
                    { step: '01', label: 'Understand the problem', pct: 100 },
                    { step: '02', label: 'Find root cause', pct: 100 },
                    { step: '03', label: 'Figure out the why', pct: 100 },
                    { step: '04', label: 'Ship the solution', pct: 100 },
                  ].map(({ step, label, pct }) => (
                    <div key={step}>
                      <div className="mb-1 flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <span className="font-mono text-[9px] text-green-500">✓</span>
                          <p className="text-xs font-medium text-zinc-300">{label}</p>
                        </div>
                        <span className="font-mono text-[9px] text-zinc-700">{step}</span>
                      </div>
                      <div className="h-0.5 w-full overflow-hidden rounded-full bg-zinc-900">
                        <div className="h-full rounded-full bg-green-500 shadow-[0_0_6px_rgba(34,197,94,0.6)]" style={{ width: `${pct}%` }} />
                      </div>
                    </div>
                  ))}
                </div>

                {/* SLA Countdown */}
                <div className={`mt-5 rounded-lg border border-green-500/10 p-3 ${slaAlert ? 'sla-flash' : ''}`}>
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-[9px] text-zinc-700">NEXT SLA BREACH IN</span>
                    <span className={`font-mono text-sm font-bold tabular-nums ${slaColor}`}>
                      {String(slaMin).padStart(2,'0')}:{String(slaSec).padStart(2,'0')}
                    </span>
                  </div>
                  <div className="mt-2 h-1 w-full overflow-hidden rounded-full bg-zinc-900">
                    <div className={`h-full rounded-full transition-all duration-1000 ${slaSeconds < 60 ? 'bg-red-500 shadow-[0_0_6px_rgba(239,68,68,0.7)]' : slaSeconds < 180 ? 'bg-amber-500' : 'bg-green-500 shadow-[0_0_6px_rgba(34,197,94,0.6)]'}`}
                      style={{ width: `${Math.min(100, (slaSeconds / 480) * 100)}%` }} />
                  </div>
                </div>

                {/* Live metrics grid */}
                <div className="mt-4 grid grid-cols-2 gap-2 border-t border-green-500/10 pt-4">
                  {[
                    { label: 'TICKETS', value: ticketCount },
                    { label: 'CSAT', value: `${csat}%` },
                    { label: 'FCR', value: `${fcr}%` },
                    { label: 'AVG RES', value: avgRes },
                    { label: 'QUEUE', value: queueDepth },
                    { label: 'SLA', value: 'MET' },
                  ].map(({ label, value }) => (
                    <div key={label} className="rounded bg-zinc-900/60 px-2 py-1.5 text-center">
                      <p className="font-mono text-[8px] text-zinc-700">{label}</p>
                      <p className="font-mono text-[10px] font-bold text-green-500">{value}</p>
                    </div>
                  ))}
                </div>

                {/* Mini hex dump */}
                <div className="mt-4 border-t border-green-500/10 pt-3">
                  <p className="font-mono text-[8px] text-zinc-800 break-all leading-relaxed">{hexLine}</p>
                </div>
              </div>
            </div>

            {/* Connection Status panel */}
            <div className="w-full max-w-[240px] overflow-hidden rounded-xl border border-green-500/15 bg-black shadow-[0_0_30px_rgba(34,197,94,0.06)]">
              <div className="flex items-center justify-between border-b border-green-500/10 bg-zinc-900/40 px-4 py-2.5">
                <div className="flex items-center gap-1.5">
                  <span className="h-2 w-2 rounded-full bg-red-500/60" />
                  <span className="h-2 w-2 rounded-full bg-yellow-500/60" />
                  <span className="h-2 w-2 rounded-full bg-green-500/60" />
                </div>
                <span className="font-mono text-[9px] text-zinc-700">network.status</span>
              </div>
              <div className="p-4 space-y-3">
                <p className="font-mono text-[10px] font-semibold uppercase tracking-widest text-green-500 mb-3">Endpoint Health</p>
                {[
                  { name: 'api.jazz.support', ms: `${42 + Math.floor(cpuLoad * 0.4)}ms`, ok: true },
                  { name: 'auth.service', ms: `${18 + Math.floor(memUsage * 0.2)}ms`, ok: true },
                  { name: 'webhook.relay', ms: `${89 + Math.floor(cpuLoad * 0.6)}ms`, ok: cpuLoad < 60 },
                  { name: 'metrics.ingest', ms: `${31 + Math.floor(memUsage * 0.3)}ms`, ok: true },
                ].map(({ name, ms, ok }) => (
                  <div key={name} className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className={`h-1.5 w-1.5 rounded-full ${ok ? 'bg-green-500 shadow-[0_0_4px_rgba(34,197,94,0.8)]' : 'bg-red-500 shadow-[0_0_4px_rgba(239,68,68,0.8)]'} animate-pulse`} />
                      <span className="font-mono text-[9px] text-zinc-500">{name}</span>
                    </div>
                    <span className={`font-mono text-[9px] ${ok ? 'text-green-500/70' : 'text-red-400'}`}>{ms}</span>
                  </div>
                ))}
                <div className="mt-3 border-t border-green-500/10 pt-3 grid grid-cols-3 gap-2">
                  <div className="text-center">
                    <p className="font-mono text-[8px] text-zinc-700">PACKET LOSS</p>
                    <p className="font-mono text-[10px] font-bold text-green-500">0.0%</p>
                  </div>
                  <div className="text-center">
                    <p className="font-mono text-[8px] text-zinc-700">LATENCY</p>
                    <p className="font-mono text-[10px] font-bold text-green-500">{42 + Math.floor(cpuLoad * 0.3)}ms</p>
                  </div>
                  <div className="text-center">
                    <p className="font-mono text-[8px] text-zinc-700">UPTIME</p>
                    <p className="font-mono text-[10px] font-bold text-green-500">99.9%</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* ── Full-width Dashboard Row ── */}
        <div className="grid grid-cols-1 gap-4 pb-10 md:grid-cols-2">

          {/* Live Ticket Queue */}
          <div className="overflow-hidden rounded-xl border border-green-500/15 bg-black">
            <div className="flex items-center justify-between border-b border-green-500/10 bg-zinc-900/40 px-5 py-3">
              <div className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-green-500 animate-pulse" />
                <span className="font-mono text-[10px] font-semibold text-green-500">LIVE QUEUE</span>
              </div>
              <div className="flex items-center gap-4">
                <span className="font-mono text-[9px] text-zinc-600">DEPTH: {queueDepth}</span>
                <span className="font-mono text-[9px] text-zinc-600">AVG: {avgRes}</span>
              </div>
            </div>
            <div className="divide-y divide-green-500/5">
              {tickets.map((t) => {
                const isResolving = resolving.has(t.uid);
                const isResolved = t.status === 'RESOLVED';
                return (
                  <div key={t.uid} className={`flex items-center gap-4 px-5 py-3.5 transition-all duration-300 slide-in ${isResolved ? 'resolve-flash' : ''}`}>
                    <span className={`shrink-0 rounded border px-2 py-0.5 font-mono text-[8px] font-bold ${P_COLOR[t.priority]}`}>{t.priority}</span>
                    <div className="min-w-0 flex-1">
                      <p className="truncate text-sm text-zinc-300">{t.title}</p>
                      <div className="mt-0.5 flex items-center gap-3">
                        <span className={`font-mono text-[9px] ${S_COLOR[t.status]}`}>{t.status}</span>
                        <span className="font-mono text-[9px] text-zinc-700">#{t.id} · {t.age} ago</span>
                      </div>
                    </div>
                    {!isResolved ? (
                      <button onClick={() => resolveTicket(t.uid)} disabled={isResolving}
                        className="shrink-0 rounded border border-green-500/20 px-3 py-1 font-mono text-[9px] text-green-500 transition hover:border-green-500/60 hover:bg-green-500/10 hover:shadow-[0_0_8px_rgba(34,197,94,0.2)] disabled:opacity-40">
                        {isResolving ? 'CLOSING...' : 'RESOLVE →'}
                      </button>
                    ) : (
                      <span className="font-mono text-[9px] text-green-500">RESOLVED ✓</span>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* System Log */}
          <div className="overflow-hidden rounded-xl border border-green-500/10 bg-black">
            <div className="flex items-center justify-between border-b border-green-500/10 bg-zinc-900/40 px-5 py-3">
              <div className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-green-500 animate-pulse" />
                <span className="font-mono text-[10px] text-zinc-500">system.log — live feed</span>
              </div>
              <span className="font-mono text-[9px] text-zinc-700">{logEntries.length} entries</span>
            </div>
            <div ref={logBoxRef} className="h-52 overflow-y-auto p-4 space-y-2" style={{ scrollbarWidth: 'none' }}>
              {logEntries.map((entry, i) => (
                <p key={i} className={`font-mono text-[10px] leading-relaxed transition-opacity duration-300 ${i === logEntries.length - 1 ? 'opacity-100' : 'opacity-50'} ${LOG_COLOR[entry.type]}`}>
                  <span className="mr-2 opacity-60">{LOG_PREFIX[entry.type]}</span>{entry.text}
                </p>
              ))}
            </div>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="border-t border-green-500/10 py-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-6 font-mono text-[9px] text-zinc-800">
              {['Technical Support', 'API Debugging', 'Root Cause Analysis', 'SaaS Support', 'Incident Response'].map((t, i) => (
                <span key={i} className="hidden shrink-0 md:block">{t} <span className="text-green-900">·</span></span>
              ))}
            </div>
            <div className="flex items-center gap-2">
              <span className="h-1 w-1 rounded-full bg-green-500 animate-pulse" />
              <span className="font-mono text-[9px] text-green-700">ALL SYSTEMS OPERATIONAL</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
