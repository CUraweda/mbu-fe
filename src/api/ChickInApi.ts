import { Projects } from "@/Data/types/allTypes";
import { ProjectChickInResponse } from "@/Data/types/response.type";
import FetchApi from "@/helpers/FetchApi";

class ChickInApi {
  private api: FetchApi;

  constructor() {
    this.api = new FetchApi();
  }

  async getAllChickIn(): Promise<{
    response: ProjectChickInResponse[];
    result: Projects[];
  }> {
    const {
      data: { result },
    } = await this.api.get<{
      data: {
        result: Projects[];
      };
    }>("/projects/preparations");
    const response: ProjectChickInResponse[] = result.map((r) => {
      return {
        id: r.id,
        id_project: r.id_project,
        bussines_unit_id: r.bussines_unit.id,
        bussines_unit: r.bussines_unit.name,
        product: r.product,
        area_id: r.area.id,
        area: r.area.name,
        location_id: r.location.id,
        location: r.location.name,
        farm: r.project_farms[0]?.farms.name,
        capacity: r.project_farms[0]?.farms.capacity,
        period: r.project_farms[0]?.farms.period,
        status_project: r.status?.name,
        status_chick_in: ["Belum", "Sudah"][r.status_chick_in_id],
      };
    });
    return { response, result };
  }
}

const chickInApi = new ChickInApi();

export default chickInApi;
