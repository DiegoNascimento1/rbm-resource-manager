import styled from "styled-components";
import {THEME} from "contants";

export const StyledAChecked = styled.a`
text-decoration: underline;
font-family: 'Poppins';
font-style: normal;
font-weight: 500;
font-size: 14px;
line-height: 21px;
color: ${THEME.light.colors.secondary3};

a:focus{
    cursor: pointer;
    color: red:
  }

`;