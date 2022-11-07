import InputContainer from "components/atoms/input-container";
import ButtonParticle from "components/particles/button-primary/button-primaty-index";
import Typography from "components/particles/typography-particles";
import LogoSvg from "components/particles/logo-svg/logo-svg";
import Spacing from "components/particles/spacing-particles";
import React, { useState } from "react";
import IconAndText from "components/particles/icon-and-text";

type propsPasswordNew= {
    finalizedPassword: boolean;
    setFinalizedPassword: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function PasswordNew(props:propsPasswordNew) {
    //  tenho que redefinir o useState
  const[loginInput,setLogin] = useState("");    //  falta terminara de configurar
  const [confirmState, setConfirmState] = useState<boolean>(true)

  //falta fazer a funcão
  function handleNewPassword() {
    alert("Criando nova senha")
    props.setFinalizedPassword(!props.finalizedPassword)
  }
 
  return (
    <>
        <LogoSvg/>
        <Spacing marginTop={"54px"}/>
        <Typography tag={'p'} size={'20px'} margin={"0px"} fontWeight={"700"}>Recuperar senha</Typography>
        <Spacing marginTop={"10px"}/>
        <Typography tag={'p'} size={'14px'} margin={"0px"} fontWeight={"400"}>Redefina abaixo a senha da conta.</Typography>
        <Spacing marginTop={"22px"}/>
        {confirmState && <Typography tag={'p'} size={'14px'} margin={"0px"} fontWeight={"400"}>Por segurança, a senha deve seguir os critérios abaixo:</Typography>}
        <Spacing marginTop={"12px"}/>
        {confirmState && <IconAndText 
            icon={true} 
            texto={true} 
            confirm={false}
            sizeIcon={"10px"} 
            margimComponents={"5px"} 
            sizeTexto={"10px"}
            margimTexto={"0px"} 
            fontWeightTexto={"400"} 
            writtenTexto={"Mínimo de 8 caracteres"}></IconAndText>}
        {confirmState && <IconAndText 
            icon={true} 
            texto={true} 
            confirm={false}
            sizeIcon={"10px"} 
            margimComponents={"5px"} 
            sizeTexto={"10px"}
            margimTexto={"0px"} 
            fontWeightTexto={"400"} 
            writtenTexto={"Pelo menos uma letra maíscula"}></IconAndText>}
        {confirmState && <IconAndText 
            icon={true} 
            texto={true} 
            confirm={false}
            sizeIcon={"10px"} 
            margimComponents={"5px"} 
            sizeTexto={"10px"}
            margimTexto={"0px"} 
            fontWeightTexto={"400"} 
            writtenTexto={"Pelo menos um número"}></IconAndText>}
        {confirmState && <IconAndText 
            icon={true} 
            texto={true} 
            confirm={true}
            sizeIcon={"10px"} 
            margimComponents={"5px"} 
            sizeTexto={"10px"}
            margimTexto={"0px"} 
            fontWeightTexto={"400"} 
            writtenTexto={`Pelo menos uma caractere especial (Ex:!@#$%"&*)`}></IconAndText>}
        <InputContainer setInput={setLogin} placeholder={"Digite a sua senha"} labelName={"Senha"} password={true}/>
        <Spacing marginTop={"-20px"}/>
        <InputContainer setInput={setLogin} placeholder={"Digite a sua senha"} labelName={"Confirma senha"} password={true}/>
        <ButtonParticle light text={'CONFIRMAR'} onClick={()=>handleNewPassword()}/>
        <Spacing marginTop={"32px"}/>
    </>
  );
};