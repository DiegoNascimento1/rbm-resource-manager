import styled from "styled-components";

type StyledImageProps = {
    rotate: string;
};

export const StyledImage = styled.img<StyledImageProps>`
    rotate: ${(props) => props.rotate};;  
    padding: 10px;
    padding-top: 5px;
    padding-right:10px;
    padding-left:15px;
`;