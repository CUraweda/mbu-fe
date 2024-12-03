import { Projects } from "@/Data/types/allTypes";
import { ProjectPreparationsResponse } from "@/Data/types/response.type";
import FetchApi from "@/helpers/FetchApi";

class PersiapanApi {
  private api: FetchApi;

  constructor() {
    this.api = new FetchApi();
  }

  async getAllPersiapan(): Promise<{
    response: ProjectPreparationsResponse[];
    result: Projects[];
  }> {
    const {
      data: { result },
    } = await this.api.get<{
      data: {
        result: Projects[];
      };
    }>("/projects/preparations");
    const response: ProjectPreparationsResponse[] = result.map((r) => {
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
        period: r.project_farms[0]?.farms.period,
        status_project: r.status?.name,
        status_preparation: r.project_preparation?.status.name,
      };
    });
    return { response, result };
  }
}

const persiapanApi = new PersiapanApi();

export default persiapanApi;
