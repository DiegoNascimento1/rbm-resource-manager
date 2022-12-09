import axiosInstance from "services/axios";

export type RequestPedirAtivacaoType = {
    login: string;
  };

export async function requestPedirAtivacao(params: RequestPedirAtivacaoType) {
    const response = await axiosInstance.post("/usuarios/pedirAtivacao", { ...params });
    console.log("requestPedirAtivacao params:", params);
    console.log("response.data",response.data);
    return response.data;
  };