import axios from "axios";

export const fetchQuestion = async () => {
  const response = await axios.get("http://192.168.89.3:8000/apps/faq/");
  return response.data;
};
