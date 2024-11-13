import Recording from "../Pages/Project/recordingPage";

interface Recording {
    projectId: number;
    waktuRecording: string;
    lokasi: string;
    status: string;
    kecepatanWaktu: string;
}

const recordingData: Recording[] = [
    {
        projectId: 1,
        waktuRecording: "2022-01-01 00:00:00",
        lokasi: "Pangandaran",
        status: "Belum",
        kecepatanWaktu: "Pengajuan"
    },
    
];

export default recordingData;