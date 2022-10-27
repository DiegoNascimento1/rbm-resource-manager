import styled from "styled-components";
import {THEME} from "contants";

export const StyledDiv = styled.div`
  // background-color: red;
  color: #e1e1e1;
  // border: 1px solid red;
  height: 50px;
  width: 400px;
  display: inline-flex;
  justify-content: space-Between;
  align-content: center;
  // gap: 150px;
`;

export const StyledLabel = styled.label`
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 21px;
  color: ${THEME.light.colors.secondary3};
`;


