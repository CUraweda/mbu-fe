import { useState } from "react";
import Breadcrumb from "@/Components/Breadcrumb";
import LayoutProject from "@/Layouts/LayoutProject";
import PurchaseDetailLayout from "@/Layouts/PurchaseDetailLayout";
import TimelineApproval from "@/Components/pembelian/TimelineApproval";

const breadcrumbItems = [
  { label: "Home", link: "/" },
  { label: "Pembelian", link: "/pembelian" },
  { label: "List Pembelian", link: "/purchase-list" },
  { label: "Detail Pembelian" },
];

const PurchaseDetailPage = () => {
  const [isRejectModalOpen, setRejectModalOpen] = useState(false);
  const [comment, setComment] = useState("");

  return (
    <div className="min-h-screen">
      {/* Breadcrumb */}
      <Breadcrumb title="Pembelian" items={breadcrumbItems} />

      <LayoutProject bgColor="bg-transparent">
        <PurchaseDetailLayout>
          {/* Vendor Details::START */}
          <div className="flex justify-between my-4">
            <div>
              <p className="text-slate-400">Nama Vendor</p>
              <b className="font-bold">PT Charoen Pokphand Indonesia Tbk</b>
            </div>
            <div className="text-right">
              <p className="text-slate-400">Alamat</p>
              <div className="font-bold">
                Jl. Ancol VIII/1, Ancol, Pademangan
                <br /> North Jakarta, DKI Jakarta, 14430
              </div>
            </div>
          </div>

          {/* No. PR, No. PO, and Tanggal Dibutuhkan */}
          <div className="flex items-center justify-between gap-4 p-4 my-4 border rounded-lg">
            <div className="flex items-center gap-4">
              <div className="flex items-center">
                <p className="mr-2 text-sm font-bold">NO. PR:</p>
                <span className="font-bold text-blue-300">PR-MAN-00005</span>
              </div>
              <div className="flex items-center">
                <p className="mr-2 text-sm font-bold">NO. PO:</p>
                <span className="font-bold text-blue-300">-</span>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <p className="text-sm font-medium text whitespace-nowrap text-slate-400">
                Tanggal Dibutuhkan:
              </p>
              <input
                type="date"
                className="text-white input input-bordered bg-blue-300"
              />
            </div>
          </div>
          {/* Vendor Details::END */}

          {/* List Item Table::START */}
          <div className="my-4 overflow-x-auto">
            <h3 className="mb-2 text-lg font-bold">List Item</h3>
            <table className="table w-full border border-gray-300 rounded-lg">
              <thead className="bg-blue-300">
                <tr className="text-center text-white">
                  <th className="p-2">#</th>
                  <th className="p-2">Produk</th>
                  <th className="p-2">Jenis Produk</th>
                  <th className="p-2">Gudang/Tempat Pengiriman</th>
                  <th className="p-2">Jumlah</th>
                  <th className="p-2">Satuan</th>
                  <th className="p-2">Harga Satuan(Rp)</th>
                  <th className="p-2">Pajak</th>
                  <th className="p-2">Total(Rp)</th>
                </tr>
              </thead>
              <tbody>
                <tr className="text-center">
                  <td className="p-2">1</td>
                  <td className="p-2">DOC CP Vaksin</td>
                  <td className="p-2">Sapronak</td>
                  <td className="p-2">Gudang Pangandaran</td>
                  <td className="p-2">50,000</td>
                  <td className="p-2">Ekor</td>
                  <td className="p-2">Rp 7,000.00</td>
                  <td className="p-2">11%</td>
                  <td className="p-2">Rp 350,000,000,00</td>
                </tr>
              </tbody>
              <tbody>
                <tr className="text-center">
                  <td className="p-2">2</td>
                  <td className="p-2">Pakan Starter</td>
                  <td className="p-2">Sapronak</td>
                  <td className="p-2">Gudang Pangandaran</td>
                  <td className="p-2">1,000</td>
                  <td className="p-2">Kg</td>
                  <td className="p-2">Rp 500.00</td>
                  <td className="p-2">11%</td>
                  <td className="p-2">Rp 500,000.00</td>
                </tr>
              </tbody>
            </table>
          </div>
          {/* List Item Table::END */}

          {/* Total Pembayaran */}
          <div className="flex justify-end p-4 my-4 bg-gray-100 border rounded-lg">
            <div>
              <div className="flex items-center justify-between gap-6 mb-2">
                <p className="text-sm font-medium text-gray-600">
                  Total Sebelum Pajak:{" "}
                </p>
                <span className="text-sm font-semibold text-gray-800">
                  350,500,000.00
                </span>
              </div>
              <div className="flex items-center justify-between gap-6 mb-2">
                <p className="text-sm font-medium text-gray-600">Pajak: </p>
                <span className="text-sm font-semibold text-gray-800">
                  38,555,000.00
                </span>
              </div>
              <div className="flex items-center justify-between gap-6 mb-2">
                <p className="text-sm font-medium text-gray-600">Diskon: </p>
                <span className="text-sm font-semibold text-gray-800">
                  -0.00
                </span>
              </div>
              <div className="flex items-center justify-between gap-6 mb-2">
                <p className="text-sm font-medium text-gray-600">
                  Total Biaya Lainnya:{" "}
                </p>
                <span className="text-sm font-semibold text-gray-800">
                  0.00
                </span>
              </div>
              <div className="flex items-center justify-between">
                <p className="gap-6 mb-2 text-sm font-bold">Total: </p>
                <span className="text-sm font-bold">389,055,000.00</span>
              </div>
            </div>
          </div>

          {/* Timeline Approval */}
          <TimelineApproval currentApprovalStep={2} />

          {/* Action Buttons */}
          <div className="flex justify-end gap-4 my-4">
            <button
              className="w-32 text-white btn btn-success"
              onClick={() => setRejectModalOpen(true)}
            >
              Edit
            </button>
            <button className="w-32 text-white bg-blue-300 btn ">Submit</button>
          </div>
        </PurchaseDetailLayout>
      </LayoutProject>

      {/* Reject Modal */}
      {isRejectModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-800 bg-opacity-50">
          <div className="relative p-6 bg-white rounded-lg w-96">
            {/* Close Button */}
            <button
              className="absolute text-xl font-bold text-gray-600 top-2 right-2"
              onClick={() => setRejectModalOpen(false)}
            >
              &times;
            </button>
            <h3 className="text-lg font-bold text-blue-300">Catatan</h3>
            <p className="mt-2 text-sm text-gray-500">Komentar/Catatan</p>
            <textarea
              className="w-full p-2 mt-4 border rounded-lg"
              rows={4}
              placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
              sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis 
              nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat 
              cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
              value={comment}
              onChange={(e) => setComment(e.target.value)}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default PurchaseDetailPage;
