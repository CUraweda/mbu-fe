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
                <p className="text-sm font-medium mr-2">No. PR:</p>
                <span className="font-semibold text-blue-400">
                  PR-MAN-00005
                </span>
              </div>
              <div className="flex items-center">
                <p className="text-sm font-medium mr-2">No. PO:</p>
                <span className="font-semibold text-blue-400">
                  PO-MAN-00005
                </span>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <p className="text-sm font-medium whitespace-nowrap text-slate-400">
                Tanggal Dibutuhkan:
              </p>
              <input type="date" className="input input-bordered bg-blue-200" />
            </div>
          </div>
          {/* Vendor Details::END */}

           {/* List Item Table::START */}
          <div className="my-4 overflow-x-auto">
            <h3 className="text-lg font-bold mb-2">List Item</h3>
            <table className="table w-full border border-gray-300 rounded-lg">
              <thead className="bg-blue-200">
                <tr className="text-center">
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
                  <td className="p-2">Contoh Biaya</td>
                  <td className="p-2">Rp 10,000,000</td>
                  <td className="p-2">Rp 10,000,000</td>
                  <td className="p-2">Rp 10,000,000</td>
                  <td className="p-2">Rp 10,000,000</td>
                  <td className="p-2">Rp 10,000,000</td>
                  <td className="p-2">Rp 10,000,000</td>
                  <td className="p-2">Rp 10,000,000</td>
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
                  Total Pajak:{" "}
                </p>
                <span className="text-sm font-semibold text-gray-800">
                  Rp 10,000,000
                </span>
              </div>
              <div className="flex justify-between items-center mb-2 gap-6">
                <p className="text-sm font-medium text-gray-600">
                  Pajak:{" "}
                </p>
                <span className="text-sm font-semibold text-gray-800">
                  Rp 12,000,000
                </span>
              </div>
              <div className="flex justify-between items-center mb-2 gap-6">
                <p className="text-sm font-medium text-gray-600">
                  Diskon:{" "}
                </p>
                <span className="text-sm font-semibold text-gray-800">
                  Rp 12,000,000
                </span>
              </div>
              <div className="flex justify-between items-center mb-2 gap-6">
                <p className="text-sm font-medium text-gray-600">
                  Total Biaya Lainnya:{" "}
                </p>
                <span className="text-sm font-semibold text-gray-800">
                  Rp 12,000,000
                </span>
              </div>
              <div className="flex justify-between items-center">
                <p className="text-sm font-bold text-gray-800 mb-2 gap-6">
                  Total:{" "}
                </p>
                <span className="text-sm font-bold text-gray-800">
                  Rp 2,000,000
                </span>
              </div>
            </div>
          </div>

          {/* Timeline Approval */}
          <TimelineApproval currentApprovalStep={3} />


          {/* Action Buttons */}
          <div className="my-4 flex justify-end gap-4">
            <button
              className="btn bg-orange-500 text-white w-32 hover:bg-orange-600"
              onClick={() => setRejectModalOpen(true)}
            >
              Tolak
            </button>
            <button className="btn btn-success w-32 text-white">Setujui</button>
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
            <h3 className="text-lg font-bold text-blue-600">
              Anda yakin memilih opsi Tolak?
            </h3>
            <p className="text-sm text-gray-500 mt-2">
              Tolong berikan komentar/catatan jika Anda menolak
            </p>
            <textarea
              className="w-full mt-4 p-2 border rounded-lg"
              rows={4}
              placeholder="Komentar/Catatan"
              value={comment}
              onChange={(e) => setComment(e.target.value)}
            />
            <div className="flex justify-end gap-4 mt-4">
              <button
                className="btn bg-gray-400 text-white hover:bg-gray-500"
                onClick={() => setRejectModalOpen(false)}
              >
                Batal
              </button>
              <button
                className={`btn ${
                  comment.trim()
                    ? "bg-blue-500 hover:bg-blue-600"
                    : "bg-gray-300 cursor-not-allowed"
                } text-white`}
                onClick={handleReject}
                disabled={!comment.trim()} // Disabled jika komentar kosong
              >
                Simpan
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PurchaseDetailPage;
