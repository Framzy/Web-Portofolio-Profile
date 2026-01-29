import ProjectGrid from "./ProjectGrid";
import ProjectsSwiper from "./ProjectSwiper";

type ProjectLayoutProps = {
  view: "grid" | "swiper";
};

export default function ProjectLayoyut({ view }: ProjectLayoutProps) {
  if (view === "grid") {
    return <ProjectGrid />;
  }

  return <ProjectsSwiper />;
}
