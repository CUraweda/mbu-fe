import React from "react";
import { FiCheckCircle } from "react-icons/fi";
import { MdDeleteOutline, MdOutlineEdit } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { ProjectPreparationsResponse } from "@/Data/types/response.type";

interface PreparationItemProps extends ProjectPreparationsResponse {
  isChecked: boolean;
  onCheckboxChange: () => void;
}

const PersiapanItem: React.FC<PreparationItemProps> = ({
  id_project,
  bussines_unit,
  product,
  area,
  location,
  farm,
  period,
  status_project,
  status_preparation,
  isChecked,
  onCheckboxChange,
}) => {
  const navigate = useNavigate();

  const getStatusProjectClass = () => {
    switch (status_project) {
      case "Persiapan":
        return "bg-[#FFDADB] text-[#BE0407]";
      case "Aktif":
        return "bg-[#F9E5FF] text-[#E308E6]";
      case "Selesai":
        return "bg-[#D0F0FF] text-[#15B5FF]";
      case "Pengajuan":
        return "bg-[#FFF7C7] text-[#C9C311]";
      default:
        return "";
    }
  };

  const getStatusPersiapanClass = () => {
    switch (status_preparation) {
      case "Belum Selesai":
        return "bg-[#FFDFBE] text-[#EC8917]";
      case "Tercapai":
        return "bg-[#E4FFBD] text-[#12B906]";
      case "Tidak Tercapai":
        return "bg-[#FFDADB] text-[#BE0407]";
      default:
        return "";
    }
  };

  const handleNavigate = () => {
    navigate("/form-persiapan");
  };

  return (
    <tr className="text-base text-center border-b">
      <td className="px-4 py-2">
        <input
          type="checkbox"
          checked={isChecked}
          onChange={onCheckboxChange}
          className="w-4 h-4 cursor-pointer"
        />
      </td>
      <td className="px-4 py-2">{id_project}</td>
      <td className="px-4 py-2">{bussines_unit}</td>
      <td className="px-4 py-2">{product}</td>
      <td className="px-4 py-2">{area}</td>
      <td className="px-4 py-2">{location}</td>
      <td className="px-4 py-2">{farm}</td>
      <td className="px-4 py-2">{period}</td>

      {/* Status Project Dropdown */}
      <td className="relative px-4 py-2">
        <div
          className={`px-3 py-1 text-center rounded-md text-sm font-semibold ${getStatusProjectClass()} cursor-pointer`}
        >
          {status_project}
        </div>
      </td>

      {/* Status Persiapan Dropdown */}
      <td className="relative px-4 py-2">
        <div
          className={`px-3 py-1 text-center rounded-md text-sm font-semibold ${getStatusPersiapanClass()} cursor-pointer`}
        >
          {status_preparation}
        </div>
      </td>
      <td className="px-4 py-2">Waktu</td>

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
              <a onClick={handleNavigate}>
                <span>
                  <FiCheckCircle size={17} />
                </span>
                Lanjutan Persiapan
              </a>
            </li>
          </ul>
        </div>
      </td>
    </tr>
  );
};

export default PersiapanItem;
