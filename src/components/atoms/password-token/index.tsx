import ButtonParticle from "components/particles/button-primary/button-primaty-index";
import Typography from "components/particles/typography-particles";
import LogoSvg from "components/particles/logo-svg/logo-svg";
import Spacing from "../../particles/spacing-particles/index";
import { StyledDivContainer } from "components/particles/input-token/style";
import InputToken from "components/particles/input-token";
import { useContext, useEffect, useState } from "react";
import useRequest from "hooks/useResquest";
import { contextLogin } from "contexts/login-context";
import { requestAtivarLogin, RequestAtivarType } from "services/api/request-ativar";
import { requestPedirAtivacao, RequestPedirAtivacaoType } from "services/api/request-pedir-ativacao";

export default function PasswordToken() {

  const [confirmaToken, setConfirmaToken]= useState<boolean>(false);
  // const [state, request] = useRequest();
  const [codigoToken, setCodigoToken] = useState<string>("");
  const [temporizador, setTemporizador] = useState<boolean>(false);
  const [statusError, setStatusError] = useState<boolean>(false);
  const [resetToken, setResetToken] = useState<boolean>(false);

  const contextoLogin = useContext(contextLogin);

  const dadosLogin = contextoLogin.funcoes?.dados;
  const fxLogin = contextoLogin.funcoes?.setState;

  const fxResponsePositive = () => {
        console.log("dadosLogin Positive",dadosLogin);
        fxLogin?.setChangeNewPassword(true);
        setTemporizador(false);
  };

  const fxResponseError = () => {
        alert("Erro no token");
        setTemporizador(false);
        setResetToken(true);
  };

  const searchAtivar = { 
    login: dadosLogin?.email,
    token: codigoToken,
  } as RequestAtivarType;

  async function fxRequestAtivar() {
    setTemporizador(true);
    try {
        await requestAtivarLogin( searchAtivar );
        fxResponsePositive();
    } catch {
        fxResponseError();
    }
  };

  const fxPedirAtivacaoResponsePositive = () => {
    console.log("dadosLogin Positive",dadosLogin);
    alert("Deu certo o reenvio");
    setTemporizador(false);
    setStatusError(false);
};

const fxPedirAtivacaoResponseError = () => {
    alert("Erro no token");
    setTemporizador(false);
    setStatusError(true);
};

  const searchPedirAtivacao = { 
        login: dadosLogin?.email,
  } as RequestPedirAtivacaoType;

  async function fxRequestPedirAtivacao() {
    setTemporizador(true);
    try {
        await requestPedirAtivacao( searchPedirAtivacao );
        fxPedirAtivacaoResponsePositive();
    } catch {
        fxPedirAtivacaoResponseError();
    }
  };

   function handleRecoverPasswordToken() {  
    alert(`Confimra token ${confirmaToken}`); 
    if(confirmaToken){
      alert("confirmado");
      fxRequestAtivar();
    }else{
      setStatusError(true);
    }
  };

    useEffect(() => {
      if(confirmaToken){
        alert("Ativado Recuperar Senha por Token, mas falta enviar");
      };
    }, [confirmaToken]);

    function handleResendCode() {
      console.log(dadosLogin)
      alert("Reenviar Código");
      setConfirmaToken(false);
      setResetToken(true);
      setStatusError(false)
      fxRequestPedirAtivacao();
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
          <InputToken confirmToken={setConfirmaToken} setCodeToken={setCodigoToken} erro={statusError} setErro={setStatusError} reset={resetToken} setReset={setResetToken}/>
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