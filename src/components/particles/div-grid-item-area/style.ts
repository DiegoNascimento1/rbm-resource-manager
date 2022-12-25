import { RESPONSIVE_SCREEN } from "contants/responsive-screen";
import styled from "styled-components";

type StyledDivGridItenAreaProps = {
    tituloArea: "Header" | "Menu" | "Aside" | "Footer" | "Usuario" | "Defaut";
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

const propsDefault = {
    tituloAreaDefaut: "Defaut",
    colorBackgroundDefaut: "red",
    colorBorderDefaut: "green",
    sizeBorderDefaut: "1px",
    typeBorderDefaut: "solid",
    radiusBorderDefaut: "15px",
    paddingTotalDefaut: "20px",
    alignTextDefaut: "center",
    displayDefaut: "block",
    heightMinDefault: "90vh",

}

export const StyledDivGridItenArea = styled.div<StyledDivGridItenAreaProps>`
    grid-area: ${(props) => props.tituloArea ? props.tituloArea : propsDefault.tituloAreaDefaut};
    background-color:  ${(props) => props.colorBackground ? props.colorBackground : propsDefault.colorBackgroundDefaut};
    border: ${(props) => props.sizeBorder ? props.sizeBorder : propsDefault.sizeBorderDefaut} ${(props) => props.typeBorder ? props.typeBorder : propsDefault.typeBorderDefaut} ${(props) => props.colorBorder ? props.colorBorder : propsDefault.colorBorderDefaut};
    border-radius: ${(props) => props.radiusBorder ? props.radiusBorder : propsDefault.radiusBorderDefaut};
    text-align: ${(props) => props.alignText ? props.alignText : propsDefault.alignTextDefaut};
    display: ${(props) => props.display ? props.display : propsDefault.displayDefaut};
    min-height:  ${(props) => props.heightMinDefault ? props.heightMinDefault : propsDefault.heightMinDefault};
    position: relative;

    
    /* height: auto; */
    /* grid-template-columns: 1fr 1fr 1fr 1fr;  */

    /* *********************************************** */
    /* verifico a troca do media query */
    /* *********************************************** */
    
    /* ::after{
        content: " >> Incial";
    }
    @media screen and (max-width: ${RESPONSIVE_SCREEN.hd}) {
        ::after{
            content: " >> HD";    }}

    @media screen and (max-width: ${RESPONSIVE_SCREEN.telasGrande}) {
        ::after{
            content: " >> Telas Grandes";
    }}

    @media screen and (max-width: ${RESPONSIVE_SCREEN.computer}) {
        ::after{
            content: " >> Computer";
    }}
    
    @media screen and (max-width: ${RESPONSIVE_SCREEN.tablet}) {
        ::after{
            content: " >> Tablet";
    }}

    @media screen and (max-width: ${RESPONSIVE_SCREEN.cell}) {
        ::after{
            content: " >> Cell";
    }} */
`

//  ********** copia de outro lugar


// export const StyledDivGridAreaMenu = styled.div`
//     border: 1px solid black;
//     background-color: coral;
//     text-align: center;
//     grid-area: Menu;
//     height: auto;
//     min-height: 80vh;
    
//     @media screen and (max-width: ${RESPONSIVE_SCREEN.tablet}) {
//        min-height: 80vh;
//     }

//     @media screen and (max-width: ${RESPONSIVE_SCREEN.cell}) {
//         min-height: 5vh;
//     }
//     ::after{
//         content: "  >> Menu"
//     }
// `;

// export const StyledDivGridAreaAside = styled.div`
//     border: 1px solid black;
//     background-color: aqua;
//     text-align: center;
//     grid-area: Aside;
//     display: grid;
//     grid-template-columns: 1fr 1fr 1fr 1fr; 

//     @media screen and (max-width: ${RESPONSIVE_SCREEN.computer}) {
//         grid-template-columns: 1fr 1fr 1fr;
//     }

//     @media screen and (max-width: ${RESPONSIVE_SCREEN.tablet}) {
//         grid-template-columns: 1fr 1fr;
//     }

//     @media screen and (max-width: ${RESPONSIVE_SCREEN.cell}) {
//         grid-template-columns: 1fr ;
//     }
// `;

// export const StyledDivGridAreaFooter = styled.div`
//     border: 1px solid black;
//     background-color: green;
//     text-align: center;
//     grid-area: Footer;

//     ::after{
//         content: "  >> Footer"
//     }
// `;

//  *************   original anterior

// export const StyledDivGridItenArea = styled.div<StyledDivGridItenAreaProps>`
//     border: 1px solid black;
//     background-color: yellow;
//     text-align: center;
//     grid-area: ${(props) => props.tituloArea};




//     ::after{
//         content: " >> ${(props) => props.tituloArea} >> Incial";
//     }
//     @media screen and (max-width: ${RESPONSIVE_SCREEN.hd}) {
//         ::after{
//             content: " >> ${(props) => props.tituloArea} >> HD";    }}

//     @media screen and (max-width: ${RESPONSIVE_SCREEN.telasGrande}) {
//         ::after{
//             content: " >> ${(props) => props.tituloArea} >> Telas Grandes";
//     }}

//     @media screen and (max-width: ${RESPONSIVE_SCREEN.computer}) {
//         ::after{
//             content: " >> ${(props) => props.tituloArea} >> Computer";
//     }}
    
//     @media screen and (max-width: ${RESPONSIVE_SCREEN.tablet}) {
//         ::after{
//             content: " >> ${(props) => props.tituloArea} >> Tablet";
//     }}

//     @media screen and (max-width: ${RESPONSIVE_SCREEN.cell}) {
//         ::after{
//             content: " >> ${(props) => props.tituloArea} >> Cell";
//     }}
// `