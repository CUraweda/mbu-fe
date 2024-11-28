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

const EditChickinForm = () => {
  const [items, setItems] = React.useState<Farm[]>(farmData);

  const handleAddRow = () => {
    const newItem: Farm = {
      id: items.length > 0 ? items[items.length - 1].id + 1 : 1,
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
              <th className="px-3 py-2 text-gray-600">No Surat Jalan</th>
              <th className="px-3 py-2 text-gray-600">Tanggal Chick in</th>
              <th className="px-3 py-2 text-gray-600">Jenis DOC</th>
              <th className="px-3 py-2 text-gray-600">Supplier</th>
              <th className="px-3 py-2 text-gray-600">Hatchery</th>
              <th className="px-3 py-2 text-gray-600">Jumlah (ekor)</th>
            </tr>
          </thead>
          <tbody className="text-center ">
            {items.map((item) => (
              <tr key={item.id}>
                <td className="p-2 text-gray-700">
                  <input
                    type="text"
                    value={item.kapasitas}
                    className="w-full px-2 py-1 text-gray-700 bg-gray-100 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </td>
                <td className="p-2 text-gray-700">
                  <input
                    type="date"
                    value={item.kapasitas}
                    className="w-full px-2 py-1 text-gray-700 bg-gray-100 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </td>
                <td className="p-2 text-gray-700">
                  <select
                    value={item.jenisFarm}
                    className="w-full px-2 py-1 text-gray-700 bg-gray-100 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-primary"
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
                    className="w-full px-2 py-1 text-gray-700 bg-gray-100 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-primary"
                    disabled
                  />
                </td>
                <td className="p-2 text-gray-700">
                  <select
                    value={item.penanggungJawab}
                    className="w-full px-2 py-1 text-gray-700 bg-gray-100 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-primary"
                  >
                    <option value="Sugiarto">Sugiarto</option>
                    <option value="Sugiarto">Sugiarto</option>
                    {/* Add other options here */}
                  </select>
                </td>
                <td className="p-2">
                  <input
                    type="text"
                    value={item.periode}
                    className="w-full px-2 py-1 text-gray-700 bg-gray-100 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <button onClick={handleAddRow} className="px-4 py-2 text-primary">
          <FiPlusCircle className="text-primary-dark" size={24} />
        </button>
      </div>
    </div>
  );
};

export default EditChickinForm;
