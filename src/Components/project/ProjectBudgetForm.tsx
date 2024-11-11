import React from "react";
import { FaArrowLeft, FaArrowRight, FaRegTrashAlt } from "react-icons/fa";
import { FiPlusCircle } from "react-icons/fi";
import budgetData from "../../Data/budgetData";

interface Anggaran {
  id: number;
  item: string;
  qty: string;
  hargaSatuan: string;
  totalAnggaran: string;
}

const ProjectBudgetForm = () => {
  const [anggaranItems, setAnggaranItems] =
    React.useState<Anggaran[]>(budgetData);

  const handleDeleteAnggaran = (id: number) => {
    setAnggaranItems((prevItems) => prevItems.filter((item) => item.id !== id));
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

  const handleChange = (id: number, field: keyof Anggaran, value: string) => {
    setAnggaranItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, [field]: value } : item
      )
    );
  };

  return (
    <div>
      <h2 className="m-5 text-2xl font-semibold">Anggaran</h2>
      <div className="flex flex-col m-5 gap-x-10 gap-y-3 md:flex-row">
        <div className="flex flex-row items-center gap-4">
          <label htmlFor="targetFcr" className="min-w-max">
            Target FCR
          </label>
          <select
            id="targetFcr"
            className="block px-2 py-1 mt-1 border border-gray-300 rounded-sm shadow-sm w-60 focus:ring-primary"
          >
            <option value=""></option>
            <option value="Parent Stock">Parent Stock</option>
          </select>
        </div>
        <div className="flex flex-row items-center gap-4">
          <label htmlFor="targetNortalitas" className="min-w-max">
            Target Mortalitas
          </label>
          <select
            id="targetNortalitas"
            className="block px-2 py-1 mt-1 border border-gray-300 rounded-sm shadow-sm w-60 focus:ring-primary"
          >
            <option value=""></option>
            <option value="Parent Stock">Parent Stock</option>
          </select>
        </div>
      </div>

      {/* Tabel Anggaran */}
      <table className="min-w-full mt-4" style={{ border: "none" }}>
        <thead className="text-center text-white bg-primary">
          <tr>
            <th className="py-2">Item</th>
            <th className="py-2">Qty</th>
            <th className="py-2">Harga Satuan (Rp)</th>
            <th className="py-2">Total Anggaran (Rp)</th>
            <th className="py-2"></th>
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
                  className="px-3 py-1"
                >
                  <FaRegTrashAlt className="text-red-500" />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="flex flex-col items-start gap-3 mx-4 mt-3 md:flex-row md:items-center md:justify-between">
        <button
          onClick={handleAddRowAnggaran}
          className="flex gap-2 px-4 py-2 border border-gray-300 rounded-md w-fit text-primary hover:bg-gray-100"
        >
          Tambah Item Anggaran <FiPlusCircle size={24} />
        </button>

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
      <p className="mt-6 ml-5">Total Anggaran: Rp. 147,000,000.00</p>
    </div>
  );
};

export default ProjectBudgetForm;
