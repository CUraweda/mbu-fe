interface ApprovalModalProps {
  onClose: () => void;
}

const ApprovalModal: React.FC<ApprovalModalProps> = ({ onClose }) => {
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
          <h3 className="text-lg font-bold">
            Apakah yakin pengajuan sudah sesuai?
          </h3>
          <p className="py-2">
            Klik “setuju” jika sudah sesuai, klik “tolak” jika belum
          </p>
          <div className="py-2">
            <label className="block mb-1 font-medium text-gray-700">
              Komentar/catatan:
            </label>
            <textarea className="w-full h-24 resize-none textarea textarea-bordered"></textarea>
          </div>
          <div className="modal-action">
            <button
              className="text-white bg-orange-500 hover:bg-orange-600 btn"
              onClick={onClose}
            >
              Tolak
            </button>
            <button
              className="text-white bg-primary hover:bg-secondary btn"
              onClick={onClose}
            >
              Setuju
            </button>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default ApprovalModal;
