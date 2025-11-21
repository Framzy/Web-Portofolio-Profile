import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router";

export default function Navbar() {
  return (
    <>
      <nav className="bg-[#0A090F] flex justify-between items-center h-16 border-b border-[#8A8A8A] sticky top-0">
        <h1 className="text-white font-bold font-vollkorn ml-20">FRAMZY.</h1>
        <ul className="text-white flex gap-8 font-manrope text-[12px]">
          <li className="text-[#39EEFA]">
            <Link to="/">ABOUT</Link>
          </li>
          <li>
            <Link to="/">SKILLS</Link>
          </li>
          <li>
            <Link to="/">PROJECTS</Link>
          </li>
          <li>
            <Link to="/">
              <p>
                CONNECT <FontAwesomeIcon icon={["fas", "caret-down"]} />
              </p>
            </Link>
          </li>
        </ul>
        <button
          type="button"
          className="bg-white text-[#0A090F] font-medium text-sm h-11 w-60 mr-2 rounded cursor-pointer hover:bg-[#39EEFA] "
        >
          DONWLOAD CV
        </button>
      </nav>
    </>
  );
}
