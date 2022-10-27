import styled from "styled-components";
import {THEME} from "contants";

export const StyledUlListRow = styled.ul`
    display: flex;
    flex-direction: column;
    gap: 11px;
    height: 30px;
    min-width: 240px;
    color: #46494B;
    font-size: 18px;
    font-weight: 400;

    li:before{
        content: "🚀 ";
    }
`;

export const StyledListRow = styled.li`
    height: 20px;
    list-style: none;
`