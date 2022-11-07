import styled from "styled-components";

export const StyledInput = styled.input`
  height: 19px;
  width: 20px;
  border-radius: 3px;
  margin-top:-1.2px;

  &:focus{
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
// type PropsStyledDivSubContainer = {
// 	marginLeft?:string;
// };
//   export const StyledDivSubContainer = styled.div`
//   align-items: center;
//   display: inline-flex;
//   align-content: center;
// `;


// export const StyledDivContainer = styled.div`
//   /* background-color: blue; */
//   /* color: #e1e1e1; */
//   // border: 1px solid red;
//   margin-top: -10px;
//   height: 40px;
//   width: 400px;
//   display: inline-flex;
//   justify-content: space-Between;
//   align-content: center;
//   // gap: 150px;
// `;

export const StyledDivSubContainer = styled.div`
  display: inline-flex;
  align-items: flex-start;
`;