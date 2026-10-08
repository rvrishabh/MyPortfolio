import { AnimatePresence, motion, useMotionValueEvent, useScroll } from "framer-motion";
import { useEffect, useState } from "react";
import { useTheme } from "../lib/theme";

const links = [
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "work", label: "Work" },
  { id: "contact", label: "Contact" },
];

function ThemeToggle() {
  const { theme, toggle } = useTheme();
  const dark = theme === "dark";
  return (
    <button
      type="button"
      onClick={(e) => toggle({ x: e.clientX, y: e.clientY })}
      aria-label={dark ? "Switch to light theme" : "Switch to dark theme"}
      className="grid h-10 w-10 place-items-center rounded-full text-ink transition-colors hover:bg-ink/[0.06]"
    >
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.6">
        <mask id="moon-mask">
          <rect width="24" height="24" fill="white" />
          <motion.circle
            r="7"
            fill="black"
            initial={false}
            animate={{ cx: dark ? 17 : 30, cy: dark ? 7 : -6 }}
            transition={{ type: "spring", stiffness: 260, damping: 24 }}
          />
        </mask>
        <motion.circle
          cx="12"
          cy="12"
          fill="currentColor"
          stroke="none"
          mask="url(#moon-mask)"
          initial={false}
          animate={{ r: dark ? 8 : 4.5 }}
          transition={{ type: "spring", stiffness: 260, damping: 22 }}
        />
        <motion.g
          initial={false}
          animate={{ scale: dark ? 0 : 1, rotate: dark ? -45 : 0, opacity: dark ? 0 : 1 }}
          style={{ originX: "12px", originY: "12px" }}
          transition={{ duration: 0.35 }}
          strokeLinecap="round"
        >
          {Array.from({ length: 8 }, (_, i) => {
            const a = (i * Math.PI) / 4;
            return (
              <line
                key={i}
                x1={12 + Math.cos(a) * 7.5}
                y1={12 + Math.sin(a) * 7.5}
                x2={12 + Math.cos(a) * 9.5}
                y2={12 + Math.sin(a) * 9.5}
              />
            );
          })}
        </motion.g>
      </svg>
    </button>
  );
}

export function Nav() {
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState<string | null>(null);

  // Tuck the bar away while reading downward; bring it back on any upward scroll.
  useMotionValueEvent(scrollY, "change", (y) => {
    const prev = scrollY.getPrevious() ?? 0;
    setHidden(y > prev && y > 400);
    setScrolled(y > 24);
  });

  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => e.isIntersecting && setActive(e.target.id));
      },
      { rootMargin: "-45% 0px -50% 0px" },
    );
    links.forEach((l) => {
      const el = document.getElementById(l.id);
      if (el) io.observe(el);
    });
    return () => io.disconnect();
  }, []);

  return (
    <motion.header
      initial={{ y: -90 }}
      animate={{ y: hidden ? -90 : 0 }}
      transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
      className="fixed inset-x-0 top-0 z-50 px-4 pt-4"
    >
      <nav
        aria-label="Primary"
        className={`mx-auto flex max-w-6xl items-center justify-between rounded-full border py-1.5 pl-5 pr-1.5 transition-[background-color,border-color,box-shadow] duration-500 ${
          scrolled
            ? "border-rule bg-paper/75 shadow-[0_12px_40px_-20px_rgb(var(--ink)/0.35)] backdrop-blur-xl"
            : "border-transparent bg-transparent"
        }`}
      >
        <a href="#top" className="font-display text-xl italic tracking-tight" aria-label="Rishabh Verma, back to top">
          Rishabh<span className="text-accent">.</span>
        </a>

        <ul className="hidden items-center gap-1 md:flex">
          {links.map((l) => (
            <li key={l.id} className="relative">
              <a
                href={`#${l.id}`}
                className={`relative z-10 block rounded-full px-4 py-2 text-sm transition-colors ${
                  active === l.id ? "text-ink" : "text-ink-soft hover:text-ink"
                }`}
              >
                {l.label}
              </a>
              <AnimatePresence>
                {active === l.id && (
                  <motion.span
                    layoutId="nav-pill"
                    className="absolute inset-0 rounded-full bg-ink/[0.07]"
                    transition={{ type: "spring", stiffness: 380, damping: 32 }}
                  />
                )}
              </AnimatePresence>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-1">
          <ThemeToggle />
          <a
            href="#contact"
            className="rounded-full bg-ink px-5 py-2.5 text-sm font-medium text-paper transition-transform hover:scale-[1.03] active:scale-[0.98]"
          >
            Hire me
          </a>
        </div>
      </nav>
    </motion.header>
  );
}
