import React from "react";
import { FaArrowLeft, FaArrowRight, FaRegTrashAlt } from "react-icons/fa";
import { FiPlusCircle } from "react-icons/fi";
import budgetData from "../../../Data/budgetData";
import DataSelector from "../../DataSelector";
import faseData from "../../../Data/faseData";

interface Anggaran {
  id: number;
  item: string;
  qty: string;
  hargaSatuan: string;
  totalAnggaran: string;
}

interface Fase {
  id: number;
  fase: string;
  tanggalMulai: string;
  tanggalSelesai: string;
  statusFase: string;
}

const BudgetApprovalItem = () => {
  const [anggaranItems, setAnggaranItems] =
    React.useState<Anggaran[]>(budgetData);
  const [items, setItems] = React.useState<Fase[]>(faseData);

  const getstatusFase = (statusFase: string) => {
    switch (statusFase) {
      case "Dalam Proses":
        return "bg-[#E4FFBD] text-[#12B906]";
      case "Belum Mulai":
        return "bg-[#FFDFBE] text-[#EC8917]";
      default:
        return "bg-[#D0F0FF] text-[#15B5FF]";
    }
  };

  const handleDeleteAnggaran = (id: number) => {
    setAnggaranItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  const handleDeleteFase = (id: number) => {
    setItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  const handleAddRowAnggaran = () => {
    const newId =
      anggaranItems.length > 0
        ? anggaranItems[anggaranItems.length - 1].id + 1
        : 1;
    const newAnggaranItem: Anggaran = {
      id: newId,
      item: "",
      qty: "",
      hargaSatuan: "",
      totalAnggaran: "",
    };
    setAnggaranItems((prevItems) => [...prevItems, newAnggaranItem]);
  };

  const handleAddRowFase = () => {
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

  const handleChange = (id: number, field: keyof Anggaran, value: string) => {
    setAnggaranItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, [field]: value } : item,
      ),
    );
  };

  return (
    <div>
      <div className="flex flex-col items-center mb-5 gap-x-2 gap-y-3 md:flex-row">
        <DataSelector options={[10, 20, 30, 40, 50]} defaultValue={10} />
        <input
          type="text"
          className="px-2 py-1 border border-gray-300 rounded-md shadow-sm w-60"
        />
        <select
          id="targetFcr"
          className="block px-2 py-1 border border-gray-300 rounded-md shadow-sm w-60 focus:ring-primary"
        >
          <option value="" disabled selected>
            Target FCR
          </option>
          <option value="Parent Stock">Parent Stock</option>
        </select>
        <select
          id="targetNortalitas"
          className="block px-2 py-1 border border-gray-300 rounded-md shadow-sm w-60 focus:ring-primary"
        >
          <option value="" disabled selected>
            Target Deplesi
          </option>
          <option value="Parent Stock">Parent Stock</option>
        </select>
      </div>

      {/* Fase::START */}
      <div className="overflow-hidden bg-white rounded-md">
        <table className="min-w-full" style={{ border: "none" }}>
          <thead className="text-center">
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
                    className={`px-3 py-2 text-center rounded-md text-sm font-semibold ${getstatusFase(
                      item.statusFase,
                    )}`}
                  >
                    {item.statusFase}{" "}
                  </div>
                </td>
                <td className="p-2">
                  <button
                    onClick={() => handleDeleteFase(item.id)}
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
          onClick={handleAddRowFase}
          className="px-4 py-2 ml-14 xl:ml-20 text-primary"
        >
          <FiPlusCircle size={24} />
        </button>
      </div>
      {/* Fase::END */}

      {/* Anggaran::START */}
      <table
        className="min-w-full mt-4 overflow-hidden bg-white rounded-md"
        style={{ border: "none" }}
      >
        <thead className="text-center text-white bg-primary">
          <tr>
            <th className="px-8 py-2">Item</th>
            <th className="px-8 py-2">Qty</th>
            <th className="px-8 py-2">Harga Satuan (Rp)</th>
            <th className="px-8 py-2">Total Anggaran (Rp)</th>
            <th className="px-8 py-2"></th>
          </tr>
        </thead>
        <tbody className="text-center">
          {anggaranItems.map((item) => (
            <tr key={item.id}>
              <td className="px-4 py-2 text-gray-700">
                <input
                  type="text"
                  value={item.item}
                  onChange={(e) =>
                    handleChange(item.id, "item", e.target.value)
                  }
                  className="w-full px-2 py-1 text-gray-700 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </td>
              <td className="p-2 text-gray-700">
                <input
                  type="text"
                  value={item.qty}
                  onChange={(e) => handleChange(item.id, "qty", e.target.value)}
                  className="w-full px-2 py-1 text-gray-700 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </td>
              <td className="p-2 text-gray-700">
                <input
                  type="text"
                  value={item.hargaSatuan}
                  onChange={(e) =>
                    handleChange(item.id, "hargaSatuan", e.target.value)
                  }
                  className="w-full px-2 py-1 text-gray-700 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </td>
              <td className="p-2 text-gray-700">
                <input
                  type="text"
                  value={item.totalAnggaran}
                  onChange={(e) =>
                    handleChange(item.id, "totalAnggaran", e.target.value)
                  }
                  className="w-full px-2 py-1 text-gray-700 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </td>
              <td className="p-2">
                <button
                  onClick={() => handleDeleteAnggaran(item.id)}
                  className="px-2 py-2 bg-red-500 rounded-full"
                >
                  <FaRegTrashAlt className="text-white" size={14} />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {/* Anggaran::END */}

      <button
        onClick={handleAddRowAnggaran}
        className="flex gap-2 p-2 mt-4 mb-8 bg-white border rounded-full shadow-lg w-fit text-primary-dark hover:bg-gray-100"
      >
        <FiPlusCircle size={20} />
      </button>
      <div className="flex flex-col items-center gap-3 my-4 md:flex-row md:justify-between">
        <p className="font-semibold">Total Anggaran: Rp. 147,000,000.00</p>

        {/* Pagination */}
        <div className="">
          <div className="flex items-center justify-center md:justify-end">
            <button className="flex items-center gap-5 mx-2 text-primary hover:bg-transparent">
              <FaArrowLeft size={18} className="text-primary" />
              <div className="flex text-center">Prev</div>
            </button>
            <span className="mx-2 text-primary">1 of 2</span>
            <button className="flex items-center gap-5 mx-2 text-primary hover:bg-transparent">
              <div className="flex text-center">Next</div>
              <FaArrowRight size={18} className="text-primary" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BudgetApprovalItem;
