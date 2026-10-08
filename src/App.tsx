import { MotionConfig } from "framer-motion";
import { About } from "./components/About";
import { Contact } from "./components/Contact";
import { Experience } from "./components/Experience";
import { Footer } from "./components/Footer";
import { Hero } from "./components/Hero";
import { Nav } from "./components/Nav";
import { ScrollProgress } from "./components/ScrollProgress";
import { SmoothScroll } from "./components/SmoothScroll";
import { Stack } from "./components/Stack";
import { Work } from "./components/Work";

export default function App() {
  return (
    <MotionConfig reducedMotion="user">
      <SmoothScroll>
        <div className="grain">
          <a
            href="#about"
            className="sr-only z-[80] rounded-full bg-ink px-4 py-2 text-paper focus:not-sr-only focus:fixed focus:left-4 focus:top-4"
          >
            Skip to content
          </a>
          <ScrollProgress />
          <Nav />
          <main>
            <Hero />
            <About />
            <Stack />
            <Experience />
            <Work />
            <Contact />
          </main>
          <Footer />
        </div>
      </SmoothScroll>
    </MotionConfig>
  );
}
