import { Link, Outlet } from "react-router";

function Layout() {
  return (
    <>
      <nav className="bg-gray-800 flex justify-between items-center py-4 px-8">
        <h1 className="text-white font-bold">FRAMZY.</h1>
        <ul className="text-white font-normal flex justify-start gap-5">
          <li className="text-[#FDE63D]">
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
              CONNECT <i className="fa-brands fa-linkedin"></i>
            </Link>
          </li>
        </ul>
        <button
          type="button"
          className="bg-white text-black hover:bg-blue-700 font-medium py-2 px-8 rounded"
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
