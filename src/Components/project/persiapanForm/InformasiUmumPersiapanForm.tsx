const InformasiUmumForm = () => {
  return (
    <div>
      <div className="grid grid-cols-2 gap-4 pb-3 m-5 md:grid-cols-3 xl:grid-cols-5">
        <div>
          <label htmlFor="idProject">Id Project</label>
          <input
            type="text"
            id="idProject"
            className="block w-full px-2 py-1 mt-1 bg-gray-100 border border-gray-300 rounded-sm shadow-sm focus:ring-primary"
            disabled
          />
        </div>

        <div>
          <label htmlFor="unitBisnis">Unit Bisnis</label>
          <input
            type="text"
            id="unitBisnis"
            className="block w-full px-2 py-1 mt-1 bg-gray-100 border border-gray-300 focus:ring-primary"
            disabled
            value="PT Mitra Berlian Unggas"
          />
        </div>

        <div>
          <label htmlFor="area">Area</label>
          <input
            type="text"
            id="area"
            className="block w-full px-2 py-1 mt-1 bg-gray-100 border border-gray-300 focus:ring-primary"
            disabled
            value="Banten"
          />
        </div>

        <div>
          <label htmlFor="lokasi">Lokasi</label>
          <input
            type="text"
            id="lokasi"
            className="block w-full px-2 py-1 mt-1 bg-gray-100 border border-gray-300 focus:ring-primary"
            disabled
            value="Cimarga"
          />
        </div>

        <div>
          <label htmlFor="produk">Produk</label>
          <input
            type="text"
            id="produk"
            className="block w-full px-2 py-1 mt-1 bg-gray-100 border border-gray-300 focus:ring-primary"
            disabled
            value="Broiler"
          />
        </div>

        <div>
          <label htmlFor="namaKandang">Nama Kandang</label>
          <input
            type="text"
            id="namaKandang"
            className="block w-full px-2 py-1 mt-1 bg-gray-100 border border-gray-300 focus:ring-primary"
            disabled
            value="Cimarga 2"
          />
        </div>
      </div>

      <hr />
    </div>
  );
};

export default InformasiUmumForm;
