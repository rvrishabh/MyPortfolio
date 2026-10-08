import { motion, MotionValue, useInView, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { about, education, highlights, type Highlight } from "../data";

function Word({ children, progress, range }: { children: string; progress: MotionValue<number>; range: [number, number] }) {
  const opacity = useTransform(progress, range, [0.2, 1]);
  return (
    <motion.span style={{ opacity }} className="mr-[0.25em] inline-block">
      {children}
    </motion.span>
  );
}

function Count({ prefix = "", value: target, suffix = "" }: Omit<Highlight, "label">) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-15%" });
  const reduce = useReducedMotion();
  // Starts at the real value so the number is never left at 0; it only counts
  // up from 0 once the stat scrolls into view.
  const [n, setN] = useState(target);

  useEffect(() => {
    if (!inView || reduce) return;
    let raf = 0;
    const start = performance.now();
    const tick = (now: number) => {
      const t = Math.min(1, (now - start) / 1600);
      setN(Math.round(target * (1 - Math.pow(1 - t, 3))));
      if (t < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => {
      cancelAnimationFrame(raf);
      setN(target);
    };
  }, [inView, reduce, target]);

  return (
    <span ref={ref} className="tabular">
      {prefix}
      {n}
      {suffix}
    </span>
  );
}

export function About() {
  const ref = useRef<HTMLParagraphElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 0.85", "end 0.45"] });
  const words = about.split(" ");

  return (
    <section id="about" className="relative py-28 md:py-40">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <h2 className="mb-10 text-sm text-ink-soft">About me</h2>
        <p
          ref={ref}
          className="max-w-[30ch] text-[clamp(1.55rem,3.4vw,2.75rem)] font-medium leading-[1.28] tracking-[-0.022em] lg:max-w-[34ch]"
        >
          {words.map((w, i) => (
            <Word key={i} progress={scrollYProgress} range={[i / words.length, (i + 1) / words.length]}>
              {w}
            </Word>
          ))}
        </p>

        <dl className="mt-20 grid grid-cols-2 border-t border-rule md:grid-cols-4">
          {highlights.map((h, i) => (
            <motion.div
              key={h.label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.7, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
              className="border-b border-rule py-7 pr-4 md:border-b-0 md:border-r md:px-6 md:first:pl-0 md:last:border-r-0"
            >
              <dt className="sr-only">{h.label}</dt>
              <dd className="font-display text-5xl font-medium md:text-6xl">
                <Count prefix={h.prefix} value={h.value} suffix={h.suffix} />
              </dd>
              <dd className="mt-2 max-w-[22ch] text-sm leading-snug text-ink-soft">{h.label}</dd>
            </motion.div>
          ))}
        </dl>

        <div className="mt-12 grid gap-6 text-sm sm:grid-cols-2">
          <div>
            <h3 className="font-semibold">Education</h3>
            <p className="mt-2 text-ink-soft">
              {education.degree}, {education.school}, {education.years}
            </p>
          </div>
          <div>
            <h3 className="font-semibold">Certificates</h3>
            <ul className="mt-2 flex flex-wrap gap-2">
              {education.certificates.map((c) => (
                <li key={c} className="rounded-full border border-rule px-3 py-1 text-ink-soft">
                  {c}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
