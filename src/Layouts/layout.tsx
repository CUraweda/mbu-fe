// components/Layout.tsx
import { Outlet, Link } from "react-router-dom";
import { IoMdNotificationsOutline } from "react-icons/io";
import sidebarLinks from "../Data/nav.json";
import iconMap from "../Data/iconMap.tsx";
import { useState } from "react";

const layout = () => {
  const [openSubmenus, setOpenSubmenus] = useState<{ [key: string]: boolean }>(
    {}
  );
  const toggleSubmenu = (name: string) => {
    setOpenSubmenus((prevState) => ({
      ...prevState,
      [name]: !prevState[name],
    }));
  };
  return (
    <>
      <div className="drawer lg:drawer-open">
        <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col p-5 bg-[#F0F0F0F0] ">
          {/* Navbar */}
          <div className="navbar bg-white text-slate-800 rounded-lg justify-between">
            <div className="block px-5">
              <button className="text-xl font-bold">Welcome 👋, </button>
              <div className=" flex-1 ">Admin MBU</div>
            </div>{" "}
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
            <div className="hidden flex-none lg:block">
              <ul className="menu menu-horizontal">
                {/* Navbar menu content here */}
                <li>
                  <div className="indicator m-auto">
                    <IoMdNotificationsOutline className="text-2xl font-bold" />
                  </div>
                </li>
                <li>
                  <div className="avatar">
                    <div className="w-9 rounded-full">
                      <img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png" />
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div className="h-full">
            <Outlet />
          </div>
        </div>
        <div className="drawer-side">
          <label
            htmlFor="my-drawer-3"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <ul className="menu bg-base-200 min-h-full w-80 p-4">
            {/* Sidebar content here */}
            {sidebarLinks.map((link) => {
              const IconComponent = iconMap[link.icon];
              const isOpen =
                openSubmenus[link.name] || link.name === "Dashboard";

              return (
                <li key={link.path} className="flex flex-col">
                  <div
                    className="flex items-center justify-between cursor-pointer"
                    onClick={() => toggleSubmenu(link.name)}
                  >
                    <div className="flex items-center">
                      {IconComponent && <IconComponent className="mr-2" />}
                      <Link to={link.path}>{link.name}</Link>
                    </div>
                    {link.children && (
                      <span
                        className={`transition-transform ${
                          isOpen ? "rotate-180" : ""
                        }`}
                      >
                        {iconMap.MdExpandMore && link.name !== "Dashboard" && (
                          <iconMap.MdExpandMore />
                        )}
                      </span>
                    )}
                  </div>

                  {link.children && (
                    <ul
                      className={`ml-4  ${isOpen ? "max-h-96" : "max-h-0"}`}
                      style={{
                        transition: "max-height 0.3s ease-out",
                        overflow:
                          link.name !== "Dashboard" ? "hidden" : "visible",
                      }}
                    >
                      {link.children.map((subLink) => (
                        <li key={subLink.path}>
                          <Link to={subLink.path}>{subLink.name}</Link>
                        </li>
                      ))}
                    </ul>
                  )}
                  {link.name === "Dashboard" && <div>Feature</div>}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </>
  );
};
export default layout;
