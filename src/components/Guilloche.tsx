import { motion } from "framer-motion";
import { useMemo } from "react";
import { rosette } from "../lib/guilloche";

type Props = {
  className?: string;
  /** Number of concentric layers. */
  layers?: number;
  R?: number;
  r?: number;
  strokeWidth?: number;
  /** Draw the lines in when they enter the viewport instead of on mount. */
  drawOnView?: boolean;
  delay?: number;
};

/** A banknote rosette: several hypotrochoids with stepped pen offsets. */
export function Guilloche({
  className,
  layers = 5,
  R = 120,
  r = 42,
  strokeWidth = 0.6,
  drawOnView = false,
  delay = 0,
}: Props) {
  const paths = useMemo(
    () => Array.from({ length: layers }, (_, i) => rosette(R, r, 18 + i * 9, 0, 0, 1 - i * 0.07)),
    [layers, R, r],
  );
  const extent = R + 18 + layers * 9;

  const trigger = drawOnView
    ? { whileInView: { pathLength: 1, opacity: 1 }, viewport: { once: true, margin: "-10%" } }
    : { animate: { pathLength: 1, opacity: 1 } };

  return (
    <svg
      viewBox={`${-extent} ${-extent} ${extent * 2} ${extent * 2}`}
      className={className}
      aria-hidden="true"
      fill="none"
    >
      {paths.map((d, i) => (
        <motion.path
          key={i}
          d={d}
          stroke="currentColor"
          strokeWidth={strokeWidth}
          vectorEffect="non-scaling-stroke"
          initial={{ pathLength: 0, opacity: 0 }}
          {...trigger}
          transition={{ duration: 2.4, delay: delay + i * 0.12, ease: [0.65, 0, 0.35, 1] }}
        />
      ))}
    </svg>
  );
}
