import styled from "styled-components";
import GeraldoFerreira from "../../../assets/svgs/GeraldoFerreira.png";

export const StyleDivPhotoAndText = styled.div`
    background-color:transparent;
    display: inline-flex;
    width:179px;
    height:52px;
    margin:5px;
    align-items:center;
    justify-content: flex-end;
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
    padding-top:6px;
    text-align:center;
`;