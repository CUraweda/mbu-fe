import { useState } from "react";
import SearchBar from "../../Components/searchBar";
import iconMap from "../../Data/iconMap";

const CreateNewProject = () => {
  //   const [area, setArea] = useState("");
  const [modal, setModal] = useState<false | true>(false);
  const [currentStep, setCurrentStep] = useState(1);
  const [rows2, setRows2] = useState([
    { fase: "", tanggal_mulai: "", tanggal_selesai: "", status: "" },
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
  const handleAddRow = () => {
    setRows2([
      ...rows2,
      { fase: "", tanggal_mulai: "", tanggal_selesai: "", status: "" },
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
                  <div key={test.id} className="card bg-gray-100 rounded-lg">
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
                            checked={selectedOptions[test.id] === option.value}
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
              currentStep === 5 ? "btn-disabled" : "bg-[#76A8D8] text-white"
            }`}
            onClick={handleNext}
            disabled={currentStep === 5}
          >
            Selanjutnya
          </button>
        </div>
      </form>
    </div>
  );
};
export default CreateNewProject;
