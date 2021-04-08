/*eslint-disable*/
import axios from "axios";

const api = axios.create({
  baseURL: "https://datathonbackend.netlify.app",
});
export default api;
