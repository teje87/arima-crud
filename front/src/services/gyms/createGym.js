import { axiosInstance } from "../axiosInstance";

export default async function createGym(name, phone, openedSince) {
  const gym = await axiosInstance.post("/gyms", { name, phone, openedSince });
  console.log(gym);
  return gym;
}
