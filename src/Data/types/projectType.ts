export type Status = {
  id: number;
  name: string;
  description: string | null;
};

export type BusinessUnit = {
  id: number;
  name: string;
  address: string;
  created_at: string;
  updated_at: string;
};

export type Product = {
  id: number;
  name: string;
  created_at: string;
  updated_at: string;
};

export type Location = {
  id: number;
  name: string;
  address: string;
  area_id: number;
  created_at: string;
  updated_at: string;
};

export type Area = {
  id: number;
  name: string;
  created_at: string;
  updated_at: string;
};

export type Phase = {
  id: number;
  name: string;
};

export type ProjectPhase = {
  id: number;
  phase: Phase;
  start_date: string;
  end_date: string;
  status: Status;
  created_at: string;
  updated_at: string;
};

export type Farm = {
  id: number;
  name: string;
  capacity: number;
  farm_type_id: number;
  period: number;
  bussines_unit_id: number;
  location_id: number;
  pic_id: number;
  created_at: string;
  updated_at: string;
};

export type Budget = {
  id: number;
  item: string;
  qty: number;
  price: number;
  total_price: number;
  created_at: string;
  updated_at: string;
};

export type FarmBudget = {
  budget: Budget;
};

export type DataRecording = {
  id: number;
  item: string;
  unit: string;
  interval: string;
  created_at: string;
  updated_at: string;
};

export type ProjectFarm = {
  id: number;
  farms: Farm;
  farm_budgets: FarmBudget[];
};

export type Project = {
  id: number;
  id_project: string;
  is_approved: number;
  step: number;
  comment: string | null;
  status_chick_in_id: number;
  created_at: string;
  updated_at: string;
  submitted_at: string;
  status: Status;
  bussines_unit: BusinessUnit;
  product: Product;
  location: Location;
  area: Area;
  project_phase: ProjectPhase[];
  project_farms: ProjectFarm[];
  data_recordings: DataRecording[];
};

export type ProjectSubmissionResponse = {
  code: number;
  status: boolean;
  message: string;
  data: {
    result: Project[];
    page: number;
    limit: number;
    total_rows: number;
    total_page: number;
  };
};

export type ProjectPreparation = {
  // id?: number;
  id_project: string;
  status: Status;
  bussines_unit: BusinessUnit;
  product: Product;
  location: Location;
  area: Area;
  project_farms: ProjectFarm[];
  project_preparation: {
    id: number;
    is_approved: boolean | null;
    comment: string | null;
    submitted_at: string | null;
    status: {
      id: number;
      name: string;
    };
  };
};
