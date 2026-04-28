const skills = [
  "JavaScript",
  "TypeScript",
  "React.js",
  "Next.js",
  "Nest.js",
  "Node.js",
  "MongoDB",
  "Tailwind CSS",
  "Redux",
  "Web3",
  "Blockchain Integration",
  "Wagmi",
  "Viem",
  "Shadcn UI",
];

const experiences = [
  {
    role: "Founding Engineer",
    company: "Trend Digital",
    date: "Apr 2025 - Present",
    location: "Remote",
    highlights: [
      "Built a crypto payment gateway supporting BTC, ETH, USDT, and USDC with real-time tracking and webhook handling.",
      "Engineered instant crypto-to-fiat settlement flow to reduce volatility risk for merchants.",
      "Delivered merchant, affiliate, and admin platforms with RBAC, audit logging, and 80+ reusable monorepo components.",
    ],
  },
  {
    role: "Senior Product Engineer",
    company: "Zoniqx (RWA Tokenization Platform)",
    date: "Jun 2024 - Apr 2025",
    location: "Remote",
    highlights: [
      "Integrated XRPL alongside EVM chains for seamless multi-wallet switching and institutional tokenization workflows.",
      "Built an investor dashboard for holdings, transaction history, and real-time asset performance.",
      "Implemented async blockchain UX patterns with KYC/AML-compliant onboarding and data synchronization.",
    ],
  },
  {
    role: "Frontend Engineer",
    company: "Figrfast Pvt. Ltd. (Figr)",
    date: "Jan 2024 - Mar 2024",
    location: "Bangalore, India",
    highlights: [
      "Built PROKIT design resource hub with Next.js, Tailwind, and Shadcn UI.",
      "Engineered IDENTITY-PLUGIN for style customization and generation in Figma.",
      "Developed animated landing experiences with React and GSAP.",
    ],
  },
  {
    role: "SDE 1",
    company: "JSS",
    date: "Sep 2022 - Dec 2023",
    location: "Hyderabad, India",
    highlights: [
      "Built admin, clinician, and patient portals with React and Next.js.",
      "Integrated Agora SDK for video calling and appointment booking.",
      "Developed backend APIs with Nest.js and relational databases.",
    ],
  },
];

const projects = [
  {
    name: "TryBlink AI",
    role: "Co-creator",
    points: [
      "Built real-time Telegram chat UI with inbox triage, message threading, and live updates.",
      "Engineered GPT-based task extraction, smart replies, and follow-up automation from raw conversations.",
      "Designed memory pipeline and Redis-backed queues to improve response quality and reduce latency.",
    ],
  },
];

function App() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <div className="mx-auto max-w-5xl px-6 py-12 md:px-10">
        <header className="border-b border-slate-700 pb-8">
          <h1 className="text-4xl font-bold tracking-tight md:text-5xl">
            Rishabh Verma
          </h1>
          <p className="mt-2 text-xl text-cyan-300">Founding Engineer</p>
          <p className="mt-4 max-w-3xl text-slate-300">
            Founding Engineer with 3.5+ years shipping high-stakes fintech and
            Web3 products from 0-1. Built a multi-app fintech ecosystem and led
            multi-chain RWA tokenization across EVM and XRPL.
          </p>
          <div className="mt-5 flex flex-wrap gap-x-6 gap-y-2 text-sm text-slate-300">
            <span>rishabhofficial.verma@gmail.com</span>
            <span>+91-9760022095</span>
            <span>Noida, India</span>
            <a
              className="text-cyan-300 hover:text-cyan-200"
              href="https://www.linkedin.com/in/rishabh-verma-b66714203"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>
            <a
              className="text-cyan-300 hover:text-cyan-200"
              href="https://github.com/rvrishabh"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
            <a
              className="text-cyan-300 hover:text-cyan-200"
              href="https://rishabh26-portfolio.vercel.app/"
              target="_blank"
              rel="noreferrer"
            >
              Portfolio
            </a>
          </div>
        </header>

        <section className="mt-10">
          <h2 className="text-2xl font-semibold">Skills</h2>
          <div className="mt-4 flex flex-wrap gap-3">
            {skills.map((skill) => (
              <span
                key={skill}
                className="rounded-full border border-slate-700 bg-slate-900 px-4 py-2 text-sm text-slate-200"
              >
                {skill}
              </span>
            ))}
          </div>
        </section>

        <section className="mt-10">
          <h2 className="text-2xl font-semibold">Professional Experience</h2>
          <div className="mt-5 space-y-6">
            {experiences.map((exp) => (
              <article
                key={`${exp.company}-${exp.role}`}
                className="rounded-xl border border-slate-800 bg-slate-900/60 p-5"
              >
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <h3 className="text-lg font-semibold">
                    {exp.role} - {exp.company}
                  </h3>
                  <p className="text-sm text-slate-400">
                    {exp.date} | {exp.location}
                  </p>
                </div>
                <ul className="mt-3 list-disc space-y-2 pl-5 text-slate-300">
                  {exp.highlights.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section className="mt-10">
          <h2 className="text-2xl font-semibold">Personal Project</h2>
          <div className="mt-5 space-y-4">
            {projects.map((project) => (
              <article
                key={project.name}
                className="rounded-xl border border-slate-800 bg-slate-900/60 p-5"
              >
                <h3 className="text-lg font-semibold">
                  {project.name} - {project.role}
                </h3>
                <ul className="mt-3 list-disc space-y-2 pl-5 text-slate-300">
                  {project.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section className="mt-10 grid gap-8 pb-10 md:grid-cols-2">
          <div>
            <h2 className="text-2xl font-semibold">Education</h2>
            <p className="mt-3 text-slate-300">
              Bachelor of Technology in Civil Engineering
            </p>
            <p className="text-slate-400">
              Meerut Institute of Engineering and Technology (2016 - 2020)
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold">Certificates</h2>
            <ul className="mt-3 list-disc space-y-2 pl-5 text-slate-300">
              <li>Advanced React Course by Meta</li>
              <li>Crash Course on Python by Google (Coursera)</li>
            </ul>
          </div>
        </section>
      </div>
    </main>
  );
}

export default App;
