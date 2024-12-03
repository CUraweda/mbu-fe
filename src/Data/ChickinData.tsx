export interface ChickIn {
  id: number;
  id_project: string;
  bussines_unit: string;
  product: string;
  area: string;
  location: string;
  farm: string;
  capacity: number;
  period: number;
  status_chick_in: string;
  status_project: string;
}

const chickinData: ChickIn[] = [
  {
    id: 1,
    id_project: "000001",
    bussines_unit: "Manbu",
    product: "Parent Stock",
    area: "Priangan",
    location: "Pangandaran",
    farm: "Pangandaran 1",
    capacity: 50000,
    period: 1,
    status_chick_in: "Sudah",
    status_project: "Pengajuan",
  },
  {
    id: 2,
    id_project: "000002",
    bussines_unit: "Manbu",
    product: "Parent Stock",
    area: "Priangan",
    location: "Lokasi 2",
    farm: "Pangandaran 2",
    capacity: 40000,
    period: 2,
    status_chick_in: "Belum",
    status_project: "Persiapan",
  },
  {
    id: 3,
    id_project: "000003",
    bussines_unit: "Manbu",
    product: "Parent Stock",
    area: "Priangan",
    location: "Lokasi 3",
    farm: "Pangandaran 3",
    capacity: 30000,
    period: 3,
    status_chick_in: "Belum",
    status_project: "Aktif",
  },
  {
    id: 4,
    id_project: "000004",
    bussines_unit: "Manbu",
    product: "Parent Stock",
    area: "Priangan",
    location: "Lokasi 4",
    farm: "Pangandaran 4",
    capacity: 20000,
    period: 4,
    status_chick_in: "Belum",
    status_project: "Selesai",
  },
];

export default chickinData;
