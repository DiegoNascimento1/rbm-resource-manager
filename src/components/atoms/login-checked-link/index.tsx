import { StyledDivContainer, StyledDivSubContainer, StyledDivSubContainerEnd } from "./style";
import Typography from "components/particles/typography-particles";
import InputChecked from "components/particles/input-checked";

type PropsLoginChecked = {
    textoLabel:string;
    textoLink:string;
    RecoverPassaword: boolean;
    setRecoverPassword: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function LoginChecked(props:PropsLoginChecked) {
  function handleRecover() {
    alert("esqueci a senha")
    props.setRecoverPassword(!props.RecoverPassaword);
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