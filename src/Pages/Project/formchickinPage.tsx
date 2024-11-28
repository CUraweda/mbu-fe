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
      return row;
    });
    setRows(updatedRows);
  };

  const handleAddRowAnggaran = () => {
    setRows([...rows, { no_surat: "", tanggal_chickin: "", doc: "", supplier: "", hatchery: "", jumlah: "" }]);
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
                  </td>
                  <td>
                    <input
                      type="text"
                      className="input input-bordered w-full"
                      value={row.jumlah}
                      onChange={(e) => handleInputChange(index, "jumlah", e.target.value)}
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

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
