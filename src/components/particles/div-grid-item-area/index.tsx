import { ReactNode } from "react";
import { StyledDivGridItenArea } from "./style"

type DivGridItenAreaProps = {
    tituloArea: "Header" | "Menu" | "Aside" | "Footer" | "Usuario" | "Defaut";
	children?: ReactNode;
    colorBackground?: string;
    colorBorder?: string;
    sizeBorder?: string;
    typeBorder?: "solid";
    radiusBorder?: string;
    paddingTotal?: string;
    alignText?: "center";
    display?: "grid" | "block";
    medidas?: string;
    heightMinDefault?: string;
}

export default function DivGridItenArea (props: DivGridItenAreaProps){

    return <>
        <StyledDivGridItenArea {...props}>
            {props.children}
        </StyledDivGridItenArea>
    </>
};
