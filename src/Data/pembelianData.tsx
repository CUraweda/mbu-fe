// Sample data
interface Pembelian {
  id: string;
  noPR: string;
  vendor: string;
  namaPengaju: string;
  departemen: string;
  tanggal: string;
  status: string;
  total: number;
}

const pembelianData: Pembelian[] = [
  {
    id: "1",
    noPR: "PR-MAN-00001",
    vendor: "PT Malindo Feedmill Tbk",
    namaPengaju: "Rifaldi",
    departemen: "Operations - MANBU",
    tanggal: "25-10-2024",
    status: "Draft",
    total: 50000000,
  },
  {
    id: "2",
    noPR: "PR-MBU-00002",
    vendor: "PT Malindo Feedmill Tbk",
    namaPengaju: "Brian",
    departemen: "Operations - MBU",
    tanggal: "30/10/2024",
    status: "Approval Manager",
    total: 10000000,
  },
  {
    id: "3",
    noPR: "PR-LTI-00003",
    vendor: "PT Malindo Feedmill Tbk",
    namaPengaju: "Maman",
    departemen: "Operations - LTI",
    tanggal: "09/11/2024",
    status: "Approval Purchasing",
    total: 20000000,
  },
  {
    id: "4",
    noPR: "PR-MBU-00004",
    vendor: "PT Malindo Feedmill Tbk",
    namaPengaju: "Jupi",
    departemen: "Operations - MBU",
    tanggal: "09/11/2024",
    status: "Approval Finance",
    total: 15000000,
  },
  {
    id: "5",
    noPR: "PR-MAN-00005",
    vendor: "PT Malindo Feedmill Tbk",
    namaPengaju: "Rifaldi",
    departemen: "Operations - MANBU",
    tanggal: "25/10/2024",
    status: "Approval Dir Finance",
    total: 25000000,
  },
  {
    id: "6",
    noPR: "PR-MBU-00005",
    vendor: "PT Charoen Pokphand Indonesia Tbk",
    namaPengaju: "Rifaldi",
    departemen: "Operations - MBU",
    tanggal: "25/10/2024",
    status: "PO Release",
    total: 389055000,
  },
  {
    id: "7",
    noPR: "PR-MBU-00007",
    vendor: "PT Malindo Feedmill Tbk",
    namaPengaju: "Jupi",
    departemen: "Operations - MBU",
    tanggal: "09/11/2024",
    status: "Produk Diterima",
    total: 10000000,
  },
  {
    id: "8",
    noPR: "PR-MAN-00008",
    vendor: "PT Malindo Feedmill Tbk",
    namaPengaju: "Rifaldi",
    departemen: "Operations - MANBU",
    tanggal: "25/10/2024",
    status: "Dibayar",
    total: 20000000,
  },
  {
    id: "9",
    noPR: "PR-MBU-00009",
    vendor: "PT Charoen Pokphand Indonesia Tbk",
    namaPengaju: "Rifaldi",
    departemen: "Operations - MBU",
    tanggal: "25/10/2024",
    status: "Dibayar Sebagian",
    total: 38905500,
  },
];

export default pembelianData;
