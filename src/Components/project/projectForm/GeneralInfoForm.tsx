import React from "react";
// import faseData from "../../Data/faseData";

// interface Fase {
//   id: number;
//   fase: string;
//   tanggalMulai: string;
//   tanggalSelesai: string;
//   statusFase: string;
// }

const GeneralInfoForm: React.FC = () => {
  // const [items, setItems] = React.useState<Fase[]>(faseData);

  // const getstatusFaseFase = (statusFase: string) => {
  //   switch (statusFase) {
  //     case "Dalam Proses":
  //       return "bg-[#E4FFBD] text-[#12B906]";
  //     case "Belum Mulai":
  //       return "bg-[#FFDFBE] text-[#EC8917]";
  //     default:
  //       return "bg-[#D0F0FF] text-[#15B5FF]";
  //   }
  // };

  // const handleDelete = (id: number) => {
  //   setItems((prevItems) => prevItems.filter((item) => item.id !== id));
  // };

  // const handleAddRow = () => {
  //   const newId = items.length > 0 ? items[items.length - 1].id + 1 : 1;
  //   const newItem: Fase = {
  //     id: newId,
  //     fase: "",
  //     tanggalMulai: "",
  //     tanggalSelesai: "",
  //     statusFase: "Belum Mulai",
  //   };
  //   setItems((prevItems) => [...prevItems, newItem]);
  // };

  return (
    <div>
      <div className="grid grid-cols-2 gap-4 pb-3 m-5 md:grid-cols-3 xl:grid-cols-5">
        <div>
          <label htmlFor="idProject">Id Project</label>
          <input
            type="text"
            id="idProject"
            className="block w-full px-2 py-1 mt-1 bg-gray-100 border border-gray-300 rounded-sm shadow-sm focus:ring-primary"
            disabled
          />
        </div>

        <div>
          <label htmlFor="unitBisnis">Unit Bisnis</label>
          <input
            type="text"
            id="unitBisnis"
            className="block w-full px-2 py-1 mt-1 bg-gray-100 border border-gray-300 focus:ring-primary"
            disabled
          />
        </div>

        <div>
          <label htmlFor="area">Area</label>
          <select
            id="area"
            className="block w-full px-2 py-1 mt-1 border border-gray-300 rounded-sm shadow-sm focus:ring-primary"
          >
            <option value="">Pilih Area</option>
            <option value="Priangan">Priangan</option>
            <option value="Sunda">Sunda</option>
            <option value="Jawa">Jawa</option>
          </select>
        </div>

        <div>
          <label htmlFor="lokasi">Lokasi</label>
          <select
            id="lokasi"
            className="block w-full px-2 py-1 mt-1 border border-gray-300 rounded-sm shadow-sm focus:ring-primary"
          >
            <option value="">Pilih Lokasi</option>
            <option value="Pangandaran">Pangandaran</option>
            <option value="Bandung">Bandung</option>
            <option value="Jakarta">Jakarta</option>
          </select>
        </div>

        <div>
          <label htmlFor="produk">Produk</label>
          <select
            id="produk"
            className="block w-full px-2 py-1 mt-1 border border-gray-300 rounded-sm shadow-sm focus:ring-primary"
          >
            <option value="">Pilih Produk</option>
            <option value="Parent Stock">DOC</option>
            <option value="Broiler">Broiler</option>
            <option value="Layer">Telur</option>
          </select>
        </div>
      </div>

      <hr />
    </div>
  );
};

export default GeneralInfoForm;
