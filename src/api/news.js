import axios from "axios";

axios.defaults.baseURL = "http://192.168.89.3:8000/";

export async function fetchNews({ params }) {
  return axios.get("apps/news/", { params });
}
