import ButtonParticle from "components/particles/button-primary/button-primaty-index";
import Typography from "components/particles/typography-particles";
import LogoSvg from "components/particles/logo-svg/logo-svg";
import Spacing from "../../particles/spacing-particles/index";
import { StyledDivContainer } from "components/particles/input-token/style";
import InputToken from "components/particles/input-token";
import { useContext, useEffect, useState } from "react";
import { RequestAtivarParams } from "services/api/base/types";
import useRequest from "hooks/useResquest";
import { requestAtivar } from "services/api/base";
import { contextLogin } from "contexts/login-context";

type StatusErrorType = "erro" | null;

export default function PasswordToken() {

  const [confirmaToken, setConfirmaToken]= useState<boolean>(false);
  const [state, request] = useRequest();
  const [codigoToken, setCodigoToken] = useState<string>("");
  const [temporizador, setTemporizador] = useState<boolean>(false);
  const [statusError, setStatusError] = useState<StatusErrorType>(null);

  const contextoLogin = useContext(contextLogin);

  const dadosLogin = contextoLogin.funcoes?.dados;
  const fxLogin = contextoLogin.funcoes?.setState;

  async function requestActivateAccount() {
    setTemporizador(true);
    try {
      await request(requestAtivar, "request_ativar", { login: dadosLogin?.email, token: codigoToken } as RequestAtivarParams);
      fxLogin?.setChangeNewPassword(true);
    } catch {}
  }

   function handleRecoverPasswordToken() {    
    if(confirmaToken){
      dadosLogin?.activeAccount && requestActivateAccount();
      !dadosLogin?.activeAccount && fxLogin?.setChangeNewPassword(true);
    }else{
      alert("Erro no token");
      setStatusError("erro");
    }
  };

    useEffect(() => {
      confirmaToken && alert("Ativado Recuperar Senha por Token");
      if(confirmaToken){
        dadosLogin?.activeAccount && requestActivateAccount();
        !dadosLogin?.activeAccount && fxLogin?.setChangeNewPassword(true);
      }
    }, [confirmaToken]);
    
    useEffect(() => {
      if (state.result.request_ativar){
        fxLogin?.setChangeNewPassword(true);
        setTemporizador(false);
      }     
    }, [state.result.request_ativar]);

    useEffect(() => {
      if(state.error.request_ativar){
        alert("Erro no token");
        setTemporizador(false);
      }
    }, [state.error.request_ativar]);

    function handleResendCode() {
      alert("Reenviar Código");
      dadosLogin?.activeAccount && requestActivateAccount();
    };
 
  return (
    <>
          <LogoSvg/>
          <Spacing marginTop={"54px"}/>
          <Typography tag={'p'} size={'20px'} margin={"0px"} fontWeight={"700"}>{dadosLogin?.activeAccount? "Ativar minha conta":"Recuperar senha"}</Typography>
          <Spacing marginTop={"10px"}/>
          <Typography tag={'p'} size={'14px'} margin={"0px"} fontWeight={"400"}>Insira abaixo o código enviado para o e-mail informado</Typography>
          <Spacing marginTop={"32px"}/>
          {temporizador && <Typography tag={'p'} size={'14px'} margin={"0px"} fontWeight={"600"}>Aguarde....</Typography>}
          {temporizador && <Spacing marginTop={"32px"}/>}
          <StyledDivContainer>
            <Typography tag={'p'} size={'14px'} margin={"0px"} fontWeight={"500"} >Código</Typography>
          </StyledDivContainer>
          <Spacing marginTop={"4px"}/>
          <InputToken confirmToken={setConfirmaToken} setCodeToken={setCodigoToken} erro={statusError}/>
          <Spacing marginTop={"32px"}/>
          <div onClick={()=>handleResendCode()}>
            <Typography tag={'p'} size={'12px'} margin={"0px"} fontWeight={"500"} decoration="underline" cursorHover="pointer" >Reenviar código</Typography>
          </div>
          <Spacing marginTop={"32px"}/>
          <ButtonParticle light text={"AVANÇAR"} onClick={()=>handleRecoverPasswordToken()}/>
          <Spacing marginTop={"32px"}/>
        </>
  );
};