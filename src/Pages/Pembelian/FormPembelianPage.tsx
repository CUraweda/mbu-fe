import { useState } from "react";
import Breadcrumb from "../../Components/Breadcrumb";
import LayoutProject from "../../Layouts/layoutProject";
import { BiMessageDetail } from "react-icons/bi";
import AddItem from "../../Components/pembelian/addItem";
import AddNote from "../../Components/pembelian/addNote";
import Notes from "../../Components/pembelian/notes";

const breadcrumbItems = [
  { label: "Home", link: "/" },
  { label: "Pembelian", link: "/pembelian" },
  { label: "List Pembelian", link: "/purchase-list" },
  { label: "Form Pengajuan Pembelian" },
];

const FormPembelianPage = () => {
  const [addItemVisible, setAddItemVisible] = useState(false);
  const [addNoteVisible, setAddNoteVisible] = useState(false);

  const handleAddItem = () => {
    setAddItemVisible(true);
  };

  const closeAdd = () => {
    setAddItemVisible(false);
  };

  const handleAddNote = () => {
    setAddNoteVisible(true);
  };

  const closeNote = () => {
    setAddNoteVisible(false);
  };

  const handleConfirmNote = (comment: string) => {
    console.log("Note confirmed:", comment);
    closeNote();
  };

  const [isModalOpen, setModalOpen] = useState(false);

  const sampleNotes =
    "Belum Ada Catatan";

  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

  return (
    <div>
      <Breadcrumb title="Pembelian" items={breadcrumbItems} />
      <LayoutProject>
        <h1 className="m-5 text-2xl text-primary">Form Pengajuan Pembelian</h1>
        <hr />
        <div className="m-5 grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-8 border bg-gray-100 p-5 rounded-md">
          <div>
            <label htmlFor="vendor" className="mb-1 block">
              Nama Vendor
            </label>
            <select
              name="vendor"
              id="vendor"
              className="w-full p-2 border border-gray-300 rounded-md"
            >
              <option value="PT Charoen Pokphand Indonesia Tbk">
                PT Charoen Pokphand Indonesia Tbk
              </option>
              <option value="PT Malindo Feedmill Tbk">
                PT Malindo Feedmill Tbk
              </option>
            </select>
          </div>

          <div>
            <label htmlFor="department" className="mb-1 block">
              Departemen
            </label>
            <select
              name="department"
              id="department"
              className="w-full p-2 border border-gray-300 rounded-md"
            >
              <option value="">Pilih departemen</option>
              <option value="Finance">Finance</option>
              <option value="Purchasing">Purchasing</option>
            </select>
          </div>

          <div>
            <label htmlFor="namaPengaju" className="mb-1 block">
              Nama Pengaju
            </label>
            <input
              type="text"
              id="namaPengaju"
              className="w-full p-2 border border-gray-300 rounded-md"
              placeholder="Masukkan nama pengaju"
            />
          </div>

          <div>
            <label htmlFor="tanggalDibutuhkan" className="mb-1 block">
              Tanggal Dibutuhkan
            </label>
            <input
              type="date"
              id="tanggalDibutuhkan"
              className="w-full p-2 border border-gray-300 rounded-md"
            />
          </div>
        </div>

        <div className="m-5 border bg-gray-100 p-3 rounded-md">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-semibold">List Item</h2>
            <button>
              <BiMessageDetail className="inline-block mr-2" onClick={openModal} />
            </button>
          </div>
          <hr className="my-2" />
          <table className="w-full mt-3">
            <thead>
              <tr className="bg-blue-100">
                <th className="border bg-blue-100 px-2 py-1">#</th>
                <th className="border bg-blue-100 px-2 py-1">Produk</th>
                <th className="border bg-blue-100 px-2 py-1">Jenis Produk</th>
                <th className="border bg-blue-100 px-2 py-1">Gudang/Tempat Pengiriman</th>
                <th className="border bg-blue-100 px-2 py-1">Jumlah</th>
                <th className="border bg-blue-100 px-2 py-1">Satuan</th>
                <th className="border bg-blue-100 px-2 py-1">Harga Satuan (Rp)</th>
                <th className="border bg-blue-100 px-2 py-1">Pajak</th>
                <th className="border bg-blue-100 px-2 py-1">Total (Rp)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border bg-white px-2 py-1 text-center">1</td>
                <td className="border bg-white px-2 py-1">DOC CP Vaksin</td>
                <td className="border bg-white px-2 py-1">Sapronak</td>
                <td className="border bg-white px-2 py-1">Gudang Pangandaran</td>
                <td className="border bg-white px-2 py-1 text-right">50,000</td>
                <td className="border bg-white px-2 py-1">Ekor</td>
                <td className="border bg-white px-2 py-1 text-right">7,000.00</td>
                <td className="border bg-white px-2 py-1 text-right">11%</td>
                <td className="border bg-white px-2 py-1 text-right">350,000,000.00</td>
              </tr>
            </tbody>
          </table>

          <div className="flex justify-start mt-4 gap-1">
            <button
              className="px-5 py-2 text-blue-500 bg-white border border-blue-500 rounded hover:bg-blue-500 hover:text-white"
              onClick={handleAddItem}
            >
              Add Item
            </button>
            <button className="px-5 py-2 text-blue-500 bg-white border border-blue-500 rounded hover:bg-blue-500 hover:text-white">
              Edit Item
            </button>
            <button className="px-5 py-2 text-blue-500 bg-white border border-blue-500 rounded hover:bg-blue-500 hover:text-white">
              Delete Item
            </button>
            <button
              className="px-5 py-2 text-blue-500 bg-white border border-blue-500 rounded hover:bg-blue-500 hover:text-white"
              onClick={handleAddNote}
            >
              Add Note
            </button>
          </div>

          <div className="m-5 mt-0 flex justify-end">
          <table>
            <tbody className="text-right">
              <tr>
                <td className="pr-10">Total Sebelum Pajak:</td>
                <td>350,500,000.00</td>
              </tr>
              <tr>
                <td className="pr-10">Pajak:</td>
                <td>38,555,000.00</td>
              </tr>
              <tr>
                <td className="pr-10 font-bold">Total:</td>
                <td className="font-bold">389,055,000.00</td>
              </tr>
            </tbody>
          </table>
          </div>
        </div>

        <div className="m-5 flex justify-end gap-4">
          <button className="px-5 py-2 text-white bg-orange-500 rounded hover:bg-orange-600">
            Batal
          </button>
          <button className="px-5 py-2 text-white bg-green-500 rounded hover:bg-green-600">
            Simpan Draft
          </button>
          <button className="px-5 py-2 text-white bg-blue-600 rounded hover:bg-blue-700">
            Submit
          </button>
        </div>
        {addItemVisible && (
          <AddItem isOpen={addItemVisible} onClose={closeAdd} />
        )}
        {addNoteVisible && <AddNote onClose={closeNote} onConfirm={handleConfirmNote} />}
        <Notes isOpen={isModalOpen} onClose={closeModal} notes={sampleNotes} />
      </LayoutProject>
    </div>
  );
};

export default FormPembelianPage;

