import Breadcrumb from "../../Components/Breadcrumb";
import LayoutProject from "../../Layouts/layoutProject";

import PurchaseDetailLayout from "../../Layouts/PurchaseDetailLayout";
import TimelineApproval from "../../Components/pembelian/TimelineApproval";

const breadcrumbItems = [
  { label: "Home", link: "/" },
  { label: "Pembelian", link: "/pembelian" },
  { label: "List Pembelian", link: "/purchase-list" },
  { label: "Detail Pembelian" },
];

const PurchaseDetailPage = () => {
  return (
    <>
      <Breadcrumb title="Pembelian" items={breadcrumbItems} />
      <LayoutProject bgColor="bg-transparent">
        <PurchaseDetailLayout>
          {/* Vendor Details::START */}
          <div className="grid grid-cols-2 gap-4 mb-6">
            <div>
              <p className="font-bold">Nama Vendor</p>
              <p>PT Charoen Pokphand Indonesia Tbk</p>
            </div>
            <div>
              <p className="font-bold">Alamat</p>
              <p>
                Jl. Ancol VIII/1, Ancol, Pademangan, North Jakarta, DKI Jakarta,
                14430
              </p>
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
          {/* Vendor Details::END */}

          {/* List Item Table::START */}
          <div className="overflow-auto">
            <table className="w-full border-collapse border border-gray-300">
              <thead className="bg-gray-100">
                <tr>
                  <th className="border border-gray-300 px-4 py-2">#</th>
                  <th className="border border-gray-300 px-4 py-2">Produk</th>
                  <th className="border border-gray-300 px-4 py-2">
                    Jenis Produk
                  </th>
                  <th className="border border-gray-300 px-4 py-2">
                    Gudang/Tempat Pengiriman
                  </th>
                  <th className="border border-gray-300 px-4 py-2">Jumlah</th>
                  <th className="border border-gray-300 px-4 py-2">Satuan</th>
                  <th className="border border-gray-300 px-4 py-2">
                    Harga Satuan (Rp)
                  </th>
                  <th className="border border-gray-300 px-4 py-2">Pajak</th>
                  <th className="border border-gray-300 px-4 py-2">
                    Total (Rp)
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-300 px-4 py-2">1</td>
                  <td className="border border-gray-300 px-4 py-2">
                    DOC CP Vaksin
                  </td>
                  <td className="border border-gray-300 px-4 py-2">Sapronak</td>
                  <td className="border border-gray-300 px-4 py-2">
                    Gudang Pangandaran
                  </td>
                  <td className="border border-gray-300 px-4 py-2">50,000</td>
                  <td className="border border-gray-300 px-4 py-2">Ekor</td>
                  <td className="border border-gray-300 px-4 py-2">7,000.00</td>
                  <td className="border border-gray-300 px-4 py-2">11%</td>
                  <td className="border border-gray-300 px-4 py-2">
                    350,000,000.00
                  </td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2">2</td>
                  <td className="border border-gray-300 px-4 py-2">
                    Pakan Starter
                  </td>
                  <td className="border border-gray-300 px-4 py-2">Sapronak</td>
                  <td className="border border-gray-300 px-4 py-2">
                    Gudang Pangandaran
                  </td>
                  <td className="border border-gray-300 px-4 py-2">1,000</td>
                  <td className="border border-gray-300 px-4 py-2">Kg</td>
                  <td className="border border-gray-300 px-4 py-2">500.00</td>
                  <td className="border border-gray-300 px-4 py-2">11%</td>
                  <td className="border border-gray-300 px-4 py-2">
                    500,000.00
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          {/* List Item Table::END */}

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

          <TimelineApproval currentApprovalStep={2} />

          {/* Buttons::START */}
          <div className="mt-6 flex gap-4">
            <button className="bg-red-500 text-white py-2 px-4 rounded-md">
              Tolak
            </button>
            <button className="bg-green-500 text-white py-2 px-4 rounded-md">
              Setuju
            </button>
          </div>
          {/* Buttons::END */}
        </PurchaseDetailLayout>
      </LayoutProject>
    </>
  );
};

export default PurchaseDetailPage;
