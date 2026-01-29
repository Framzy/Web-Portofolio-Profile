type project = {
  id: string;
  title: string;
  link?: string;
};

export function ProjectCard({ project }: { project: project }) {
  return (
    <div className="item-1 flex flex-col gap-2 w-fit ">
      <p className="text-xs ">{project.id}</p>

      {project.link ? (
        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="block" // pastikan menjadi blok penuh
        >
          <div className="img-item flex items-center justify-center w-xs h-45 sm:w-md sm:h-55 md:w-lg md:h-70 lg:w-sm lg:h-60 xl:w-md 2xl:w-xl 2xl:h-85 bg-[rgba(44,168,180,0.41)] border border-white rounded-xl hover:opacity-90 transition">
            <p className="text-sm text-white">{project.title}</p>
          </div>
        </a>
      ) : (
        <div className="img-item w-xs h-45 sm:w-md sm:h-55 md:w-lg md:h-70 lg:w-sm lg:h-60 xl:w-md 2xl:w-xl 2xl:h-85 bg-amber-50 border border-white rounded-xl">
          {project.title}
        </div>
      )}

      <h2 className="text-sm">{project.title}</h2>
    </div>
  );
}
