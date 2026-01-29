import { useState } from "react";
import { ProjectCard } from "../components/ProjectCard";
import { PROJECTS_ITEMS } from "../data/ProjectItems.data";

export default function ProjectGrid() {
  const [n, setN] = useState(2);
  return (
    <div className="project-grid w-8/10 mx-auto flex flex-col items-center justify-center min-h-[300px]">
      <h1 className="text-white">Project Grid Component</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-5">
        {PROJECTS_ITEMS.slice(0, n).map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
        <button
          className="col-span-full mt-5 h-10 md:h-12 w-40 md:w-50 lg:w-57 bg-white text-black
                  text-xs md:text-sm font-bold font-manrope
                  transition-all duration-200 delay-75 ease-in-out
                  rounded cursor-pointer hover:bg-[#39EEFA]"
          type="button"
          onClick={() =>
            setN((prev) =>
              prev + 2 <= PROJECTS_ITEMS.length ? prev + 2 : prev,
            )
          }
        >
          Load More Projects
        </button>
      </div>
    </div>
  );
}
