import { StyledLinkA } from "./style";
import {THEME} from "contants";

type propsLinkA = {
  texto:string;
  href: string;
  color?:string;
};

export default function LinkA(props: propsLinkA) {

    return (
        <StyledLinkA 
            href={props.href} 
            target={"_blank"}
            // color={props.color}
			      // size={props.size}
			      // fontWeight={props.fontWeight}
            //color={THEME.light.colors.secondary3}
            color={props.color}
        >
            {props.texto}
        </StyledLinkA >
    );
  };