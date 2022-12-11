import { useEffect, useState } from "react";
import { StyledDivContainer, StyledDivSubContainer } from "./style";
import useTheme from "hooks/useTheme";
import Typography from "components/particles/typography-particles";
import SvgErrorOrange from "../../../assets/svgs/erro-orange.svg"
import SvgSucess from "../../../assets/svgs/sucess.svg";
import SvgInfo from "../../../assets/svgs/info.svg";

type PropsIconAndTextNewType ={
    typeComponent: "CONFIRM + ICON + TEXTO" | "ICON + TEXTO" | "ICON SEM TEXTO" | "TEXTO SEM ICON";
    iconName?: "SvgErrorOrange" | "SvgSucess" | "SvgInfo" ;
    iconSize?: string;
    textSize?: string; 
    margimText?: string;
    margimLeftContainer?: string;
    fontWeightText?: string; 
    textWritten?: string;
    color?: string;
    stateConfirm?: boolean;
    gapBetweenComponents?: string;
    alignText?: "Left"| "Center";
};
type OptionsType = {
    icon: boolean;
    texto: boolean;
    confirm: boolean;
};

export default function IconAndTextNew(props: PropsIconAndTextNewType) {

    const {theme} = useTheme();

    const [options, setOptions] = useState<OptionsType>({
        icon: false,
        texto: false,
        confirm: false,
    });

    const colorSucessTexto = "#32A54A";
    const colorErrorTexto = "#D72700";
    const colorTheme = theme.colors.secondary3;
    
    const SvgDefault = SvgInfo;
    const FontWeightDefault = "400px";
    const MarginDefault = "0px";
    const SizeDefault = "10px";
    const GapBetweenComponentsDefault = "0px";
    const MargimLeftContainerDefault = "0px";
    const alignTextDefault = "Center";

    useEffect(()=> {
        switch(props.typeComponent){

            case "CONFIRM + ICON + TEXTO":
                setOptions({ ...options, icon: true, texto: true, confirm: true});
                break;
    
            case "ICON + TEXTO":
                setOptions({ ...options, icon: true, texto: true, confirm: false});
                break;
            
            case "ICON SEM TEXTO":
                setOptions({ ...options, icon: true, texto: false, confirm: false});
                break;
    
            case "TEXTO SEM ICON":
                setOptions({ ...options, icon: false, texto: true, confirm: false});
                break;
        };
        console.log(props);
        console.log(options);
    },[props]); 
    
    const fxSelectIcon = () => {
        switch(props.iconName){
        case "SvgErrorOrange":
            return SvgErrorOrange
        
        case "SvgSucess":
            return SvgSucess

        case "SvgInfo":
            return SvgInfo

        default:
            return SvgDefault

        }
    };

  return (
        <StyledDivContainer>
            <StyledDivSubContainer
                marginLeft={props.margimLeftContainer ? props.margimLeftContainer : MargimLeftContainerDefault} 
                gap={props.gapBetweenComponents ? props.gapBetweenComponents : GapBetweenComponentsDefault}
                alignText={props.alignText ? props.alignText : alignTextDefault}>

            {options.confirm && options.icon && 
                        <img 
                        src={props.stateConfirm?SvgSucess:SvgErrorOrange} 
                        width={props.iconSize ? props.iconSize : SizeDefault}/>
            }

            {options.confirm && options.texto && 
                    <Typography 
                        tag={"p"} 
                        size={props.textSize ? props.textSize : SizeDefault} 
                        margin={props.margimText ? props.margimText : MarginDefault} 
                        fontWeight={props.fontWeightText ? props.fontWeightText : FontWeightDefault} 
                        color={props.stateConfirm ? colorSucessTexto : colorErrorTexto}>{props.textWritten}</Typography>
            }

            {!options.confirm && options.icon && 
                        <img 
                            src={ props.iconName ? fxSelectIcon() : SvgDefault} 
                            width={props.iconSize ? props.iconSize : SizeDefault}/>
            }

            {!options.confirm && options.texto && 
                    <Typography 
                        tag={"p"} 
                        size={props.textSize ? props.textSize : SizeDefault} 
                        margin={props.margimText ? props.margimText : MarginDefault} 
                        fontWeight={props.fontWeightText ? props.fontWeightText : FontWeightDefault} 
                        color={props.color ? props.color : colorTheme}>{props.textWritten}</Typography>
            }
            </StyledDivSubContainer>

        </StyledDivContainer>

  );
};