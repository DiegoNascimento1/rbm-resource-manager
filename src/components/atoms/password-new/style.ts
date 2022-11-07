import styled from "styled-components";
import {THEME} from "contants";

// **** criadas ****

// container principal
export const StyledDivContainer = styled.div`
  /* background-color: blue; */
  /* color: #e1e1e1; */
  /* border: 1px solid red; */
  margin-top: -10px;
  height: 28px;
  width: 400px;
  display: inline-flex;
  justify-content: flex-start;
  align-content: center;
  line-height: 16.4px;
  // gap: 150px;
`;
type PropsStyledDivSubContainer = {
	marginLeft?:string;
};
export const StyledDivSubContainer = styled.div<PropsStyledDivSubContainer>`
  align-items: center;
  display: inline-flex;
  align-content: center;
  margin-left: ${(props) => props.marginLeft};;
  /* align-items: flex-start; */
`;