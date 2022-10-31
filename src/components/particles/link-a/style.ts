import styled from "styled-components";
import {THEME} from "contants";

type propsStyledLinkA = {
  href:string;
}

export const StyledLinkA = styled.a.attrs((props: propsStyledLinkA) => ({
    href: props.href,
    target:"_blank"
  }))`
  text-decoration: underline;
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 21px;
  color: ${THEME.light.colors.secondary3};

  &:hover{
      cursor: pointer;
      color: ${THEME.light.colors.primary2}; 
    }
`;