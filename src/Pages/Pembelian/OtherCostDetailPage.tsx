import Breadcrumb from "../../Components/Breadcrumb"; // Pastikan komponen ini ada
import LayoutProject from "../../Layouts/layoutProject";
import PurchaseDetailLayout from "../../Layouts/PurchaseDetailLayout";
import { FaRegFileAlt } from "react-icons/fa";
import TimelineApproval from "../../Components/pembelian/TimelineApproval";

const breadcrumbItems = [
  { label: "Home", link: "/" },
  { label: "Pembelian", link: "/pembelian" },
  { label: "List Pembelian", link: "/purchase-list" },
  { label: "Detail Pembelian" },
];

const PaymentInfoPage = () => {
  return (
    <div className="min-h-screen">
      {/* Breadcrumb Component */}
      <Breadcrumb title="Pembelian" items={breadcrumbItems} />

      <LayoutProject bgColor="bg-transparent">
        <PurchaseDetailLayout>
          {/* Vendor Info */}
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

          {/* No. PR, No. PO, and Tanggal Dibutuhkan with Border */}

          <div className="my-4 flex justify-between gap-4 items-center border p-4 rounded-lg">
            <div className="flex gap-4 items-center">
              {/* No. PR */}
              <div className="flex items-center">
                <p className="text-sm font-medium mr-2">No. PR:</p>
                <span className="font-semibold text-blue-400">
                  PR-MAN-00005
                </span>
              </div>

              {/* No. PO */}
              <div className="flex items-center">
                <p className="text-sm font-medium mr-2">No. PO:</p>
                <span className="font-semibold text-blue-400">
                  PO-MAN-00005
                </span>
              </div>
            </div>

            {/* Tanggal Dibutuhkan */}
            <div className="flex items-center gap-4">
              <p className="text-sm font-medium whitespace-nowrap text-slate-400">
                Tanggal Dibutuhkan:
              </p>
              <input type="date" className="input input-bordered bg-blue-200" />
            </div>
          </div>

          {/* Payment Info Table */}
          <div className="my-4 overflow-x-auto">
            <h3>Info Pembayaran</h3>
            <table className="table w-full table-zebra">
              <thead className="bg-blue-200">
                <tr className="text-center">
                  <th>#</th>
                  <th>Nama Biaya</th>
                  <th>Nominal</th>
                </tr>
              </thead>
              <tbody>
                <tr className="text-center">
                  <td>1</td>
                  <td>xxxxxx</td>
                  <td>xxxxxx</td>         
                </tr>
              </tbody>
            </table>
          </div>

          {/* Total Pembayaran */}

          <div className="my-4 p-4 border rounded-lg bg-gray-100 flex justify-end">
            <div>
              <div className="flex justify-between items-center mb-2 gap-6">
                <p className="text-sm font-medium text-gray-600">
                  Total Biaya Lainnya:{" "}
                </p>
                <span className="text-sm font-semibold text-gray-800">
                  0.00
                </span>
              </div>
            </div>
          </div>

          <TimelineApproval currentApprovalStep={3} />

          {/* Action Buttons */}
          <div className="my-4 flex justify-end gap-4">
            <button className="btn bg-orange-500 text-white w-32 hover:bg-orange-600">
              Tolak
            </button>
            <button className="btn btn-success w-32 text-white">Setujui</button>
          </div>
        </PurchaseDetailLayout>
      </LayoutProject>
    </div>
  );
};

export default PaymentInfoPage;
