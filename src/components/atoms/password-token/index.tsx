import ButtonParticle from "components/particles/button-primary/button-primaty-index";
import Typography from "components/particles/typography-particles";
import LogoSvg from "components/particles/logo-svg/logo-svg";
import Spacing from "../../particles/spacing-particles/index";
import { StyledDivContainer } from "components/particles/input-token/style";
import InputToken from "components/particles/input-token";
import { useEffect, useState } from "react";

type PropsPasswordToken= {
  newPassword: boolean;
  setNewPassword: React.Dispatch<React.SetStateAction<boolean>>;
  activate: true | false;
}

export default function PasswordToken(props:PropsPasswordToken) {

  const [confirmaToken, setConfirmaToken]= useState<boolean>(false);

   function handleRecoverPasswordToken() {
    !confirmaToken && alert("Erro no token");
    confirmaToken && alert("Ativado Recuperar Senha por Token");
    confirmaToken && props.setNewPassword(!props.newPassword);
  };
  useEffect(() => {
    confirmaToken && alert("Ativado Recuperar Senha por Token");
    confirmaToken && props.setNewPassword(!props.newPassword);
  }, [confirmaToken]);
  
  //falta fazer a funcão para reenviar código
  function handleResendCode() {
    alert("Reenviar Código")
  };
 
  return (
    <>
          <LogoSvg/>
          <Spacing marginTop={"54px"}/>
          <Typography tag={'p'} size={'20px'} margin={"0px"} fontWeight={"700"}>{props.activate? "Ativar minha conta":"Recuperar senha"}</Typography>
          <Spacing marginTop={"10px"}/>
          <Typography tag={'p'} size={'14px'} margin={"0px"} fontWeight={"400"}>Insira abaixo o código enviado para o e-mail informado</Typography>
          <Spacing marginTop={"32px"}/>
          <StyledDivContainer>
            <Typography tag={'p'} size={'14px'} margin={"0px"} fontWeight={"500"} >Código</Typography>
          </StyledDivContainer>
          <Spacing marginTop={"4px"}/>
          <InputToken confirmToken={setConfirmaToken}/>
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