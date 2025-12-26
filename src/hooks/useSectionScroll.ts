import { useRef, useCallback } from "react";
import type { Section } from "../types/sections";

export function useSectionScroll() {
  const aboutRef = useRef<HTMLDivElement | null>(null);
  const skillRef = useRef<HTMLDivElement | null>(null);
  const projectRef = useRef<HTMLDivElement | null>(null);

  const scrollTo = useCallback((section: Section) => {
    const map = {
      about: aboutRef,
      skill: skillRef,
      project: projectRef,
    } as const;

    const target = map[section].current;
    if (!target) return;

    target.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }, []);

  return {
    aboutRef,
    skillRef,
    projectRef,
    scrollTo,
  };
}
