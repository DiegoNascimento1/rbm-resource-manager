import LoginContainer from "components/molecules/login-container/login-container";
import { useTheme } from "styled-components";
import * as Styled from "./main-container-style";

export default function MainContainer() {
  const theme = useTheme()
  return (
    <Styled.MainContainer>
      <LoginContainer/>
    </Styled.MainContainer>
  );
}