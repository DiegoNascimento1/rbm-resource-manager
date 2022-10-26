import styled, { css } from "styled-components";

type AlertDivProps = {
  alert ?: boolean;
  danger ?: boolean;
  sucess ?: boolean;
  info ?: boolean;
  bell ?: boolean;
}

const StyledAlert = css`
  color:#E77C40;
  background-color: #FFF6EF;
  button {
    color:#E77C40;
    border-color: #E77C40;
  }
`
const StyledDanger = css`
  color:#DF1E1E;
  background-color: #FFDEDE;
  button {
    color:#DF1E1E;
    border-color: #DF1E1E;
  }
`
const StyledSucess = css`
  color:#76D8A3;
  background-color: #F2FFF7;

  button {
    color:#76D8A3;
    border-color: #76D8A3;
  }
`
const StyledInfo = css`
  color:#D0D0D0;
  background-color: #F3F3F3;
  button {
    color:#D0D0D0;
    border-color: #D0D0D0;
  }
`
const StyledBell = css`
  color:#23A6F0;
  background-color: #F8FAFF;
  button {
    color:#23A6F0;
    border-color: #23A6F0;
  }
`


export const StyledAlertDiv = styled.div<AlertDivProps>`
  display: flex;
  height: 58px;
  width: 410px;
  border: 1px solid ${(props) => props.color};
  align-items: center;
  padding: 0px 23px 0px 0px;
  ${({alert})   => alert && StyledAlert}; 
  ${({danger})  => danger && StyledDanger};
  ${({sucess})  => sucess && StyledSucess}; 
  ${({info})    => info && StyledInfo}; 
  ${({bell})    => bell && StyledBell}; 
`;
