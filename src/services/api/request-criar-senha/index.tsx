import axiosInstance from "services/axios";

export type RequestCriarSenha = {
    login: string;
    senha: string;
  };

export async function requestCriarSenha(params: RequestCriarSenha) {
    const response = await axiosInstance.post("/usuarios/criarSenha", { ...params });
    console.log("requestCriarSenha params:", params);
    console.log("response.data",response.data);
    return response.data;
  };