import styled from "styled-components";
import {THEME} from "contants";

export const StyledUlListColumn = styled.ul`
    display: flex;
    flex-direction: row;
    gap: 30px;
    height: 30px;
    min-width: 500px;
    color: #0092D4;
    font-size: 18px;
    font-weight: 500;

    li:nth-child(1){
        list-style: none;
    }
`;

export const StyledListColumn = styled.li`
    height: 20px;
`