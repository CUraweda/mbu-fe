import { Inventory } from "@/Data/inventoryData";
import React from "react";
import { FaTrashAlt } from "react-icons/fa";
import { MdOutlineEdit, MdOutlineRemoveRedEye } from "react-icons/md";
import { useNavigate } from "react-router-dom";

interface InventoryListProps extends Inventory {
  isChecked: boolean;
  onCheckboxChange: () => void;
}

const InventoryItem: React.FC<InventoryListProps> = ({
  id,
  name,
  purchasePrice,
  sellingPrice,
  category,
  totalStock,
  unit,
  isChecked,
  onCheckboxChange,
}) => {
  const navigate = useNavigate();

  const handleNavigateDetail = () => {
    // event.preventDefault();
    navigate("/inventory/product/detail");
  };

  return (
    <tr className="overflow-x-auto text-base text-center border-b">
      <td>
        <input
          type="checkbox"
          checked={isChecked}
          onChange={onCheckboxChange}
        />
      </td>
      <td className="px-4 py-2 font-medium text-primary-dark">{id}</td>
      <td className="px-4 py-2">{name}</td>
      <td className="px-4 py-2">{purchasePrice}</td>
      <td className="px-4 py-2">{sellingPrice}</td>
      <td className="px-4 py-2">{category}</td>
      <td className="px-4 py-2">{totalStock}</td>
      <td className="px-4 py-2">{unit}</td>
      <td className="px-4 py-2 text-center">
        <div className="dropdown dropdown-left dropdown-end">
          <div tabIndex={0} role="button" className="m-1 rotate-90">
            ...
          </div>
          <ul className="z-10 p-2 mr-2 border shadow dropdown-content menu bg-base-100 rounded-box w-52 border-slate-200">
            <li>
              <button>
                <span>
                  <MdOutlineEdit />
                </span>
                Edit
              </button>
            </li>
            <li>
              <button>
                <span>
                  <FaTrashAlt size={15} className="text-red-500" />
                </span>
                Hapus
              </button>
            </li>
            <li>
              <button onClick={handleNavigateDetail}>
                <span>
                  <MdOutlineRemoveRedEye
                    size={17}
                    className="text-primary-dark"
                  />
                </span>
                Lihat Detail
              </button>
            </li>
          </ul>
        </div>
      </td>
    </tr>
  );
};

export default InventoryItem;
