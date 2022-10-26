import styled from "styled-components";


export const StyledButtonAlert = styled.button<{color:string}>`
    display: flex;
	height: 16px;
    width: 16px;
    background-color: transparent;
    color: ${(props)=>props.color};
    border-color: ${(props)=>props.color};
    border-radius:100%;
    border-style: solid;
    align-items: center;
    justify-content: center;
    cursor: pointer;

`;
