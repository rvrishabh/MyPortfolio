import { motion, useScroll, useSpring } from "framer-motion";
import { useRef } from "react";
import { experience, type Role } from "../data";

const ease = [0.22, 1, 0.36, 1] as const;

function Entry({ role, index }: { role: Role; index: number }) {
  return (
    <motion.li
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-15%" }}
      transition={{ duration: 0.9, ease }}
      className="relative pb-20 pl-10 last:pb-0 md:pl-14"
    >
      {/* Node on the line; fills once it reaches the reading position */}
      <span aria-hidden="true" className="absolute left-[-6px] top-2 grid h-3 w-3 place-items-center rounded-full border-2 border-accent bg-paper">
        <motion.span
          className="h-1.5 w-1.5 rounded-full bg-accent"
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true, margin: "-45% 0px -45% 0px" }}
          transition={{ type: "spring", stiffness: 400, damping: 14 }}
        />
      </span>

      <p className="tabular text-sm text-ink-faint">
        {role.start} – {role.end}
        <span className="mx-2 text-ink/20">/</span>
        {role.where}
      </p>
      <h3 className="mt-3 font-display text-[clamp(1.7rem,3.4vw,2.6rem)] leading-tight">
        {role.title} <span className="italic text-accent">at {role.company}</span>
      </h3>
      {role.context && <p className="mt-1 text-ink-soft">{role.context}</p>}

      <ul className="mt-6 max-w-[64ch] space-y-3 text-[15.5px] leading-relaxed text-ink-soft">
        {role.points.map((p) => (
          <li key={p} className="relative pl-5 before:absolute before:left-0 before:top-[0.7em] before:h-px before:w-2.5 before:bg-ink/30">
            {p}
          </li>
        ))}
      </ul>

      <ul className="mt-6 flex flex-wrap gap-2" aria-label={`Stack at ${role.company}`}>
        {role.stack.map((s) => (
          <li key={s} className="rounded-full bg-ink/[0.06] px-3 py-1 text-xs font-medium text-ink-soft">
            {s}
          </li>
        ))}
      </ul>
      <span className="sr-only">Role {index + 1} of {experience.length}</span>
    </motion.li>
  );
}

export function Experience() {
  const listRef = useRef<HTMLOListElement>(null);
  const { scrollYProgress } = useScroll({ target: listRef, offset: ["start 0.6", "end 0.6"] });
  const scaleY = useSpring(scrollYProgress, { stiffness: 120, damping: 30 });

  return (
    <section id="experience" className="relative py-24 md:py-32">
      <div className="mx-auto grid max-w-6xl gap-14 px-4 sm:px-6 lg:grid-cols-[0.8fr_2fr]">
        <div className="lg:sticky lg:top-32 lg:self-start">
          <h2 className="font-display text-[clamp(2.4rem,5vw,4rem)] leading-[1] tracking-[-0.02em]">
            Where I've built
          </h2>
          <p className="mt-6 max-w-[30ch] text-ink-soft">
            Four years across fintech infrastructure, Web3 tokenization and healthtech, owning each product end to end.
          </p>
        </div>

        <ol ref={listRef} className="relative">
          <span aria-hidden="true" className="absolute bottom-0 left-0 top-2 w-px bg-rule" />
          <motion.span
            aria-hidden="true"
            style={{ scaleY }}
            className="absolute bottom-0 left-0 top-2 w-px origin-top bg-accent"
          />
          {experience.map((r, i) => (
            <Entry key={r.company} role={r} index={i} />
          ))}
        </ol>
      </div>
    </section>
  );
}
