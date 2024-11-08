type RecordItem = {
  id: number;
  item: string;
  satuan: string;
  intervalRecording: string;
};

const dataRecordingData: RecordItem[] = [
  { id: 1, item: "Body Weight", satuan: "Gram", intervalRecording: "Harian" },
  { id: 2, item: "Pakan", satuan: "Kilogram", intervalRecording: "Harian" },
  { id: 3, item: "Mati", satuan: "Ekor", intervalRecording: "Harian" },
  { id: 4, item: "Culling", satuan: "Ekor", intervalRecording: "Harian" },
  { id: 5, item: "Afkir", satuan: "Ekor", intervalRecording: "Harian" },
  {
    id: 6,
    item: "Hatching Eggs",
    satuan: "Butir",
    intervalRecording: "Mingguan",
  },
  { id: 7, item: "Konsumsi Air", satuan: "Liter", intervalRecording: "Harian" },
];

export default dataRecordingData;
