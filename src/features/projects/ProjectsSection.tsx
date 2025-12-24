import { forwardRef } from "react";
import ProjectsSwiper from "./ProjectSwiper";

const ProjectSection = forwardRef<HTMLDivElement>(function ProjectSection(
  _,
  ref
) {
  return ProjectsSwiper({ ref });
});
export default ProjectSection;
