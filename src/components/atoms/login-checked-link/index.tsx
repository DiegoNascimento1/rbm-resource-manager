import { StyledDivContainer, StyledDivSubContainer } from "./style";
import Typography from "components/particles/typography-particles";
import InputChecked from "components/particles/input-checked";
import LinkA from "components/particles/link-a";

type propsLoginChecked = {
    textoLabel:string;
    textoLink:string;
    textoHref:string;
};

export default function LoginChecked(props:propsLoginChecked) {
  return (
    <StyledDivContainer>

        <StyledDivSubContainer>
          <InputChecked textoLabel={props.textoLabel}/>          
        </StyledDivSubContainer>

        <StyledDivSubContainer>
          <Typography tag={'p'} size={'14px'} margin={"0px"} decoration={'underline'} fontWeight={"400"}>
              <LinkA texto={props.textoLink} href={props.textoHref}></LinkA>
          </Typography>
        </StyledDivSubContainer>
        
    </StyledDivContainer>
  );
}