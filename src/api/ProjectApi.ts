import { Projects } from "@/Data/types/allTypes";
import { ProjectsResponse } from "@/Data/types/response.type";
import FetchApi from "@/helpers/FetchApi";

class ProjectApi {
  private api: FetchApi;

  constructor() {
    this.api = new FetchApi();
  }

  async getAllProject(): Promise<{
    response: ProjectsResponse[];
    result: Projects[];
  }> {
    const {
      data: { result },
    } = await this.api.get<{
      data: {
        result: Projects[];
      };
    }>("/projects/submissions");
    const response: ProjectsResponse[] = result.map((r) => {
      return {
        id: r.id,
        id_project: r.id_project,
        bussines_unit: r.bussines_unit.name,
        bussines_unit_id: r.bussines_unit.id,
        product: r.product,
        area: r.area.name,
        area_id: r.area.id,
        location: r.location.name,
        location_id: r.location.id,
        farm: r.project_farms[0]?.farms.name,
        capacity: r.project_farms[0]?.farms.capacity,
        period: r.project_farms[0]?.farms.period,
        status_chick_in: ["Belum", "Sudah"][r.status_chick_in_id],
        status_project: r.status?.name,
      };
    });
    return { response, result };
  }
}

const projectApi = new ProjectApi();

export default projectApi;
