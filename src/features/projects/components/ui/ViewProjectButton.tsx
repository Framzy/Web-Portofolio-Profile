import { FaArrowUp } from "react-icons/fa";
import type { Project } from "../../types";
type project = Project;

export function ViewProjectButton({ link }: { link?: project["link"] }) {
  return (
    <button
      type="button"
      className="px-4 py-2 rounded-sm border border-white bg-black/75 text-white hover:bg-white/60 hover:text-black 
            transition-all duration-150 cursor-pointer"
      onClick={() => {
        if (link) {
          window.open(link, "_blank");
        }
      }}
    >
      <p className="font-manrope text-sm">
        View Project
        <FaArrowUp className="inline-block rotate-45 mb-1 ml-1" size={15} />
      </p>
    </button>
  );
}
