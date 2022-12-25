import { IconSvg } from "components/particles/icon-svg";
import SvgGoBack from "../../../assets/svgs/goBack.svg";
import { StyledDivGoBack } from "./style";

export function PasswordGoBack() {
    return <StyledDivGoBack>
                <IconSvg src={SvgGoBack} width={"18px"} rotate={180}/>
    </StyledDivGoBack>
};