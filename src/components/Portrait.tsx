import { motion, useMotionValue, useReducedMotion, useSpring, useTransform } from "framer-motion";
import { useEffect, useId, useRef, useState } from "react";

type Props = {
  /** Smile wider, e.g. while the note is hovered. */
  happy?: boolean;
  /** Optional photo; rendered with an engraved line-screen look. */
  src?: string | null;
  className?: string;
};

/**
 * Engraved banknote-style portrait. The illustrated version tracks the
 * pointer with its eyes, blinks now and then and smiles when `happy`.
 */
export function Portrait({ happy = false, src, className }: Props) {
  const id = useId().replace(/:/g, "");
  const ref = useRef<SVGSVGElement>(null);
  const reduce = useReducedMotion();
  const [blink, setBlink] = useState(false);

  const lookX = useMotionValue(0);
  const lookY = useMotionValue(0);
  const eyeX = useSpring(lookX, { stiffness: 220, damping: 20 });
  const eyeY = useSpring(lookY, { stiffness: 220, damping: 20 });
  // The head turns a touch with the gaze.
  const headX = useTransform(eyeX, (v) => v * 0.9);
  const headY = useTransform(eyeY, (v) => v * 0.6);
  const browY = useTransform(eyeY, (v) => Math.min(0, v) * 0.6);

  useEffect(() => {
    if (reduce || src) return;
    const onMove = (e: PointerEvent) => {
      const el = ref.current;
      if (!el) return;
      const b = el.getBoundingClientRect();
      const dx = e.clientX - (b.left + b.width / 2);
      const dy = e.clientY - (b.top + b.height * 0.45);
      const dist = Math.hypot(dx, dy) || 1;
      const reach = Math.min(1, dist / 380);
      lookX.set((dx / dist) * 2.8 * reach);
      lookY.set((dy / dist) * 2.2 * reach);
    };
    window.addEventListener("pointermove", onMove, { passive: true });
    return () => window.removeEventListener("pointermove", onMove);
  }, [reduce, src, lookX, lookY]);

  useEffect(() => {
    if (reduce || src) return;
    let t: number;
    const schedule = () => {
      t = window.setTimeout(() => {
        setBlink(true);
        window.setTimeout(() => setBlink(false), 140);
        schedule();
      }, 2200 + Math.random() * 3800);
    };
    schedule();
    return () => window.clearTimeout(t);
  }, [reduce, src]);

  if (src) {
    return (
      <div className={`relative overflow-hidden ${className ?? ""}`}>
        <img
          src={src}
          alt="Portrait of Rishabh Verma"
          className="h-full w-full object-cover grayscale contrast-125"
          style={{ mixBlendMode: "multiply" }}
        />
        {/* Line screen that turns the photo into an engraving. */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 opacity-50 mix-blend-screen"
          style={{
            backgroundImage:
              "repeating-linear-gradient(115deg, rgb(var(--paper)) 0 0.6px, transparent 0.6px 2.4px)",
          }}
        />
      </div>
    );
  }

  const mouth = happy ? "M84 147 Q100 164 116 147" : "M87 149 Q100 157 113 149";

  return (
    <svg
      ref={ref}
      viewBox="0 0 200 230"
      className={className}
      role="img"
      aria-label="Illustrated portrait of Rishabh Verma"
    >
      <defs>
        <pattern id={`hatch-${id}`} width="3" height="3" patternUnits="userSpaceOnUse" patternTransform="rotate(28)">
          <line x1="0" y1="0" x2="0" y2="3" stroke="currentColor" strokeWidth="0.55" opacity="0.32" />
        </pattern>
        <pattern id={`hatch-dense-${id}`} width="2" height="2" patternUnits="userSpaceOnUse" patternTransform="rotate(-35)">
          <line x1="0" y1="0" x2="0" y2="2" stroke="currentColor" strokeWidth="0.8" />
        </pattern>
        <pattern id={`cross-${id}`} width="3.2" height="3.2" patternUnits="userSpaceOnUse" patternTransform="rotate(60)">
          <line x1="0" y1="0" x2="0" y2="3.2" stroke="currentColor" strokeWidth="0.5" opacity="0.55" />
        </pattern>
        <radialGradient id={`light-${id}`} cx="0.38" cy="0.35" r="0.75">
          <stop offset="0.35" stopColor="black" stopOpacity="1" />
          <stop offset="1" stopColor="black" stopOpacity="0" />
        </radialGradient>
        <mask id={`shade-${id}`}>
          <rect width="200" height="230" fill="white" />
          <ellipse cx="88" cy="100" rx="46" ry="58" fill={`url(#light-${id})`} />
        </mask>
        <clipPath id={`face-${id}`}>
          <path d="M100 52 C134 52 147 80 145 112 C143 148 123 174 100 174 C77 174 57 148 55 112 C53 80 66 52 100 52 Z" />
        </clipPath>
      </defs>

      {/* Shoulders and collar */}
      <path d="M22 230 C30 200 62 190 84 186 L116 186 C138 190 170 200 178 230 Z" fill={`url(#cross-${id})`} stroke="currentColor" strokeWidth="1.1" />
      <path d="M84 186 L100 210 L116 186" fill="none" stroke="currentColor" strokeWidth="1.1" />
      <path d="M86 156 L86 190 Q100 200 114 190 L114 156" fill={`url(#hatch-${id})`} stroke="currentColor" strokeWidth="1.1" />

      <motion.g style={{ x: headX, y: headY }}>
        {/* Ears */}
        <ellipse cx="55" cy="116" rx="6.5" ry="12" fill={`url(#hatch-${id})`} stroke="currentColor" strokeWidth="1.1" />
        <ellipse cx="145" cy="116" rx="6.5" ry="12" fill={`url(#hatch-${id})`} stroke="currentColor" strokeWidth="1.1" />

        {/* Face with engraved shading on the shadow side */}
        <path
          d="M100 52 C134 52 147 80 145 112 C143 148 123 174 100 174 C77 174 57 148 55 112 C53 80 66 52 100 52 Z"
          fill="rgb(var(--surface))"
          stroke="currentColor"
          strokeWidth="1.2"
        />
        <g clipPath={`url(#face-${id})`}>
          <rect width="200" height="230" fill={`url(#hatch-${id})`} mask={`url(#shade-${id})`} />
          {/* Light stubble along the jaw */}
          <path d="M62 128 C70 166 88 176 100 176 C112 176 130 166 138 128 C130 150 116 160 100 160 C84 160 70 150 62 128 Z" fill={`url(#cross-${id})`} opacity="0.7" />
        </g>

        {/* Hair */}
        <path
          d="M52 110 C44 66 70 34 104 36 C138 38 158 64 148 110 C146 92 140 80 128 72 C116 80 92 80 74 70 C64 80 56 92 52 110 Z"
          fill={`url(#hatch-dense-${id})`}
          stroke="currentColor"
          strokeWidth="1.2"
          strokeLinejoin="round"
        />
        <path d="M74 70 C92 58 118 56 136 66" fill="none" stroke="rgb(var(--surface))" strokeWidth="1.4" opacity="0.7" />

        {/* Brows */}
        <motion.g style={{ y: browY }} stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" fill="none">
          <path d="M71 96 Q81 90 92 94" />
          <path d="M108 94 Q119 90 129 96" />
        </motion.g>

        {/* Eyes */}
        {[82, 118].map((cx) => (
          <g key={cx}>
            <motion.g
              animate={{ scaleY: blink ? 0.08 : 1 }}
              transition={{ duration: 0.07 }}
              style={{ originX: `${cx}px`, originY: "108px" }}
            >
              <ellipse cx={cx} cy="108" rx="8" ry="5.4" fill="rgb(var(--paper))" stroke="currentColor" strokeWidth="1.1" />
              <motion.circle cx={cx} cy="108" r="3.3" fill="currentColor" style={{ x: eyeX, y: eyeY }} />
              <motion.circle cx={cx + 1.2} cy="106.8" r="0.9" fill="rgb(var(--paper))" style={{ x: eyeX, y: eyeY }} />
            </motion.g>
            <path d={`M${cx - 8} 104.5 Q${cx} 100 ${cx + 8} 104.5`} fill="none" stroke="currentColor" strokeWidth="1.4" />
          </g>
        ))}

        {/* Nose */}
        <path d="M101 110 Q96 127 99 133 Q103 135 108 131" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />

        {/* Mouth */}
        <motion.path
          initial={false}
          animate={{ d: mouth }}
          transition={{ type: "spring", stiffness: 300, damping: 18 }}
          fill="none"
          stroke="currentColor"
          strokeWidth="1.9"
          strokeLinecap="round"
        />
      </motion.g>
    </svg>
  );
}
