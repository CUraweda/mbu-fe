import React from "react";
import { FiCheckCircle } from "react-icons/fi";
// import { GiChicken } from "react-icons/gi";
import { MdDeleteOutline, MdOutlineEdit } from "react-icons/md";

interface ProjectItemProps {
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

const ProjectItem: React.FC<ProjectItemProps> = ({
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
  const getStatusProject = () => {
    switch (statusProject) {
      case "Persiapan":
        return "bg-[#FFDADB] text-[#BE0407]";
      case "Aktif":
        return "bg-[#F9E5FF] text-[#E308E6]";
      case "Selesai":
        return "bg-[#D0F0FF] text-[#15B5FF]";
    }
  };

  const getStatusPersiapan = () => {
    switch (statusPersiapan) {
      case "Belum Selesai":
        return "bg-[#FFDFBE] text-[#EC8917]";
      case "Tercapai":
        return "bg-[#E4FFBD] text-[#12B906]";
      case "Tidak Tercapai":
        return "bg-[#FFDADB] text-[#BE0407]";
      case "Menunggu Persetujuan":
        return "bg-[#FFF7C7] text-[#C9C311]";
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
      <td className="px-4 py-2">{id}</td>
      <td className="px-4 py-2">{unitBisnis}</td>
      <td className="px-4 py-2">{produk}</td>
      <td className="px-4 py-2">{lokasi}</td>
      <td className="px-4 py-2">{kandang}</td>
      <td className="px-4 py-2">{periode}</td>
      <td className="px-4 py-2">
        <div
          className={`px-3 py-1 text-center rounded-md text-sm font-semibold ${getStatusProject()}`}
        >
          {statusProject}
        </div>
      </td>
      <td className="px-4 py-2">
        <div
          className={`px-3 py-1 text-center rounded-md text-sm font-semibold ${getStatusPersiapan()}`}
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
              <a>
                <span>
                  <FiCheckCircle size={17} />
                </span>
                Lanjutan Persiapan
              </a>
            </li>
            {/* <li>
              <a>
                <span>
                  <GiChicken size={17} />
                </span>
                Chick in
              </a>
            </li> */}
          </ul>
        </div>
      </td>
    </tr>
  );
};

export default ProjectItem;
