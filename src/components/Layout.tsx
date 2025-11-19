import { Outlet } from "react-router";
import Navbar from "./navbar/Navbar";

function Layout() {
  return (
    <>
      <main>
        <Navbar />
        <div>
          <Outlet />
        </div>
      </main>
    </>
  );
}

export default Layout;
