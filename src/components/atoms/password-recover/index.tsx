import InputContainer from "components/atoms/input-container";
import ButtonParticle from "components/particles/button-primary/button-primaty-index";
import Typography from "components/particles/typography-particles";
import LogoSvg from "components/particles/logo-svg/logo-svg";
import Spacing from "components/particles/spacing-particles";
import React, { useContext, useEffect, useRef, useState } from "react";
import { fxRegexValidateEmail } from "functions/regex-validate";
import useRequest from "hooks/useResquest";
import { requestPedirAtivacao } from "services/api/base";
import { RequestPedirAtivacao } from "services/api/base/types";
import { contextLogin } from "contexts/login-context";

type RefType = HTMLInputElement | null;

export default function PasswordRecover() {

  // const[loginInput,setLogin] = useState("");
  const [email, setEmail] = useState("");
  const [state, request] = useRequest();
  const [temporizador, setTemporizador] = useState<boolean>(false);
  const [erroStatus, setErroStatus] =useState<"erro" | null >(null);
  
  const contextoLogin = useContext(contextLogin);

  const elementEmailRecorver = useRef<RefType>(null);

  const dadosLogin = contextoLogin.funcoes?.dados;
  const fxLogin = contextoLogin.funcoes?.setState;

  async function requestActivate() {
    setTemporizador(true);
    try {
      await request(requestPedirAtivacao, "activate", { login: email } as RequestPedirAtivacao);
      // depois de conectado vai para o token
      fxLogin?.setChangeRecoverToken(true);
    } catch {}
  };

  useEffect(() => {

    if(state.result.activate){
      fxLogin?.setChangeRecoverToken(true);
      setTemporizador(false);
      setErroStatus(null);
    }

  }, [state.result.activate]);

  useEffect(() => {

    if (state.error.activate){
      alert("Email não encontrado");  // estou deixando na mesma tela
      setEmail("");
      fxLogin?.setChangeEmail("");
      setTemporizador(false);
      setErroStatus("erro");
    }

  }, [state.error.activate]);

  useEffect(() => {
    // loginContext.dadosData?.fx.fxTrocarNome('trocado por login Contexto função trocarNome - ** por objeto criado')
    email.length > 1 &&  setErroStatus(null);
  },[email]);

  useEffect(()=>{
    elementEmailRecorver.current?.focus();
  },[])

  const fxErroValidarEmail = (validatedEmail: boolean)=>{
    if(!validatedEmail){
      alert("Digite um email válido");
      setEmail("");
      setErroStatus("erro");
    };
  };

  const fxExecutaRecorverPassword = (validatedEmail: boolean)=>{
    if(validatedEmail){
      setErroStatus(null);
      fxLogin?.setChangeEmail(email);
      dadosLogin?.activeAccount && requestActivate();  //  ativar está true e validou o email => executa a função
      !dadosLogin?.activeAccount && alert("Falta fazer a conexção");
    //  por não está implantada a conecaode não sei a senha, neste caso confirmamos o emaile e passamos para token
      !dadosLogin?.activeAccount && fxLogin?.setChangeRecoverToken(true);
    };
  };

  function handleRecoverPassword() {
    const validatedEmail = fxRegexValidateEmail(email);
    fxErroValidarEmail(validatedEmail);
    fxExecutaRecorverPassword(validatedEmail);
  };
  
  return (
    <>
        <LogoSvg/>
        <Spacing marginTop={"54px"}/>
        <Typography tag={'p'} size={'20px'} margin={"0px"} fontWeight={"700"}>{dadosLogin?.activeAccount? "Ativar minha conta":"Recuperar senha"}</Typography>
        <Spacing marginTop={"10px"}/>
        <Typography tag={'p'} size={'14px'} margin={"0px"} fontWeight={"400"}>Informe seu e-mail empresarial</Typography>
        <Spacing marginTop={"32px"}/>
        {temporizador && <Typography tag={'p'} size={'14px'} margin={"0px"} fontWeight={"600"}>Aguarde....</Typography>}
        {temporizador && <Spacing marginTop={"32px"}/>}
        <InputContainer ref={elementEmailRecorver} setInput={setEmail} placeholder={"email@rbmweb.com.br"} labelName={"E-mail"} password={false} value={email} statusError={erroStatus}/>
        <Spacing marginTop={"24px"}/>
        <ButtonParticle light text={'AVANÇAR'} onClick={()=>handleRecoverPassword()}/>
        <Spacing marginTop={"32px"}/>
        {dadosLogin?.activeAccount &&
         <Typography tag={'p'} size={'10px'} margin={"0px"} fontWeight={"400"}>Caso ainda não tenha recebido seu e-mail entre em contato como RH.</Typography>}
    </>
  );
};