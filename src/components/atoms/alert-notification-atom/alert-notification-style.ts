import styled, { css } from "styled-components";

type AlertDivProps = {
  alert ?: boolean;
  danger ?: boolean;
  sucess ?: boolean;
  info ?: boolean;
  bell ?: boolean;
  display ?: string;
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
  color:#252B42;
  background-color: #F3F3F3;
  button {
    color:#6B6B6B;;
    border-color: #6B6B6B;;
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
  display: ${(props)=> props.display};
  flex-direction: row;
  height: 58px;
  width: 410px;
  margin-left: 100px;
  border: 1px solid ${(props) => props.color};
  align-items: center;
  padding: 0px 23px 0px 23px;
  ${({alert})   => alert && StyledAlert}; 
  ${({danger})  => danger && StyledDanger};
  ${({sucess})  => sucess && StyledSucess}; 
  ${({info})    => info && StyledInfo}; 
  ${({bell})    => bell && StyledBell};
  animation: fade-top 1s linear;

  @keyframes fade-top {
    0%{
        opacity: 0;
    }
    50%{
        opacity: 0.5;
    }
    100%{
        opacity: 1;
    }
  }

  p{
    position: relative;
    margin-left: 15px;
  }
  button{
    position: relative;
    left: 200px;
  }
`;
