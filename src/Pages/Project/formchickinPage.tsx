import { useState } from "react";
import { useNavigate } from "react-router-dom";
import LayoutProject from "../../Layouts/layoutProject";
import Breadcrumb from "../../Components/Breadcrumb";
import Swal from "sweetalert2";
import { IoMdAddCircleOutline } from "react-icons/io";

const breadcrumbItems = [
  { label: "Home", link: "/" },
  { label: "Project", link: "/project" },
  { label: "Chick in", link: "/chickin" },
  { label: "Form Chick in" },
];

const FormChickinPage = () => {
  const navigate = useNavigate();

  const [rows, setRows] = useState([
    { no_surat: "SJ001", tanggal_chickin: "", doc: "", supplier: "", hatchery: "", jumlah: "" },
    { no_surat: "SJ002", tanggal_chickin: "", doc: "", supplier: "", hatchery: "", jumlah: "" },
  ]);

  const [formData, setFormData] = useState({
    project_id: "",
    unit_bisnis: "PT Mandiri Berlian Unggas",
    area: "",
    lokasi: "",
    produk: "",
    nama_kandang: "",
  });

  const handleInputChange = (index: number, field: string, value: string) => {
    const updatedRows = rows.map((row, rowIndex) => {
      if (rowIndex === index) {
        if (field === "jumlah" && (isNaN(Number(value)) || Number(value) < 0)) {
          Swal.fire("Error", "Jumlah harus berupa angka positif!", "error");
          return row;
        }
        return { ...row, [field]: value };
      }
    }
  }, [isEditMode]);
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

  const handleSave = () => {
    Swal.fire({
      title: "Simpan Data?",
      text: "Pastikan semua data telah diisi dengan benar.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Ya, Simpan",
    }).then((result) => {
      if (result.isConfirmed) {
        // Simulate saving data...
        Swal.fire("Berhasil!", "Data telah disimpan.", "success");
        navigate("/chickin");
      }
    });
  };

  return (
    <div className="block w-full">
      <Breadcrumb title="Form Chick In" items={breadcrumbItems} />
      <LayoutProject>
        <div className="px-10 py-6">
          <h2 className="text-2xl text-primary mb-4">Form Chick in</h2>
          <div className="grid grid-cols-5 gap-4 mb-8">
            {[ // Input fields for form data
              { label: "Project ID", name: "project_id", value: formData.project_id },
              { label: "Unit Bisnis", name: "unit_bisnis", value: formData.unit_bisnis, disabled: true },
              { label: "Area", name: "area", value: formData.area },
              { label: "Lokasi", name: "lokasi", value: formData.lokasi },
              { label: "Produk", name: "produk", value: formData.produk },
              { label: "Nama Kandang", name: "nama_kandang", value: formData.nama_kandang },
            ].map((field, index) => (
              <div key={index} className="col-span-1">
                <label className="block text-sm text-gray-400 font-medium mb-2">{field.label}</label>
                <input
                  type="text"
                  name={field.name}
                  value={field.value}
                  onChange={(e) => setFormData({ ...formData, [field.name]: e.target.value })}
                  disabled={field.disabled}
                  className="w-full input input-bordered"
                />
              </div>
            ))}
          </div>

          <table className="table table-bordered w-full mb-6">
            <thead className="text-gray-400 bg-gray-100">
              <tr>
                <th>No Surat Jalan</th>
                <th>Tanggal Chick in</th>
                <th>Jenis DOC</th>
                <th>Supplier</th>
                <th>Hatchery</th>
                <th>Jumlah (ekor)</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row, index) => (
                <tr key={index}>
                  <td>
                    <input
                      type="text"
                      className="input input-bordered w-full"
                      value={row.no_surat}
                      onChange={(e) => handleInputChange(index, "no_surat", e.target.value)}
                    />
                  </td>
                  <td>
                    <input
                      type="date"
                      className="input input-bordered w-full"
                      value={row.tanggal_chickin}
                      onChange={(e) => handleInputChange(index, "tanggal_chickin", e.target.value)}
                    />
                  </td>
                  <td>
                    <select
                      className="select select-bordered w-full"
                      value={row.doc}
                      onChange={(e) => handleInputChange(index, "doc", e.target.value)}
                    >
                      <option value="">Pilih Jenis</option>
                      <option value="CP Vaksin">CP Vaksin</option>
                      <option value="Non Vaksin">Non Vaksin</option>
                    </select>
                  </td>
                  <td>
                    <input
                      type="text"
                      className="input input-bordered w-full"
                      value={row.supplier}
                      onChange={(e) => handleInputChange(index, "supplier", e.target.value)}
                    />
                  </td>
                  <td>
                    <select
                      className="select select-bordered w-full"
                      value={row.hatchery}
                      onChange={(e) => handleInputChange(index, "hatchery", e.target.value)}
                    >
                      <option value="">Pilih Hatchery</option>
                      <option value="KOPO">KOPO</option>
                      <option value="Other">Other</option>
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


          <div className="flex justify-start w-full m-2">
            <button
              type="button"
              className="btn btn-ghost hover:bg-transparent text-center"
              onClick={handleAddRowAnggaran}
            >
              <IoMdAddCircleOutline size={30} color="#00499E" className="mr-2" />
            </button>
          </div>
          <div className="my-4 flex justify-end gap-4">
            <button
              className="btn bg-orange-500 w-32 text-white"
              onClick={() => navigate("")}>
              Batal
            </button>
            <button className="btn bg-blue-300 text-white w-32 ">
              Simpan
              </button>
          </div>
        </div>
      </LayoutProject>
    </div>
  );
};

export default FormChickinPage;
