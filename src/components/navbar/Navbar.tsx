import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRef } from "react";

export default function Navbar() {
  const secRef = useRef<HTMLDivElement | null>(null);

  const goTo = (section: string) => {
    secRef.current = section;
    secRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <nav className="bg-[#0A090F] flex justify-between items-center h-16 border-b border-[#8A8A8A] sticky top-0">
        <h1 className="text-white font-bold font-vollkorn ml-20">FRAMZY.</h1>
        <ul className="text-white flex gap-8 font-manrope text-[12px]">
          <li className="text-[#39EEFA]">
            <button type="button" onClick={() => goTo("about")}>
              ABOUT
            </button>
          </li>
          <li>
            <button type="button" onClick={() => goTo("skill")}>
              SKILLS
            </button>
          </li>
          <li>
            <button type="button" onClick={() => goTo("project")}>
              PROJECTS
            </button>
          </li>
          <li>
            <button>
              <p>
                CONNECT <FontAwesomeIcon icon={["fas", "caret-down"]} />
              </p>
            </button>
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
