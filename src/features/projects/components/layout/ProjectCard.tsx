import type { Project } from "../../types";
import { ViewProjectButton } from "../ui/ViewProjectButton";

type Props = {
  project: Project;
  number: number;
};

export function ProjectCard({ project, number }: Props) {
  return (
    <div className="flex flex-col gap-2 w-full">
      <p className="text-xs">Project_{String(number).padStart(2, "0")}</p>

      <div className="relative group overflow-hidden rounded-2xl border border-white w-full aspect-video">
        {project.thumbnail ? (
          <img
            src={project.thumbnail}
            alt={project.title}
            loading="lazy"
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-[#1b546f]">
            <h3 className="text-white text-center font-manrope text-sm px-4">
              {project.title}
            </h3>
          </div>
        )}

        <div
          className="absolute inset-0 flex items-end p-4 bg-black/0 
                        group-hover:bg-black/40 transition"
        >
          <ViewProjectButton link={project.link} />
        </div>
      </div>

      <h2 className="text-sm">{project.title}</h2>
    </div>
  );
}
