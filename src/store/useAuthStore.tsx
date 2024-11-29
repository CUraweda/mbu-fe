import { create } from "zustand";

interface AuthState {
  token: string | null;
  role: string | null;
  bussinesUnitId: string | null;
  bussinesUnit: string | null;
  locationId: string | null;
  location: string | null;
  setToken: (token: string) => void;
  setRole: (role: string) => void;
  setBussinesUnitId: (bussinesUnitId: string) => void;
  setBussinesUnit: (bussinesUnit: string) => void;
  setLocationId: (locationId: string) => void;
  setLocation: (location: string) => void;
  clearAuth: () => void;
}

const useAuthStore = create<AuthState>((set) => ({
  token: localStorage.getItem("accessToken"),
  role: localStorage.getItem("accessRole"),
  bussinesUnitId: localStorage.getItem("bussinesUnitId"),
  bussinesUnit: localStorage.getItem("bussinesUnit"),
  locationId: localStorage.getItem("locationId"),
  location: localStorage.getItem("location"),

  setToken: (token: string) => {
    localStorage.setItem("accessToken", token);
    set({ token });
  },

  setRole: (role: string) => {
    localStorage.setItem("accessRole", role);
    set({ role });
  },

  setBussinesUnitId: (bussinesUnitId: string) => {
    localStorage.setItem("bussinesUnitId", bussinesUnitId);
    set({ bussinesUnitId });
  },

  setBussinesUnit: (bussinesUnit: string) => {
    localStorage.setItem("bussinesUnit", bussinesUnit);
    set({ bussinesUnit });
  },

  setLocationId: (locationId: string) => {
    localStorage.setItem("locationId", locationId);
    set({ locationId });
  },

  setLocation: (location: string) => {
    localStorage.setItem("location", location);
    set({ location });
  },

  clearAuth: () => {
    localStorage.removeItem("accessToken");
    localStorage.removeItem("accessRole");
    localStorage.removeItem("bussinesUnitId");
    localStorage.removeItem("bussinesUnit");
    localStorage.removeItem("locationId");
    localStorage.removeItem("location");

    set({
      token: null,
      role: null,
      bussinesUnitId: null,
      bussinesUnit: null,
      locationId: null,
      location: null,
    });
  },
}));

export default useAuthStore;
