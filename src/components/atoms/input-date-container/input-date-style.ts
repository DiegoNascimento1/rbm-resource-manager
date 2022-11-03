import { type } from "os";
import styled from "styled-components";

type InputProps = {
  type: string;
};

export const StyledDivInputDate = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  width: 410px;
  margin:9px 0px 9px 0px;
`;

export const StyledInputDate = styled.input<InputProps>`
  height: 54px;
  width: 410px;
  border-radius: 6px;
  padding: 18px 16px 19px 16px;
  border: 1px solid #dcdde3;
  box-sizing: border-box;
  font-size: 14px;
  font-weight: 400;

  &:focus {
    outline: none;
    background: #ffffff;
    border: 1px solid #0092d4;
  }
`;
