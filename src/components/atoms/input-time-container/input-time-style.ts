import { type } from "os";
import styled from "styled-components";


export const StyledDivInputTime = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  width: 410px;
  margin:9px 0px 9px 0px;
`;

export const StyledInputTime = styled.input`
  height: 54px;
  width: 120px;
  border-radius: 6px;
  padding: 18px 16px 19px 16px;
  border: none;
  box-sizing: border-box;
  font-size: 14px;
  font-weight: 400;

  &:focus {
    outline: none;
    background: #ffffff;
    border: none;
  }
`;

export const StyledDivTime = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  border: 1px solid rgb(0,0,0,0.1);
  border-radius: 6px;
`