import { RxCaretDown } from "react-icons/rx";
import type { Section } from "../../types/sections";
import DownloadCvButton from "../button/DownloadCvButton";

type Props = {
  goTo: (section: Section) => void;
};

export default function Navbar({ goTo }: Props) {
  return (
    <nav className="bg-[#0A090F] flex justify-between items-center h-16 border-b border-[#8A8A8A]">
      <h1 className="text-white font-bold font-vollkorn ml-20">FRAMZY.</h1>

      <ul className=" text-white flex flex-row gap-8 font-manrope text-sm">
        <li>
          <button
            className="navbar-navItem text-[#39EEFA]"
            onClick={() => goTo("about")}
          >
            ABOUT
          </button>
        </li>
        <li>
          <button className="navbar-navItem" onClick={() => goTo("skill")}>
            SKILLS
          </button>
        </li>
        <li>
          <button className="navbar-navItem" onClick={() => goTo("project")}>
            PROJECTS
          </button>
        </li>
        <li>
          <button className="navbar-navItem flex items-center">
            CONNECT <RxCaretDown size={16} />
          </button>
        </li>
      </ul>

      <DownloadCvButton href="/cv_file/cv.pdf" fileName="Framzy_CV.pdf" />
    </nav>
  );
}
