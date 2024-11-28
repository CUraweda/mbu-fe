export type Status = {
  id: number;
  name: string;
  description: string | null;
};

export type ProjectPreparationStatus = {
  id: number;
  name: string;
};

export type ProjectPreparation = {
  id: number;
  is_approved: boolean | null;
  comment: string | null;
  submitted_at: string | null;
  status: ProjectPreparationStatus;
  preparation_checklist: string | null;
  // documentation_preparations: any[];
  // implementation_preparations: any[];
};

export type Project = {
  id: number;
  id_project: string;
  status_chick_in_id: number;
  status: Status;
  created_at: string;
  updated_at: string;
  project_preparation: ProjectPreparation;
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

// export type Preparation = {
//   id_project: number
//   bussines_unit: string
//   product: string
//   area: string
//   location: string
//   project_farms: string
//   statusProject: string;
//   statusPersiapan: string;
//   waktuPersiapan: string;
// };
