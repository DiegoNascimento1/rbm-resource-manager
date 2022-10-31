import InputContainer from "components/atoms/input-container";
import ButtonParticle from "components/particles/button-primary/button-primaty-index";
import LogoParticles from "components/particles/logo-particles/logo-index";
import Typography from "components/particles/typography-particles";
import * as Styled from "./login-container-style";
import LogoSvg from "components/particles/logo-svg/logo-svg";
import Spacing from "../../particles/spacing-particles/index";
import LoginChecked from "../login-checked-link";

export default function LoginContainer() {
  return (
    <Styled.LoginContainer>
      <LogoSvg/>
      <Spacing marginTop={"54px"}/>
      <Typography tag={'p'} size={'20px'} margin={"0px"} fontWeight={"700"}>Entrar na minha conta</Typography>
      <Spacing marginTop={"10px"}/>
      <Typography tag={'p'} size={'14px'} margin={"0px"} fontWeight={"400"}>Acesse sua conta abaixo =)</Typography>
      <Spacing marginTop={"32px"}/>
      <InputContainer placeholder={"Digite seu e-mail"} labelName={"E-mail"} password={false}/>
      <InputContainer placeholder={"Digite sua senha"} labelName={"Senha"} password={true}/>
      <LoginChecked textoLabel={"Salvar login"} textoLink={"Esqueci a senha"} textoHref={"https://www.google.com.br/"}/>
      <ButtonParticle text={"ENTRAR"}/>
      <Spacing marginTop={"32px"}/>
      <Typography tag={'p'} size={'14px'} margin={"0px"} decoration={'underline'} fontWeight={"400"}>Primeiro acesso? <a href="#" style={{fontWeight:"600",color:"black"}}>Ative sua conta.</a></Typography>
      <Spacing marginTop={"32px"}/>
    </Styled.LoginContainer>
  );
}