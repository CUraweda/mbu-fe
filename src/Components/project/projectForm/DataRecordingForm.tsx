import React from "react";
import { FaArrowLeft, FaArrowRight, FaRegTrashAlt } from "react-icons/fa";
import dataRecordingData from "../../../Data/dataRecording";

interface DataRecording {
  id: number;
  item: string;
  satuan: string;
  intervalRecording: string;
}

const itemOptions = [
  "Body Weight",
  "Pakan",
  "Mati",
  "Culling",
  "Afkir",
  "Hatching Eggs",
  "Konsumsi Air",
];
const satuanOptions = ["Gram", "Kilogram", "Ekor", "Butir", "Liter"];
const intervalRecordingOptions = ["Harian", "Mingguan"];

const DataRecordingForm = () => {
  const [dataRecording, setDataRecording] =
    React.useState<DataRecording[]>(dataRecordingData);

  const handleDelete = (id: number) => {
    setDataRecording((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  return (
    <div>
      <table className="min-w-full mt-4" style={{ border: "none" }}>
        <thead className="text-center text-white bg-primary">
          <tr>
            <th className="py-2">Item</th>
            <th className="py-2">Satuan</th>
            <th className="py-2">Interval Recording</th>
            <th className="py-2"></th>
          </tr>
        </thead>
        <tbody className="text-center">
          {dataRecording.map((item) => (
            <tr key={item.id}>
              <td className="px-4 py-2 text-gray-700">
                <select
                  className="w-full px-2 py-1 text-gray-700 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-primary"
                  defaultValue={item.item}
                >
                  {itemOptions.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              </td>
              <td className="p-2 text-gray-700">
                <select
                  className="w-full px-2 py-1 text-gray-700 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-primary"
                  defaultValue={item.satuan}
                >
                  {satuanOptions.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              </td>
              <td className="p-2 text-gray-700">
                <select
                  className="w-full px-2 py-1 text-gray-700 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-primary"
                  defaultValue={item.intervalRecording}
                >
                  {intervalRecordingOptions.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              </td>
              <td className="p-2">
                <button
                  onClick={() => handleDelete(item.id)}
                  className="px-3 py-1"
                >
                  <FaRegTrashAlt className="text-red-500" />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="">
        <div className="flex items-center justify-center my-5 mr-5 md:justify-end">
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

export default DataRecordingForm;
