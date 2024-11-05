import { useEffect, useState } from "react";
import iconMap from "../../Data/iconMap";
import { useLocation, useNavigate } from "react-router-dom";
import LayoutProject from "../../Layouts/layoutProject";
import Breadcrumb from "../../Components/Breadcrumb";
const breadcrumbItems = [
  { label: "Home", link: "/" },
  { label: "Project" },
  { label: "List Project", link: "/project" },
  { label: "Project Form" },
];
const CreateNewProject = () => {
  const location = useLocation();
  const navigate = useNavigate();

  // Check if we're editing or creating a new project
  const isEditMode = !!location.state?.projectData;
  const [showModal, setShowModal] = useState<boolean>(false);
  const [statusView, setStatusView] = useState<boolean>(false);
  const [approvalReason, setApprovalReason] = useState<string>("");
  const [formData, setFormData] = useState({
    unitBisnis: "",
    produk: "",
    area: "",
    lokasi: "",
    kandang: "",
    kapasitas: 0,
    periode: 0,
    statusChickIn: "",
    statusProject: "",
  });
  // If we are editing, set the form data to the passed project data
  useEffect(() => {
    if (isEditMode) {
      setFormData(location.state.projectData);
      if (location.state.Status === "approvalView") {
        setStatusView(true);
      }
    }
  }, [isEditMode]);
  const handleSubmitApproval = (e: React.FormEvent) => {
    e.preventDefault();
    if (isEditMode) {
      // Handle edit logic
      console.log("Editing project with data:", formData);
      // Call an API to update the project...
    } else {
      // Handle create logic
      console.log("Creating new project with data:", formData);
      // Call an API to create a new project...
    }
    navigate("/project"); // Navigate back to the project list after submission
  };
  const handleRejectApproval = (e: React.FormEvent) => {
    e.preventDefault();
    if (isEditMode) {
      // Handle edit logic
      console.log("Editing project with data:", formData);
      // Call an API to update the project...
    } else {
      // Handle create logic
      console.log("Creating new project with data:", formData);
      // Call an API to create a new project...
    }
    navigate("/project"); // Navigate back to the project list after submission
  };
  const handleShowModal = () => {
    setShowModal(true);
  };
  const itemOptions = [
    { id: 1, name: "Pakan" },
    { id: 2, name: "Obat" },
    { id: 3, name: "Vitamin" },
  ];

  const satuanOptions = [
    { id: 1, name: "Kilogram" },
    { id: 2, name: "Liter" },
    { id: 3, name: "Pcs" },
  ];

  const intervalOptions = [
    { id: 1, name: "Harian" },
    { id: 2, name: "Mingguan" },
    { id: 3, name: "Bulanan" },
  ];
  //   const [area, setArea] = useState("");
  const kandangOptions = [
    { id: 1, name: "Kandang A" },
    { id: 2, name: "Kandang B" },
    { id: 3, name: "Kandang C" },
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
  const [rowsFarm, setRowsFarm] = useState([
    {
      nama_kandang: "",
      kapasitas: "",
      jenis_form: "",
      periode: "",
      penanggung_jawab: "",
    },
  ]);
  const [rowsAnggaran, setRowsAnggaran] = useState([
    {
      nama_kandang: "",
      jenis_form: "",
      periode: "",
      penanggung_jawab: "",
    },
  ]);
  const [selectedKandang, setSelectedKandang] = useState("");
  const [targetVCR, setTargetVCR] = useState("");
  const [targetMortalitas, setTargetMortalitas] = useState("");
  const handleAddRow = () => {
    setRows2([
      ...rows2,
      { fase: "", tanggal_mulai: "", tanggal_selesai: "", status: "" },
    ]);
  };
  const handleInputChangeRecording = (
    index: number,
    field: string,
    value: string
  ) => {
    const updatedRows = rowsRecording.map((row, rowIndex) =>
      rowIndex === index ? { ...row, [field]: value } : row
    );
    setRowsRecording(updatedRows);
  };

  // Fungsi untuk menambahkan baris baru
  const handleAddRowRecording = () => {
    setRowsRecording([
      ...rowsRecording,
      { item: "", satuan: "", interval_recording: "" },
    ]);
  };
  const handleRemoveRecording = (index: any) => {
    const updatedRows = rowsRecording.filter((_, i) => i !== index);
    setRowsRecording(updatedRows);
  };
  const handleAddRowAnggaran = () => {
    setRowsAnggaran([
      ...rowsAnggaran,
      {
        nama_kandang: "",
        jenis_form: "",
        periode: "",
        penanggung_jawab: "",
      },
    ]);
  };
  const handleAddRowFarm = () => {
    setRowsFarm([
      ...rowsFarm,
      {
        nama_kandang: "",
        kapasitas: "",
        jenis_form: "",
        periode: "",
        penanggung_jawab: "",
      },
    ]);
  };

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
  const handleInputChangeRows2 = (
    index: number,
    field: string,
    value: string
  ) => {
    const updatedRows = rows2.map((row, rowIndex) =>
      rowIndex === index ? { ...row, [field]: value } : row
    );
    setRows2(updatedRows);
  };

  const handleInputChangeFarm = (
    index: number,
    field: string,
    value: string
  ) => {
    const updatedRows = rowsFarm.map((row, rowIndex) =>
      rowIndex === index ? { ...row, [field]: value } : row
    );
    setRowsFarm(updatedRows);
  };
  const handleRemoveAnggaran = (index: number) => {
    const updatedRows = rowsAnggaran.filter(
      (_, rowIndex) => rowIndex !== index
    );
    setRowsAnggaran(updatedRows);
  };
  const handleRemoveRows2 = (index: number) => {
    const updatedRows = rows2.filter((_, rowIndex) => rowIndex !== index);
    setRows2(updatedRows);
  };
  const handleRemoveFarm = (index: number) => {
    const updatedRows = rowsFarm.filter((_, rowIndex) => rowIndex !== index);
    setRowsFarm(updatedRows);
  };

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
  return (
    <div className="block w-full">
      <Breadcrumb title="Project Form" items={breadcrumbItems} />
      <LayoutProject>
        {showModal && (
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
        )}
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
              <div className="text-xl">Informasi Farm</div>
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
              <div className="text-xl">Anggaran Project</div>
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
              <div className="text-xl">Informasi Umum</div>
            </li>
            <li className={`step flex items-center gap-5 `}>
              <iconMap.HiChevronRight size={18} />

              <div className="flex">
                <div
                  className={`w-10 h-10 rounded-md text-center text-white font-semibold flex items-center justify-center ${
                    currentStep >= 4 ? "bg-[#76A8D8] " : " bg-gray-300"
                  }`}
                >
                  4
                </div>
              </div>
              <div className="text-xl">Data Recording</div>
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
                      name="nama_kandang"
                      disabled={statusView}
                      value={formOwnFarm.lokasi}
                      onChange={handleInputChange}
                      className="w-full select select-bordered"
                    >
                      <option value={0}>Pilih Kandang</option>
                      <option value={1}>Kandang 1</option>
                      <option value={2}>Kandang 2</option>
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
                </form>
              </div>

              <div className="my-4 border-b-2 border-gray-100 rounded-md" />
              <div className="p-5">
                <form>
                  <div className="card ">
                    <form>
                      {/* Table Container */}
                      <div className="overflow-x-auto rounded-lg">
                        <table className="table w-full table-md">
                          {/* Table Head */}
                          <thead className="">
                            <tr>
                              <th className="p-2 text-center">No</th>
                              <th className="p-2 text-center">Fase</th>
                              <th className="p-2 text-center">Tanggal Mulai</th>
                              <th className="p-2 text-center">
                                Tanggal Selesai
                              </th>
                              <th className="p-2 text-center">Status</th>
                            </tr>
                          </thead>

                          {/* Table Body */}
                          <tbody className="">
                            {rows2.map((row, index) => (
                              <tr key={index}>
                                <td className="p-2">{index + 1}</td>
                                {/* Nama Farm Input */}
                                <td className="p-2">
                                  <input
                                    type="text"
                                    disabled={statusView}
                                    placeholder="Masukkan nama farm"
                                    className="w-full input input-bordered"
                                    value={row.fase}
                                    onChange={(e) =>
                                      handleInputChangeRows2(
                                        index,
                                        "fase",
                                        e.target.value
                                      )
                                    }
                                  />
                                </td>

                                {/* Tanggal Mulai Input */}
                                <td className="p-2">
                                  <input
                                    type="text"
                                    disabled={statusView}
                                    placeholder="Masukkan nama blok"
                                    className="w-full input input-bordered"
                                    value={row.tanggal_mulai}
                                    onChange={(e) =>
                                      handleInputChangeRows2(
                                        index,
                                        "tanggal_mulai",
                                        e.target.value
                                      )
                                    }
                                  />
                                </td>
                                {/* Tanggal Selesai Input */}
                                <td className="p-2">
                                  <input
                                    type="text"
                                    disabled={statusView}
                                    placeholder="Masukkan nama blok"
                                    className="w-full input input-bordered"
                                    value={row.tanggal_selesai}
                                    onChange={(e) =>
                                      handleInputChangeRows2(
                                        index,
                                        "tanggal_selesai",
                                        e.target.value
                                      )
                                    }
                                  />
                                </td>
                                {/* Tanggal Selesai Input */}
                                <td className="p-2">
                                  <input
                                    type="text"
                                    disabled={statusView}
                                    placeholder="Masukkan nama blok"
                                    className="w-full input input-bordered"
                                    value={row.status}
                                    onChange={(e) =>
                                      handleInputChangeRows2(
                                        index,
                                        "status",
                                        e.target.value
                                      )
                                    }
                                  />
                                </td>
                                {/* Delete Button */}
                                <td className="p-2">
                                  {rows2.length > 1 && !statusView ? (
                                    <button
                                      type="button"
                                      className={`btn btn-ghost hover:bg-transparent text-center ${
                                        statusView ? "hidden" : ""
                                      }`}
                                      onClick={() => handleRemoveRows2(index)}
                                    >
                                      <iconMap.PiTrash
                                        size={28}
                                        color="red"
                                        className="mr-2"
                                      />
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
                      <div className="flex justify-start w-full m-2">
                        <button
                          type="button"
                          className={`btn btn-ghost hover:bg-transparent text-center ${
                            statusView ? "hidden" : ""
                          }`}
                          onClick={handleAddRow}
                        >
                          <iconMap.IoMdAddCircleOutline
                            size={30}
                            color="#00499E"
                            className="mr-2"
                          />
                        </button>
                      </div>
                    </form>
                  </div>
                </form>
              </div>
            </div>
          )}
          {currentStep === 2 && (
            <div className="p-5">
              <form>
                <div className="card ">
                  <form>
                    {/* Table Container */}
                    <div className="overflow-x-auto rounded-lg">
                      <table className="table w-full table-md">
                        {/* Table Head */}
                        <thead className="">
                          <tr>
                            <th className="p-2 text-center">No</th>
                            <th className="p-2 text-center">Nama Kandang</th>
                            <th className="p-2 text-center">Jenis Form</th>
                            <th className="p-2 text-center">Periode</th>
                            <th className="p-2 text-center">
                              Penanggung Jawab
                            </th>
                          </tr>
                        </thead>

                        {/* Table Body */}
                        <tbody className="">
                          {rowsFarm.map((row, index) => (
                            <tr key={index}>
                              <td className="p-2">{index + 1}</td>
                              {/* nama_kandang */}
                              <td className="p-2">
                                <input
                                  type="text"
                                  disabled={statusView}
                                  placeholder="Masukkan nama farm"
                                  className="w-full input input-bordered"
                                  value={row.nama_kandang}
                                  onChange={(e) =>
                                    handleInputChangeFarm(
                                      index,
                                      "nama_kandang",
                                      e.target.value
                                    )
                                  }
                                />
                              </td>

                              {/*  jenis_form*/}
                              <td className="p-2">
                                <input
                                  type="text"
                                  placeholder="Masukkan nama blok"
                                  disabled={statusView}
                                  className="w-full input input-bordered"
                                  value={row.jenis_form}
                                  onChange={(e) =>
                                    handleInputChangeFarm(
                                      index,
                                      "jenis_form",
                                      e.target.value
                                    )
                                  }
                                />
                              </td>
                              {/* periode */}
                              <td className="p-2">
                                <input
                                  type="text"
                                  disabled={statusView}
                                  placeholder="Masukkan nama blok"
                                  className="w-full input input-bordered"
                                  value={row.periode}
                                  onChange={(e) =>
                                    handleInputChangeFarm(
                                      index,
                                      "periode",
                                      e.target.value
                                    )
                                  }
                                />
                              </td>
                              {/* Tanggal Selesai Input */}
                              <td className="p-2">
                                <input
                                  type="text"
                                  placeholder="Masukkan nama blok"
                                  disabled={statusView}
                                  className="w-full input input-bordered"
                                  value={row.penanggung_jawab}
                                  onChange={(e) =>
                                    handleInputChangeFarm(
                                      index,
                                      "penanggung_jawab",
                                      e.target.value
                                    )
                                  }
                                />
                              </td>
                              {/* Delete Button */}
                              <td className="p-2">
                                {rowsFarm.length > 1 && !statusView ? (
                                  <button
                                    type="button"
                                    className="text-center btn btn-ghost hover:bg-transparent"
                                    onClick={() => handleRemoveFarm(index)}
                                  >
                                    <iconMap.PiTrash
                                      size={28}
                                      color="red"
                                      className="mr-2"
                                    />
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
                    <div className="flex justify-start w-full m-2">
                      <button
                        type="button"
                        className={`btn btn-ghost hover:bg-transparent text-center ${
                          statusView ? "hidden" : ""
                        }`}
                        onClick={handleAddRowFarm}
                      >
                        <iconMap.IoMdAddCircleOutline
                          size={30}
                          color="#00499E"
                          className="mr-2"
                        />
                      </button>
                    </div>
                  </form>
                </div>
              </form>
            </div>
          )}
          {currentStep === 3 && (
            <div>
              <div className="p-5">
                {/* Dropdown untuk memilih nama kandang dan target */}
                <form className="grid w-full grid-cols-3 gap-4">
                  {/* Id Project */}
                  <div className="flex items-center mb-4">
                    <label className="flex items-center mb-2 mr-2 text-sm font-medium text-gray-700 text-nowrap">
                      Nama Kandang
                    </label>
                    <select
                      className="w-full select select-bordered"
                      value={selectedKandang}
                      onChange={(e) => setSelectedKandang(e.target.value)}
                    >
                      <option value="" disabled>
                        Pilih Nama Kandang
                      </option>
                      {kandangOptions.map((kandang, index) => (
                        <option key={index} value={kandang.name}>
                          {kandang.name}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="flex items-center mb-4">
                    <label className="flex items-center mt-4 mb-2 mr-2 text-sm font-medium text-gray-700  text-nowrap">
                      Target VCR
                    </label>
                    <input
                      type="number"
                      className="w-full input input-bordered"
                      value={targetVCR}
                      onChange={(e) => setTargetVCR(e.target.value)}
                      placeholder="Masukkan target VCR"
                    />
                  </div>
                  <div className="flex items-center mb-4">
                    <label className="flex items-center mt-4 mb-2 mr-2 text-sm font-medium text-gray-700  text-nowrap">
                      Target Mortalitas
                    </label>
                    <input
                      type="number"
                      className="w-full input input-bordered"
                      value={targetMortalitas}
                      onChange={(e) => setTargetMortalitas(e.target.value)}
                      placeholder="Masukkan target mortalitas"
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
                          <th className="p-3 text-center">Item</th>
                          <th className="p-3 text-center">Qty</th>
                          <th className="p-3 text-center">Harga Satuan</th>
                          <th className="p-3 text-center">Total Anggaran</th>
                          <th className="p-3 text-center"></th>
                        </tr>
                      </thead>

                      {/* Table Body */}
                      <tbody>
                        {rowsAnggaran.map((row: any, index) => (
                          <tr key={index}>
                            {/* Item */}
                            <td className="p-2">
                              <input
                                type="text"
                                disabled={statusView}
                                placeholder="Masukkan item"
                                className="w-full input input-bordered"
                                value={row.item}
                                onChange={(e) =>
                                  handleInputChangeAnggaran(
                                    index,
                                    "item",
                                    e.target.value
                                  )
                                }
                              />
                            </td>

                            {/* Quantity (Qty) */}
                            <td className="p-2">
                              <input
                                type="number"
                                disabled={statusView}
                                placeholder="Masukkan qty"
                                className="w-full input input-bordered"
                                value={row.qty}
                                onChange={(e) =>
                                  handleInputChangeAnggaran(
                                    index,
                                    "qty",
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
                                placeholder="Masukkan harga satuan"
                                className="w-full input input-bordered"
                                value={row.harga_satuan}
                                onChange={(e) =>
                                  handleInputChangeAnggaran(
                                    index,
                                    "harga_satuan",
                                    e.target.value
                                  )
                                }
                              />
                            </td>

                            {/* Total Anggaran */}
                            <td className="p-2">
                              <input
                                type="number"
                                disabled={statusView}
                                placeholder="Total anggaran"
                                className="w-full input input-bordered"
                                value={row.total_anggaran}
                                onChange={(e) =>
                                  handleInputChangeAnggaran(
                                    index,
                                    "total_anggaran",
                                    e.target.value
                                  )
                                }
                              />
                            </td>

                            {/* Delete Button */}
                            <td className="p-2">
                              {rowsAnggaran.length > 1 && !statusView ? (
                                <button
                                  type="button"
                                  className="text-center btn btn-ghost hover:bg-transparent"
                                  onClick={() => handleRemoveAnggaran(index)}
                                >
                                  <iconMap.PiTrash
                                    size={28}
                                    color="red"
                                    className="mr-2"
                                  />
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
          {currentStep === 4 && (
            <div className="">
              <form>
                {/* Table Container */}
                <div className="overflow-x-auto rounded-lg">
                  <table className="table w-full table-md">
                    {/* Table Head */}
                    <thead>
                      <tr>
                        <th className="p-2 text-center">No</th>
                        <th className="p-2 text-center">Item</th>
                        <th className="p-2 text-center">Satuan</th>
                        <th className="p-2 text-center">Interval Recording</th>
                        <th className="p-2 text-center"></th>
                      </tr>
                    </thead>

                    {/* Table Body */}
                    <tbody>
                      {rowsRecording.map((row, index) => (
                        <tr key={index}>
                          <td className="p-2 text-center">{index + 1}</td>

                          {/* Item (Dropdown) */}
                          <td className="p-2">
                            <select
                              disabled={statusView}
                              className="w-full select select-bordered"
                              value={row.item}
                              onChange={(e) =>
                                handleInputChangeRecording(
                                  index,
                                  "item",
                                  e.target.value
                                )
                              }
                            >
                              <option value="" disabled>
                                Pilih item
                              </option>
                              {itemOptions.map((item) => (
                                <option key={item.id} value={item.name}>
                                  {item.name}
                                </option>
                              ))}
                            </select>
                          </td>

                          {/* Satuan (Dropdown) */}
                          <td className="p-2">
                            <select
                              disabled={statusView}
                              className="w-full select select-bordered"
                              value={row.satuan}
                              onChange={(e) =>
                                handleInputChangeRecording(
                                  index,
                                  "satuan",
                                  e.target.value
                                )
                              }
                            >
                              <option value="" disabled>
                                Pilih satuan
                              </option>
                              {satuanOptions.map((satuan) => (
                                <option key={satuan.id} value={satuan.name}>
                                  {satuan.name}
                                </option>
                              ))}
                            </select>
                          </td>

                          {/* Interval Recording (Dropdown) */}
                          <td className="p-2">
                            <select
                              disabled={statusView}
                              className="w-full select select-bordered"
                              value={row.interval_recording}
                              onChange={(e) =>
                                handleInputChangeRecording(
                                  index,
                                  "interval_recording",
                                  e.target.value
                                )
                              }
                            >
                              <option value="" disabled>
                                Pilih interval
                              </option>
                              {intervalOptions.map((interval) => (
                                <option key={interval.id} value={interval.name}>
                                  {interval.name}
                                </option>
                              ))}
                            </select>
                          </td>

                          {/* Delete Button */}
                          <td className="p-2 text-center">
                            {rowsRecording.length > 1 && !statusView && (
                              <button
                                type="button"
                                className="text-center btn btn-ghost hover:bg-transparent"
                                onClick={() => handleRemoveRecording(index)}
                              >
                                <iconMap.PiTrash
                                  size={28}
                                  color="red"
                                  className="mr-2"
                                />
                              </button>
                            )}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                {/* Tombol Tambah Baris */}
                <div className="flex justify-start w-full m-2">
                  <button
                    type="button"
                    className={`btn btn-ghost hover:bg-transparent text-center ${
                      statusView ? "hidden" : ""
                    }`}
                    onClick={handleAddRowRecording}
                  >
                    <iconMap.IoMdAddCircleOutline
                      size={30}
                      color="#00499E"
                      className="mr-2"
                    />
                  </button>
                </div>
              </form>{" "}
            </div>
          )}
          {/* Navigation Buttons */}
          <div className="flex justify-end gap-5 mt-4 mr-10">
            <button
              type="button"
              className={`btn ${currentStep === 1 ? "btn-disabled" : ""}`}
              onClick={handlePrevious}
              disabled={currentStep === 1}
            >
              Sebelumnya
            </button>
            <button
              type="button"
              className={`btn ${
                currentStep === 4
                  ? "btn-disabled" + statusView
                    ? "hidden"
                    : ""
                  : "bg-[#76A8D8] text-white"
              }`}
              onClick={handleNext}
              disabled={currentStep === 4}
            >
              Selanjutnya
            </button>
            {currentStep === 4 && statusView && (
              <button
                type="button"
                className="btn bg-[#76A8D8] text-white"
                onClick={() => handleShowModal()}
              >
                Approve Project
              </button>
            )}
          </div>
        </form>
      </LayoutProject>
    </div>
  );
};
export default CreateNewProject;
