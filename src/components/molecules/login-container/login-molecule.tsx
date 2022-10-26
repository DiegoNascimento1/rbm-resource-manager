import InputContainer from "components/atoms/input-container";
import * as Styled from "./login-molecule-style";

export default function LoginMolecule() {
  return (
    <Styled.LoginContainer>
      <InputContainer labelName={"E-mail"} password={false}/>
      <InputContainer labelName={"Senha"} password={true}/>
    </Styled.LoginContainer>
  );
}