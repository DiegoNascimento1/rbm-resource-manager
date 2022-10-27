import InputContainer from "components/atoms/input-container";
import ButtonParticle from "components/particles/button-primary/button-primaty-index";
import LogoParticles from "components/particles/logo-particles/logo-index";
import Typography from "components/particles/typography-particles";
import * as Styled from "./login-container-style";

export default function LoginContainer() {
  return (
    <Styled.LoginContainer>
      <LogoParticles width={"122px"} height={"35.28px"}/>
      <Typography tag={'p'} size={'20px'} fontWeight={"700"}>Entrar na minha conta</Typography>
      <Typography tag={'p'} size={'14px'} fontWeight={"400"}>Acesse sua conta abaixo =)</Typography>
      <InputContainer placeholder={"Digite seu e-mail"} labelName={"E-mail"} password={false}/>
      <InputContainer placeholder={"Digite sua senha"} labelName={"Senha"} password={true}/>
      <ButtonParticle text={"ENTRAR"}/>
      <Typography tag={'p'} size={'14px'} decoration={'underline'} fontWeight={"400"}>Primeiro acesso? <a href="#" style={{fontWeight:"600",color:"black"}}>Ative sua conta.</a></Typography>
    </Styled.LoginContainer>
  );
}