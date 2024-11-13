import iconMap from "../../Data/iconMap.tsx";
import SearchBar from "../../Components/Search.tsx";
import { useState } from "react";
const FarmPage = () => {
  const [modal, setModal] = useState<false | true>(false);
  const [currentStep, setCurrentStep] = useState(1);
  const [rows, setRows] = useState([{ farmName: "", blockName: "" }]);
  const [rowsStep3, setRowsStep3] = useState([
    {
      kodeKandang: "",
      namaKandang: "",
      namaBlok: "",
      Luas: "",
      Populasi: "",
      MaxPopulasi: 0,
      Keterangan: "",
    },
  ]);

  const handleAddRowStep3 = () => {
    setRowsStep3([
      ...rowsStep3,
      {
        kodeKandang: "",
        namaKandang: "",
        namaBlok: "",
        Luas: "",
        Populasi: "",
        MaxPopulasi: 0,
        Keterangan: "",
      },
    ]);
  };
  const handleRemoveRowStep3 = (index: number) => {
    const updatedRows = rowsStep3.filter((_, rowIndex) => rowIndex !== index);
    setRowsStep3(updatedRows);
  };
  // Function to handle adding new rows
  const handleRowStep3Change = (
    index: number,
    field: string,
    value: string | number
  ) => {
    const updatedRows = rowsStep3.map((row, rowIndex) =>
      rowIndex === index ? { ...row, [field]: value } : row
    );
    setRowsStep3(updatedRows);
  };
  const handleAddRow = () => {
    setRows([...rows, { farmName: "", blockName: "" }]);
  };
  const handleRemoveRow = (index: number) => {
    const updatedRows = rows.filter((_, rowIndex) => rowIndex !== index);
    setRows(updatedRows);
  };
  const handleInputChange = (index: number, field: string, value: string) => {
    const updatedRows = rows.map((row, rowIndex) =>
      rowIndex === index ? { ...row, [field]: value } : row
    );
    setRows(updatedRows);
  };

  const handleSearch = (searchQuery: string) => {
    console.log("Search Query:", searchQuery);
  };

  const handleNext = () => {
    if (currentStep < 3) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrevious = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };
  // const handleAddClick = () => {
  //   console.log("Tambah button clicked");
  //   setModal(!modal);
  // };
  const [area, setArea] = useState("");
  const [farmName, setFarmName] = useState("");
  const [address, setAddress] = useState("");
  const [farmType, setFarmType] = useState("ownFarm");
  const [partnership, setPartnership] = useState("");
  const [farmHead, setFarmHead] = useState("");
  const [status, setStatus] = useState("milikPribadi");
  return (
    <div className="block w-full">
      <div className="w-full text-sm breadcrumbs">
        <ul>
          <li>
            <a>Master Data</a>
          </li>
          <li>
            <a>Farm</a>
          </li>
        </ul>
      </div>
      <SearchBar onSearch={handleSearch} />
      <div className="overflow-x-auto rounded-lg">
        <table className="table table-lg ">
          <thead className="bg-gray-200 ">
            <tr>
              <th>No</th>
              <th>Nama Farm</th>
              <th>Area</th>
              <th>Status</th>
              <th>Performa</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody className="bg-gray-100">
            <tr>
              <th>1</th>
              <td>Test 1</td>
              <td>PT Mitra Berlian Unggas</td>
              <td>Milik Sendiri</td>
              <td>Baik</td>
              <td>
                <button className="btn btn-ghost">
                  <iconMap.PiNotePencil size={20} />
                </button>
                <button className="btn btn-ghost">
                  <iconMap.PiTrash size={20} />
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      {modal && (
        <dialog
          id="create"
          className="modal modal-open"
          onClick={() => setModal(false)}
        >
          <div
            className="modal-box min-w-[1200px]"
            onClick={(e) => e.stopPropagation()}
          >
            <form>
              {/* Step Indicators */}
              <ul className="w-full mb-4 steps">
                <li
                  className={`step ${currentStep >= 1 ? "step-primary " : ""}`}
                >
                  Farm
                </li>
                <li
                  className={`step ${currentStep >= 2 ? "step-primary" : ""}`}
                >
                  Blok
                </li>
                <li
                  className={`step ${currentStep >= 3 ? "step-primary" : ""}`}
                >
                  Kandang
                </li>
              </ul>

              {/* Step Content */}
              {currentStep === 1 && (
                <div className="p-5 bg-gray-100 card">
                  <form>
                    {/* Area Dropdown */}
                    <div className="mb-4">
                      <label className="label">Nama Area</label>
                      <select
                        className="w-full select select-bordered"
                        value={area}
                        onChange={(e) => setArea(e.target.value)}
                      >
                        <option value="">Pilih Area</option>
                        <option value="Area 1">Area 1</option>
                        <option value="Area 2">Area 2</option>
                        <option value="Area 3">Area 3</option>
                      </select>
                    </div>

                    {/* Farm Name Input */}
                    <div className="mb-4">
                      <label className="label">Nama Farm</label>
                      <input
                        type="text"
                        placeholder="Masukkan nama farm"
                        className="w-full input input-bordered"
                        value={farmName}
                        onChange={(e) => setFarmName(e.target.value)}
                      />
                    </div>

                    {/* Address Text Area */}
                    <div className="mb-4">
                      <label className="label">Alamat Farm</label>
                      <textarea
                        placeholder="Masukkan alamat farm"
                        className="w-full textarea textarea-bordered"
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                      />
                    </div>

                    {/* Farm Type Radio Buttons */}
                    <div className="mb-4">
                      <label className="label">Jenis Farm</label>
                      <div className="flex gap-4">
                        <label className="flex items-center gap-2">
                          <input
                            type="radio"
                            name="farmType"
                            value="ownFarm"
                            checked={farmType === "ownFarm"}
                            onChange={(e) => setFarmType(e.target.value)}
                          />
                          Own Farm
                        </label>
                        <label className="flex items-center gap-2">
                          <input
                            type="radio"
                            name="farmType"
                            value="kemitraan"
                            checked={farmType === "kemitraan"}
                            onChange={(e) => setFarmType(e.target.value)}
                          />
                          Kemitraan
                        </label>
                      </div>
                    </div>

                    {/* Partnership Dropdown (Visible only if farmType is Kemitraan) */}
                    {farmType === "kemitraan" && (
                      <div className="mb-4">
                        <label className="label">Kemitraan</label>
                        <select
                          className="w-full select select-bordered"
                          value={partnership}
                          onChange={(e) => setPartnership(e.target.value)}
                        >
                          <option value="">Pilih Kemitraan</option>
                          <option value="Kemitraan A">Kemitraan A</option>
                          <option value="Kemitraan B">Kemitraan B</option>
                          <option value="Kemitraan C">Kemitraan C</option>
                        </select>
                      </div>
                    )}

                    {/* Farm Head Input */}
                    <div className="mb-4">
                      <label className="label">Kepala Farm</label>
                      <input
                        type="text"
                        placeholder="Masukkan nama kepala farm"
                        className="w-full input input-bordered"
                        value={farmHead}
                        onChange={(e) => setFarmHead(e.target.value)}
                      />
                    </div>

                    {/* Status Radio Buttons */}
                    <div className="mb-4">
                      <label className="label">Status</label>
                      <div className="flex gap-4">
                        <label className="flex items-center gap-2">
                          <input
                            type="radio"
                            name="status"
                            value="milikPribadi"
                            checked={status === "milikPribadi"}
                            onChange={(e) => setStatus(e.target.value)}
                          />
                          Milik Pribadi
                        </label>
                        <label className="flex items-center gap-2">
                          <input
                            type="radio"
                            name="status"
                            value="kerjasama"
                            checked={status === "kerjasama"}
                            onChange={(e) => setStatus(e.target.value)}
                          />
                          Kerjasama
                        </label>
                      </div>
                    </div>

                    {/* Navigation Buttons */}
                    {/* <div className="flex justify-between mt-4">
                      <button
                        type="button"
                        className="btn bg-[#00499E] text-white"
                        onClick={handleNext}
                      >
                        Next
                      </button>
                    </div> */}
                  </form>
                </div>
              )}
              {currentStep === 2 && (
                <div>
                  <div className="flex justify-end w-full">
                    <button
                      type="button"
                      className="btn bg-[#00499E] text-white mb-4"
                      onClick={handleAddRow}
                    >
                      Tambah
                    </button>
                  </div>
                  <div className="bg-gray-100 card ">
                    <form>
                      {/* Table Container */}
                      <div className="overflow-x-auto rounded-lg">
                        <table className="table w-full table-md">
                          {/* Table Head */}
                          <thead className="bg-gray-200">
                            <tr>
                              <th className="p-2 text-center">Nama Farm</th>
                              <th className="p-2 text-center">Nama Blok</th>
                              <th className="p-2 text-center">Action</th>
                            </tr>
                          </thead>

                          {/* Table Body */}
                          <tbody className="bg-gray-100">
                            {rows.map((row, index) => (
                              <tr key={index}>
                                {/* Nama Farm Input */}
                                <td className="p-2">
                                  <input
                                    type="text"
                                    placeholder="Masukkan nama farm"
                                    className="w-full input input-bordered"
                                    value={row.farmName}
                                    onChange={(e) =>
                                      handleInputChange(
                                        index,
                                        "farmName",
                                        e.target.value
                                      )
                                    }
                                  />
                                </td>

                                {/* Nama Blok Input */}
                                <td className="p-2">
                                  <input
                                    type="text"
                                    placeholder="Masukkan nama blok"
                                    className="w-full input input-bordered"
                                    value={row.blockName}
                                    onChange={(e) =>
                                      handleInputChange(
                                        index,
                                        "blockName",
                                        e.target.value
                                      )
                                    }
                                  />
                                </td>

                                {/* Delete Button */}
                                <td className="p-2">
                                  {rows.length > 1 ? (
                                    <button
                                      type="button"
                                      className="text-white btn btn-error"
                                      onClick={() => handleRemoveRow(index)}
                                    >
                                      Hapus
                                    </button>
                                  ) : (
                                    <div className="w-20"></div>
                                  )}
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </form>
                  </div>
                </div>
              )}
              {currentStep === 3 && (
                <div>
                  <div className="flex justify-end w-full">
                    <button
                      type="button"
                      className="btn bg-[#00499E] text-white mb-4"
                      onClick={handleAddRowStep3}
                    >
                      Tambah
                    </button>
                  </div>
                  <div className="bg-gray-100 card">
                    <form>
                      {/* Table Container */}
                      <div className="overflow-x-auto rounded-lg ">
                        <table className="table w-full table-md">
                          {/* Table Head */}
                          <thead className="bg-gray-200">
                            <tr>
                              <th className="p-2 text-center">Nama Blok</th>
                              <th className="p-2 text-center">Kode Kandang</th>
                              <th className="p-2 text-center">Nama Kandang</th>
                              <th className="p-2 text-center">Luas</th>
                              <th className="p-2 text-center">Populasi</th>
                              <th className="p-2 text-center">Max Populasi</th>
                              <th className="p-2 text-center">Keterangan</th>
                              <th className="p-2 text-center">Action</th>
                            </tr>
                          </thead>

                          {/* Table Body */}
                          <tbody className="bg-gray-100">
                            {rowsStep3.map((row, index) => (
                              <tr key={index}>
                                {/* Nama Farm Input */}
                                <td className="p-2">
                                  <input
                                    type="text"
                                    placeholder="Masukkan nama farm"
                                    className="w-full input input-bordered"
                                    value={row.namaBlok}
                                    onChange={(e) =>
                                      handleRowStep3Change(
                                        index,
                                        "namaBlok",
                                        e.target.value
                                      )
                                    }
                                  />
                                </td>

                                {/* Nama Blok Input */}

                                <td className="p-2">
                                  <input
                                    type="text"
                                    placeholder="Masukkan nama blok"
                                    className="w-full input input-bordered"
                                    value={row.kodeKandang}
                                    onChange={(e) =>
                                      handleRowStep3Change(
                                        index,
                                        "kodeKandang",
                                        e.target.value
                                      )
                                    }
                                  />
                                </td>
                                <td className="p-2">
                                  <input
                                    type="text"
                                    placeholder="Masukkan nama blok"
                                    className="w-full input input-bordered"
                                    value={row.namaKandang}
                                    onChange={(e) =>
                                      handleRowStep3Change(
                                        index,
                                        "namaKandang",
                                        e.target.value
                                      )
                                    }
                                  />
                                </td>
                                <td className="p-2">
                                  <input
                                    type="text"
                                    placeholder="Masukkan nama blok"
                                    className="w-full input input-bordered"
                                    value={row.Luas}
                                    onChange={(e) =>
                                      handleRowStep3Change(
                                        index,
                                        "Luas",
                                        e.target.value
                                      )
                                    }
                                  />
                                </td>
                                <td className="p-2">
                                  <input
                                    type="text"
                                    placeholder="Masukkan nama blok"
                                    className="w-full input input-bordered"
                                    value={row.Populasi}
                                    onChange={(e) =>
                                      handleRowStep3Change(
                                        index,
                                        "Populasi",
                                        e.target.value
                                      )
                                    }
                                  />
                                </td>
                                <td className="p-2">
                                  <input
                                    type="number"
                                    placeholder="Masukkan nama blok"
                                    className="w-full input input-bordered"
                                    value={row.MaxPopulasi}
                                    onChange={(e) =>
                                      handleRowStep3Change(
                                        index,
                                        "MaxPopulasi",
                                        e.target.value
                                      )
                                    }
                                  />
                                </td>
                                <td className="p-2">
                                  <input
                                    type="text"
                                    placeholder="Masukkan nama blok"
                                    className="w-full input input-bordered"
                                    value={row.Keterangan}
                                    onChange={(e) =>
                                      handleRowStep3Change(
                                        index,
                                        "Keterangan",
                                        e.target.value
                                      )
                                    }
                                  />
                                </td>
                                {/* Delete Button */}
                                <td className="p-2">
                                  {rowsStep3.length > 1 ? (
                                    <button
                                      type="button"
                                      className="text-white btn btn-error"
                                      onClick={() =>
                                        handleRemoveRowStep3(index)
                                      }
                                    >
                                      Hapus
                                    </button>
                                  ) : (
                                    <div className="w-20"></div>
                                  )}
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </form>
                  </div>
                </div>
              )}

              {/* Navigation Buttons */}
              <div className="flex justify-between mt-4">
                <button
                  type="button"
                  className={`btn ${currentStep === 1 ? "btn-disabled" : ""}`}
                  onClick={handlePrevious}
                  disabled={currentStep === 1}
                >
                  Previous
                </button>
                <button
                  type="button"
                  className={`btn ${currentStep === 3 ? "btn-disabled" : ""}`}
                  onClick={handleNext}
                  disabled={currentStep === 3}
                >
                  Next
                </button>
              </div>
            </form>
          </div>
          <form method="dialog" className="modal-backdrop">
            <button>close</button>
          </form>
        </dialog>
      )}
    </div>
  );
};
export default FarmPage;
