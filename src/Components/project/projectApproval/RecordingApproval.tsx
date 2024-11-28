import { useState } from "react";
import dataRecordingData from "../../../Data/dataRecording";
import PaginationBottom from "../../PaginationBottom";

const RecordingApproval = () => {
  const [currentPage, setCurrentPage] = useState<number>(1);

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
      <div className="flex flex-col items-center justify-end gap-5 m-5 mt-10 md:mt-20 md:items-end md:flex-row">
        <PaginationBottom
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
      </div>
    </div>
  );
};

export default RecordingApproval;
