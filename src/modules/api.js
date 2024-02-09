import axios from "axios";
import env from "./env";

const api = axios.create({
  baseURL:
    "http://apis.data.go.kr/",
  headers: {
    "Content-Type": "application/json",
  },
  timeout: 3000,
});

api.interceptors.request.use((error) => {
  console.log(error);
  return Promise.reject(error);
});

export default api;
