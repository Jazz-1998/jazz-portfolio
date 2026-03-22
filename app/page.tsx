import Image from "next/image";

const skills = {
  strengths: [
    "Technical Troubleshooting",
    "Root Cause Analysis",
    "Customer Issue Resolution",
    "Cross-Functional Collaboration",
    "Documentation",
    "Support Operations",
    "API Debugging",
    "SaaS Support",
  ],
  tools: [
    "SQL",
    "Postman",
    "Jira",
    "Datadog",
    "AWS",
    "Freshdesk",
    "Notion",
    "GitHub",
  ],
};

const highlights = [
  "Handled high-volume SaaS support and complex customer issues in fast-moving environments.",
  "Used SQL, Postman, Jira, Datadog, and AWS in day-to-day troubleshooting workflows.",
  "Helped reduce backlog, improve support operations, and create clearer internal documentation.",
];

const featuredWork = [
  {
    title: "Technical Support at Scale",
    description:
      "Supported customers through platform issues, urgent troubleshooting needs, and technical questions while balancing speed, clarity, and quality.",
  },
  {
    title: "API and Integration Troubleshooting",
    description:
      "Worked through issues involving APIs, platform behavior, logs, and system workflows to isolate root causes and move problems toward resolution.",
  },
  {
    title: "Support Process Improvement",
    description:
      "Improved documentation, knowledge sharing, and support workflows to help teams resolve issues more consistently and efficiently.",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      <section className="relative overflow-hidden border-b border-green-900/30">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(34,197,94,0.18),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(34,197,94,0.12),transparent_30%)]" />
        <div className="relative max-w-6xl mx-auto px-6 py-16 md:py-24">
          <p className="text-sm uppercase tracking-[0.35em] text-green-400 mb-6">
            Portfolio
          </p>

          <div className="grid md:grid-cols-[1.4fr_0.9fr] gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
                Jawad “Jazz” Alhussein
              </h1>

              <h2 className="text-xl md:text-2xl text-gray-200 leading-relaxed max-w-3xl mb-6">
                Technical Support Engineer helping SaaS teams solve complex
                customer issues, troubleshoot integrations, and improve support
                operations.
              </h2>

              <p className="text-gray-400 text-lg leading-8 max-w-3xl mb-8">
                I enjoy solving technical problems, bringing clarity to messy
                situations, and helping customers feel supported when things go
                wrong. My background includes SaaS support, API troubleshooting,
                backlog reduction, documentation, and cross-functional work with
                engineering and product teams.
              </p>

              <div className="flex flex-wrap gap-4">
                <a
                  href="https://www.linkedin.com/in/YOUR-LINKEDIN/"
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-2xl bg-green-500 px-5 py-3 font-semibold text-black transition hover:bg-green-400 hover:shadow-[0_0_25px_rgba(34,197,94,0.45)]"
                >
                  View LinkedIn
                </a>

                <a
                  href="mailto:youremail@example.com"
                  className="rounded-2xl border border-green-500/40 px-5 py-3 font-semibold text-white transition hover:border-green-400 hover:bg-green-500/10"
                >
                  Contact Me
                </a>

                <a
                  href="/resume.pdf"
                  className="rounded-2xl border border-green-500/40 px-5 py-3 font-semibold text-white transition hover:border-green-400 hover:bg-green-500/10"
                >
                  View Resume
                </a>
              </div>
            </div>

            <div className="flex justify-center md:justify-end">
              <div className="relative w-72 h-72 md:w-80 md:h-80 rounded-3xl overflow-hidden border border-green-500/30 bg-zinc-950 shadow-[0_0_40px_rgba(34,197,94,0.15)]">
                <Image
                  src="/profile.jpg"
                  alt="Jawad Jazz Alhussein"
                  width={500}
                  height={500}
                  className="w-full h-full object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-3 gap-5">
          <div className="rounded-3xl border border-green-500/20 bg-zinc-950/80 p-6 transition hover:-translate-y-1 hover:border-green-400/50 hover:shadow-[0_0_30px_rgba(34,197,94,0.08)]">
            <h3 className="text-lg font-semibold text-green-400 mb-3">
              Technical Troubleshooting
            </h3>
            <p className="text-gray-400 leading-7">
              Investigate issues, isolate root causes, and guide problems
              through resolution with a calm and structured approach.
            </p>
          </div>

          <div className="rounded-3xl border border-green-500/20 bg-zinc-950/80 p-6 transition hover:-translate-y-1 hover:border-green-400/50 hover:shadow-[0_0_30px_rgba(34,197,94,0.08)]">
            <h3 className="text-lg font-semibold text-green-400 mb-3">
              SaaS and API Support
            </h3>
            <p className="text-gray-400 leading-7">
              Support customers through platform questions, integration issues,
              and technical workflows with clarity and patience.
            </p>
          </div>

          <div className="rounded-3xl border border-green-500/20 bg-zinc-950/80 p-6 transition hover:-translate-y-1 hover:border-green-400/50 hover:shadow-[0_0_30px_rgba(34,197,94,0.08)]">
            <h3 className="text-lg font-semibold text-green-400 mb-3">
              Cross-Functional Work
            </h3>
            <p className="text-gray-400 leading-7">
              Collaborate with engineering, product, QA, and support teams to
              improve outcomes for both customers and internal teams.
            </p>
          </div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 pb-16">
        <h2 className="text-2xl md:text-3xl font-semibold mb-8">
          Career Highlights
        </h2>

        <div className="space-y-4">
          {highlights.map((item) => (
            <div
              key={item}
              className="rounded-2xl border border-green-500/20 bg-zinc-950/70 p-5 text-gray-300 leading-7"
            >
              {item}
            </div>
          ))}
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 pb-16">
        <div className="grid md:grid-cols-2 gap-8">
          <div className="rounded-3xl border border-green-500/20 bg-zinc-950/80 p-7">
            <h2 className="text-2xl font-semibold mb-6">Tools and Skills</h2>

            <div className="mb-8">
              <h3 className="text-lg font-medium mb-4 text-green-400">
                Core Strengths
              </h3>
              <div className="flex flex-wrap gap-3">
                {skills.strengths.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-green-500/25 bg-green-500/10 px-4 py-2 text-sm text-green-200"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-lg font-medium mb-4 text-green-400">Tools</h3>
              <div className="flex flex-wrap gap-3">
                {skills.tools.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-green-500/25 bg-green-500/10 px-4 py-2 text-sm text-green-200"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="rounded-3xl border border-green-500/20 bg-zinc-950/80 p-7">
            <h2 className="text-2xl font-semibold mb-6">About Me</h2>
            <p className="text-gray-400 leading-8 mb-5">
              I enjoy breaking down complex issues, making systems easier to
              understand, and helping people feel supported when they are stuck.
              I am especially drawn to work where I can combine technical
              investigation, communication, and problem solving to create real
              impact.
            </p>
            <p className="text-gray-400 leading-8">
              My goal is to keep growing in technical support and related roles
              where I can help companies improve customer experience, resolve
              technical issues faster, and build more reliable support
              processes.
            </p>
          </div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 pb-16">
        <h2 className="text-2xl md:text-3xl font-semibold mb-8">
          Featured Work
        </h2>

        <div className="grid md:grid-cols-3 gap-5">
          {featuredWork.map((item) => (
            <div
              key={item.title}
              className="rounded-3xl border border-green-500/20 bg-zinc-950/80 p-6 transition hover:-translate-y-1 hover:border-green-400/50 hover:shadow-[0_0_30px_rgba(34,197,94,0.08)]"
            >
              <h3 className="text-lg font-semibold text-green-400 mb-3">
                {item.title}
              </h3>
              <p className="text-gray-400 leading-7">{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 pb-24">
        <div className="rounded-3xl border border-green-500/20 bg-zinc-950/80 p-8 md:p-10 shadow-[0_0_30px_rgba(34,197,94,0.06)]">
          <h2 className="text-2xl md:text-3xl font-semibold mb-4">Contact</h2>
          <p className="text-gray-400 leading-8 max-w-2xl mb-8">
            I am open to technical support, SaaS support, systems, and
            operations-focused opportunities where I can help teams solve
            problems and improve the customer experience.
          </p>

          <div className="flex flex-col gap-4 text-lg">
            <a
              href="mailto:youremail@example.com"
              className="text-green-300 underline underline-offset-4 hover:text-green-200"
            >
              youremail@example.com
            </a>

            <a
              href="https://www.linkedin.com/in/YOUR-LINKEDIN/"
              target="_blank"
              rel="noreferrer"
              className="text-green-300 underline underline-offset-4 hover:text-green-200"
            >
              LinkedIn Profile
            </a>

            <a
              href="https://github.com/Jazz-1998"
              target="_blank"
              rel="noreferrer"
              className="text-green-300 underline underline-offset-4 hover:text-green-200"
            >
              GitHub
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}