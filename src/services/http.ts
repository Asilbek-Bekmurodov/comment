import axios, { AxiosRequestConfig } from "axios";

const config: AxiosRequestConfig = {
  headers: {
    accept: "application/json",
    "Content-Type": "application/json; charset=utf-8",
  },
  baseURL: "http://54.91.200.15:8090/api",
};

const http = axios.create(config);

http.interceptors.request.use(
  (config: AxiosRequestConfig) => {
    config.headers = {
      ...config.headers,
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    };
    return config;
  },
  (error) => Promise.reject(error)
);

export default http;
