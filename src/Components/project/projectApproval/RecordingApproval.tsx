import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import dataRecordingData from "../../../Data/dataRecording";

const RecordingApproval = () => {
  const items = dataRecordingData;
  return (
    <div>
      <div className="">
        <table className="min-w-full" style={{ border: "none" }}>
          <thead className="text-center text-white bg-primary">
            <tr>
              <th className="px-3 py-2">Item</th>
              <th className="px-3 py-2">Satuan</th>
              <th className="px-3 py-2">Interval Recording</th>
            </tr>
          </thead>
          <tbody className="text-center ">
            {items.map((item) => (
              <tr key={item.id}>
                <td className="p-2 text-gray-700">
                  <input
                    disabled
                    type="text"
                    value={item.item}
                    className="w-full px-3 py-1 text-gray-700 bg-gray-100 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </td>
                <td className="p-2 text-gray-700">
                  <input
                    disabled
                    type="text"
                    value={item.satuan}
                    className="w-full px-3 py-1 text-gray-700 bg-gray-100 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </td>
                <td className="p-2 text-gray-700">
                  <input
                    disabled
                    type="text"
                    value={item.intervalRecording}
                    className="w-full px-3 py-1 text-gray-700 bg-gray-100 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="mx-4 my-5">
        <div className="flex items-center justify-center md:justify-end">
          <button
            //   disabled={currentPage === 1}
            //   onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
            className="flex items-center gap-5 mx-2 text-primary hover:bg-transparent"
          >
            <FaArrowLeft size={18} className="text-primary" />
            <div className="flex text-center">Prev</div>
          </button>
          <span className="mx-2 text-primary">1 of 2</span>
          <button
            //   onClick={() => setCurrentPage((prev) => prev + 1)}
            className="flex items-center gap-5 mx-2 text-primary hover:bg-transparent"
          >
            <div className="flex text-center">Next</div>
            <FaArrowRight size={18} className="text-primary" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default RecordingApproval;
