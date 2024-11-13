import informasiUmum from "../../Data/informasiUmumPersiapan";

// interface Info {
//   id: number;
//   unitBisnis: string;
//   area: string;
//   lokasi: string;
//   produk: string;
//   namaKandang: string;
// }

const InformasiUmumForm = () => {
  // const [items, setItems] = React.useState<Info[]>(informasiUmum);
  const items = informasiUmum;

  return (
    <div>
      <div className="col-span-2 px-5 mt-4 md:col-span-3 xl:col-span-5">
        <table className="min-w-full" style={{ border: "none" }}>
          <thead className="text-left ">
            <tr>
              <th className="px-3 py-2 text-gray-600">Id Persiapan</th>
              <th className="px-3 py-2 text-gray-600">Unit Bisnis</th>
              <th className="px-3 py-2 text-gray-600">Area</th>
              <th className="px-3 py-2 text-gray-600">Lokasi</th>
              <th className="px-3 py-2 text-gray-600">Produk</th>
              <th className="px-3 py-2 text-gray-600">Nama Kandang</th>
              <th className="px-3 py-2 text-gray-600"></th>
            </tr>
          </thead>
          <tbody className="text-center ">
            {items.map((item) => (
              <tr key={item.id}>
                <td className="p-2 text-gray-700">
                  <input
                    type="text"
                    value={item.id}
                    className="w-full px-2 py-1 text-gray-700 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </td>
                <td className="p-2 text-gray-700">
                  <select
                    value={item.unitBisnis}
                    className="w-full px-2 py-1 text-gray-700 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-primary"
                  >
                    <option value="PT Mitra Berlian Unggas 1">
                      PT Mitra Berlian Unggas 1
                    </option>
                    <option value="PT Mitra Berlian Unggas 2">
                      PT Mitra Berlian Unggas 2
                    </option>
                    {/* Add other options here */}
                  </select>
                </td>
                <td className="p-2 text-gray-700">
                  <select
                    value={item.area}
                    className="w-full px-2 py-1 text-gray-700 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-primary"
                  >
                    <option value="Banten 1">Banten 1</option>
                    <option value="Banten 2">Banten 2</option>
                    {/* Add other options here */}
                  </select>
                </td>
                <td className="p-2 text-gray-700">
                  <select
                    value={item.lokasi}
                    className="w-full px-2 py-1 text-gray-700 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-primary"
                  >
                    <option value="Cimarga 1">Cimarga 1</option>
                    <option value="Cimarga 2">Cimarga 2</option>
                    {/* Add other options here */}
                  </select>
                </td>
                <td className="p-2 text-gray-700">
                  <select
                    value={item.produk}
                    className="w-full px-2 py-1 text-gray-700 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-primary"
                  >
                    <option value="Broiler 1">Broiler 1</option>
                    <option value="Broiler 2">Broiler 2</option>
                    {/* Add other options here */}
                  </select>
                </td>
                <td className="p-2 text-gray-700">
                  <select
                    value={item.namaKandang}
                    className="w-full px-2 py-1 text-gray-700 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-primary"
                  >
                    <option value="Cimarga 1">Cimarga 1</option>
                    <option value="Cimarga 2">Cimarga 2</option>
                    {/* Add other options here */}
                  </select>
                </td>
                {/* <td className="p-2">
                  <button
                    onClick={() => handleDelete(item.id)}
                    className="px-3 py-1"
                  >
                    <FaRegTrashAlt className="text-red-500" />
                  </button>
                </td> */}
              </tr>
            ))}
          </tbody>
        </table>
        {/* <button onClick={handleAddRow} className="px-4 py-2 text-primary">
          <FiPlusCircle size={24} />
        </button> */}
      </div>
    </div>
  );
};

export default InformasiUmumForm;
