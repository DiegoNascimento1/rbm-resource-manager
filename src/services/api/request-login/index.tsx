import axiosInstance from "services/axios";

export type RequestLoginType = {
    login: string;
    senha: string;
  };

export async function requestLogin(params: RequestLoginType) {
  const response = await axiosInstance.post("/login", { ...params });
  return response.data;
}