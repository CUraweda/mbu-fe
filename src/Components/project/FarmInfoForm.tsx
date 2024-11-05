import { FaRegTrashAlt } from "react-icons/fa";
import { FiPlusCircle } from "react-icons/fi";
import farmData from "../../Data/farmInfoData";
import React from "react";

interface Farm {
  id: number;
  namaKandang: string;
  kapasitas: number;
  jenisFarm: string;
  periode: number;
  penanggungJawab: string;
}

const FarmInfoForm = () => {
  const [items, setItems] = React.useState<Farm[]>(farmData);
  const handleDelete = (id: number) => {
    setItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  const handleAddRow = () => {
    const newId = items.length > 0 ? items[items.length - 1].id + 1 : 1;
    const newItem: Farm = {
      namaKandang: "",
      kapasitas: 0,
      jenisFarm: "",
      periode: 0,
      penanggungJawab: "",
    };
    setItems((prevItems) => [...prevItems, newItem]);
  };

  return (
    <div>
      <div className="col-span-2 px-5 mt-4 md:col-span-3 xl:col-span-5">
        <table className="min-w-full" style={{ border: "none" }}>
          <thead className="text-left ">
            <tr>
              <th className="px-3 py-2 text-gray-600">Nama Kandang</th>
              <th className="px-3 py-2 text-gray-600">Kapasitas</th>
              <th className="px-3 py-2 text-gray-600">Jenis Farm</th>
              <th className="px-3 py-2 text-gray-600">Periode</th>
              <th className="px-3 py-2 text-gray-600">Penanggung Jawab</th>
              <th className="px-3 py-2 text-gray-600"></th>
            </tr>
          </thead>
          <tbody className="text-center ">
            {items.map((item) => (
              <tr key={item.id}>
                <td className="p-2 text-gray-700">
                  <select
                    value={item.namaKandang}
                    className="w-full px-2 py-1 text-gray-700 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-primary"
                  >
                    <option value="Pangandaran 1">Pangandaran 1</option>
                    <option value="Pangandaran 2">Pangandaran 2</option>
                    {/* Add other options here */}
                  </select>
                </td>
                <td className="p-2 text-gray-700">
                  <input
                    type="text"
                    value={item.kapasitas}
                    className="w-full px-2 py-1 text-gray-700 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </td>
                <td className="p-2 text-gray-700">
                  <select
                    value={item.jenisFarm}
                    className="w-full px-2 py-1 text-gray-700 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-primary"
                  >
                    <option value="Own Farm">Own Farm</option>
                    <option value="Own Farm">Own Farm</option>
                    {/* Add other options here */}
                  </select>
                </td>
                <td className="p-2 text-gray-700">
                  <input
                    type="text"
                    value={item.periode}
                    className="w-full px-2 py-1 text-gray-700 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </td>
                <td className="p-2 text-gray-700">
                  <select
                    value={item.penanggungJawab}
                    className="w-full px-2 py-1 text-gray-700 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-primary"
                  >
                    <option value="Sugiarto">Sugiarto</option>
                    <option value="Sugiarto">Sugiarto</option>
                    {/* Add other options here */}
                  </select>
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
        <button onClick={handleAddRow} className="px-4 py-2 text-primary">
          <FiPlusCircle size={24} />
        </button>
      </div>
    </div>
  );
};

export default FarmInfoForm;
