import Breadcrumb from "../../Components/bread";
import ProductList from "../../Components/pembelian/ProductList";
import LayoutProject from "../../Layouts/layoutProject";

const breadcrumbItems = [
  { label: "Home", link: "/" },
  { label: "Pembelian", link: "/pembelian" },
  { label: "List Pembelian", link: "/list-pembelian" },
  { label: "Form Pengajuan Pembelian" },
];

const FormPembelianPage = () => {
  return (
    <div>
      <Breadcrumb title="Pembelian" items={breadcrumbItems} />
      <LayoutProject>
        <h1 className="m-5 text-2xl text-primary">Form Pengajuan Pembelian</h1>
        <hr />
        <div className="flex flex-col justify-between gap-3 m-5 md:flex-row">
          <div className="flex flex-col">
            <label htmlFor="vendor" className="mb-1">
              Nama Vendor
            </label>
            <select
              name="vendor"
              id="vendor"
              className="p-1 border border-gray-300 rounded-md"
            >
              <option value="PT Charoen Pokphand Indonesia Tbk">
                PT Charoen Pokphand Indonesia Tbk
              </option>
              <option value="PT Malindo Feedmill Tbk">
                PT Malindo Feedmill Tbk
              </option>
            </select>
          </div>

          <div className="flex flex-col md:w-1/4">
            <label htmlFor="tanggalDibutuhkan" className="mb-1">
              Tanggal Dibutuhkan
            </label>
            <input
              type="date"
              name="tanggalDibutuhkan"
              id="tanggalDibutuhkan"
              className="p-1 border border-gray-300 rounded-md"
            />
          </div>
        </div>
        <ProductList />

        <hr className="my-4 border-2 border-gray-300" />
        <div className="flex flex-col gap-3 md:items-end md:flex-row md:justify-between">
          <div className="px-5">
            <p className="mb-1 ml-1">Catatan</p>
            <textarea className="w-full h-24 px-2 py-1 border border-gray-500 rounded resize-none md:h-20 md:w-80 focus:outline-none focus:ring-1 focus:ring-primary" />
          </div>

          <div className="px-5">
            <table className="w-full text-left">
              <tbody className="text-right">
                <tr>
                  <td className="py-1 pr-10">Total Sebelum Pajak:</td>
                  <td className="">350,500,000.00</td>
                </tr>

                <tr>
                  <td className="py-1 pr-10">Pajak:</td>
                  <td className="border-b border-gray-600 ">38,555,000.00</td>
                </tr>

                <tr>
                  <td className="py-1 pr-10">Total Setelah Pajak:</td>
                  <td className="font-semibold md:text-lg ">389,055,000.00</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <hr className="my-4 border-2 border-gray-300" />

        <div className="flex flex-row justify-end gap-2 m-5 md:gap-4">
          <button className="w-32 px-3 py-2 text-white bg-orange-500 rounded-md hover:bg-orange-600">
            Batal
          </button>
          <button className="w-32 px-3 py-2 text-white bg-green-500 rounded-md hover:bg-green-600">
            Simpan Draft
          </button>
          <button className="w-32 px-3 py-2 text-white rounded-md bg-primary hover:bg-[#5E92C4]">
            Submit
          </button>
        </div>
      </LayoutProject>
    </div>
  );
};

export default FormPembelianPage;
