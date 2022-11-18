import ButtonParticle from "components/particles/button-primary/button-primaty-index";
import Typography from "components/particles/typography-particles";
import LogoSvg from "components/particles/logo-svg/logo-svg";
import Spacing from "../../particles/spacing-particles/index";
import { StyledDivContainer } from "components/particles/input-token/style";
import InputToken from "components/particles/input-token";
import { useEffect, useState } from "react";
import { RequestAtivarParams } from "services/api/base/types";
import useRequest from "hooks/useResquest";
import { requestAtivar } from "services/api/base";

type PropsPasswordToken= {
  newPassword: boolean;
  setNewPassword: React.Dispatch<React.SetStateAction<boolean>>;
  activate: true | false;
  recoverEmail: string;
  setRecoverEmail: React.Dispatch<React.SetStateAction<string>>;
}

export default function PasswordToken(props:PropsPasswordToken) {

  const [confirmaToken, setConfirmaToken]= useState<boolean>(false);
  const [state, request] = useRequest();
  const [codigoToken, setCodigoToken] = useState<string>("");
  const [temporizador, setTemporizador] = useState<boolean>(false);

  async function requestActivateAccount() {
    setTemporizador(true);
    try {
      await request(requestAtivar, "request_ativar", { login: props.recoverEmail, token: codigoToken } as RequestAtivarParams);
      // await request(requestAtivar, "request_ativar", { login: forms.email, token: forms.pin } as RequestAtivarParams);
    } catch {}
  }

   function handleRecoverPasswordToken() {
    !confirmaToken && alert("Erro no token");
    confirmaToken && requestActivateAccount();
    // confirmaToken && props.setNewPassword(!props.newPassword);
  };

    useEffect(() => {
      confirmaToken && alert("Ativado Recuperar Senha por Token");
      confirmaToken && requestActivateAccount();
      // confirmaToken && props.setNewPassword(!props.newPassword);
    }, [confirmaToken]);
    
    useEffect(() => {
      state.result.request_ativar &&  props.setNewPassword(!props.newPassword);
      state.result.request_ativar && setTemporizador(false);
    }, [state.result.request_ativar]);

    useEffect(() => {
      state.error.request_ativar &&  alert("Erro no token");    //  falta ver oque vou fazer aqui - voltar para pagina inicial
      state.error.request_ativar &&  setTemporizador(false);
    }, [state.error.request_ativar]);

    //falta fazer a funcão para reenviar código
    function handleResendCode() {
      alert("Reenviar Código");
      //  aproveitar a mesma função que usei para enviar o token
      //  criar um state para zerar os inputs
    };
 
  return (
    <>
          <LogoSvg/>
          <Spacing marginTop={"54px"}/>
          <Typography tag={'p'} size={'20px'} margin={"0px"} fontWeight={"700"}>{props.activate? "Ativar minha conta":"Recuperar senha"}</Typography>
          <Spacing marginTop={"10px"}/>
          <Typography tag={'p'} size={'14px'} margin={"0px"} fontWeight={"400"}>Insira abaixo o código enviado para o e-mail informado</Typography>
          <Spacing marginTop={"32px"}/>
          {temporizador && <Typography tag={'p'} size={'14px'} margin={"0px"} fontWeight={"600"}>Aguarde....</Typography>}
          {temporizador && <Spacing marginTop={"32px"}/>}
          <StyledDivContainer>
            <Typography tag={'p'} size={'14px'} margin={"0px"} fontWeight={"500"} >Código</Typography>
          </StyledDivContainer>
          <Spacing marginTop={"4px"}/>
          <InputToken confirmToken={setConfirmaToken} setCodeToken={setCodigoToken}/>
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