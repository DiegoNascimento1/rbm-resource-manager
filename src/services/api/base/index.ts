// import { RequestAtivarParams, RequestLogin, RequestPedirAtivacao } from "./types";
import {  RequestAtivarParams, RequestPedirAtivacao } from "./types";

import axiosInstance from "services/axios";

// export async function requestLogin(params: RequestLogin) {
//   const response = await axiosInstance.post("/login", { ...params });
//   return response.data;
// }

export async function requestPedirAtivacao(params: RequestPedirAtivacao) {
  const response = await axiosInstance.post("/usuarios/pedirAtivacao", { ...params });
  console.log("requestPedirAtivacao params:", params);
  console.log("response.data",response.data);
  return response.data;
}

export async function requestAtivar(params: RequestAtivarParams) {
  const response = await axiosInstance.post("/usuarios/ativar", { ...params });
  console.log("requestAtivar params:", params);
  console.log("response.data",response.data);
  return response.data;
}

// export async function requestCriarSenha(params: RequestAtivarParams) {
//   const response = await axiosInstance.post("/usuarios/criarSenha", { ...params });
//   return response.data;
// }