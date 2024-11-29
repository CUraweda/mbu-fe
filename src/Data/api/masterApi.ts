import authApi from "./authApi";

const masterApi = (() => {
  const BASE_URL = "http://api-prmn.curaweda.com:3050/api";

  async function getAllAreas() {
    const { data } = await authApi._fetchWithAuth(`${BASE_URL}/master/area`);
    return data.result;
  }

  async function getAllBussinesUnits() {
    const { data } = await authApi._fetchWithAuth(
      `${BASE_URL}/master/bussines-units`
    );
    return data.result;
  }

  async function getAllFarms() {
    const { data } = await authApi._fetchWithAuth(`${BASE_URL}/master/farms`);
    return data.result;
  }

  async function getAllLocations() {
    const { data } = await authApi._fetchWithAuth(
      `${BASE_URL}/master/locations`
    );
    return data.result;
  }

  async function getAllProducts() {
    const { data } = await authApi._fetchWithAuth(
      `${BASE_URL}/master/products`
    );
    return data.result;
  }

  async function getAllPreparationChecklist() {
    const { data } = await authApi._fetchWithAuth(
      `${BASE_URL}/master/preparation-checklist`
    );
    return data.result;
  }

  return {
    getAllAreas,
    getAllBussinesUnits,
    getAllFarms,
    getAllLocations,
    getAllProducts,
    getAllPreparationChecklist,
  };
})();

export default masterApi;
