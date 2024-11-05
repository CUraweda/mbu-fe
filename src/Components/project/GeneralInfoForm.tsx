import React from "react";
import { FaRegTrashAlt } from "react-icons/fa";
import faseData from "../../Data/faseData";
import { FiPlusCircle } from "react-icons/fi";

interface Fase {
  id: number;
  fase: string;
  tanggalMulai: string;
  tanggalSelesai: string;
  statusFase: string;
}

const GeneralInfoForm: React.FC = () => {
  const [items, setItems] = React.useState<Fase[]>(faseData);

  const getstatusFaseFase = (statusFase: string) => {
    switch (statusFase) {
      case "Dalam Proses":
        return "bg-[#E4FFBD] text-[#12B906]";
      case "Belum Mulai":
        return "bg-[#FFDFBE] text-[#EC8917]";
      default:
        return "bg-[#D0F0FF] text-[#15B5FF]";
    }
  };

  const handleDelete = (id: number) => {
    setItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  const handleAddRow = () => {
    const newId = items.length > 0 ? items[items.length - 1].id + 1 : 1;
    const newItem: Fase = {
      id: newId,
      fase: "",
      tanggalMulai: "",
      tanggalSelesai: "",
      statusFase: "Belum Mulai",
    };
    setItems((prevItems) => [...prevItems, newItem]);
  };

  return (
    <div>
      <div className="grid grid-cols-2 gap-4 pb-3 m-5 md:grid-cols-3 xl:grid-cols-5">
        <div>
          <label htmlFor="idProject">Id Project</label>
          <input
            type="text"
            id="idProject"
            className="block w-full px-2 py-1 mt-1 border border-gray-300 rounded-sm shadow-sm focus:ring-primary"
          />
        </div>

        <div>
          <label htmlFor="unitBisnis">Unit Bisnis</label>
          <input
            type="text"
            id="unitBisnis"
            className="block w-full px-2 py-1 mt-1 border border-gray-300 rounded-sm shadow-sm focus:ring-primary"
          />
        </div>

        <div>
          <label htmlFor="area">Area</label>
          <select
            id="area"
            className="block w-full px-2 py-1 mt-1 border border-gray-300 rounded-sm shadow-sm focus:ring-primary"
          >
            <option value="">Pilih Area</option>
            <option value="Priangan">Priangan</option>
            <option value="Sunda">Sunda</option>
            <option value="Jawa">Jawa</option>
          </select>
        </div>

        <div>
          <label htmlFor="lokasi">Lokasi</label>
          <select
            id="lokasi"
            className="block w-full px-2 py-1 mt-1 border border-gray-300 rounded-sm shadow-sm focus:ring-primary"
          >
            <option value="">Pilih Lokasi</option>
            <option value="Pangandaran">Pangandaran</option>
            <option value="Bandung">Bandung</option>
            <option value="Jakarta">Jakarta</option>
          </select>
        </div>

        <div>
          <label htmlFor="produk">Produk</label>
          <select
            id="produk"
            className="block w-full px-2 py-1 mt-1 border border-gray-300 rounded-sm shadow-sm focus:ring-primary"
          >
            <option value="">Pilih Produk</option>
            <option value="Parent Stock">Parent Stock</option>
            <option value="Broiler">Broiler</option>
            <option value="Layer">Layer</option>
          </select>
        </div>
      </div>

      <hr />

      <div className="col-span-2 mt-4 md:col-span-3 xl:col-span-5">
        <table className="min-w-full" style={{ border: "none" }}>
          <thead className="text-center ">
            <tr>
              <th className="px-4 py-2 text-gray-600">No.</th>
              <th className="px-4 py-2 text-gray-600">Fase</th>
              <th className="px-4 py-2 text-gray-600">
                Estimasi Tanggal Mulai
              </th>
              <th className="px-4 py-2 text-gray-600">
                Estimasi Tanggal Selesai
              </th>
              <th className="px-4 py-2 text-gray-600">Status Fase</th>
              <th className="px-4 py-2 text-gray-600"></th>
            </tr>
          </thead>
          <tbody className="text-center ">
            {items.map((item) => (
              <tr key={item.id}>
                <td className="px-4 text-gray-700">{item.id}</td>
                <td className="p-2 text-gray-700">
                  <select
                    // value={item.fase}
                    className="w-full px-2 py-1 text-gray-700 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-primary"
                  >
                    <option value="DOC CP Vaksin">DOC CP Vaksin</option>
                    <option value="Pakan Starter">Pakan Starter</option>
                    {/* Add other options here */}
                  </select>
                </td>
                <td className="p-2 text-gray-700">
                  <input
                    type="date"
                    // value={item.tanggalMulai}
                    className="w-full px-2 py-1 text-gray-700 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </td>
                <td className="p-2 text-gray-700">
                  <input
                    type="date"
                    // value={item.tanggalSelesai}
                    className="w-full px-2 py-1 text-gray-700 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </td>
                <td>
                  <div
                    className={`px-3 py-2 text-center rounded-md text-sm font-semibold ${getstatusFaseFase(
                      item.statusFase
                    )}`}
                  >
                    {item.statusFase}{" "}
                  </div>
                </td>
                <td className="p-2">
                  <button
                    onClick={() => handleDelete(item.id)}
                    className="px-3 py-1"
                  >
                    <FaRegTrashAlt className="text-red-500" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <button
          onClick={handleAddRow}
          className="px-4 py-2 ml-14 xl:ml-20 text-primary"
        >
          <FiPlusCircle size={24} />
        </button>
      </div>
    </div>
  );
};

export default GeneralInfoForm;
