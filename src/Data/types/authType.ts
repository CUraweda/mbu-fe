interface Token {
  token_type: string;
  access_token: string;
  refresh_token: string;
  expires_in: number;
}

interface Role {
  id: number;
  name: string;
  description: string;
  bussines_unit_id: number;
  created_at: string;
}

interface User {
  id: number;
  name: string;
  email: string;
  phone: string;
  created_at: string;
  update_at: string;
  bussines_unit: {
    id: number;
    name: string;
    address: string;
    created_at: string;
    updated_at: string;
  };
  location: {
    id: number;
    name: string;
    address: string;
    area_id: number;
    created_at: string;
    updated_at: string;
  };
  user_roles: Array<{
    roles: Role;
  }>;
  user_permissions: Array<{
    permissions: {
      id: number;
      name: string;
      description: string;
    };
  }>;
}

interface LoginResponse {
  code: number;
  status: boolean;
  message: string;
  data: {
    user: User;
    token: Token;
  };
}

export default LoginResponse;
