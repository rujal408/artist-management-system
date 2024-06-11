import axios from "axios";
import { getToken } from "./token";

const baseURL = "http://localhost:3001/api";

const instance = axios.create({
  baseURL: process.env.BASE_URL || baseURL,
});

instance.interceptors.request.use(
  async(config) => {
    const token = await getToken() // GET Token from cookies
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default instance;
