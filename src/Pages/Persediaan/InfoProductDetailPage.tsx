import Breadcrumb from "@/Components/Breadcrumb";
import LayoutProject from "@/Layouts/LayoutProject";
import InventoryDetailLayout from "@/Layouts/InventoryDetailLayout";
import { CiImageOn } from "react-icons/ci";

const breadcrumbItems = [
  { label: "Home", link: "/" },
  { label: "Persediaan", link: "/inventory/product" },
  { label: "Produk", link: "/inventory/product" },
  { label: "Detail Produk" },
];

const InfoProductDetailPage = () => {
  return (
    <div>
      <Breadcrumb title="Persediaan" items={breadcrumbItems} />
      <LayoutProject bgColor="bg-transparent">
        <InventoryDetailLayout>
          <h1 className="font-bold">DOC CP Vaksin</h1>
          <hr className="my-5" />
          <div className="flex flex-col items-start gap-8 lg:gap-20 lg:flex-row">
            {/* Image */}
            <div className="flex flex-col items-center justify-center border border-gray-400 w-52 h-52">
              <CiImageOn size={70} className="text-[#001A72] opacity-50" />
              <p>Image</p>
            </div>

            <div>
              <div className="overflow-x-auto">
                {/* START */}
                <table>
                  <tbody>
                    <tr>
                      <td>Unit Bisnis</td>
                      <td className="px-4 pl-10 text-gray-700">
                        PT Mitra Berlian Unggas
                      </td>
                    </tr>
                    <tr>
                      <td>Kategori</td>
                      <td className="px-4 py-2 pl-10 text-gray-700">
                        Sapronak
                      </td>
                    </tr>
                    <tr>
                      <td>Sub Kategori</td>
                      <td className="px-4 py-2 pl-10 text-gray-700">DOC</td>
                    </tr>
                    <tr>
                      <td>Merek</td>
                      <td className="px-4 py-2 pl-10 text-gray-700">
                        CP Vaksin
                      </td>
                    </tr>
                    <tr>
                      <td>Satuan</td>
                      <td className="px-4 py-2 pl-10">
                        <span className="text-[#FFCC00] bg-[#FFD94133] px-8">
                          Kg
                        </span>
                      </td>
                    </tr>
                  </tbody>
                </table>
                {/* ::END */}

                {/* ::START */}
                <div className="flex flex-col gap-4 my-4 md:flex-row">
                  <div className="p-2 border border-gray-400 min-w-40 ">
                    <p>Harga Beli</p>
                    <p>Rp 7,000.00</p>
                  </div>
                  <div className="p-2 border border-gray-400 min-w-40 ">
                    <p>Harga Jual</p>
                    <p>Rp 0.00</p>
                  </div>
                  <div className="p-2 border border-gray-400 min-w-40 ">
                    <p>Total Stok</p>
                    <p>1,000</p>
                  </div>
                </div>
                {/* ::END */}

                {/* START */}
                <table>
                  <tbody>
                    <tr>
                      <td>Untuk Dijual</td>
                      <td className="px-4 py-2 pl-10 text-gray-700">Ya</td>
                    </tr>
                    <tr>
                      <td>Untuk Dibeli</td>
                      <td className="px-4 py-2 pl-10 text-gray-700">Ya</td>
                    </tr>
                    <tr>
                      <td>Pajak</td>
                      <td className="px-4 py-2 pl-10 text-gray-700">-%</td>
                    </tr>
                  </tbody>
                </table>
                {/* ::END */}
              </div>
            </div>

            <button>
              <span className="px-8 py-1 border border-gray-400 rounded-3xl">
                Edit
              </span>
            </button>
          </div>
        </InventoryDetailLayout>
      </LayoutProject>
    </div>
  );
};

export default InfoProductDetailPage;
