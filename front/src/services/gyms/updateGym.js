import { axiosInstance } from "../axiosInstance";

export default async function updateGym(gymId, name, phone, openedSince) {
  const res = await axiosInstance.put(`/gyms/${gymId}`, {
    name,
    phone,
    openedSince,
  });
  return res;
}
