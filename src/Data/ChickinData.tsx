interface Project {
    id: number;
    unitBisnis: string;
    produk: string;
    area: string;
    lokasi: string;
    kandang: string;
    kapasitas: number;
    periode: number;
    statusChickin: string;
    statusProject: string;
  }
  
  const projectData: Project[] = [
    {
      id: 1,
      unitBisnis: "Manbu",
      produk: "Parent Stock",
      area: "Priangan",
      lokasi: "Pangandaran",
      kandang: "Pangandaran 1",
      kapasitas: 50000,
      periode: 1,
      statusChickin: "Sudah",
      statusProject: "Pengajuan",
    },
    {
      id: 2,
      unitBisnis: "Manbu",
      produk: "Parent Stock",
      area: "Priangan",
      lokasi: "Lokasi 2",
      kandang: "Pangandaran 2",
      kapasitas: 40000,
      periode: 2,
      statusChickin: "Belum",
      statusProject: "Persiapan",
    },
    {
      id: 3,
      unitBisnis: "Manbu",
      produk: "Parent Stock",
      area: "Priangan",
      lokasi: "Lokasi 3",
      kandang: "Pangandaran 3",
      kapasitas: 30000,
      periode: 3,
      statusChickin: "Belum",
      statusProject: "Aktif",
    },
    {
      id: 4,
      unitBisnis: "Manbu",
      produk: "Parent Stock",
      area: "Priangan",
      lokasi: "Lokasi 4",
      kandang: "Pangandaran 4",
      kapasitas: 20000,
      periode: 4,
      statusChickin: "Belum",
      statusProject: "Selesai",
    },
  ];
  
  export default projectData;
  