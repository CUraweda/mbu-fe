export interface Persiapan {
  id: number;
  id_project: string;
  bussines_unit: string;
  product: string;
  location: string;
  farm: string;
  period: string;
  status_project: string;
  status_preparation: string;
  actual: string;
}

export const persiapanData: Persiapan[] = [
  {
    id: 1,
    id_project: "000001",
    bussines_unit: "Manbu",
    product: "Broiler",
    location: "Pangandaran",
    farm: "Pangandaran 1",
    period: "3",
    status_project: "Persiapan",
    status_preparation: "Belum Selesai",
    actual: "13",
  },
  {
    id: 2,
    id_project: "000002",
    bussines_unit: "MBU",
    product: "Parent Stock",
    location: "Singaparna",
    farm: "Pangandaran 2",
    period: "2",
    status_project: "Aktif",
    status_preparation: "Tercapai",
    actual: "17",
  },
  {
    id: 3,
    id_project: "000003",
    bussines_unit: "LTI",
    product: "Final Stock",
    location: "Cimarga",
    farm: "Farm 03",
    period: "2",
    status_project: "Selesai",
    status_preparation: "Tidak Tercapai",
    actual: "",
  },
];
