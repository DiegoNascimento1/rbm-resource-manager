import InputContainer from "components/atoms/input-container";
import LogoParticles from "components/particles/logo-particles/logo-index";
import * as Styled from "./login-molecule-style";

export default function LoginMolecule() {
  return (
    <Styled.LoginContainer>
      <LogoParticles />
      <InputContainer labelName={"E-mail"} password={false}/>
      <InputContainer labelName={"Senha"} password={true}/>
    </Styled.LoginContainer>
  );
}