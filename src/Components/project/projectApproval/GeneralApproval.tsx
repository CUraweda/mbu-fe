const ProjectApproval = () => {
  return (
    <div>
      <div className="grid grid-cols-2 gap-4 pb-3 m-5 md:grid-cols-3 xl:grid-cols-5">
        <div>
          <label htmlFor="idProject">Id Project</label>
          <input
            disabled
            type="text"
            id="idProject"
            className="block w-full px-2 py-1 mt-1 bg-gray-100 border border-gray-300 rounded-sm shadow-sm focus:ring-primary"
          />
        </div>

        <div>
          <label htmlFor="unitBisnis">Unit Bisnis</label>
          <input
            disabled
            type="text"
            id="unitBisnis"
            className="block w-full px-2 py-1 mt-1 bg-gray-100 border border-gray-300 rounded-sm shadow-sm focus:ring-primary"
          />
        </div>

        <div>
          <label htmlFor="area">Area</label>
          <select
            disabled
            id="area"
            className="block w-full px-2 py-1 mt-1 bg-gray-100 border border-gray-300 rounded-sm shadow-sm focus:ring-primary"
          >
            <option value="">Pilih Area</option>\{" "}
          </select>
        </div>

        <div>
          <label htmlFor="lokasi">Lokasi</label>
          <select
            disabled
            id="lokasi"
            className="block w-full px-2 py-1 mt-1 bg-gray-100 border border-gray-300 rounded-sm shadow-sm focus:ring-primary"
          >
            <option value="">Pilih Lokasi</option>
          </select>
        </div>

        <div>
          <label htmlFor="produk">Produk</label>
          <select
            disabled
            id="produk"
            className="block w-full px-2 py-1 mt-1 bg-gray-100 border border-gray-300 rounded-sm shadow-sm focus:ring-primary"
          >
            <option value="">Pilih Produk</option>
          </select>
        </div>

        <div>
          <label htmlFor="tanggalMulai">Tanggal Mulai</label>
          <select
            disabled
            id="tanggalMulai"
            className="block w-full px-2 py-1 mt-1 bg-gray-100 border border-gray-300 rounded-sm shadow-sm focus:ring-primary"
          >
            <option value="">02-02-2020</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default ProjectApproval;
