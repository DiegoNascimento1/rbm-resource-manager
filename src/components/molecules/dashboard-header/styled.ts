import { RESPONSIVE_SCREEN } from "contants/responsive-screen";
import styled from "styled-components";
import GeraldoFerreira from "../../../assets/svgs/GeraldoFerreira.png";

export const StyledAreaContainer = styled.div`
    display: grid;
    grid-template-areas: "Header . . Usuario";
    grid-template-rows: auto; 
    min-height: 76px;
    height: 76px;               

    @media screen and (max-width: ${RESPONSIVE_SCREEN.hd}) {
        grid-template-columns: 1fr 1fr 1fr 1fr;
        grid-template-rows: auto ;
    }

    @media screen and (max-width: ${RESPONSIVE_SCREEN.telasGrande}) {
        grid-template-columns: 1fr 1fr 1fr 1fr;
        grid-template-rows: auto ;
    }

    @media screen and (max-width: ${RESPONSIVE_SCREEN.computer}) {
        grid-template-columns: 1fr 1fr 1fr;
        grid-template-areas:    "Header . Usuario";  
        grid-template-rows: auto ;
    }

    @media screen and (max-width: ${RESPONSIVE_SCREEN.tablet}) {
        grid-template-columns: 1fr 1fr;
        grid-template-areas:    "Header Usuario ";
        grid-template-rows: auto ;
    }

    @media screen and (max-width: ${RESPONSIVE_SCREEN.cell}) {
        grid-template-areas: "Header "
                            "Usuario";
        grid-template-rows:  1fr 1fr ;
        min-height: 128px;
        height: 128px;
    }
`;

export const StyleDivPhotoAndText = styled.div`
    background-color:transparent;
    display: inline-flex;
    width:179px;
    height:52px;
    margin:5px;
    align-items:center;
    justify-content: flex-end;
    align-content: center;
    border:0px solid green;
    border-radius:4px;
`;

export const StyleDivPhoto = styled.div`
    border: 0px solid olive;
    width:32px;
    height:32px;
    margin-right: 12px;
    background-image:url(${()=>GeraldoFerreira});
    border-radius:8px;
    background-repeat: no-repeat;
    background-size: 32px 32px;
`;

export const StyleDivTextContainer = styled.div`
    background-color:#F4F5FA;
    border-radius:8px;
    border: 0px solid red;
    height:32px;
    width:137px;
    padding-top:4px;

   
    
`;
