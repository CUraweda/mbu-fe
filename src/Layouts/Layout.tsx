import { Outlet } from "react-router-dom";
import Navbar from "./Navbar.tsx";
import Sidebar from "./Sidebar.tsx";

const Layout = () => {
  return (
    <div className="h-screen drawer lg:drawer-open">
      {/* Sidebar toggle input */}
      <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />

      {/* Main content */}
      <div className="drawer-content flex flex-col bg-[#F0F0F0F0] h-screen">
        {/* Navbar */}
        <Navbar />

        {/* Main content card */}
        <div className="flex flex-col m-4 overflow-y-auto">
          <Outlet />
        </div>
      </div>

      {/* Sidebar */}
      <div className="h-screen drawer-side  ">
        <Sidebar />
      </div>
    </div>
  );
};

export default Layout;
