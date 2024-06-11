import axios from "axios";

const baseURL = "http://localhost:6000/api";

const instance = axios.create({
  baseURL: process.env.BASE_URL || baseURL,
});

axios.interceptors.request.use((config) => {
  const token = ""; // GET Token from session
  config.headers.Authorization = `Bearer${token}`;
  return config;
});

export default instance;
