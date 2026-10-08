import { animate, motion, MotionValue, useInView, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { about, education, highlights } from "../data";

function Word({ children, progress, range }: { children: string; progress: MotionValue<number>; range: [number, number] }) {
  const opacity = useTransform(progress, range, [0.2, 1]);
  return (
    <motion.span style={{ opacity }} className="mr-[0.25em] inline-block">
      {children}
    </motion.span>
  );
}

function Count({ value }: { value: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-15%" });
  const reduce = useReducedMotion();
  const target = parseInt(value, 10);
  const suffix = value.replace(/^\d+/, "");
  const [n, setN] = useState(reduce ? target : 0);

  useEffect(() => {
    if (!inView || reduce) return;
    const c = animate(0, target, { duration: 1.6, ease: [0.22, 1, 0.36, 1], onUpdate: (v) => setN(Math.round(v)) });
    return () => c.stop();
  }, [inView, reduce, target]);

  return (
    <span ref={ref} className="tabular">
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
                <Count value={h.value} />
              </dd>
              <dd className="mt-2 max-w-[16ch] text-sm leading-snug text-ink-soft">{h.label}</dd>
            </motion.div>
          ))}
        </dl>

        <p className="mt-10 text-sm text-ink-faint">
          {education.degree}, {education.school}, {education.years}.
        </p>
      </div>
    </section>
  );
}
