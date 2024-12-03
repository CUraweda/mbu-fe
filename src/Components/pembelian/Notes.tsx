import React from "react";

type NotesModalProps = {
  isOpen: boolean;
  onClose: () => void;
  notes: string;
};

const Notes: React.FC<NotesModalProps> = ({ isOpen, onClose, notes }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="relative w-1/3 bg-white p-5 rounded-md shadow-md">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-semibold text-primary">Catatan</h2>
          <button
            className="text-lg text-gray-600 hover:text-gray-800"
            onClick={onClose}
          >
            X
          </button>
        </div>

        <div>
          <label htmlFor="notes" className="block mb-2 text-gray-700">
            Komentar/catatan:
          </label>
          <textarea
            id="notes"
            className="w-full h-40 p-3 border rounded-md resize-none"
            value={notes}
            readOnly
          />
        </div>
      </div>
    </div>
  );
};

export default Notes;
