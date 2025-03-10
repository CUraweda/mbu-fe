import React from "react";
import { FiCheckCircle } from "react-icons/fi";
import { GiChicken } from "react-icons/gi";
import { MdDeleteOutline, MdOutlineEdit } from "react-icons/md";
import { ProjectsResponse } from "@/Data/types/response.type";
import { CiMenuKebab } from "react-icons/ci";

interface ProjectItemProps extends ProjectsResponse {
  isChecked: boolean;
  onCheckboxChange: () => void;
}

const ProjectItem: React.FC<ProjectItemProps> = ({
  id_project,
  bussines_unit,
  product,
  area,
  location,
  farm,
  status_chick_in,
  status_project,
  capacity,
  period,
  isChecked,
  onCheckboxChange,
}) => {
  const getStatusChickin = () => {
    switch (status_chick_in) {
      case "Sudah":
        return "bg-[#E4FFBD] text-[#12B906]";
      case "Belum":
        return "bg-[#FFDFBE] text-[#EC8917]";
      default:
        return "";
    }
  };

  const getStatusProject = () => {
    switch (status_project) {
      case "Pengajuan":
        return "bg-[#FFF7C7] text-[#C9C311]";
      case "Persiapan":
        return "bg-[#FFDADB] text-[#BE0407]";
      case "Aktif":
        return "bg-[#F9E5FF] text-[#E308E6]";
      case "Selesai":
        return "bg-[#D0F0FF] text-[#15B5FF]";
      default:
        return "bg-[#CBCBCB] text-white";
    }
  };

  return (
    <tr className="overflow-x-auto text-base text-center border-b">
      <td>
        <input
          type="checkbox"
          className="checkbox checkbox-info"
          checked={isChecked}
          onChange={onCheckboxChange}
        />
      
      </td>
      <td>{id_project}</td>
      <td>{bussines_unit}</td>
      <td>{product}</td>
      <td>{area}</td>
      <td>{location}</td>
      <td>{farm || "-"}</td>
      <td>{capacity || "-"}</td>
      <td>{period || "-"}</td>
      <td>
        <div
          className={`px-3 py-1 text-center rounded-md text-sm font-semibold ${getStatusChickin()}`}
        >
          {status_chick_in}
        </div>
      </td>
      <td className="px-4 py-2">
        <div
          className={`px-3 py-1 h-7 text-center rounded-md text-sm font-semibold ${getStatusProject()}`}
        >
          {status_project}
        </div>
      </td>
      <td className="px-4 py-2 text-center">
        <div className="dropdown dropdown-left dropdown-end">
        <div tabIndex={0} className="">
            <span className="btn btn-ghost text-xl font-bold" role="button">
              <CiMenuKebab />
            </span>
          </div>
          <ul className="z-10 p-2 mr-2 border shadow dropdown-content menu bg-base-100 rounded-box w-52 border-slate-200">
            <li>
              <a>
                <span>
                  <MdOutlineEdit />
                </span>
                Edit
              </a>
            </li>
            <li>
              <a>
                <span>
                  <MdDeleteOutline size={17} />
                </span>
                Hapus
              </a>
            </li>
            <li>
              <a>
                <span>
                  <FiCheckCircle size={17} />
                </span>
                Persiapan
              </a>
            </li>
            <li>
              <a>
                <span>
                  <GiChicken size={17} />
                </span>
                Chick in
              </a>
            </li>
          </ul>
        </div>
      </td>
    </tr>
  );
};

export default ProjectItem;
