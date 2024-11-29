import authApi from "./authApi";

const persiapanApi = (() => {
  const BASE_URL = "http://api-prmn.curaweda.com:3050/api";

  async function getAllPersiapan() {
    const { data } = await authApi._fetchWithAuth(
      `${BASE_URL}/projects/preparations`
    );

    return data.result;
  }

  return {
    getAllPersiapan,
  };
})();

export default persiapanApi;
