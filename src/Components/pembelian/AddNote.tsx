import React, { useState } from "react";

interface AddNoteProps {
  onClose: () => void;
  onConfirm: (comment: string) => void;
}

const AddNote: React.FC<AddNoteProps> = ({ onClose, onConfirm }) => {
  const [comment, setComment] = useState("");

  const handleConfirm = () => {
    onConfirm(comment);
    setComment("");
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50 z-50">
      <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-screen-md relative">
        <button
          onClick={onClose}
          className="absolute top-2 right-4 text-gray-500 hover:text-gray-800"
        >
          X
        </button>
        <h2 className="text-xl font-bold text-primary mb-4">
          Tambahkan Catatan
        </h2>
        <p className="text-gray-700 mb-4">Komentar/Catatan:</p>
        <textarea
          className="w-full h-56 p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
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

export default AddNote;
