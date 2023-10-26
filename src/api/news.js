import axios from "axios";

// axios.defaults.baseURL = "http://192.168.89.3:8000/";

// export async function fetchNews({ params }) {
//   console.log(params);
//   return axios.get("apps/news/", { params });
// }

export const fetchNews = async () => {
  const response = await axios.get("http://192.168.89.3:8000/apps/news/");
  return response.data;
};
