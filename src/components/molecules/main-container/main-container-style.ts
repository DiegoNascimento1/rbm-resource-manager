import styled from "styled-components";
import {THEME} from "contants";

export const MainContainer = styled.main`
  display:flex;
  background-color: ${THEME.light.colors.background_login};
  padding:105px 140px 180px 140px;
  gap:225.26px;

  @media screen and (max-width: 768px) { flex-direction:column}
 
`;