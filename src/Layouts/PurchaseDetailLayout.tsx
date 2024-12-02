import React from "react";
import { NavLink } from "react-router-dom";
import tabs from "../Data/sidebarPurchaseDetail.json";

type Props = {
  children?: React.ReactNode;
};

const baseStyle =
  "text-center inline-block shadow-md rounded-lg rounded-b-none px-4 py-2 min-w-40 text-lg";

const PurchaseDetailLayout: React.FC<Props> = ({ children }) => {
  return (
    <>
      {/* Tabs */}
      <div className="flex gap-x-4">
        {tabs.map((tab) => (
          <NavLink
            key={tab.name}
            to={tab.path}
            className={({ isActive }) =>
              isActive
                ? [baseStyle, "text-white bg-primary-dark"].join(" ")
                : [baseStyle, "text-gray-500 bg-white"].join(" ")
            }
          >
            {tab.name}
          </NavLink>
        ))}
      </div>

      <div className="p-6 justify-between w-full overflow-x-auto bg-white rounded-md min-h-96 card text-slate-800">
        {children}
      </div>
    </>
  );
};

export default PurchaseDetailLayout;
