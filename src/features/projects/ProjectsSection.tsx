import { forwardRef, useState } from "react";
import ProjectsSwiper from "./layouts/ProjectSwiper";
import ProjectsGrid from "./layouts/ProjectGrid";

const ProjectSection = forwardRef<HTMLDivElement>(
  function ProjectSection(_, ref) {
    const [openDisplay, setOpenDisplay] = useState(false);
    const display = openDisplay ? "grid" : "swiper";

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

          {openDisplay
            ? ProjectsSwiper(openDisplay)
            : ProjectsGrid(openDisplay)}

          <button
            type="button"
            className="mt-5 bg-white text-black text-xs md:text-sm font-bold font-manrope h-10 md:h-12 w-40 md:w-50 lg:w-57 mr-2 rounded hover:bg-[#39EEFA] cursor-pointer transition-all duration-300 delay-75 ease-in-out"
            onClick={() => {
              setOpenDisplay((v) => !v);
              console.log(openDisplay);
              console.log(display);
            }}
          >
            Toggle Display Mode
          </button>
        </section>
      </>
    );
  },
);
export default ProjectSection;
