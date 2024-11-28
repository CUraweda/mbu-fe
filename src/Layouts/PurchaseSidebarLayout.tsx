import { NavLink } from "react-router-dom"; // Import NavLink
import sidebarLinks from "../Data/sidebarPurchaseDetail.json";

interface PurchaseSidebarLayoutProps {
  children: React.ReactNode;
}

const PurchaseSidebarLayout: React.FC<PurchaseSidebarLayoutProps> = ({
  children,
}) => {
  return (
    <div className="flex flex-col h-screen">
      {/* Horizontal Tabs */}
      <div className="bg-[#F0F0F0F0] shadow-md">
        <ul className="flex">
          {/* Sidebar links */}
          {sidebarLinks.map((link) => (
            <li key={link.name} className="flex-1">
              <NavLink
                to={link.path}
                className={({ isActive }) =>
                  `block text-center py-3 ${
                    isActive
                      ? "bg-blue-500 text-white"
                      : "bg-gray-100 text-black hover:bg-gray-200"
                  }`
                }
              >
                {link.name}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>

      {/* Main content */}
      <div className="flex-1 bg-[#F0F0F0F0] p-4 overflow-y-auto">
        {children}
      </div>
    </div>
  );
};

export default PurchaseSidebarLayout;
