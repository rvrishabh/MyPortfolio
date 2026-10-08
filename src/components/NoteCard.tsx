import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useReducedMotion,
  useSpring,
  useTransform,
} from "framer-motion";
import { useMemo, useState } from "react";
import { profile } from "../data";
import { rosette, waveBand } from "../lib/guilloche";
import { Portrait } from "./Portrait";

const microprint = "FULL-STACK ENGINEERING · WEB · MOBILE · REACT · NEXT.JS · NESTJS · POSTGRESQL · ";

/**
 * The hero object: a holographic banknote carrying Rishabh's portrait.
 * Tilts toward the pointer, with a foil sheen that follows it.
 */
export function NoteCard() {
  const reduce = useReducedMotion();
  const [hover, setHover] = useState(false);

  const px = useMotionValue(0.5);
  const py = useMotionValue(0.5);
  const sx = useSpring(px, { stiffness: 140, damping: 18 });
  const sy = useSpring(py, { stiffness: 140, damping: 18 });

  const rotateY = useTransform(sx, [0, 1], [-14, 14]);
  const rotateX = useTransform(sy, [0, 1], [10, -10]);
  const glareX = useTransform(sx, (v) => `${v * 100}%`);
  const glareY = useTransform(sy, (v) => `${v * 100}%`);
  const foilPos = useTransform(sx, (v) => `${v * 200}% 50%`);
  const glare = useMotionTemplate`radial-gradient(420px circle at ${glareX} ${glareY}, rgb(255 255 255 / 0.32), transparent 55%)`;

  const art = useMemo(
    () => ({
      big: [0, 1, 2, 3].map((i) => rosette(96, 28, 30 + i * 11, 0, 0, 1 - i * 0.05)),
      small: [0, 1, 2].map((i) => rosette(60, 22, 12 + i * 6, 0, 0, 1)),
      waves: Array.from({ length: 9 }, (_, i) => waveBand(620, 8 + i * 1.6, 6, 26, i * 0.55)),
    }),
    [],
  );

  const onMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (reduce || e.pointerType === "touch") return;
    const b = e.currentTarget.getBoundingClientRect();
    px.set((e.clientX - b.left) / b.width);
    py.set((e.clientY - b.top) / b.height);
  };
  const onLeave = () => {
    px.set(0.5);
    py.set(0.5);
    setHover(false);
  };

  return (
    <div className="[container-type:inline-size] [perspective:1400px]">
      <motion.div
        onPointerMove={onMove}
        onPointerEnter={() => setHover(true)}
        onPointerLeave={onLeave}
        style={reduce ? undefined : { rotateX, rotateY, transformStyle: "preserve-3d" }}
        className="relative aspect-[1.58/1] w-full select-none overflow-hidden rounded-[22px] border border-ink/15 bg-surface text-ink shadow-[0_40px_80px_-30px_rgb(var(--ink)/0.45),0_2px_0_0_rgb(255_255_255/0.4)_inset] dark:shadow-[0_40px_90px_-30px_rgb(0_0_0/0.8),0_0_0_1px_rgb(var(--accent)/0.12)]"
      >
        {/* Background guilloche */}
        <svg viewBox="0 0 620 392" className="absolute inset-0 h-full w-full text-ink" preserveAspectRatio="xMidYMid slice" aria-hidden="true" fill="none">
          <g transform="translate(440 190)" className="text-accent" stroke="currentColor" strokeWidth="0.5" opacity="0.55">
            {art.big.map((d, i) => (
              <motion.path
                key={i}
                d={d}
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 2.8, delay: 0.5 + i * 0.15, ease: [0.65, 0, 0.35, 1] }}
              />
            ))}
          </g>
          <g transform="translate(92 120)" stroke="currentColor" strokeWidth="0.45" opacity="0.28">
            {art.small.map((d, i) => (
              <path key={i} d={d} />
            ))}
          </g>
          <g transform="translate(0 344)" stroke="currentColor" strokeWidth="0.4" opacity="0.35">
            {art.waves.map((d, i) => (
              <path key={i} d={d} />
            ))}
          </g>
        </svg>

        {/* Inner frame and microprint */}
        <div className="pointer-events-none absolute inset-[10px] rounded-[14px] border border-ink/20" />
        <div className="pointer-events-none absolute inset-x-[22px] top-[14px] overflow-hidden whitespace-nowrap text-[1cqw] font-semibold tracking-[0.18em] text-ink/45" aria-hidden="true">
          {microprint.repeat(4)}
        </div>

        {/* Portrait oval */}
        <div className="absolute right-[7%] top-1/2 aspect-[0.8] w-[36%] -translate-y-1/2">
          <div className="absolute -inset-[7%] rounded-[50%] border border-dashed border-ink/30" />
          <div className="absolute -inset-[3%] rounded-[50%] border-[1.5px] border-ink/60" />
          <div
            className="absolute inset-0 overflow-hidden rounded-[50%] bg-paper/70"
            style={{ backgroundImage: "repeating-linear-gradient(0deg, rgb(var(--ink) / 0.13) 0 0.6px, transparent 0.6px 3px)" }}
          >
            <Portrait happy={hover} src={profile.portrait} className="absolute inset-x-0 bottom-0 mx-auto h-[94%] w-full text-ink" />
          </div>
        </div>

        {/* Holographic foil strip */}
        <motion.div
          aria-hidden="true"
          className="absolute inset-y-0 left-[52%] w-[7%] opacity-80 mix-blend-multiply dark:opacity-70 dark:mix-blend-screen"
          style={{
            backgroundImage:
              "linear-gradient(115deg, var(--foil-a), var(--foil-b), var(--foil-c), var(--foil-d), var(--foil-a), var(--foil-b))",
            backgroundSize: "300% 100%",
            backgroundPosition: reduce ? "50% 50%" : foilPos,
          }}
        >
          <div className="absolute inset-0 bg-[repeating-linear-gradient(0deg,rgb(255_255_255/0.35)_0_1px,transparent_1px_4px)]" />
        </motion.div>

        {/* Copy, sized in container units so it scales with the note */}
        <div className="absolute left-[7%] top-[15%] max-w-[44%]">
          <p className="text-[2cqw] tracking-[0.08em] text-ink-soft">Legal tender for</p>
          <p className="whitespace-nowrap font-display text-[4.6cqw] italic leading-tight">Shipped products</p>
          <p className="mt-[3.5cqw] font-display text-[2.9cqw] italic leading-none">{profile.name}</p>
          <p className="mt-[0.6cqw] text-[1.6cqw] text-ink-soft">{profile.role}</p>
        </div>

        <div className="absolute bottom-[19%] left-[7%] flex items-end gap-[1.4cqw]">
          <span
            className="font-display text-[17cqw] font-bold leading-[0.8] tracking-tight"
            style={{ fontVariationSettings: '"opsz" 10' }}
          >
            {profile.yearsShipping}
          </span>
          <span className="mb-[0.6cqw] text-[2cqw] leading-tight text-ink-soft">
            years in
            <br />
            production
          </span>
        </div>

        <p className="tabular absolute right-[6%] top-[9%] text-[2cqw] font-semibold tracking-[0.2em] text-accent">
          RV 2022 0426
        </p>

        {/* Pointer glare */}
        {!reduce && (
          <motion.div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 mix-blend-soft-light transition-opacity duration-500"
            style={{ backgroundImage: glare, opacity: hover ? 1 : 0 }}
          />
        )}
      </motion.div>
    </div>
  );
}
