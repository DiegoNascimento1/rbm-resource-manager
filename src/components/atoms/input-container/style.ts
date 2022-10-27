import styled from "styled-components";
import {THEME} from "contants";

export const StyledInputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  width: 410px;
  /* border: 1px solid red; */
  margin:20px 20px 0px 20px;
`;

export const StyledLabel = styled.label`
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 21px;
  color: ${THEME.light.colors.secondary3};
`;

//color: ${({theme})=>theme.colors.secondary3};

export const StyledEyeButton = styled.button<{ background: string }>`
  position:absolute;  
  left:370px;
  top:40px;
  height: 20px;
  width: 20px;
  color: ${THEME.light.colors.secondary3};
  border:none;
  background: ${({ background }) => background};
`;


