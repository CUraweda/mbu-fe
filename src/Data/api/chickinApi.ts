import authApi from "./authApi";

const chickinApi = (() => {
  const BASE_URL = "http://api-prmn.curaweda.com:3050/api";

  async function getAllChickin() {
    const { data } = await authApi._fetchWithAuth(
      `${BASE_URL}/projects/chickins`
    );

    return data.result;
  }

  return {
    getAllChickin,
  };
})();

export default chickinApi;
