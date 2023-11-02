import axios from "axios";

export const fetchNews = async () => {
  const response = await axios.get("http://192.168.89.10:8000/apps/news/");
  return response.data;
};
