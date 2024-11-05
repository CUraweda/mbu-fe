interface Farm {
  id: number;
  namaKandang: string;
  kapasitas: number;
  jenisFarm: string;
  periode: number;
  penanggungJawab: string;
}

const farmData: Farm[] = [
  {
    id: 1,
    namaKandang: "Pangandaran 1",
    kapasitas: 50000,
    jenisFarm: "Own Farm",
    periode: 4,
    penanggungJawab: "Sugiarto",
  },
  {
    id: 2,
    namaKandang: "Pangandaran 2",
    kapasitas: 40000,
    jenisFarm: "Own Farm",
    periode: 3,
    penanggungJawab: "Sugiarto",
  },
];

export default farmData;
