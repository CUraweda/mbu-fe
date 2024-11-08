import React from 'react';

const DetailRecording = () => {
  return (
    <div className="mx-auto w-full max-w-screen-xl h-full overflow-y-auto bg-white rounded-lg p-4">
      <div className="h-full p-4 overflow-y-auto" style={{ maxHeight: 'calc(100vh - 200px)' }}>
        <h2 className="text-2xl font-semibold text-blue-500 mb-4">Detail Recording</h2>
        <table className="w-full border-collapse border mb-4 text-lg">
          <thead>
            <tr className="bg-blue-100 text-left">
              <th className="border p-2">Stock Sebelumnya</th>
              <th className="border p-2">Stock Digunakan</th>
              <th className="border p-2">Sisa Stock</th>
              <th className="border p-2">Total Penggunaan</th>
              <th className="border p-2">Satuan</th>
              <th className="border p-2 text-center">Edit</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border p-2">250</td>
              <td className="border p-2">50</td>
              <td className="border p-2">200</td>
              <td className="border p-2">50</td>
              <td className="border p-2">Kg</td>
              <td className="border p-2 text-center">✎</td>
            </tr>
          </tbody>
        </table>

        <h3 className="text-2xl font-semibold text-blue-500 mt-6 mb-4">Body Weight</h3>
        <table className="w-full border-collapse border mb-4 text-lg">
          <thead>
            <tr className="bg-blue-100 text-left">
              <th className="border p-2">Usia Ayam (hari)</th>
              <th className="border p-2">Bobot Rata-rata</th>
              <th className="border p-2">Satuan</th>
              <th className="border p-2 text-center">Edit</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border p-2">5</td>
              <td className="border p-2">400</td>
              <td className="border p-2">Gram</td>
              <td className="border p-2 text-center">✎</td>
            </tr>
          </tbody>
        </table>

        <h3 className="text-2xl font-semibold text-blue-500 mt-6 mb-4">OVK</h3>
        <table className="w-full border-collapse border mb-4 text-lg">
          <thead>
            <tr className="bg-blue-100 text-left">
              <th className="border p-2">Item</th>
              <th className="border p-2">Stock Sebelumnya</th>
              <th className="border p-2">Stock Digunakan</th>
              <th className="border p-2">Sisa Stock</th>
              <th className="border p-2">Total Penggunaan</th>
              <th className="border p-2">Satuan</th>
              <th className="border p-2 text-center">Edit</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border p-2">Obat 1</td>
              <td className="border p-2">100</td>
              <td className="border p-2">5</td>
              <td className="border p-2">95</td>
              <td className="border p-2">15</td>
              <td className="border p-2">Milliliter</td>
              <td className="border p-2 text-center">✎</td>
            </tr>
            <tr>
              <td className="border p-2">Obat 2</td>
              <td className="border p-2">150</td>
              <td className="border p-2">10</td>
              <td className="border p-2">140</td>
              <td className="border p-2">25</td>
              <td className="border p-2">Milliliter</td>
              <td className="border p-2 text-center">✎</td>
            </tr>
          </tbody>
        </table>

        <h3 className="text-2xl font-semibold text-blue-500 mt-6 mb-4">Deplesi</h3>
        <table className="w-full border-collapse border text-lg">
          <thead>
            <tr className="bg-blue-100 text-left">
              <th className="border p-2">Usia Ayam (hari)</th>
              <th className="border p-2">Mati</th>
              <th className="border p-2">Culling</th>
              <th className="border p-2">Afkir</th>
              <th className="border p-2">Total Deplesi</th>
              <th className="border p-2">Total Deplesi Keseluruhan</th>
              <th className="border p-2">Satuan</th>
              <th className="border p-2 text-center">Edit</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border p-2">5</td>
              <td className="border p-2">75</td>
              <td className="border p-2">20</td>
              <td className="border p-2">0</td>
              <td className="border p-2">95</td>
              <td className="border p-2">250</td>
              <td className="border p-2">Ekor</td>
              <td className="border p-2 text-center">✎</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DetailRecording;

