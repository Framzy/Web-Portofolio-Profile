import { motion } from "framer-motion";
import { forwardRef } from "react";
import { fadeInTop } from "../../utils/motionVariants.ts";

import { useProjectsView } from "./hooks/useProjectsView";
import { PROJECTS_ITEMS } from "./data/ProjectItems.data";
import ProjectsLayout from "./layouts/ProjectsLayout";
import SeeAllProjectButton from "./components/ui/SeeAllProjectButton";

const ProjectSection = forwardRef<HTMLDivElement>(
  function ProjectSection(_, ref) {
    const { view, toggleView } = useProjectsView();
    return (
      <>
        <section ref={ref} className="projects-content pt-16">
          <motion.div {...fadeInTop}>
            <div className="skills-title w-8/10 mx-auto flex flex-row justify-between items-end py-5">
              <h1 className="text-3xl font-bold text-[#39EEFA]">
                MY <span className="text-white">PROJECTS</span>
              </h1>
              <p className=" text-white font-thin font-poppins text-[10px]">
                ///////////////// MY_PROJECTS
              </p>
            </div>
            <div className="w-8/10 mx-auto flex justify-center flex-col items-center">
              <ProjectsLayout view={view} projects={PROJECTS_ITEMS} />
              <SeeAllProjectButton view={view} toggleView={toggleView} />
            </div>
          </motion.div>
        </section>
      </>
    );
  },
);
export default ProjectSection;
