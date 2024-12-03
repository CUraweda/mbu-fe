import { Link, NavLink } from "react-router-dom";
import sidebarLinks from "../Data/sidebar.json";
import dashboardLinks from "../Data/dashboard.json";
import IconMap from "../Data/IconMap.tsx";
import { useState } from "react";
import logo from "../assets/Image/logo_mbu_primary.png";
import { MdOutlineMenuOpen } from "react-icons/md";

const Sidebar = () => {
  const [openSubmenus, setOpenSubmenus] = useState<{ [key: string]: boolean }>(
    {},
  );

  const toggleSubmenu = (name: string) => {
    setOpenSubmenus((prevState) => ({
      ...prevState,
      [name]: !prevState[name],
    }));
  };

  return (
    <div>
      <ul className="min-h-screen p-4 w-80 menu bg-base-100 text-md">
          <div className="w-full p-2 mb-5 flex justify-between items-center">
            <img src={logo} alt="user" className="h-12" />
            <label htmlFor="my-drawer-3" className="drawer-overlay z-50 btn btn-ghost text-3xl  lg:hidden">
            <MdOutlineMenuOpen />
            </label>
          </div>
        

        {/* Sidebar Dashboard links::START */}
        {dashboardLinks.map((link) => {
          const IconComponent = IconMap[link.icon];
          const isOpen = openSubmenus[link.name];

          return (
            <li key={link.name} className="flex flex-col">
              <div
                className={`flex items-center justify-between cursor-pointer ${
                  isOpen ? "bg-[#76A8D8BF] text-white shadow-md" : ""
                }`}
                onClick={() => toggleSubmenu(link.name)}
              >
                {IconComponent && <IconComponent className="mr-2 text-2xl" />}
                <div className="w-full">
                  <span>{link.name}</span>
                </div>
                {link.children && (
                  <span
                    className={`transition-transform ${
                      isOpen ? "rotate-90" : ""
                    }`}
                  >
                    {IconMap.MdKeyboardArrowRight && (
                      <IconMap.MdKeyboardArrowRight />
                    )}
                  </span>
                )}
              </div>

              {link.children && isOpen && (
                <ul className="ml-4 my-3">
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
        {/* Sidebar Dashboard links::END */}

        {/* Sidebar Features links::START */}
        <h3 className="my-3 ml-5 text-xs">Features</h3>
        {sidebarLinks.map((link) => {
          const IconComponent = IconMap[link.icon];
          const isOpen = openSubmenus[link.name];

          return (
            <li key={link.name} className="flex flex-col">
              <div
                className={`flex items-center justify-between cursor-pointer my-1 ${
                  isOpen ? "bg-[#76A8D8BF] text-white shadow-sm" : ""
                }`}
                onClick={() => toggleSubmenu(link.name)}
              >
                <div className="flex items-center">
                  {IconComponent && <IconComponent className="mr-2 text-xl" />}
                  {link.path ? (
                    <Link to={link.path}>{link.name}</Link>
                  ) : (
                    <span>{link.name}</span>
                  )}
                </div>
                {link.children && (
                  <span
                    className={`transition-transform ${
                      isOpen ? "rotate-90" : ""
                    }`}
                  >
                    {IconMap.MdKeyboardArrowRight && (
                      <IconMap.MdKeyboardArrowRight />
                    )}
                  </span>
                )}
              </div>

              {link.children && isOpen && (
                <ul className="ml-4 my-3">
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
        {/* Sidebar Features links::END */}
      </ul>
    </div>
  );
};

export default Sidebar;
