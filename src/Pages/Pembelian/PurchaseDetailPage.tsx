import Breadcrumb from "../../Components/Breadcrumb";
import LayoutProject from "../../Layouts/layoutProject";

import PurchaseDetailLayout from "../../Layouts/PurchaseDetailLayout";

const breadcrumbItems = [
  { label: "Home", link: "/" },
  { label: "Pembelian", link: "/pembelian" },
  { label: "List Pembelian", link: "/purchase-list" },
  { label: "Detail Pembelian" },
];

const tabs = ["Detail", "Biaya Lain", "Pembayaran", "Penerimaan/Retur"];

const PurchaseDetailPage = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      <Breadcrumb title="Pembelian" items={breadcrumbItems} />
      <LayoutProject>
      
          <PurchaseDetailLayout>
            <div className="bg-white shadow-md rounded-lg p-6">
              {/* Tabs */}
              <div className="flex border-b mb-4">
                {tabs.map((tab, index) => (
                  <button
                    key={index}
                    className={`px-4 py-2 ${
                      index === 0
                        ? "text-blue-500 border-b-2 border-blue-500"
                        : "text-gray-500"
                    }`}
                  >
                    {tab}
                  </button>
                ))}
              </div>

              {/* Vendor Details */}
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div>
                  <p className="font-bold">Nama Vendor</p>
                  <p>PT Charoen Pokphand Indonesia Tbk</p>
                </div>
                <div>
                  <p className="font-bold">Alamat</p>
                  <p>Jl. Ancol VIII/1, Ancol, Pademangan, North Jakarta, DKI Jakarta, 14430</p>
                </div>
                <div>
                  <p className="font-bold">No. PR</p>
                  <p className="text-blue-500">PR-MAN-00005</p>
                </div>
                <div>
                  <p className="font-bold">No. PO</p>
                  <p className="text-blue-500">PR-MAN-00005</p>
                </div>
                <div>
                  <p className="font-bold">Tanggal Dibutuhkan</p>
                  <input
                    type="date"
                    className="border border-gray-300 rounded-md p-2 w-full"
                  />
                </div>
              </div>

              {/* List Item Table */}
              <div className="overflow-auto">
                <table className="w-full border-collapse border border-gray-300">
                  <thead className="bg-gray-100">
                    <tr>
                      <th className="border border-gray-300 px-4 py-2">#</th>
                      <th className="border border-gray-300 px-4 py-2">Produk</th>
                      <th className="border border-gray-300 px-4 py-2">Jenis Produk</th>
                      <th className="border border-gray-300 px-4 py-2">
                        Gudang/Tempat Pengiriman
                      </th>
                      <th className="border border-gray-300 px-4 py-2">Jumlah</th>
                      <th className="border border-gray-300 px-4 py-2">Satuan</th>
                      <th className="border border-gray-300 px-4 py-2">
                        Harga Satuan (Rp)
                      </th>
                      <th className="border border-gray-300 px-4 py-2">Pajak</th>
                      <th className="border border-gray-300 px-4 py-2">Total (Rp)</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2">1</td>
                      <td className="border border-gray-300 px-4 py-2">DOC CP Vaksin</td>
                      <td className="border border-gray-300 px-4 py-2">Sapronak</td>
                      <td className="border border-gray-300 px-4 py-2">Gudang Pangandaran</td>
                      <td className="border border-gray-300 px-4 py-2">50,000</td>
                      <td className="border border-gray-300 px-4 py-2">Ekor</td>
                      <td className="border border-gray-300 px-4 py-2">7,000.00</td>
                      <td className="border border-gray-300 px-4 py-2">11%</td>
                      <td className="border border-gray-300 px-4 py-2">350,000,000.00</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2">2</td>
                      <td className="border border-gray-300 px-4 py-2">Pakan Starter</td>
                      <td className="border border-gray-300 px-4 py-2">Sapronak</td>
                      <td className="border border-gray-300 px-4 py-2">Gudang Pangandaran</td>
                      <td className="border border-gray-300 px-4 py-2">1,000</td>
                      <td className="border border-gray-300 px-4 py-2">Kg</td>
                      <td className="border border-gray-300 px-4 py-2">500.00</td>
                      <td className="border border-gray-300 px-4 py-2">11%</td>
                      <td className="border border-gray-300 px-4 py-2">500,000.00</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              {/* Summary */}
              <div className="mt-6 flex flex-col gap-2">
                <div className="flex justify-between">
                  <p>Total Sebelum Pajak:</p>
                  <p>350,500,000.00</p>
                </div>
                <div className="flex justify-between">
                  <p>Pajak:</p>
                  <p>38,555,000.00</p>
                </div>
                <div className="flex justify-between">
                  <p>Diskon:</p>
                  <p>-0.00</p>
                </div>
                <div className="flex justify-between">
                  <p>Total Biaya Lainnya:</p>
                  <p>0.00</p>
                </div>
                <div className="flex justify-between font-bold text-lg">
                  <p>Total:</p>
                  <p>389,055,000.00</p>
                </div>
              </div>

              {/* Buttons */}
              <div className="mt-6 flex gap-4">
                <button className="bg-red-500 text-white py-2 px-4 rounded-md">Tolak</button>
                <button className="bg-green-500 text-white py-2 px-4 rounded-md">
                  Setuju
                </button>
              </div>

              {/* Status Bar */}
              <div className="mt-6 flex items-center">
                {[
                  "Draft",
                  "Approval Manager",
                  "Approval Poltry Health",
                  "Approval Mgr. Purchasing",
                  "Approval Mgr. Finance",
                  "Approval Dir. Finance",
                  "PD Dibuat",
                  "Produk Diterima Pengaju",
                  "Dibayar Sebagian",
                  "Dibayar Penuh",
                ].map((status, index) => (
                  <div
                    key={index}
                    className={`flex items-center gap-2 ${
                      index < 3 ? "text-blue-500" : "text-gray-500"
                    }`}
                  >
                    <div
                      className={`w-4 h-4 rounded-full ${
                        index < 3 ? "bg-blue-500" : "bg-gray-300"
                      }`}
                    />
                    <p>{status}</p>
                  </div>
                ))}
              </div>
            </div>
          </PurchaseDetailLayout>
      </LayoutProject>
    </div>
  );
};

export default PurchaseDetailPage;

