export interface Inventory {
  id: string;
  name: string;
  purchasePrice: number;
  sellingPrice: number;
  category: string;
  totalStock: number;
  unit: string;
}

const inventoryData: Inventory[] = [
  {
    id: "00001",
    name: "DOC CP Vaksin",
    purchasePrice: 7000.0,
    sellingPrice: 0.0,
    category: "Sapronak",
    totalStock: 150000.0,
    unit: "Ekor",
  },
  {
    id: "00002",
    name: "Pakan Starter",
    purchasePrice: 500.0,
    sellingPrice: 0.0,
    category: "Sapronak",
    totalStock: 1000.0,
    unit: "Kilogram",
  },
];

export default inventoryData;
