import { AnimatePresence, motion, useMotionValue, useReducedMotion, useSpring } from "framer-motion";
import { useRef, useState } from "react";
import { profile } from "../data";
import { Guilloche } from "./Guilloche";

/** A round call-to-action that leans toward the pointer. */
function MagneticButton() {
  const ref = useRef<HTMLAnchorElement>(null);
  const reduce = useReducedMotion();
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const x = useSpring(mx, { stiffness: 200, damping: 15, mass: 0.4 });
  const y = useSpring(my, { stiffness: 200, damping: 15, mass: 0.4 });

  const onMove = (e: React.PointerEvent) => {
    if (reduce || !ref.current) return;
    const b = ref.current.getBoundingClientRect();
    mx.set((e.clientX - (b.left + b.width / 2)) * 0.35);
    my.set((e.clientY - (b.top + b.height / 2)) * 0.35);
  };

  return (
    <motion.a
      ref={ref}
      href={`mailto:${profile.email}`}
      onPointerMove={onMove}
      onPointerLeave={() => {
        mx.set(0);
        my.set(0);
      }}
      style={{ x, y }}
      whileTap={{ scale: 0.95 }}
      className="group relative grid h-40 w-40 shrink-0 place-items-center overflow-hidden rounded-full bg-accent text-center text-lg font-medium text-paper sm:h-48 sm:w-48"
    >
      <span className="absolute inset-0 translate-y-full rounded-full bg-ink transition-transform duration-500 ease-[cubic-bezier(.22,1,.36,1)] group-hover:translate-y-0" />
      <span className="relative">
        Write to me
      </span>
    </motion.a>
  );
}

export function Contact() {
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1800);
    } catch {
      window.location.href = `mailto:${profile.email}`;
    }
  };

  return (
    <section id="contact" className="relative isolate overflow-hidden py-28 md:py-44">
      <div className="pointer-events-none absolute left-1/2 top-1/2 -z-10 w-[min(1100px,140vw)] -translate-x-1/2 -translate-y-1/2 text-accent/20">
        <Guilloche layers={6} drawOnView className="h-full w-full" />
      </div>

      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <h2 className="max-w-[14ch] font-display text-[clamp(2.8rem,8vw,7rem)] font-medium leading-[0.95] tracking-[-0.03em] text-balance">
          Have a product that has to be right?
        </h2>

        <div className="mt-14 flex flex-col gap-12 md:flex-row md:items-center md:justify-between">
          <div className="max-w-[44ch]">
            <p className="text-lg leading-relaxed text-ink-soft">
              I build web and mobile products of any kind: full-stack builds, frontend architecture and backend systems,
              with deep experience in fintech and Web3. My hours overlap well with Europe, the UK and the Middle East.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <button
                type="button"
                onClick={copy}
                className="group inline-flex items-center gap-3 rounded-full border border-ink/20 py-2.5 pl-5 pr-2.5 transition-colors hover:border-ink/50"
              >
                <span className="font-medium">{profile.email}</span>
                <span className="relative grid h-8 min-w-[4.5rem] place-items-center overflow-hidden rounded-full bg-ink/[0.07] px-3 text-xs font-medium">
                  <AnimatePresence mode="wait" initial={false}>
                    <motion.span
                      key={copied ? "done" : "copy"}
                      initial={{ y: 14, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      exit={{ y: -14, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                      className={copied ? "text-accent" : ""}
                    >
                      {copied ? "Copied" : "Copy"}
                    </motion.span>
                  </AnimatePresence>
                </span>
              </button>
              <a href={profile.phoneHref} className="rounded-full px-4 py-2.5 text-ink-soft transition-colors hover:text-ink">
                {profile.phone}
              </a>
            </div>

            <ul className="mt-8 flex gap-6">
              {profile.socials.map((s) => (
                <li key={s.label}>
                  <a
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative text-ink-soft transition-colors hover:text-ink"
                  >
                    {s.label}
                    <span className="absolute -bottom-0.5 left-0 h-px w-full origin-right scale-x-0 bg-current transition-transform duration-300 group-hover:origin-left group-hover:scale-x-100" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <MagneticButton />
        </div>
      </div>
    </section>
  );
}
