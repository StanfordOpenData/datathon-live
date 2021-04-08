/*eslint-disable*/
import axios from "axios";

const api = axios.create({
  baseURL: "https://datathonbackend.herokuapp.com/"
});
export default api;
