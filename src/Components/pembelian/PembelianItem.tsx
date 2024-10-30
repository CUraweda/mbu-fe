import React from "react";
import {
  MdOutlineEdit,
  MdDeleteOutline,
  MdOutlineRemoveRedEye,
  MdOutlinePayment,
} from "react-icons/md";
import { RiArrowGoBackFill } from "react-icons/ri";

interface PembelianItemProps {
  id: string;
  noPR: string;
  vendor: string;
  namaPengaju: string;
  departemen: string;
  tanggal: string;
  status: string;
  total: number;
  isChecked: boolean;
  onCheckboxChange: () => void;
}

const PembelianItem: React.FC<PembelianItemProps> = ({
  noPR,
  vendor,
  namaPengaju,
  departemen,
  tanggal,
  status,
  total,
  isChecked,
  onCheckboxChange,
}) => {
  const getStatusClass = () => {
    switch (status) {
      case "Dibayar":
        return "bg-blue-100 text-blue-500";
      case "Produk Diterima":
        return "bg-green-100 text-green-500";
      default:
        return "bg-gray-100 text-gray-500";
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
      <td className="px-4 py-2">{noPR}</td>
      <td className="px-4 py-2">{vendor}</td>
      <td className="px-4 py-2">{namaPengaju}</td>
      <td className="px-4 py-2">{departemen}</td>
      <td className="px-4 py-2">{tanggal}</td>
      <td className="px-4 py-2">
        <div
          className={`px-3 py-1 text-center rounded-full text-sm font-semibold ${getStatusClass()}`}
        >
          {status}
        </div>
      </td>
      <td className="px-4 py-2">
        {total.toLocaleString("id-ID", { style: "currency", currency: "IDR" })}
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
            <li>
              <a>
                <span>
                  <MdOutlineRemoveRedEye size={17} />
                </span>
                Lihat Detail
              </a>
            </li>
            <li>
              <a>
                <span>
                  <RiArrowGoBackFill size={17} />
                </span>
                Retur
              </a>
            </li>
            <li>
              <a>
                <span>
                  <MdOutlinePayment size={17} />
                </span>
                Buat Pembayaran
              </a>
            </li>
          </ul>
        </div>
      </td>
    </tr>
  );
};

export default PembelianItem;
