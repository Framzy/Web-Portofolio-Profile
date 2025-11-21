// src/components/Content.tsx
import About from "./content/About";
import Skills from "./content/Skills";
import Projects from "./content/Projects";
import { useOutletContext } from "react-router-dom";
import type { OutletContextValue } from "../types/sections";

export default function Content() {
  const { refs } = useOutletContext<OutletContextValue>();

  return (
    <div className=" h-screen">
      <About sectionRef={refs.about} />
      <Skills sectionRef={refs.skill} />
      <Projects sectionRef={refs.project} />
    </div>
  );
}
