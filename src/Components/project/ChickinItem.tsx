import React from "react";
import { FiCheckCircle } from "react-icons/fi";
import { GiChicken } from "react-icons/gi";
import { MdDeleteOutline, MdOutlineEdit } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { Project } from "../../Data/types/projectType";

interface ChickinItemProps extends Project {
  isChecked: boolean;
  onCheckboxChange: () => void;
}

const ProjectItem: React.FC<ChickinItemProps> = ({
  id_project,
  bussines_unit,
  product,
  area,
  location,
  project_farms,
  status_chick_in_id,
  status,
  isChecked,
  onCheckboxChange,
}) => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate("/chickin/add");
  };

  const editNavigate = () => {
    navigate("/chickin/edit");
  };

  const getStatusChickin = () => {
    switch (status_chick_in_id) {
      case 1:
        return "bg-[#E4FFBD] text-[#12B906]";
      case 0:
        return "bg-[#FFDFBE] text-[#EC8917]";
      default:
        return "";
    }
  };

  const getStatusProject = () => {
    switch (status.name) {
      case "Pengajuan":
        return "bg-[#FFF7C7] text-[#C9C311]";
      case "Persiapan":
        return "bg-[#FFDADB] text-[#BE0407]";
      case "Aktif":
        return "bg-[#F9E5FF] text-[#E308E6]";
      case "Selesai":
        return "bg-[#D0F0FF] text-[#15B5FF]";
      default:
        return "bg-[#DBDBDB] ";
    }
  };

  return (
    <tr className="overflow-x-auto text-base text-center border-b">
      <td>
        <input
          type="checkbox"
          checked={isChecked}
          onChange={onCheckboxChange}
        />
      </td>
      <td className="px-4 py-2">{id_project}</td>
      <td className="px-4 py-2">{bussines_unit.name}</td>
      <td className="px-4 py-2">{product}</td>
      <td className="px-4 py-2">{area.name}</td>
      <td className="px-4 py-2">{location.name}</td>
      <td className="px-4 py-2">{project_farms[0]?.farms.name}</td>
      <td className="px-4 py-2">{project_farms[0]?.farms.capacity}</td>
      <td className="px-4 py-2">{project_farms[0]?.farms.period}</td>
      <td className="px-4 py-2">
        <div
          className={`px-3 py-1 text-center rounded-md text-sm font-semibold ${getStatusChickin()}`}
        >
          {status_chick_in_id === 1 ? "Sudah" : "Belum"}
        </div>
      </td>
      <td className="px-4 py-2">
        <div
          className={`px-3 py-1 text-center rounded-md text-sm font-semibold ${getStatusProject()}`}
        >
          {status.name === "Belum Selesai" ? "" : status.name}
        </div>
      </td>
      <td className="px-4 py-2 text-center">
        <div className="dropdown dropdown-left dropdown-end">
          <div tabIndex={0} role="button" className="m-1 rotate-90">
            ...
          </div>
          <ul
            tabIndex={0}
            className="z-10 p-2 mr-2 border shadow dropdown-content menu bg-base-100 rounded-box w-52 border-slate-200"
          >
            <li>
              <a onClick={editNavigate}>
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
              <a onClick={handleNavigate}>
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
