import Image from "next/image";

const coreSkills = [
  "Technical Troubleshooting",
  "Root Cause Analysis",
  "SaaS Support",
  "API Debugging",
  "Cross-Functional Collaboration",
  "Documentation",
  "Support Operations",
  "Customer Issue Resolution",
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

const featuredWork = [
  {
    number: "01",
    title: "Technical Support at Scale",
    description:
      "Handled high-volume support environments while balancing customer communication, issue ownership, and technical depth.",
  },
  {
    number: "02",
    title: "API and Integration Troubleshooting",
    description:
      "Investigated platform behavior, logs, workflows, and integration issues to isolate root causes and move problems toward resolution.",
  },
  {
    number: "03",
    title: "Support Process Improvement",
    description:
      "Improved knowledge sharing, documentation, and support workflows to help teams work faster and more consistently.",
  },
];

function GithubIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className="w-5 h-5"
      aria-hidden="true"
    >
      <path d="M12 2C6.477 2 2 6.589 2 12.248c0 4.526 2.865 8.367 6.839 9.722.5.096.682-.221.682-.492 0-.244-.009-.89-.014-1.747-2.782.617-3.369-1.37-3.369-1.37-.455-1.177-1.11-1.49-1.11-1.49-.908-.636.069-.623.069-.623 1.004.072 1.532 1.053 1.532 1.053.892 1.566 2.341 1.114 2.91.852.091-.664.35-1.114.636-1.37-2.221-.259-4.555-1.14-4.555-5.073 0-1.12.39-2.036 1.029-2.753-.103-.26-.446-1.307.097-2.724 0 0 .84-.276 2.75 1.051A9.303 9.303 0 0 1 12 6.836a9.27 9.27 0 0 1 2.504.347c1.909-1.327 2.747-1.051 2.747-1.051.545 1.417.202 2.464.1 2.724.64.717 1.027 1.633 1.027 2.753 0 3.943-2.338 4.811-4.566 5.065.359.318.679.946.679 1.907 0 1.377-.012 2.488-.012 2.826 0 .273.18.592.688.491C19.138 20.611 22 16.772 22 12.248 22 6.589 17.523 2 12 2Z" />
    </svg>
  );
}

function LinkedinIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className="w-5 h-5"
      aria-hidden="true"
    >
      <path d="M6.94 8.5H3.56V19.5h3.38V8.5ZM5.25 3C4.14 3 3.25 3.91 3.25 5.03c0 1.11.89 2.02 2 2.02 1.11 0 2-.91 2-2.02C7.25 3.91 6.36 3 5.25 3Zm14.5 9.67c0-3.11-1.66-4.56-3.88-4.56-1.79 0-2.59.99-3.04 1.68V8.5H9.45c.04.85 0 11 0 11h3.38v-6.14c0-.33.02-.66.12-.9.26-.66.86-1.35 1.86-1.35 1.31 0 1.84 1.02 1.84 2.52v5.87h3.38l.02-6.83Z" />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      className="w-5 h-5"
      aria-hidden="true"
    >
      <path
        d="M3.75 6.75h16.5v10.5H3.75z"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="m4.5 7.5 7.5 6 7.5-6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function Home() {
  return (
    <main className="bg-black text-white selection:bg-green-500 selection:text-black">
      <div className="fixed inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,rgba(34,197,94,0.16),transparent_30%),radial-gradient(circle_at_80%_20%,rgba(34,197,94,0.10),transparent_20%),radial-gradient(circle_at_bottom_right,rgba(34,197,94,0.14),transparent_28%)]" />

      <header className="sticky top-0 z-50 border-b border-green-500/10 bg-black/70 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <a href="#home" className="font-semibold tracking-[0.2em] uppercase text-sm text-green-400">
            Jazz
          </a>

          <nav className="hidden md:flex items-center gap-6 text-sm text-gray-300">
            <a href="#about" className="hover:text-green-300 transition">About</a>
            <a href="#skills" className="hover:text-green-300 transition">Skills</a>
            <a href="#work" className="hover:text-green-300 transition">Work</a>
            <a href="#contact" className="hover:text-green-300 transition">Contact</a>
          </nav>

          <div className="flex items-center gap-3">
            <a
              href="https://github.com/Jazz-1998"
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-green-500/20 bg-white/5 p-2 text-gray-300 hover:text-green-300 hover:border-green-400/40 transition"
              aria-label="GitHub"
            >
              <GithubIcon />
            </a>
            <a
              href="https://www.linkedin.com/in/jawad-alhussein/"
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-green-500/20 bg-white/5 p-2 text-gray-300 hover:text-green-300 hover:border-green-400/40 transition"
              aria-label="LinkedIn"
            >
              <LinkedinIcon />
            </a>
            <a
              href="mailto:
              "
              className="rounded-full border border-green-500/20 bg-white/5 p-2 text-gray-300 hover:text-green-300 hover:border-green-400/40 transition"
              aria-label="Email"
            >
              <MailIcon />
            </a>
          </div>
        </div>
      </header>

      <section id="home" className="max-w-7xl mx-auto px-6 pt-14 pb-20 md:pt-24 md:pb-28">
        <div className="grid lg:grid-cols-[1.15fr_0.85fr] gap-12 items-center">
          <div>
            <p className="mb-5 text-sm uppercase tracking-[0.35em] text-green-400">
              Technical Support Engineer
            </p>

            <h1 className="text-5xl md:text-7xl font-bold leading-[0.95] mb-6">
              Solving messy
              <span className="block text-green-400">technical problems</span>
              with clarity.
            </h1>

            <p className="text-lg md:text-xl text-gray-300 leading-8 max-w-2xl mb-8">
              I’m Jawad “Jazz” Alhussein. I help SaaS teams troubleshoot complex
              customer issues, support integrations, improve support operations,
              and bring structure to high-pressure technical environments.
            </p>

            <div className="flex flex-wrap gap-4 mb-10">
              <a
                href="#work"
                className="rounded-2xl bg-green-500 px-6 py-3 font-semibold text-black hover:bg-green-400 hover:shadow-[0_0_30px_rgba(34,197,94,0.35)] transition"
              >
                View My Work
              </a>
              <a
                href="#contact"
                className="rounded-2xl border border-green-500/30 px-6 py-3 font-semibold text-white hover:bg-green-500/10 hover:border-green-400 transition"
              >
                Contact Me
              </a>
            </div>

            <div className="grid sm:grid-cols-3 gap-4 max-w-3xl">
              <div className="rounded-2xl border border-green-500/15 bg-white/5 p-4">
                <p className="text-2xl font-bold text-green-400 mb-1">SaaS</p>
                <p className="text-sm text-gray-400">Support and product troubleshooting</p>
              </div>
              <div className="rounded-2xl border border-green-500/15 bg-white/5 p-4">
                <p className="text-2xl font-bold text-green-400 mb-1">APIs</p>
                <p className="text-sm text-gray-400">Integration and workflow debugging</p>
              </div>
              <div className="rounded-2xl border border-green-500/15 bg-white/5 p-4">
                <p className="text-2xl font-bold text-green-400 mb-1">Ops</p>
                <p className="text-sm text-gray-400">Documentation and process improvement</p>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-5 rounded-[2rem] bg-green-500/10 blur-2xl" />
            <div className="relative rounded-[2rem] border border-green-500/20 bg-zinc-950/90 overflow-hidden shadow-[0_0_40px_rgba(34,197,94,0.10)]">
              <div className="flex items-center gap-2 px-5 py-4 border-b border-green-500/10">
                <span className="w-3 h-3 rounded-full bg-green-500/60" />
                <span className="w-3 h-3 rounded-full bg-white/20" />
                <span className="w-3 h-3 rounded-full bg-white/10" />
                <p className="ml-3 text-xs uppercase tracking-[0.3em] text-gray-500">
                  Profile
                </p>
              </div>

              <div className="p-6">
                <div className="rounded-[1.5rem] overflow-hidden border border-green-500/15 bg-black">
                  <Image
                    src="/profile.jpg"
                    alt="Jawad Jazz Alhussein"
                    width={900}
                    height={1100}
                    className="w-full h-[420px] object-cover"
                    priority
                  />
                </div>

                <div className="grid grid-cols-2 gap-4 mt-4">
                  <div className="rounded-2xl border border-green-500/10 bg-white/5 p-4">
                    <p className="text-xs uppercase tracking-[0.25em] text-gray-500 mb-2">
                      Focus
                    </p>
                    <p className="text-sm text-gray-300 leading-6">
                      Technical support, system clarity, customer problem solving
                    </p>
                  </div>
                  <div className="rounded-2xl border border-green-500/10 bg-white/5 p-4">
                    <p className="text-xs uppercase tracking-[0.25em] text-gray-500 mb-2">
                      Strength
                    </p>
                    <p className="text-sm text-gray-300 leading-6">
                      Calm troubleshooting under pressure
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="max-w-7xl mx-auto px-6 pb-20">
        <div className="grid lg:grid-cols-[0.75fr_1.25fr] gap-8 items-start">
          <div>
            <p className="text-sm uppercase tracking-[0.35em] text-green-400 mb-4">
              About Me
            </p>
            <h2 className="text-3xl md:text-4xl font-semibold leading-tight">
              I like turning confusion into something clear, useful, and solved.
            </h2>
          </div>

          <div className="rounded-[2rem] border border-green-500/15 bg-white/5 p-8">
            <p className="text-gray-300 leading-8 mb-5">
              My background is in technical support and troubleshooting across
              SaaS environments where customers need clarity, speed, and
              someone who can actually think through the issue instead of just
              escalating it blindly.
            </p>
            <p className="text-gray-400 leading-8 mb-5">
              I enjoy working at the intersection of technical investigation,
              communication, and operations. That means digging into problems,
              understanding how systems behave, and helping both customers and
              internal teams move forward with confidence.
            </p>
            <p className="text-gray-400 leading-8">
              Long term, I want to keep growing into roles where I can solve
              harder technical problems, improve support systems, and create a
              better experience for both users and the teams behind the product.
            </p>
          </div>
        </div>
      </section>

      <section id="skills" className="max-w-7xl mx-auto px-6 pb-20">
        <div className="grid lg:grid-cols-2 gap-8">
          <div className="rounded-[2rem] border border-green-500/15 bg-white/5 p-8">
            <p className="text-sm uppercase tracking-[0.35em] text-green-400 mb-4">
              Core Skills
            </p>
            <div className="flex flex-wrap gap-3">
              {coreSkills.map((skill) => (
                <span
                  key={skill}
                  className="rounded-full border border-green-500/20 bg-green-500/10 px-4 py-2 text-sm text-green-200"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <div className="rounded-[2rem] border border-green-500/15 bg-white/5 p-8">
            <p className="text-sm uppercase tracking-[0.35em] text-green-400 mb-4">
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
          </div>
        </div>
      </section>

      <section id="work" className="max-w-7xl mx-auto px-6 pb-20">
        <div className="flex items-end justify-between gap-6 mb-8">
          <div>
            <p className="text-sm uppercase tracking-[0.35em] text-green-400 mb-3">
              Featured Work
            </p>
            <h2 className="text-3xl md:text-4xl font-semibold">
              Experience that reflects how I think.
            </h2>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-5">
          {featuredWork.map((item) => (
            <div
              key={item.title}
              className="group rounded-[2rem] border border-green-500/15 bg-white/5 p-7 hover:-translate-y-1 hover:border-green-400/35 hover:bg-green-500/[0.06] transition"
            >
              <p className="text-5xl font-bold text-green-500/25 mb-5">
                {item.number}
              </p>
              <h3 className="text-xl font-semibold mb-4 group-hover:text-green-300 transition">
                {item.title}
              </h3>
              <p className="text-gray-400 leading-8">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section id="contact" className="max-w-7xl mx-auto px-6 pb-24">
        <div className="rounded-[2rem] border border-green-500/15 bg-gradient-to-br from-green-500/10 to-transparent p-8 md:p-10">
          <p className="text-sm uppercase tracking-[0.35em] text-green-400 mb-4">
            Contact
          </p>

          <h2 className="text-3xl md:text-4xl font-semibold mb-4">
            Let’s connect.
          </h2>

          <p className="max-w-2xl text-gray-300 leading-8 mb-8">
            I’m open to technical support, SaaS support, operations, and
            adjacent roles where I can help teams solve problems, improve
            customer experience, and make systems easier to work with.
          </p>

          <div className="grid sm:grid-cols-3 gap-4">
            <a
              href="mailto:alhusseinjazz@gmail.com"
              className="rounded-2xl border border-green-500/20 bg-black/40 p-5 hover:border-green-400/40 hover:bg-green-500/10 transition"
            >
              <div className="flex items-center gap-3 mb-3 text-green-300">
                <MailIcon />
                <span className="font-medium">Email</span>
              </div>
              <p className="text-gray-300 break-all">alhusseinjazz@gmail.com</p>
            </a>

            <a
              href="https://www.linkedin.com/in/jawad-alhussein/"
              target="_blank"
              rel="noreferrer"
              className="rounded-2xl border border-green-500/20 bg-black/40 p-5 hover:border-green-400/40 hover:bg-green-500/10 transition"
            >
              <div className="flex items-center gap-3 mb-3 text-green-300">
                <LinkedinIcon />
                <span className="font-medium">LinkedIn</span>
              </div>
              <p className="text-gray-300">View profile</p>
            </a>

            <a
              href="https://github.com/Jazz-1998"
              target="_blank"
              rel="noreferrer"
              className="rounded-2xl border border-green-500/20 bg-black/40 p-5 hover:border-green-400/40 hover:bg-green-500/10 transition"
            >
              <div className="flex items-center gap-3 mb-3 text-green-300">
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