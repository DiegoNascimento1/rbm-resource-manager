import Typography from "components/particles/typography-particles";
import SvgErrorOrange from "../../../assets/svgs/erro-orange.svg"
import SvgSucess from "../../../assets/svgs/sucess.svg";
import { StyledDivContainer, StyledDivSubContainer } from "./style";

type PropsIconAndTextType={
    icon?: boolean;
    texto?: boolean;
    confirm: boolean;
    sizeIcon?: string;
    margimComponents?: string; 
    sizeTexto?: string; 
    margimTexto?: string; 
    fontWeightTexto?: string; 
    writtenTexto: string
    // children: string[]
};

export default function IconAndText(props: PropsIconAndTextType) {

    const colorSucessTexto = "#32A54A";
    const colorErrorTexto = "#D72700";
    
  return (

        <StyledDivContainer>
            {props.icon && <StyledDivSubContainer>
                <img src={props.confirm?SvgSucess:SvgErrorOrange} width={props.sizeIcon}/>
            </StyledDivSubContainer>}
            {props.texto && <StyledDivSubContainer marginLeft={props.margimComponents}>
                <Typography tag={"p"} size={props.sizeTexto} margin={props.margimTexto} fontWeight={props.fontWeightTexto} color={props.confirm?colorSucessTexto:colorErrorTexto}>{props.writtenTexto}</Typography>
            </StyledDivSubContainer>}
        </StyledDivContainer>

  );
};