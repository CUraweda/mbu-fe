import React, { useEffect, useState } from "react";
import masterApi from "../../../Data/api/masterApi";
import FarmInfoItem from "./FarmInfoItem";
import { FiPlusCircle } from "react-icons/fi";
import { MasterFarms } from "../../../Data/types/allTypes";

const FarmInfoList: React.FC = () => {
  const [farms, setFarms] = useState<MasterFarms[]>([]);
  const [selectedFarmId, setSelectedFarmId] = useState<number | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const fetchedFarms = await masterApi.getAllFarms();
        setFarms(fetchedFarms || []);
      } catch (error) {
        console.error("Failed to fetch master data:", error);
      }
    };

    fetchData();
  }, []);

  const handleDelete = (id: number) => {
    setFarms((prevFarms) => prevFarms.filter((farm) => farm.id !== id)); // Menghapus farm berdasarkan id
  };

  // const handleAddRow = () => {
  //   const newFarm = {
  //     id: "",
  //     name: "",
  //     capacity: 0,
  //     farm_type: { name: "" },
  //     period: 0,
  //     pic: { name: "" },
  //   };
  //   setFarms((prevFarms) => [...prevFarms, newFarm]);
  // };

  const handleSelectFarm = (id: number) => {
    setSelectedFarmId(id);
  };

  return (
    <div>
      <div className="col-span-2 px-5 mt-4 md:col-span-3 xl:col-span-5">
        <table className="min-w-full" style={{ border: "none" }}>
          <thead className="text-left">
            <tr>
              <th className="px-3 py-2 text-gray-600">Nama Kandang</th>
              <th className="px-3 py-2 text-gray-600">Kapasitas</th>
              <th className="px-3 py-2 text-gray-600">Jenis Farm</th>
              <th className="px-3 py-2 text-gray-600">Periode</th>
              <th className="px-3 py-2 text-gray-600">Penanggung Jawab</th>
              <th className="px-3 py-2 text-gray-600"></th>
            </tr>
          </thead>
          <tbody className="text-center">
            {farms.map((farm) => (
              <FarmInfoItem
                key={farm.id}
                farm={farm}
                onDelete={handleDelete}
                onSelect={handleSelectFarm}
                selectedFarmId={selectedFarmId}
              />
            ))}
          </tbody>
        </table>
        <button className="px-4 py-2 text-primary">
          <FiPlusCircle size={24} />
        </button>
      </div>
    </div>
  );
};

export default FarmInfoList;
