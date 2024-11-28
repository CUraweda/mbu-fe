import authApi from "./authApi";

const projectApi = (() => {
  const BASE_URL = "http://localhost:8080/api";

  async function getAllProject() {
    const { data } = await authApi._fetchWithAuth(
      `${BASE_URL}/projects/submissions`
    );

    return data?.result;
  }

  async function submissionStep1({
    area_id,
    location_id,
    product_id,
  }: {
    area_id: number;
    location_id: number;
    product_id: number;
  }) {
    const response = await authApi._fetchWithAuth(
      `${BASE_URL}/projects/submissions/step-1`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          area_id,
          location_id,
          product_id,
        }),
      }
    );

    const responseJson = await response.json();
    const { data, errors } = responseJson;

    if (!response.ok) {
      const message = errors?.error?.message;
      throw new Error(message);
    }

    return data;
  }

  async function submissionStep2({ farms }: { farms: { farm_id: number }[] }) {
    const response = await authApi._fetchWithAuth(
      `${BASE_URL}/projects/submissions/step-2`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          farms,
        }),
      }
    );

    const responseJson = await response.json();
    const { data, errors } = responseJson;

    if (!response.ok) {
      const message = errors?.error?.message;
      throw new Error(message);
    }

    return data;
  }

  return {
    getAllProject,
    submissionStep1,
    submissionStep2,
  };
})();

export default projectApi;
