import styled from "styled-components";
import {THEME} from "contants";

export const StyledDivContainer = styled.div`
  /* border: 1px solid blue; */
  margin-top: -10px;
  height: 28px;
  width: 400px;
  display: flex;
  line-height: 16.4px;
`;
type PropsStyledDivSubContainer = {
	marginLeft?:string;
  gap?:string;
  alignText?:  "Left"| "Center";
};
export const StyledDivSubContainer = styled.div<PropsStyledDivSubContainer>`
/* border: 1px solid red; */
  display: inline-flex;
  align-items: center;
  justify-content: flex-end;
  margin-left: ${(props) => props.marginLeft ? props.marginLeft : "0px"};
  margin: auto ${(props) => props.alignText === "Center" ? "" : 0};
  gap: ${(props) => props.gap ? props.gap : "0px"};
`;