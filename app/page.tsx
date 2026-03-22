import Image from "next/image";

const skills = {
  troubleshooting: [
    "Technical troubleshooting",
    "Root cause analysis",
    "Customer issue resolution",
    "Cross-functional collaboration",
    "Documentation",
    "Support operations",
  ],
  tools: [
    "SQL",
    "Postman",
    "Jira",
    "Datadog",
    "AWS",
    "Freshdesk",
    "Notion",
    "API debugging",
  ],
};

const highlights = [
  "Handled high-volume SaaS support and complex customer issues across fast-moving environments.",
  "Used SQL, Postman, Jira, Datadog, and AWS as part of day-to-day troubleshooting workflows.",
  "Helped reduce backlogs, improve support operations, and create clearer internal documentation.",
];

const featuredWork = [
  {
    title: "High-Volume Technical Support",
    description:
      "Supported customers through product issues, technical questions, and urgent troubleshooting needs while balancing speed, clarity, and quality.",
  },
  {
    title: "API and Integration Troubleshooting",
    description:
      "Worked through technical issues involving APIs, platform behavior, logs, and system workflows to help isolate problems and move them toward resolution.",
  },
  {
    title: "Support Process Improvement",
    description:
      "Contributed to cleaner documentation, better team knowledge sharing, and support workflows that made it easier to resolve issues consistently.",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      <section className="px-6 py-16 md:py-24">
        <div className="max-w-6xl mx-auto grid md:grid-cols-[1.4fr_0.9fr] gap-12 items-center">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-gray-500 mb-5">
              Portfolio
            </p>

            <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
              Jawad “Jazz” Alhussein
            </h1>

            <h2 className="text-xl md:text-2xl text-gray-300 leading-relaxed max-w-3xl mb-6">
              Technical Support Engineer helping SaaS teams solve complex customer
              issues, troubleshoot integrations, and improve support operations.
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
                className="bg-white text-black px-5 py-3 rounded-2xl font-semibold"
              >
                View LinkedIn
              </a>

              <a
                href="mailto:youremail@example.com"
                className="border border-gray-700 px-5 py-3 rounded-2xl font-semibold text-white"
              >
                Contact Me
              </a>

              <a
                href="/resume.pdf"
                className="border border-gray-700 px-5 py-3 rounded-2xl font-semibold text-white"
              >
                View Resume
              </a>
            </div>
          </div>

          <div className="flex justify-center md:justify-end">
            <div className="w-72 h-72 md:w-80 md:h-80 rounded-3xl overflow-hidden border border-gray-800 bg-zinc-900">
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
      </section>

      <section className="px-6 pb-8">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-5">
          <div className="border border-gray-800 rounded-2xl p-6">
            <h3 className="text-lg font-semibold mb-3">Technical Troubleshooting</h3>
            <p className="text-gray-400 leading-7">
              Investigate issues, isolate root causes, and guide problems
              through resolution with a calm and structured approach.
            </p>
          </div>

          <div className="border border-gray-800 rounded-2xl p-6">
            <h3 className="text-lg font-semibold mb-3">SaaS and API Support</h3>
            <p className="text-gray-400 leading-7">
              Support customers through platform questions, integration issues,
              and technical workflows with clarity and patience.
            </p>
          </div>

          <div className="border border-gray-800 rounded-2xl p-6">
            <h3 className="text-lg font-semibold mb-3">Cross-Functional Work</h3>
            <p className="text-gray-400 leading-7">
              Collaborate with engineering, product, QA, and support teams to
              improve outcomes for both customers and internal teams.
            </p>
          </div>
        </div>
      </section>

      <section className="px-6 py-20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-semibold mb-8">
            Career Highlights
          </h2>

          <div className="space-y-4">
            {highlights.map((item) => (
              <div
                key={item}
                className="border border-gray-800 rounded-2xl p-5 text-gray-300 leading-7"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 pb-20">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
          <div className="border border-gray-800 rounded-3xl p-7">
            <h2 className="text-2xl font-semibold mb-6">Tools and Skills</h2>

            <div className="mb-8">
              <h3 className="text-lg font-medium mb-4 text-gray-200">
                Core Strengths
              </h3>
              <div className="flex flex-wrap gap-3">
                {skills.troubleshooting.map((item) => (
                  <span
                    key={item}
                    className="px-4 py-2 rounded-full border border-gray-700 text-sm text-gray-300"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-lg font-medium mb-4 text-gray-200">Tools</h3>
              <div className="flex flex-wrap gap-3">
                {skills.tools.map((item) => (
                  <span
                    key={item}
                    className="px-4 py-2 rounded-full border border-gray-700 text-sm text-gray-300"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="border border-gray-800 rounded-3xl p-7">
            <h2 className="text-2xl font-semibold mb-6">About Me</h2>
            <p className="text-gray-400 leading-8 mb-5">
              I am someone who enjoys breaking down complex issues, making
              systems easier to understand, and helping people feel supported
              when they are stuck. I am especially drawn to work where I can
              combine technical investigation, communication, and problem
              solving to create real impact.
            </p>
            <p className="text-gray-400 leading-8">
              My goal is to keep growing in technical support and adjacent roles
              where I can help companies improve customer experience, resolve
              technical issues faster, and build more reliable support
              processes.
            </p>
          </div>
        </div>
      </section>

      <section className="px-6 pb-20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-semibold mb-8">
            Featured Work
          </h2>

          <div className="grid md:grid-cols-3 gap-5">
            {featuredWork.map((item) => (
              <div
                key={item.title}
                className="border border-gray-800 rounded-2xl p-6"
              >
                <h3 className="text-lg font-semibold mb-3">{item.title}</h3>
                <p className="text-gray-400 leading-7">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 pb-24">
        <div className="max-w-6xl mx-auto border border-gray-800 rounded-3xl p-8 md:p-10">
          <h2 className="text-2xl md:text-3xl font-semibold mb-4">
            Contact
          </h2>
          <p className="text-gray-400 leading-8 max-w-2xl mb-8">
            I am open to technical support, SaaS support, systems, and
            operations-focused opportunities where I can help teams solve
            problems and improve the customer experience.
          </p>

          <div className="flex flex-col gap-4 text-lg">
            <a
              href="mailto:youremail@example.com"
              className="text-white underline underline-offset-4"
            >
              youremail@example.com
            </a>

            <a
              href="https://www.linkedin.com/in/YOUR-LINKEDIN/"
              target="_blank"
              rel="noreferrer"
              className="text-white underline underline-offset-4"
            >
              LinkedIn Profile
            </a>

            <a
              href="https://github.com/Jazz-1998"
              target="_blank"
              rel="noreferrer"
              className="text-white underline underline-offset-4"
            >
              GitHub
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}