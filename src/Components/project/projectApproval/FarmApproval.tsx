import farmData from "../../../Data/farmInfoData";

const FarmApproval = () => {
  const items = farmData;
  return (
    <div className="mx-5">
      <table className="min-w-full" style={{ border: "none" }}>
        <thead className="text-left ">
          <tr>
            <th className="px-3 py-2 text-gray-600">Nama Kandang</th>
            <th className="px-3 py-2 text-gray-600">Kapasitas</th>
            <th className="px-3 py-2 text-gray-600">Jenis Farm</th>
            <th className="px-3 py-2 text-gray-600">Periode</th>
            <th className="px-3 py-2 text-gray-600">Penanggung Jawab</th>
          </tr>
        </thead>
        <tbody className="text-center ">
          {items.map((item) => (
            <tr key={item.id}>
              <td className="p-2 text-gray-700">
                <select
                  disabled
                  value={item.namaKandang}
                  className="w-full px-2 py-1 text-gray-700 bg-gray-100 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-primary"
                >
                  <option value="Pangandaran 1">Pangandaran 1</option>
                  <option value="Pangandaran 2">Pangandaran 2</option>
                  {/* Add other options here */}
                </select>
              </td>
              <td className="p-2 text-gray-700">
                <input
                  disabled
                  type="text"
                  value={item.kapasitas}
                  className="w-full px-2 py-1 text-gray-700 bg-gray-100 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </td>
              <td className="p-2 text-gray-700">
                <select
                  disabled
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
                  disabled
                  type="text"
                  value={item.periode}
                  className="w-full px-2 py-1 text-gray-700 bg-gray-100 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </td>
              <td className="p-2 text-gray-700">
                <select
                  disabled
                  value={item.penanggungJawab}
                  className="w-full px-2 py-1 text-gray-700 bg-gray-100 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-primary"
                >
                  <option value="Sugiarto">Sugiarto</option>
                  <option value="Sugiarto">Sugiarto</option>
                  {/* Add other options here */}
                </select>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default FarmApproval;
