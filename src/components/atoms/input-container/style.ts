import styled from "styled-components";
import {THEME} from "contants";

export const StyledInputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  width: 410px;
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


