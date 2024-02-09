import axios from "axios";

import { getFormatTodayDate } from "./date.js";

const api = axios.create({
  baseURL: "http://apis.data.go.kr/",
  headers: {
    "Content-Type": "application/json",
  },
  timeout: 10000,
});

api.interceptors.request.use(
  (config) => {
    return config;
  },
  (error) => {
    console.log(
      `[Error] ./api.js: ${getFormatTodayDate("yyyy-MM-dd HH:mm:SS")}`,
      error
    );
    return Promise.reject(error);
  }
);

export default api;
