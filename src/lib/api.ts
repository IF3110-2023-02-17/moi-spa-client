import axios from "axios";

const baseURL =
  import.meta.env.VITE_REST_API_URL || "http://localhost:8003/v1/api/";
export const apiClient = axios.create({
  baseURL,
});

export function getApiImagePath(path: string) {
  const url = new URL(baseURL);
  url.pathname = path;
  return url.toString();
}
