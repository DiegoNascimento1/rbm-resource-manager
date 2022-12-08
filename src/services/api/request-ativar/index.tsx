import axiosInstance from "services/axios";

export type RequestAtivarType = {
    login: string;
    token: string;
  };

export async function requestAtivarLogin(params: RequestAtivarType) {
    const response = await axiosInstance.post("/usuarios/ativar", { ...params });
    console.log("requestAtivar params:", params);
    console.log("response.data",response.data);
    return response.data;
  };