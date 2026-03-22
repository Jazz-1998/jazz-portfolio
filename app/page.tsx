import Image from "next/image";

const skillGroups = [
  {
    title: "Support & Troubleshooting",
    items: [
      "Technical Troubleshooting",
      "Root Cause Analysis",
      "Customer Issue Resolution",
      "SaaS Support",
      "Support Operations",
    ],
  },
  {
    title: "Systems & Collaboration",
    items: [
      "API Debugging",
      "Cross-Functional Collaboration",
      "Documentation",
      "Process Improvement",
      "Escalation Management",
    ],
  },
];

const tools = [
  "SQL",
  "Postman",
  "Jira",
  "Datadog",
  "AWS",
  "Freshdesk",
  "Notion",
  "GitHub",
];

const featuredCards = [
  {
    id: "01",
    title: "Technical Support Engineer",
    text: "I enjoy working in environments where customers need clarity, ownership, and someone who can think through real technical problems instead of giving surface-level answers.",
  },
  {
    id: "02",
    title: "Problem Solver",
    text: "Every problem has a solution. I like breaking down messy situations, finding the real issue, and turning confusion into something clear and fixable.",
  },
  {
    id: "03",
    title: "AI Curious",
    text: "I’m excited by AI and how it can improve support workflows, technical operations, and the way people learn, troubleshoot, and solve problems faster.",
  },
];

const funItems = [
  "Playing soccer",
  "Playing FIFA",
  "Traveling",
  "Spending time with family",
  "Walking outside",
  "Working out",
];

function GithubIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5" aria-hidden="true">
      <path d="M12 2C6.477 2 2 6.589 2 12.248c0 4.526 2.865 8.367 6.839 9.722.5.096.682-.221.682-.492 0-.244-.009-.89-.014-1.747-2.782.617-3.369-1.37-3.369-1.37-.455-1.177-1.11-1.49-1.11-1.49-.908-.636.069-.623.069-.623 1.004.072 1.532 1.053 1.532 1.053.892 1.566 2.341 1.114 2.91.852.091-.664.35-1.114.636-1.37-2.221-.259-4.555-1.14-4.555-5.073 0-1.12.39-2.036 1.029-2.753-.103-.26-.446-1.307.097-2.724 0 0 .84-.276 2.75 1.051A9.303 9.303 0 0 1 12 6.836a9.27 9.27 0 0 1 2.504.347c1.909-1.327 2.747-1.051 2.747-1.051.545 1.417.202 2.464.1 2.724.64.717 1.027 1.633 1.027 2.753 0 3.943-2.338 4.811-4.566 5.065.359.318.679.946.679 1.907 0 1.377-.012 2.488-.012 2.826 0 .273.18.592.688.491C19.138 20.611 22 16.772 22 12.248 22 6.589 17.523 2 12 2Z" />
    </svg>
  );
}

function LinkedinIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5" aria-hidden="true">
      <path d="M6.94 8.5H3.56V19.5h3.38V8.5ZM5.25 3C4.14 3 3.25 3.91 3.25 5.03c0 1.11.89 2.02 2 2.02 1.11 0 2-.91 2-2.02C7.25 3.91 6.36 3 5.25 3Zm14.5 9.67c0-3.11-1.66-4.56-3.88-4.56-1.79 0-2.59.99-3.04 1.68V8.5H9.45c.04.85 0 11 0 11h3.38v-6.14c0-.33.02-.66.12-.9.26-.66.86-1.35 1.86-1.35 1.31 0 1.84 1.02 1.84 2.52v5.87h3.38l.02-6.83Z" />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-5 w-5" aria-hidden="true">
      <path d="M3.75 6.75h16.5v10.5H3.75z" strokeLinecap="round" strokeLinejoin="round" />
      <path d="m4.5 7.5 7.5 6 7.5-6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white selection:bg-green-400 selection:text-black">
      <div className="fixed inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,rgba(34,197,94,0.14),transparent_28%),radial-gradient(circle_at_80%_20%,rgba(34,197,94,0.08),transparent_20%),radial-gradient(circle_at_bottom_right,rgba(34,197,94,0.10),transparent_30%)]" />
      <div className="fixed inset-0 -z-10 opacity-[0.06] bg-[linear-gradient(to_right,white_1px,transparent_1px),linear-gradient(to_bottom,white_1px,transparent_1px)] bg-[size:44px_44px]" />

      <header className="sticky top-0 z-50 border-b border-green-500/10 bg-black/70 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <a href="#home" className="text-sm font-semibold uppercase tracking-[0.35em] text-green-400">
            Jazz
          </a>

          <nav className="hidden gap-6 text-sm text-gray-300 md:flex">
            <a href="#about" className="transition hover:text-green-300">About</a>
            <a href="#skills" className="transition hover:text-green-300">Skills</a>
            <a href="#human" className="transition hover:text-green-300">Human</a>
            <a href="#contact" className="transition hover:text-green-300">Contact</a>
          </nav>

          <div className="flex items-center gap-3">
            <a
              href="https://github.com/Jazz-1998"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="rounded-full border border-green-500/20 bg-white/5 p-2 text-gray-300 transition hover:border-green-400/40 hover:text-green-300"
            >
              <GithubIcon />
            </a>
            <a
              href="https://www.linkedin.com/in/YOUR-LINKEDIN/"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="rounded-full border border-green-500/20 bg-white/5 p-2 text-gray-300 transition hover:border-green-400/40 hover:text-green-300"
            >
              <LinkedinIcon />
            </a>
            <a
              href="mailto:youremail@example.com"
              aria-label="Email"
              className="rounded-full border border-green-500/20 bg-white/5 p-2 text-gray-300 transition hover:border-green-400/40 hover:text-green-300"
            >
              <MailIcon />
            </a>
          </div>
        </div>
      </header>

      <section id="home" className="mx-auto max-w-7xl px-6 pb-24 pt-14 md:pt-24">
        <div className="grid items-center gap-10 lg:grid-cols-[1.15fr_0.85fr]">
          <div>
            <p className="mb-5 text-sm uppercase tracking-[0.35em] text-green-400">
              Technical Support Engineer
            </p>

            <h1 className="mb-6 text-5xl font-bold leading-[0.95] md:text-7xl">
              Every problem
              <span className="block text-green-400">has a solution.</span>
            </h1>

            <p className="mb-4 max-w-2xl text-lg leading-8 text-gray-300 md:text-xl">
              I love being a technical support engineer. I love turning problems into
              solutions, helping people through technical issues, and bringing clarity
              to moments that feel messy or overwhelming.
            </p>

            <p className="mb-8 max-w-2xl text-base leading-8 text-gray-400 md:text-lg">
              I’m also deeply interested in AI and how it can improve support workflows,
              troubleshooting, and the way humans solve problems without losing the
              human side of the work.
            </p>

            <div className="mb-10 flex flex-wrap gap-4">
              <a
                href="#contact"
                className="rounded-2xl bg-green-500 px-6 py-3 font-semibold text-black transition hover:bg-green-400 hover:shadow-[0_0_30px_rgba(34,197,94,0.35)]"
              >
                Let&apos;s Connect
              </a>
              <a
                href="#about"
                className="rounded-2xl border border-green-500/30 px-6 py-3 font-semibold text-white transition hover:border-green-400 hover:bg-green-500/10"
              >
                Learn More
              </a>
            </div>

            <div className="grid gap-4 sm:grid-cols-3">
              <div className="rounded-2xl border border-green-500/15 bg-white/5 p-4">
                <p className="mb-1 text-2xl font-bold text-green-400">SaaS</p>
                <p className="text-sm text-gray-400">Support and troubleshooting</p>
              </div>
              <div className="rounded-2xl border border-green-500/15 bg-white/5 p-4">
                <p className="mb-1 text-2xl font-bold text-green-400">APIs</p>
                <p className="text-sm text-gray-400">Integration and workflow debugging</p>
              </div>
              <div className="rounded-2xl border border-green-500/15 bg-white/5 p-4">
                <p className="mb-1 text-2xl font-bold text-green-400">AI</p>
                <p className="text-sm text-gray-400">Curiosity and future-facing thinking</p>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-6 rounded-[2rem] bg-green-500/10 blur-3xl" />
            <div className="relative overflow-hidden rounded-[2rem] border border-green-500/15 bg-zinc-950/95 shadow-[0_0_40px_rgba(34,197,94,0.10)]">
              <div className="flex items-center gap-2 border-b border-green-500/10 px-5 py-4">
                <span className="h-3 w-3 rounded-full bg-green-500/70" />
                <span className="h-3 w-3 rounded-full bg-white/20" />
                <span className="h-3 w-3 rounded-full bg-white/10" />
                <p className="ml-3 text-xs uppercase tracking-[0.35em] text-gray-500">
                  Human + Tech
                </p>
              </div>

              <div className="p-6">
                <div className="overflow-hidden rounded-[1.5rem] border border-green-500/10">
                  <Image
                    src="/profile.jpg"
                    alt="Jawad Jazz Alhussein"
                    width={900}
                    height={1100}
                    className="h-[430px] w-full object-cover"
                    priority
                  />
                </div>

                <div className="mt-4 grid grid-cols-2 gap-4">
                  <div className="rounded-2xl border border-green-500/10 bg-white/5 p-4">
                    <p className="mb-2 text-xs uppercase tracking-[0.3em] text-gray-500">
                      Mindset
                    </p>
                    <p className="text-sm leading-6 text-gray-300">
                      Calm under pressure. Solution focused.
                    </p>
                  </div>
                  <div className="rounded-2xl border border-green-500/10 bg-white/5 p-4">
                    <p className="mb-2 text-xs uppercase tracking-[0.3em] text-gray-500">
                      Identity
                    </p>
                    <p className="text-sm leading-6 text-gray-300">
                      Human first. Technical when needed. Both matter.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="mx-auto max-w-7xl px-6 pb-20">
        <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="mb-4 text-sm uppercase tracking-[0.35em] text-green-400">
              About Me
            </p>
            <h2 className="text-3xl font-semibold leading-tight md:text-4xl">
              Not just support.
              <span className="block text-green-400">Support with thought.</span>
            </h2>
          </div>

          <div className="rounded-[2rem] border border-green-500/15 bg-white/5 p-8">
            <p className="mb-5 leading-8 text-gray-300">
              My background is in technical support across SaaS environments where
              customers need more than quick replies. They need someone who can
              understand the issue, think clearly, communicate well, and help move
              toward a real solution.
            </p>
            <p className="mb-5 leading-8 text-gray-400">
              I enjoy the intersection of technology, communication, and problem
              solving. That means troubleshooting product behavior, understanding
              workflows, improving support processes, and helping people feel less
              stuck when something goes wrong.
            </p>
            <p className="leading-8 text-gray-400">
              I want my work to feel useful, sharp, and human. That’s the kind of
              professional I’m building myself into.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-20">
        <div className="grid gap-5 lg:grid-cols-3">
          {featuredCards.map((card) => (
            <div
              key={card.id}
              className="group rounded-[2rem] border border-green-500/15 bg-white/5 p-7 transition hover:-translate-y-1 hover:border-green-400/35 hover:bg-green-500/[0.06]"
            >
              <p className="mb-5 text-5xl font-bold text-green-500/20">{card.id}</p>
              <h3 className="mb-4 text-xl font-semibold transition group-hover:text-green-300">
                {card.title}
              </h3>
              <p className="leading-8 text-gray-400">{card.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="skills" className="mx-auto max-w-7xl px-6 pb-20">
        <div className="grid gap-8 lg:grid-cols-[1fr_0.8fr]">
          <div className="rounded-[2rem] border border-green-500/15 bg-white/5 p-8">
            <p className="mb-5 text-sm uppercase tracking-[0.35em] text-green-400">
              Skills
            </p>

            <div className="space-y-8">
              {skillGroups.map((group) => (
                <div key={group.title}>
                  <h3 className="mb-4 text-lg font-semibold">{group.title}</h3>
                  <div className="flex flex-wrap gap-3">
                    {group.items.map((item) => (
                      <span
                        key={item}
                        className="rounded-full border border-green-500/20 bg-green-500/10 px-4 py-2 text-sm text-green-200"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[2rem] border border-green-500/15 bg-white/5 p-8">
            <p className="mb-5 text-sm uppercase tracking-[0.35em] text-green-400">
              Tools
            </p>

            <div className="flex flex-wrap gap-3">
              {tools.map((tool) => (
                <span
                  key={tool}
                  className="rounded-full border border-green-500/20 bg-black px-4 py-2 text-sm text-gray-300"
                >
                  {tool}
                </span>
              ))}
            </div>

            <div className="mt-8 rounded-2xl border border-green-500/10 bg-black/40 p-5">
              <p className="mb-2 text-sm font-medium text-green-300">
                What I care about most
              </p>
              <p className="leading-7 text-gray-400">
                Solving the issue clearly, communicating like a real person, and
                making the customer feel like they are in good hands.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="human" className="mx-auto max-w-7xl px-6 pb-20">
        <div className="rounded-[2rem] border border-green-500/15 bg-gradient-to-br from-green-500/10 to-transparent p-8 md:p-10">
          <p className="mb-4 text-sm uppercase tracking-[0.35em] text-green-400">
            I’m not a robot
          </p>

          <h2 className="mb-4 text-3xl font-semibold md:text-4xl">
            You want to know what I like to do for fun?
          </h2>

          <p className="mb-8 max-w-2xl leading-8 text-gray-300">
            Outside of work, I like staying active, being around the people I care
            about, and actually enjoying life. I think that matters. The best
            technical people are still human.
          </p>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {funItems.map((item) => (
              <div
                key={item}
                className="rounded-2xl border border-green-500/15 bg-black/40 p-5 text-gray-300"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="mx-auto max-w-7xl px-6 pb-24">
        <div className="rounded-[2rem] border border-green-500/15 bg-white/5 p-8 md:p-10">
          <p className="mb-4 text-sm uppercase tracking-[0.35em] text-green-400">
            Contact
          </p>

          <h2 className="mb-4 text-3xl font-semibold md:text-4xl">
            Let’s connect.
          </h2>

          <p className="mb-8 max-w-2xl leading-8 text-gray-300">
            I’m open to technical support, SaaS support, operations, and adjacent
            roles where I can solve problems, support people, and keep growing.
          </p>

          <div className="grid gap-4 sm:grid-cols-3">
            <a
              href="mailto:youremail@example.com"
              className="rounded-2xl border border-green-500/20 bg-black/40 p-5 transition hover:border-green-400/40 hover:bg-green-500/10"
            >
              <div className="mb-3 flex items-center gap-3 text-green-300">
                <MailIcon />
                <span className="font-medium">Email</span>
              </div>
              <p className="break-all text-gray-300">youremail@example.com</p>
            </a>

            <a
              href="https://www.linkedin.com/in/YOUR-LINKEDIN/"
              target="_blank"
              rel="noreferrer"
              className="rounded-2xl border border-green-500/20 bg-black/40 p-5 transition hover:border-green-400/40 hover:bg-green-500/10"
            >
              <div className="mb-3 flex items-center gap-3 text-green-300">
                <LinkedinIcon />
                <span className="font-medium">LinkedIn</span>
              </div>
              <p className="text-gray-300">View profile</p>
            </a>

            <a
              href="https://github.com/Jazz-1998"
              target="_blank"
              rel="noreferrer"
              className="rounded-2xl border border-green-500/20 bg-black/40 p-5 transition hover:border-green-400/40 hover:bg-green-500/10"
            >
              <div className="mb-3 flex items-center gap-3 text-green-300">
                <GithubIcon />
                <span className="font-medium">GitHub</span>
              </div>
              <p className="text-gray-300">View projects</p>
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}