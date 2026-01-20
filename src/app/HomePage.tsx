import { FaArrowUp } from "react-icons/fa";
import About from "../features/about/AboutSection";
import Skills from "../features/skills/SkillsSection";
import Projects from "../features/projects/ProjectsSection";
import { useSectionScroll } from "../hooks/useSectionScroll";
import { useScrollHint } from "../hooks/useScrollHint";
import Navbar from "../components/layout/Navbar";

export default function HomePage() {
  const { aboutRef, skillRef, projectRef, scrollTo } = useSectionScroll();

  const { showScrollHint, showScrollTop } = useScrollHint({
    hintTreshold: 100,
    topTreshold: 400,
  });
  return (
    <>
      <Navbar onNavigate={scrollTo} />

      <About ref={aboutRef} onNavigate={scrollTo} />

      {showScrollHint && (
        <button
          type="button"
          aria-label="Scroll down"
          onClick={() => scrollTo("skill")}
          className="fixed bottom-6 left-1/2 -translate-x-1/2 z-40 flex flex-col items-center gap-1 text-[#39EEFA] hover:text-white hover:cursor-pointer transition"
        >
          <span className="text-xs tracking-wide font-manrope">SCROLL</span>
          <span className="animate-bounce">↓</span>
        </button>
      )}

      <Skills ref={skillRef} />
      <Projects ref={projectRef} />

      {showScrollTop && (
        <button
          type="button"
          aria-label="Scroll to top"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="fixed bottom-10 right-10 h-10 w-10 rounded-full bg-[#39EEFA] flex items-center justify-center z-50 hover:cursor-pointer"
        >
          <FaArrowUp size={16} />
        </button>
      )}
    </>
  );
}
