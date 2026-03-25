import MobileMenu from "./components/MobileMenu";
import ScrollReveal from "./components/ScrollReveal";
import Hero from "./components/Hero";
import ContactForm from "./components/ContactForm";
import ProblemSolver from "./components/ProblemSolver";
import TypewriterText from "./components/TypewriterText";
import SupportConsole from "./components/SupportConsole";

/* ── Data ──────────────────────────────────────────────────────── */

const showcaseCards = [
  {
    id: "PROC_01",
    icon: "🧠",
    title: "Technical Support Engineer",
    description: "I handle real-world issues where things don't work as expected. APIs fail, systems break, and users get stuck. I step in, investigate deeply, and resolve problems with clarity and precision under pressure.",
    items: ["SaaS Support", "Production Incidents", "API Failures", "System Breakdowns", "User Impact Focus", "Incident Triage", "Live Troubleshooting"],
    status: "RUNNING",
  },
  {
    id: "PROC_02",
    icon: "🔍",
    title: "Root Cause Thinker",
    description: "I don't stop at surface-level fixes. I break problems down, analyze logs, and follow patterns until I understand exactly why something failed. No guessing, just proof.",
    items: ["Root Cause Analysis", "Log Investigation", "Pattern Recognition", "Failure Analysis", "Signal vs Noise", "Deep Debugging", "System Behavior"],
    status: "RUNNING",
  },
  {
    id: "PROC_03",
    icon: "🤖",
    title: "AI-Enhanced Problem Solver",
    description: "I use AI to accelerate troubleshooting, generate insights, and validate solutions faster. Not to replace thinking, but to sharpen it and move faster with confidence.",
    items: ["AI-Assisted Debugging", "Prompt Engineering", "Context-Aware Analysis", "AI Workflow Optimization", "LLM Validation", "Human-in-the-Loop AI", "Intelligent Troubleshooting"],
    status: "RUNNING",
  },
];

const systems = [
  {
    id: 'CORE',
    emoji: '🔍',
    label: 'SYSTEM: CORE',
    color: 'border-green-500/30 bg-green-500/5 text-green-400',
    skills: ['Technical Troubleshooting', 'Root Cause Analysis', 'API Debugging', 'Log Analysis', 'Data Validation'],
    tools: ['SQL', 'REST APIs', 'Postman', 'cURL', 'JSON / Log Parsing', 'Microsoft Azure'],
  },
  {
    id: 'OPERATIONS',
    emoji: '⚙️',
    label: 'SYSTEM: OPERATIONS',
    color: 'border-sky-500/30 bg-sky-500/5 text-sky-400',
    skills: ['Incident Management', 'Production Support', 'System Monitoring', 'Support Operations'],
    tools: ['Datadog', 'Sentry', 'AWS', 'Docker', 'Airflow', 'Astronomer', 'GitHub', 'Git', 'Linux'],
  },
  {
    id: 'HUMAN',
    emoji: '🤝',
    label: 'SYSTEM: HUMAN',
    color: 'border-amber-500/30 bg-amber-500/5 text-amber-400',
    skills: ['Customer Issue Resolution', 'Cross-Functional Collaboration', 'Documentation', 'Empathy-Driven Communication', 'Expectation Management'],
    tools: ['Jira', 'Freshdesk', 'Zendesk', 'Notion', 'Microsoft 365', 'Slack'],
  },
  {
    id: 'AI',
    emoji: '🤖',
    label: 'SYSTEM: AI',
    color: 'border-violet-500/30 bg-violet-500/5 text-violet-400',
    skills: ['AI-Assisted Troubleshooting', 'Prompt Engineering', 'Context Engineering', 'LLM Output Validation', 'AI-Augmented Root Cause Analysis', 'AI-Powered Pattern Recognition', 'Intelligent Workflow Automation', 'Human-in-the-Loop AI Systems'],
    tools: ['ChatGPT / LLM Tools', 'Prompt Engineering Workflows', 'AI Debugging Assist'],
  },
];


const programming = [
  {
    name: 'Python',
    path: 'M11.914 0C5.82 0 6.2 2.656 6.2 2.656l.007 2.752h5.814v.826H3.898S0 5.789 0 11.969c0 6.18 3.403 5.96 3.403 5.96h2.031v-2.867s-.109-3.402 3.35-3.402h5.769s3.24.052 3.24-3.13V3.13S18.326 0 11.914 0zM8.708 1.81a1.047 1.047 0 1 1 0 2.094 1.047 1.047 0 0 1 0-2.094z M20.086 5.765v2.786s.113 3.403-3.35 3.403h-5.769s-3.24-.053-3.24 3.13v5.371S7.22 24 13.63 24c6.41 0 6.17-2.656 6.17-2.656l-.007-2.752h-5.814v-.826h8.124S25.997 18.211 26 12.031c0-6.18-3.403-5.96-3.403-5.96h-2.51zm-3.41 12.414a1.047 1.047 0 1 1 0 2.094 1.047 1.047 0 0 1 0-2.094z',
    color: '#3776AB',
    viewBox: '0 0 26 24',
  },
  {
    name: 'JavaScript',
    path: 'M0 0h24v24H0V0zm22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.585-1.797-1.14-.091-.33-.105-.51-.046-.705.15-.646.915-.84 1.515-.66.39.12.75.42.976.9 1.034-.676 1.034-.676 1.755-1.125-.27-.42-.404-.601-.586-.78-.63-.705-1.469-1.065-2.834-1.034l-.705.089c-.676.165-1.32.525-1.71 1.005-1.14 1.291-.811 3.541.569 4.471 1.365 1.02 3.361 1.244 3.616 2.205.24 1.17-.87 1.545-1.966 1.41-.811-.18-1.26-.586-1.755-1.336l-1.83 1.051c.21.48.45.689.81 1.109 1.74 1.756 6.09 1.666 6.871-1.004.029-.09.24-.705.074-1.65l.046.067zm-8.983-7.245h-2.248c0 1.938-.009 3.864-.009 5.805 0 1.232.063 2.363-.138 2.711-.33.689-1.18.601-1.566.48-.396-.196-.597-.466-.83-.855-.063-.105-.11-.196-.127-.196l-1.825 1.125c.305.63.75 1.172 1.324 1.517.855.51 2.004.675 3.207.405.783-.226 1.458-.691 1.811-1.411.51-.93.402-2.07.397-3.346.012-2.054 0-4.109 0-6.179l.004-.056z',
    color: '#F7DF1E',
    viewBox: '0 0 24 24',
  },
  {
    name: 'TypeScript',
    path: 'M1.125 0C.502 0 0 .502 0 1.125v21.75C0 23.498.502 24 1.125 24h21.75c.623 0 1.125-.502 1.125-1.125V1.125C24 .502 23.498 0 22.875 0zm17.363 9.75c.612 0 1.154.037 1.627.111a6.38 6.38 0 0 1 1.306.34v2.458a3.95 3.95 0 0 0-.643-.361 5.093 5.093 0 0 0-.717-.26 5.453 5.453 0 0 0-1.426-.2c-.3 0-.573.028-.819.086a2.1 2.1 0 0 0-.623.242c-.17.104-.3.229-.393.374a.888.888 0 0 0-.14.49c0 .196.053.373.156.529.104.156.252.304.443.444s.423.276.696.41c.273.135.582.274.926.416.47.197.892.407 1.266.628.374.222.695.473.963.753.268.279.472.598.614.957.142.359.214.776.214 1.253 0 .657-.125 1.21-.373 1.656a3.033 3.033 0 0 1-1.012 1.085 4.38 4.38 0 0 1-1.487.596c-.566.12-1.163.18-1.79.18a9.916 9.916 0 0 1-1.84-.164 5.544 5.544 0 0 1-1.512-.493v-2.63a5.033 5.033 0 0 0 3.237 1.2c.333 0 .624-.03.872-.09.249-.06.456-.144.623-.25.166-.108.29-.234.373-.38a1.023 1.023 0 0 0-.074-1.089 2.12 2.12 0 0 0-.537-.5 5.597 5.597 0 0 0-.807-.444 27.72 27.72 0 0 0-1.007-.436c-.918-.383-1.602-.852-2.053-1.405-.45-.553-.676-1.222-.676-2.005 0-.614.123-1.141.369-1.582.246-.441.58-.804 1.004-1.089a4.494 4.494 0 0 1 1.47-.629 7.536 7.536 0 0 1 1.77-.201zm-15.113.188h9.563v2.166H9.506v9.646H6.789v-9.646H3.375z',
    color: '#3178C6',
    viewBox: '0 0 24 24',
  },
  {
    name: 'Java',
    path: 'M8.851 18.56s-.917.534.653.714c1.902.218 2.874.187 4.969-.211 0 0 .552.346 1.321.646-4.699 2.013-10.633-.118-6.943-1.149M8.276 15.933s-1.028.761.542.924c2.032.209 3.636.227 6.413-.308 0 0 .384.389.987.602-5.679 1.661-12.007.13-7.942-1.218M13.116 11.475c1.158 1.333-.304 2.533-.304 2.533s2.939-1.518 1.589-3.418c-1.261-1.772-2.228-2.652 3.007-5.688 0-.001-8.216 2.051-4.292 6.573M19.33 20.504s.679.559-.747.991c-2.712.822-11.288 1.069-13.669.033-.856-.373.75-.89 1.254-.998.527-.114.828-.093.828-.093-.953-.671-6.156 1.317-2.643 1.887 9.58 1.553 17.462-.7 14.977-1.82M9.292 13.21s-4.362 1.036-1.544 1.412c1.189.159 3.561.123 5.77-.062 1.806-.152 3.618-.477 3.618-.477s-.637.272-1.098.587c-4.429 1.165-12.986.623-10.522-.568 2.082-1.006 3.776-.892 3.776-.892M17.116 17.584c4.503-2.34 2.421-4.589.968-4.285-.355.074-.515.138-.515.138s.132-.207.385-.297c2.875-1.011 5.086 2.981-.928 4.562 0-.001.07-.062.09-.118M14.401 0s2.494 2.494-2.365 6.33c-3.896 3.077-.888 4.832-.001 6.836-2.274-2.053-3.943-3.858-2.824-5.54 1.644-2.469 6.197-3.665 5.19-7.626M9.734 23.924c4.322.277 10.959-.153 11.116-2.198 0 0-.302.775-3.572 1.391-3.688.694-8.239.613-10.937.168 0-.001.553.457 3.393.639',
    color: '#ED8B00',
    viewBox: '0 0 24 24',
  },
  {
    name: 'PHP',
    path: 'M7.01 10.207h-.944l-.515 2.648h.838c.556 0 .97-.105 1.242-.314.272-.21.455-.559.55-1.049.092-.47.05-.802-.124-.995-.175-.193-.523-.29-1.047-.29zM12 5.688C5.373 5.688 0 8.514 0 12s5.373 6.313 12 6.313S24 15.486 24 12c0-3.486-5.373-6.312-12-6.312zm-3.22 7.reduced.4H8.5l-.62 3.204H6.1l1.679-8.652h2.765c.97 0 1.675.227 2.113.679.439.453.57 1.13.394 2.03-.179.9-.566 1.59-1.163 2.068-.597.48-1.381.671-2.108.671zm6.737 3.204h-1.774l.688-3.55H12.71l-.689 3.55H10.24l1.679-8.652h1.78l-.627 3.246h1.741l.627-3.246h1.781l-1.68 8.652zm5.29-5.76h-.945l-.515 2.648h.838c.556 0 .97-.105 1.242-.314.272-.21.455-.559.55-1.049.092-.47.05-.802-.124-.995-.175-.193-.523-.29-1.047-.29zm.962 4.13c-.597.48-1.381.671-2.108.671h-2.291l1.679-8.652h2.765c.97 0 1.675.227 2.113.679.439.453.57 1.13.394 2.03-.179.9-.566 1.59-1.163 2.068l-.389-.796z',
    color: '#777BB4',
    viewBox: '0 0 24 24',
  },
  {
    name: 'Bash',
    path: 'M4.595 0a8.42 8.42 0 0 0-.796.04C2.13.16.44 1.67.05 3.785c-.05.3-.05 9.61 0 10.11.24 1.371.935 2.52 2.095 3.465.255.205.865.545 1.24.695.42.17 1.24.39 1.495.415l.14.014 1.175.01c1.715.015 2.085.015 3.81-.015.7-.015 1.5-.04 1.79-.06l.525-.03.505-.005.12-.04c.08-.025.165-.07.19-.1s.09-.175.14-.32c.085-.25.1-.38.055-.46-.025-.045-.055-.055-.19-.055-.085 0-.135.01-.13.03.01.025-.035.065-.12.105-.115.055-.185.065-.655.09-.295.015-1.18.04-1.965.055-1.63.03-2.165.025-3.64.01l-1.185-.015-.11-.015c-.505-.065-1.28-.325-1.6-.545-.105-.07-.205-.135-.225-.145-.02-.01-.05-.025-.065-.035l-.025-.015.035-.02c.02-.01.065-.035.1-.055.03-.02.1-.055.15-.08.5-.235.86-.575 1.095-.99.065-.12.15-.335.19-.49.07-.255.075-.32.075-2.125V10.5l.01-2.04.015-.285c.01-.09.04-.205.07-.255.155-.27.415-.435.71-.435.285 0 .53.15.68.41.05.085.07.16.08.34L6.5 8.59v2.285l.01 2.285.02.25c.04.325.15.585.34.81.2.24.475.38.8.415.1.01.175.01.285 0 .53-.065.895-.465.935-1.025.01-.13.01-4.975 0-5.1-.025-.285-.085-.48-.2-.63-.18-.22-.415-.33-.72-.33-.25 0-.44.075-.6.24-.085.09-.14.19-.165.305l-.025.125-.01 2.44-.015 2.445-.025.2c-.04.245-.14.44-.3.57-.175.14-.42.2-.66.16-.44-.075-.7-.43-.7-.94V8.325l-.02-.345c-.045-.5-.215-.87-.525-1.11-.215-.165-.45-.235-.74-.235-.27 0-.5.07-.695.215-.3.22-.455.56-.49 1.08l-.01.19V11.8l.01 3.45.02.205c.025.2.04.27.085.38.17.395.5.665.91.735.11.02.175.02.3 0 .435-.07.74-.385.84-.87.025-.12.025-.165.03-2.44l.01-2.32.015-.22c.03-.265.11-.44.265-.545.1-.07.215-.105.345-.105.17 0 .33.065.45.185.13.125.195.295.205.52.005.075.005 4.695 0 4.77-.01.35-.085.59-.245.775-.185.215-.44.325-.75.325-.275 0-.5-.085-.68-.255-.115-.11-.185-.235-.22-.39l-.025-.13-.005-2.495-.01-2.495v-.155c-.015-.27-.115-.495-.295-.66-.165-.15-.38-.235-.615-.235-.225 0-.425.075-.59.215-.205.17-.31.41-.325.735l-.005.155V12.27l.01 2.455.015.215c.035.435.165.77.4 1.02.285.305.69.475 1.12.475.545 0 .975-.205 1.275-.61l.065-.09.045.065c.28.41.69.62 1.225.63.47.01.87-.155 1.17-.48.225-.24.355-.535.39-.885l.015-.185.005-2.47.01-2.47v-.185c-.01-.295-.085-.52-.23-.685-.195-.22-.47-.33-.79-.33-.285 0-.525.09-.715.27-.155.145-.24.325-.265.545l-.015.175L8 10.55V12.97l-.01 2.42-.015.195c-.03.285-.115.49-.265.62-.1.09-.225.135-.38.135-.22 0-.4-.09-.525-.265-.09-.125-.135-.285-.14-.48l-.005-.15V10.22l.005-.175c.03-.33.145-.57.35-.72.145-.105.315-.155.505-.155.235 0 .43.085.575.25.115.13.18.29.195.49l.01.16v4.5l.005.175c.025.31.115.53.275.67.165.145.39.21.635.19.425-.035.695-.335.725-.8l.01-.165v-4.45l-.005-.185c-.025-.33-.125-.565-.315-.72-.155-.125-.355-.185-.575-.175-.27.01-.495.12-.66.315-.12.14-.185.305-.2.5l-.01.175V14.07l-.005.195c-.025.285-.115.49-.265.63-.1.09-.235.135-.39.135-.22 0-.4-.095-.52-.275-.085-.125-.13-.285-.135-.49l-.005-.16V10.17c.005-.145.025-.26.07-.37.115-.285.37-.47.67-.49.31-.025.585.13.745.405.07.12.1.25.105.41l.005.185v4.41l.005.175c.025.315.115.535.275.675.165.145.395.21.635.185.425-.04.695-.34.73-.8l.01-.165V10.24l-.005-.195c-.03-.335-.13-.575-.32-.73-.16-.13-.365-.19-.59-.18-.265.01-.49.12-.655.315-.12.145-.185.31-.2.5l-.01.18V14.06l-.005.19c-.025.29-.115.495-.265.635-.1.09-.235.14-.39.14-.22 0-.4-.095-.52-.275-.085-.125-.13-.285-.135-.49l-.005-.165V10.16c.005-.145.025-.265.07-.375.115-.285.37-.47.67-.49.31-.025.585.13.745.41.07.12.1.25.105.415l.005.185v4.41l.005.175c.025.315.115.535.275.675.16.145.395.21.635.185.425-.04.695-.34.73-.8l.01-.165v-4.39l-.005-.19c-.025-.305-.11-.53-.295-.685-.18-.165-.42-.25-.67-.245-.245.005-.46.09-.625.255-.14.135-.22.31-.245.52l-.01.175V14.06l-.005.19c-.025.285-.115.49-.265.63-.1.09-.235.14-.39.14-.22 0-.4-.095-.52-.275-.085-.13-.13-.29-.135-.495l-.005-.165V10.15c.005-.14.025-.26.07-.37.11-.285.37-.47.665-.49.31-.02.585.135.745.41.07.12.1.255.105.415l.005.185v4.41',
    color: '#4EAA25',
    viewBox: '0 0 24 24',
  },
  {
    name: 'PowerShell',
    path: 'M23.813 0H.187A.186.186 0 0 0 0 .187v23.626c0 .103.084.187.187.187h23.626A.186.186 0 0 0 24 23.813V.187A.186.186 0 0 0 23.813 0zM7.505 16.605L3.9 12.9l3.605-3.705-.55 3.705.55 3.705zm1.275.495L5.1 20.4l-.615-.615 3.405-2.985-.11-.7zm5.655-9.54l-4.41 10.035-1.29.045 4.41-10.035 1.29-.045zm2.13 9.54l-3.606 3.705.55-3.705-.55-3.705 3.606 3.705z',
    color: '#5391FE',
    viewBox: '0 0 24 24',
  },
];

const funItems = [
  { label: "Playing soccer", icon: "⚽", tag: "Every weekend. No excuses.", color: "border-green-500/30 bg-green-500/5", accent: "text-green-400" },
  { label: "Traveling", icon: "✈️", tag: "New place, new perspective.", color: "border-sky-500/30 bg-sky-500/5", accent: "text-sky-400" },
  { label: "Spending time with family", icon: "❤️", tag: "The most important meeting of the day.", color: "border-rose-500/30 bg-rose-500/5", accent: "text-rose-400" },
  { label: "Walking outside", icon: "🚶", tag: "Best ideas happen on foot.", color: "border-amber-500/30 bg-amber-500/5", accent: "text-amber-400" },
  { label: "Working out", icon: "💪", tag: "Discipline off-screen, too.", color: "border-orange-500/30 bg-orange-500/5", accent: "text-orange-400" },
  { label: "Reading books", icon: "📚", tag: "Slow down. Think deeper.", color: "border-violet-500/30 bg-violet-500/5", accent: "text-violet-400" },
  { label: "Meditating", icon: "🧘", tag: "Quiet the noise. Find the signal.", color: "border-teal-500/30 bg-teal-500/5", accent: "text-teal-400" },
  { label: "Racing cars", icon: "🏎️", tag: "Full speed, full focus.", color: "border-red-500/30 bg-red-500/5", accent: "text-red-400" },
  { label: "Playing FIFA", icon: "🎮", tag: "I never lose. (I always lose.)", color: "border-blue-500/30 bg-blue-500/5", accent: "text-blue-400" },
];

const navLinks = [
  { label: "Story", href: "#story" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Life", href: "#human" },
  { label: "Decode", href: "#tryme" },
  { label: "Contact", href: "#contact" },
];

/* ── Icons ──────────────────────────────────────────────────────── */

function GithubIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
      <path d="M12 2C6.477 2 2 6.589 2 12.248c0 4.526 2.865 8.367 6.839 9.722.5.096.682-.221.682-.492 0-.244-.009-.89-.014-1.747-2.782.617-3.369-1.37-3.369-1.37-.455-1.177-1.11-1.49-1.11-1.49-.908-.636.069-.623.069-.623 1.004.072 1.532 1.053 1.532 1.053.892 1.566 2.341 1.114 2.91.852.091-.664.35-1.114.636-1.37-2.221-.259-4.555-1.14-4.555-5.073 0-1.12.39-2.036 1.029-2.753-.103-.26-.446-1.307.097-2.724 0 0 .84-.276 2.75 1.051A9.303 9.303 0 0 1 12 6.836a9.27 9.27 0 0 1 2.504.347c1.909-1.327 2.747-1.051 2.747-1.051.545 1.417.202 2.464.1 2.724.64.717 1.027 1.633 1.027 2.753 0 3.943-2.338 4.811-4.566 5.065.359.318.679.946.679 1.907 0 1.377-.012 2.488-.012 2.826 0 .273.18.592.688.491C19.138 20.611 22 16.772 22 12.248 22 6.589 17.523 2 12 2Z" />
    </svg>
  );
}

function LinkedinIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
      <path d="M6.94 8.5H3.56V19.5h3.38V8.5ZM5.25 3C4.14 3 3.25 3.91 3.25 5.03c0 1.11.89 2.02 2 2.02 1.11 0 2-.91 2-2.02C7.25 3.91 6.36 3 5.25 3Zm14.5 9.67c0-3.11-1.66-4.56-3.88-4.56-1.79 0-2.59.99-3.04 1.68V8.5H9.45c.04.85 0 11 0 11h3.38v-6.14c0-.33.02-.66.12-.9.26-.66.86-1.35 1.86-1.35 1.31 0 1.84 1.02 1.84 2.52v5.87h3.38l.02-6.83Z" />
    </svg>
  );
}

/* ── Page ───────────────────────────────────────────────────────── */

export default function Home() {
  return (
    <main className="bg-[#0a0a0a] text-zinc-100 selection:bg-green-500 selection:text-black pb-16 md:pb-0">

      {/* ── Header ──────────────────────────────────── */}
      <header className="sticky top-0 z-50 border-b border-green-500/10 bg-[#0a0a0a]/95 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <a href="#home" className="flex items-center gap-2.5 font-mono text-sm font-bold text-white transition hover:text-green-400">
            <span className="flex h-7 w-7 items-center justify-center rounded bg-green-500 font-mono text-xs font-black text-black shadow-[0_0_12px_rgba(34,197,94,0.5)]">J</span>
            Jazz<span className="text-green-500">.exe</span>
          </a>
          <nav className="hidden items-center gap-1 md:flex">
            {navLinks.map(({ label, href }) => (
              <a key={label} href={href}
                className="rounded px-4 py-2 font-mono text-xs font-medium text-zinc-500 transition hover:bg-green-500/10 hover:text-green-400">
                {label}
              </a>
            ))}
          </nav>
          <div className="flex items-center gap-2">
            {[
              { href: "https://github.com/Jazz-1998", label: "GitHub", icon: <GithubIcon /> },
              { href: "https://www.linkedin.com/in/jawad-alhussein/", label: "LinkedIn", icon: <LinkedinIcon /> },
              { href: "mailto:alhusseinjazz@gmail.com", label: "Email", icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-5 w-5"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" strokeLinecap="round" strokeLinejoin="round" /><polyline points="22,6 12,13 2,6" strokeLinecap="round" strokeLinejoin="round" /></svg> },
            ].map(({ href, label, icon }) => (
              <a key={label} href={href} target={href.startsWith('http') ? '_blank' : undefined} rel="noreferrer" aria-label={label}
                className="flex h-9 w-9 items-center justify-center rounded text-zinc-600 transition hover:bg-green-500/10 hover:text-green-400">
                {icon}
              </a>
            ))}
            <MobileMenu />
          </div>
        </div>
      </header>

      {/* ── Hero ────────────────────────────────────── */}
      <Hero />

      {/* ── Story ───────────────────────────────────── */}
      <section id="story" className="border-t border-green-500/10 bg-[#0a0a0a] py-16 md:py-32">
        <div className="mx-auto max-w-6xl px-6">
          <ScrollReveal>
            <p className="mb-3 font-mono text-sm font-semibold uppercase tracking-widest text-green-500">// my_story.log</p>
            <h2 className="mb-16 text-3xl font-bold leading-tight tracking-tight text-white md:text-6xl">
              Where it all <span className="text-green-400">started.</span>
            </h2>
          </ScrollReveal>

          <div className="grid gap-8 md:grid-cols-2 md:gap-20">
            <ScrollReveal delay={1}>
              <div className="overflow-hidden rounded-xl border border-green-500/15 bg-black shadow-[0_0_40px_rgba(34,197,94,0.05)]">
                <div className="flex items-center justify-between border-b border-green-500/10 bg-zinc-900/50 px-4 py-3">
                  <div className="flex items-center gap-2">
                    <span className="h-2.5 w-2.5 rounded-full bg-red-500/70" />
                    <span className="h-2.5 w-2.5 rounded-full bg-yellow-500/70" />
                    <span className="h-2.5 w-2.5 rounded-full bg-green-500/70" />
                    <span className="ml-2 font-mono text-xs text-zinc-600">story.log</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-green-500" />
                    <span className="font-mono text-xs text-green-600">READING</span>
                  </div>
                </div>
                <div className="p-7">
                  <p className="mb-6 font-mono text-xs text-green-500/60">$ cat story.log</p>
                  <div className="space-y-5 text-base leading-relaxed text-zinc-300">
                    <p>
                      <span className="mr-2 font-mono text-xs text-zinc-700">01</span>
                      &ldquo;Every problem has a solution.&rdquo; That&apos;s not something I read. That&apos;s something I lived.
                    </p>
                    <p>
                      <span className="mr-2 font-mono text-xs text-zinc-700">02</span>
                      Growing up, my dad didn&apos;t just tell me how things worked. He pulled me into it. Painting, cutting the grass, fixing whatever needed fixing. It wasn&apos;t optional. It was just how life was.
                    </p>
                    <p>
                      <span className="mr-2 font-mono text-xs text-zinc-700">03</span>
                      And things went wrong all the time. But walking away was never part of the process. We stayed with it. We figured it out. Every single time. That&apos;s where it all started.
                    </p>
                    <p>
                      <span className="mr-2 font-mono text-xs text-zinc-700">04</span>
                      Somewhere in those moments, something stuck with me. Not just how to fix things, but how to face them.
                    </p>
                    <p>
                      <span className="mr-2 font-mono text-xs text-zinc-700">05</span>
                      That mindset became who I am.
                    </p>
                    <p>
                      <span className="mr-2 font-mono text-xs text-zinc-700">06</span>
                      Today, support isn&apos;t just a role I play. It&apos;s how I think, how I move, and how I show up. I don&apos;t sit comfortably with problems. I lean into them, break them down, and stay with them until they finally make sense.
                    </p>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={2}>
              {/* Terminal window card */}
              <div className="overflow-hidden rounded-xl border border-green-500/15 bg-black shadow-[0_0_40px_rgba(34,197,94,0.05)]">
                <div className="flex items-center gap-2 border-b border-green-500/10 bg-zinc-900/50 px-4 py-3">
                  <span className="h-2.5 w-2.5 rounded-full bg-red-500/70" />
                  <span className="h-2.5 w-2.5 rounded-full bg-yellow-500/70" />
                  <span className="h-2.5 w-2.5 rounded-full bg-green-500/70" />
                  <span className="ml-2 font-mono text-[10px] text-zinc-600">personal.log</span>
                </div>
                <div className="p-7">
                  <p className="mb-5 font-mono text-xs text-green-500/70">$ cat personal.log</p>
                  <blockquote className="space-y-3 text-xl font-bold leading-snug tracking-tight md:text-2xl">
                    <p className="text-white">And honestly, I owe all of that to my dad.</p>
                    <p className="text-zinc-400">He didn&apos;t just teach me how to fix things.</p>
                    <p className="text-zinc-400">He taught me patience, persistence,</p>
                    <p className="text-zinc-400">and not to leave until a problem</p>
                    <p className="text-green-400">turns into a solution.</p>
                  </blockquote>
                  <div className="mt-7 border-t border-green-500/10 pt-6">
                    <p className="text-base leading-relaxed text-zinc-400">
                      I love him for that. What a hero.
                    </p>
                    <p className="mt-3 text-base leading-relaxed text-zinc-500">
                      That&apos;s something I carry with me every single day.
                    </p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ── What I Do ───────────────────────────────── */}
      <section id="about" className="border-t border-green-500/10 bg-[#0d0d0d] py-16 md:py-32">
        <div className="mx-auto max-w-6xl px-6">
          <ScrollReveal>
            <p className="mb-3 font-mono text-sm font-semibold uppercase tracking-widest text-green-500">// about.active</p>
            <h2 className="mb-14 text-3xl font-bold tracking-tight text-white md:text-6xl">
              How I show up — every time.
            </h2>
          </ScrollReveal>

          <div className="grid gap-4 md:grid-cols-3">
            {showcaseCards.map((card, i) => (
              <ScrollReveal key={card.title} delay={((i + 1) as 1 | 2 | 3)}>
                <div className="group flex h-full flex-col overflow-hidden rounded-xl border border-green-500/10 bg-black transition duration-300 hover:border-green-500/30 hover:shadow-[0_0_30px_rgba(34,197,94,0.08)]">
                  {/* Terminal chrome */}
                  <div className="flex items-center justify-between border-b border-green-500/10 bg-zinc-900/40 px-4 py-2.5">
                    <div className="flex items-center gap-1.5">
                      <span className="h-2 w-2 rounded-full bg-red-500/60" />
                      <span className="h-2 w-2 rounded-full bg-yellow-500/60" />
                      <span className="h-2 w-2 rounded-full bg-green-500/60" />
                    </div>
                    <span className="font-mono text-[9px] text-zinc-700">{card.id}</span>
                    <div className="flex items-center gap-1">
                      <span className="h-1 w-1 rounded-full bg-green-500 animate-pulse" />
                      <span className="font-mono text-[9px] text-green-600">{card.status}</span>
                    </div>
                  </div>
                  <div className="flex flex-1 flex-col p-6">
                    <span className="mb-4 text-2xl">{card.icon}</span>
                    <h3 className="mb-3 text-lg font-semibold text-white">{card.title}</h3>
                    <p className="mb-5 flex-1 text-base leading-relaxed text-zinc-400">{card.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {card.items.map((item) => (
                        <span key={item} className="rounded border border-green-500/20 px-2.5 py-1 font-mono text-xs text-zinc-400 transition group-hover:border-green-500/40 group-hover:text-green-400">
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <SupportConsole />
        </div>
      </section>

      {/* ── Skills & Tools ──────────────────────────── */}
      <section id="skills" className="border-t border-green-500/10 bg-[#0a0a0a] py-16 md:py-32">
        <div className="mx-auto max-w-6xl px-6">
          <ScrollReveal>
            <p className="mb-3 font-mono text-sm font-semibold uppercase tracking-widest text-green-500">// skills.config</p>
            <h2 className="mb-14 text-3xl font-bold tracking-tight text-white md:text-6xl">
              The systems behind how I solve problems
            </h2>
          </ScrollReveal>

          {/* Programming Languages */}
          <ScrollReveal delay={1}>
            <p className="mb-4 font-mono text-xs font-semibold uppercase tracking-widest text-zinc-400">// languages</p>
            <div className="mb-12 flex flex-wrap gap-3">
              {programming.map((lang) => (
                <div
                  key={lang.name}
                  className="flex items-center gap-2.5 rounded-lg border border-zinc-700/50 bg-zinc-800/40 px-4 py-2.5 transition duration-200 hover:border-zinc-600 hover:bg-zinc-800/70"
                >
                  <svg
                    viewBox={lang.viewBox}
                    fill={lang.color}
                    className="h-5 w-5 shrink-0"
                    aria-hidden="true"
                  >
                    <path d={lang.path} />
                  </svg>
                  <span className="text-sm font-medium text-zinc-300">{lang.name}</span>
                </div>
              ))}
            </div>
          </ScrollReveal>

          {/* Systems / Skills Cards */}
          <ScrollReveal delay={3}>
            <p className="mb-4 font-mono text-xs font-semibold uppercase tracking-widest text-zinc-400">// systems</p>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {systems.map((s) => (
                <div key={s.id} className={`rounded-xl border p-5 ${s.color}`}>
                  <div className="mb-4">
                    <span className="mb-2 block text-2xl">{s.emoji}</span>
                    <p className="font-mono text-xs font-bold uppercase tracking-widest leading-snug">{s.label}</p>
                  </div>
                  {s.skills.length > 0 && (
                    <>
                      <p className="mb-2 font-mono text-[11px] font-semibold uppercase tracking-widest opacity-60">Skills</p>
                      <ul className="mb-4 space-y-1.5">
                        {s.skills.map((item) => (
                          <li key={item} className="flex items-start gap-2">
                            <span className="mt-0.5 font-mono text-xs opacity-50">›</span>
                            <span className="text-sm leading-relaxed text-zinc-300">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </>
                  )}
                  <p className="mb-2 font-mono text-[11px] font-semibold uppercase tracking-widest opacity-60">Tools</p>
                  <ul className="space-y-1.5">
                    {s.tools.map((item) => (
                      <li key={item} className="flex items-start gap-2">
                        <span className="mt-0.5 font-mono text-xs opacity-50">›</span>
                        <span className="text-sm leading-relaxed text-zinc-300">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ── Life ────────────────────────────────────── */}
      <section id="human" className="border-t border-green-500/10 bg-[#0d0d0d] py-16 md:py-32">
        <div className="mx-auto max-w-6xl px-6">
          <ScrollReveal>
            <p className="mb-3 font-mono text-sm font-semibold uppercase tracking-widest text-green-500">// life.exe</p>
            <h2 className="mb-4 text-3xl font-bold tracking-tight text-white md:text-6xl">
              Outside of work.
            </h2>
            <p className="mb-14 max-w-xl text-lg leading-relaxed text-zinc-400">
              The best technical people are still human. We have lives outside of work, like mine… and please tell me you do too 😄
            </p>
          </ScrollReveal>

          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {funItems.map((item, i) => (
              <ScrollReveal key={item.label} delay={((i % 3) + 1) as 1 | 2 | 3}>
                <div className="group flex flex-col overflow-hidden rounded-xl border border-green-500/10 bg-black transition duration-300 hover:border-green-500/25 hover:shadow-[0_0_20px_rgba(34,197,94,0.06)]">
                  <div className="flex items-center justify-between border-b border-green-500/10 bg-zinc-900/40 px-4 py-2">
                    <span className="font-mono text-[10px] text-zinc-700">PROC_{String(i + 1).padStart(2, '0')}</span>
                    <div className="flex items-center gap-1">
                      <span className="h-1 w-1 rounded-full bg-green-500/60 animate-pulse" />
                      <span className="font-mono text-[10px] text-green-700">ACTIVE</span>
                    </div>
                  </div>
                  <div className="p-5">
                    <span className="mb-3 block text-2xl transition duration-300 group-hover:scale-110">{item.icon}</span>
                    <p className="mb-1 font-mono text-sm font-semibold text-green-400">{item.label}</p>
                    <p className="text-sm leading-relaxed text-zinc-500">{item.tag}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Decode ──────────────────────────────────── */}
      <ProblemSolver />

      {/* ── Contact ─────────────────────────────────── */}
      <section id="contact" className="relative overflow-hidden border-t border-green-500/10 bg-[#0a0a0a] py-16 md:py-36">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-green-500/5 blur-[120px]" />
        </div>

        <div className="relative mx-auto max-w-6xl px-6">
          <ScrollReveal>
            <p className="mb-3 font-mono text-sm font-semibold uppercase tracking-widest text-green-500">// contact.init()</p>
            <TypewriterText text="Don't be a stranger." className="mb-10 text-3xl font-bold text-white md:text-6xl" />
          </ScrollReveal>

          <div className="grid gap-16 md:grid-cols-2 md:gap-24">
            <ScrollReveal delay={1}>
              <div className="space-y-5 text-base leading-relaxed">
                <p className="text-zinc-300">
                  I&apos;ve always loved connecting with people. Doesn&apos;t matter where you&apos;re from,
                  your background, or what path brought you here.
                </p>
                <p className="font-medium text-green-400">
                  If you came from the moon, I&apos;d probably ask how the trip was and tell you to pull up a chair.
                </p>
                <p className="text-zinc-400">
                  Life, opportunities, ideas, vision, projects, or anything random — I&apos;m here. 😉
                </p>
              </div>
              <div className="mt-10 flex gap-3 border-t border-green-500/10 pt-10">
                {[
                  { href: "mailto:alhusseinjazz@gmail.com", label: "Email", icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-5 w-5"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" strokeLinecap="round" strokeLinejoin="round" /><polyline points="22,6 12,13 2,6" strokeLinecap="round" strokeLinejoin="round" /></svg> },
                  { href: "https://www.linkedin.com/in/jawad-alhussein/", label: "LinkedIn", icon: <LinkedinIcon /> },
                  { href: "https://github.com/Jazz-1998", label: "GitHub", icon: <GithubIcon /> },
                ].map(({ href, label, icon }) => (
                  <a key={label} href={href} target={href.startsWith('http') ? '_blank' : undefined} rel="noreferrer" aria-label={label}
                    className="flex h-12 w-12 items-center justify-center rounded-lg border border-green-500/15 text-zinc-600 transition hover:border-green-500/40 hover:bg-green-500/5 hover:text-green-400">
                    {icon}
                  </a>
                ))}
              </div>
            </ScrollReveal>

            <ScrollReveal delay={2}>
              <p className="mb-5 font-mono text-sm font-semibold uppercase tracking-widest text-green-500">// contact me</p>
              <ContactForm />
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ── Footer ──────────────────────────────────── */}
      <footer className="border-t border-green-500/10 bg-[#0a0a0a] px-6 py-8">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 md:flex-row">
          <div className="flex items-center gap-2">
            <span className="font-mono text-xs text-green-500">$</span>
            <span className="font-mono text-xs text-zinc-600">jazz --version 2026.1</span>
          </div>
          <p className="text-sm text-zinc-500">Technical Support Engineer… who also happens to code 😉</p>
          <p className="font-mono text-xs text-zinc-600">© 2026</p>
        </div>
      </footer>

    </main>
  );
}
