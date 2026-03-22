import Image from "next/image";

const focusCards = [
  {
    title: "Technical Support",
    description:
      "I enjoy helping people through technical issues with patience, clarity, and real problem solving.",
  },
  {
    title: "Problem Solving",
    description:
      "Every problem has a solution. I like breaking complex issues into something clear, simple, and fixable.",
  },
  {
    title: "AI Curiosity",
    description:
      "I love learning how AI can improve workflows, support operations, and the way humans solve problems.",
  },
];

const skills = [
  "Technical Troubleshooting",
  "Root Cause Analysis",
  "SaaS Support",
  "API Debugging",
  "Customer Issue Resolution",
  "Cross-Functional Collaboration",
  "Documentation",
  "Support Operations",
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
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      className="h-5 w-5"
      aria-hidden="true"
    >
      <path d="M3.75 6.75h16.5v10.5H3.75z" strokeLinecap="round" strokeLinejoin="round" />
      <path d="m4.5 7.5 7.5 6 7.5-6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function Home() {
  return (
    <main className="bg-white text-zinc-900 selection:bg-green-400 selection:text-black">
      <header className="sticky top-0 z-50 border-b border-zinc-200/80 bg-white/90 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <a href="#home" className="text-sm font-semibold tracking-wide text-zinc-900">
            Jazz
          </a>

          <nav className="hidden items-center gap-8 text-sm text-zinc-600 md:flex">
            <a href="#about" className="transition hover:text-green-600">
              About
            </a>
            <a href="#skills" className="transition hover:text-green-600">
              Skills
            </a>
            <a href="#human" className="transition hover:text-green-600">
              Human
            </a>
            <a href="#contact" className="transition hover:text-green-600">
              Contact
            </a>
          </nav>

          <div className="flex items-center gap-3">
            <a
              href="https://github.com/Jazz-1998"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="text-zinc-500 transition hover:text-green-600"
            >
              <GithubIcon />
            </a>
            <a
              href="https://www.linkedin.com/in/YOUR-LINKEDIN/"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="text-zinc-500 transition hover:text-green-600"
            >
              <LinkedinIcon />
            </a>
            <a
              href="mailto:youremail@example.com"
              aria-label="Email"
              className="text-zinc-500 transition hover:text-green-600"
            >
              <MailIcon />
            </a>
          </div>
        </div>
      </header>

      <section id="home" className="mx-auto max-w-6xl px-6 pt-16 pb-24 md:pt-24 md:pb-32">
        <div className="flex flex-col items-center text-center">
          <div className="mb-8 overflow-hidden rounded-full border-4 border-white shadow-xl">
            <Image
              src="/profile.jpg"
              alt="Jawad Jazz Alhussein"
              width={160}
              height={160}
              className="h-40 w-40 object-cover"
              priority
            />
          </div>

          <h1 className="max-w-4xl text-4xl font-bold leading-tight md:text-6xl">
            Technical Support Engineer
            <span className="block text-green-600">turning problems into solutions.</span>
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-zinc-600 md:text-xl">
            I love being a technical support engineer. I enjoy helping people, solving
            technical issues, working through complex systems, and bringing clarity to
            problems that feel overwhelming at first.
          </p>

          <p className="mt-4 max-w-3xl text-base leading-8 text-zinc-500 md:text-lg">
            Every problem has a solution. That mindset drives how I work, how I think,
            and why I also love learning about AI and its potential to improve support,
            workflows, and human problem solving.
          </p>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <a
              href="#contact"
              className="rounded-full bg-green-600 px-6 py-3 font-medium text-white transition hover:bg-green-700"
            >
              Say Hello
            </a>
            <a
              href="#about"
              className="rounded-full border border-zinc-300 px-6 py-3 font-medium text-zinc-900 transition hover:border-green-600 hover:text-green-600"
            >
              Learn More
            </a>
          </div>
        </div>
      </section>

      <section className="bg-green-600 text-white">
        <div className="mx-auto max-w-5xl px-6 py-16 text-center md:py-20">
          <h2 className="text-2xl font-bold md:text-3xl">
            I love solving technical problems and making support feel human.
          </h2>
          <p className="mx-auto mt-5 max-w-3xl text-base leading-8 text-green-50 md:text-lg">
            I care about clear communication, thoughtful troubleshooting, and helping
            people feel like they are talking to a real person who genuinely wants to help.
          </p>
        </div>
      </section>

      <section id="about" className="mx-auto max-w-6xl px-6 py-20 md:py-24">
        <div className="grid gap-8 md:grid-cols-3">
          {focusCards.map((card) => (
            <div
              key={card.title}
              className="rounded-3xl border border-zinc-200 bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
            >
              <h3 className="mb-4 text-xl font-semibold text-zinc-900">{card.title}</h3>
              <p className="leading-8 text-zinc-600">{card.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="skills" className="mx-auto max-w-6xl px-6 pb-20 md:pb-24">
        <div className="rounded-[2rem] bg-zinc-50 px-6 py-10 md:px-10 md:py-12">
          <div className="grid gap-10 md:grid-cols-2">
            <div>
              <h2 className="mb-5 text-2xl font-bold text-zinc-900">Skills</h2>
              <div className="flex flex-wrap gap-3">
                {skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full bg-white px-4 py-2 text-sm text-zinc-700 shadow-sm ring-1 ring-zinc-200"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <h2 className="mb-5 text-2xl font-bold text-zinc-900">Tools</h2>
              <div className="flex flex-wrap gap-3">
                {tools.map((tool) => (
                  <span
                    key={tool}
                    className="rounded-full bg-white px-4 py-2 text-sm text-zinc-700 shadow-sm ring-1 ring-zinc-200"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="human" className="mx-auto max-w-6xl px-6 pb-20 md:pb-24">
        <div className="text-center">
          <p className="text-sm font-medium uppercase tracking-[0.25em] text-green-600">
            I’m not a robot
          </p>
          <h2 className="mt-4 text-3xl font-bold md:text-4xl">
            You want to know what I like to do for fun?
          </h2>
          <p className="mx-auto mt-5 max-w-3xl leading-8 text-zinc-600">
            Outside of work, I love staying active, spending time with people I care
            about, and enjoying life. The best technical people are still human.
          </p>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {funItems.map((item) => (
            <div
              key={item}
              className="rounded-2xl border border-zinc-200 bg-white p-6 text-center text-zinc-700 shadow-sm"
            >
              {item}
            </div>
          ))}
        </div>
      </section>

      <section id="contact" className="bg-zinc-900 text-white">
        <div className="mx-auto max-w-5xl px-6 py-20 text-center md:py-24">
          <h2 className="text-3xl font-bold md:text-4xl">Let’s connect.</h2>
          <p className="mx-auto mt-5 max-w-3xl text-base leading-8 text-zinc-300 md:text-lg">
            I’m open to technical support, SaaS support, and adjacent roles where I
            can solve problems, support people, and keep growing.
          </p>

          <div className="mt-10 grid gap-4 md:grid-cols-3">
            <a
              href="mailto:youremail@example.com"
              className="rounded-2xl border border-zinc-700 bg-zinc-800 p-6 transition hover:border-green-500 hover:bg-zinc-850"
            >
              <div className="mb-3 flex items-center justify-center gap-3 text-green-400">
                <MailIcon />
                <span className="font-medium">Email</span>
              </div>
              <p className="break-all text-zinc-300">youremail@example.com</p>
            </a>

            <a
              href="https://www.linkedin.com/in/YOUR-LINKEDIN/"
              target="_blank"
              rel="noreferrer"
              className="rounded-2xl border border-zinc-700 bg-zinc-800 p-6 transition hover:border-green-500"
            >
              <div className="mb-3 flex items-center justify-center gap-3 text-green-400">
                <LinkedinIcon />
                <span className="font-medium">LinkedIn</span>
              </div>
              <p className="text-zinc-300">View profile</p>
            </a>

            <a
              href="https://github.com/Jazz-1998"
              target="_blank"
              rel="noreferrer"
              className="rounded-2xl border border-zinc-700 bg-zinc-800 p-6 transition hover:border-green-500"
            >
              <div className="mb-3 flex items-center justify-center gap-3 text-green-400">
                <GithubIcon />
                <span className="font-medium">GitHub</span>
              </div>
              <p className="text-zinc-300">View projects</p>
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}