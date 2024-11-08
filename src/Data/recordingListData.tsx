interface RecordingItem {
  projectId: number;
  waktuRecording: string;
  lokasi: string;
  status: string;
  kecepatanWaktu: string;
}

const recordingListData: RecordingItem[] = [
  {
    projectId: 1,
    waktuRecording: "14/10/2024 08:22",
    lokasi: "Pangandaran",
    status: "Pengajuan",
    kecepatanWaktu: "Terlambat",
  },
  {
    projectId: 2,
    waktuRecording: "11/10/2024 --:--",
    lokasi: "Priangan",
    status: "",
    kecepatanWaktu: "",
  },
  {
    projectId: 3,
    waktuRecording: "12/10/2024 --:--",
    lokasi: "Bandung",
    status: "",
    kecepatanWaktu: "",
  },
];

export default recordingListData;
