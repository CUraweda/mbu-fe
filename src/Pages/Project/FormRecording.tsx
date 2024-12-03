import React, { useState } from "react";

interface FormRecordingProps {
  onClose: () => void;
}

const getCurrentDateTime = (): string => {
  const currentDate = new Date();
  return `${currentDate.getFullYear()}-${String(currentDate.getMonth() + 1).padStart(2, "0")}-${String(currentDate.getDate()).padStart(2, "0")} ${String(currentDate.getHours()).padStart(2, "0")}:${String(currentDate.getMinutes()).padStart(2, "0")}`;
};

const FormRecording: React.FC<FormRecordingProps> = ({ onClose }) => {
  const [gudang, setGudang] = useState<string>("Gudang Pangand");
  const [tanggalWaktu, setTanggalWaktu] =
    useState<string>(getCurrentDateTime());
  const [item, setItem] = useState<string>("Pakan");
  const [jmlTerpakai, setJmlTerpakai] = useState<number>(50);
  const [satuan, setSatuan] = useState<string>("Kg");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Form submitted!");
    onClose();
  };

  const handleSaveAndAddAnother = () => {
    setTanggalWaktu(getCurrentDateTime());
    alert("Data Saved and Add Another!");
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
      <div className="bg-white p-8 rounded shadow-lg w-96 relative">
        <button
          className="absolute top-3 right-3 text-gray-400"
          onClick={onClose}
        >
          X
        </button>
        <h4 className="text-xl font-semibold text-blue-600 mb-6">
          Form Recording
        </h4>
        <form onSubmit={handleSubmit}>
          <div className="mb-4 flex items-center">
            <label className="block w-32 text-gray-600 mr-4">Gudang</label>
            <select
              className="w-full p-2 border border-gray-300 rounded"
              value={gudang}
              onChange={(e) => setGudang(e.target.value)}
            >
              <option value="Gudang Pangand">Gudang Pangandaran</option>
            </select>
          </div>
          <div className="mb-4 flex items-center">
            <label className="block w-32 text-gray-600 mr-4">
              Tanggal & waktu
            </label>
            <input
              type="text"
              className="w-full p-2 border border-gray-300 rounded bg-gray-100 text-gray-700"
              value={tanggalWaktu}
              readOnly
            />
          </div>
          <div className="mb-4 flex items-center">
            <label className="block w-32 text-gray-600 mr-4">Item</label>
            <select
              className="w-full p-2 border border-gray-300 rounded"
              value={item}
              onChange={(e) => setItem(e.target.value)}
            >
              <option value="Pakan">Pakan</option>
              <option value="Body Weight">Body Weight</option>
              <option value="OVK">OVK</option>
              <option value="Deplesi">Deplesi</option>
            </select>
          </div>
          <div className="mb-4 flex items-center">
            <label className="block w-32 text-gray-600 mr-4">
              Jml. Terpakai
            </label>
            <input
              type="number"
              className="w-full p-2 border border-gray-300 rounded"
              value={jmlTerpakai}
              onChange={(e) => setJmlTerpakai(Number(e.target.value))}
            />
          </div>
          <div className="mb-6 flex items-center">
            <label className="block w-32 text-gray-600 mr-4">Satuan</label>
            <select
              className="w-full p-2 border border-gray-300 rounded"
              value={satuan}
              onChange={(e) => setSatuan(e.target.value)}
            >
              <option value="Kg">Kg</option>
              <option value="Liter">Liter</option>
              <option value="Unit">Unit</option>
            </select>
          </div>
          <div className="flex justify-between gap-2">
            <button
              type="button"
              className="bg-green-500 text-white py-2 px-4 rounded"
              onClick={() => {
                alert("Data Saved!");
                onClose();
              }}
            >
              Simpan
            </button>
            <button
              type="button"
              className="bg-orange-500 text-white py-2 px-4 rounded"
              onClick={handleSaveAndAddAnother}
            >
              Simpan & Tambah Data
            </button>
            <button
              type="submit"
              className="bg-secondary text-white py-2 px-4 rounded"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default FormRecording;
