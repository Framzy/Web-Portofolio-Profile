import { ProjectCard } from "../components/layout/ProjectCard";
import type { ProjectItem } from "../types";

type ProjectsGridProps = {
  projects: ProjectItem[];
};

export default function ProjectsGrid({ projects }: ProjectsGridProps) {
  if (!projects.length) return null;

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      {projects.map((project, index) => (
        <div
          key={project.id}
          className="border border-white px-6 py-4 text-white"
        >
          <ProjectCard project={project} number={index + 1} />
        </div>
      ))}
    </div>
  );
}
