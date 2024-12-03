interface BaseProjectsResponse {
  id: number;
  id_project?: string;
  bussines_unit_id: number;
  bussines_unit: string;
  product: string;
  area_id: number;
  area: string;
  location_id: number;
  location: string;
}

export interface ProjectsResponse extends BaseProjectsResponse {
  farm: string;
  capacity: number;
  period: number;
  status_chick_in: string;
  status_project?: string;
}

export interface ProjectPreparationsResponse extends BaseProjectsResponse {
  farm: string;
  period: number;
  status_project?: string;
  status_preparation?: string;
}

export interface ProjectChickInResponse extends BaseProjectsResponse {
  farm: string;
  capacity: number;
  period: number;
  status_chick_in: string;
  status_project?: string;
}
