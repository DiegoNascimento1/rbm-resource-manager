import { RESPONSIVE_SCREEN } from "contants/responsive-screen";
import styled from "styled-components";










// export const StyledDivContainerGridArea = styled.div`
//     display: grid;
//     grid-template-rows: 76px auto;
//     grid-template-columns: 296px auto auto auto;
//     grid-template-areas: "Menu Header Header Header"
//                         "Menu Aside Aside Aside";

//     @media screen and (max-width: ${RESPONSIVE_SCREEN.hd}) {
//         grid-template-columns: 1fr 3fr 3fr 3fr;
//         grid-template-rows: 10vh auto;
//     }

//     @media screen and (max-width: ${RESPONSIVE_SCREEN.telasGrande}) {
//         grid-template-columns: 1fr 3fr 3fr 3fr;
//         grid-template-rows: 10vh auto;
//     }

//     @media screen and (max-width: ${RESPONSIVE_SCREEN.computer}) {
//         grid-template-columns: 1fr 3fr 3fr;
//         grid-template-areas:    "Menu Header Header "
//                                 "Menu Aside Aside";
//         grid-template-rows: 10vh auto;
//     }

//     @media screen and (max-width: ${RESPONSIVE_SCREEN.tablet}) {
//         grid-template-columns: 1fr 3fr;
//         grid-template-areas:    "Menu Header "
//                                 "Menu Aside ";
//         grid-template-rows: 88px auto;
//     }

//     @media screen and (max-width: ${RESPONSIVE_SCREEN.cell}) {
//         grid-template-columns: 1fr ;
//         grid-template-areas: "Header "
//                             "Menu"
//                             "Aside";
//         grid-template-rows: 10vh auto auto;
//     }
// `;






// //  **********

// export const DivContainer = styled.div`
//     margin-left: 100px;
// `;

// export const DivContainerEsp = styled.div`
//     width: 100vw;
//     /* height:100vh; */
//     background-color: beige;
// `;

// export const DivHeader = styled.div`
//     background-color:red;
//     height:10vh;
// `;

// export const DivMenuMaior = styled.div`
//     width: 20vw;
//     /* height:80vh; */
//     background-color: blue;
// `;

// export const DivConteudoMeio = styled.div`
//     width: 80vw;
//     /* height:80vh; */
//     background-color: black;
// `;

// export const DivFooter = styled.div`
//     background-color:green;
//     height:20vh;
// `;

// export const DivConteudo = styled.div`
//     background-color:yellow;
//     display: flex;
// `;

// //  ********** StyledDivContainerGridArea
// //  grid

// export const DivContainerGrid = styled.div`
// padding: 10px;
//     background-color: red;
//     display: grid;
//     grid-template-columns: 1fr 1fr 1fr;
//     /* grid-template-rows: repeat(4, 100px) ; */
//     grid-auto-rows: 200px;

//     @media screen and (max-width: ${RESPONSIVE_SCREEN.tablet}) {
//         grid-template-columns: 1fr 1fr;
//         background-color: blue;
        
//     }

//     @media screen and (max-width: ${RESPONSIVE_SCREEN.cell}) {
//             grid-template-columns: 1fr;
//             background-color: green;
//     }
// `;

// export const DivItemGrid = styled.div`
//     background-color: #FFFFFF;
//     border: 1px solid blue;
//     padding: 10px;
//     border-radius: 12px;
//     gap: 10px;
//     margin: 10px;
//     min-height: 100px;
//     max-height: 200px;
//     /* min-width: 200px; */
    

//     :hover{
//         background-color: blue;
//         color: white;
//         cursor: pointer;
//         border: 1px solid yellow;
//     }

    
// `;

// //  **********

// export const StyledDivGridArea = styled.div`
//     border: 1px solid black;
//     background-color: blueviolet;
//     text-align: center;
  
// `;

// export const StyledDivGridAreaHeader = styled.div`
//     border: 1px solid black;
//     background-color: yellow;
//     text-align: center;
//     grid-area: Header;

//     ::after{
//         content: "  >> Header"
//     }

    
//     @media screen and (max-width: ${RESPONSIVE_SCREEN.tablet}) {
//         ::after{
//         content: "  >> Header Tablet"
//     }
//     }

//     @media screen and (max-width: ${RESPONSIVE_SCREEN.cell}) {
//         ::after{
//         content: "  >> Header Cell"
//     }
//     }
// `;

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