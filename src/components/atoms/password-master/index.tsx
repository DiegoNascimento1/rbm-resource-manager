import InputContainer from "components/atoms/input-container";
import ButtonParticle from "components/particles/button-primary/button-primaty-index";
import Typography from "components/particles/typography-particles";
import LogoSvg from "components/particles/logo-svg/logo-svg";
import Spacing from "components/particles/spacing-particles";
import LoginChecked from "components/atoms/login-checked-link";
import React, { useState } from "react";
import { useAuth } from "contexts/auth-context";


type propsPasswordMaster= {
  recoverpassword: boolean;
  setrecoverPassword: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function PasswordMaster(props:propsPasswordMaster) {

  const[loginInput,setLogin] = useState("");
  const[senhaInput,setSenha] = useState("");
  const{login}  = useAuth();

  function handleLogin() {
    login(loginInput,senhaInput)
  }

  return (
    <>
      <LogoSvg/>
      <Spacing marginTop={"54px"}/>
      <Typography tag={'p'} size={'20px'} margin={"0px"} fontWeight={"700"}>Entrar na minha conta</Typography>
      <Spacing marginTop={"10px"}/>
      <Typography tag={'p'} size={'14px'} margin={"0px"} fontWeight={"400"}>Acesse sua conta abaixo =)</Typography>
      <Spacing marginTop={"32px"}/>
      <InputContainer setInput={setLogin} placeholder={"email@rbmweb.com.br"} labelName={"E-mail"} password={false}/>
      <InputContainer setInput={setSenha} placeholder={"Digite sua senha"} labelName={"Senha"} password={true}/>
      <LoginChecked textoLabel={"Salvar login"} textoLink={"Esqueci a senha"} setRecoverPassaword={props.setrecoverPassword} RecoverPassaword={props.recoverpassword}/>
      <ButtonParticle light text={'ENTRAR'} onClick={()=>handleLogin()}/>
      <Spacing marginTop={"32px"}/>
      <Typography tag={'p'} size={'14px'} margin={"0px"} decoration={'underline'} fontWeight={"400"}>Primeiro acesso? <a href="#" style={{fontWeight:"600",color:"black"}}>Ative sua conta.</a></Typography>
      <Spacing marginTop={"32px"}/>
    </>
  );
};