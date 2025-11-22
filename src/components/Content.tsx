// src/components/Content.tsx
import About from "./content/About";
import Skills from "./content/Skills";
import Projects from "./content/Projects";
import { useOutletContext } from "react-router-dom";
import type { OutletContextValue } from "../types/sections";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";

export default function Content() {
  const { refs } = useOutletContext<OutletContextValue>();

  const [showScrollTop, setShowScrollTop] = useState(false);

  const SCROLL_THRESHOLD = 400; // px

  useEffect(() => {
    if (typeof window === "undefined") return; // SSR

    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setShowScrollTop(window.scrollY > SCROLL_THRESHOLD);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className=" h-screen">
      <About sectionRef={refs.about} />
      <Skills sectionRef={refs.skill} />
      <Projects sectionRef={refs.project} />

      {showScrollTop && (
        <div className="scroll-top bg-[#39EEFA] h-10 w-10 rounded-full fixed bottom-10 right-10 transition-all duration-300 ease-in-out hover:bg-white">
          <button
            title="scroll-top-button"
            type="button"
            className="flex justify-center items-center h-full w-full text-xl cursor-pointer"
            onClick={() => {
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
          >
            <FontAwesomeIcon icon={["fas", "arrow-up"]} />
          </button>
        </div>
      )}
    </div>
  );
}
