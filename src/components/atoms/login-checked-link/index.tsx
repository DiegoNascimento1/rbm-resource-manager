import { StyledDivContainer, StyledDivSubContainer, StyledDivSubContainerEnd } from "./style";
import Typography from "components/particles/typography-particles";
import InputChecked from "components/particles/input-checked";
import { useContext } from "react";
import { contextLogin } from "contexts/login-context";

type PropsLoginChecked = {
    textoLabel:string;
    textoLink:string;
};

export default function LoginChecked(props:PropsLoginChecked) {

  const contextoLogin = useContext(contextLogin);

  const dadosLogin = contextoLogin.funcoes?.dados;
  const fxLogin = contextoLogin.funcoes?.setState;

  function handleRecover() {
    alert("esqueci a senha")
    fxLogin?.setChangeRecoverPassword(true);
  }
  return (
    <StyledDivContainer>

        <StyledDivSubContainer>
          <InputChecked textoLabel={props.textoLabel}/>          
        </StyledDivSubContainer>

        <StyledDivSubContainerEnd onClick={()=>handleRecover()}>
          <Typography tag={'p'} size={'14px'} margin={"0px"} decoration={'underline'} fontWeight={"400"} cursorHover={"pointer"}>
              {props.textoLink}
          </Typography>
        </StyledDivSubContainerEnd>
        
    </StyledDivContainer>
  );
}