import axiosInstance from "services/axios";

export type RequestCriarSenhaType = {
    login: string;
    senha: string;
  };

export async function requestCriarSenha(params: RequestCriarSenhaType) {
    const response = await axiosInstance.post("/usuarios/criarSenha", { ...params });
    console.log("requestCriarSenha params:", params);
    console.log("response.data",response.data);
    return response.data;
  };