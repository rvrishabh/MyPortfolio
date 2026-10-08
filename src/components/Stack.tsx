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
            <span className="h-2 w-2 rounded-full bg-accent/70" aria-hidden="true" />
          </span>
        ))}
      </motion.div>
    </div>
  );
}

export function Stack() {
  const rowA = ["TypeScript", "React", "Next.js", "React Native", "TanStack", "Tailwind CSS", "Wagmi", "Viem", "XRPL"];
  const rowB = ["NestJS", "Node.js", "PostgreSQL", "Prisma", "Redis", "Supabase", "GPT-4o", "AWS", "Docker", "Turborepo"];
  return (
    <section aria-labelledby="stack-title" className="relative overflow-hidden border-y border-rule bg-surface/50 py-20 md:py-28">
      <div className="mx-auto mb-14 max-w-6xl px-4 sm:px-6">
        <h2 id="stack-title" className="text-sm text-ink-soft">
          What I work with
        </h2>
      </div>

      <div aria-hidden="true" className="space-y-2 [mask-image:linear-gradient(90deg,transparent,black_12%,black_88%,transparent)]">
        <Row items={rowA} baseVelocity={-2.2} />
        <Row items={rowB} baseVelocity={2.2} />
      </div>

      <div className="mx-auto mt-16 grid max-w-6xl gap-10 px-4 sm:px-6 md:grid-cols-2 lg:grid-cols-3">
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
