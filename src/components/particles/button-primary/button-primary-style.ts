import styled from "styled-components";
import {THEME} from "contants";

export const StyledButton = styled.button`
    width: 410px;
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