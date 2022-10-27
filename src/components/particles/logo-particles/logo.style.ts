import { LogoProps } from './logo-index';
import styled from "styled-components";

export const Img = styled.img<LogoProps>`
    padding: ${({padding}) => padding ?? padding};
    margin: ${({margin}) => margin ?? "0"};
`;

