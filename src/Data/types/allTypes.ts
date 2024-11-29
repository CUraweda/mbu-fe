export interface Users {
  id: number;
  name: string;
  email: string;
  password: string;
  phone: string;
  location_id?: number;
  bussines_unit_id?: number;
  refresh_token?: string;
  created_at: Date;
  update_at: Date;
  user_roles: UserRoles[];
  user_permissions: UserPermissions[];
  location?: MasterLocations;
  bussines_unit?: MasterBussinesUnits;
}

export interface Roles {
  id: number;
  name: string;
  description?: string;
  bussines_unit_id?: number;
  created_at: Date;
  user_roles: UserRoles[];
  role_permissions: RolePermissions[];
  bussines_unit?: MasterBussinesUnits;
}

export interface UserRoles {
  id: number;
  user_id: number;
  role_id: number;
  created_at: Date;
  users: Users;
  roles: Roles;
}

export interface Permissions {
  id: number;
  name: string;
  description?: string;
  role_permissions: RolePermissions[];
  user_permissions: UserPermissions[];
}

export interface RolePermissions {
  id: number;
  role_id: number;
  permission_id: number;
  created_at: Date;
  roles: Roles;
  permissions: Permissions;
}

export interface UserPermissions {
  id: number;
  user_id: number;
  permission_id: number;
  created_at: Date;
  users: Users;
  permissions: Permissions;
}

export interface MasterProducts {
  id: number;
  name: string;
  created_at: Date;
  updated_at: Date;
  purchasing_items: PurchasingItems[];
}

export interface MasterFarms {
  id: number;
  name: string;
  capacity: number;
  farm_type_id: number;
  period: number;
  bussines_unit_id: number;
  location_id: number;
  pic_id: number;
  created_at: Date;
  updated_at: Date;
  project_farms: ProjectFarms[];
  farm_budgets: FarmBudgets[];
  project_recordings: ProjectRecordings[];
  warehouses: MasterWarehouses[];
  farm_type: FarmTypes;
  bussines_unit: MasterBussinesUnits;
  location: MasterLocations;
  pic: MasterPic;
}

export interface FarmTypes {
  id: number;
  name: string;
  farms: MasterFarms[];
}

export interface MasterAreas {
  id: number;
  name: string;
  created_at: Date;
  updated_at: Date;
  location: MasterLocations[];
  project: Projects[];
}

export interface MasterLocations {
  id: number;
  name: string;
  address: string;
  area_id: number;
  created_at: Date;
  updated_at: Date;
  farms: MasterFarms[];
  projects: Projects[];
  users: Users[];
  area: MasterAreas;
  warehouse: MasterWarehouses[];
}

export interface MasterBussinesUnits {
  id: number;
  name: string;
  abbreviation?: string;
  address: string;
  created_at: Date;
  updated_at: Date;
  farms: MasterFarms[];
  projects: Projects[];
  users: Users[];
  roles: Roles[];
  warehouse: MasterWarehouses[];
}

export interface MasterPreparationChecklist {
  id: number;
  item: string;
  type: number;
  created_at: Date;
  updated_at: Date;
  item_preparations: ItemPreparations[];
}

export interface MasterWarehouses {
  id: number;
  farm_id: number;
  name: string;
  capacity: number;
  bussines_unit_id: number;
  location_id: number;
  pic_id: number;
  created_at: Date;
  updated_at: Date;
  purchasing_items: PurchasingItems[];
  feeds: MasterRecordingFeeds[];
  body_weights: MasterRecordingBodyWeights[];
  ovk: MasterRecordingOVK[];
  mortalities: MasterRecordingMortalities[];
  farm: MasterFarms;
  bussines_unit: MasterBussinesUnits;
  location: MasterLocations;
  pic: MasterPic;
}

export interface MasterPic {
  id: number;
  name: string;
  farms: MasterFarms[];
  warehouse: MasterWarehouses[];
}

export interface MasterDepartments {
  id: number;
  name: string;
  created_at: Date;
  updated_at: Date;
  purchasings: Purchasings[];
}

export interface MasterRecordings {
  id: number;
  item: number;
  frequency: number;
  time: string;
  created_at: Date;
  updated_at: Date;
}

export interface MasterRecordingFeeds {
  id: number;
  farm_id: number;
  stock: number;
  unit: string;
  created_at: Date;
  updated_at: Date;
  warehouse: MasterWarehouses;
}

export interface MasterRecordingBodyWeights {
  id: number;
  farm_id: number;
  age: number;
  average_weight: number;
  unit: string;
  created_at: Date;
  updated_at: Date;
  warehouse: MasterWarehouses;
}

export interface MasterRecordingOVK {
  id: number;
  farm_id: number;
  item: string;
  stock: number;
  unit: string;
  created_at: Date;
  updated_at: Date;
  warehouse: MasterWarehouses;
}

export interface MasterRecordingMortalities {
  id: number;
  farm_id: number;
  age: number;
  dead: number;
  culling: number;
  reject: number;
  unit: string;
  created_at: Date;
  updated_at: Date;
  warehouse: MasterWarehouses;
}

export interface Projects {
  id: number;
  id_project?: string;
  bussines_unit_id: number;
  area_id: number;
  location_id: number;
  product: string;
  is_approved: number;
  step: number;
  comment?: string;
  status_chick_in_id: number;
  status_id?: number;
  submitted_at?: Date;
  created_at: Date;
  updated_at: Date;
  farm_phase: FarmPhase[];
  project_farms: ProjectFarms[];
  farm_budgets: FarmBudgets[];
  data_recordings: DataRecording[];
  project_recordings: ProjectRecordings[];
  project_preparation?: ProjectPreparations;
  project_chick_in?: ProjectChickIn;
  status?: ProjectStatus;
  bussines_unit: MasterBussinesUnits;
  location: MasterLocations;
  area: MasterAreas;
}

export interface ProjectStatus {
  id: number;
  name: string;
  projects: Projects[];
}

export interface ProjectFarms {
  id: number;
  project_id: number;
  farm_id: number;
  farm_budgets: FarmBudgets[];
  farm_phase: FarmPhase[];
  projects: Projects;
  farms: MasterFarms;
}

export interface FarmBudgets {
  id: number;
  project_id: number;
  farm_id: number;
  item: string;
  qty: number;
  price: number;
  total_price: number;
  project_farms_id: number;
  farm: MasterFarms;
  project_farms: ProjectFarms;
  projects: Projects;
}

export interface FarmPhase {
  id: number;
  project_id: number;
  project_farm_id: number;
  name: string;
  start_date: Date;
  end_date: Date;
  status_id: number;
  created_at: Date;
  updated_at: Date;
  projects: Projects;
  status: PhaseStatus;
  project_farms: ProjectFarms;
}

export interface PhaseStatus {
  id: number;
  name: string;
  farm_phase: FarmPhase[];
}

export interface DataRecording {
  id: number;
  item: string;
  unit: string;
  interval: string;
  project_id: number;
  created_at: Date;
  updated_at: Date;
  projects: Projects;
}

export interface ProjectPreparations {
  id: number;
  project_id: number;
  is_approved?: number;
  comment?: string;
  status_id: number;
  submitted_at?: Date;
  created_at: Date;
  updated_at: Date;
  preparation_checklist?: PreparationChecklist;
  documentation_preparations: DocumentationPreparations[];
  implementation_preparations: ImplementationPreparations[];
  projects: Projects;
  status: ProjectPreparationStatus;
}

export interface ProjectPreparationStatus {
  id: number;
  name: string;
  ProjectPreparations: ProjectPreparations[];
}

export interface PreparationChecklist {
  id: number;
  preparation_type: number;
  chicken_exp_date: Date;
  total_actual_time?: number;
  project_preparation_id: number;
  created_at: Date;
  updated_at: Date;
  item_preparations: ItemPreparations[];
  project_preparations: ProjectPreparations;
}

export interface ItemPreparations {
  id: number;
  item_id: number;
  complete_date?: Date;
  actual_time?: number;
  status_id: number;
  preparation_checklist_id: number;
  status: ItemPreparationStatus;
  items: MasterPreparationChecklist;
  preparation_checklist: PreparationChecklist;
}

export interface ItemPreparationStatus {
  id: number;
  name: string;
  item_preparations: ItemPreparations[];
}

export interface DocumentationPreparations {
  id: number;
  name: string;
  file_path?: string;
  worker_name: string;
  project_preparation_id: number;
  created_at: Date;
  updated_at: Date;
  project_preparations: ProjectPreparations;
}

export interface ImplementationPreparations {
  id: number;
  worker_name: string;
  place: string;
  image?: string;
  project_preparation_id: number;
  created_at: Date;
  updated_at: Date;
  project_preparations: ProjectPreparations;
}

export interface ProjectChickIn {
  id: number;
  project_id: number;
  submitted_at?: Date;
  created_at: Date;
  updated_at: Date;
  chickin_forms: ChickInForms[];
  projects?: Projects;
}

export interface ChickInForms {
  id: number;
  chick_in_id: number;
  letter_number: string;
  chick_in_date: Date;
  doc_type: string;
  supplier: string;
  hatchery: string;
  amount: number;
  project_chick_in: ProjectChickIn;
}

export interface ProjectRecordings {
  id: number;
  id_recording: number;
  project_id: number;
  farm_id: number;
  type_id: number;
  amount_use: number;
  status_id?: number;
  punctuality: number;
  created_at: Date;
  updated_at: Date;
  status?: RecordingStatus;
  project: Projects;
  farm: MasterFarms;
}

export interface RecordingStatus {
  id: number;
  name: string;
  project_recording: ProjectRecordings[];
}

export interface Purchasings {
  id: number;
  pr_number?: string;
  po_number?: string;
  notes?: string;
  vendor: string;
  applicant_name: string;
  department_id: number;
  needed_date: Date;
  is_all_approved: number;
  status_id: number;
  price_without_tax?: number;
  price_with_tax?: number;
  price_discount?: number;
  price_other_costs?: number;
  final_price?: number;
  submitted_at?: Date;
  created_at: Date;
  updated_at: Date;
  purchasing_items: PurchasingItems[];
  purchasing_other_costs: PurchasingOtherCosts[];
  purchasing_payments: PurchasingPayments[];
  purchasing_receipt_return: PurchasingReceiptReturn[];
  department: MasterDepartments;
  purchasing_status: PurchasingStatus;
}

export interface PurchasingStatus {
  id: number;
  name: string;
  purchasing: Purchasings[];
}

export interface PurchasingItems {
  id: number;
  purchasing_id: number;
  product_name: string;
  product_type_id: number;
  warehouse_id: number;
  qty: number;
  unit: string;
  unit_price: number;
  tax: number;
  created_at: Date;
  updated_at: Date;
  purchasing_receipt_return?: PurchasingReceiptReturn;
  warehouse: MasterWarehouses;
  product: MasterProducts;
  purchasing: Purchasings;
}

export interface PurchasingOtherCosts {
  id: number;
  purchasing_id: number;
  name: string;
  nominal: number;
  created_at: Date;
  updated_at: Date;
  purchasing: Purchasings;
}

export interface PurchasingPayments {
  id: number;
  purchasing_id: number;
  bank_account: string;
  recipient_bank: string;
  payment_reference: string;
  reference_number: string;
  nominal_payment: number;
  admin_fees: number;
  payment_method: string;
  document_path: string;
  remaining_payment?: number;
  status_id: number;
  created_at: Date;
  updated_at: Date;
  purchasing: Purchasings;
}

export interface PurchasingReceiptReturn {
  id: number;
  purchasing_id: number;
  purchasing_item_id: number;
  receipt_date?: Date;
  delivery_note_number?: string;
  carrier_vehicle_number?: string;
  qty_received?: number;
  qty_returned?: number;
  qty_pending?: number;
  received_product_value?: number;
  created_at: Date;
  updated_at: Date;
  purchasing_items: PurchasingItems;
  purchasing: Purchasings;
}
