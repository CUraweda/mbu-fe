import { useState } from "react";
import SearchBar from "../../Components/searchBar";
import iconMap from "../../Data/iconMap";
const ProjectPage = () => {
  const [area, setArea] = useState("");
  const [modal, setModal] = useState<false | true>(false);
  const [currentStep, setCurrentStep] = useState(1);
  // const [rows, setRows] = useState([
  //   {
  //     tanggal_mulai: "",
  //     kategori_proyek: "",
  //     nama_area: "",
  //     nama_farm: "",
  //     periode_projek: "",
  //     nama_kandang: 0,
  //     fcr: "",
  //     mortalitas_calculation: "",
  //     closing_calculation: "",
  //   },
  // ]);
  const [formOwnFarm, setFormOwnFarm] = useState({
    tanggal_mulai: "",
    kategori_proyek: "",
    nama_area: "",
    nama_farm: "",
    periode_projek: "",
    nama_kandang: 0,
    fcr: "",
    mortalitas_calculation: "",
    closing_calculation: "",
  });
  const [formStepTwo, setFormStepTwo] = useState({
    judul: "Test 1 - Aldi",
    textarea: "",
    selectAll: false,
    checks: {
      kandang_bersih: false,
      gasolex: false,
      regulator: false,
      tempat_minum: false,
      tempat_pakan: false,
      lampu: false,
      tirai_terpal: false,
      tirai_plastik: false,
      seng_brooding: false,
      water_filter: false,
      sekatan: false,
      sekam: false,
      koran: false,
      lingkungan: false,
    },
  });
  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormOwnFarm({
      ...formOwnFarm,
      [name]: value,
    });
    ``;
  };
  const handleInputChangeKandang = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value, type } = e.target;

    if (type === "checkbox" && e.target instanceof HTMLInputElement) {
      // Handle checkboxes separately
      const checked = e.target.checked;
      setFormStepTwo({
        ...formStepTwo,
        [name]: checked,
      });
    } else {
      // Handle input, select, and textarea
      setFormStepTwo({
        ...formStepTwo,
        [name]: value,
      });
    }
  };

  const handleSelectAll = () => {
    const allChecked = !formStepTwo.selectAll;
    setFormStepTwo({
      ...formStepTwo,
      selectAll: allChecked,
      // checks: Object.fromEntries(
      //   Object.keys(formStepTwo.checks).map((key) => [key, allChecked])
      // ),
    });
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
  const handleSearch = (searchQuery: string) => {
    console.log("Search Query: " + searchQuery);
  };
  const handleAddClick = () => {
    setModal(!modal);
  };
  return (
    <div className="w-full block">
      <div className="breadcrumbs text-sm w-full">
        <ul>
          <li>
            <a>Project</a>
          </li>
        </ul>
      </div>
      <SearchBar onSearch={handleSearch} onAddClick={handleAddClick}>
        <div className="mb-4">
          <select
            className="select select-bordered w-full"
            value={area}
            onChange={(e) => setArea(e.target.value)}
          >
            <option value="">Pilih Area</option>
            <option value="Area 1">Area 1</option>
            <option value="Area 2">Area 2</option>
            <option value="Area 3">Area 3</option>
          </select>
        </div>
        <div className="mb-4">
          <select
            className="select select-bordered w-full"
            value={area}
            onChange={(e) => setArea(e.target.value)}
          >
            <option value="">Jenis Project</option>
            <option value="Project 1">Project 1</option>
            <option value="Project 2">Project 2</option>
            <option value="Project 3">Project 3</option>
          </select>
        </div>
        <div className="mb-4">
          <select
            className="select select-bordered w-full"
            value={area}
            onChange={(e) => setArea(e.target.value)}
          >
            <option value="">Status</option>
            <option value="Status 1">Status 1</option>
            <option value="Status 2">Status 2</option>
            <option value="Status 3">Status 3</option>
          </select>
        </div>
      </SearchBar>
      <div className="overflow-x-auto rounded-lg">
        <table className="table table-lg ">
          <thead className="bg-gray-200 ">
            <tr>
              <th>No</th>
              <th>Nama Farm</th>
              <th>Periode</th>
              <th>Tanggal Mulai</th>
              <th>Area</th>
              <th>Kategori Project</th>
              <th>Jenis Project</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody className="bg-gray-100 ">
            <tr>
              <th>1</th>
              <td>Test 1</td>
              <td>26</td>
              <td>15 Juli 2024</td>
              <td>PT Mitra Berlian Unggas</td>
              <td>BROILER</td>
              <td>Kemitraan</td>
              <td>Sedang Berjalan</td>
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
              <ul className="steps mb-4 w-full">
                <li
                  className={`step ${currentStep >= 1 ? "step-primary " : ""}`}
                >
                  Own Farm
                </li>
                <li
                  className={`step ${currentStep >= 2 ? "step-primary" : ""}`}
                >
                  Kandang
                </li>
                <li
                  className={`step ${currentStep >= 3 ? "step-primary" : ""}`}
                >
                  Chickin
                </li>
                <li
                  className={`step ${currentStep >= 3 ? "step-primary" : ""}`}
                >
                  Anak Kandang
                </li>
                <li
                  className={`step ${currentStep >= 3 ? "step-primary" : ""}`}
                >
                  Budgeting
                </li>
              </ul>

              {/* Step Content */}
              {currentStep === 1 && (
                <div className="card p-5">
                  <div className="card bg-gray-100 p-5">
                    <h6 className="font-bold">Informasi Project</h6>
                    <form className="grid grid-cols-2 gap-4">
                      {/* Tanggal Mulai */}
                      <div className="mb-4">
                        <label className="label">Tanggal Mulai</label>
                        <input
                          type="date"
                          name="tanggal_mulai"
                          value={formOwnFarm.tanggal_mulai}
                          onChange={handleInputChange}
                          className="input input-bordered w-full"
                        />
                      </div>

                      {/* Nama Farm */}
                      <div className="mb-4">
                        <label className="label">Nama Farm</label>
                        <select
                          name="nama_farm"
                          value={formOwnFarm.nama_farm}
                          onChange={handleInputChange}
                          className="select select-bordered w-full"
                        >
                          <option value="">Pilih Farm</option>
                          <option value="Farm 1">Farm 1</option>
                          <option value="Farm 2">Farm 2</option>
                        </select>
                      </div>
                      {/* Kategori Proyek */}
                      <div className="mb-4">
                        <label className="label">Kategori Proyek</label>
                        <select
                          name="kategori_proyek"
                          value={formOwnFarm.kategori_proyek}
                          onChange={handleInputChange}
                          className="select select-bordered w-full"
                        >
                          <option value="">Pilih Kategori Proyek</option>
                          <option value="Kategori 1">Kategori 1</option>
                          <option value="Kategori 2">Kategori 2</option>
                        </select>
                      </div>

                      {/* Periode Proyek */}
                      <div className="mb-4">
                        <label className="label">Periode Proyek</label>
                        <input
                          type="number"
                          name="periode_projek"
                          value={formOwnFarm.periode_projek}
                          onChange={handleInputChange}
                          className="input input-bordered w-full"
                        />
                      </div>

                      {/* Nama Area */}
                      <div className="mb-4">
                        <label className="label">Nama Area</label>
                        <select
                          name="nama_area"
                          value={formOwnFarm.nama_area}
                          onChange={handleInputChange}
                          className="select select-bordered w-full"
                        >
                          <option value="">Pilih Area</option>
                          <option value="Area 1">Area 1</option>
                          <option value="Area 2">Area 2</option>
                        </select>
                      </div>
                      {/* Nama Kandang */}
                      <div className="mb-4">
                        <label className="label">Nama Kandang</label>
                        <select
                          name="nama_kandang"
                          value={formOwnFarm.nama_kandang}
                          onChange={handleInputChange}
                          className="select select-bordered w-full"
                        >
                          <option value={0}>Pilih Kandang</option>
                          <option value={1}>Kandang 1</option>
                          <option value={2}>Kandang 2</option>
                        </select>
                      </div>
                    </form>
                  </div>

                  <div className="card bg-gray-100 p-5 mt-5">
                    <h6 className="font-bold">Setting Project</h6>

                    <form className=" gap-4 ">
                      {/* FCR */}
                      <div className="mb-4">
                        <label className="label">Standarisasi FCR</label>
                        <input
                          type="text"
                          name="fcr"
                          value={formOwnFarm.fcr}
                          onChange={handleInputChange}
                          className="input input-bordered w-full"
                        />
                      </div>

                      {/* Mortalitas Calculation */}
                      <div className="mb-4 grid grid-cols-2">
                        <div className="mb-4">
                          <label className="label">
                            Perhitungan Mortalitas (Closing)
                          </label>
                          <div className="block gap-4 mx-2">
                            <label className="flex items-center my-2 bg-white p-5 rounded-lg">
                              <input
                                type="radio"
                                name="mortalitas_calculation"
                                value="Data Recording Harian"
                                checked={
                                  formOwnFarm.mortalitas_calculation ===
                                  "Data Recording Harian"
                                }
                                onChange={handleInputChange}
                                className="radio radio-primary"
                              />
                              <span className="ml-2">
                                Data Recording Harian
                              </span>
                            </label>
                            <label className="flex items-center my-2 bg-white p-5 rounded-lg">
                              <input
                                type="radio"
                                name="mortalitas_calculation"
                                value="Kuantitas Chick-IN dikurangi Penjualan"
                                checked={
                                  formOwnFarm.mortalitas_calculation ===
                                  "Kuantitas Chick-IN dikurangi Penjualan"
                                }
                                onChange={handleInputChange}
                                className="radio radio-primary"
                              />
                              <span className="ml-2">
                                Kuantitas Chick-IN dikurangi Penjualan
                              </span>
                            </label>
                          </div>
                        </div>
                        {/* Closing Calculation */}
                        <div className="mb-4">
                          <label className="label">
                            Pengakuan Jumlah Culling Pengurangan Chick-IN di
                            Closing
                          </label>
                          <div className="block gap-4">
                            <label className="flex items-center my-2 bg-white p-5 rounded-lg">
                              <input
                                type="radio"
                                name="closing_calculation"
                                value="Jumlah Culling"
                                checked={
                                  formOwnFarm.closing_calculation ===
                                  "Jumlah Culling"
                                }
                                onChange={handleInputChange}
                                className="radio radio-primary"
                              />
                              <span className="ml-2">Jumlah Culling</span>
                            </label>
                            <label className="flex items-center my-2 bg-white p-5 rounded-lg">
                              <input
                                type="radio"
                                name="closing_calculation"
                                value="Jumlah Culling (plus + Jumlah Pemusnahan Data Harian)"
                                checked={
                                  formOwnFarm.closing_calculation ===
                                  "Jumlah Culling (plus + Jumlah Pemusnahan Data Harian)"
                                }
                                onChange={handleInputChange}
                                className="radio radio-primary"
                              />
                              <span className="ml-2">
                                Jumlah Culling (plus / + Jumlah Pemusnahan Data
                                Harian)
                              </span>
                            </label>
                          </div>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              )}
              {currentStep === 2 && (
                <div className="card bg-gray-100 p-5">
                  <form className="grid grid-cols-2 gap-4">
                    {/* Title */}
                    <div className="col-span-2">
                      <label className="label font-bold">
                        {formStepTwo.judul}
                      </label>
                    </div>

                    {/* Text Area */}
                    <div className="col-span-1">
                      <label className="label">Textarea</label>
                      <textarea
                        name="textarea"
                        value={formStepTwo.textarea}
                        onChange={handleInputChangeKandang}
                        className="textarea textarea-bordered w-full"
                      />
                    </div>

                    {/* Select All */}
                    <div className="col-span-1">
                      <li>
                        Kandang bersih Gasolex berfungsi dengan baik Regulator
                      </li>
                      <li>
                        sudah terpasang Tempat minum otomatis / manual sudah
                      </li>
                      <li>
                        bersih Tempat pakan sudah bersih Lampu dalam dan luar
                      </li>
                      <li>
                        kandang sudah terpasang Tirai terpal biru dalam kondisi
                      </li>
                      <li>
                        baik dan terpasang Tirai plastik bening dalam kondisi
                        baik
                      </li>
                      <li>
                        dan sudah terpasang Seng brooding dalam kondisi baik dan
                      </li>
                      <li>
                        sudah terpasang Water filter dalam kondisi baik dan
                        sudah
                      </li>
                      <li>
                        terpasang Sekatan dalam kondisi baik Sekam sudah
                        tersedia
                      </li>
                      <li>
                        Koran sudah terpasang di brooding Lingkungan bersih
                      </li>
                    </div>
                  </form>
                </div>
              )}
              {currentStep === 3 && (
                <div className="card bg-gray-100 p-5">
                  <form>
                    {/* Area Dropdown */}
                    <div className="mb-4"></div>
                  </form>
                </div>
              )}
              {/* Navigation Buttons */}
              <div className="mt-4 flex justify-between">
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
export default ProjectPage;
