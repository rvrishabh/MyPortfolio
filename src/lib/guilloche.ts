// Path generators for banknote-style guilloche patterns.

const gcd = (a: number, b: number): number => (b === 0 ? a : gcd(b, a % b));

/** Hypotrochoid rosette centred on (cx, cy). R and r should be integers. */
export function rosette(R: number, r: number, d: number, cx = 0, cy = 0, scale = 1, res = 160) {
  const turns = r / gcd(R, r);
  const steps = Math.ceil(turns * res);
  const k = (R - r) / r;
  let p = "";
  for (let i = 0; i <= steps; i++) {
    const t = (i / steps) * Math.PI * 2 * turns;
    const x = cx + scale * ((R - r) * Math.cos(t) + d * Math.cos(k * t));
    const y = cy + scale * ((R - r) * Math.sin(t) - d * Math.sin(k * t));
    p += `${i ? "L" : "M"}${x.toFixed(2)} ${y.toFixed(2)}`;
  }
  return p + "Z";
}

/** A horizontal band of interlaced sine waves, like a note's border. */
export function waveBand(width: number, y: number, amp: number, period: number, phase: number) {
  let p = "";
  const steps = Math.ceil(width / 3);
  for (let i = 0; i <= steps; i++) {
    const x = (i / steps) * width;
    const yy = y + amp * Math.sin((x / period) * Math.PI * 2 + phase) * Math.cos((x / (period * 7.3)) * Math.PI * 2);
    p += `${i ? "L" : "M"}${x.toFixed(1)} ${yy.toFixed(2)}`;
  }
  return p;
}
