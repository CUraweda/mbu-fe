interface Budget {
  id: number;
  item: string;
  qty: string;
  hargaSatuan: string;
  totalAnggaran: string;
}

export const budgetData: Budget[] = [
  {
    id: 1,
    item: "Gaji Karyawan",
    qty: "",
    hargaSatuan: "",
    totalAnggaran: "50,000,000.00",
  },
  {
    id: 2,
    item: "Gas",
    qty: "",
    hargaSatuan: "",
    totalAnggaran: "15,000,000.00",
  },
  {
    id: 3,
    item: "Listrik",
    qty: "",
    hargaSatuan: "",
    totalAnggaran: "80,000,000.00",
  },
  {
    id: 4,
    item: "Deplesi",
    qty: "",
    hargaSatuan: "",
    totalAnggaran: "2,000,000.00",
  },
];

export default budgetData;
