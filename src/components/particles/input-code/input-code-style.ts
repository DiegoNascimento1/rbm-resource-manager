import styled from "styled-components";

export const StyledDivInputCode = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    gap: 16px;
`

export const StyledInputCode = styled.input`
    text-align: center;
    height: 50px;
    width: 50px;
    border: 1px solid #CED4DA;
    border-radius: 8px;
    color: #262424;
    outline: none;
    &:focus{
        border: 1px solid #CED4DA;
    }
    ::placeholder{
        align-self: center;
        opacity:.4;
    }
`