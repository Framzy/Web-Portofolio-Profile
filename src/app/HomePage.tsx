import { FaArrowUp } from "react-icons/fa";
import { useSectionScroll } from "../hooks/useSectionScroll";
import { useScrollHint } from "../hooks/useScrollHint";
import About from "../features/about/AboutSection";
import Skills from "../features/skills/SkillsSection";
import Projects from "../features/projects/ProjectsSection";
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

      <div
        className={`fixed inset-x-0 bottom-0 h-40 z-30 transition-all duration-200 delay-75 ease-in-out
                    ${
                      showScrollHint
                        ? "animate-fade-in-up opacity-100 pointer-events-auto"
                        : "opacity-0 animate-fade-out-down pointer-events-none"
                    }
                  `}
      >
        <div className="absolute inset-0 bg-linear-to-t from-[#000000db] to-transparent">
          <button
            type="button"
            aria-label="Scroll down"
            onClick={() => scrollTo("skill")}
            className={`absolute bottom-6 left-1/2 -translate-x-1/2 z-40 flex flex-col items-center gap-1 text-[#39EEFA]
                        transition-all duration-400 
                      hover:text-white hover:cursor-pointer `}
          >
            <span className="text-xs tracking-wide font-manrope">SCROLL</span>
            <span className="animate-bounce">↓</span>
          </button>
        </div>
      </div>

      <Skills ref={skillRef} />
      <Projects ref={projectRef} />

      <button
        type="button"
        aria-label="Scroll to top"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className={`fixed bottom-10 right-10 h-10 w-10 rounded-full bg-[#39EEFA] flex items-center justify-center z-30 
                    transition-all duration-300 delay-75 ease-in-out hover:cursor-pointer
                    ${showScrollTop ? "opacity-100 scale-100" : "opacity-0 scale-90 pointer-events-none"}
                    `}
      >
        <FaArrowUp size={16} />
      </button>
    </>
  );
}
