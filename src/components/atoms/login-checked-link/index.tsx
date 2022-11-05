import { StyledDivContainer, StyledDivSubContainer } from "./style";
import Typography from "components/particles/typography-particles";
import InputChecked from "components/particles/input-checked";
// import LinkA from "components/particles/link-a";
import {THEME} from "contants";

type propsLoginChecked = {
    textoLabel:string;
    textoLink:string;
    setRecoverPassaword: React.Dispatch<React.SetStateAction<boolean>>;
    RecoverPassaword:boolean;
    // textoHref:string;
};

export default function LoginChecked(props:propsLoginChecked) {
  function fxReviewPassaword(){
    alert("esqueci a senha")
    props.setRecoverPassaword(!props.RecoverPassaword);
  }
  return (
    <StyledDivContainer>

        <StyledDivSubContainer>
          <InputChecked textoLabel={props.textoLabel}/>          
        </StyledDivSubContainer>

        <StyledDivSubContainer onClick={()=> fxReviewPassaword()}>
          <Typography 
              tag={'p'} 
              size={'14px'} 
              margin={"0px"} 
              decoration={'underline'} 
              fontWeight={"500"}
              color={THEME.light.colors.secondary3}
              cursorHover={'pointer'}
          >
              {props.textoLink} 
              {/* <LinkA 
                texto={props.textoLink} 
                href={props.textoHref} 
                color={THEME.light.colors.secondary3}
              ></LinkA> */}
          </Typography>
        </StyledDivSubContainer>
        
    </StyledDivContainer>
  );
}