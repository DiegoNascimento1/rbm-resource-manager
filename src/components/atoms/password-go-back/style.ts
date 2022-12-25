import styled from "styled-components";


export const StyledDivGoBack = styled.div`
  /* border: 1px solid red; */
  border-radius: 50%;
  /* background-color: red; */
  position: absolute;
  top: 0px;
  left: 0px;
  box-shadow: 1px 1px 10px blue;
  margin-left:30px;
  margin-top:30px;
  width: inherit;
  height: inherit;

 :hover{
  cursor: pointer;
  transform:scale(1.1);
 }

  ::before{
    /* content: "X"; */
  }
`;