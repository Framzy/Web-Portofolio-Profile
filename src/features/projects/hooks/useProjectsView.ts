import { useState } from "react";
import type { ProjectsView } from "../types";

export function useProjectsView() {
  const [view, setView] = useState<ProjectsView>("swiper");
  const toggleView = () => {
    setView((prev) => (prev === "grid" ? "swiper" : "grid"));
  };
  return {
    view,
    isGrid: view === "grid",
    isSwiper: view === "swiper",
    toggleView,
  };
}
