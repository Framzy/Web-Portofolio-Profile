import { ProjectCard } from "../components/layout/ProjectCard";
import type { Project } from "../types";

type ProjectsGridProps = {
  projects: Project[];
};

export default function ProjectsGrid({ projects }: ProjectsGridProps) {
  if (!projects.length) return null;

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 ">
      {projects.map((project) => (
        <div
          key={project.id}
          className="border border-white px-6 py-4 text-white"
        >
          <ProjectCard key={project.id} project={project} />
        </div>
      ))}
    </div>
  );
}
