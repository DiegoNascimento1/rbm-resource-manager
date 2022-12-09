import { THEME } from "contants";
import styled from "styled-components";

type StyledInputPersonalizedType = {
  statusError?: boolean;
}

export const StyledInputPersonalized = styled.input<StyledInputPersonalizedType>`
 /* border: 1px solid #CED4DA; */
 border: 1px solid ${(props) => props.statusError ? "red" : "#CED4DA"};
 border-radius: 8px;
 width: 54.84px;
 height: 54px;
 align-items: center;
 color:${THEME.light.colors.secondary3};
 text-align: center;
 font-size: 14px;
 box-sizing: border-box;
 
 &:hover{
  /* tirei mas vou deixar aqui ainda */
    /* cursor: pointer; */
    /* border: 2px solid ${THEME.light.colors.primary3}; */
  }

  &:focus{
    outline: none;
    background: #FFFFFF;
    border: 1px solid ${(props) => props.statusError ? "red" : THEME.light.colors.primary3};
  }

  ::placeholder{
    text-align: center;
    opacity:.4;
    color: ${THEME.light.colors.secondary3};
    font-size:14px;
    }
`;

export const StyledDivContainer = styled.div`
    display: flex;
    width: 410px;
    justify-content: space-between;
    
`;