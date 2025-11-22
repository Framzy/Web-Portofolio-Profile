import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import type { Section } from "../../types/sections";
import DownloadCvButton from "../button/DownloadCvButton";

type Props = {
  goTo: (section: Section) => void;
};

export default function Navbar({ goTo }: Props) {
  return (
    <nav className="bg-[#0A090F] flex justify-between items-center h-16 border-b border-[#8A8A8A]">
      <h1 className="text-white font-bold font-vollkorn ml-20">FRAMZY.</h1>

      <ul className=" text-white flex flex-row gap-8 font-manrope text-sm mr-20">
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

      <DownloadCvButton
        path="/CV_Farden_Ramzy_Muharram.pdf"
        filename="CV_Farden_Ramzy_Muharram.pdf"
      />
    </nav>
  );
}
