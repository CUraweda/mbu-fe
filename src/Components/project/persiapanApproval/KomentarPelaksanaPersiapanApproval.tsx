import React, { useState } from "react";

interface KomentarPelaksanaPersiapanApprovalProps {
  onClose: () => void;
  onConfirm: (comment: string) => void;
}

const KomentarPelaksanaPersiapanApproval: React.FC<
  KomentarPelaksanaPersiapanApprovalProps
> = ({ onClose, onConfirm }) => {
  const [comment, setComment] = useState("");

  const handleConfirm = () => {
    onConfirm(comment);
    setComment("");
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50 z-50">
      <div className="bg-white rounded-lg shadow-lg p-6 w-96">
        <h2 className="text-xl font-bold text-blue-500 mb-4 text-center">
          Anda yakin memilih opsi Tolak?
        </h2>
        <p className="text-gray-700 mb-4">
          Tolong berikan komentar/catatan jika anda menolak
        </p>
        <textarea
          className="w-full h-24 p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Komentar/catatan"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
        ></textarea>
        <div className="flex justify-end gap-4 mt-4">
          <button
            className="px-4 py-2 bg-orange-500 text-white rounded hover:bg-orange-600"
            onClick={onClose}
          >
            Batal
          </button>
          <button
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
            onClick={handleConfirm}
          >
            Simpan
          </button>
        </div>
      </div>
    </div>
  );
};

export default KomentarPelaksanaPersiapanApproval;
