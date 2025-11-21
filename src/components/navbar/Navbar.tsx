import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import type { Section } from "../../types/sections";

type Props = {
  goTo: (section: Section) => void;
};

export default function Navbar({ goTo }: Props) {
  return (
    <nav className="bg-[#0A090F] flex justify-between items-center h-16 border-b border-[#8A8A8A] sticky top-0 z-1">
      <h1 className="text-white font-bold font-vollkorn ml-20">FRAMZY.</h1>

      <ul className="text-white flex gap-8 font-manrope text-[12px] mr-20">
        <li className="text-[#39EEFA]">
          <button onClick={() => goTo("about")}>ABOUT</button>
        </li>
        <li>
          <button onClick={() => goTo("skill")}>SKILLS</button>
        </li>
        <li>
          <button onClick={() => goTo("project")}>PROJECTS</button>
        </li>
        <li>
          <button>
            CONNECT <FontAwesomeIcon icon={["fas", "caret-down"]} />
          </button>
        </li>
      </ul>

      <button
        type="button"
        className="bg-white text-[#0A090F] font-medium text-sm h-11 w-60 mr-2 rounded hover:bg-[#39EEFA]"
      >
        DOWNLOAD CV
      </button>
    </nav>
  );
}
