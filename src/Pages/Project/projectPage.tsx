import { useState } from "react";
import SearchBar from "../../Components/searchBar";
import iconMap from "../../Data/iconMap";
import LayoutProject from "../../Layouts/layoutProject";
// import Swal from "sweetalert2";
import Breadcrumb from "../../Components/bread";
const breadcrumbItems = [
  { label: "Home", link: "/" },
  { label: "Project", link: "/project" },
  { label: "List Project" },
];
const ProjectPage = () => {
  const [area, setArea] = useState("");
  const [modal, setModal] = useState<false | true>(false);
  const [currentStep, setCurrentStep] = useState(1);

  const initialData = [
    { id: 1, name: "Jhon", desc: "" },
    { id: 2, name: "Doe", desc: "" },
    { id: 3, name: "Jane", desc: "" },
  ];
  const [formData, setFormData] = useState<any[]>(initialData);
  const [selectedItems, setSelectedItems] = useState<number[]>([]);
  const [selectedOptions, setSelectedOptions] = useState<{
    [key: number]: string;
  }>({});

  // Fungsi untuk menangani perubahan radio button
  const handleRadioChange = (testId: number, value: string) => {
    setSelectedOptions((prev) => ({ ...prev, [testId]: value }));
  };
  const [rows, setRows] = useState<any[]>([
    {
      Kandang: "",
      Populasi: "",
      Pemeliharaan_DOC_IN: "",
      Pemeliharaan_Akhir: "",
      Panen_Awal: "",
      Panen_Akhir: "",
      Cuci_Kandang_Awal: "",
      Cuci_Kandang_Akhir: "",
      Istirahat_Kandang_Awal: "",
      Istiraha_Kandang_Akhir: "",
      Ketearngan: "",
    },
  ]);

  const [rowsBudgeting, setRowsBudgeting] = useState<any[]>([
    {
      Jenis: "",
      start_date: "",
      end_date: "",
      kebutuhan: "",
      satuan_standarisasi: "",
      harga: "",
      stok: "",
      pengajuan: "",
      satuan_pengajuan: "",
      total: "",
      periode: "",
      harga_ekor: "",
      estimasi: "",
    },
  ]);
  const testsData = [
    {
      id: 1,
      title: "TEST 1 - 45.000 EKOR",
      options: [
        { value: "Cek Semua", label: "Cek Semua" },
        { value: "ABK - ABK", label: "ABK - ABK" },
      ],
    },
    {
      id: 2,
      title: "TEST 2 - 45.000 EKOR",
      options: [
        { value: "Cek Semua", label: "Cek Semua" },
        { value: "ABK - ABK", label: "ABK - ABK" },
      ],
    },
  ];
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
  const handleSkip = () => {
    if (currentStep < testsData.length) {
      setCurrentStep(currentStep + 1);
    }
  };

  // Fungsi untuk menampilkan alert saat finish
  // const handleFinish = () => {
  //   Swal.fire({
  //     title: "Apakah Anda yakin?",
  //     text: "Anda akan menyelesaikan semua test!",
  //     icon: "warning",
  //     showCancelButton: true,
  //     confirmButtonColor: "#3085d6",
  //     cancelButtonColor: "#d33",
  //     confirmButtonText: "Ya, selesai!",
  //     cancelButtonText: "Batal",
  //   }).then((result) => {
  //     if (result.isConfirmed) {
  //       Swal.fire(
  //         "Selesai!",
  //         "Anda telah menyelesaikan semua test.",
  //         "success"
  //       );
  //     }
  //   });
  // };
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
  const handleInputstep5Change = (
    index: number,
    field: string,
    value: string
  ) => {
    const updatedRows = [...rowsBudgeting];
    updatedRows[index][field] = value;
    setRowsBudgeting(updatedRows);
  };

  const handleInputStep3Change = (index: number, field: any, value: string) => {
    const updatedRows = [...rows];
    updatedRows[index][field] = value;
    setRows(updatedRows);
  };

  const handleInputStep2Change = (
    id: number,
    event: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    const newData = formData.map((item) =>
      item.id === id ? { ...item, desc: event.target.value } : item
    );
    setFormData(newData);
    console.log("Updated data:", newData);
  };

  // Handle checkbox perubahan individu
  const handleCheckboxChange = (id: number) => {
    setSelectedItems((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };
  const handleSelectAllChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.checked) {
      const allIds = formData.map((item) => item.id);
      setSelectedItems(allIds);
    } else {
      setSelectedItems([]);
    }
  };
  // const handleRemoveRow = (index: number) => {
  //   const updatedRows = rows.filter((_, rowIndex) => rowIndex !== index);
  //   setRows(updatedRows);
  // };

  const handleNext = () => {
    if (currentStep < 5) {
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
      <Breadcrumb items={breadcrumbItems} />
      <LayoutProject>
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
              className="modal-box xl:min-w-[1200px]"
              onClick={(e) => e.stopPropagation()}
            >
              <form>
                {/* Step Indicators */}
                <ul className="steps mb-4 w-full">
                  <li
                    className={`step ${
                      currentStep >= 1 ? "step-primary " : ""
                    }`}
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
                    className={`step ${currentStep >= 4 ? "step-primary" : ""}`}
                  >
                    Anak Kandang
                  </li>
                  <li
                    className={`step ${currentStep >= 5 ? "step-primary" : ""}`}
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
                                  Jumlah Culling (plus / + Jumlah Pemusnahan
                                  Data Harian)
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
                  <div className="card bg-gray-100 p-5 grid grid-cols-2">
                    <div className="">
                      <h3>Test (1)</h3>
                      <div className="my-2 border-dashed border-b-2" />
                      <form className="grid grid-cols-2 gap-4 bg-white rounded-md p-4">
                        {/* Checkbox "Select All" */}
                        <div className="col-span-2 flex items-center bg-white rounded-md w-full p-4 shadow-md">
                          <input
                            type="checkbox"
                            className="checkbox checkbox-primary mr-4"
                            onChange={handleSelectAllChange}
                            checked={selectedItems.length === formData.length}
                          />
                          <label className="label font-bold">Select All</label>
                        </div>

                        {/* Render Textarea dan Checkbox Dinamis */}
                        {formData.map((item) => (
                          <div
                            key={item.id}
                            className="col-span-2 flex items-center "
                          >
                            <input
                              type="checkbox"
                              className="checkbox checkbox-primary mr-4"
                              checked={selectedItems.includes(item.id)}
                              onChange={() => handleCheckboxChange(item.id)}
                            />
                            <div className="w-full border-2 border-gray-200 rounded-xl p-2">
                              <label className="label">{item.name}</label>
                              <textarea
                                name={`textarea-${item.id}`}
                                value={item.desc}
                                onChange={(event) =>
                                  handleInputStep2Change(item.id, event)
                                }
                                className="textarea textarea-bordered w-full"
                              />
                            </div>
                          </div>
                        ))}

                        {/* Tombol Submit */}
                        {/* <div className="col-span-2">
                        <button
                          type="button"
                          className="btn btn-primary"
                          onClick={() =>
                            console.log("Selected Items:", selectedItems)
                          }
                        >
                          Submit
                        </button>
                      </div> */}
                      </form>
                    </div>
                    {/* Select All */}
                    <div className="px-5 w-full h-full">
                      <h2 className="font-bold uppercase">Keterangan</h2>
                      <div className="border-l-8 border-blue-400 my-5">
                        <h3 className="font-semibold uppercase text-xl pl-2  text-gray-500">
                          Ketentuan Persiapan Kandang Ayam Sebelum Penggunaan
                        </h3>
                      </div>
                      <div className=""></div>
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
                  </div>
                )}
                {currentStep === 3 && (
                  <div className="card bg-gray-100 p-5">
                    <form>
                      {/* Area Dropdown */}
                      <div className="mb-4">
                        <form>
                          {/* Table Container */}
                          <div className="rounded-lg overflow-x-auto">
                            <table className="table w-full table-md">
                              {/* Table Head */}
                              <thead className="bg-gray-200">
                                <tr>
                                  <th className="p-2 text-center" rowSpan={2}>
                                    No
                                  </th>
                                  <th className="p-2 text-center" rowSpan={2}>
                                    Kandang
                                  </th>
                                  <th className="p-2 text-center" rowSpan={2}>
                                    Populasi
                                  </th>
                                  <th className="p-2 text-center" colSpan={2}>
                                    Pemeliharaan (35 hari)
                                  </th>
                                  <th className="p-2 text-center" colSpan={2}>
                                    Panen (0 hari)
                                  </th>
                                  <th className="p-2 text-center" colSpan={2}>
                                    Cuci Kandang (14 hari)
                                  </th>

                                  <th className="p-2 text-center" colSpan={2}>
                                    Istirahat Kandang (0 hari)
                                  </th>
                                  <th className="p-2 text-center" rowSpan={2}>
                                    Keterangan
                                  </th>
                                </tr>
                                <tr>
                                  <th className="p-2 text-center">DOC IN</th>
                                  <th className="p-2 text-center">Akhir</th>
                                  <th className="p-2 text-center">Awal</th>
                                  <th className="p-2 text-center">Akhir</th>
                                  <th className="p-2 text-center">Awal</th>
                                  <th className="p-2 text-center">Akhir</th>
                                  <th className="p-2 text-center">Awal</th>
                                  <th className="p-2 text-center">Akhir</th>
                                </tr>
                              </thead>

                              {/* Table Body */}
                              <tbody className="bg-gray-100">
                                {rows.map((row, index) => (
                                  <tr key={index}>
                                    <td>{index + 1}</td>
                                    {/* Input Kandang */}
                                    <td className="p-2">
                                      <input
                                        type="text"
                                        value={row.Kandang}
                                        onChange={(e) =>
                                          handleInputStep3Change(
                                            index,
                                            "Kandang",
                                            e.target.value
                                          )
                                        }
                                        className="input input-bordered w-full"
                                      />
                                    </td>

                                    {/* Input Populasi */}
                                    <td className="p-2">
                                      <input
                                        type="text"
                                        value={row.Populasi}
                                        onChange={(e) =>
                                          handleInputStep3Change(
                                            index,
                                            "Populasi",
                                            e.target.value
                                          )
                                        }
                                        className="input input-bordered w-full"
                                      />
                                    </td>

                                    {/* Input Tanggal */}
                                    <td className="p-2">
                                      <input
                                        type="date"
                                        value={row.Pemeliharaan_DOC_IN}
                                        onChange={(e) =>
                                          handleInputStep3Change(
                                            index,
                                            "Pemeliharaan_DOC_IN",
                                            e.target.value
                                          )
                                        }
                                        className="input input-bordered w-full"
                                      />
                                    </td>
                                    <td className="p-2">
                                      <input
                                        type="date"
                                        value={row.Pemeliharaan_Akhir}
                                        onChange={(e) =>
                                          handleInputStep3Change(
                                            index,
                                            "Pemeliharaan_Akhir",
                                            e.target.value
                                          )
                                        }
                                        className="input input-bordered w-full"
                                      />
                                    </td>
                                    <td className="p-2">
                                      <input
                                        type="date"
                                        value={row.Panen_Awal}
                                        onChange={(e) =>
                                          handleInputStep3Change(
                                            index,
                                            "Panen_Awal",
                                            e.target.value
                                          )
                                        }
                                        className="input input-bordered w-full"
                                      />
                                    </td>
                                    <td className="p-2">
                                      <input
                                        type="date"
                                        value={row.Panen_Akhir}
                                        onChange={(e) =>
                                          handleInputStep3Change(
                                            index,
                                            "Panen_Akhir",
                                            e.target.value
                                          )
                                        }
                                        className="input input-bordered w-full"
                                      />
                                    </td>
                                    <td className="p-2">
                                      <input
                                        type="date"
                                        value={row.Cuci_Kandang_Awal}
                                        onChange={(e) =>
                                          handleInputStep3Change(
                                            index,
                                            "Cuci_Kandang_Awal",
                                            e.target.value
                                          )
                                        }
                                        className="input input-bordered w-full"
                                      />
                                    </td>
                                    <td className="p-2">
                                      <input
                                        type="date"
                                        value={row.Cuci_Kandang_Akhir}
                                        onChange={(e) =>
                                          handleInputStep3Change(
                                            index,
                                            "Cuci_Kandang_Akhir",
                                            e.target.value
                                          )
                                        }
                                        className="input input-bordered w-full"
                                      />
                                    </td>
                                    <td className="p-2">
                                      <input
                                        type="date"
                                        value={row.Istirahat_Kandang_Awal}
                                        onChange={(e) =>
                                          handleInputStep3Change(
                                            index,
                                            "Istirahat_Kandang_Awal",
                                            e.target.value
                                          )
                                        }
                                        className="input input-bordered w-full"
                                      />
                                    </td>
                                    <td className="p-2">
                                      <input
                                        type="date"
                                        value={row.Istiraha_Kandang_Akhir}
                                        onChange={(e) =>
                                          handleInputStep3Change(
                                            index,
                                            "Istirahat_Kandang_Akhir",
                                            e.target.value
                                          )
                                        }
                                        className="input input-bordered w-full"
                                      />
                                    </td>

                                    {/* Input Keterangan */}
                                    <td className="p-2">
                                      <input
                                        type="text"
                                        value={row.Ketearngan}
                                        onChange={(e) =>
                                          handleInputStep3Change(
                                            index,
                                            "Ketearngan",
                                            e.target.value
                                          )
                                        }
                                        className="input input-bordered w-full"
                                      />
                                    </td>
                                  </tr>
                                ))}
                              </tbody>
                            </table>
                          </div>
                        </form>
                      </div>
                    </form>
                  </div>
                )}
                {currentStep === 4 && (
                  <div className="card bg-gray-100">
                    <form className="p-5">
                      <h3 className="font-bold">Data Persiapan Anak Kandang</h3>
                      {/* Grid dengan 2 kolom */}
                      <button
                        type="button"
                        onClick={handleSkip}
                        className="btn btn-warning w-full my-5 "
                      >
                        Skip Step
                      </button>
                      <div className="grid grid-cols-2 gap-5">
                        {testsData.map((test) => (
                          <div
                            key={test.id}
                            className="card bg-gray-100 rounded-lg"
                          >
                            <h2 className="font-bold text-lg mb-4 bg-gray-200 p-5 rounded-md">
                              {test.title}
                            </h2>

                            <div className="items-center block">
                              {test.options.map((option) => (
                                <label
                                  key={option.value}
                                  className="flex items-center bg-white p-5 rounded-md my-2"
                                >
                                  <input
                                    type="radio"
                                    value={option.value}
                                    checked={
                                      selectedOptions[test.id] === option.value
                                    }
                                    onChange={() =>
                                      handleRadioChange(test.id, option.value)
                                    }
                                    className="radio radio-primary mr-2"
                                  />
                                  <span>{option.label}</span>
                                </label>
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>

                      {/* Menampilkan hasil pilihan */}
                      {/* <div className="mt-5">
                      {testsData.map((test) => (
                        <h3 key={test.id} className="font-bold">
                          Pilihan untuk {test.title}:{" "}
                          {selectedOptions[test.id] || "Belum dipilih"}
                        </h3>
                      ))}
                    </div> */}
                    </form>
                  </div>
                )}
                {currentStep === 5 && (
                  <div className="card bg-gray-100 p-5">
                    <form>
                      {/* Table Container */}
                      <div className="rounded-lg overflow-x-auto">
                        <table className="table w-full table-md">
                          {/* Table Head */}
                          <thead className="bg-gray-200">
                            <tr>
                              <th className="p-2 text-center" rowSpan={2}>
                                No
                              </th>
                              <th className="p-2 text-center" rowSpan={2}>
                                Jenis
                              </th>
                              <th className="p-2 text-center" rowSpan={2}>
                                Keterangan Standar (M1)
                              </th>
                              <th className="p-2 text-center" colSpan={5}>
                                Standarisasi
                              </th>
                              <th className="p-2 text-center" colSpan={4}>
                                Jumlah Pengajuan
                              </th>
                              <th className="p-2 text-center" rowSpan={2}>
                                Periode Pembebanan
                              </th>
                              <th className="p-2 text-center" rowSpan={2}>
                                Rp/ Ekor
                              </th>
                              <th className="p-2 text-center" rowSpan={2}>
                                Estimasi Realisasi
                              </th>
                            </tr>
                            <tr>
                              <th className="p-2 text-center">Keterangan</th>
                              <th className="p-2 text-center">Kebutuhan</th>
                              <th className="p-2 text-center">Satuan</th>
                              <th className="p-2 text-center">Rp/ Unit</th>
                              <th className="p-2 text-center">Total</th>
                              <th className="p-2 text-center">Stok</th>
                              <th className="p-2 text-center">Pengajuan</th>
                              <th className="p-2 text-center">Satuan</th>
                              <th className="p-2 text-center">Total</th>
                            </tr>
                          </thead>

                          {/* Table Body */}
                          <tbody className="bg-gray-100">
                            {rowsBudgeting.map((row, index) => (
                              <tr key={index}>
                                <td className="p-2 text-center">{index + 1}</td>

                                {/* Jenis */}
                                <td className="p-2">
                                  <input
                                    type="text"
                                    value={row.Jenis}
                                    onChange={(e) =>
                                      handleInputstep5Change(
                                        index,
                                        "Jenis",
                                        e.target.value
                                      )
                                    }
                                    className="input input-bordered w-full"
                                  />
                                </td>

                                {/* Tanggal Mulai */}
                                <td className="p-2">
                                  <input
                                    type="date"
                                    value={row.start_date}
                                    onChange={(e) =>
                                      handleInputstep5Change(
                                        index,
                                        "start_date",
                                        e.target.value
                                      )
                                    }
                                    className="input input-bordered w-full"
                                  />
                                </td>

                                {/* Tanggal Akhir */}
                                <td className="p-2">
                                  <input
                                    type="date"
                                    value={row.end_date}
                                    onChange={(e) =>
                                      handleInputstep5Change(
                                        index,
                                        "end_date",
                                        e.target.value
                                      )
                                    }
                                    className="input input-bordered w-full"
                                  />
                                </td>

                                {/* Kebutuhan */}
                                <td className="p-2">
                                  <input
                                    type="text"
                                    value={row.kebutuhan}
                                    onChange={(e) =>
                                      handleInputstep5Change(
                                        index,
                                        "kebutuhan",
                                        e.target.value
                                      )
                                    }
                                    className="input input-bordered w-full"
                                  />
                                </td>

                                {/* Satuan Standarisasi */}
                                <td className="p-2">
                                  <input
                                    type="text"
                                    value={row.satuan_standarisasi}
                                    onChange={(e) =>
                                      handleInputstep5Change(
                                        index,
                                        "satuan_standarisasi",
                                        e.target.value
                                      )
                                    }
                                    className="input input-bordered w-full"
                                  />
                                </td>

                                {/* Harga */}
                                <td className="p-2">
                                  <input
                                    type="number"
                                    value={row.harga}
                                    onChange={(e) =>
                                      handleInputstep5Change(
                                        index,
                                        "harga",
                                        e.target.value
                                      )
                                    }
                                    className="input input-bordered w-full"
                                  />
                                </td>

                                {/* Stok */}
                                <td className="p-2">
                                  <input
                                    type="number"
                                    value={row.stok}
                                    onChange={(e) =>
                                      handleInputstep5Change(
                                        index,
                                        "stok",
                                        e.target.value
                                      )
                                    }
                                    className="input input-bordered w-full"
                                  />
                                </td>

                                {/* Pengajuan */}
                                <td className="p-2">
                                  <input
                                    type="number"
                                    value={row.pengajuan}
                                    onChange={(e) =>
                                      handleInputstep5Change(
                                        index,
                                        "pengajuan",
                                        e.target.value
                                      )
                                    }
                                    className="input input-bordered w-full"
                                  />
                                </td>

                                {/* Satuan Pengajuan */}
                                <td className="p-2">
                                  <input
                                    type="text"
                                    value={row.satuan_pengajuan}
                                    onChange={(e) =>
                                      handleInputstep5Change(
                                        index,
                                        "satuan_pengajuan",
                                        e.target.value
                                      )
                                    }
                                    className="input input-bordered w-full"
                                  />
                                </td>

                                {/* Total */}
                                <td className="p-2">
                                  <input
                                    type="number"
                                    value={row.total}
                                    onChange={(e) =>
                                      handleInputstep5Change(
                                        index,
                                        "total",
                                        e.target.value
                                      )
                                    }
                                    className="input input-bordered w-full"
                                  />
                                </td>

                                {/* Periode Pembebanan */}
                                <td className="p-2">
                                  <input
                                    type="text"
                                    value={row.periode}
                                    onChange={(e) =>
                                      handleInputstep5Change(
                                        index,
                                        "periode",
                                        e.target.value
                                      )
                                    }
                                    className="input input-bordered w-full"
                                  />
                                </td>

                                {/* Harga/Ekor */}
                                <td className="p-2">
                                  <input
                                    type="number"
                                    value={row.harga_ekor}
                                    onChange={(e) =>
                                      handleInputstep5Change(
                                        index,
                                        "harga_ekor",
                                        e.target.value
                                      )
                                    }
                                    className="input input-bordered w-full"
                                  />
                                </td>

                                {/* Estimasi Realisasi */}
                                <td className="p-2">
                                  <input
                                    type="number"
                                    value={row.estimasi}
                                    onChange={(e) =>
                                      handleInputstep5Change(
                                        index,
                                        "estimasi",
                                        e.target.value
                                      )
                                    }
                                    className="input input-bordered w-full"
                                  />
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
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
                    className={`btn ${currentStep === 5 ? "btn-disabled" : ""}`}
                    onClick={handleNext}
                    disabled={currentStep === 5}
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
      </LayoutProject>
    </div>
  );
};
export default ProjectPage;
