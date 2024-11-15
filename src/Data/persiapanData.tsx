interface Persiapan {
    id: number;
    unitBisnis: string;
    produk: string;
    lokasi: string;
    kandang: string;
    periode: number;
    statusProject: string;
    statusPersiapan: string;
    aktual: number;
  }
  
  const persiapanData: Persiapan[] = [
    {
      id: 1,
      unitBisnis: "Manbu",
      produk: "Parent Stock",
      lokasi: "Pangandaran",
      kandang: "Pangandaran 1",
      periode: 3,
      statusProject: "Pengajuan",
      statusPersiapan: "Belum Selesai",
      aktual: 10
    },
    {
      id: 2,
      unitBisnis: "Manbu",
      produk: "Final Stock",
      lokasi: "Pangandaran",
      kandang: "Pangandaran 2",
      periode: 2,
      statusProject: "Aktif",
      statusPersiapan: "Tercapai",
      aktual: 11
    },
    {
      id: 3,
      unitBisnis: "Manbu",
      produk: "Final Stock",
      lokasi: "Pangandaran",
      kandang: "Pangandaran 3",
      periode: 2,
      statusProject: "Aktif",
      statusPersiapan: "Tidak Tercapai",
      aktual: 17
    },
    {
      id: 4,
      unitBisnis: "Manbu",
      produk: "Final Stock",
      lokasi: "Pangandaran",
      kandang: "Pangandaran 4",
      periode: 2,
      statusProject: "Selesai",
      statusPersiapan: "Tercapai",
      aktual: 14
    },
    {
        id: 5,
        unitBisnis: "MBU",
        produk: "Broiler",
        lokasi: "Singaparna",
        kandang: "Singaparna 3",
        periode: 16,
        statusProject: "Selesai",
        statusPersiapan: "Tidak Tercapai",
        aktual: 16
      },
      {
        id: 6,
        unitBisnis: "MBU",
        produk: "Broiler",
        lokasi: "Cimarga",
        kandang: "Cimarga 2",
        periode: 10,
        statusProject: "Persiapan",
        statusPersiapan: "Belum Selesai",
        aktual: 18
      },
      {
        id: 7,
        unitBisnis: "LTI",
        produk: "Telur",
        lokasi: "Tamansari",
        kandang: "Tamansari 1",
        periode: 14,
        statusProject: "Persiapan",
        statusPersiapan: "Belum Selesai",
        aktual: 17
      },
      {
        id: 8,
        unitBisnis: "Lti",
        produk: "Telur",
        lokasi: "Tamansari",
        kandang: "Tamansari 2",
        periode: 12,
        statusProject: "Persiapan",
        statusPersiapan: "Belum Selesai",
        aktual: 20
      },
  ];
  
  export default persiapanData;