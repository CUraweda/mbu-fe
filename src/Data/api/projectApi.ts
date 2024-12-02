// import authApi from "./authApi";
//
// const projectApi = (() => {
//   const BASE_URL = process.env.REACT_APP_API_URL;
//
//   async function getAllProject() {
//     const { data } = await authApi._fetchWithAuth(
//       `${BASE_URL}/projects/submissions`,
//     );
//
//     return data?.result;
//   }
//
//   async function submissionStep1({
//     area_id,
//     location_id,
//     product,
//   }: {
//     area_id: number;
//     location_id: number;
//     product: string;
//   }) {
//     const data = await authApi._fetchWithAuth(
//       `${BASE_URL}/projects/submissions/step-1`,
//       {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({
//           area_id,
//           location_id,
//           product,
//         }),
//       },
//     );
//
//     return data;
//   }
//
//   async function submissionStep2({ farms }: { farms: { farm_id: number }[] }) {
//     const data = await authApi._fetchWithAuth(
//       `${BASE_URL}/projects/submissions/step-2`,
//       {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({
//           farms,
//         }),
//       },
//     );
//
//     return data;
//   }
//
//   async function submissionStep3({
//     budgets,
//   }: {
//     budgets: {
//       farm_id: number;
//       budget_items: {
//         id?: number;
//         item: string;
//         qty: number;
//         price: number;
//         total_price?: number;
//       }[];
//       phase: {
//         id?: number;
//         name: string;
//         start_date: string;
//         end_date: string;
//         status_id: number;
//       }[];
//     }[];
//   }) {
//     const data = await authApi._fetchWithAuth(
//       `${BASE_URL}/projects/submissions/step-3`,
//       {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({
//           budgets,
//         }),
//       },
//     );
//
//     return data;
//   }
//
//   async function submissionStep4({
//     data_recordings,
//   }: {
//     data_recordings: {
//       item: string;
//       unit: string;
//       interval: string;
//     }[];
//   }) {
//     const data = await authApi._fetchWithAuth(
//       `${BASE_URL}/projects/submissions/step-4`,
//       {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({
//           data_recordings,
//         }),
//       },
//     );
//
//     return data;
//   }
//
//   return {
//     getAllProject,
//     submissionStep1,
//     submissionStep2,
//     submissionStep3,
//     submissionStep4,
//   };
// })();
//
// export default projectApi;
