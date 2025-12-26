import { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";
import About from "../features/about/AboutSection";
import Skills from "../features/skills/SkillsSection";
import Projects from "../features/projects/ProjectsSection";
import { useSectionScroll } from "../hooks/useSectionScroll";
import Navbar from "../components/layout/Navbar";

export default function HomePage() {
  const { aboutRef, skillRef, projectRef, scrollTo } = useSectionScroll();
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const SCROLL_THRESHOLD = 400;

    let ticking = false;
    const onScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          setShowScrollTop(window.scrollY > SCROLL_THRESHOLD);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <Navbar onNavigate={scrollTo} />

      <About ref={aboutRef} />
      <Skills ref={skillRef} />
      <Projects ref={projectRef} />

      {showScrollTop && (
        <button
          type="button"
          aria-label="Scroll to top"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="fixed bottom-10 right-10 h-10 w-10 rounded-full bg-[#39EEFA] flex items-center justify-center z-50"
        >
          <FaArrowUp size={16} />
        </button>
      )}
    </>
  );
}
