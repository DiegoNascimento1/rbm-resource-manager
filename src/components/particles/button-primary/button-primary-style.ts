import styled, { css } from "styled-components";
import { THEME } from "contants";

type ListButtonStyle = {
    tamanho?: string;
    dark?: boolean;
    light?: boolean;
    gray?: boolean;
    reserve ?: boolean;
    reserved ?: boolean;
}

const StyledReserve = css`
    width: 94px;
    height: 24px;

    background-color: #2AB451;
    color:#FFF;
    
    font-weight: 500;
    font-size: 12px;
`
const StyledReserved = css`
    width: 94px;
    height: 24px;

    background-color:#909194;
    color:#FFF;
    
    font-weight: 500;
    font-size: 12px;

    cursor: auto;
`

const StyledLight = css`
    background-color: ${THEME.light.colors.primary2};
    color:#FFF;
`
const StyledDark = css`
    background-color: ${THEME.dark.colors.primary2};
    color:#FFF;
`
const StyledGray = css`
    background-color: #F1F3F9;
    border: 1px solid #DCDCDC;
    color:  #262424;
`


export const StyledButton = styled.button<ListButtonStyle>`
    width: 100%;
    width: ${(props)=> props.tamanho};
    height: 58px;
    border-radius:6px;
    border: none;
    size: 16px;
    
    font-weight: 600;
    font-family: 'Poppins', sans-serif;
    cursor: pointer;
    ${({dark})=> dark && StyledDark}
    ${({light})=> light && StyledLight}
    ${({gray})=> gray && StyledGray}
    ${({reserve})=> reserve && StyledReserve}
    ${({reserved})=> reserved && StyledReserved}
`;