import { Outlet, Link } from "react-router-dom";
import { IoMdNotificationsOutline } from "react-icons/io";
import sidebarLinks from "../Data/navNew.json";
import iconMap from "../Data/iconMap.tsx";
import { useState } from "react";
import logo from "../assets/Image/logo_mbu_primary.png";
import { logout } from "../api/AuthService";
const Layout = () => {
  const [openSubmenus, setOpenSubmenus] = useState<{ [key: string]: boolean }>(
    {}
  );

  const handleLogout = () => {
    logout();
  };

  const toggleSubmenu = (name: string) => {
    setOpenSubmenus((prevState) => ({
      ...prevState,
      [name]: !prevState[name],
    }));
  };

  return (
    <div className="drawer lg:drawer-open">
      {/* Sidebar toggle input */}
      <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />

      {/* Main content */}
      <div className="drawer-content flex flex-col p-5 bg-[#F0F0F0F0] h-screen">
        {/* Navbar */}
        <div className="navbar bg-white text-slate-800 rounded-lg justify-between w-full p-4">
          <div className="block px-5">
            <button className="text-xl font-bold">Welcome 👋,</button>
            <div className="flex-1">Admin MBU</div>
          </div>
          <div className="flex-none lg:hidden">
            <label
              htmlFor="my-drawer-3"
              aria-label="open sidebar"
              className="btn btn-square btn-ghost"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block h-6 w-6 stroke-current"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </label>
          </div>
          <div className="hidden flex-none lg:block h-full ">
            <div className="w-20 h-full flex justify-center items-center mr-2 gap-3">
              <div className="indicator m-auto h-full items-center">
                <IoMdNotificationsOutline className="text-2xl font-bold" />
              </div>
              <details className="dropdown dropdown-end">
                <summary className="btn btn-ghost hover:bg-transparent">
                  <div className="avatar">
                    <div className="w-8 rounded-full">
                      <img
                        src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
                        alt="Logout Icon"
                        className="cursor-pointer"
                      />
                    </div>
                  </div>
                </summary>
                <ul className="menu dropdown-content bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
                  <li>
                    <div onClick={handleLogout}>Logout</div>
                  </li>
                  <li>
                    <a>Item 2</a>
                  </li>
                </ul>
              </details>
            </div>
          </div>
        </div>

        {/* Main content card */}
        <div className="h-full mt-4">
          <Outlet />
        </div>
      </div>

      {/* Sidebar */}
      <div className="drawer-side">
        <label htmlFor="my-drawer-3" className="drawer-overlay"></label>
        <ul className="menu bg-base-100 min-h-full w-72 p-4 shadow-md text-md">
          <li>
            <div className="p-2 w-full mb-5">
              <img src={logo} alt="user" className="h-12" />
            </div>
          </li>

          {/* Sidebar links */}
          {sidebarLinks.map((link) => {
            const IconComponent = iconMap[link.icon];
            const isOpen = openSubmenus[link.name] || link.name !== "Dashboard";

            return (
              <li
                key={link.path || link.name}
                className="flex flex-col text-lg"
              >
                <div
                  className={`flex items-center justify-between cursor-pointer  ${
                    link.name !== "Dashboard"
                      ? "bg-[#76A8D8BF] text-white shadow-md"
                      : ""
                  }
                    }`}
                  onClick={() => toggleSubmenu(link.name)}
                >
                  <div
                    className={`flex items-center
                    }`}
                  >
                    {IconComponent && <IconComponent className="mr-2" />}
                    {link.path ? (
                      <Link to={link.path}>{link.name}</Link>
                    ) : (
                      <span>{link.name}</span>
                    )}
                  </div>
                  {link.children && (
                    <span
                      className={`transition-transform ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    >
                      {iconMap.MdExpandMore && link.name !== "Project" && (
                        <iconMap.MdExpandMore />
                      )}
                    </span>
                  )}
                </div>

                {link.children && (
                  <ul
                    className={`ml-4 overflow-hidden transition-max-height duration-300 ease-in-out ${
                      isOpen ? "max-h-96" : "max-h-0"
                    }`}
                  >
                    {link.children.map((subLink) => (
                      <li key={subLink.path}>
                        <Link to={subLink.path}>{subLink.name}</Link>
                      </li>
                    ))}
                  </ul>
                )}
                {/* {link.name === "Dashboard" && <div>Feature</div>} */}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Layout;
