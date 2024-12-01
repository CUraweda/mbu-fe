import { useState } from "react";
import dataRecordingData from "@/Data/dataRecording";
import IconMap from "@/Data/IconMap";
import PaginationBottom from "@/Components/PaginationBottom";

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
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [dataRecording, setDataRecording] =
    useState<DataRecording[]>(dataRecordingData);

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
                  <IconMap.FaRegTrashAlt className="text-red-500" />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="flex flex-col items-center justify-end gap-5 m-5 mt-10 md:mt-20 md:items-end md:flex-row">
        <PaginationBottom
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
      </div>
    </div>
  );
};

export default DataRecordingForm;
