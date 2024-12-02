import React, { useEffect, useState } from "react";
import { masterApi } from "@/api";
import {
  MasterAreas,
  MasterLocations,
  MasterProducts,
} from "@/Data/types/allTypes";
import FetchApi from "@/helpers/FetchApi";

const GeneralInfoForm: React.FC = () => {
  const [areas, setAreas] = useState<MasterAreas[]>([]);
  const [locations, setLocations] = useState<MasterLocations[]>([]);
  const [products, setProducts] = useState<MasterProducts[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [fetchedAreas, fetchedLocations, fetchedProducts] =
          await FetchApi.promiseAllTyped([
            masterApi.getAllAreas(),
            masterApi.getAllLocations(),
            masterApi.getAllProducts(),
          ]);

        setAreas(fetchedAreas || []);
        setLocations(fetchedLocations || []);
        setProducts(fetchedProducts || []);
      } catch (error) {
        console.error("Failed to fetch master data:", error);
      }
    };

    void fetchData();
  }, []);

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
            value="1"
          />
        </div>

        <div>
          <label htmlFor="unitBisnis">Unit Bisnis</label>
          <input
            type="text"
            id="unitBisnis"
            className="block w-full px-2 py-1 mt-1 bg-gray-100 border border-gray-300 focus:ring-primary"
            disabled
            value={localStorage.getItem("bussinesUnit") || ""}
          />
        </div>

        <div>
          <label htmlFor="area">Area</label>
          <select
            id="area"
            required
            className="block w-full px-2 py-1 mt-1 border border-gray-300 rounded-sm shadow-sm focus:ring-primary"
          >
            <option value="">Pilih Area</option>
            {areas.map((area: MasterAreas) => (
              <option key={area.id} value={area.name}>
                {area.name}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor="lokasi">Lokasi</label>
          <select
            id="lokasi"
            required
            className="block w-full px-2 py-1 mt-1 border border-gray-300 rounded-sm shadow-sm focus:ring-primary"
          >
            <option value="">Pilih Lokasi</option>
            {locations.map((location: MasterLocations) => (
              <option key={location.id} value={location.name}>
                {location.name}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor="produk">Produk</label>
          <select
            id="produk"
            required
            className="block w-full px-2 py-1 mt-1 border border-gray-300 rounded-sm shadow-sm focus:ring-primary"
          >
            <option value="">Pilih Produk</option>
            {products.map((product: MasterProducts) => (
              <option key={product.id} value={product.name}>
                {product.name}
              </option>
            ))}
          </select>
        </div>
      </div>

      <hr />
    </div>
  );
};

export default GeneralInfoForm;
