import React from "react";
import { FaRegTrashAlt } from "react-icons/fa";

interface Farm {
  id: number;
  name: string;
  capacity: number;
  farm_type: { name: string };
  period: number;
  pic: { name: string };
}

interface FarmInfoItemProps {
  farm: Farm;
  onDelete: (id: number) => void;
  onSelect: (id: number) => void;
  selectedFarmId: number | null;
}

const FarmInfoItem: React.FC<FarmInfoItemProps> = ({
  farm,
  onDelete,
  onSelect,
  selectedFarmId,
}) => {
  return (
    <tr key={farm.id}>
      <td className="p-2 text-gray-700">
        <select
          value={selectedFarmId === farm.id ? farm.id : ""}
          className="w-full px-2 py-1 text-gray-700 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-primary"
          onChange={(e) => onSelect(Number(e.target.value))}
        >
          <option value="" disabled>
            Pilih Kandang
          </option>
          <option value={farm.id}>{farm.name}</option>
        </select>
      </td>
      <td className="p-2 text-gray-700">
        <input
          type="text"
          value={selectedFarmId === farm.id ? farm.pic.name : ""}
          disabled
          className="w-full px-2 py-1 text-gray-700 bg-gray-100 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-primary"
        />
      </td>
      <td className="p-2 text-gray-700">
        <input
          type="text"
          value={selectedFarmId === farm.id ? farm.farm_type.name : ""}
          disabled
          className="w-full px-2 py-1 text-gray-700 bg-gray-100 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-primary"
        />
      </td>
      <td className="p-2 text-gray-700">
        <input
          type="number"
          value={selectedFarmId === farm.id ? farm.period : ""}
          disabled
          className="w-full px-2 py-1 text-gray-700 bg-gray-100 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-primary"
        />
      </td>
      <td className="p-2 text-gray-700">
        <input
          type="text"
          value={selectedFarmId === farm.id ? farm.pic.name : ""}
          disabled
          className="w-full px-2 py-1 text-gray-700 bg-gray-100 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-primary"
        />
      </td>
      <td className="p-2">
        <button onClick={() => onDelete(farm.id)} className="px-3 py-1">
          <FaRegTrashAlt className="text-red-500" />
        </button>
      </td>
    </tr>
  );
};

export default FarmInfoItem;
