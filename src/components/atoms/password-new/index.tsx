import InputContainer from "components/atoms/input-container";
import ButtonParticle from "components/particles/button-primary/button-primaty-index";
import Typography from "components/particles/typography-particles";
import LogoSvg from "components/particles/logo-svg/logo-svg";
import Spacing from "components/particles/spacing-particles";
import React, { useContext, useEffect, useState } from "react";
import IconAndText from "components/particles/icon-and-text";
import { fxRegexValidateUppercase, fxRegexValidateSpecialCharacters, fxRegexValidateNumber} from "functions/regex-validate";
import { contextLogin } from "contexts/login-context";


export default function PasswordNew() {
  const [confirmState, setConfirmState] = useState<boolean>(true);
  const [newPassword, setNewPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");

  const contextoLogin = useContext(contextLogin);

  const dadosLogin = contextoLogin.funcoes?.dados;
  const fxLogin = contextoLogin.funcoes?.setState;

  function handleNewPassword() {
    if ((confirmPassword === newPassword) 
      && ( newPassword.length >=8)
      && ( fxRegexValidateUppercase(newPassword))
      && ( fxRegexValidateNumber(newPassword    )    )
      && ( fxRegexValidateSpecialCharacters(newPassword))){
        alert("Senha Confirmada");
        fxLogin?.setChangeFinalizedPassword(true);
    }else{
      alert("Senha Errada ou não preenche os requesitos necessários!");
    };
  };

  useEffect(()=>{
    if ((confirmPassword === newPassword) 
    && ( newPassword.length >=8)
    && ( fxRegexValidateUppercase(newPassword))
    && ( fxRegexValidateNumber(newPassword))
    && ( fxRegexValidateSpecialCharacters(newPassword))){
      alert("Senha Confirmada");
      fxLogin?.setChangeFinalizedPassword(true);
    }
  },[confirmPassword, newPassword]);
 
  return (
    <>
        <LogoSvg/>
        <Spacing marginTop={"54px"}/>
        <Typography tag={'p'} size={'20px'} margin={"0px"} fontWeight={"700"}>{dadosLogin?.activeAccount? "Ativar minha conta":"Recuperar senha"}</Typography>
        <Spacing marginTop={"10px"}/>
        <Typography tag={'p'} size={'14px'} margin={"0px"} fontWeight={"400"}>Redefina abaixo a senha da conta.</Typography>
        <Spacing marginTop={"22px"}/>
        {confirmState && <Typography tag={'p'} size={'14px'} margin={"0px"} fontWeight={"400"}>Por segurança, a senha deve seguir os critérios abaixo:</Typography>}
        <Spacing marginTop={"12px"}/>
        {confirmState && <IconAndText 
            icon={true} 
            texto={true} 
            confirm={newPassword.length >=8 ? true : false}
            sizeIcon={"10px"} 
            margimComponents={"5px"} 
            sizeTexto={"10px"}
            margimTexto={"0px"} 
            fontWeightTexto={"400"} 
            writtenTexto={"Mínimo de 8 caracteres"}></IconAndText>}
        {confirmState && <IconAndText 
            icon={true} 
            texto={true} 
            confirm={fxRegexValidateUppercase(newPassword)}
            sizeIcon={"10px"} 
            margimComponents={"5px"} 
            sizeTexto={"10px"}
            margimTexto={"0px"} 
            fontWeightTexto={"400"} 
            writtenTexto={"Pelo menos uma letra maíscula"}></IconAndText>}
        {confirmState && <IconAndText 
            icon={true} 
            texto={true} 
            confirm={fxRegexValidateNumber(newPassword)}
            sizeIcon={"10px"} 
            margimComponents={"5px"} 
            sizeTexto={"10px"}
            margimTexto={"0px"} 
            fontWeightTexto={"400"} 
            writtenTexto={"Pelo menos um número"}></IconAndText>}
        {confirmState && <IconAndText 
            icon={true} 
            texto={true} 
            confirm={fxRegexValidateSpecialCharacters(newPassword)}
            sizeIcon={"10px"} 
            margimComponents={"5px"} 
            sizeTexto={"10px"}
            margimTexto={"0px"} 
            fontWeightTexto={"400"} 
            writtenTexto={`Pelo menos uma caractere especial (Ex:!@#$%"&*)`}></IconAndText>}
        <InputContainer setInput={setNewPassword} placeholder={"Digite a sua senha"} labelName={"Senha"} password={true} elementFocus={true}/>
        <Spacing marginTop={"-20px"}/>
        <InputContainer setInput={setConfirmPassword} placeholder={"Digite a sua senha"} labelName={"Confirma senha"} password={true}/>
        <ButtonParticle light text={'CONFIRMAR'} onClick={()=>handleNewPassword()}/>
        <Spacing marginTop={"32px"}/>
    </>
  );
};