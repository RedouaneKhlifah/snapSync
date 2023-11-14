import { Outlet } from "react-router-dom";

function Layout() {
    return (
        <div className=" flex justify-center items-center">
            <div className=" w-5/6 ">
                <Outlet />
            </div>
        </div>
    );
}

export default Layout;
