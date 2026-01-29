import { forwardRef } from "react";
import { useProjectsView } from "./hooks/useProjectsView";
import ProjectLayout from "./layouts/ProjectLayout";

const ProjectSection = forwardRef<HTMLDivElement>(
  function ProjectSection(_, ref) {
    const { view, toggleView } = useProjectsView();
    return (
      <>
        <section ref={ref} className="projects-content min-h-screen">
          <div className="skills-title w-8/10 mx-auto flex flex-row justify-between items-end py-5">
            <h1 className="text-3xl font-bold text-[#39EEFA]">
              MY <span className="text-white">PROJECTS</span>
            </h1>
            <p className=" text-white font-thin font-poppins text-[10px]">
              ///////////////// MY_PROJECTS
            </p>
          </div>
          <ProjectLayout view={view} />
          <div className="w-8/10 mx-auto flex justify-center">
            <button
              type="button"
              className="mt-5 mr-2 h-10 md:h-12 w-40 md:w-50 lg:w-57 bg-white text-black 
                  text-xs md:text-sm font-bold font-manrope 
                  transition-all duration-200 delay-75 ease-in-out
                  rounded cursor-pointer hover:bg-[#39EEFA]  "
              onClick={toggleView}
            >
              Toggle Display Mode
            </button>
          </div>
        </section>
      </>
    );
  },
);
export default ProjectSection;
