import InputContainer from "components/atoms/input-container";
import ButtonParticle from "components/particles/button-primary/button-primaty-index";
import Typography from "components/particles/typography-particles";
import LogoSvg from "components/particles/logo-svg/logo-svg";
import Spacing from "components/particles/spacing-particles";
import React, { useContext, useEffect, useRef, useState } from "react";
import IconAndText from "components/particles/icon-and-text";
import { fxRegexValidateUppercase, fxRegexValidateSpecialCharacters, fxRegexValidateNumber} from "functions/regex-validate";
import { contextLogin } from "contexts/login-context";

type ErroStatus = {
  inputUm:"erro" | null ;
  inputDois:"erro" | null ;
};

type ErroStatusType =  "erro" | null;

type InputSelectNumber = 1 | 2 ;

type RefType = HTMLInputElement | null;

export default function PasswordNew() {
  const [confirmState, setConfirmState] = useState<boolean>(true);  // estou pensando em tirar
  const [newPassword, setNewPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");
  const [erroStatus, setErroStatus] =useState<ErroStatus>({
    inputUm:null,
    inputDois:null,
  });

  const contextoLogin = useContext(contextLogin);

  const elementNewPassword = useRef<RefType>(null);
  const elementConfirmPassword = useRef<RefType>(null);

  const dadosLogin = contextoLogin.funcoes?.dados;
  const fxLogin = contextoLogin.funcoes?.setState;

  const fxErrorInput = (error: ErroStatusType, inputSelect: InputSelectNumber)=>{
    switch(inputSelect) {
      case 1:
        setErroStatus({...erroStatus, inputUm: error});
        break;
      case 2:
        setErroStatus({...erroStatus, inputDois: error});
        break;
      default:
        setErroStatus({inputUm: null, inputDois: null});
    };
 };

  const validatedPassword = ( newPassword.length >=8)
          && ( fxRegexValidateUppercase(newPassword))
          && ( fxRegexValidateNumber(newPassword))
          && ( fxRegexValidateSpecialCharacters(newPassword))
    ;
  
  const fxErroValidarPassword = ()=>{
    if (!validatedPassword) { 
      setNewPassword("");
      setConfirmPassword("");
      fxErrorInput("erro", 1);
      alert("Senha não preenche os requesitos necessários!");
    }
  };

  const fxErroConfirmarPassword = ()=>{
      fxErrorInput(null, 1);
      fxErrorInput("erro", 2);
      alert("Senha diferente da confirmação!");
  };

  const fxExecutaNewPassword = () =>{
    fxErrorInput(null, 1);
    fxErrorInput(null, 2);
    alert("Senha Confirmada");
    fxLogin?.setChangeFinalizedPassword(true);
  };

  function handleNewPassword() {
    fxErroValidarPassword();
    validatedPassword && !(confirmPassword === newPassword) && fxErroConfirmarPassword();
    validatedPassword && (confirmPassword === newPassword) && fxExecutaNewPassword();
  };

  useEffect(()=>{
     newPassword.length>1 && fxErrorInput(null,1);
     newPassword.length === 0 && fxErrorInput(null,2);
  },[newPassword]);
  
  useEffect(()=>{
    confirmPassword.length>1 && fxErrorInput(null,2);
 },[confirmPassword]);

 useEffect (()=>{
  elementNewPassword.current?.focus();
 },[])

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
        <InputContainer ref={elementNewPassword} setInput={setNewPassword} placeholder={"Digite a sua senha"} labelName={"Senha"} password={true} statusError={erroStatus.inputUm} value={newPassword}/>
        <Spacing marginTop={"-20px"}/>
        <InputContainer ref={elementConfirmPassword} setInput={setConfirmPassword} placeholder={"Digite a sua senha"} labelName={"Confirma senha"} password={true} statusError={erroStatus.inputDois} value={confirmPassword}/>
        <ButtonParticle light text={'CONFIRMAR'} onClick={()=>handleNewPassword()}/>
        <Spacing marginTop={"32px"}/>
    </>
  );
};