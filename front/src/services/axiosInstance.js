import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: `http://${process.env.REACT_APP_API_URL}/api/v1`,
  timeout: 2000,
  headers: { "X-Custom-Header": "foobar" },
});
