import { create } from "zustand";

interface AuthState {
  token: string | null;
  role: string | null;
  setToken: (token: string) => void;
  setRole: (role: string) => void;
  clearAuth: () => void;
}

const useAuthStore = create<AuthState>((set) => ({
  token: null,
  role: null,
  setToken: (token: string) => {
    localStorage.setItem("accessToken", token);
    set({ token });
  },
  setRole: (role: string) => {
    localStorage.setItem("accessRole", role);
    set({ role });
  },
  clearAuth: () => {
    localStorage.removeItem("accessToken");
    localStorage.removeItem("accessRole");
    set({ token: null, role: null });
  },
}));

export default useAuthStore;
