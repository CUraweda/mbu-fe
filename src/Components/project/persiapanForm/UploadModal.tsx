import { useState } from "react";
import { IoCloudUploadOutline } from "react-icons/io5";

interface UploadModalProps {
  onClose: () => void;
}

const UploadModal: React.FC<UploadModalProps> = ({ onClose }) => {
  const [file, setFile] = useState<File | null>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = event.target.files ? event.target.files[0] : null;
    setFile(selectedFile);
  };
  return (
    <div>
      <dialog id="approval_modal" className="modal" open>
        <div className="w-11/12 max-w-lg modal-box">
          <button
            className="absolute text-primary btn btn-sm right-2 top-2"
            onClick={onClose}
          >
            ✕
          </button>
          <h3 className="mt-5 text-lg text-justify md:text-2xl text-primary-dark">
            Upload Foto & Dokumen
          </h3>
          <input
            type="text"
            placeholder="Masukkan judul"
            className="w-full p-2 my-4 border border-gray-300 rounded"
          />
          <div className="flex flex-col items-center justify-center p-4 border-2 border-gray-300 border-dashed rounded-lg min-h-52">
            <input
              type="file"
              id="fileInput"
              className="hidden"
              onChange={handleFileChange}
            />
            <label
              htmlFor="fileInput"
              className="flex flex-col items-center justify-center w-full h-full p-4 cursor-pointer"
            >
              <IoCloudUploadOutline size={60} className="text-gray-300" />
              <span className="mt-2 text-sm text-gray-600">Upload</span>
            </label>
            {file && <div className="mt-2 text-gray-600">{file.name}</div>}
          </div>
          <div className="flex justify-end gap-3 mt-4">
            <button
              className="px-4 py-2 text-white bg-orange-500 rounded hover:bg-orange-600"
              onClick={onClose}
            >
              Batal
            </button>
            <button className="px-4 py-2 text-white rounded bg-primary hover:bg-secondary">
              Simpan
            </button>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default UploadModal;
