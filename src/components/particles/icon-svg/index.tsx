import { StyledImage } from "./style";
import SvgGoBack from "../../../assets/svgs/goBack.svg";

type IconSvgProps = {
    src: string;
    width?: string;
    rotate?: number;
};

const widthDefault = "18px";

export function IconSvg(props: IconSvgProps) {
    return <>
        <StyledImage 
                        src={props.src} 
                        width={props.width ? props.width : widthDefault}
                        rotate={props.rotate ? props.rotate + "deg" : "0deg"}/>

    </>
}