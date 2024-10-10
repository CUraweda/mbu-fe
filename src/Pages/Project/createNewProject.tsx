import { useState } from "react";
import iconMap from "../../Data/iconMap";

const CreateNewProject = () => {
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
  const initialData = [
    { id: 1, name: "Jhon", desc: "" },
    { id: 2, name: "Doe", desc: "" },
    { id: 3, name: "Jane", desc: "" },
  ];
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
    id_project: "",
    nama_area: "",
    produk: "",
    unit_bisnis: "PT MANDIRI BERLIAN UNGGAS",
    lokasi: "",
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
    <div>
      <form>
        {/* Step Indicators */}
        <ul className="mb-4 w-full flex justify-center gap-5 p-2">
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
        <div className="border-b-2 border-gray-100 my-4 rounded-md" />
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
                    disabled
                    value={formOwnFarm.id_project}
                    onChange={handleInputChange}
                    className="input input-bordered w-full"
                  />
                </div>
                {/* Periode Proyek */}
                <div className="mb-4">
                  <label className="label">Unit Bisnis</label>
                  <input
                    type="text"
                    name="unit_bisnis"
                    disabled
                    value={formOwnFarm.unit_bisnis}
                    onChange={handleInputChange}
                    className="input input-bordered w-full"
                  />
                </div>
                {/* Nama Area */}
                <div className="mb-4">
                  <label className="label">Area</label>
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
                  <label className="label">Lokasi</label>
                  <select
                    name="nama_kandang"
                    value={formOwnFarm.lokasi}
                    onChange={handleInputChange}
                    className="select select-bordered w-full"
                  >
                    <option value={0}>Pilih Kandang</option>
                    <option value={1}>Kandang 1</option>
                    <option value={2}>Kandang 2</option>
                  </select>
                </div>
                {/* Tanggal Mulai
              <div className="mb-4">
                <label className="label">Tanggal Mulai</label>
                <input
                  type="date"
                  name="tanggal_mulai"
                  value={formOwnFarm.tanggal_mulai}
                  onChange={handleInputChange}
                  className="input input-bordered w-full"
                />
              </div> */}

                {/* Nama Farm */}
                <div className="mb-4">
                  <label className="label">Produk</label>
                  <select
                    name="produk"
                    value={formOwnFarm.produk}
                    onChange={handleInputChange}
                    className="select select-bordered w-full"
                  >
                    <option value="">Parent Stock</option>
                    <option value="Farm 1">Stock 1</option>
                    <option value="Farm 2">Stock 2</option>
                  </select>
                </div>
                {/* Kategori Proyek
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
              </div> */}
              </form>
            </div>

            <div className="border-b-2 border-gray-100 my-4 rounded-md" />
            <div className="p-5">
              <form>
                <div className="card ">
                  <form>
                    {/* Table Container */}
                    <div className="rounded-lg overflow-x-auto">
                      <table className="table w-full table-md">
                        {/* Table Head */}
                        <thead className="">
                          <tr>
                            <th className="p-2 text-center">No</th>
                            <th className="p-2 text-center">Fase</th>
                            <th className="p-2 text-center">Tanggal Mulai</th>
                            <th className="p-2 text-center">Tanggal Selesai</th>
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
                                  placeholder="Masukkan nama farm"
                                  className="input input-bordered w-full"
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
                                  placeholder="Masukkan nama blok"
                                  className="input input-bordered w-full"
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
                                  placeholder="Masukkan nama blok"
                                  className="input input-bordered w-full"
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
                                  disabled
                                  placeholder="Masukkan nama blok"
                                  className="input input-bordered w-full"
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
                                {rows2.length > 1 ? (
                                  <button
                                    type="button"
                                    className="btn btn-ghost hover:bg-transparent text-center"
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
                    <div className="flex w-full justify-start m-2">
                      <button
                        type="button"
                        className="btn btn-ghost hover:bg-transparent text-center"
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
                  <div className="rounded-lg overflow-x-auto">
                    <table className="table w-full table-md">
                      {/* Table Head */}
                      <thead className="">
                        <tr>
                          <th className="p-2 text-center">No</th>
                          <th className="p-2 text-center">Nama Kandang</th>
                          <th className="p-2 text-center">Jenis Form</th>
                          <th className="p-2 text-center">Periode</th>
                          <th className="p-2 text-center">Penanggung Jawab</th>
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
                                placeholder="Masukkan nama farm"
                                className="input input-bordered w-full"
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
                                className="input input-bordered w-full"
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
                                placeholder="Masukkan nama blok"
                                className="input input-bordered w-full"
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
                                className="input input-bordered w-full"
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
                              {rowsFarm.length > 1 ? (
                                <button
                                  type="button"
                                  className="btn btn-ghost hover:bg-transparent text-center"
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
                  <div className="flex w-full justify-start m-2">
                    <button
                      type="button"
                      className="btn btn-ghost hover:bg-transparent text-center"
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
              <form className="grid grid-cols-3 gap-4 w-full">
                {/* Id Project */}
                <div className="mb-4 flex items-center">
                  <label className="text-sm font-medium text-gray-700 mb-2 text-nowrap flex items-center mr-2">
                    Nama Kandang
                  </label>
                  <select
                    className="select select-bordered w-full"
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
                <div className="mb-4 flex items-center">
                  <label className=" text-sm font-medium text-gray-700 mt-4 mb-2 text-nowrap flex items-center mr-2">
                    Target VCR
                  </label>
                  <input
                    type="number"
                    className="input input-bordered w-full"
                    value={targetVCR}
                    onChange={(e) => setTargetVCR(e.target.value)}
                    placeholder="Masukkan target VCR"
                  />
                </div>
                <div className="mb-4 flex items-center">
                  <label className=" text-sm font-medium text-gray-700 mt-4 mb-2 text-nowrap flex items-center mr-2">
                    Target Mortalitas
                  </label>
                  <input
                    type="number"
                    className="input input-bordered w-full"
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
                <div className=" overflow-x-auto">
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
                              placeholder="Masukkan item"
                              className="input input-bordered w-full"
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
                              placeholder="Masukkan qty"
                              className="input input-bordered w-full"
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
                              placeholder="Masukkan harga satuan"
                              className="input input-bordered w-full"
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
                              placeholder="Total anggaran"
                              className="input input-bordered w-full"
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
                            {rowsAnggaran.length > 1 ? (
                              <button
                                type="button"
                                className="btn btn-ghost hover:bg-transparent text-center"
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
                <div className="flex w-full justify-start m-2">
                  <button
                    type="button"
                    className="btn btn-ghost hover:bg-transparent text-center"
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
              <div className="rounded-lg overflow-x-auto">
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
                            className="select select-bordered w-full"
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
                            className="select select-bordered w-full"
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
                            className="select select-bordered w-full"
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
                          {rowsRecording.length > 1 && (
                            <button
                              type="button"
                              className="btn btn-ghost hover:bg-transparent text-center"
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
              <div className="flex w-full justify-start m-2">
                <button
                  type="button"
                  className="btn btn-ghost hover:bg-transparent text-center"
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
        <div className="mt-4 flex justify-end gap-5 mr-10">
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
              currentStep === 4 ? "btn-disabled" : "bg-[#76A8D8] text-white"
            }`}
            onClick={handleNext}
            disabled={currentStep === 4}
          >
            Selanjutnya
          </button>
        </div>
      </form>
    </div>
  );
};
export default CreateNewProject;
