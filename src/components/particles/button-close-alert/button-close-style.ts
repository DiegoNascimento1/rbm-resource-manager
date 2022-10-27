import styled, { css } from "styled-components";

type ButtonProps = {
    alert ?: boolean;
    danger ?: boolean;
    sucess ?: boolean;
    info ?: boolean;
    bell ?: boolean;
}

const StyledAlert = css`
  color:#E77C40;
  border-color: #E77C40;
`
const StyledDanger = css`
  color:#DF1E1E;
  border-color: #DF1E1E;
`
const StyledSucess = css`
  
`
const StyledInfo = css`
  color:#D0D0D0;
  border-color: #D0D0D0;
`
const StyledBell = css`
  color:#23A6F0;
  border-color: #23A6F0;
`

export const StyledButtonAlert = styled.button<ButtonProps>`
    display: flex;
	  height: 16px;
    width: 16px;
    background-color: transparent;
    border-radius:100%;
    border-style: solid;
    align-items: center;
    padding-top: 0px;
    justify-content: center;
    cursor: pointer;
    ${({alert})   => alert && StyledAlert}; 
    ${({danger})  => danger && StyledDanger};
    ${({sucess})  => sucess && StyledSucess}; 
    ${({info})    => info && StyledInfo}; 
    ${({bell})    => bell && StyledBell}; 

`;
