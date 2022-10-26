import styled from "styled-components";
import {THEME} from "contants";

export const StyledInput = styled.input`
  height: 54px;
  width: 410px;
  border-radius: 6px;
  padding: 18px 16px 19px 16px;
  border: 1px solid #DCDDE3;
  box-sizing: border-box;

  &:focus{
    outline: none;
    background: #FFFFFF;
    border: 1px solid #0092D4;
  }
`;

export const StyledEyeButton = styled.button<{ background: string }>`
  position:absolute;  
  left:370px;
  top:40px;
  height: 20px;
  width: 20px;
  color: ${THEME.light.colors.secondary3};
  border:none;
  background: ${({ background }) => background};
  cursor:pointer;
`;