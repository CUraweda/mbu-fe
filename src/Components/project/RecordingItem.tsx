import React from "react";
import { MdDeleteOutline, MdOutlineEdit } from "react-icons/md";

interface RecordingItemProps {
  projectId: number;
  waktuRecording: string;
  lokasi: string;
  status: string;
  kecepatanWaktu: string;
  isChecked: boolean;
  onCheckboxChange: () => void;
}

const ProjectItem: React.FC<RecordingItemProps> = ({
  projectId,
  waktuRecording,
  lokasi,
  status,
  kecepatanWaktu,
  isChecked,
  onCheckboxChange,
}) => {
  const getstatus = () => {
    switch (status) {
      case "Sudah":
        return "bg-[#E4FFBD] text-[#12B906]";
      case "Belum":
        return "bg-[#FFDFBE] text-[#EC8917]";
    }
  };

  const getkecepatanWaktu = () => {
    switch (kecepatanWaktu) {
      case "Pengajuan":
        return "bg-[#FFF7C7] text-[#C9C311]";
      case "Persiapan":
        return "bg-[#FFDADB] text-[#BE0407]";
      case "Aktif":
        return "bg-[#F9E5FF] text-[#E308E6]";
      case "Selesai":
        return "bg-[#D0F0FF] text-[#15B5FF]";
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
      <td className="px-4 py-2">{projectId}</td>
      <td className="px-4 py-2">{waktuRecording}</td>
      <td className="px-4 py-2">{lokasi}</td>
      <td className="px-4 py-2">
        <div
          className={`px-3 py-1 text-center rounded-md text-sm font-semibold ${getstatus()}`}
        >
          {status}
        </div>
      </td>
      <td className="px-4 py-2">
        <div
          className={`px-3 py-1 text-center rounded-md text-sm font-semibold ${getkecepatanWaktu()}`}
        >
          {kecepatanWaktu}
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
          </ul>
        </div>
      </td>
    </tr>
  );
};

export default ProjectItem;
