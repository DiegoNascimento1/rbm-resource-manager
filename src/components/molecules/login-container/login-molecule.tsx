import InputContainer from "components/atoms/input-container";
import ButtonParticle from "components/particles/button-primary/button-primaty-index";
import LogoParticles from "components/particles/logo-particles/logo-index";
import Typography from "components/particles/typography-particles";
import * as Styled from "./login-molecule-style";

export default function LoginMolecule() {
  return (
    <Styled.LoginContainer>
      <LogoParticles width={"122px"} height={"35.28px"}/>
      <Typography tag={'p'} fontWeight={"700"}>Entrar na minha conta</Typography>
      <Typography tag={'p'} fontWeight={"400"}>Acesse sua conta abaixo =)</Typography>
      <InputContainer labelName={"E-mail"} password={false}/>
      <InputContainer labelName={"Senha"} password={true}/>
      <ButtonParticle text={"ENTRAR"}/>
    </Styled.LoginContainer>
  );
}