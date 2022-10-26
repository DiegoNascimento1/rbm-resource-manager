import { LogoProps } from './logo-index';
import styled from "styled-components";

export const Img = styled.img<LogoProps>`
    padding: ${({padding}) => padding ?? "20px 0 0 45px"};
    margin: ${({margin}) => margin ?? "0"};
`;