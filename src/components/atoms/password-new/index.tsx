import InputContainer from "components/atoms/input-container";
import ButtonParticle from "components/particles/button-primary/button-primaty-index";
import Typography from "components/particles/typography-particles";
import LogoSvg from "components/particles/logo-svg/logo-svg";
import Spacing from "components/particles/spacing-particles";
import React, { useContext, useEffect, useRef, useState } from "react";
import { fxRegexValidateUppercase, fxRegexValidateSpecialCharacters, fxRegexValidateNumber} from "functions/regex-validate";
import { contextLogin } from "contexts/login-context";
import { RequestCriarSenhaType, requestCriarSenha } from "services/api/request-criar-senha";
import IconAndTextNew from "components/particles/icon-and-text-new";
import IconAndText from "components/particles/icon-and-text";

type ErroStatus = {
  inputUm:"erro" | null ;
  inputDois:"erro" | null ;
};

type ErroStatusType =  "erro" | null;

type InputSelectNumber = 1 | 2 ;

type RefType = HTMLInputElement | null;

export default function PasswordNew() {

  const [newPassword, setNewPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");
  const [erroStatus, setErroStatus] =useState<ErroStatus>({
    inputUm:null,
    inputDois:null,
  });
  const [temporizador, setTemporizador] = useState<boolean>(false);

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
    //  confirmado so clritérios e pode enviar a nova senha
    fxRequestCriarSenha();
  };

  const fxResponsePositive = () => {
    setTemporizador(false);
    setErroStatus({ ...erroStatus, inputUm: null, inputDois: null});
    fxLogin?.setChangeFinalizedPassword(true);
  };

  const fxResponseError = () => {
    alert("Erro no envio da nova senha");  
    setTemporizador(false);
    setErroStatus({ ...erroStatus, inputUm: "erro", inputDois: "erro"});
  };

  const creatPassaword: RequestCriarSenhaType = {
    login: dadosLogin!.email,
    senha: newPassword,
  };

  async function fxRequestCriarSenha() {
    setTemporizador(true);
    try {
        console.log("entrou no pedir ativação")         //  so para verificar
        await requestCriarSenha( creatPassaword );
        console.log("saiu no pedir ativação");          //  so para verificar
        fxResponsePositive();
    } catch {
        fxResponseError();
    }
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
        <Typography tag={'p'} size={'14px'} margin={"0px"} fontWeight={"400"}>Por segurança, a senha deve seguir os critérios abaixo:</Typography>
        <Spacing marginTop={"12px"}/>
        
        <IconAndTextNew 
            typeComponent="CONFIRM + ICON + TEXTO" 
            stateConfirm={newPassword.length >=8 ? true : false} 
            textWritten={`Mínimo de 8 caracteres`}
            textSize={"10px"}
            gapBetweenComponents={`5px`}
            alignText={"Left"}
            iconSize={`10px`}
            fontWeightText={`400`}/>

        <IconAndTextNew 
            typeComponent="CONFIRM + ICON + TEXTO" 
            stateConfirm={fxRegexValidateUppercase(newPassword)} 
            textWritten={`Pelo menos uma letra maíscula`}
            textSize={"10px"}
            gapBetweenComponents={`5px`}
            alignText={"Left"}
            iconSize={`10px`}
            fontWeightText={`400`}/>
        
        <IconAndTextNew 
            typeComponent="CONFIRM + ICON + TEXTO" 
            stateConfirm={fxRegexValidateNumber(newPassword)} 
            textWritten={`Pelo menos um número`}
            textSize={"10px"}
            gapBetweenComponents={`5px`}
            alignText={"Left"}
            iconSize={`10px`}
            fontWeightText={`400`}/>
        
        <IconAndTextNew 
            typeComponent="CONFIRM + ICON + TEXTO" 
            stateConfirm={fxRegexValidateSpecialCharacters(newPassword)} 
            textWritten={`Pelo menos uma caractere especial (Ex:!@#$%"&*)`}
            textSize={"10px"}
            gapBetweenComponents={`5px`}
            alignText={"Left"}
            iconSize={`10px`}
            fontWeightText={`400`}/>   

        <InputContainer ref={elementNewPassword} setInput={setNewPassword} placeholder={"Digite a sua senha"} labelName={"Senha"} password={true} statusError={erroStatus.inputUm} value={newPassword}/>
        {temporizador && <Spacing marginTop={"10px"}/>}
        {temporizador && <Typography tag={'p'} size={'14px'} margin={"0px"} fontWeight={"600"}>Aguarde....</Typography>}
        {temporizador && <Spacing marginTop={"32px"}/>}
        <Spacing marginTop={"-20px"}/>
        <InputContainer ref={elementConfirmPassword} setInput={setConfirmPassword} placeholder={"Digite a sua senha"} labelName={"Confirma senha"} password={true} statusError={erroStatus.inputDois} value={confirmPassword}/>
        <ButtonParticle light text={'CONFIRMAR'} onClick={()=>handleNewPassword()}/>
        <Spacing marginTop={"32px"}/>
    </>
  );
};