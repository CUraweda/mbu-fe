import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";

interface LoginResponse {
  user: {
    user_roles: { roles: { id: number; name: string } }[];
    bussines_unit: { id: number; name: string };
    location: { id: number; name: string };
  };
  token: {
    access_token: string;
  };
}

class FetchApi {
  private axiosInstance: AxiosInstance;

  constructor(baseURL: string = import.meta.env.VITE_API_URL as string) {
    if (!baseURL) {
      throw new Error("Api base url is not defined.");
    }
    this.axiosInstance = axios.create({
      baseURL,
      headers: {
        "Content-Type": "application/json",
      },
    });

    this.axiosInstance.interceptors.request.use((config) => {
      const token = localStorage.getItem("access_token");
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
      return config;
    });
  }

  private handleResponse<T>(response: AxiosResponse<T>): T {
    return response.data;
  }

  async get<T>(endpoint: string, config?: AxiosRequestConfig): Promise<T> {
    const response = await this.axiosInstance.get<T>(endpoint, config);
    return this.handleResponse(response);
  }

  async post<T, U>(
    endpoint: string,
    data: U,
    config?: AxiosRequestConfig,
  ): Promise<T> {
    const response = await this.axiosInstance.post<T>(endpoint, data, config);
    return this.handleResponse(response);
  }

  async put<T, U>(
    endpoint: string,
    data: U,
    config?: AxiosRequestConfig,
  ): Promise<T> {
    const response = await this.axiosInstance.put<T>(endpoint, data, config);
    return this.handleResponse(response);
  }

  async delete<T>(endpoint: string, config?: AxiosRequestConfig): Promise<T> {
    const response = await this.axiosInstance.delete<T>(endpoint, config);
    return this.handleResponse(response);
  }

  async login(
    email: string,
    password: string,
  ): Promise<Record<string, string>> {
    const { data: response } = await this.post<
      { data: LoginResponse },
      { email: string; password: string }
    >("users/auth/login", { email, password });

    console.log(response);
    console.log(response.user.bussines_unit.id.toString());
    console.log(response.user.location.id.toString());
    console.log(response.user.user_roles[0].roles.name);

    const authResponse: Record<string, string> = {};
    if (response.token.access_token) {
      authResponse["access_token"] = response.token.access_token;
      authResponse["access_role"] = response.user.user_roles[0].roles.name;
      authResponse["bussines_unit_id"] =
        response.user.bussines_unit.id.toString();
      authResponse["bussines_unit"] = response.user.bussines_unit.name;
      authResponse["location_id"] = response.user.location.id.toString();
      authResponse["location"] = response.user.location.name;
    }

    return authResponse;
  }

  static async promiseAllTyped<T extends unknown[]>(promises: {
    [K in keyof T]: Promise<T[K]>;
  }): Promise<T> {
    return Promise.all(promises);
  }
}

export default FetchApi;
