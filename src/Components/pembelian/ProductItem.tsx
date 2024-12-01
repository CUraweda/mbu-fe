import React from "react";
import { FaRegTrashAlt } from "react-icons/fa";

interface ProductItemProps {
  id: number;
  product: string;
  jenisProduk: string;
  gudang: string;
  jumlah: number;
  satuan: string;
  hargaSatuan: number;
  pajak: number;
  total: number;
  onChange: (field: string, value: string | number) => void;
  onDelete: () => void;
}

const ProductItem: React.FC<ProductItemProps> = ({
  id,
  product,
  jenisProduk,
  gudang,
  jumlah,
  satuan,
  hargaSatuan,
  pajak,
  total,
  onChange,
  onDelete,
}) => {
  return (
    <tr className="bg-white border-b border-gray-200">
      <td className="px-4 text-gray-700">{id}</td>
      <td className="p-2 text-gray-700">
        <select
          value={product}
          onChange={(e) => onChange("gudang", e.target.value)}
          className="w-full px-2 py-1 text-gray-700 border rounded focus:outline-none focus:ring-2 focus:ring-primary"
        >
          <option value="DOC CP Vaksin">DOC CP Vaksin</option>
          <option value="Pakan Starter">Pakan Starter</option>
          {/* Add other options here */}
        </select>
      </td>
      <td className="p-2 text-gray-700">{jenisProduk}</td>
      <td className="p-2">
        <select
          value={gudang}
          onChange={(e) => onChange("gudang", e.target.value)}
          className="w-full px-2 py-1 text-gray-700 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-primary"
        >
          <option value="Gudang Pangandaran">Gudang Pangandaran</option>
          {/* Add other options here */}
        </select>
      </td>
      <td className="p-2">
        <input
          type="number"
          value={jumlah}
          onChange={(e) => onChange("jumlah", parseFloat(e.target.value))}
          className="w-full px-2 py-1 text-gray-700 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-primary"
        />
      </td>
      <td className="p-2 text-gray-700">{satuan}</td>
      <td className="p-2">
        {hargaSatuan.toLocaleString("id-ID", {
          style: "currency",
          currency: "IDR",
        })}
      </td>
      <td className="p-2 text-gray-700">
        <input
          type="text"
          value={`${pajak}%`}
          onChange={(e) => {
            const value = parseFloat(e.target.value.replace("%", ""));
            if (!isNaN(value)) {
              onChange("jumlah", value / 100);
            }
          }}
          className="w-full px-2 py-1 text-gray-700 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-primary"
        />
      </td>
      <td className="p-2 text-gray-700">
        {total.toLocaleString("id-ID", { style: "currency", currency: "IDR" })}
      </td>
      <td className="p-2">
        <button onClick={onDelete} className="px-3 py-1">
          <FaRegTrashAlt className="text-red-500" />
        </button>
      </td>
    </tr>
  );
};

export default ProductItem;
