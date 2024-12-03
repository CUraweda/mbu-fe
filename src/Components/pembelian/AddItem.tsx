import React, { useState, MouseEventHandler } from "react";

export interface AddItemProps {
  isOpen: boolean;
  onClose: MouseEventHandler<HTMLButtonElement>;
}

const AddItem = ({ isOpen, onClose }: AddItemProps) => {
  const [namaProduk, setNamaProduk] = useState("");
  const [jenisProduk, setJenisProduk] = useState("");
  const [gudangPengiriman, setGudangPengiriman] = useState("");
  const [jumlah, setJumlah] = useState(0);
  const [satuan, setSatuan] = useState("");
  const [hargaSatuan, setHargaSatuan] = useState(0);
  const [pajak, setPajak] = useState(0);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log({
      namaProduk,
      jenisProduk,
      gudangPengiriman,
      jumlah,
      satuan,
      hargaSatuan,
      pajak,
    });
    onClose(e as unknown as React.MouseEvent<HTMLButtonElement>);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-500 bg-opacity-50">
      <div className="bg-white rounded-lg shadow-lg p-4 w-3/4 max-w-lg relative">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-800"
        >
          X
        </button>
        <h2 className="text-lg font-medium text-primary">Tambah Item</h2>

        <form onSubmit={handleSubmit} className="mt-4 space-y-4">
          <div>
            <label
              htmlFor="namaProduk"
              className="block text-sm font-medium text-gray-700"
            >
              Nama Produk
            </label>
            <input
              type="text"
              id="namaProduk"
              placeholder="Masukan nama produk"
              className="w-full p-2 border border-gray-300 rounded-md"
              value={namaProduk}
              onChange={(e) => setNamaProduk(e.target.value)}
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label
                htmlFor="jenisProduk"
                className="block text-sm font-medium text-gray-700"
              >
                Jenis Produk
              </label>
              <select
                id="jenisProduk"
                className="w-full p-2 border border-gray-300 rounded-md"
                value={jenisProduk}
                onChange={(e) => setJenisProduk(e.target.value)}
              >
                <option value="">Pilih</option>
                <option value="Produk A">Produk A</option>
                <option value="Produk B">Produk B</option>
              </select>
            </div>

            <div>
              <label
                htmlFor="gudangPengiriman"
                className="block text-sm font-medium text-gray-700"
              >
                Gudang/Tempat Pengiriman
              </label>
              <select
                id="gudangPengiriman"
                className="w-full p-2 border border-gray-300 rounded-md"
                value={gudangPengiriman}
                onChange={(e) => setGudangPengiriman(e.target.value)}
              >
                <option value="">Pilih</option>
                <option value="Gudang 1">Gudang 1</option>
                <option value="Gudang 2">Gudang 2</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-4">
            <div>
              <label
                htmlFor="jumlah"
                className="block text-sm font-medium text-gray-700"
              >
                Jumlah
              </label>
              <input
                type="number"
                id="jumlah"
                placeholder="Masukan jumlah"
                className="w-full p-2 border border-gray-300 rounded-md"
                value={jumlah}
                onChange={(e) => setJumlah(parseFloat(e.target.value))}
              />
            </div>

            <div>
              <label
                htmlFor="satuan"
                className="block text-sm font-medium text-gray-700"
              >
                Satuan
              </label>
              <select
                id="satuan"
                className="w-full p-2 border border-gray-300 rounded-md"
                value={satuan}
                onChange={(e) => setSatuan(e.target.value)}
              >
                <option value="">Pilih</option>
                <option value="Kg">Kg</option>
                <option value="Ekor">Ekor</option>
              </select>
            </div>

            <div>
              <label
                htmlFor="hargaSatuan"
                className="block text-sm font-medium text-gray-700"
              >
                Harga Satuan (Rp)
              </label>
              <input
                type="number"
                id="hargaSatuan"
                placeholder="Masukan harga satuan"
                className="w-full p-2 border border-gray-300 rounded-md"
                value={hargaSatuan}
                onChange={(e) => setHargaSatuan(parseFloat(e.target.value))}
              />
            </div>
          </div>

          <div>
            <label
              htmlFor="pajak"
              className="block text-sm font-medium text-gray-700"
            >
              Pajak (%)
            </label>
            <input
              type="number"
              id="pajak"
              placeholder="Masukan pajak"
              className="w-full p-2 border border-gray-300 rounded-md"
              value={pajak}
              onChange={(e) => setPajak(parseFloat(e.target.value))}
            />
          </div>
        </form>

        <div className="mt-6 flex justify-end space-x-4">
          <button
            type="button"
            onClick={onClose}
            className="px-5 py-2 bg-gray-500 text-white rounded hover:bg-gray-600"
          >
            Batal
          </button>
          <button
            type="submit"
            className="px-5 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            Kirim
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddItem;
