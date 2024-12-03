import { FC } from "react";
import IconMap from "../Data/IconMap";

const ExportButton: FC = () => {
  return (
    <div className="dropdown dropdown-start">
      <div
        tabIndex={0}
        role="button"
        className="text-gray-500 bg-transparent rounded-md btn btn-outline"
      >
        <IconMap.CiExport size={20} />
        Export
        <IconMap.MdExpandMore size={24} />
      </div>
      <ul
        tabIndex={0}
        className="dropdown-content menu border-slate-200 border mt-1 bg-base-100 rounded-box z-[1] w-52 p-2 shadow"
      >
        <li>
          <a>Export PDF</a>
        </li>
        <li>
          <a>Export Excel</a>
        </li>
      </ul>
    </div>
  );
};

export default ExportButton;
