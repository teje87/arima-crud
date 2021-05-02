import { axiosInstance } from "../axiosInstance";

export default async function deleteGym(gymId) {
  const gym = await axiosInstance.delete(`/gyms/${gymId}`);
  return gym;
}
