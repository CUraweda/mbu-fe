import React from "react";
import { FiCheckCircle } from "react-icons/fi";
import { MdDeleteOutline, MdOutlineEdit } from "react-icons/md";
import { useNavigate } from "react-router-dom";

interface PersiapanItemProps {
  id: number;
  unitBisnis: string;
  produk: string;
  lokasi: string;
  kandang: string;
  periode: number;
  statusProject: string;
  statusPersiapan: string;
  aktual: number;
  isChecked: boolean;
  onCheckboxChange: () => void;
}

const PersiapanItem: React.FC<PersiapanItemProps> = ({
  id,
  unitBisnis,
  produk,
  lokasi,
  kandang,
  periode,
  statusProject,
  statusPersiapan,
  aktual,
  isChecked,
  onCheckboxChange,
}) => {
  const navigate = useNavigate();

  const getStatusProjectClass = () => {
    switch (statusProject) {
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
    switch (statusPersiapan) {
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
          className="h-4 w-4 cursor-pointer"
        />
      </td>
      <td className="px-4 py-2">{id}</td>
      <td className="px-4 py-2">{unitBisnis}</td>
      <td className="px-4 py-2">{produk}</td>
      <td className="px-4 py-2">{lokasi}</td>
      <td className="px-4 py-2">{kandang}</td>
      <td className="px-4 py-2">{periode}</td>

      {/* Status Project Display */}
      <td className="px-4 py-2">
        <div
          className={`px-3 py-1 text-center rounded-md text-sm font-semibold ${getStatusProjectClass()}`}
        >
          {statusProject}
        </div>
      </td>

      {/* Status Persiapan Display */}
      <td className="px-4 py-2">
        <div
          className={`px-3 py-1 text-center rounded-md text-sm font-semibold ${getStatusPersiapanClass()}`}
        >
          {statusPersiapan}
        </div>
      </td>

      <td className="px-4 py-2">{aktual}</td>
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
