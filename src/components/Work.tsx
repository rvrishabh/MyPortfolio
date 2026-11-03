import { animate, motion, useInView, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { projects, type Project } from "../data";

const ease = [0.22, 1, 0.36, 1] as const;
const inr = new Intl.NumberFormat("en-IN", { style: "currency", currency: "INR", maximumFractionDigits: 0 });

/** A stylised slice of the Valupro valuation screen, built in HTML. */
function ValuationMock() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-20%" });
  const reduce = useReducedMotion();
  const final = 18450000;
  const [value, setValue] = useState(reduce ? final : 0);
  const [step, setStep] = useState(reduce ? 3 : 0);

  useEffect(() => {
    if (!inView || reduce) return;
    const c = animate(0, final, { duration: 2, ease, onUpdate: (v) => setValue(Math.round(v / 1000) * 1000) });
    const timers = [1, 2, 3].map((s) => window.setTimeout(() => setStep(s), 600 + s * 550));
    return () => {
      c.stop();
      timers.forEach(clearTimeout);
    };
  }, [inView, reduce]);

  const steps = ["Maker", "Checker", "Approved"];

  return (
    <div ref={ref} className="rounded-2xl border border-rule bg-paper p-5 shadow-[0_30px_60px_-30px_rgb(var(--ink)/0.4)] sm:p-6">
      <div className="mb-5 flex items-center justify-between">
        <div className="flex gap-1.5" aria-hidden="true">
          <span className="h-2.5 w-2.5 rounded-full bg-ink/15" />
          <span className="h-2.5 w-2.5 rounded-full bg-ink/15" />
          <span className="h-2.5 w-2.5 rounded-full bg-ink/15" />
        </div>
        <span className="text-xs text-ink-faint">Valuation report</span>
      </div>

      <p className="text-sm text-ink-soft">Residential flat, Sector 62, Noida</p>
      <p className="tabular mt-1 font-display text-[clamp(2rem,4vw,2.8rem)] font-medium leading-none">{inr.format(value)}</p>
      <p className="mt-1 text-xs text-ink-faint">Fair market value</p>

      <dl className="tabular mt-6 grid grid-cols-2 gap-px overflow-hidden rounded-xl border border-rule bg-rule text-sm">
        {[
          ["Circle rate", "₹ 1,02,000 / m²"],
          ["Built-up area", "142 m²"],
          ["Rate learned", "+3.4% vs last qtr"],
          ["Distress value", inr.format(Math.round(value * 0.8))],
        ].map(([k, v]) => (
          <div key={k} className="bg-paper px-3.5 py-3">
            <dt className="text-xs text-ink-faint">{k}</dt>
            <dd className="mt-0.5 font-medium">{v}</dd>
          </div>
        ))}
      </dl>

      <ol className="mt-6 flex items-center gap-2 text-xs" aria-label="Approval progress">
        {steps.map((s, i) => {
          const done = step > i;
          return (
            <li key={s} className="flex flex-1 items-center gap-2">
              <span
                className={`grid h-6 w-6 shrink-0 place-items-center rounded-full border transition-colors duration-500 ${
                  done ? "border-accent bg-accent text-paper" : "border-rule text-ink-faint"
                }`}
              >
                {done ? (
                  <svg viewBox="0 0 12 12" className="h-3 w-3" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M2.5 6.5 5 9l4.5-6" />
                  </svg>
                ) : (
                  i + 1
                )}
              </span>
              <span className={done ? "text-ink" : "text-ink-faint"}>{s}</span>
              {i < steps.length - 1 && (
                <span className="relative h-px flex-1 bg-rule">
                  <span
                    className="absolute inset-y-0 left-0 bg-accent transition-[width] duration-500"
                    style={{ width: step > i + 1 ? "100%" : "0%" }}
                  />
                </span>
              )}
            </li>
          );
        })}
      </ol>

      <div className="mt-6 flex items-center justify-between rounded-xl bg-ink/[0.05] px-4 py-3 text-sm">
        <span className="text-ink-soft">Bank-format PDF</span>
        <span className="font-medium text-accent">{step >= 3 ? "Ready to download" : "Waiting for sign-off"}</span>
      </div>
    </div>
  );
}

/** A Hinglish voice note being transcribed, then saved as a task with a clash shifted. */
function VoiceMock() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-20%" });
  const reduce = useReducedMotion();
  const said = "Kal 4 baje Aman ke saath call, aur 3:30 pe deck bhej dena";
  const [shown, setShown] = useState(reduce ? said.length : 0);
  const done = shown >= said.length;

  useEffect(() => {
    if (!inView || reduce) return;
    const c = animate(0, said.length, { duration: 2.4, delay: 0.4, ease: "linear", onUpdate: (v) => setShown(Math.round(v)) });
    return () => c.stop();
  }, [inView, reduce, said.length]);

  const bars = [0.35, 0.7, 0.5, 0.9, 0.6, 1, 0.55, 0.8, 0.4, 0.75, 0.5, 0.3];
  const tasks = [
    { time: "Tomorrow, 3:30 PM", title: "Send the deck to Aman", note: "Reminder will be spoken" },
    { time: "Tomorrow, 4:30 PM", title: "Call with Aman", note: "Moved 30 min: clashed with Design review" },
  ];

  return (
    <div ref={ref} className="rounded-2xl border border-rule bg-paper p-5 shadow-[0_30px_60px_-30px_rgb(var(--ink)/0.4)] sm:p-6">
      <div className="mb-4 flex items-center justify-between">
        <span className="text-sm font-semibold">{done ? "Saved" : "Listening"}</span>
        <span className="text-xs text-ink-faint">Hinglish</span>
      </div>

      <div className="flex items-center gap-3 rounded-xl bg-ink/[0.05] px-4 py-3">
        <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-accent text-paper">
          <svg viewBox="0 0 16 16" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
            <rect x="5.5" y="1.5" width="5" height="8.5" rx="2.5" />
            <path d="M3 7.5a5 5 0 0 0 10 0M8 12.5v2" />
          </svg>
        </span>
        <span className="flex h-7 flex-1 items-center gap-[3px]" aria-hidden="true">
          {bars.map((h, i) => (
            <motion.span
              key={i}
              className="w-[3px] flex-1 rounded-full bg-accent/70"
              initial={{ scaleY: h }}
              animate={!reduce && inView && !done ? { scaleY: [h, 1 - h * 0.6, h] } : { scaleY: done ? 0.15 : h }}
              transition={done ? { duration: 0.3 } : { duration: 0.6 + (i % 4) * 0.12, repeat: Infinity, ease: "easeInOut" }}
              style={{ height: "100%", originY: 0.5 }}
            />
          ))}
        </span>
      </div>

      <p className="mt-4 min-h-[2.8em] text-sm leading-snug text-ink-soft">
        "{said.slice(0, shown)}
        {!done ? <span className="ml-0.5 inline-block h-[1em] w-[2px] translate-y-[2px] animate-pulse bg-accent" /> : '"'}
      </p>

      <ul className="mt-4 divide-y divide-rule rounded-xl border border-rule">
        {tasks.map((t, i) => (
          <motion.li
            key={t.title}
            initial={{ opacity: 0, y: 8 }}
            animate={done ? { opacity: 1, y: 0 } : { opacity: 0, y: 8 }}
            transition={{ duration: 0.5, delay: i * 0.15, ease }}
            className="px-3.5 py-3 text-sm"
          >
            <span className="flex items-center justify-between gap-3">
              <span className="font-medium">{t.title}</span>
              <span className="tabular shrink-0 text-xs text-ink-faint">{t.time}</span>
            </span>
            <span className={`mt-0.5 block text-xs ${i === 1 ? "text-accent" : "text-ink-faint"}`}>{t.note}</span>
          </motion.li>
        ))}
      </ul>
    </div>
  );
}

/** A two-pulley belt drive that turns with scroll, echoing the Golden Machinery hero. */
function PulleyMock() {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const big = useTransform(scrollYProgress, [0, 1], [0, 360]);
  // the small pulley is ~half the diameter, so it turns twice as fast
  const small = useTransform(scrollYProgress, [0, 1], [0, 720]);

  const spokes = (n: number, r: number) =>
    Array.from({ length: n }, (_, i) => {
      const a = (i / n) * Math.PI * 2;
      return <line key={i} x1={0} y1={0} x2={Math.cos(a) * r} y2={Math.sin(a) * r} />;
    });

  const products = ["V-Belt", "Crown Patta", "Split", "Step", "Couplings"];

  return (
    <div ref={ref} className="rounded-2xl border border-rule bg-paper p-5 shadow-[0_30px_60px_-30px_rgb(var(--ink)/0.4)] sm:p-6">
      <div className="mb-5 flex items-center justify-between">
        <div className="flex gap-1.5" aria-hidden="true">
          <span className="h-2.5 w-2.5 rounded-full bg-ink/15" />
          <span className="h-2.5 w-2.5 rounded-full bg-ink/15" />
          <span className="h-2.5 w-2.5 rounded-full bg-ink/15" />
        </div>
        <span className="text-xs text-ink-faint">goldenpulley.com</span>
      </div>

      <p className="text-sm text-ink-soft">Power transmission, Agra</p>
      <p className="mt-1 font-display text-[clamp(1.6rem,3.2vw,2.2rem)] font-medium leading-tight">Machinery works on our hand.</p>

      <svg viewBox="0 0 320 150" className="mt-5 w-full text-ink" aria-hidden="true">
        <g fill="none" stroke="currentColor" strokeOpacity="0.25" strokeWidth="6" strokeLinecap="round">
          <line x1="90" y1="18" x2="236" y2="47" />
          <line x1="90" y1="132" x2="236" y2="103" />
        </g>
        <g transform="translate(90 75)">
          <motion.g style={reduce ? undefined : { rotate: big }}>
            <circle r="56" fill="rgb(var(--surface))" stroke="currentColor" strokeOpacity="0.5" strokeWidth="3" />
            <circle r="46" fill="none" stroke="currentColor" strokeOpacity="0.2" strokeWidth="1.5" />
            <g stroke="currentColor" strokeOpacity="0.45" strokeWidth="5" strokeLinecap="round">{spokes(6, 44)}</g>
            <circle r="12" className="fill-accent" />
          </motion.g>
        </g>
        <g transform="translate(236 75)">
          <motion.g style={reduce ? undefined : { rotate: small }}>
            <circle r="28" fill="rgb(var(--surface))" stroke="currentColor" strokeOpacity="0.5" strokeWidth="3" />
            <circle r="22" fill="none" stroke="currentColor" strokeOpacity="0.2" strokeWidth="1.5" />
            <circle r="16" fill="none" stroke="currentColor" strokeOpacity="0.2" strokeWidth="1.5" />
            <g stroke="currentColor" strokeOpacity="0.45" strokeWidth="3" strokeLinecap="round">{spokes(4, 20)}</g>
            <circle r="7" className="fill-accent" />
          </motion.g>
        </g>
      </svg>

      <ul className="mt-5 flex flex-wrap gap-1.5 text-xs">
        {products.map((p, i) => (
          <li
            key={p}
            className={`rounded-full px-2.5 py-1 font-medium ${i === 0 ? "bg-accent text-paper" : "bg-ink/[0.06] text-ink-soft"}`}
          >
            {p}
          </li>
        ))}
      </ul>

      <div className="mt-5 flex items-center justify-between rounded-xl bg-ink/[0.05] px-4 py-3 text-sm">
        <span className="text-ink-soft">Product catalogue (PDF)</span>
        <span className="font-medium text-accent">Enquire to download</span>
      </div>
    </div>
  );
}

const mocks = { valuation: ValuationMock, voice: VoiceMock, pulley: PulleyMock };

function ProjectCard({ project }: { project: Project }) {
  const Mock = mocks[project.mock];
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "start 0.25"] });
  const scale = useTransform(scrollYProgress, [0, 1], [0.88, 1]);
  const radius = useTransform(scrollYProgress, [0, 1], [56, 28]);
  const mockY = useTransform(scrollYProgress, [0, 1], [120, 0]);

  return (
    <motion.article
      ref={ref}
      style={reduce ? undefined : { scale, borderRadius: radius }}
      className="relative overflow-hidden rounded-[28px] border border-rule bg-surface"
    >
      <div className="grid gap-12 p-6 sm:p-10 lg:grid-cols-[1fr_1.05fr] lg:p-14">
        <div className="flex flex-col">
          <div className="flex items-center gap-3">
            {project.live && (
              <span className="inline-flex items-center gap-2 rounded-full bg-accent/15 px-3 py-1 text-sm font-medium text-accent">
                <span className="relative flex h-1.5 w-1.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-70" />
                  <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-accent" />
                </span>
                Live
              </span>
            )}
            <span className="text-sm text-ink-faint">{project.kind}</span>
          </div>

          <h3 className="mt-6 font-display text-[clamp(2.6rem,5.5vw,4.4rem)] font-medium italic leading-[0.95] tracking-[-0.02em]">
            {project.name}
          </h3>
          <p className="mt-5 max-w-[46ch] text-lg leading-relaxed text-ink-soft">{project.summary}</p>

          <ul className="mt-8 border-t border-rule">
            {project.points.map((p, i) => (
              <motion.li
                key={p}
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.08, ease }}
                className="border-b border-rule py-3.5 text-[15px] text-ink-soft"
              >
                {p}
              </motion.li>
            ))}
          </ul>

          <ul className="mt-8 flex flex-wrap gap-2" aria-label={`${project.name} stack`}>
            {project.stack.map((s) => (
              <li key={s} className="rounded-full border border-rule px-3 py-1 text-xs font-medium text-ink-soft">
                {s}
              </li>
            ))}
          </ul>

          {project.url && (
            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group mt-8 inline-flex w-fit items-center gap-2 rounded-full border border-ink/20 px-5 py-2.5 text-sm font-medium transition-colors hover:border-accent hover:text-accent"
            >
              Visit {new URL(project.url).hostname.replace(/^www\./, "")}
              <svg viewBox="0 0 12 12" className="h-3 w-3 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
                <path d="M3.5 8.5 8.5 3.5M4.5 3.5h4v4" />
              </svg>
            </a>
          )}
        </div>

        <motion.div style={reduce ? undefined : { y: mockY }} className="self-center">
          <Mock />
        </motion.div>
      </div>
    </motion.article>
  );
}

export function Work() {
  return (
    <section id="work" className="relative py-28 md:py-40">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mb-14 flex flex-wrap items-end justify-between gap-6">
          <h2 className="font-display text-[clamp(2.4rem,5vw,4rem)] leading-[1] tracking-[-0.02em]">Independent work</h2>
          <p className="max-w-[36ch] text-ink-soft">Products I've designed, built and shipped on my own, outside full-time roles.</p>
        </div>
        <div className="space-y-10">
          {projects.map((p) => (
            <ProjectCard key={p.name} project={p} />
          ))}
        </div>
      </div>
    </section>
  );
}
