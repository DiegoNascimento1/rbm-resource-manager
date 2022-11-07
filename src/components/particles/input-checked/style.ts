import styled from "styled-components";

export const StyledInput = styled.input`
  height: 19px;
  width: 20px;
  border-radius: 3px;
  margin-top:-1.2px;
  &:hover{
    cursor: pointer;
  }
`;

export const StyledDivContainer = styled.div`
  /* border: 1px solid blue; */
  /* margin-top: -10px; */
  height: 28px;
  width:100%;
  display: inline-flex;
  justify-content: space-Between;
  align-content: center;
  line-height: 16.4px;
  cursor: pointer;
 `;

export const StyledDivSubContainer = styled.div`
  display: inline-flex;
  align-items: flex-start;
`;