import { Link, Outlet } from "react-router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Layout() {
  return (
    <>
      <nav className="bg-[#0A090F] flex justify-between items-center h-[60px]">
        <h1 className="text-white font-bold ml-20">FRAMZY.</h1>
        <ul className="text-white flex  gap-5 font-light text-sm">
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
          className="bg-white text-[#0A090F] font-medium h-12 w-60 mr-2 rounded cursor-pointer hover:bg-[#39EEFA] "
        >
          DONWLOAD CV
        </button>
      </nav>
      <div>
        <Outlet />
      </div>
    </>
  );
}

export default Layout;
