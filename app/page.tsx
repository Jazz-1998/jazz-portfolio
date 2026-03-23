import MobileMenu from "./components/MobileMenu";
import ScrollReveal from "./components/ScrollReveal";
import Hero from "./components/Hero";
import ContactForm from "./components/ContactForm";
import ProblemSolver from "./components/ProblemSolver";

/* ── Data ──────────────────────────────────────────────────────── */

const showcaseCards = [
  {
    icon: "⚙️",
    title: "Technical Support Engineer",
    description:
      "When something breaks, I'm the person you actually want to talk to. I stay calm, dig deep, and don't quit until it's solved — for real.",
    items: ["SaaS support", "Troubleshooting", "Customer experience"],
  },
  {
    icon: "🧠",
    title: "Problem Solver",
    description:
      "I treat every issue like a puzzle. Not in a nerdy-obsessive way — okay, maybe a little. But I find the root cause every time.",
    items: ["Root cause analysis", "Clarity", "Ownership"],
  },
  {
    icon: "🤖",
    title: "AI Enthusiast",
    description:
      "I genuinely love exploring how AI makes support smarter. Not to replace humans — just to make us ridiculously good at our jobs.",
    items: ["AI tools", "Automation", "Smarter systems"],
  },
];

const skills = [
  { name: "Technical Troubleshooting", tag: "Support" },
  { name: "Root Cause Analysis", tag: "Analytical" },
  { name: "SaaS Support", tag: "Domain" },
  { name: "API Debugging", tag: "Technical" },
  { name: "Customer Issue Resolution", tag: "Support" },
  { name: "Cross-Functional Collaboration", tag: "Teamwork" },
  { name: "Documentation", tag: "Operations" },
  { name: "Support Operations", tag: "Operations" },
];

const tools = ["SQL", "Postman", "Jira", "Datadog", "AWS", "Freshdesk", "Notion", "GitHub"];

const programming = [
  {
    name: "HTML",
    color: "#E34F26",
    bg: "#FFF1EC",
    path: "M1.5 0h21l-1.91 21.563L11.977 24l-8.564-2.438L1.5 0zm7.031 9.75l-.232-2.718 10.059.003.23-2.622L5.412 4.41l.698 8.01h9.126l-.326 3.426-2.91.804-2.955-.81-.188-2.11H6.248l.33 4.171L12 19.351l5.379-1.443.744-8.157H8.531z",
  },
  {
    name: "CSS",
    color: "#663399",
    bg: "#F5EEFF",
    path: "M0 0v20.16A3.84 3.84 0 0 0 3.84 24h16.32A3.84 3.84 0 0 0 24 20.16V3.84A3.84 3.84 0 0 0 20.16 0Zm14.256 13.08c1.56 0 2.28 1.08 2.304 2.64h-1.608c.024-.288-.048-.6-.144-.84-.096-.192-.288-.264-.552-.264-.456 0-.696.264-.696.84-.024.576.288.888.768 1.08.72.288 1.608.744 1.92 1.296q.432.648.432 1.656c0 1.608-.912 2.592-2.496 2.592-1.656 0-2.4-1.032-2.424-2.688h1.68c0 .792.264 1.176.792 1.176.264 0 .456-.072.552-.24.192-.312.24-1.176-.048-1.512-.312-.408-.912-.6-1.32-.816q-.828-.396-1.224-.936c-.24-.36-.36-.888-.36-1.536 0-1.44.936-2.472 2.424-2.448m5.4 0c1.584 0 2.304 1.08 2.328 2.64h-1.608c0-.288-.048-.6-.168-.84-.096-.192-.264-.264-.528-.264-.48 0-.72.264-.72.84s.288.888.792 1.08c.696.288 1.608.744 1.92 1.296.264.432.408.984.408 1.656.024 1.608-.888 2.592-2.472 2.592-1.68 0-2.424-1.056-2.448-2.688h1.68c0 .744.264 1.176.792 1.176.264 0 .456-.072.552-.24.216-.312.264-1.176-.048-1.512-.288-.408-.888-.6-1.32-.816-.552-.264-.96-.576-1.2-.936s-.36-.888-.36-1.536c-.024-1.44.912-2.472 2.4-2.448m-11.031.018c.711-.006 1.419.198 1.839.63.432.432.672 1.128.648 1.992H9.336c.024-.456-.096-.792-.432-.96-.312-.144-.768-.048-.888.24-.12.264-.192.576-.168.864v3.504c0 .744.264 1.128.768 1.128a.65.65 0 0 0 .552-.264c.168-.24.192-.552.168-.84h1.776c.096 1.632-.984 2.712-2.568 2.688-1.536 0-2.496-.864-2.472-2.472v-4.032c0-.816.24-1.44.696-1.848.432-.408 1.146-.624 1.857-.63",
  },
  {
    name: "JavaScript",
    color: "#B8860B",
    bg: "#FFFBEA",
    path: "M0 0h24v24H0V0zm22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.585-1.797-1.14-.091-.33-.105-.51-.046-.705.15-.646.915-.84 1.515-.66.39.12.75.42.976.9 1.034-.676 1.034-.676 1.755-1.125-.27-.42-.404-.601-.586-.78-.63-.705-1.469-1.065-2.834-1.034l-.705.089c-.676.165-1.32.525-1.71 1.005-1.14 1.291-.811 3.541.569 4.471 1.365 1.02 3.361 1.244 3.616 2.205.24 1.17-.87 1.545-1.966 1.41-.811-.18-1.26-.586-1.755-1.336l-1.83 1.051c.21.48.45.689.81 1.109 1.74 1.756 6.09 1.666 6.871-1.004.029-.09.24-.705.074-1.65l.046.067zm-8.983-7.245h-2.248c0 1.938-.009 3.864-.009 5.805 0 1.232.063 2.363-.138 2.711-.33.689-1.18.601-1.566.48-.396-.196-.597-.466-.83-.855-.063-.105-.11-.196-.127-.196l-1.825 1.125c.305.63.75 1.172 1.324 1.517.855.51 2.004.675 3.207.405.783-.226 1.458-.691 1.811-1.411.51-.93.402-2.07.397-3.346.012-2.054 0-4.109 0-6.179l.004-.056z",
  },
  {
    name: "PHP",
    color: "#777BB4",
    bg: "#F0F0FF",
    path: "M7.01 10.207h-.944l-.515 2.648h.838c.556 0 .97-.105 1.242-.314.272-.21.455-.559.55-1.049.092-.47.05-.802-.124-.995-.175-.193-.523-.29-1.047-.29zM12 5.688C5.373 5.688 0 8.514 0 12s5.373 6.313 12 6.313S24 15.486 24 12c0-3.486-5.373-6.312-12-6.312zm-3.26 7.451c-.261.25-.575.438-.917.551-.336.108-.765.164-1.285.164H5.357l-.327 1.681H3.652l1.23-6.326h2.65c.797 0 1.378.209 1.744.628.366.418.476 1.002.33 1.752a2.836 2.836 0 0 1-.305.847c-.143.255-.33.49-.561.703zm4.024.715l.543-2.799c.063-.318.039-.536-.068-.651-.107-.116-.336-.174-.687-.174H11.46l-.704 3.625H9.388l1.23-6.327h1.367l-.327 1.682h1.218c.767 0 1.295.134 1.586.401s.378.7.263 1.299l-.572 2.944h-1.389zm7.597-2.265a2.782 2.782 0 0 1-.305.847c-.143.255-.33.49-.561.703a2.44 2.44 0 0 1-.917.551c-.336.108-.765.164-1.286.164h-1.18l-.327 1.682h-1.378l1.23-6.326h2.649c.797 0 1.378.209 1.744.628.366.417.477 1.001.331 1.751zM17.766 10.207h-.943l-.516 2.648h.838c.557 0 .971-.105 1.242-.314.272-.21.455-.559.551-1.049.092-.47.049-.802-.125-.995s-.524-.29-1.047-.29z",
  },
];

const funItems = [
  { label: "Playing soccer", icon: "⚽" },
  { label: "Playing FIFA", icon: "🎮" },
  { label: "Traveling", icon: "✈️" },
  { label: "Spending time with family", icon: "❤️" },
  { label: "Walking outside", icon: "🚶" },
  { label: "Working out", icon: "💪" },
];

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Story", href: "#story" },
  { label: "Skills", href: "#skills" },
  { label: "Human", href: "#human" },
  { label: "Contact", href: "#contact" },
];

const MARQUEE =
  "EVERY PROBLEM HAS A SOLUTION  ✦  LET'S FIX IT TOGETHER  ✦  JAZZ ALHUSSEIN  ✦  TECHNICAL SUPPORT ENGINEER  ✦  CALM UNDER PRESSURE  ✦  REAL HUMAN  ✦  ";

/* ── Icons ─────────────────────────────────────────────────────── */

function GithubIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6" aria-hidden="true">
      <path d="M12 2C6.477 2 2 6.589 2 12.248c0 4.526 2.865 8.367 6.839 9.722.5.096.682-.221.682-.492 0-.244-.009-.89-.014-1.747-2.782.617-3.369-1.37-3.369-1.37-.455-1.177-1.11-1.49-1.11-1.49-.908-.636.069-.623.069-.623 1.004.072 1.532 1.053 1.532 1.053.892 1.566 2.341 1.114 2.91.852.091-.664.35-1.114.636-1.37-2.221-.259-4.555-1.14-4.555-5.073 0-1.12.39-2.036 1.029-2.753-.103-.26-.446-1.307.097-2.724 0 0 .84-.276 2.75 1.051A9.303 9.303 0 0 1 12 6.836a9.27 9.27 0 0 1 2.504.347c1.909-1.327 2.747-1.051 2.747-1.051.545 1.417.202 2.464.1 2.724.64.717 1.027 1.633 1.027 2.753 0 3.943-2.338 4.811-4.566 5.065.359.318.679.946.679 1.907 0 1.377-.012 2.488-.012 2.826 0 .273.18.592.688.491C19.138 20.611 22 16.772 22 12.248 22 6.589 17.523 2 12 2Z" />
    </svg>
  );
}

function LinkedinIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6" aria-hidden="true">
      <path d="M6.94 8.5H3.56V19.5h3.38V8.5ZM5.25 3C4.14 3 3.25 3.91 3.25 5.03c0 1.11.89 2.02 2 2.02 1.11 0 2-.91 2-2.02C7.25 3.91 6.36 3 5.25 3Zm14.5 9.67c0-3.11-1.66-4.56-3.88-4.56-1.79 0-2.59.99-3.04 1.68V8.5H9.45c.04.85 0 11 0 11h3.38v-6.14c0-.33.02-.66.12-.9.26-.66.86-1.35 1.86-1.35 1.31 0 1.84 1.02 1.84 2.52v5.87h3.38l.02-6.83Z" />
    </svg>
  );
}


function Label({ children, light = false }: { children: React.ReactNode; light?: boolean }) {
  return (
    <p className={`mb-4 text-[11px] font-bold uppercase tracking-[0.25em] ${light ? "text-green-400" : "text-green-600"}`}>
      {children}
    </p>
  );
}

/* ── Page ──────────────────────────────────────────────────────── */

export default function Home() {
  return (
    <main className="bg-[#f5f5f3] text-zinc-900 selection:bg-green-500 selection:text-white">

      {/* ── Header ───────────────────────────────────── */}
      <header className="relative sticky top-0 z-50 border-b border-zinc-200 bg-white/95 backdrop-blur-xl">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <a href="#home" className="text-base font-black uppercase tracking-widest text-zinc-900 transition hover:text-green-600">
            Jazz
          </a>
          <nav className="hidden items-center gap-8 md:flex">
            {navLinks.map(({ label, href }) => (
              <a
                key={label}
                href={href}
                className="text-base font-bold uppercase tracking-widest text-zinc-900 transition hover:text-green-600"
              >
                {label}
              </a>
            ))}
          </nav>
          <div className="flex items-center gap-4">
            <a href="https://github.com/Jazz-1998" target="_blank" rel="noreferrer" aria-label="GitHub" className="text-zinc-900 transition hover:text-green-600">
              <GithubIcon />
            </a>
            <a href="https://www.linkedin.com/in/jawad-alhussein/" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="text-zinc-900 transition hover:text-green-600">
              <LinkedinIcon />
            </a>
            <a href="mailto:alhusseinjazz@gmail.com" aria-label="Email" className="text-zinc-900 transition hover:text-green-600">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-6 w-6" aria-hidden="true">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" strokeLinecap="round" strokeLinejoin="round" />
                <polyline points="22,6 12,13 2,6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
            <MobileMenu />
          </div>
        </div>
      </header>

      {/* ── Hero ─────────────────────────────────────── */}
      <Hero />

      {/* ── Marquee ──────────────────────────────────── */}
      <div className="overflow-hidden border-y border-[#1c1c1c] bg-[#0c0c0c] py-4" aria-hidden="true">
        <div className="marquee-track">
          {[0, 1].map((i) => (
            <span key={i} className="pr-6 text-[10px] font-bold uppercase tracking-[0.3em] text-zinc-600">
              {MARQUEE.repeat(4)}
            </span>
          ))}
        </div>
      </div>

      {/* ── Story ─────────────────────────────────────── */}
      <section id="story" className="bg-[#0c0c0c] text-white">
        <div className="mx-auto max-w-6xl px-6 py-24 md:py-32">
          <div className="grid gap-16 md:grid-cols-2 md:gap-24">

            {/* left */}
            <div>
              <ScrollReveal>
                <Label light>My Story</Label>
                <h2 className="text-4xl font-black leading-tight tracking-tight text-white md:text-5xl">
                  Where it all<br />
                  <span className="text-green-500">started.</span>
                </h2>
              </ScrollReveal>
              <ScrollReveal delay={1}>
                <div className="mt-10 space-y-5 text-base leading-9 text-zinc-400">
                  <p>
                    &ldquo;Every problem has a solution&rdquo; — I didn&apos;t read that
                    in a book. I lived it. Growing up, my dad always pulled me in to help:
                    painting, cutting grass, fixing random stuff around the house.
                  </p>
                  <p>
                    And every time something went wrong — because it always did —
                    I didn&apos;t walk away. I figured it out. Every. Single. Time.
                    That became who I am.
                  </p>
                  <p>
                    Support isn&apos;t just a job title for me. It&apos;s how I&apos;m wired.
                    I genuinely can&apos;t leave a problem unsolved. It keeps me up at night
                    — in the best way possible.
                  </p>
                </div>
              </ScrollReveal>
            </div>

            {/* right — quote */}
            <ScrollReveal delay={2}>
              <div className="flex h-full flex-col justify-center md:pt-20">
                <div className="mb-8 h-px w-8 bg-green-500" />
                <blockquote className="space-y-1 text-2xl font-black leading-snug tracking-tight md:text-3xl">
                  <p className="text-white">I love helping people.</p>
                  <p className="text-zinc-600">And when their problem is gone —</p>
                  <p className="text-zinc-600">when I see that relief —</p>
                  <p className="text-zinc-600">that smile —</p>
                  <p className="text-green-400">that&apos;s everything to me.</p>
                </blockquote>
                <div className="mt-10 h-px bg-zinc-800" />
                <p className="mt-6 text-sm leading-8 text-zinc-500">
                  That&apos;s why I do this. Not for the tickets. Not for the metrics.
                  For the moment someone says &ldquo;thank you, I was going crazy&rdquo; —
                  and I get to say &ldquo;I know. You&apos;re good now.&rdquo;
                </p>
              </div>
            </ScrollReveal>

          </div>
        </div>
      </section>

      {/* ── What I do ────────────────────────────────── */}
      <section id="about" className="bg-white py-24 md:py-32">
        <div className="mx-auto max-w-6xl px-6">
          <ScrollReveal>
            <Label>What I do</Label>
            <h2 className="mb-14 text-4xl font-black tracking-tight text-zinc-950 md:text-5xl">
              How I show up — every time.
            </h2>
          </ScrollReveal>

          <div className="grid gap-5 md:grid-cols-3">
            {showcaseCards.map((card, i) => (
              <ScrollReveal key={card.title} delay={((i + 1) as 1 | 2 | 3)}>
                <div className="group flex h-full flex-col rounded-2xl border border-zinc-100 bg-[#f9f9f7] p-8 transition duration-300 hover:-translate-y-1 hover:border-zinc-200 hover:shadow-lg">
                  <div className="mb-5 text-3xl">{card.icon}</div>
                  <h3 className="mb-3 text-lg font-bold tracking-tight text-zinc-900">{card.title}</h3>
                  <p className="mb-6 flex-1 text-sm leading-7 text-zinc-500">{card.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {card.items.map((item) => (
                      <span
                        key={item}
                        className="rounded-full bg-white px-3 py-1 text-xs font-medium text-zinc-500 ring-1 ring-zinc-200"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Skills & Tools ────────────────────────────── */}
      <section id="skills" className="bg-[#f5f5f3] py-24 md:py-32">
        <div className="mx-auto max-w-6xl px-6">
          <ScrollReveal>
            <Label>Skills & Tools</Label>
            <h2 className="mb-14 text-4xl font-black tracking-tight text-zinc-950 md:text-5xl">
              My toolkit. Pretty solid.
            </h2>
          </ScrollReveal>

          <div className="grid gap-12 md:grid-cols-[1.5fr_1fr_1fr] md:gap-20">

            {/* Skills */}
            <ScrollReveal delay={1}>
              <p className="mb-5 text-[10px] font-bold uppercase tracking-[0.25em] text-zinc-400">Skills</p>
              <div className="divide-y divide-zinc-200">
                {skills.map((skill, i) => (
                  <div
                    key={skill.name}
                    className="group -mx-3 flex items-center gap-5 rounded-xl px-3 py-4 transition duration-150 hover:bg-white"
                  >
                    <span className="w-7 shrink-0 text-xs font-bold tabular-nums text-zinc-300 transition duration-150 group-hover:text-green-500">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="flex-1 text-sm font-semibold text-zinc-800 transition duration-150 group-hover:text-green-700">
                      {skill.name}
                    </span>
                    <span className="shrink-0 rounded-full bg-zinc-100 px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-zinc-400 transition duration-150 group-hover:bg-green-100 group-hover:text-green-700">
                      {skill.tag}
                    </span>
                  </div>
                ))}
              </div>
            </ScrollReveal>

            {/* Tools */}
            <ScrollReveal delay={2}>
              <p className="mb-5 text-[10px] font-bold uppercase tracking-[0.25em] text-zinc-400">Tools</p>
              <div className="grid grid-cols-2 gap-2.5">
                {tools.map((tool) => (
                  <div
                    key={tool}
                    className="group flex items-center gap-3 rounded-xl border border-zinc-200 bg-white px-4 py-3.5 transition duration-150 hover:border-green-200 hover:bg-green-50"
                  >
                    <div className="h-1.5 w-1.5 shrink-0 rounded-full bg-green-500" />
                    <span className="text-sm font-semibold text-zinc-700 transition duration-150 group-hover:text-green-800">
                      {tool}
                    </span>
                  </div>
                ))}
              </div>
            </ScrollReveal>

            {/* Programming */}
            <ScrollReveal delay={3}>
              <p className="mb-5 text-[10px] font-bold uppercase tracking-[0.25em] text-zinc-400">Programming</p>
              <div className="grid grid-cols-2 gap-3">
                {programming.map((lang) => (
                  <div
                    key={lang.name}
                    className="group flex flex-col items-center gap-3 rounded-2xl border border-zinc-100 bg-white p-5 shadow-sm transition duration-200 hover:-translate-y-1 hover:shadow-md"
                    style={{ borderTopColor: lang.color, borderTopWidth: 3 }}
                  >
                    <div
                      className="flex h-12 w-12 items-center justify-center rounded-xl"
                      style={{ backgroundColor: lang.bg }}
                    >
                      <svg viewBox="0 0 24 24" className="h-7 w-7" style={{ fill: lang.color }} aria-hidden="true">
                        <path d={lang.path} />
                      </svg>
                    </div>
                    <span className="text-xs font-bold tracking-wide text-zinc-700">{lang.name}</span>
                  </div>
                ))}
              </div>
            </ScrollReveal>

          </div>
        </div>
      </section>

      {/* ── Human ─────────────────────────────────────── */}
      <section id="human" className="bg-white py-24 md:py-32">
        <div className="mx-auto max-w-6xl px-6">
          <ScrollReveal>
            <Label>I&apos;m not a robot</Label>
            <div className="mb-14 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
              <h2 className="text-4xl font-black tracking-tight text-zinc-950 md:text-5xl">
                Outside of work.
              </h2>
              <p className="max-w-sm text-base leading-8 text-zinc-500">
                The best technical people are still fully human. Yes, they can have a life.
                Let me tell you what keeps me alive outside of my career.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {funItems.map((item, i) => (
              <ScrollReveal key={item.label} delay={((i % 3) + 1) as 1 | 2 | 3}>
                <div className="group relative overflow-hidden rounded-2xl border border-zinc-100 bg-[#f9f9f7] p-7 transition duration-300 hover:-translate-y-1 hover:border-green-200 hover:shadow-lg">
                  <div className="absolute -right-4 -top-4 text-6xl opacity-10 transition duration-300 group-hover:opacity-20 group-hover:scale-110">
                    {item.icon}
                  </div>
                  <span className="mb-3 block text-3xl">{item.icon}</span>
                  <span className="text-sm font-bold text-zinc-700 transition duration-150 group-hover:text-green-700">
                    {item.label}
                  </span>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Problem Solver ───────────────────────────── */}
      <ProblemSolver />

      {/* ── Contact ───────────────────────────────────── */}
      <section id="contact" className="relative overflow-hidden bg-black py-24 md:py-36">

        {/* watermark — texture only */}
        <p className="pointer-events-none absolute inset-x-0 top-0 select-none text-center text-[clamp(5rem,18vw,14rem)] font-black uppercase leading-none tracking-tighter text-white/[0.025]" aria-hidden="true">
          Contact
        </p>

        {/* layered glows */}
        <div className="pointer-events-none absolute inset-0" aria-hidden="true">
          <div className="absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-green-500/10 blur-[180px]" />
          <div className="absolute left-1/4 top-1/4 h-[300px] w-[300px] rounded-full bg-green-400/5 blur-[120px]" />
          <div className="absolute right-1/4 bottom-1/4 h-[250px] w-[250px] rounded-full bg-green-600/5 blur-[100px]" />
        </div>

        <div className="relative mx-auto max-w-6xl px-6">

          {/* heading */}
          <ScrollReveal>
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.35em] text-green-400">Get in touch</p>
            <h2 className="relative mb-16 text-5xl font-black text-white md:text-7xl">
              <span className="relative z-10">Don&apos;t be a stranger.</span>
              <span className="absolute inset-0 text-green-500 opacity-[0.15] blur-2xl" aria-hidden="true">Don&apos;t be a stranger.</span>
            </h2>
          </ScrollReveal>

          <div className="grid gap-16 md:grid-cols-2 md:gap-24">

            {/* left — info */}
            <ScrollReveal delay={1}>
              <div className="space-y-5">
                <p className="text-xl leading-9 text-zinc-100">
                  I&apos;ve always loved connecting with people. It doesn&apos;t matter where you&apos;re from,
                  what your background is, or what path brought you here.
                </p>
                <p className="text-lg font-medium leading-9 text-green-400">
                  If you came from the moon, I&apos;d probably ask how the trip was and tell you to pull up a chair.
                </p>
                <p className="text-lg leading-9 text-zinc-200">
                  And if you just want a real conversation, that works too.
                </p>
                <p className="text-lg leading-9 text-zinc-300">
                  Life, opportunities, ideas, vision, or anything random — I&apos;m here. 😉 
                </p>
              </div>

              <div className="mt-10 space-y-3 border-t border-zinc-800/60 pt-10">
                {/* Email */}
                <a
                  href="mailto:alhusseinjazz@gmail.com"
                  className="group flex items-center gap-4 rounded-xl border border-zinc-700 bg-zinc-900 p-4 transition duration-200 hover:-translate-y-px hover:border-green-500/50 hover:bg-zinc-800"
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-zinc-800 text-zinc-300 transition duration-200 group-hover:bg-green-500/10 group-hover:text-green-400">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-5 w-5" aria-hidden="true">
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" strokeLinecap="round" strokeLinejoin="round" />
                      <polyline points="22,6 12,13 2,6" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-[10px] uppercase tracking-widest text-zinc-500">Email</p>
                    <p className="text-sm font-semibold text-white">alhusseinjazz@gmail.com</p>
                  </div>
                </a>

                {/* LinkedIn */}
                <a
                  href="https://www.linkedin.com/in/jawad-alhussein/"
                  target="_blank"
                  rel="noreferrer"
                  className="group flex items-center gap-4 rounded-xl border border-zinc-700 bg-zinc-900 p-4 transition duration-200 hover:-translate-y-px hover:border-green-500/50 hover:bg-zinc-800"
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-zinc-800 text-zinc-300 transition duration-200 group-hover:bg-green-500/10 group-hover:text-green-400">
                    <LinkedinIcon />
                  </div>
                  <div>
                    <p className="text-[10px] uppercase tracking-widest text-zinc-500">LinkedIn</p>
                    <p className="text-sm font-semibold text-white">jawad-alhussein</p>
                  </div>
                </a>

                {/* GitHub */}
                <a
                  href="https://github.com/Jazz-1998"
                  target="_blank"
                  rel="noreferrer"
                  className="group flex items-center gap-4 rounded-xl border border-zinc-700 bg-zinc-900 p-4 transition duration-200 hover:-translate-y-px hover:border-green-500/50 hover:bg-zinc-800"
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-zinc-800 text-zinc-300 transition duration-200 group-hover:bg-green-500/10 group-hover:text-green-400">
                    <GithubIcon />
                  </div>
                  <div>
                    <p className="text-[10px] uppercase tracking-widest text-zinc-500">GitHub</p>
                    <p className="text-sm font-semibold text-white">Jazz-1998</p>
                  </div>
                </a>
              </div>
            </ScrollReveal>

            {/* right — form */}
            <ScrollReveal delay={2}>
              <p className="mb-6 text-xs font-bold uppercase tracking-[0.35em] text-green-400">Contact me</p>
              <ContactForm />
            </ScrollReveal>

          </div>
        </div>
      </section>


{/* ── Footer ───────────────────────────────────── */}
      <footer className="border-t border-zinc-900 bg-[#0c0c0c] px-6 py-6">
        <div className="mx-auto flex max-w-6xl items-center justify-center">
          <p className="text-xs text-zinc-700">Coded by Jazz Alhussein (Yes, I am also a programmer too :D)</p>
        </div>
      </footer>

    </main>
  );
}
