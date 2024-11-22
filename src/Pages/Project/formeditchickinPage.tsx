import { useEffect, useState } from "react";
import iconMap from "../../Data/iconMap";
import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import LayoutProject from "../../Layouts/layoutProject";
import Breadcrumb from "../../Components/Breadcrumb";
import Swal from "sweetalert2";
const breadcrumbItems = [
  { label: "Home", link: "/" },
  { label: "Project" },
  { label: "Chick in", link: "/chickin" },
  { label: "Form Chick in" },
];
const FormEditChickinPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const itemPekerjaanOptions = [
    // Replace with your actual array of options
    { value: "option1", label: "Option 1" },
    { value: "option2", label: "Option 2" },
    // ... add more options as needed
  ];

  // const [rows2, setRows2] = useState([]); // Assuming rows2 is managed in state

  const [rows, setRows] = useState([
    {
      no_surat: "",
      tanggal_chickin: "",
      doc: "",
      supplier: "",
      hatchery: "",
      jumlah: "",
    },
  ]);
  //? ... other component logic

  const [rowsPersiapan, setRowsPersiapan] = useState([
    {
      item_pekerjaan: "",
      tanggal_selesai: "",
      waktu: "",
      hasil: "",
      hatchery: "",
    },
  ]);
  const handleInputChangeAnggaran = (
    index: number,
    field: string,
    value: string
  ) => {
    const updatedRows = rows.map((row, rowIndex) =>
      rowIndex === index ? { ...row, [field]: value } : row
    );
    setRows(updatedRows);
  };

  // Check if we're editing or creating a new project
  const isEditMode = !!location.state?.projectData;
  const [statusView, setStatusView] = useState<boolean>(false);
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

  const handleAddRowAnggaran = () => {
    setRows([
      ...rows,
      {
        no_surat: "",
        tanggal_chickin: "",
        doc: "",
        supplier: "",
        hatchery: "",
        jumlah: "",
      },
    ]);
  };
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
  const handleRemovePersiapan = (index: number) => {
    const updatedRows = rowsPersiapan.filter(
      (_, rowIndex) => rowIndex !== index
    );
    setRowsPersiapan(updatedRows);
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
  // const handleSubmit = () => {
  //   Swal.fire({
  //     title: "Are you sure?",
  //     text: "Check your data again!",
  //     icon: "warning",
  //     showCancelButton: true,
  //     confirmButtonColor: "#3085d6",
  //     cancelButtonColor: "#d33",
  //     confirmButtonText: "Yes, submit!",
  //   }).then((result) => {
  //     if (result.isConfirmed) {
  //       navigate("/persiapan");
  //       Swal.fire("Submitted!", "Your data has been submitted.", "success");
  //     }
  //   });
  // };
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
          <div className="mx-10 text-2xl text-blue-200">Form Chick in</div>

          <div className="my-4 border-b-2 border-gray-100 rounded-md" />
          {/* Step Content */}
          <div className="card">
            <div className="p-8">
              <form className="block w-full">
                <div className="grid w-full grid-cols-5 gap-2 mb-5">
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
                </div>
                <div className="card">
                  {/* Table Container */}
                  <div className="overflow-x-auto ">
                    <table className="table w-full table-md">
                      {/* Table Head */}
                      <thead className="text-gray-400 ">
                        <tr>
                          <th className="p-3 text-left">No Surat Jalan</th>
                          <th className="p-3 text-left">Tanggal Chick in</th>
                          <th className="p-3 text-left">Jenis DOC</th>
                          <th className="p-3 text-left">Supplier</th>
                          <th className="p-3 text-left">Hatchery</th>
                          <th className="p-3 text-left">Jumlah(ekor)</th>

                          {rowsPersiapan.length > 1 && !statusView ? (
                            <th className="p-3 text-left">Aksi</th>
                          ) : (
                            <></>
                          )}
                        </tr>
                      </thead>

                      {/* Table Body */}
                      <tbody>
                        {rows.map((row: any, index) => (
                          <tr key={index}>
                            {/* Item */}
                            <td className="p-2">
                              <input
                                type="text"
                                disabled={statusView}
                                placeholder="Masukkan item pekerjaan"
                                className="w-full input input-bordered"
                                value={row.no_surat}
                                onChange={(e) =>
                                  handleInputChangeAnggaran(
                                    index,
                                    "no_surat",
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
                                value={row.tanggal_chickin}
                                onChange={(e) =>
                                  handleInputChangeAnggaran(
                                    index,
                                    "tanggal_chickin",
                                    e.target.value
                                  )
                                }
                              />
                            </td>

                            {/* Harga Satuan */}
                            <td className="p-2">
                              <select
                                disabled={statusView}
                                className="w-full input input-bordered"
                                value={row.doc}
                                onChange={(e) =>
                                  handleInputChangeAnggaran(
                                    index,
                                    "doc",
                                    e.target.value
                                  )
                                }
                              >
                                <option value={""}>Pilih DOC</option>
                                {itemPekerjaanOptions.map((option) => (
                                  <option
                                    value={option.value}
                                    key={option.value}
                                  >
                                    {option.label}
                                  </option>
                                ))}
                              </select>
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
                                  disabled
                                  type="text"
                                  className="w-full input input-bordered"
                                  value={row.supplier}
                                  onChange={(e) =>
                                    handleInputChangeAnggaran(
                                      index,
                                      "supplier",
                                      e.target.value
                                    )
                                  }
                                />
                              )}
                            </td>
                            <td className="p-2">
                              <select
                                className="w-full input input-bordered"
                                value={row.hatchery}
                                onChange={(e) =>
                                  handleInputChangeAnggaran(
                                    index,
                                    "hatchery",
                                    e.target.value
                                  )
                                }
                              >
                                <option value="">Pilih Hatchery</option>{" "}
                                {/* Default option */}
                                {itemPekerjaanOptions.map((option) => (
                                  <option
                                    key={option.value}
                                    value={option.value}
                                  >
                                    {option.label}
                                  </option>
                                ))}
                              </select>
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
          </div>

          {/* Navigation Buttons */}
          <div className="flex justify-end gap-5 mt-4 mr-10">
            <button
              type="button"
              className={`btn ${"bg-orange-400 text-white"}`}
              onClick={handleRejectApproval}
            >
              Edit
            </button>
            <button
              type="button"
              className="text-white bg-green-500 btn"
              onClick={() => handleShowModal()}
            >
              Simpan
            </button>
          </div>
        </form>
      </LayoutProject>
    </div>
  );
};
export default FormEditChickinPage;
