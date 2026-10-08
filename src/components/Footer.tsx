import { useLenis } from "lenis/react";
import { profile } from "../data";

export function Footer() {
  const lenis = useLenis();
  const toTop = () => (lenis ? lenis.scrollTo(0, { duration: 1.6 }) : window.scrollTo({ top: 0, behavior: "smooth" }));

  return (
    <footer className="border-t border-rule">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 px-4 py-8 text-sm text-ink-faint sm:px-6">
        <p>
          © {new Date().getFullYear()} {profile.name}, {profile.location}
        </p>
        <button type="button" onClick={toTop} className="transition-colors hover:text-ink">
          Back to top
        </button>
      </div>
    </footer>
  );
}
