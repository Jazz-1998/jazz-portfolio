export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white px-6 py-16">
      <div className="max-w-5xl mx-auto">
        <p className="text-sm uppercase tracking-[0.25em] text-gray-500 mb-6">
          Portfolio
        </p>

        <section className="mb-20">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
            Jawad “Jazz” Alhussein
          </h1>

          <h2 className="text-xl md:text-2xl text-gray-300 max-w-4xl mb-6">
            Technical Support Engineer focused on SaaS support, API troubleshooting,
            customer issue resolution, and cross-functional problem solving
          </h2>

          <p className="text-lg text-gray-400 max-w-3xl leading-8 mb-8">
            I help teams solve technical issues faster, support customers with clarity,
            and turn messy problems into clear outcomes. My experience includes SaaS
            troubleshooting, backlog reduction, documentation, and working closely with
            engineering, QA, and customer-facing teams.
          </p>

          <div className="flex flex-wrap gap-4">
            <a
              href="https://www.linkedin.com/in/jawad-alhussein-5342031a3/"
              target="_blank"
              rel="noreferrer"
              className="bg-white text-black px-5 py-3 rounded-2xl font-semibold"
            >
              View LinkedIn
            </a>
            <a
              href="mailto:alhusseinjazz@gmail.com"
              className="border border-gray-700 px-5 py-3 rounded-2xl font-semibold text-white"
            >
              Contact Me
            </a>
          </div>
        </section>

        <section className="grid md:grid-cols-3 gap-5 mb-20">
          <div className="border border-gray-800 rounded-2xl p-6">
            <h3 className="text-lg font-semibold mb-3">Technical Troubleshooting</h3>
            <p className="text-gray-400 leading-7">
              Investigate product issues, analyze patterns, isolate root causes,
              and help move problems through resolution.
            </p>
          </div>

          <div className="border border-gray-800 rounded-2xl p-6">
            <h3 className="text-lg font-semibold mb-3">API and SaaS Support</h3>
            <p className="text-gray-400 leading-7">
              Support customers through integration issues, platform questions,
              and technical workflows with patience and precision.
            </p>
          </div>

          <div className="border border-gray-800 rounded-2xl p-6">
            <h3 className="text-lg font-semibold mb-3">Cross-Functional Work</h3>
            <p className="text-gray-400 leading-7">
              Collaborate with engineering, product, and support teams to improve
              operations, documentation, and customer outcomes.
            </p>
          </div>
        </section>

        <section className="mb-20">
          <h2 className="text-2xl md:text-3xl font-semibold mb-6">Career Highlights</h2>
          <div className="space-y-4 text-gray-300">
            <div className="border border-gray-800 rounded-2xl p-5">
              Worked high-volume SaaS support queues and handled complex technical issues.
            </div>
            <div className="border border-gray-800 rounded-2xl p-5">
              Used tools like SQL, Postman, Jira, Datadog, and AWS in troubleshooting workflows.
            </div>
            <div className="border border-gray-800 rounded-2xl p-5">
              Helped reduce backlog and improve support operations through documentation and problem solving.
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl md:text-3xl font-semibold mb-6">About Me</h2>
          <p className="text-gray-400 max-w-3xl leading-8">
            I enjoy solving technical problems, making systems easier to understand,
            and helping people feel supported when things go wrong. I am especially
            drawn to roles where I can combine investigation, communication, and
            technical thinking to make a real impact.
          </p>
        </section>
      </div>
    </main>
  );
}