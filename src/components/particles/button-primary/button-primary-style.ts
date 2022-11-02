import styled from "styled-components";
import { THEME } from "contants";

type ListButtonStyle = {
    tamanho?: string;
}


export const StyledButton = styled.button<ListButtonStyle>`
    width: 100%;
    width: ${(props)=> props.tamanho};
    height: 58px;
    border-radius:6px;
    border: none;
    size: 16px;
    background-color: ${THEME.light.colors.primary2};
    color:#FFF;
    font-weight: 600;
    font-family: 'Poppins', sans-serif;
    cursor: pointer;
`;