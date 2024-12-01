import {
  MasterAreas,
  MasterBussinesUnits,
  MasterFarms,
  MasterLocations,
  MasterPreparationChecklist,
  MasterProducts,
} from "@/Data/types/allTypes";
import FetchApi from "@/helpers/FetchApi";

class MasterApi {
  private api: FetchApi;

  constructor() {
    this.api = new FetchApi();
  }

  async getAllAreas(): Promise<MasterAreas[]> {
    const data = await this.api.get<{ result: MasterAreas[] }>("/master/area");
    return data.result;
  }

  async getAllBussinesUnits(): Promise<MasterBussinesUnits[]> {
    const data = await this.api.get<{ result: MasterBussinesUnits[] }>(
      "/master/bussines-units",
    );
    return data.result;
  }

  async getAllFarms(): Promise<MasterFarms[]> {
    const data = await this.api.get<{ result: MasterFarms[] }>("/master/farms");
    return data.result;
  }

  async getAllLocations(): Promise<MasterLocations[]> {
    const data = await this.api.get<{ result: MasterLocations[] }>(
      "/master/locations",
    );
    return data.result;
  }

  async getAllProducts(): Promise<MasterProducts[]> {
    const data = await this.api.get<{ result: MasterProducts[] }>(
      "/master/products",
    );
    return data.result;
  }

  async getAllPreparationChecklist(): Promise<MasterPreparationChecklist[]> {
    const data = await this.api.get<{ result: MasterPreparationChecklist[] }>(
      "/master/preparation-checklist",
    );
    return data.result;
  }
}

const masterApi = new MasterApi();

export default masterApi;
