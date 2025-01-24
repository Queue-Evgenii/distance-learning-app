import axios, { AxiosInstance } from "axios";

const token = localStorage.getItem("dla_access_token");

export const apiClient: AxiosInstance = axios.create({
  baseURL: "http://localhost:3000",
  timeout: 1000,
  headers: {
    ContentType: "application/json",
    Accept: "application/json",
    Authorization: token ? `Bearer ${token}` : "",
  },
});
