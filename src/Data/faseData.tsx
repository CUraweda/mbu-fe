interface Fase {
  id: number;
  fase: string;
  tanggalMulai: string;
  tanggalSelesai: string;
  statusFase: string;
}

const faseData: Fase[] = [
  {
    id: 1,
    fase: "Growing",
    tanggalMulai: "20-10-2024",
    tanggalSelesai: "24-11-2024",
    statusFase: "Dalam Proses",
  },
  {
    id: 2,
    fase: "Laying",
    tanggalMulai: "25-11-2024",
    tanggalSelesai: "05-06-2025",
    statusFase: "Belum Mulai",
  },
  {
    id: 3,
    fase: "Laying",
    tanggalMulai: "25-11-2024",
    tanggalSelesai: "05-06-2025",
    statusFase: "Selesai",
  },
];

export default faseData;
