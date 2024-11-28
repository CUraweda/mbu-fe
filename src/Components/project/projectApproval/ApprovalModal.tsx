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
          <h3 className="mt-5 text-lg text-justify md:text-2xl text-primary">
            Apakah yakin pengajuan sudah sesuai?
          </h3>
          <p className="py-2 text-justify text-md">
            Klik “setuju” jika sudah sesuai, klik “tolak” jika belum
          </p>
          <div className="py-2">
            <label className="block mb-1 text-sm md:text-md">
              Komentar/catatan:
            </label>
            <textarea className="w-full h-24 resize-none textarea textarea-bordered"></textarea>
          </div>
          <div className="flex justify-center modal-action md:justify-end">
            <button
              className="px-10 text-white bg-orange-500 hover:bg-orange-600 btn"
              onClick={onClose}
            >
              Tolak
            </button>
            <button
              className="px-10 text-white bg-primary hover:bg-secondary btn"
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
