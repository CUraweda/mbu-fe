interface Info {
    id: number;
    unitBisnis: string;
    area: string;
    lokasi: string;
    produk: string;
    namaKandang: string;
  }
  
  const informasiUmum: Info[] = [
    {
      id: 1,
      unitBisnis: "PT Mitra Berlian Unggas 1",
      area: "Banten",
      lokasi: "Cimarga",
      produk: "Broiler",
      namaKandang: "Cimarga 1",
    },
    {
      id: 2,
      unitBisnis: "PT Mitra Berlian Unggas 2",
      area: "Banten",
      lokasi: "Cimarga",
      produk: "Broiler",
      namaKandang: "Cimarga 2",
    },
  ];
  
  export default informasiUmum;