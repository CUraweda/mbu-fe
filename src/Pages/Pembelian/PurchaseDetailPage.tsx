import { useState } from "react";
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
  const [isRejectModalOpen, setRejectModalOpen] = useState(false);
  const [comment, setComment] = useState("");

  const handleReject = () => {
    console.log("Komentar Ditolak:", comment);
    setRejectModalOpen(false);
    setComment(""); // Reset komentar setelah menyimpan
  };

  return (
    <div className="min-h-screen">
      {/* Breadcrumb */}
      <Breadcrumb title="Pembelian" items={breadcrumbItems} />

      <LayoutProject bgColor="bg-transparent">
        <PurchaseDetailLayout>
          {/* Vendor Details::START */}
          <div className="my-4 flex justify-between">
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
          <div className="my-4 flex justify-between gap-4 items-center border p-4 rounded-lg">
            <div className="flex gap-4 items-center">
              <div className="flex items-center">
                <p className="text-sm font-bold mr-2">NO. PR:</p>
                <span className="font-bold text-blue-300">
                  PR-MAN-00005
                </span>
              </div>
              <div className="flex items-center">
                <p className="text-sm font-bold mr-2">NO. PO:</p>
                <span className="font-bold text-blue-300">
                  -
                </span>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <p className="text-sm text font-medium whitespace-nowrap text-slate-400">
                Tanggal Dibutuhkan:
              </p>
              <input type="date" className="input input-bordered bg-blue-300" />
            </div>
          </div>
          {/* Vendor Details::END */}

          {/* List Item Table::START */}
          <div className="my-4 overflow-x-auto">
            <h3 className="text-lg font-bold mb-2">List Item</h3>
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
          <div className="my-4 p-4 border rounded-lg bg-gray-100 flex justify-end">
            <div>
              <div className="flex justify-between items-center mb-2 gap-6">
                <p className="text-sm font-medium text-gray-600">
                  Total Sebelum Pajak:{" "}
                </p>
                <span className="text-sm font-semibold text-gray-800">
                350,500,000.00
                </span>
              </div>
              <div className="flex justify-between items-center mb-2 gap-6">
                <p className="text-sm font-medium text-gray-600">
                  Pajak:{" "}
                </p>
                <span className="text-sm font-semibold text-gray-800">
                38,555,000.00
                </span>
              </div>
              <div className="flex justify-between items-center mb-2 gap-6">
                <p className="text-sm font-medium text-gray-600">
                  Diskon:{" "}
                </p>
                <span className="text-sm font-semibold text-gray-800">
                -0.00
                </span>
              </div>
              <div className="flex justify-between items-center mb-2 gap-6">
                <p className="text-sm font-medium text-gray-600">
                  Total Biaya Lainnya:{" "}
                </p>
                <span className="text-sm font-semibold text-gray-800">
                0.00
                </span>
              </div>
              <div className="flex justify-between items-center">
                <p className="text-sm font-bold mb-2 gap-6">
                  Total:{" "}
                </p>
                <span className="text-sm font-bold">
                389,055,000.00
                </span>
              </div>
            </div>
          </div>

          {/* Timeline Approval */}
          <TimelineApproval currentApprovalStep={2} />

          {/* Action Buttons */}
          <div className="my-4 flex justify-end gap-4">
            <button
              className="btn btn-success w-32 text-white"
              onClick={() => setRejectModalOpen(true)}
            >
              Edit
            </button>
            <button className="btn bg-blue-300 text-white w-32 ">
              Submit
              </button>
          </div>
        </PurchaseDetailLayout>
      </LayoutProject>

      {/* Reject Modal */}
      {isRejectModalOpen && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg w-96 relative">
            {/* Close Button */}
            <button
              className="absolute top-2 right-2 text-xl font-bold text-gray-600"
              onClick={() => setRejectModalOpen(false)}
            >
              &times;
            </button>
            <h3 className="text-lg font-bold text-blue-300">
              Catatan
            </h3>
            <p className="text-sm text-gray-500 mt-2">
             Komentar/Catatan 
            </p>
            <textarea
              className="w-full mt-4 p-2 border rounded-lg"
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
