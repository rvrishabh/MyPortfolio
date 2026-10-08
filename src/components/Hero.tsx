import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { profile } from "../data";
import { Guilloche } from "./Guilloche";
import { NoteCard } from "./NoteCard";

const ease = [0.22, 1, 0.36, 1] as const;

const lines = ["I build fintech", "& Web3 products", "that move real money."];

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });

  const cardY = useTransform(scrollYProgress, [0, 1], [0, 160]);
  const cardRotate = useTransform(scrollYProgress, [0, 1], [-4, 8]);
  const textY = useTransform(scrollYProgress, [0, 1], [0, -80]);
  const fade = useTransform(scrollYProgress, [0.35, 0.9], [1, 0]);
  const spin = useTransform(scrollYProgress, [0, 1], [0, 90]);

  return (
    <section id="top" ref={ref} className="relative isolate overflow-hidden pb-24 pt-32 md:pt-40 lg:min-h-[100svh]">
      {/* Oversized rosette watermark */}
      <motion.div
        style={reduce ? undefined : { rotate: spin }}
        className="pointer-events-none absolute -right-[30vw] top-[-20vw] -z-10 w-[95vw] max-w-[1300px] text-ink/[0.07] dark:text-accent/[0.09]"
      >
        <Guilloche layers={7} R={150} r={56} strokeWidth={0.8} className="h-full w-full" />
      </motion.div>

      <div className="mx-auto grid max-w-6xl items-center gap-14 px-4 sm:px-6 lg:grid-cols-[1.15fr_1fr] lg:gap-10">
        <motion.div style={reduce ? undefined : { y: textY, opacity: fade }}>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease }}
            className="mb-8 inline-flex items-center gap-2.5 rounded-full border border-rule bg-surface/60 px-4 py-1.5 text-sm text-ink-soft backdrop-blur"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
            </span>
            Taking on freelance and contract work
          </motion.p>

          <h1 className="font-display text-[clamp(2.6rem,7.2vw,5.6rem)] font-medium leading-[0.98] tracking-[-0.025em]">
            {lines.map((line, i) => (
              <span key={line} className="block overflow-hidden pb-[0.08em]">
                <motion.span
                  className={`block ${i === 2 ? "italic" : ""}`}
                  initial={{ y: "110%", rotate: 3 }}
                  animate={{ y: "0%", rotate: 0 }}
                  transition={{ duration: 1.1, delay: 0.15 + i * 0.12, ease }}
                >
                  {line}
                </motion.span>
              </span>
            ))}
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.65, ease }}
            className="mt-8 max-w-[34rem] text-lg leading-relaxed text-ink-soft text-pretty"
          >
            I'm {profile.name}, a founding engineer with {profile.yearsShipping} years building trading engines, payment
            rails and tokenization platforms end to end — React and Next.js up front, NestJS and PostgreSQL underneath.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.8, ease }}
            className="mt-10 flex flex-wrap items-center gap-3"
          >
            <a
              href={`mailto:${profile.email}`}
              className="group inline-flex items-center gap-3 rounded-full bg-ink py-3.5 pl-6 pr-3.5 font-medium text-paper transition-transform hover:scale-[1.02] active:scale-[0.98]"
            >
              Start a project
              <span className="grid h-7 w-7 place-items-center rounded-full bg-paper/15 transition-transform duration-300 group-hover:rotate-45">
                <svg viewBox="0 0 16 16" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="1.8">
                  <path d="M4 12 12 4M5.5 4H12v6.5" />
                </svg>
              </span>
            </a>
            <a
              href="#work"
              className="rounded-full border border-ink/20 px-6 py-3.5 font-medium transition-colors hover:border-ink/50 hover:bg-ink/[0.04]"
            >
              See my work
            </a>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 60, rotate: -10, scale: 0.92 }}
          animate={{ opacity: 1, y: 0, rotate: 0, scale: 1 }}
          transition={{ duration: 1.4, delay: 0.3, ease }}
          className="mx-auto w-full max-w-[560px]"
        >
          <motion.div style={reduce ? undefined : { y: cardY, rotate: cardRotate }}>
            <NoteCard />
          </motion.div>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2.2, duration: 1 }}
            className="mt-6 hidden text-center text-sm text-ink-faint md:block"
          >
            Move your cursor over the note — he's watching.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
