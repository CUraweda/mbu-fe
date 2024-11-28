const DetailRecordingApproval = () => {
    return (
      <div className="w-full h-full max-w-screen-xl p-4 mx-auto overflow-y-auto bg-white rounded-lg">
        <div
          className="h-full p-4 overflow-y-auto"
          style={{ maxHeight: "calc(100vh - 200px)" }}
        >
          <h2 className="mb-4 text-2xl font-semibold text-blue-500">
            Detail Recording
          </h2>
          <table className="w-full mb-4 text-lg border border-collapse">
            <thead>
              <tr className="text-left bg-blue-100">
                <th className="p-2 border">Stock Sebelumnya</th>
                <th className="p-2 border">Stock Digunakan</th>
                <th className="p-2 border">Sisa Stock</th>
                <th className="p-2 border">Total Penggunaan</th>
                <th className="p-2 border">Satuan</th>
                <th className="p-2 text-center border">Edit</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="p-2 border">250</td>
                <td className="p-2 border">50</td>
                <td className="p-2 border">200</td>
                <td className="p-2 border">50</td>
                <td className="p-2 border">Kg</td>
                <td className="p-2 text-center border">✎</td>
              </tr>
            </tbody>
          </table>
  
          <h3 className="mt-6 mb-4 text-2xl font-semibold text-blue-500">
            Body Weight
          </h3>
          <table className="w-full mb-4 text-lg border border-collapse">
            <thead>
              <tr className="text-left bg-blue-100">
                <th className="p-2 border">Usia Ayam (hari)</th>
                <th className="p-2 border">Bobot Rata-rata</th>
                <th className="p-2 border">Satuan</th>
                <th className="p-2 text-center border">Edit</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="p-2 border">5</td>
                <td className="p-2 border">400</td>
                <td className="p-2 border">Gram</td>
                <td className="p-2 text-center border">✎</td>
              </tr>
            </tbody>
          </table>
  
          <h3 className="mt-6 mb-4 text-2xl font-semibold text-blue-500">OVK</h3>
          <table className="w-full mb-4 text-lg border border-collapse">
            <thead>
              <tr className="text-left bg-blue-100">
                <th className="p-2 border">Item</th>
                <th className="p-2 border">Stock Sebelumnya</th>
                <th className="p-2 border">Stock Digunakan</th>
                <th className="p-2 border">Sisa Stock</th>
                <th className="p-2 border">Total Penggunaan</th>
                <th className="p-2 border">Satuan</th>
                <th className="p-2 text-center border">Edit</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="p-2 border">Obat 1</td>
                <td className="p-2 border">100</td>
                <td className="p-2 border">5</td>
                <td className="p-2 border">95</td>
                <td className="p-2 border">15</td>
                <td className="p-2 border">Milliliter</td>
                <td className="p-2 text-center border">✎</td>
              </tr>
              <tr>
                <td className="p-2 border">Obat 2</td>
                <td className="p-2 border">150</td>
                <td className="p-2 border">10</td>
                <td className="p-2 border">140</td>
                <td className="p-2 border">25</td>
                <td className="p-2 border">Milliliter</td>
                <td className="p-2 text-center border">✎</td>
              </tr>
            </tbody>
          </table>
  
          <h3 className="mt-6 mb-4 text-2xl font-semibold text-blue-500">
            Deplesi
          </h3>
          <table className="w-full text-lg border border-collapse">
            <thead>
              <tr className="text-left bg-blue-100">
                <th className="p-2 border">Usia Ayam (hari)</th>
                <th className="p-2 border">Mati</th>
                <th className="p-2 border">Culling</th>
                <th className="p-2 border">Afkir</th>
                <th className="p-2 border">Total Deplesi</th>
                <th className="p-2 border">Total Deplesi Keseluruhan</th>
                <th className="p-2 border">Satuan</th>
                <th className="p-2 text-center border">Edit</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="p-2 border">5</td>
                <td className="p-2 border">75</td>
                <td className="p-2 border">20</td>
                <td className="p-2 border">0</td>
                <td className="p-2 border">95</td>
                <td className="p-2 border">250</td>
                <td className="p-2 border">Ekor</td>
                <td className="p-2 text-center border">✎</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="my-4 flex justify-end gap-4">
            <button className="btn bg-orange-500 text-white w-32 hover:bg-orange-600">
              Tolak
            </button>
            <button className="btn btn-success w-32 text-white">Setujui</button>
          </div>
      </div>
    );
  };
  
  export default DetailRecordingApproval;
  
