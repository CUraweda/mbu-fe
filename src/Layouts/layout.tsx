import { Outlet, Link, NavLink } from "react-router-dom";
import { IoMdNotificationsOutline } from "react-icons/io";
import sidebarLinks from "../Data/sidebar.json";
import iconMap from "../Data/iconMap.tsx";
import { useState } from "react";
import logo from "../assets/Image/logo_mbu_primary.png";
// import { logout } from "../api/AuthService";

const Layout = () => {
  const [openSubmenus, setOpenSubmenus] = useState<{ [key: string]: boolean }>(
    {}
  );

  // const handleLogout = () => {
  //   logout();
  // };

  const toggleSubmenu = (name: string) => {
    setOpenSubmenus((prevState) => ({
      ...prevState,
      [name]: !prevState[name],
    }));
  };

  return (
    <div className="h-screen drawer lg:drawer-open">
      {/* Sidebar toggle input */}
      <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />

      {/* Main content */}
      <div className="drawer-content flex flex-col bg-[#F0F0F0F0] h-screen">
        {/* Navbar */}
        <div className="mx-4 mt-4">
          <div className="justify-between p-2 bg-white rounded-lg navbar text-slate-800">
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
                  className="inline-block w-6 h-6 stroke-current"
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

            <div className="ml-auto ">
              <div className="flex items-center justify-center">
                {/* notification */}
                <div className="items-center h-full m-auto mr-8 indicator">
                  <IoMdNotificationsOutline
                    size={30}
                    className="w-full text-2xl font-bold "
                  />
                  <span className="indicator-item badge text-white mt-1 bg-[#EC7F7F]">
                    99+
                  </span>
                </div>
                {/* profile */}
                <div className="text-right">
                  <p className="text-sm font-semibold lg:text-base">John Doe</p>
                  <p className="text-xs">Super Admin</p>
                </div>
                <details className="dropdown dropdown-end">
                  <summary className="btn btn-ghost hover:bg-transparent">
                    <div className="avatar">
                      <div className="flex items-center justify-center w-8 border border-black rounded-full">
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
                      <div>Logout</div>
                    </li>
                    <li>
                      <a>Item 2</a>
                    </li>
                  </ul>
                </details>
              </div>
            </div>
          </div>
        </div>

        {/* Main content card */}
        <div className="flex flex-col m-4 overflow-y-auto">
          <Outlet />
        </div>
      </div>

      {/* Sidebar */}
      <div className="h-screen drawer-side">
        <label htmlFor="my-drawer-3" className="drawer-overlay"></label>
        <ul className="min-h-full p-4 shadow-md min-w-52 menu bg-base-100 text-md">
          <li>
            <div className="w-full p-2 mb-5">
              <img src={logo} alt="user" className="h-12" />
            </div>
          </li>

          {/* Sidebar links */}
          {sidebarLinks.map((link) => {
            const IconComponent = iconMap[link.icon];
            const isOpen = openSubmenus[link.name];

            return (
              <li key={link.name} className="flex flex-col text-lg">
                <div
                  className={`flex items-center justify-between cursor-pointer ${
                    isOpen ? "bg-[#76A8D8BF] text-white shadow-md" : ""
                  }`}
                  onClick={() => toggleSubmenu(link.name)}
                >
                  <div className="flex items-center">
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
                      {iconMap.MdExpandMore && <iconMap.MdExpandMore />}
                    </span>
                  )}
                </div>

                {link.children && isOpen && (
                  <ul className="ml-4">
                    {link.children.map((subLink) => (
                      <li key={subLink.path}>
                        <NavLink
                          to={subLink.path}
                          className={({ isActive }) =>
                            isActive
                              ? "text-[#76A8D8BF] font-semibold bg-transparent"
                              : "text-black"
                          }
                        >
                          {subLink.name}
                        </NavLink>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Layout;
