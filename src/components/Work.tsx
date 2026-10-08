import { animate, motion, useInView, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { project } from "../data";

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

export function Work() {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "start 0.25"] });
  const scale = useTransform(scrollYProgress, [0, 1], [0.88, 1]);
  const radius = useTransform(scrollYProgress, [0, 1], [56, 28]);
  const mockY = useTransform(scrollYProgress, [0, 1], [120, 0]);

  return (
    <section id="work" className="relative py-28 md:py-40">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mb-14 flex flex-wrap items-end justify-between gap-6">
          <h2 className="font-display text-[clamp(2.4rem,5vw,4rem)] leading-[1] tracking-[-0.02em]">Independent work</h2>
          <p className="max-w-[36ch] text-ink-soft">Products I've designed, built and shipped on my own, outside full-time roles.</p>
        </div>

        <motion.article
          ref={ref}
          style={reduce ? undefined : { scale, borderRadius: radius }}
          className="relative overflow-hidden border border-rule bg-surface"
        >
          <div className="grid gap-12 p-6 sm:p-10 lg:grid-cols-[1fr_1.05fr] lg:p-14">
            <div className="flex flex-col">
              <div className="flex items-center gap-3">
                <span className="inline-flex items-center gap-2 rounded-full bg-accent/15 px-3 py-1 text-sm font-medium text-accent">
                  <span className="relative flex h-1.5 w-1.5">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-70" />
                    <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-accent" />
                  </span>
                  Live
                </span>
                <span className="text-sm text-ink-faint">Freelance, full-stack</span>
              </div>

              <h3 className="mt-6 font-display text-[clamp(2.6rem,5.5vw,4.4rem)] font-medium italic leading-[0.95] tracking-[-0.02em]">
                {project.name}
              </h3>
              <p className="mt-5 max-w-[46ch] text-lg leading-relaxed text-ink-soft">{project.summary}</p>

              <ul className="mt-8 space-y-0 border-t border-rule">
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

              <ul className="mt-8 flex flex-wrap gap-2" aria-label="Stack">
                {project.stack.map((s) => (
                  <li key={s} className="rounded-full border border-rule px-3 py-1 text-xs font-medium text-ink-soft">
                    {s}
                  </li>
                ))}
              </ul>
            </div>

            <motion.div style={reduce ? undefined : { y: mockY }} className="self-center">
              <ValuationMock />
            </motion.div>
          </div>
        </motion.article>
      </div>
    </section>
  );
}
