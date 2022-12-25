import { ReactNode } from "react";
import { StyledDivAreaIten, StyledDivAreaItenProps } from "./style"

type DivGridItenAreaProps = {
    objAreaIten: StyledDivAreaItenProps;
	children?: ReactNode;
};

export default function DivAreaIten ({ objAreaIten, children }: DivGridItenAreaProps){ 

    return <>
        <StyledDivAreaIten 
            areaTitle={objAreaIten.areaTitle}
            colorBackground= {objAreaIten.colorBackground}
            colorBorder= {objAreaIten.colorBorder}
            sizeBorder= {objAreaIten.sizeBorder}
            typeBorder= {objAreaIten.typeBorder}
            radiusBorder= {objAreaIten.radiusBorder}
            alignText= {objAreaIten.alignText}
            display= {objAreaIten.display}
            heightMinDefault= {objAreaIten.heightMinDefault}
            paddingLeft={objAreaIten.paddingLeft}
            paddingRight={objAreaIten.paddingRight}
            paddingTop={objAreaIten.paddingTop}
            paddingBottom={objAreaIten.paddingBottom} 
            
            >
            
            {children}
        </StyledDivAreaIten>
    </>
};