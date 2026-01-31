import type { Project } from "../types";
import ProjectGrid from "./ProjectGrid";
import ProjectsSwiper from "./ProjectSwiper";

type ProjectsLayoutProps = {
  view: "grid" | "swiper";
  projects: Project[];
};

export default function ProjectsLayoyut({
  view,
  projects,
}: ProjectsLayoutProps) {
  if (view === "grid") {
    return <ProjectGrid projects={projects} />;
  }

  return <ProjectsSwiper projects={projects} />;
}
