import { FaArrowUp } from "react-icons/fa";
import type { Project } from "../../types";

type Props = {
  link?: Project["link"];
};

export function ViewProjectButton({ link }: Props) {
  if (!link) return null;

  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="px-4 py-2 rounded-sm border border-white bg-black/75 text-white 
                 hover:bg-white/60 hover:text-black 
                 transition-all duration-150 cursor-pointer inline-flex items-center"
    >
      <span className="font-manrope text-sm">View Project</span>
      <FaArrowUp className="rotate-45 ml-1" size={15} />
    </a>
  );
}
