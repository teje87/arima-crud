import { axiosInstance } from "../axiosInstance";

export default async function updateGym(gymId, name, phone, openedSince) {
  console.log(gymId);
  const res = await axiosInstance.put(`/gyms/${gymId}`, {
    name,
    phone,
    openedSince,
  });
  console.log(res);
  return res;
}
