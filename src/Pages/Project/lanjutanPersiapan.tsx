import { useEffect, useState } from "react";
import iconMap from "../../Data/iconMap";
import { useNavigate } from "react-router-dom";
import LayoutProject from "../../Layouts/layoutProject";
import Breadcrumb from "../../Components/Breadcrumb";
import Swal from "sweetalert2";
const breadcrumbItems = [
  { label: "Home", link: "/" },
  { label: "Project" },
  { label: "Persiapan" },
  { label: "Form Persiapan", link: "/project" },
];
const LanjutanPersiapanPage = () => {
  // const location = useLocation();
  const navigate = useNavigate();

  // Check if we're editing or creating a new project
  // const isEditMode = !!location.state?.projectData;
  const [statusView, setStatusView] = useState<boolean>(false);
  // const [formData, setFormData] = useState({
  //   unitBisnis: "",
  //   produk: "",
  //   area: "",
  //   lokasi: "",
  //   kandang: "",
  //   kapasitas: 0,
  //   periode: 0,
  //   statusChickIn: "",
  //   statusProject: "",
  // });

  const [persiapanData, setPersiapanData] = useState<any>([]);
  // If we are editing, set the form data to the passed project data
  useEffect(() => {
    setStatusView(false);
    setPersiapanData([
      {
        jenis_persiapan: "Pengadaan Bibit",
        waktu_pelaksanaan: "2024-10-15 10:00 AM",
        nama_pelaksanaan: "John Doe",
        tempat_pelaksanaan: "Lahan Utama",
        foto: "foto-bibit.jpg",
      },
      {
        jenis_persiapan: "Persiapan Lahan",
        waktu_pelaksanaan: "2024-10-18 12:30 PM",
        nama_pelaksanaan: "Jane Smith",
        tempat_pelaksanaan: "Lahan Selatan",
        foto: "foto-lahan.jpg",
      },
      {
        jenis_persiapan: "Penyiapan Kandang",
        waktu_pelaksanaan: "2024-10-20 02:00 PM",
        nama_pelaksanaan: "Robert Johnson",
        tempat_pelaksanaan: "Kandang Utara",
        foto: "foto-kandang.jpg",
      },
      {
        jenis_persiapan: "Pemeriksaan Kesehatan",
        waktu_pelaksanaan: "2024-10-22 09:00 AM",
        nama_pelaksanaan: "Alice Davis",
        tempat_pelaksanaan: "Pusat Kesehatan Hewan",
        foto: "foto-pemeriksaan.jpg",
      },
    ]);
  }, []);
  // useEffect(() => {
  //   if (isEditMode) {
  //     setFormData(location.state.projectData);
  //     if (location.state.Status === "approvalView") {
  //       setStatusView(true);
  //     }
  //   }
  // }, [isEditMode]);
  // const handleSubmitApproval = (e: React.FormEvent) => {
  //   e.preventDefault();
  //   if (isEditMode) {
  //     // Handle edit logic
  //     console.log("Editing project with data:", formData);
  //     // Call an API to update the project...
  //   } else {
  //     // Handle create logic
  //     console.log("Creating new project with data:", formData);
  //     // Call an API to create a new project...
  //   }
  //   navigate("/project"); // Navigate back to the project list after submission
  // };
  // const handleRejectApproval = (e: React.FormEvent) => {
  //   e.preventDefault();
  //   if (isEditMode) {
  //     // Handle edit logic
  //     console.log("Editing project with data:", formData);
  //     // Call an API to update the project...
  //   } else {
  //     // Handle create logic
  //     console.log("Creating new project with data:", formData);
  //     // Call an API to create a new project...
  //   }
  //   navigate("/project"); // Navigate back to the project list after submission
  // };
  const handleShowModal = () => {
    //  setShowModal(true);
    Swal.fire({
      title: "Are you sure?",
      text: "Check your data again!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, submit!",
    }).then((result) => {
      if (result.isConfirmed) {
        navigate("/persiapan");
        Swal.fire("Submitted!", "Your data has been submitted.", "success");
      }
    });
  };
  //   const [area, setArea] = useState("");
  const persiapanOption = [
    { id: 1, name: "Persiapan 1" },
    { id: 2, name: "Persiapan 2" },
    { id: 3, name: "Persiapan 3" },
  ];
  const [currentStep, setCurrentStep] = useState(1);
  const [rows2, setRows2] = useState([
    { fase: "", tanggal_mulai: "", tanggal_selesai: "", status: "" },
  ]);

  const [rowsRecording, setRowsRecording] = useState([
    {
      item: "",
      satuan: "",
      interval_recording: "",
    },
  ]);
  // const [rowsFarm, setRowsFarm] = useState([
  //   {
  //     nama_kandang: "",
  //     kapasitas: "",
  //     jenis_form: "",
  //     periode: "",
  //     penanggung_jawab: "",
  //   },
  // ]);
  const [rowsPersiapan, setRowsPersiapan] = useState([
    {
      item_pekerjaan: "Pengadaan Bibit",
      tanggal_selesai: "2024-10-15",
      waktu: "10:00 AM",
      hasil: "Selesai",
    },
    {
      item_pekerjaan: "Persiapan Lahan",
      tanggal_selesai: "2024-10-18",
      waktu: "12:30 PM",
      hasil: "Proses",
    },
    {
      item_pekerjaan: "Penyiapan Kandang",
      tanggal_selesai: "2024-10-20",
      waktu: "02:00 PM",
      hasil: "Belum Selesai",
    },
    {
      item_pekerjaan: "Pemeriksaan Kesehatan",
      tanggal_selesai: "2024-10-22",
      waktu: "09:00 AM",
      hasil: "Selesai",
    },
  ]);

  const [selectedKandang, setSelectedKandang] = useState("");
  const [tanggalHabisAyam, setTanggalHabisAyam] = useState("");
  // const handleAddRow = () => {
  //   setRows2([
  //     ...rows2,
  //     { fase: "", tanggal_mulai: "", tanggal_selesai: "", status: "" },
  //   ]);
  // };
  // const handleInputChangeRecording = (
  //   index: number,
  //   field: string,
  //   value: string
  // ) => {
  //   const updatedRows = rowsRecording.map((row, rowIndex) =>
  //     rowIndex === index ? { ...row, [field]: value } : row
  //   );
  //   setRowsRecording(updatedRows);
  // };

  // Fungsi untuk menambahkan baris baru
  const handleAddRowRecording = () => {
    setRowsRecording([
      ...rowsRecording,
      { item: "", satuan: "", interval_recording: "" },
    ]);
  };
  // const handleRemoveRecording = (index: any) => {
  //   const updatedRows = rowsRecording.filter((_, i) => i !== index);
  //   setRowsRecording(updatedRows);
  // };
  const handleAddRowAnggaran = () => {
    setRowsPersiapan([
      ...rowsPersiapan,
      {
        item_pekerjaan: "",
        tanggal_selesai: "",
        waktu: "",
        hasil: "",
      },
    ]);
  };
  // const handleAddRowFarm = () => {
  //   setRowsFarm([
  //     ...rowsFarm,
  //     {
  //       nama_kandang: "",
  //       kapasitas: "",
  //       jenis_form: "",
  //       periode: "",
  //       penanggung_jawab: "",
  //     },
  //   ]);
  // };

  //   const testsData = [
  //     {
  //       id: 1,
  //       title: "TEST 1 - 45.000 EKOR",
  //       options: [
  //         { value: "Cek Semua", label: "Cek Semua" },
  //         { value: "ABK - ABK", label: "ABK - ABK" },
  //       ],
  //     },
  //     {
  //       id: 2,
  //       title: "TEST 2 - 45.000 EKOR",
  //       options: [
  //         { value: "Cek Semua", label: "Cek Semua" },
  //         { value: "ABK - ABK", label: "ABK - ABK" },
  //       ],
  //     },
  //   ];
  const [formOwnFarm, setFormOwnFarm] = useState({
    id_project: "",
    nama_area: "",
    produk: "",
    nama_kandang: "",
    unit_bisnis: "PT MANDIRI BERLIAN UNGGAS",
    lokasi: "",
    fcr: "",
    mortalitas_calculation: "",
    closing_calculation: "",
  });

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
  const handleInputChangeAnggaran = (
    index: number,
    field: string,
    value: string
  ) => {
    const updatedRows = rows2.map((row, rowIndex) =>
      rowIndex === index ? { ...row, [field]: value } : row
    );
    setRows2(updatedRows);
  };
  // const handleInputChangeRows2 = (
  //   index: number,
  //   field: string,
  //   value: string
  // ) => {
  //   const updatedRows = rows2.map((row, rowIndex) =>
  //     rowIndex === index ? { ...row, [field]: value } : row
  //   );
  //   setRows2(updatedRows);
  // };

  // const handleInputChangeFarm = (
  //   index: number,
  //   field: string,
  //   value: string
  // ) => {
  //   const updatedRows = rowsFarm.map((row, rowIndex) =>
  //     rowIndex === index ? { ...row, [field]: value } : row
  //   );
  //   setRowsFarm(updatedRows);
  // };
  const handleRemovePersiapan = (index: number) => {
    const updatedRows = rowsPersiapan.filter(
      (_, rowIndex) => rowIndex !== index
    );
    setRowsPersiapan(updatedRows);
  };
  // const handleRemoveRows2 = (index: number) => {
  //   const updatedRows = rows2.filter((_, rowIndex) => rowIndex !== index);
  //   setRows2(updatedRows);
  // };
  // const handleRemoveFarm = (index: number) => {
  //   const updatedRows = rowsFarm.filter((_, rowIndex) => rowIndex !== index);
  //   setRowsFarm(updatedRows);
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
  const handleSubmit = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "Check your data again!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, submit!",
    }).then((result) => {
      if (result.isConfirmed) {
        navigate("/persiapan");
        Swal.fire("Submitted!", "Your data has been submitted.", "success");
      }
    });
  };
  return (
    <div className="block w-full">
      <Breadcrumb title="Project Form" items={breadcrumbItems} />
      <LayoutProject>
        {/* {showModal && (
          <div className="modal modal-open">
            <div className="modal-box">
              <h2 className="text-xl font-bold text-blue-300 ">
                Apakah yakin pengajuan sudah sesuai?
              </h2>
              <h4 className="mb-5">
                Klik “setuju” jika sudah sesuai, klik “tolak” jika belum
              </h4>
              <label className="font-semibold ">Komentar/catatan :</label>
              <textarea
                className="w-full mt-4 textarea textarea-bordered"
                placeholder="Enter reason for approval"
                value={approvalReason}
                onChange={(e) => setApprovalReason(e.target.value)}
              />
              <div className="modal-action">
                <button
                  className="text-orange-700 bg-orange-200 btn"
                  onClick={handleRejectApproval}
                >
                  Tolak
                </button>
                <button
                  className="text-blue-700 bg-blue-200 btn"
                  onClick={handleSubmitApproval}
                >
                  Setuju
                </button>
              </div>
            </div>
          </div>
        )} */}
        <form>
          {/* Step Indicators */}
          <ul className="flex w-full gap-5 py-2 pl-10 mb-4 justify-left">
            <li className={`step flex items-center gap-5`}>
              <div className="flex">
                <div
                  className={`w-10 h-10 rounded-md text-center text-white font-semibold flex items-center justify-center  ${
                    currentStep >= 1 ? "bg-[#76A8D8] " : " bg-gray-300"
                  }`}
                >
                  1
                </div>
              </div>
              <div className="text-xl">Informasi Umum</div>
            </li>
            <li className={`step flex items-center gap-5`}>
              <iconMap.HiChevronRight size={18} />

              <div className="flex">
                <div
                  className={`w-10 h-10 rounded-md text-center text-white font-semibold flex items-center justify-center ${
                    currentStep >= 2 ? "bg-[#76A8D8] " : " bg-gray-300"
                  }`}
                >
                  2
                </div>
              </div>
              <div className="text-xl">Ceklis Persiapan</div>
            </li>
            <li className={`step flex items-center gap-5 `}>
              <iconMap.HiChevronRight size={18} />
              <div className="flex">
                <div
                  className={`w-10 h-10 rounded-md text-center text-white font-semibold flex items-center justify-center ${
                    currentStep >= 3 ? "bg-[#76A8D8] " : " bg-gray-300"
                  }`}
                >
                  3
                </div>
              </div>
              <div className="text-xl">Pelakasana Persiapan</div>
            </li>
          </ul>
          <div className="my-4 border-b-2 border-gray-100 rounded-md" />
          {/* Step Content */}
          {currentStep === 1 && (
            <div className="card">
              <div className="p-8">
                <form className="grid grid-cols-5 gap-4">
                  {/* Id Project */}
                  <div className="mb-4">
                    <label className="label">Id Project</label>
                    <input
                      type="text"
                      name="id_project"
                      disabled={statusView}
                      value={formOwnFarm.id_project}
                      onChange={handleInputChange}
                      className="w-full input input-bordered"
                    />
                  </div>
                  {/* Periode Proyek */}
                  <div className="mb-4">
                    <label className="label">Unit Bisnis</label>
                    <input
                      type="text"
                      name="unit_bisnis"
                      disabled={statusView}
                      value={formOwnFarm.unit_bisnis}
                      onChange={handleInputChange}
                      className="w-full input input-bordered"
                    />
                  </div>
                  {/* Nama Area */}
                  <div className="mb-4">
                    <label className="label">Area</label>
                    <select
                      disabled={statusView}
                      name="nama_area"
                      value={formOwnFarm.nama_area}
                      onChange={handleInputChange}
                      className="w-full select select-bordered"
                    >
                      <option value="">Pilih Area</option>
                      <option value="Area 1">Area 1</option>
                      <option value="Area 2">Area 2</option>
                    </select>
                  </div>
                  {/* Lokasi */}
                  <div className="mb-4">
                    <label className="label">Lokasi</label>
                    <select
                      name="lokasi"
                      disabled={statusView}
                      value={formOwnFarm.lokasi}
                      onChange={handleInputChange}
                      className="w-full select select-bordered"
                    >
                      <option value={0}>Pilih Lokasi</option>
                      <option value={1}>Lokasi 1</option>
                      <option value={2}>Lokasi 2</option>
                    </select>
                  </div>

                  {/* Produk */}
                  <div className="mb-4">
                    <label className="label">Produk</label>
                    <select
                      name="produk"
                      disabled={statusView}
                      value={formOwnFarm.produk}
                      onChange={handleInputChange}
                      className="w-full select select-bordered"
                    >
                      <option value="">Parent Stock</option>
                      <option value="Farm 1">Stock 1</option>
                      <option value="Farm 2">Stock 2</option>
                    </select>
                  </div>
                  <div className="mb-4">
                    <label className="label">Nama Kandang</label>
                    <select
                      name="nama_kandang"
                      disabled={statusView}
                      value={formOwnFarm.nama_kandang}
                      onChange={handleInputChange}
                      className="w-full select select-bordered"
                    >
                      <option value={0}>Pilih Kandang</option>
                      <option value={1}>Kandang 1</option>
                      <option value={2}>Kandang 2</option>
                    </select>
                  </div>
                </form>
              </div>
            </div>
          )}
          {currentStep === 2 && (
            <div>
              <div className="p-5">
                {/* Dropdown untuk memilih nama kandang dan target */}
                <form className="grid w-full grid-cols-3 gap-4">
                  {/* Id Project */}
                  <div className="flex items-center mb-4">
                    <label className="flex items-center mb-2 mr-2 text-sm font-medium text-gray-700 text-nowrap">
                      Jenis Persiapan
                    </label>
                    <select
                      className="w-full select select-bordered"
                      value={selectedKandang}
                      onChange={(e) => setSelectedKandang(e.target.value)}
                    >
                      <option value="" disabled>
                        Pilih Jenis Persiapan
                      </option>
                      {persiapanOption.map((kandang, index) => (
                        <option key={index} value={kandang.name}>
                          {kandang.name}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="flex items-center mb-4">
                    <label className="flex items-center mt-4 mb-2 mr-2 text-sm font-medium text-gray-700 text-nowrap">
                      Tanggal Habis Ayam
                    </label>
                    <input
                      type="date"
                      className="w-full input input-bordered"
                      value={tanggalHabisAyam}
                      onChange={(e) => setTanggalHabisAyam(e.target.value)}
                      placeholder="Masukkan Tanggal"
                    />
                  </div>
                </form>
              </div>
              <form>
                <div className="card">
                  {/* Table Container */}
                  <div className="overflow-x-auto ">
                    <table className="table w-full table-md">
                      {/* Table Head */}
                      <thead className="bg-[#76A8D8BF] text-white">
                        <tr>
                          <th className="p-3 text-center">
                            Item Pekerjaan Persiapan
                          </th>
                          <th className="p-3 text-center">Tanggal Selesai</th>
                          <th className="p-3 text-center">
                            Aktual Waktu Persiapan (Hari)
                          </th>
                          <th className="p-3 text-center">Hasil</th>
                          {rowsPersiapan.length > 1 && !statusView ? (
                            <th className="p-3 text-center">Aksi</th>
                          ) : (
                            <></>
                          )}
                        </tr>
                      </thead>

                      {/* Table Body */}
                      <tbody>
                        {rowsPersiapan.map((row: any, index) => (
                          <tr key={index}>
                            {/* Item */}
                            <td className="p-2">
                              <input
                                type="text"
                                disabled={statusView}
                                placeholder="Masukkan item pekerjaan"
                                className="w-full input input-bordered"
                                value={row.item_pekerjaan}
                                onChange={(e) =>
                                  handleInputChangeAnggaran(
                                    index,
                                    "item_pekerjaan",
                                    e.target.value
                                  )
                                }
                              />
                            </td>

                            {/* Quantity (Qty) */}
                            <td className="p-2">
                              <input
                                type="date"
                                disabled={statusView}
                                placeholder="Masukkan tanggal"
                                className="w-full input input-bordered"
                                value={row.tanggal_selesai}
                                onChange={(e) =>
                                  handleInputChangeAnggaran(
                                    index,
                                    "tanggal_selesai",
                                    e.target.value
                                  )
                                }
                              />
                            </td>

                            {/* Harga Satuan */}
                            <td className="p-2">
                              <input
                                type="number"
                                disabled={statusView}
                                className="w-full input input-bordered"
                                value={row.waktu}
                                onChange={(e) =>
                                  handleInputChangeAnggaran(
                                    index,
                                    "waktu",
                                    e.target.value
                                  )
                                }
                              />
                            </td>

                            <td className="p-2 text-center px-auto">
                              {statusView ? (
                                <span
                                  className={` shadow-md rounded-md w-full p-2 ${
                                    row.hasil === "Selesai"
                                      ? "bg-green-300 text-green-800"
                                      : row.hasil === "Belum Selesai"
                                      ? "bg-yellow-300 text-yellow-800"
                                      : "bg-red-300 text-red-800"
                                  }`}
                                >
                                  {row.hasil}
                                </span>
                              ) : (
                                <input
                                  type="text"
                                  className="w-full input input-bordered"
                                  value={row.hasil}
                                  onChange={(e) =>
                                    handleInputChangeAnggaran(
                                      index,
                                      "hasil",
                                      e.target.value
                                    )
                                  }
                                />
                              )}
                            </td>

                            {/* Delete Button */}
                            {rowsPersiapan.length > 1 && !statusView ? (
                              <td className="p-2">
                                <button
                                  type="button"
                                  className="text-center btn btn-ghost hover:bg-transparent"
                                  onClick={() => handleRemovePersiapan(index)}
                                >
                                  <iconMap.PiTrash
                                    size={28}
                                    color="red"
                                    className="mr-2"
                                  />
                                </button>
                              </td>
                            ) : (
                              <></>
                            )}
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                  <div className="flex justify-start w-full m-2">
                    <button
                      type="button"
                      className={`btn btn-ghost hover:bg-transparent text-center ${
                        statusView ? "hidden" : ""
                      }`}
                      onClick={handleAddRowAnggaran}
                    >
                      <iconMap.IoMdAddCircleOutline
                        size={30}
                        color="#00499E"
                        className="mr-2"
                      />
                    </button>
                  </div>
                </div>
              </form>
            </div>
          )}
          {currentStep === 3 && (
            <div className="">
              <form>
                <div className="flex justify-end ">
                  <button
                    type="button"
                    className={`btn text-white bg-blue-300 hover:bg-transparent text-center flexbox shadow-xs m-3 `}
                    onClick={handleAddRowRecording}
                  >
                    <iconMap.IoIosAdd size={30} className="mr-2" />
                    <div className="text-left">
                      Tambah Foto <br /> Pelaksana
                    </div>
                  </button>
                </div>
                <div className="overflow-x-auto ">
                  <table className="table w-full table-lg">
                    <thead className="bg-[#76A8D8BF] text-white">
                      <tr>
                        <th className="p-3 text-center">Jenis Persiapan</th>
                        <th className="p-3 text-center">Waktu Pelaksanaan</th>
                        <th className="p-3 text-center">Nama Pelaksanaan</th>
                        <th className="p-3 text-center">Tempat Pelaksanaan</th>
                        <th className="p-3 text-center">Foto</th>
                      </tr>
                    </thead>

                    {/* Table Body */}
                    <tbody className="text-gray-500">
                      {persiapanData?.map((item: any, index: any) => (
                        <tr key={index}>
                          <td className="p-2 text-center">
                            {item.jenis_persiapan}
                          </td>
                          <td className="p-2 text-center">
                            {item.waktu_pelaksanaan}
                          </td>
                          <td className="p-2 text-center">
                            {item.nama_pelaksanaan}
                          </td>
                          <td className="p-2 text-center">
                            {item.tempat_pelaksanaan}
                          </td>
                          <td className="p-2 text-center text-blue-300 underline">
                            {/* <img
                              src={item.foto}
                              alt={`Foto ${item.jenis_persiapan}`}
                              className="object-cover w-12 h-12"
                            /> */}
                            {item.foto}
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
          <div className="flex justify-end gap-5 mt-4 mr-10">
            <button
              type="button"
              className={`btn bg-[#76A8D8] text-white ${
                currentStep === 1 ? "btn-disabled" : ""
              }`}
              onClick={handlePrevious}
              disabled={currentStep === 1}
            >
              Sebelumnya
            </button>
            <button
              type="button"
              className={`btn ${
                currentStep === 3
                  ? "btn-disabled" + statusView
                    ? "hidden"
                    : ""
                  : "bg-[#76A8D8] text-white"
              }`}
              onClick={handleNext}
              disabled={currentStep === 3}
            >
              Selanjutnya
            </button>
            {currentStep === 3 && !statusView && (
              <button
                type="button"
                className={`btn  bg-[#76A8D8] text-white"
                `}
                onClick={handleSubmit}
              >
                Submit
              </button>
            )}
            {currentStep === 3 && statusView && (
              <button
                type="button"
                className="text-white bg-green-500 btn"
                onClick={() => handleShowModal()}
              >
                Submit Project
              </button>
            )}
          </div>
        </form>
      </LayoutProject>
    </div>
  );
};
export default LanjutanPersiapanPage;
