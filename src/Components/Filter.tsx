import React from "react";
import iconMap from "../Data/iconMap";

interface FilterProps {
  children?: React.ReactNode;
}

const Filter: React.FC<FilterProps> = ({ children }) => {
  return (
    <details className="dropdown dropdown-end ">
      <summary className="m-1 btn btn-ghost">
        <iconMap.CiFilter size={28} />
      </summary>
      <div className="menu dropdown-content bg-base-100 rounded-box z-[1] w-fit p-2 shadow">
        {children}
      </div>
    </details>
  );
};

export default Filter;
