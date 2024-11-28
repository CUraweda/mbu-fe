import authApi from "./authApi";

const persiapanApi = (() => {
  const BASE_URL = "http://localhost:8080/api";

  async function getAllPersiapan() {
    const { data } = await authApi._fetchWithAuth(
      `${BASE_URL}/projects/preparations`
    );

    console.log(data.result);
    return data?.result;
  }

  async function getProjectById() {
    const { data } = await authApi._fetchWithAuth(
      `${BASE_URL}/projects/submissions/:id"`
    );

    console.log(data.result);
    return data?.result;
  }

  return {
    getAllPersiapan,
    getProjectById,
  };
})();

export default persiapanApi;
