import styled from "styled-components";
import {THEME} from "contants";

export const StyledInput = styled.input`
  height: 54px;
  width: 410px;
  border-radius: 6px;
  padding: 18px 16px 19px 16px;
  border: 1px solid #DCDDE3;
  box-sizing: border-box;
  font-size: 14px;
  font-weight: 400;
  /* line-height: 17px; */

  &:focus{
    outline: none;
    background: #FFFFFF;
    border: 1px solid #0092D4;
  }
`;

export const StyledEyeButton = styled.button<{ background: string }>`
  position:relative;  
  left:370px;
  top:-68px;
  height: 20px;
  width: 20px;
  color: ${THEME.light.colors.secondary3};
  border:none;
  background: ${({ background }) => background};
  cursor:pointer;
`;