import styled, { css } from "styled-components";
import { THEME } from "contants";

type ListButtonStyle = {
    tamanho?: string;
    dark?: boolean;
    light?: boolean;
    gray?: boolean;
}

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
`;