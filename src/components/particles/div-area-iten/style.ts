import styled from "styled-components";

type areaTitleType = "Header" | "Menu" | "Aside" | "Footer" | "Usuario" | "Defaut";
type alignTextType = "left" | "center" | "right" ;
type displayType = "grid" | "block" ;
type typeBorderType = "solid" ;

export type StyledDivAreaItenProps = {
    areaTitle: areaTitleType;
    colorBackground?: string;
    colorBorder?: string;
    sizeBorder?: string;
    typeBorder?: typeBorderType;
    radiusBorder?: string;
    paddingLeft?: string;
    paddingRight?: string;
    paddingTop?: string;
    paddingBottom?: string;
    alignText?: alignTextType;
    display?: displayType;
    heightMinDefault?: string;
}

const propsDefault:StyledDivAreaItenProps = {
    areaTitle: "Defaut",
    colorBackground: "red",
    colorBorder: "green",
    sizeBorder: "1px",
    typeBorder: "solid",
    radiusBorder: "15px",
    paddingLeft: "0px",
    paddingRight: "0px",
    paddingTop: "0px",
    paddingBottom: "0px",
    alignText: "center",
    display: "block",
    heightMinDefault: "90vh",
}

export const StyledDivAreaIten = styled.div<StyledDivAreaItenProps>`

    grid-area: ${({areaTitle}) => areaTitle ? areaTitle : propsDefault.areaTitle};
    background-color:  ${({colorBackground}) => colorBackground ? colorBackground : propsDefault.colorBackground};
    border: ${({sizeBorder}) => sizeBorder ? sizeBorder : propsDefault.sizeBorder} ${({ typeBorder }) => typeBorder ? typeBorder : propsDefault.typeBorder} ${({ colorBorder }) => colorBorder ? colorBorder : propsDefault.colorBorder};
    border-radius: ${({ radiusBorder }) => radiusBorder ? radiusBorder : propsDefault.radiusBorder};
    text-align: ${({ alignText }) => alignText ? alignText : propsDefault.alignText};
    display: ${({ display }) => display ? display : propsDefault.display};
    min-height:  ${({ heightMinDefault }) => heightMinDefault ? heightMinDefault : propsDefault.heightMinDefault};
    padding-bottom: ${({ paddingBottom }) => paddingBottom ? paddingBottom : propsDefault.paddingBottom};
    padding-top: ${({ paddingTop }) => paddingTop ? paddingTop : propsDefault.paddingTop};
    padding-left: ${({ paddingLeft }) => paddingLeft ? paddingLeft : propsDefault.paddingLeft};
    padding-right: ${({ paddingRight }) => paddingRight ? paddingRight : propsDefault.paddingRight};
    
    position: relative;
    `;