import { axiosInstance } from "../axiosInstance";

export default async function getGyms(page) {
  const gyms = await axiosInstance.get("/gyms", { params: { page } });
  return gyms.data;
}
