import styled from "styled-components";
import {THEME} from "contants";

type propsStyledLinkA = {
  href:string;
  color?: string;
}

export const StyledLinkA = styled.a`
  text-decoration: underline;
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 21px;
  color: ${(props) => props.color};

  &:hover{
      cursor: pointer;
      color: ${THEME.light.colors.primary2}; 
    }
`;