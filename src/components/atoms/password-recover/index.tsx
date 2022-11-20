import InputContainer from "components/atoms/input-container";
import ButtonParticle from "components/particles/button-primary/button-primaty-index";
import Typography from "components/particles/typography-particles";
import LogoSvg from "components/particles/logo-svg/logo-svg";
import Spacing from "components/particles/spacing-particles";
import React, { useContext, useEffect, useState } from "react";
import { fxRegexValidateEmail } from "functions/regex-validate";
import useRequest from "hooks/useResquest";
import { requestPedirAtivacao } from "services/api/base";
import { RequestPedirAtivacao } from "services/api/base/types";
import { contextLogin } from "contexts/login-context";

type propsPasswordRecover= {
  recoverToken: boolean;
  setRecoverToken: React.Dispatch<React.SetStateAction<boolean>>;
  activate: true | false;
  recoverEmail: string;
  setRecoverEmail: React.Dispatch<React.SetStateAction<string>>;
};

export default function PasswordRecover(props:propsPasswordRecover) {

  // const[loginInput,setLogin] = useState("");
  const [email, setEmail] = useState("");
  const [state, request] = useRequest();
  const [temporizador, setTemporizador] = useState<boolean>(false);
  
  const loginContext = useContext(contextLogin);

  async function requestActivate() {
    setTemporizador(true);
    try {
      await request(requestPedirAtivacao, "activate", { login: email } as RequestPedirAtivacao);
    } catch {}
  };

  useEffect(() => {
    // console.log("state [state.result.activate]", state);
    state.result.activate && console.log("state [state.result.activate true]", state);
    state.result.activate && props.setRecoverToken(!props.recoverToken);
    state.result.activate && setTemporizador(false);
    // if (state.result.activate) {
    //   // setForms((forms) => ({ ...forms, email }));    // daniel usa assim
    //   // changeStep("activate-account-pin");            // daniel usa assim
    //   props.setRecoverToken(!props.recoverToken);
    // }
  }, [state.result.activate]);

  useEffect(() => {
    // console.log("state [state.error.activate]", state)
    state.error.activate && console.log("state [state.error.activate true]", state)
    state.error.activate && alert("Email não encontrado");  // estou deixando na mesma tela
    state.error.activate && setEmail("");
    state.error.activate && setTemporizador(false);
    // if (state.error.activate) {
    //   alert("Email não encontrado");
    //   setEmail("");
    //   setTemporizador(false);
    // };
  }, [state.error.activate]);

  useEffect(() => {
    // loginContext.dadosData?.fx.fxTrocarNome('trocado por login Contexto função trocarNome - ** por objeto criado')
  },[]);

  function handleRecoverPassword() {
    const validatedEmail = fxRegexValidateEmail(email);
    !validatedEmail && alert("Digite um email válido");
    !validatedEmail && setEmail("");
    props.activate && validatedEmail && props.setRecoverEmail(email);
    props.activate && validatedEmail && requestActivate();  //  ativar está true e validou o email => executa a função
    !props.activate && validatedEmail && alert("Falta fazer a conexção");
  };
  
  return (
    <>
        <LogoSvg/>
        <Spacing marginTop={"54px"}/>
        {/* <h1>{loginContext.dadosData?.dados.usuario}</h1> */}
        <Typography tag={'p'} size={'20px'} margin={"0px"} fontWeight={"700"}>{props.activate? "Ativar minha conta":"Recuperar senha"}</Typography>
        <Spacing marginTop={"10px"}/>
        <Typography tag={'p'} size={'14px'} margin={"0px"} fontWeight={"400"}>Informe seu e-mail empresarial</Typography>
        <Spacing marginTop={"32px"}/>
        {temporizador && <Typography tag={'p'} size={'14px'} margin={"0px"} fontWeight={"600"}>Aguarde....</Typography>}
        {temporizador && <Spacing marginTop={"32px"}/>}
        <InputContainer setInput={setEmail} placeholder={"email@rbmweb.com.br"} labelName={"E-mail"} password={false} elementFocus={true} value={email}/>
        <Spacing marginTop={"24px"}/>
        <ButtonParticle light text={'AVANÇAR'} onClick={()=>handleRecoverPassword()}/>
        <Spacing marginTop={"32px"}/>
        {props.activate &&
         <Typography tag={'p'} size={'10px'} margin={"0px"} fontWeight={"400"}>Caso ainda não tenha recebido seu e-mail entre em contato como RH.</Typography>}
    </>
  );
};