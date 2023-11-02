import axios from "axios";

// export const fetchNewsId = async (id) => {
//   try {
//     const response = await axios.get(
//       `http://192.168.89.10:8000/apps/news/${id}/`
//     );
//     console.log(response);
//     return response.data;
//   } catch (error) {
//     console.error("Error fetching news:", error);
//     throw error;
//   }
// };

export const fetchNewsId = (id) => {
  return axios
    .get(`http://192.168.89.10:8000/apps/news/${id}/`)
    .then((response) => console.log(response.data));
};

// export const fetchNewsId = (id) => {
//   return axios
//     .get(`http://192.168.89.10:8000/apps/news/${id}/`)
//     .then((response) => {
//       console.log(response.data);
//     });
// };
