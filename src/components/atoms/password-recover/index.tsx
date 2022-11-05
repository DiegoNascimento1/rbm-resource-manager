import InputContainer from "components/atoms/input-container";
import ButtonParticle from "components/particles/button-primary/button-primaty-index";
import Typography from "components/particles/typography-particles";
import LogoSvg from "components/particles/logo-svg/logo-svg";
import Spacing from "components/particles/spacing-particles";
import React, { useState } from "react";


type propsPassawordRecover= {
  recoverToken: boolean;  // falta tipara corretamente
  setRecoverToken: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function PassawordRecover(props:propsPassawordRecover) {

  const[loginInput,setLogin] = useState("");

  //falta fazer a funcão
  function handleRecoverPassaword() {
    alert("Ativadando Recuperar Senha")
    props.setRecoverToken(!props.recoverToken)
  }
 
  return (
    <>
        <LogoSvg/>
        <Spacing marginTop={"54px"}/>
        <Typography tag={'p'} size={'20px'} margin={"0px"} fontWeight={"700"}>Recuperar senha</Typography>
        <Spacing marginTop={"10px"}/>
        <Typography tag={'p'} size={'14px'} margin={"0px"} fontWeight={"400"}>Informe seu e-mail empresarial</Typography>
        <Spacing marginTop={"32px"}/>
        <InputContainer setInput={setLogin} placeholder={"email@rbmweb.com.br"} labelName={"E-mail"} password={false}/>
        <Spacing marginTop={"24px"}/>
        <ButtonParticle light text={'AVANÇAR'} onClick={()=>handleRecoverPassaword()}/>
        <Spacing marginTop={"32px"}/>
    </>
  );
};