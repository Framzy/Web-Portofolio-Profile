import { Outlet } from "react-router";
import Navbar from "./navbar/Navbar";

function Layout() {
  return (
    <>
      <main>
        <Navbar />
        <Outlet />
      </main>
    </>
  );
}

export default Layout;
