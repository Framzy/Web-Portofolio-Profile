import { useEffect, useRef, useState } from "react";
import About from ".././features/about/AboutSection";
import Skills from ".././features/skills/SkillsSection";
import Projects from ".././features/projects/ProjectsSection";
import { FaArrowUp } from "react-icons/fa";
import type { Section } from "../types/sections";

export default function HomePage() {
  const aboutRef = useRef<HTMLDivElement | null>(null);
  const skillRef = useRef<HTMLDivElement | null>(null);
  const projectRef = useRef<HTMLDivElement | null>(null);

  const goTo = (section: Section) => {
    refs[section].current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  const [showScrollTop, setShowScrollTop] = useState(false);
  const SCROLL_THRESHOLD = 400;

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          setShowScrollTop(window.scrollY > SCROLL_THRESHOLD);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <About ref={aboutRef} />
      <Skills ref={skillRef} />
      <Projects ref={projectRef} />
      {showScrollTop && (
        <button
          type="button"
          title="Scroll to top"
          className="fixed bottom-10 right-10 h-10 w-10 rounded-full bg-[#39EEFA] flex items-center justify-center z-50"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          <FaArrowUp size={16} />
        </button>
      )}
    </>
  );
}
