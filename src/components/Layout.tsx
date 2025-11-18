
import { Outlet } from "react-router"

function Layout() {
    return(
        <>
            <nav className="bg-gray-800 p-4">
                <ul className="text-white font-bold flex justify-start gap-5">
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>
            </nav>
            <div>
                <Outlet />
            </div>
        </>
    )
}

export default Layout