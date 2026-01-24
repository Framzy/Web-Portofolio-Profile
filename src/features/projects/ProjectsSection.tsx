import { forwardRef } from "react";
import ProjectsSwiper from "./ProjectSwiper";

const ProjectSection = forwardRef<HTMLDivElement>(
  function ProjectSection(_, ref) {
    return (
      <>
        <section ref={ref} className="h-screen mt-10">
          {ProjectsSwiper()}
        </section>
      </>
    );
  },
);
export default ProjectSection;
