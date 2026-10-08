import {
  motion,
  useAnimationFrame,
  useMotionValue,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
  useVelocity,
} from "framer-motion";
import { useRef } from "react";
import { stack } from "../data";

const wrap = (min: number, max: number, v: number) => {
  const r = max - min;
  return ((((v - min) % r) + r) % r) + min;
};

/** An endless row whose speed and direction follow the scroll velocity. */
function Row({ items, baseVelocity }: { items: string[]; baseVelocity: number }) {
  const reduce = useReducedMotion();
  const base = useMotionValue(0);
  const { scrollY } = useScroll();
  const velocity = useSpring(useVelocity(scrollY), { damping: 50, stiffness: 400 });
  const factor = useTransform(velocity, [-1000, 0, 1000], [-4, 0, 4], { clamp: false });
  const x = useTransform(base, (v) => `${wrap(-50, 0, v)}%`);
  const dir = useRef(1);

  useAnimationFrame((_, delta) => {
    if (reduce) return;
    let move = dir.current * baseVelocity * (delta / 1000);
    const f = factor.get();
    if (f < 0) dir.current = -1;
    else if (f > 0) dir.current = 1;
    move += dir.current * move * Math.abs(f);
    base.set(base.get() + move);
  });

  const content = [...items, ...items];
  return (
    <div className="flex overflow-hidden whitespace-nowrap">
      <motion.div style={{ x }} className="flex shrink-0 items-center">
        {content.map((s, i) => (
          <span key={i} className="flex items-center">
            <span className="px-6 font-display text-[clamp(2.5rem,7vw,6rem)] italic leading-none tracking-tight transition-colors hover:text-accent">
              {s}
            </span>
            <svg viewBox="0 0 20 20" className="h-5 w-5 text-accent" aria-hidden="true">
              <path d="M10 0 L12 8 L20 10 L12 12 L10 20 L8 12 L0 10 L8 8 Z" fill="currentColor" />
            </svg>
          </span>
        ))}
      </motion.div>
    </div>
  );
}

export function Stack() {
  const all = stack.flatMap((g) => g.items);
  const half = Math.ceil(all.length / 2);
  return (
    <section aria-labelledby="stack-title" className="relative overflow-hidden border-y border-rule bg-surface/50 py-20 md:py-28">
      <div className="mx-auto mb-14 max-w-6xl px-4 sm:px-6">
        <h2 id="stack-title" className="text-sm text-ink-soft">
          What I work with
        </h2>
      </div>

      <div aria-hidden="true" className="space-y-2 [mask-image:linear-gradient(90deg,transparent,black_12%,black_88%,transparent)]">
        <Row items={all.slice(0, half)} baseVelocity={-2.2} />
        <Row items={all.slice(half)} baseVelocity={2.2} />
      </div>

      <div className="mx-auto mt-16 grid max-w-6xl gap-10 px-4 sm:px-6 md:grid-cols-3">
        {stack.map((g) => (
          <div key={g.group}>
            <h3 className="mb-4 text-lg font-semibold tracking-[-0.01em]">{g.group}</h3>
            <ul className="flex flex-wrap gap-2">
              {g.items.map((it) => (
                <li key={it} className="rounded-full border border-rule px-3 py-1.5 text-sm text-ink-soft">
                  {it}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
