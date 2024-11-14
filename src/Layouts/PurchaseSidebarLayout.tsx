import { NavLink } from "react-router-dom"; // Import NavLink
import sidebarLinks from "../Data/sidebarPurchaseDetail.json";

interface PurchaseSidebarLayoutProps {
  children: React.ReactNode;
}

const PurchaseSidebarLayout: React.FC<PurchaseSidebarLayoutProps> = ({
  children,
}) => {
  return (
    <div className="h-screen drawer lg:drawer-open">
      {/* Sidebar toggle input */}
      <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />

      {/* Main content */}
      <div className="drawer-content flex flex-col bg-[#F0F0F0F0] h-screen">
        {/* Main content card */}
        <div className="flex flex-col mx-2 overflow-y-auto">{children}</div>
      </div>

      {/* Sidebar */}
      <div className="h-screen drawer-side md:bg-transparent">
        <label htmlFor="my-drawer-3" className="drawer-overlay"></label>
        <ul className="min-h-full shadow-md menu text-md bg-[#F0F0F0F0]">
          {/* Sidebar links */}
          {sidebarLinks.map((link) => {
            return (
              <li key={link.name} className="flex flex-col text-lg">
                <NavLink
                  to={link.path}
                  className={({ isActive }) =>
                    isActive ? "bg-primary  text-white" : "text-black"
                  }
                >
                  {link.name}
                </NavLink>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default PurchaseSidebarLayout;
