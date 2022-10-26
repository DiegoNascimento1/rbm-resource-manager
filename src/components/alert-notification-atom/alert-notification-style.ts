import styled from "styled-components";

export const StyledAlertDiv = styled.div<{ color: string, backgroundColor: string }>`
  display: flex;
  background-color:${(props) => props.backgroundColor};
  color: ${(props) => props.color};
  height: 58px;
  width: 410px;
  border: 1px solid ${(props) => props.color};
  align-items: center;
  flex-direction: row-reverse;
  padding: 0px 23px 0px 0px;

`;
