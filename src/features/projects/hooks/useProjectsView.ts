import { useState } from "react";

export type ProjectsView = "grid" | "swiper";

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
