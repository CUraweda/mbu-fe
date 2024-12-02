import React from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import budgetData from "@/Data/budgetData";

interface Anggaran {
  id: number;
  item: string;
  qty: string;
  hargaSatuan: string;
  totalAnggaran: string;
}

const BudgetApproval = () => {
  const [anggaranItems, setAnggaranItems] =
    React.useState<Anggaran[]>(budgetData);

  const handleChange = (id: number, field: string, value: string) => {
    setAnggaranItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, [field]: value } : item,
      ),
    );
  };

  return (
    <div>
      <h2 className="m-5 text-2xl font-semibold">Anggaran</h2>

      <table className="min-w-full mt-4" style={{ border: "none" }}>
        <thead className="text-center text-white bg-primary">
          <tr>
            <th className="py-2">Item</th>
            <th className="py-2">Qty</th>
            <th className="py-2">Harga Satuan (Rp)</th>
            <th className="py-2">Total Anggaran (Rp)</th>
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
            </tr>
          ))}
        </tbody>
      </table>

      {/* Pagination */}
      <div className="flex items-center justify-center mt-4 md:justify-end">
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

      <p className="mt-6 ml-5">Total Anggaran: Rp. 147,000,000.00</p>
    </div>
  );
};

export default BudgetApproval;
