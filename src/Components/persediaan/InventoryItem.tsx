import { Inventory } from "@/Data/inventoryData";
import React from "react";
import { CiMenuKebab } from "react-icons/ci";
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
    <tr>
      <td>
        <input
          type="checkbox"
          defaultChecked
          className="checkbox checkbox-info"
          checked={isChecked}
          onChange={onCheckboxChange}
        />
      </td>
      <td className=" text-primary-dark">{id}</td>
      <td>{name}</td>
      <td>{purchasePrice}</td>
      <td>{sellingPrice}</td>
      <td>{category}</td>
      <td>{totalStock}</td>
      <td>{unit}</td>
      <td className="">
        <div className="dropdown dropdown-left dropdown-end">
          <div tabIndex={0} className="">
            <span className="btn btn-ghost text-xl font-bold" role="button">
              <CiMenuKebab />
            </span>
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
