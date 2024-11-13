import React, { useState } from "react";
import ProductItem from "./ProductItem";

interface Product {
  id: number;
  product: string;
  jenisProduk: string;
  gudang: string;
  jumlah: number;
  satuan: string;
  hargaSatuan: number;
  pajak: number;
  total: number;
}

const ProductList: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([
    {
      id: 1,
      product: "DOC CP Vaksin",
      jenisProduk: "Sapronak",
      gudang: "Gudang Pangand",
      jumlah: 1000,
      satuan: "Ekor",
      hargaSatuan: 7000,
      pajak: 11,
      total: 7000 * 1000 * 1.11, // Harga Satuan * Jumlah * (1 + Pajak/100)
    },
    {
      id: 2,
      product: "Pakan Starter",
      jenisProduk: "Sapronak",
      gudang: "Gudang Pangand",
      jumlah: 1000,
      satuan: "Kg",
      hargaSatuan: 500,
      pajak: 11,
      total: 500 * 1000 * 1.11,
    },
  ]);

  const handleProductChange = (
    id: number,
    field: keyof Product,
    value: string | number
  ) => {
    setProducts((prevProducts) =>
      prevProducts.map((product) =>
        product.id === id
          ? {
              ...product,
              [field]: value,
              total:
                field === "hargaSatuan" || field === "jumlah"
                  ? (field === "hargaSatuan"
                      ? Number(value)
                      : product.hargaSatuan) *
                    (field === "jumlah" ? Number(value) : product.jumlah) *
                    (1 + product.pajak / 100)
                  : product.total,
            }
          : product
      )
    );
  };

  const handleDeleteProduct = (id: number) => {
    setProducts((prevProducts) =>
      prevProducts.filter((product) => product.id !== id)
    );
  };

  const handleAddProduct = () => {
    const newProduct: Product = {
      id: products.length + 1,
      product: "",
      jenisProduk: "Sapronak",
      gudang: "Gudang Pangand",
      jumlah: 0,
      satuan: "",
      hargaSatuan: 0,
      pajak: 11,
      total: 0,
    };
    setProducts((prevProducts) => [...prevProducts, newProduct]);
  };

  return (
    <div>
      <table className="min-w-full text-center bg-white">
        <thead>
          <tr className="text-center bg-blue-100">
            <th className="px-4 py-2 font-semibold">#</th>
            <th className="px-4 py-2 font-semibold">Produk</th>
            <th className="px-4 py-2 font-semibold">Jenis Produk</th>
            <th className="px-4 py-2 font-semibold">
              Gudang/Tempat Pengiriman
            </th>
            <th className="px-4 py-2 font-semibold">Jumlah</th>
            <th className="px-4 py-2 font-semibold">Satuan</th>
            <th className="px-4 py-2 font-semibold">Harga Satuan (Rp)</th>
            <th className="px-4 py-2 font-semibold">Pajak</th>
            <th className="px-4 py-2 font-semibold">Total (Rp)</th>
            <th className="px-4 py-2 font-semibold">Aksi</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <ProductItem
              key={product.id}
              id={product.id}
              product={product.product}
              jenisProduk={product.jenisProduk}
              gudang={product.gudang}
              jumlah={product.jumlah}
              satuan={product.satuan}
              hargaSatuan={product.hargaSatuan}
              pajak={product.pajak}
              total={product.total}
              onChange={(field, value) =>
                handleProductChange(product.id, field as keyof Product, value)
              }
              onDelete={() => handleDeleteProduct(product.id)}
            />
          ))}
        </tbody>
      </table>
      <div className="flex my-2 ml-8">
        <button
          onClick={handleAddProduct}
          className="px-3 py-2 ml-5 text-left hover:bg-gray-100 text-primary"
        >
          Tambah Produk
        </button>
      </div>
    </div>
  );
};

export default ProductList;
