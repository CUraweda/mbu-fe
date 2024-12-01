import Breadcrumb from "@/Components/Breadcrumb"; // Pastikan komponen ini ada
import LayoutProject from "@/Layouts/LayoutProject";
import PurchaseDetailLayout from "@/Layouts/PurchaseDetailLayout";
import TimelineApproval from "@/Components/pembelian/TimelineApproval";

const breadcrumbItems = [
  { label: "Home", link: "/" },
  { label: "Pembelian", link: "/pembelian" },
  { label: "List Pembelian", link: "/purchase-list" },
  { label: "Detail Pembelian" },
];

const OtherCostDetail = () => {
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
                <p className="text-sm font-bold mr-2">NO. PR:</p>
                <span className="font-bold text-blue-300">PR-MAN-00005</span>
              </div>

              {/* No. PO */}
              <div className="flex items-center">
                <p className="text-sm font-bold mr-2">NO. PO:</p>
                <span className="font-bold text-blue-300">PO-MAN-00005</span>
              </div>
            </div>

            {/* Tanggal Dibutuhkan */}
            <div className="flex items-center gap-4">
              <p className="text-sm font-medium  whitespace-nowrap text-slate-400">
                Tanggal Dibutuhkan:
              </p>
              <input
                type="date"
                className="text-white input input-bordered bg-blue-300"
              />
            </div>
          </div>

          {/* Payment Info Table */}
          <div className="my-4 overflow-x-auto">
            <h3 className="text-lg font-bold mb-2">Rincian Biaya Lainnya</h3>
            <table className="table w-full table-zebra">
              <thead className="bg-blue-300">
                <tr className="text-center text-white text-bold">
                  <th>#</th>
                  <th>Nama Biaya</th>
                  <th>Nominal</th>
                </tr>
              </thead>
              <tbody>
                <tr className="text-center  ">
                  <td>1</td>
                  <td></td>
                  <td></td>
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

          <TimelineApproval currentApprovalStep={2} />
        </PurchaseDetailLayout>
      </LayoutProject>
    </div>
  );
};

export default OtherCostDetail;
